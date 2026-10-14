// Kintex PCIe board
// Source: https://github.com/piotr-binkowski/kintex-pcie-board
// Commit: 056792c009a8920d4ef11e76ba3284ee58376078; license: Apache-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
// R16: 3K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R16" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R10: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R10" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// J4: B2B_RX; Connector_PinSocket_2.54mm:PinSocket_1x04_P2.54mm_Vertical
export const Footprint_J4 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-5.08mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin4"]} pcbX="0mm" pcbY="-7.62mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>






<fabricationnotepath route={[{ "x": 1.27, "y": 0.635 }, { "x": 1.27, "y": -8.89 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -8.89 }, { "x": -1.27, "y": -8.89 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -8.89 }, { "x": -1.27, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": 1.27 }, { "x": 0.635, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 1.27 }, { "x": 1.27, "y": 0.635 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-3.81} anchorAlignment="center" text="J4" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": -9.4 }, { "x": -1.8, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -9.4 }, { "x": -1.8, "y": -9.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": 1.8 }, { "x": 1.75, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.8 }, { "x": 1.75, "y": -9.4 }]} layer="top"/>
      </footprint>);
// JP2: JTAG; Connector_PinHeader_2.54mm:PinHeader_1x06_P2.54mm_Vertical
export const Footprint_JP2 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-5.08mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin4"]} pcbX="0mm" pcbY="-7.62mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin5"]} pcbX="0mm" pcbY="-10.16mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin6"]} pcbX="0mm" pcbY="-12.7mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>






<fabricationnotepath route={[{ "x": -0.635, "y": 1.27 }, { "x": 1.27, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": 0.635 }, { "x": -0.635, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 1.27 }, { "x": 1.27, "y": -13.97 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -13.97 }, { "x": -1.27, "y": -13.97 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -13.97 }, { "x": -1.27, "y": 0.635 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={2.65} anchorAlignment="center" text="JTAG" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={-6.35} anchorAlignment="center" text="JP2" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.8 }, { "x": -1.8, "y": -14.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": -14.5 }, { "x": 1.8, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": 1.8 }, { "x": -1.8, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -14.5 }, { "x": 1.8, "y": -14.5 }]} layer="top"/>
      </footprint>);
// R24: 3K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R24" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R14: 3K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R14" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// D13: RLED; LED_SMD:LED_0603_1608Metric
export const Footprint_D13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D13" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// U6: TPD4E02B04DQAR; easyeda2kicad:USON-10_L2.5-W1.0-P0.50-BL
export const Footprint_U6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="-0.41mm" layer="top" width="0.25mm" height="0.61mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.5mm" pcbY="-0.41mm" layer="top" width="0.25mm" height="0.61mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0mm" pcbY="-0.41mm" layer="top" width="0.38mm" height="0.61mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="0.5mm" pcbY="-0.41mm" layer="top" width="0.25mm" height="0.61mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="1mm" pcbY="-0.41mm" layer="top" width="0.25mm" height="0.61mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="1mm" pcbY="0.41mm" layer="top" width="0.25mm" height="0.61mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="0.5mm" pcbY="0.41mm" layer="top" width="0.25mm" height="0.61mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="0mm" pcbY="0.41mm" layer="top" width="0.38mm" height="0.61mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="-0.5mm" pcbY="0.41mm" layer="top" width="0.25mm" height="0.61mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="-1mm" pcbY="0.41mm" layer="top" width="0.25mm" height="0.61mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -1.22, "y": -0.5 }, { "x": -1.222284, "y": -0.488519 }, { "x": -1.228787, "y": -0.478787 }, { "x": -1.238519, "y": -0.472284 }, { "x": -1.25, "y": -0.47 }, { "x": -1.261481, "y": -0.472284 }, { "x": -1.271213, "y": -0.478787 }, { "x": -1.277716, "y": -0.488519 }, { "x": -1.28, "y": -0.5 }, { "x": -1.277716, "y": -0.511481 }, { "x": -1.271213, "y": -0.521213 }, { "x": -1.261481, "y": -0.527716 }, { "x": -1.25, "y": -0.53 }, { "x": -1.238519, "y": -0.527716 }, { "x": -1.228787, "y": -0.521213 }, { "x": -1.222284, "y": -0.511481 }, { "x": -1.22, "y": -0.5 }]} strokeWidth={0.06}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U6" font="tscircuit2024" fontSize={1}/>

      </footprint>);
// D10: RLED; LED_SMD:LED_0603_1608Metric
export const Footprint_D10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D10" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// J3: B2B_TX; Connector_PinSocket_2.54mm:PinSocket_1x04_P2.54mm_Vertical
export const Footprint_J3 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-5.08mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin4"]} pcbX="0mm" pcbY="-7.62mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>






<fabricationnotepath route={[{ "x": -1.27, "y": 1.27 }, { "x": 0.635, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -8.89 }, { "x": -1.27, "y": -8.89 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 0.635 }, { "x": 1.27, "y": -8.89 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -8.89 }, { "x": -1.27, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 1.27 }, { "x": 1.27, "y": 0.635 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-3.81} anchorAlignment="center" text="J3" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.8 }, { "x": 1.75, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -9.4 }, { "x": -1.8, "y": -9.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -9.4 }, { "x": -1.8, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.8 }, { "x": 1.75, "y": -9.4 }]} layer="top"/>
      </footprint>);
// R15: 15K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R15" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// U7: TPD4E02B04DQAR; easyeda2kicad:USON-10_L2.5-W1.0-P0.50-BL
export const Footprint_U7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="-0.41mm" layer="top" width="0.25mm" height="0.61mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.5mm" pcbY="-0.41mm" layer="top" width="0.25mm" height="0.61mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0mm" pcbY="-0.41mm" layer="top" width="0.38mm" height="0.61mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="0.5mm" pcbY="-0.41mm" layer="top" width="0.25mm" height="0.61mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="1mm" pcbY="-0.41mm" layer="top" width="0.25mm" height="0.61mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="1mm" pcbY="0.41mm" layer="top" width="0.25mm" height="0.61mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="0.5mm" pcbY="0.41mm" layer="top" width="0.25mm" height="0.61mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="0mm" pcbY="0.41mm" layer="top" width="0.38mm" height="0.61mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="-0.5mm" pcbY="0.41mm" layer="top" width="0.25mm" height="0.61mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="-1mm" pcbY="0.41mm" layer="top" width="0.25mm" height="0.61mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -1.22, "y": -0.5 }, { "x": -1.222284, "y": -0.488519 }, { "x": -1.228787, "y": -0.478787 }, { "x": -1.238519, "y": -0.472284 }, { "x": -1.25, "y": -0.47 }, { "x": -1.261481, "y": -0.472284 }, { "x": -1.271213, "y": -0.478787 }, { "x": -1.277716, "y": -0.488519 }, { "x": -1.28, "y": -0.5 }, { "x": -1.277716, "y": -0.511481 }, { "x": -1.271213, "y": -0.521213 }, { "x": -1.261481, "y": -0.527716 }, { "x": -1.25, "y": -0.53 }, { "x": -1.238519, "y": -0.527716 }, { "x": -1.228787, "y": -0.521213 }, { "x": -1.222284, "y": -0.511481 }, { "x": -1.22, "y": -0.5 }]} strokeWidth={0.06}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U7" font="tscircuit2024" fontSize={1}/>

      </footprint>);
// U1: XC7K160T-FFG676; Package_BGA:Xilinx_FFG676
export const Footprint_U1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-12.5mm" pcbY="12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin2"]} pcbX="-11.5mm" pcbY="12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin3"]} pcbX="-10.5mm" pcbY="12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin4"]} pcbX="-9.5mm" pcbY="12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin5"]} pcbX="-8.5mm" pcbY="12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin6"]} pcbX="-7.5mm" pcbY="12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin7"]} pcbX="-6.5mm" pcbY="12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin8"]} pcbX="-5.5mm" pcbY="12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin9"]} pcbX="-4.5mm" pcbY="12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin10"]} pcbX="-3.5mm" pcbY="12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin11"]} pcbX="-2.5mm" pcbY="12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin12"]} pcbX="-1.5mm" pcbY="12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin13"]} pcbX="-0.5mm" pcbY="12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin14"]} pcbX="0.5mm" pcbY="12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin15"]} pcbX="1.5mm" pcbY="12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin16"]} pcbX="2.5mm" pcbY="12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin17"]} pcbX="3.5mm" pcbY="12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin18"]} pcbX="4.5mm" pcbY="12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin19"]} pcbX="5.5mm" pcbY="12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin20"]} pcbX="6.5mm" pcbY="12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin21"]} pcbX="7.5mm" pcbY="12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin22"]} pcbX="8.5mm" pcbY="12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin23"]} pcbX="9.5mm" pcbY="12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin24"]} pcbX="10.5mm" pcbY="12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin25"]} pcbX="11.5mm" pcbY="12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin26"]} pcbX="12.5mm" pcbY="12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin27"]} pcbX="-12.5mm" pcbY="-7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin28"]} pcbX="-11.5mm" pcbY="-7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin29"]} pcbX="-10.5mm" pcbY="-7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin30"]} pcbX="-9.5mm" pcbY="-7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin31"]} pcbX="-8.5mm" pcbY="-7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin32"]} pcbX="-7.5mm" pcbY="-7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin33"]} pcbX="-6.5mm" pcbY="-7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin34"]} pcbX="-5.5mm" pcbY="-7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin35"]} pcbX="-4.5mm" pcbY="-7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin36"]} pcbX="-3.5mm" pcbY="-7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin37"]} pcbX="-2.5mm" pcbY="-7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin38"]} pcbX="-1.5mm" pcbY="-7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin39"]} pcbX="-0.5mm" pcbY="-7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin40"]} pcbX="0.5mm" pcbY="-7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin41"]} pcbX="1.5mm" pcbY="-7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin42"]} pcbX="2.5mm" pcbY="-7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin43"]} pcbX="3.5mm" pcbY="-7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin44"]} pcbX="4.5mm" pcbY="-7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin45"]} pcbX="5.5mm" pcbY="-7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin46"]} pcbX="6.5mm" pcbY="-7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin47"]} pcbX="7.5mm" pcbY="-7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin48"]} pcbX="8.5mm" pcbY="-7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin49"]} pcbX="9.5mm" pcbY="-7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin50"]} pcbX="10.5mm" pcbY="-7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin51"]} pcbX="11.5mm" pcbY="-7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin52"]} pcbX="12.5mm" pcbY="-7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin53"]} pcbX="-12.5mm" pcbY="-8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin54"]} pcbX="-11.5mm" pcbY="-8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin55"]} pcbX="-10.5mm" pcbY="-8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin56"]} pcbX="-9.5mm" pcbY="-8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin57"]} pcbX="-8.5mm" pcbY="-8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin58"]} pcbX="-7.5mm" pcbY="-8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin59"]} pcbX="-6.5mm" pcbY="-8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin60"]} pcbX="-5.5mm" pcbY="-8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin61"]} pcbX="-4.5mm" pcbY="-8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin62"]} pcbX="-3.5mm" pcbY="-8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin63"]} pcbX="-2.5mm" pcbY="-8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin64"]} pcbX="-1.5mm" pcbY="-8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin65"]} pcbX="-0.5mm" pcbY="-8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin66"]} pcbX="0.5mm" pcbY="-8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin67"]} pcbX="1.5mm" pcbY="-8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin68"]} pcbX="2.5mm" pcbY="-8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin69"]} pcbX="3.5mm" pcbY="-8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin70"]} pcbX="4.5mm" pcbY="-8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin71"]} pcbX="5.5mm" pcbY="-8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin72"]} pcbX="6.5mm" pcbY="-8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin73"]} pcbX="7.5mm" pcbY="-8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin74"]} pcbX="8.5mm" pcbY="-8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin75"]} pcbX="9.5mm" pcbY="-8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin76"]} pcbX="10.5mm" pcbY="-8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin77"]} pcbX="11.5mm" pcbY="-8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin78"]} pcbX="12.5mm" pcbY="-8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin79"]} pcbX="-12.5mm" pcbY="-9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin80"]} pcbX="-11.5mm" pcbY="-9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin81"]} pcbX="-10.5mm" pcbY="-9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin82"]} pcbX="-9.5mm" pcbY="-9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin83"]} pcbX="-8.5mm" pcbY="-9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin84"]} pcbX="-7.5mm" pcbY="-9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin85"]} pcbX="-6.5mm" pcbY="-9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin86"]} pcbX="-5.5mm" pcbY="-9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin87"]} pcbX="-4.5mm" pcbY="-9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin88"]} pcbX="-3.5mm" pcbY="-9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin89"]} pcbX="-2.5mm" pcbY="-9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin90"]} pcbX="-1.5mm" pcbY="-9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin91"]} pcbX="-0.5mm" pcbY="-9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin92"]} pcbX="0.5mm" pcbY="-9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin93"]} pcbX="1.5mm" pcbY="-9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin94"]} pcbX="2.5mm" pcbY="-9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin95"]} pcbX="3.5mm" pcbY="-9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin96"]} pcbX="4.5mm" pcbY="-9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin97"]} pcbX="5.5mm" pcbY="-9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin98"]} pcbX="6.5mm" pcbY="-9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin99"]} pcbX="7.5mm" pcbY="-9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin100"]} pcbX="8.5mm" pcbY="-9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin101"]} pcbX="9.5mm" pcbY="-9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin102"]} pcbX="10.5mm" pcbY="-9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin103"]} pcbX="11.5mm" pcbY="-9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin104"]} pcbX="12.5mm" pcbY="-9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin105"]} pcbX="-12.5mm" pcbY="-10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin106"]} pcbX="-11.5mm" pcbY="-10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin107"]} pcbX="-10.5mm" pcbY="-10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin108"]} pcbX="-9.5mm" pcbY="-10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin109"]} pcbX="-8.5mm" pcbY="-10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin110"]} pcbX="-7.5mm" pcbY="-10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin111"]} pcbX="-6.5mm" pcbY="-10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin112"]} pcbX="-5.5mm" pcbY="-10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin113"]} pcbX="-4.5mm" pcbY="-10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin114"]} pcbX="-3.5mm" pcbY="-10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin115"]} pcbX="-2.5mm" pcbY="-10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin116"]} pcbX="-1.5mm" pcbY="-10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin117"]} pcbX="-0.5mm" pcbY="-10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin118"]} pcbX="0.5mm" pcbY="-10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin119"]} pcbX="1.5mm" pcbY="-10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin120"]} pcbX="2.5mm" pcbY="-10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin121"]} pcbX="3.5mm" pcbY="-10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin122"]} pcbX="4.5mm" pcbY="-10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin123"]} pcbX="5.5mm" pcbY="-10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin124"]} pcbX="6.5mm" pcbY="-10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin125"]} pcbX="7.5mm" pcbY="-10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin126"]} pcbX="8.5mm" pcbY="-10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin127"]} pcbX="9.5mm" pcbY="-10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin128"]} pcbX="10.5mm" pcbY="-10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin129"]} pcbX="11.5mm" pcbY="-10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin130"]} pcbX="12.5mm" pcbY="-10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin131"]} pcbX="-12.5mm" pcbY="-11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin132"]} pcbX="-11.5mm" pcbY="-11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin133"]} pcbX="-10.5mm" pcbY="-11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin134"]} pcbX="-9.5mm" pcbY="-11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin135"]} pcbX="-8.5mm" pcbY="-11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin136"]} pcbX="-7.5mm" pcbY="-11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin137"]} pcbX="-6.5mm" pcbY="-11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin138"]} pcbX="-5.5mm" pcbY="-11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin139"]} pcbX="-4.5mm" pcbY="-11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin140"]} pcbX="-3.5mm" pcbY="-11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin141"]} pcbX="-2.5mm" pcbY="-11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin142"]} pcbX="-1.5mm" pcbY="-11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin143"]} pcbX="-0.5mm" pcbY="-11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin144"]} pcbX="0.5mm" pcbY="-11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin145"]} pcbX="1.5mm" pcbY="-11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin146"]} pcbX="2.5mm" pcbY="-11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin147"]} pcbX="3.5mm" pcbY="-11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin148"]} pcbX="4.5mm" pcbY="-11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin149"]} pcbX="5.5mm" pcbY="-11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin150"]} pcbX="6.5mm" pcbY="-11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin151"]} pcbX="7.5mm" pcbY="-11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin152"]} pcbX="8.5mm" pcbY="-11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin153"]} pcbX="9.5mm" pcbY="-11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin154"]} pcbX="10.5mm" pcbY="-11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin155"]} pcbX="11.5mm" pcbY="-11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin156"]} pcbX="12.5mm" pcbY="-11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin157"]} pcbX="-12.5mm" pcbY="-12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin158"]} pcbX="-11.5mm" pcbY="-12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin159"]} pcbX="-10.5mm" pcbY="-12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin160"]} pcbX="-9.5mm" pcbY="-12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin161"]} pcbX="-8.5mm" pcbY="-12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin162"]} pcbX="-7.5mm" pcbY="-12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin163"]} pcbX="-6.5mm" pcbY="-12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin164"]} pcbX="-5.5mm" pcbY="-12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin165"]} pcbX="-4.5mm" pcbY="-12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin166"]} pcbX="-3.5mm" pcbY="-12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin167"]} pcbX="-2.5mm" pcbY="-12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin168"]} pcbX="-1.5mm" pcbY="-12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin169"]} pcbX="-0.5mm" pcbY="-12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin170"]} pcbX="0.5mm" pcbY="-12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin171"]} pcbX="1.5mm" pcbY="-12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin172"]} pcbX="2.5mm" pcbY="-12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin173"]} pcbX="3.5mm" pcbY="-12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin174"]} pcbX="4.5mm" pcbY="-12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin175"]} pcbX="5.5mm" pcbY="-12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin176"]} pcbX="6.5mm" pcbY="-12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin177"]} pcbX="7.5mm" pcbY="-12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin178"]} pcbX="8.5mm" pcbY="-12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin179"]} pcbX="9.5mm" pcbY="-12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin180"]} pcbX="10.5mm" pcbY="-12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin181"]} pcbX="11.5mm" pcbY="-12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin182"]} pcbX="12.5mm" pcbY="-12.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin183"]} pcbX="-12.5mm" pcbY="11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin184"]} pcbX="-11.5mm" pcbY="11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin185"]} pcbX="-10.5mm" pcbY="11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin186"]} pcbX="-9.5mm" pcbY="11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin187"]} pcbX="-8.5mm" pcbY="11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin188"]} pcbX="-7.5mm" pcbY="11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin189"]} pcbX="-6.5mm" pcbY="11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin190"]} pcbX="-5.5mm" pcbY="11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin191"]} pcbX="-4.5mm" pcbY="11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin192"]} pcbX="-3.5mm" pcbY="11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin193"]} pcbX="-2.5mm" pcbY="11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin194"]} pcbX="-1.5mm" pcbY="11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin195"]} pcbX="-0.5mm" pcbY="11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin196"]} pcbX="0.5mm" pcbY="11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin197"]} pcbX="1.5mm" pcbY="11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin198"]} pcbX="2.5mm" pcbY="11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin199"]} pcbX="3.5mm" pcbY="11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin200"]} pcbX="4.5mm" pcbY="11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin201"]} pcbX="5.5mm" pcbY="11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin202"]} pcbX="6.5mm" pcbY="11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin203"]} pcbX="7.5mm" pcbY="11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin204"]} pcbX="8.5mm" pcbY="11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin205"]} pcbX="9.5mm" pcbY="11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin206"]} pcbX="10.5mm" pcbY="11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin207"]} pcbX="11.5mm" pcbY="11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin208"]} pcbX="12.5mm" pcbY="11.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin209"]} pcbX="-12.5mm" pcbY="10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin210"]} pcbX="-11.5mm" pcbY="10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin211"]} pcbX="-10.5mm" pcbY="10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin212"]} pcbX="-9.5mm" pcbY="10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin213"]} pcbX="-8.5mm" pcbY="10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin214"]} pcbX="-7.5mm" pcbY="10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin215"]} pcbX="-6.5mm" pcbY="10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin216"]} pcbX="-5.5mm" pcbY="10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin217"]} pcbX="-4.5mm" pcbY="10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin218"]} pcbX="-3.5mm" pcbY="10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin219"]} pcbX="-2.5mm" pcbY="10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin220"]} pcbX="-1.5mm" pcbY="10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin221"]} pcbX="-0.5mm" pcbY="10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin222"]} pcbX="0.5mm" pcbY="10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin223"]} pcbX="1.5mm" pcbY="10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin224"]} pcbX="2.5mm" pcbY="10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin225"]} pcbX="3.5mm" pcbY="10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin226"]} pcbX="4.5mm" pcbY="10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin227"]} pcbX="5.5mm" pcbY="10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin228"]} pcbX="6.5mm" pcbY="10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin229"]} pcbX="7.5mm" pcbY="10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin230"]} pcbX="8.5mm" pcbY="10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin231"]} pcbX="9.5mm" pcbY="10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin232"]} pcbX="10.5mm" pcbY="10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin233"]} pcbX="11.5mm" pcbY="10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin234"]} pcbX="12.5mm" pcbY="10.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin235"]} pcbX="-12.5mm" pcbY="9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin236"]} pcbX="-11.5mm" pcbY="9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin237"]} pcbX="-10.5mm" pcbY="9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin238"]} pcbX="-9.5mm" pcbY="9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin239"]} pcbX="-8.5mm" pcbY="9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin240"]} pcbX="-7.5mm" pcbY="9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin241"]} pcbX="-6.5mm" pcbY="9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin242"]} pcbX="-5.5mm" pcbY="9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin243"]} pcbX="-4.5mm" pcbY="9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin244"]} pcbX="-3.5mm" pcbY="9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin245"]} pcbX="-2.5mm" pcbY="9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin246"]} pcbX="-1.5mm" pcbY="9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin247"]} pcbX="-0.5mm" pcbY="9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin248"]} pcbX="0.5mm" pcbY="9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin249"]} pcbX="1.5mm" pcbY="9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin250"]} pcbX="2.5mm" pcbY="9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin251"]} pcbX="3.5mm" pcbY="9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin252"]} pcbX="4.5mm" pcbY="9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin253"]} pcbX="5.5mm" pcbY="9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin254"]} pcbX="6.5mm" pcbY="9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin255"]} pcbX="7.5mm" pcbY="9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin256"]} pcbX="8.5mm" pcbY="9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin257"]} pcbX="9.5mm" pcbY="9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin258"]} pcbX="10.5mm" pcbY="9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin259"]} pcbX="11.5mm" pcbY="9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin260"]} pcbX="12.5mm" pcbY="9.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin261"]} pcbX="-12.5mm" pcbY="8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin262"]} pcbX="-11.5mm" pcbY="8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin263"]} pcbX="-10.5mm" pcbY="8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin264"]} pcbX="-9.5mm" pcbY="8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin265"]} pcbX="-8.5mm" pcbY="8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin266"]} pcbX="-7.5mm" pcbY="8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin267"]} pcbX="-6.5mm" pcbY="8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin268"]} pcbX="-5.5mm" pcbY="8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin269"]} pcbX="-4.5mm" pcbY="8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin270"]} pcbX="-3.5mm" pcbY="8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin271"]} pcbX="-2.5mm" pcbY="8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin272"]} pcbX="-1.5mm" pcbY="8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin273"]} pcbX="-0.5mm" pcbY="8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin274"]} pcbX="0.5mm" pcbY="8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin275"]} pcbX="1.5mm" pcbY="8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin276"]} pcbX="2.5mm" pcbY="8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin277"]} pcbX="3.5mm" pcbY="8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin278"]} pcbX="4.5mm" pcbY="8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin279"]} pcbX="5.5mm" pcbY="8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin280"]} pcbX="6.5mm" pcbY="8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin281"]} pcbX="7.5mm" pcbY="8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin282"]} pcbX="8.5mm" pcbY="8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin283"]} pcbX="9.5mm" pcbY="8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin284"]} pcbX="10.5mm" pcbY="8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin285"]} pcbX="11.5mm" pcbY="8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin286"]} pcbX="12.5mm" pcbY="8.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin287"]} pcbX="-12.5mm" pcbY="7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin288"]} pcbX="-11.5mm" pcbY="7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin289"]} pcbX="-10.5mm" pcbY="7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin290"]} pcbX="-9.5mm" pcbY="7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin291"]} pcbX="-8.5mm" pcbY="7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin292"]} pcbX="-7.5mm" pcbY="7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin293"]} pcbX="-6.5mm" pcbY="7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin294"]} pcbX="-5.5mm" pcbY="7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin295"]} pcbX="-4.5mm" pcbY="7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin296"]} pcbX="-3.5mm" pcbY="7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin297"]} pcbX="-2.5mm" pcbY="7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin298"]} pcbX="-1.5mm" pcbY="7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin299"]} pcbX="-0.5mm" pcbY="7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin300"]} pcbX="0.5mm" pcbY="7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin301"]} pcbX="1.5mm" pcbY="7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin302"]} pcbX="2.5mm" pcbY="7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin303"]} pcbX="3.5mm" pcbY="7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin304"]} pcbX="4.5mm" pcbY="7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin305"]} pcbX="5.5mm" pcbY="7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin306"]} pcbX="6.5mm" pcbY="7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin307"]} pcbX="7.5mm" pcbY="7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin308"]} pcbX="8.5mm" pcbY="7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin309"]} pcbX="9.5mm" pcbY="7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin310"]} pcbX="10.5mm" pcbY="7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin311"]} pcbX="11.5mm" pcbY="7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin312"]} pcbX="12.5mm" pcbY="7.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin313"]} pcbX="-12.5mm" pcbY="6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin314"]} pcbX="-11.5mm" pcbY="6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin315"]} pcbX="-10.5mm" pcbY="6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin316"]} pcbX="-9.5mm" pcbY="6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin317"]} pcbX="-8.5mm" pcbY="6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin318"]} pcbX="-7.5mm" pcbY="6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin319"]} pcbX="-6.5mm" pcbY="6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin320"]} pcbX="-5.5mm" pcbY="6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin321"]} pcbX="-4.5mm" pcbY="6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin322"]} pcbX="-3.5mm" pcbY="6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin323"]} pcbX="-2.5mm" pcbY="6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin324"]} pcbX="-1.5mm" pcbY="6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin325"]} pcbX="-0.5mm" pcbY="6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin326"]} pcbX="0.5mm" pcbY="6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin327"]} pcbX="1.5mm" pcbY="6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin328"]} pcbX="2.5mm" pcbY="6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin329"]} pcbX="3.5mm" pcbY="6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin330"]} pcbX="4.5mm" pcbY="6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin331"]} pcbX="5.5mm" pcbY="6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin332"]} pcbX="6.5mm" pcbY="6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin333"]} pcbX="7.5mm" pcbY="6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin334"]} pcbX="8.5mm" pcbY="6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin335"]} pcbX="9.5mm" pcbY="6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin336"]} pcbX="10.5mm" pcbY="6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin337"]} pcbX="11.5mm" pcbY="6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin338"]} pcbX="12.5mm" pcbY="6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin339"]} pcbX="-12.5mm" pcbY="5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin340"]} pcbX="-11.5mm" pcbY="5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin341"]} pcbX="-10.5mm" pcbY="5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin342"]} pcbX="-9.5mm" pcbY="5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin343"]} pcbX="-8.5mm" pcbY="5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin344"]} pcbX="-7.5mm" pcbY="5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin345"]} pcbX="-6.5mm" pcbY="5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin346"]} pcbX="-5.5mm" pcbY="5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin347"]} pcbX="-4.5mm" pcbY="5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin348"]} pcbX="-3.5mm" pcbY="5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin349"]} pcbX="-2.5mm" pcbY="5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin350"]} pcbX="-1.5mm" pcbY="5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin351"]} pcbX="-0.5mm" pcbY="5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin352"]} pcbX="0.5mm" pcbY="5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin353"]} pcbX="1.5mm" pcbY="5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin354"]} pcbX="2.5mm" pcbY="5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin355"]} pcbX="3.5mm" pcbY="5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin356"]} pcbX="4.5mm" pcbY="5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin357"]} pcbX="5.5mm" pcbY="5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin358"]} pcbX="6.5mm" pcbY="5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin359"]} pcbX="7.5mm" pcbY="5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin360"]} pcbX="8.5mm" pcbY="5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin361"]} pcbX="9.5mm" pcbY="5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin362"]} pcbX="10.5mm" pcbY="5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin363"]} pcbX="11.5mm" pcbY="5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin364"]} pcbX="12.5mm" pcbY="5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin365"]} pcbX="-12.5mm" pcbY="4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin366"]} pcbX="-11.5mm" pcbY="4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin367"]} pcbX="-10.5mm" pcbY="4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin368"]} pcbX="-9.5mm" pcbY="4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin369"]} pcbX="-8.5mm" pcbY="4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin370"]} pcbX="-7.5mm" pcbY="4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin371"]} pcbX="-6.5mm" pcbY="4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin372"]} pcbX="-5.5mm" pcbY="4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin373"]} pcbX="-4.5mm" pcbY="4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin374"]} pcbX="-3.5mm" pcbY="4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin375"]} pcbX="-2.5mm" pcbY="4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin376"]} pcbX="-1.5mm" pcbY="4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin377"]} pcbX="-0.5mm" pcbY="4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin378"]} pcbX="0.5mm" pcbY="4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin379"]} pcbX="1.5mm" pcbY="4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin380"]} pcbX="2.5mm" pcbY="4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin381"]} pcbX="3.5mm" pcbY="4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin382"]} pcbX="4.5mm" pcbY="4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin383"]} pcbX="5.5mm" pcbY="4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin384"]} pcbX="6.5mm" pcbY="4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin385"]} pcbX="7.5mm" pcbY="4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin386"]} pcbX="8.5mm" pcbY="4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin387"]} pcbX="9.5mm" pcbY="4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin388"]} pcbX="10.5mm" pcbY="4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin389"]} pcbX="11.5mm" pcbY="4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin390"]} pcbX="12.5mm" pcbY="4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin391"]} pcbX="-12.5mm" pcbY="3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin392"]} pcbX="-11.5mm" pcbY="3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin393"]} pcbX="-10.5mm" pcbY="3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin394"]} pcbX="-9.5mm" pcbY="3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin395"]} pcbX="-8.5mm" pcbY="3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin396"]} pcbX="-7.5mm" pcbY="3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin397"]} pcbX="-6.5mm" pcbY="3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin398"]} pcbX="-5.5mm" pcbY="3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin399"]} pcbX="-4.5mm" pcbY="3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin400"]} pcbX="-3.5mm" pcbY="3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin401"]} pcbX="-2.5mm" pcbY="3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin402"]} pcbX="-1.5mm" pcbY="3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin403"]} pcbX="-0.5mm" pcbY="3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin404"]} pcbX="0.5mm" pcbY="3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin405"]} pcbX="1.5mm" pcbY="3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin406"]} pcbX="2.5mm" pcbY="3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin407"]} pcbX="3.5mm" pcbY="3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin408"]} pcbX="4.5mm" pcbY="3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin409"]} pcbX="5.5mm" pcbY="3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin410"]} pcbX="6.5mm" pcbY="3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin411"]} pcbX="7.5mm" pcbY="3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin412"]} pcbX="8.5mm" pcbY="3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin413"]} pcbX="9.5mm" pcbY="3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin414"]} pcbX="10.5mm" pcbY="3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin415"]} pcbX="11.5mm" pcbY="3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin416"]} pcbX="12.5mm" pcbY="3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin417"]} pcbX="-12.5mm" pcbY="2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin418"]} pcbX="-11.5mm" pcbY="2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin419"]} pcbX="-10.5mm" pcbY="2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin420"]} pcbX="-9.5mm" pcbY="2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin421"]} pcbX="-8.5mm" pcbY="2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin422"]} pcbX="-7.5mm" pcbY="2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin423"]} pcbX="-6.5mm" pcbY="2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin424"]} pcbX="-5.5mm" pcbY="2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin425"]} pcbX="-4.5mm" pcbY="2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin426"]} pcbX="-3.5mm" pcbY="2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin427"]} pcbX="-2.5mm" pcbY="2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin428"]} pcbX="-1.5mm" pcbY="2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin429"]} pcbX="-0.5mm" pcbY="2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin430"]} pcbX="0.5mm" pcbY="2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin431"]} pcbX="1.5mm" pcbY="2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin432"]} pcbX="2.5mm" pcbY="2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin433"]} pcbX="3.5mm" pcbY="2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin434"]} pcbX="4.5mm" pcbY="2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin435"]} pcbX="5.5mm" pcbY="2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin436"]} pcbX="6.5mm" pcbY="2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin437"]} pcbX="7.5mm" pcbY="2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin438"]} pcbX="8.5mm" pcbY="2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin439"]} pcbX="9.5mm" pcbY="2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin440"]} pcbX="10.5mm" pcbY="2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin441"]} pcbX="11.5mm" pcbY="2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin442"]} pcbX="12.5mm" pcbY="2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin443"]} pcbX="-12.5mm" pcbY="1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin444"]} pcbX="-11.5mm" pcbY="1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin445"]} pcbX="-10.5mm" pcbY="1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin446"]} pcbX="-9.5mm" pcbY="1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin447"]} pcbX="-8.5mm" pcbY="1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin448"]} pcbX="-7.5mm" pcbY="1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin449"]} pcbX="-6.5mm" pcbY="1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin450"]} pcbX="-5.5mm" pcbY="1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin451"]} pcbX="-4.5mm" pcbY="1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin452"]} pcbX="-3.5mm" pcbY="1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin453"]} pcbX="-2.5mm" pcbY="1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin454"]} pcbX="-1.5mm" pcbY="1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin455"]} pcbX="-0.5mm" pcbY="1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin456"]} pcbX="0.5mm" pcbY="1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin457"]} pcbX="1.5mm" pcbY="1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin458"]} pcbX="2.5mm" pcbY="1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin459"]} pcbX="3.5mm" pcbY="1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin460"]} pcbX="4.5mm" pcbY="1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin461"]} pcbX="5.5mm" pcbY="1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin462"]} pcbX="6.5mm" pcbY="1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin463"]} pcbX="7.5mm" pcbY="1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin464"]} pcbX="8.5mm" pcbY="1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin465"]} pcbX="9.5mm" pcbY="1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin466"]} pcbX="10.5mm" pcbY="1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin467"]} pcbX="11.5mm" pcbY="1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin468"]} pcbX="12.5mm" pcbY="1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin469"]} pcbX="-12.5mm" pcbY="0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin470"]} pcbX="-11.5mm" pcbY="0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin471"]} pcbX="-10.5mm" pcbY="0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin472"]} pcbX="-9.5mm" pcbY="0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin473"]} pcbX="-8.5mm" pcbY="0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin474"]} pcbX="-7.5mm" pcbY="0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin475"]} pcbX="-6.5mm" pcbY="0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin476"]} pcbX="-5.5mm" pcbY="0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin477"]} pcbX="-4.5mm" pcbY="0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin478"]} pcbX="-3.5mm" pcbY="0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin479"]} pcbX="-2.5mm" pcbY="0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin480"]} pcbX="-1.5mm" pcbY="0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin481"]} pcbX="-0.5mm" pcbY="0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin482"]} pcbX="0.5mm" pcbY="0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin483"]} pcbX="1.5mm" pcbY="0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin484"]} pcbX="2.5mm" pcbY="0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin485"]} pcbX="3.5mm" pcbY="0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin486"]} pcbX="4.5mm" pcbY="0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin487"]} pcbX="5.5mm" pcbY="0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin488"]} pcbX="6.5mm" pcbY="0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin489"]} pcbX="7.5mm" pcbY="0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin490"]} pcbX="8.5mm" pcbY="0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin491"]} pcbX="9.5mm" pcbY="0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin492"]} pcbX="10.5mm" pcbY="0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin493"]} pcbX="11.5mm" pcbY="0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin494"]} pcbX="12.5mm" pcbY="0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin495"]} pcbX="-12.5mm" pcbY="-0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin496"]} pcbX="-11.5mm" pcbY="-0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin497"]} pcbX="-10.5mm" pcbY="-0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin498"]} pcbX="-9.5mm" pcbY="-0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin499"]} pcbX="-8.5mm" pcbY="-0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin500"]} pcbX="-7.5mm" pcbY="-0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin501"]} pcbX="-6.5mm" pcbY="-0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin502"]} pcbX="-5.5mm" pcbY="-0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin503"]} pcbX="-4.5mm" pcbY="-0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin504"]} pcbX="-3.5mm" pcbY="-0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin505"]} pcbX="-2.5mm" pcbY="-0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin506"]} pcbX="-1.5mm" pcbY="-0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin507"]} pcbX="-0.5mm" pcbY="-0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin508"]} pcbX="0.5mm" pcbY="-0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin509"]} pcbX="1.5mm" pcbY="-0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin510"]} pcbX="2.5mm" pcbY="-0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin511"]} pcbX="3.5mm" pcbY="-0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin512"]} pcbX="4.5mm" pcbY="-0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin513"]} pcbX="5.5mm" pcbY="-0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin514"]} pcbX="6.5mm" pcbY="-0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin515"]} pcbX="7.5mm" pcbY="-0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin516"]} pcbX="8.5mm" pcbY="-0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin517"]} pcbX="9.5mm" pcbY="-0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin518"]} pcbX="10.5mm" pcbY="-0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin519"]} pcbX="11.5mm" pcbY="-0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin520"]} pcbX="12.5mm" pcbY="-0.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin521"]} pcbX="-12.5mm" pcbY="-1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin522"]} pcbX="-11.5mm" pcbY="-1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin523"]} pcbX="-10.5mm" pcbY="-1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin524"]} pcbX="-9.5mm" pcbY="-1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin525"]} pcbX="-8.5mm" pcbY="-1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin526"]} pcbX="-7.5mm" pcbY="-1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin527"]} pcbX="-6.5mm" pcbY="-1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin528"]} pcbX="-5.5mm" pcbY="-1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin529"]} pcbX="-4.5mm" pcbY="-1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin530"]} pcbX="-3.5mm" pcbY="-1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin531"]} pcbX="-2.5mm" pcbY="-1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin532"]} pcbX="-1.5mm" pcbY="-1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin533"]} pcbX="-0.5mm" pcbY="-1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin534"]} pcbX="0.5mm" pcbY="-1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin535"]} pcbX="1.5mm" pcbY="-1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin536"]} pcbX="2.5mm" pcbY="-1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin537"]} pcbX="3.5mm" pcbY="-1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin538"]} pcbX="4.5mm" pcbY="-1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin539"]} pcbX="5.5mm" pcbY="-1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin540"]} pcbX="6.5mm" pcbY="-1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin541"]} pcbX="7.5mm" pcbY="-1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin542"]} pcbX="8.5mm" pcbY="-1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin543"]} pcbX="9.5mm" pcbY="-1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin544"]} pcbX="10.5mm" pcbY="-1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin545"]} pcbX="11.5mm" pcbY="-1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin546"]} pcbX="12.5mm" pcbY="-1.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin547"]} pcbX="-12.5mm" pcbY="-2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin548"]} pcbX="-11.5mm" pcbY="-2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin549"]} pcbX="-10.5mm" pcbY="-2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin550"]} pcbX="-9.5mm" pcbY="-2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin551"]} pcbX="-8.5mm" pcbY="-2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin552"]} pcbX="-7.5mm" pcbY="-2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin553"]} pcbX="-6.5mm" pcbY="-2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin554"]} pcbX="-5.5mm" pcbY="-2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin555"]} pcbX="-4.5mm" pcbY="-2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin556"]} pcbX="-3.5mm" pcbY="-2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin557"]} pcbX="-2.5mm" pcbY="-2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin558"]} pcbX="-1.5mm" pcbY="-2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin559"]} pcbX="-0.5mm" pcbY="-2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin560"]} pcbX="0.5mm" pcbY="-2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin561"]} pcbX="1.5mm" pcbY="-2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin562"]} pcbX="2.5mm" pcbY="-2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin563"]} pcbX="3.5mm" pcbY="-2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin564"]} pcbX="4.5mm" pcbY="-2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin565"]} pcbX="5.5mm" pcbY="-2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin566"]} pcbX="6.5mm" pcbY="-2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin567"]} pcbX="7.5mm" pcbY="-2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin568"]} pcbX="8.5mm" pcbY="-2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin569"]} pcbX="9.5mm" pcbY="-2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin570"]} pcbX="10.5mm" pcbY="-2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin571"]} pcbX="11.5mm" pcbY="-2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin572"]} pcbX="12.5mm" pcbY="-2.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin573"]} pcbX="-12.5mm" pcbY="-3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin574"]} pcbX="-11.5mm" pcbY="-3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin575"]} pcbX="-10.5mm" pcbY="-3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin576"]} pcbX="-9.5mm" pcbY="-3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin577"]} pcbX="-8.5mm" pcbY="-3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin578"]} pcbX="-7.5mm" pcbY="-3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin579"]} pcbX="-6.5mm" pcbY="-3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin580"]} pcbX="-5.5mm" pcbY="-3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin581"]} pcbX="-4.5mm" pcbY="-3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin582"]} pcbX="-3.5mm" pcbY="-3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin583"]} pcbX="-2.5mm" pcbY="-3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin584"]} pcbX="-1.5mm" pcbY="-3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin585"]} pcbX="-0.5mm" pcbY="-3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin586"]} pcbX="0.5mm" pcbY="-3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin587"]} pcbX="1.5mm" pcbY="-3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin588"]} pcbX="2.5mm" pcbY="-3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin589"]} pcbX="3.5mm" pcbY="-3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin590"]} pcbX="4.5mm" pcbY="-3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin591"]} pcbX="5.5mm" pcbY="-3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin592"]} pcbX="6.5mm" pcbY="-3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin593"]} pcbX="7.5mm" pcbY="-3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin594"]} pcbX="8.5mm" pcbY="-3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin595"]} pcbX="9.5mm" pcbY="-3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin596"]} pcbX="10.5mm" pcbY="-3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin597"]} pcbX="11.5mm" pcbY="-3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin598"]} pcbX="12.5mm" pcbY="-3.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin599"]} pcbX="-12.5mm" pcbY="-4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin600"]} pcbX="-11.5mm" pcbY="-4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin601"]} pcbX="-10.5mm" pcbY="-4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin602"]} pcbX="-9.5mm" pcbY="-4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin603"]} pcbX="-8.5mm" pcbY="-4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin604"]} pcbX="-7.5mm" pcbY="-4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin605"]} pcbX="-6.5mm" pcbY="-4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin606"]} pcbX="-5.5mm" pcbY="-4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin607"]} pcbX="-4.5mm" pcbY="-4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin608"]} pcbX="-3.5mm" pcbY="-4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin609"]} pcbX="-2.5mm" pcbY="-4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin610"]} pcbX="-1.5mm" pcbY="-4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin611"]} pcbX="-0.5mm" pcbY="-4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin612"]} pcbX="0.5mm" pcbY="-4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin613"]} pcbX="1.5mm" pcbY="-4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin614"]} pcbX="2.5mm" pcbY="-4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin615"]} pcbX="3.5mm" pcbY="-4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin616"]} pcbX="4.5mm" pcbY="-4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin617"]} pcbX="5.5mm" pcbY="-4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin618"]} pcbX="6.5mm" pcbY="-4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin619"]} pcbX="7.5mm" pcbY="-4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin620"]} pcbX="8.5mm" pcbY="-4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin621"]} pcbX="9.5mm" pcbY="-4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin622"]} pcbX="10.5mm" pcbY="-4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin623"]} pcbX="11.5mm" pcbY="-4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin624"]} pcbX="12.5mm" pcbY="-4.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin625"]} pcbX="-12.5mm" pcbY="-5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin626"]} pcbX="-11.5mm" pcbY="-5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin627"]} pcbX="-10.5mm" pcbY="-5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin628"]} pcbX="-9.5mm" pcbY="-5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin629"]} pcbX="-8.5mm" pcbY="-5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin630"]} pcbX="-7.5mm" pcbY="-5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin631"]} pcbX="-6.5mm" pcbY="-5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin632"]} pcbX="-5.5mm" pcbY="-5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin633"]} pcbX="-4.5mm" pcbY="-5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin634"]} pcbX="-3.5mm" pcbY="-5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin635"]} pcbX="-2.5mm" pcbY="-5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin636"]} pcbX="-1.5mm" pcbY="-5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin637"]} pcbX="-0.5mm" pcbY="-5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin638"]} pcbX="0.5mm" pcbY="-5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin639"]} pcbX="1.5mm" pcbY="-5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin640"]} pcbX="2.5mm" pcbY="-5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin641"]} pcbX="3.5mm" pcbY="-5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin642"]} pcbX="4.5mm" pcbY="-5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin643"]} pcbX="5.5mm" pcbY="-5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin644"]} pcbX="6.5mm" pcbY="-5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin645"]} pcbX="7.5mm" pcbY="-5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin646"]} pcbX="8.5mm" pcbY="-5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin647"]} pcbX="9.5mm" pcbY="-5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin648"]} pcbX="10.5mm" pcbY="-5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin649"]} pcbX="11.5mm" pcbY="-5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin650"]} pcbX="12.5mm" pcbY="-5.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin651"]} pcbX="-12.5mm" pcbY="-6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin652"]} pcbX="-11.5mm" pcbY="-6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin653"]} pcbX="-10.5mm" pcbY="-6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin654"]} pcbX="-9.5mm" pcbY="-6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin655"]} pcbX="-8.5mm" pcbY="-6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin656"]} pcbX="-7.5mm" pcbY="-6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin657"]} pcbX="-6.5mm" pcbY="-6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin658"]} pcbX="-5.5mm" pcbY="-6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin659"]} pcbX="-4.5mm" pcbY="-6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin660"]} pcbX="-3.5mm" pcbY="-6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin661"]} pcbX="-2.5mm" pcbY="-6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin662"]} pcbX="-1.5mm" pcbY="-6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin663"]} pcbX="-0.5mm" pcbY="-6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin664"]} pcbX="0.5mm" pcbY="-6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin665"]} pcbX="1.5mm" pcbY="-6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin666"]} pcbX="2.5mm" pcbY="-6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin667"]} pcbX="3.5mm" pcbY="-6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin668"]} pcbX="4.5mm" pcbY="-6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin669"]} pcbX="5.5mm" pcbY="-6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin670"]} pcbX="6.5mm" pcbY="-6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin671"]} pcbX="7.5mm" pcbY="-6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin672"]} pcbX="8.5mm" pcbY="-6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin673"]} pcbX="9.5mm" pcbY="-6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin674"]} pcbX="10.5mm" pcbY="-6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin675"]} pcbX="11.5mm" pcbY="-6.5mm" layer="top" radius="0.265mm" shape="circle"/>
<smtpad portHints={["pin676"]} pcbX="12.5mm" pcbY="-6.5mm" layer="top" radius="0.265mm" shape="circle"/>




<fabricationnotepath route={[{ "x": 13.5, "y": -13.5 }, { "x": -13.5, "y": -13.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 13.5, "y": 13.5 }, { "x": 13.5, "y": -13.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -13.5, "y": 12.5 }, { "x": -12.5, "y": 13.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -13.5, "y": -13.5 }, { "x": -13.5, "y": 12.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -12.5, "y": 13.5 }, { "x": 13.5, "y": 13.5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-14.5} anchorAlignment="center" text="XC7K160T-FFG676" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U1" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": 14.5, "y": -14.5 }, { "x": 14.5, "y": 14.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 14.5, "y": 14.5 }, { "x": -14.5, "y": 14.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -14.5, "y": 14.5 }, { "x": -14.5, "y": -14.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -14.5, "y": -14.5 }, { "x": 14.5, "y": -14.5 }]} layer="top"/>
      </footprint>);
// J5: UART; Connector_PinHeader_2.54mm:PinHeader_1x03_P2.54mm_Vertical
export const Footprint_J5 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-5.08mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>






<fabricationnotepath route={[{ "x": -1.27, "y": -6.35 }, { "x": -1.27, "y": 0.635 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": 0.635 }, { "x": -0.635, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 1.27 }, { "x": 1.27, "y": -6.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -6.35 }, { "x": -1.27, "y": -6.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.635, "y": 1.27 }, { "x": 1.27, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-7.41} anchorAlignment="center" text="UART" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={-2.54} anchorAlignment="center" text="J5" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": 1.8, "y": 1.8 }, { "x": -1.8, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -6.85 }, { "x": 1.8, "y": -6.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": 1.8 }, { "x": -1.8, "y": -6.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": -6.85 }, { "x": 1.8, "y": 1.8 }]} layer="top"/>
      </footprint>);
// J1: Bus_PCI_Express_x8; Connector_PCBEdge:BUS_PCIexpress_x8
export const Footprint_J1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0.55mm" layer="bottom" width="0.7mm" height="3.2mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="2mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="3mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="4mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="5mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="6mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="7mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="8mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="9mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin11"]} pcbX="10mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin12"]} pcbX="13mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin13"]} pcbX="14mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin14"]} pcbX="15mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin15"]} pcbX="16mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin16"]} pcbX="17mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin17"]} pcbX="18mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin18"]} pcbX="19mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin19"]} pcbX="20mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin20"]} pcbX="21mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin21"]} pcbX="22mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin22"]} pcbX="23mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin23"]} pcbX="24mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin24"]} pcbX="25mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin25"]} pcbX="26mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin26"]} pcbX="27mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin27"]} pcbX="28mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin28"]} pcbX="29mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin29"]} pcbX="30mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin30"]} pcbX="31mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin31"]} pcbX="32mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin32"]} pcbX="33mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin33"]} pcbX="34mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin34"]} pcbX="35mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin35"]} pcbX="36mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin36"]} pcbX="37mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin37"]} pcbX="38mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin38"]} pcbX="39mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin39"]} pcbX="40mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin40"]} pcbX="41mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin41"]} pcbX="42mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin42"]} pcbX="43mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin43"]} pcbX="44mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin44"]} pcbX="45mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin45"]} pcbX="46mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin46"]} pcbX="47mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin47"]} pcbX="48mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin48"]} pcbX="49mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin49"]} pcbX="50mm" pcbY="0mm" layer="bottom" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin50"]} pcbX="0mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin51"]} pcbX="1mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin52"]} pcbX="2mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin53"]} pcbX="3mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin54"]} pcbX="4mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin55"]} pcbX="5mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin56"]} pcbX="6mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin57"]} pcbX="7mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin58"]} pcbX="8mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin59"]} pcbX="9mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin60"]} pcbX="10mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin61"]} pcbX="13mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin62"]} pcbX="14mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin63"]} pcbX="15mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin64"]} pcbX="16mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin65"]} pcbX="17mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin66"]} pcbX="18mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin67"]} pcbX="19mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin68"]} pcbX="20mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin69"]} pcbX="21mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin70"]} pcbX="22mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin71"]} pcbX="23mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin72"]} pcbX="24mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin73"]} pcbX="25mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin74"]} pcbX="26mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin75"]} pcbX="27mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin76"]} pcbX="28mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin77"]} pcbX="29mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin78"]} pcbX="30mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin79"]} pcbX="31mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin80"]} pcbX="32mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin81"]} pcbX="33mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin82"]} pcbX="34mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin83"]} pcbX="35mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin84"]} pcbX="36mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin85"]} pcbX="37mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin86"]} pcbX="38mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin87"]} pcbX="39mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin88"]} pcbX="40mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin89"]} pcbX="41mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin90"]} pcbX="42mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin91"]} pcbX="43mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin92"]} pcbX="44mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin93"]} pcbX="45mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin94"]} pcbX="46mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin95"]} pcbX="47mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin96"]} pcbX="48mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<smtpad portHints={["pin97"]} pcbX="49mm" pcbY="0.55mm" layer="top" width="0.7mm" height="3.2mm" shape="rect"/>
<smtpad portHints={["pin98"]} pcbX="50mm" pcbY="0mm" layer="top" width="0.7mm" height="4.3mm" shape="rect"/>
<fabricationnotetext pcbX={16} pcbY={3.5} anchorAlignment="center" text="J1" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.15, "y": 5.45 }, { "x": -1.15, "y": -3.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 51.15, "y": -3.95 }, { "x": 51.15, "y": 5.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.15, "y": 5.45 }, { "x": 51.15, "y": 5.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 51.15, "y": -3.95 }, { "x": -1.15, "y": -3.95 }]} layer="top"/>
      </footprint>);
// D3: GLED; LED_SMD:LED_0603_1608Metric
export const Footprint_D3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D3" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// R23: 15K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R23" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// D7: RLED; LED_SMD:LED_0603_1608Metric
export const Footprint_D7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D7" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// C3: 4.7nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C3" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C5: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C5" font="tscircuit2024" fontSize={0.8}/>

<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": -2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": 2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": 2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": -2.3, "y": 1.15 }]} layer="top"/>
      </footprint>);
// C22: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C22" font="tscircuit2024" fontSize={0.8}/>

<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": 2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": 2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": -2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": -2.3, "y": -1.15 }]} layer="top"/>
      </footprint>);
// H2: MountingHole; MountingHole:MountingHole_3.2mm_M3
export const Footprint_H2 = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="3.2mm"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H2" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.45} layer="top"/>
      </footprint>);
// C17: 1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C17" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// R3: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R3" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// U8: MPM54304GMN-0000; mpm:LGA7x7x2_MNP
export const Footprint_U8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.9845mm" pcbY="1.625001mm" layer="top" width="0.9906mm" height="0.3556mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.9845mm" pcbY="0.974999mm" layer="top" width="0.9906mm" height="0.3556mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.9845mm" pcbY="0.325001mm" layer="top" width="0.9906mm" height="0.3556mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.9845mm" pcbY="-0.325001mm" layer="top" width="0.9906mm" height="0.3556mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-2.9845mm" pcbY="-0.974999mm" layer="top" width="0.9906mm" height="0.3556mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="-2.9845mm" pcbY="-1.625001mm" layer="top" width="0.9906mm" height="0.3556mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="-2.925mm" pcbY="-2.9845mm" layer="top" width="0.3556mm" height="0.9906mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="-2.274999mm" pcbY="-2.9845mm" layer="top" width="0.3556mm" height="0.9906mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="-1.625001mm" pcbY="-2.9845mm" layer="top" width="0.3556mm" height="0.9906mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="-0.974999mm" pcbY="-2.9845mm" layer="top" width="0.3556mm" height="0.9906mm" shape="rect"/>
<smtpad portHints={["pin11"]} pcbX="-0.325001mm" pcbY="-2.9845mm" layer="top" width="0.3556mm" height="0.9906mm" shape="rect"/>
<smtpad portHints={["pin12"]} pcbX="0.325001mm" pcbY="-2.9845mm" layer="top" width="0.3556mm" height="0.9906mm" shape="rect"/>
<smtpad portHints={["pin13"]} pcbX="0.974999mm" pcbY="-2.9845mm" layer="top" width="0.3556mm" height="0.9906mm" shape="rect"/>
<smtpad portHints={["pin14"]} pcbX="1.625001mm" pcbY="-2.9845mm" layer="top" width="0.3556mm" height="0.9906mm" shape="rect"/>
<smtpad portHints={["pin15"]} pcbX="2.274999mm" pcbY="-2.9845mm" layer="top" width="0.3556mm" height="0.9906mm" shape="rect"/>
<smtpad portHints={["pin16"]} pcbX="2.925mm" pcbY="-2.9845mm" layer="top" width="0.3556mm" height="0.9906mm" shape="rect"/>
<smtpad portHints={["pin17"]} pcbX="2.9845mm" pcbY="-1.625001mm" layer="top" width="0.9906mm" height="0.3556mm" shape="rect"/>
<smtpad portHints={["pin18"]} pcbX="2.9845mm" pcbY="-0.974999mm" layer="top" width="0.9906mm" height="0.3556mm" shape="rect"/>
<smtpad portHints={["pin19"]} pcbX="2.9845mm" pcbY="-0.325001mm" layer="top" width="0.9906mm" height="0.3556mm" shape="rect"/>
<smtpad portHints={["pin20"]} pcbX="2.9845mm" pcbY="0.325001mm" layer="top" width="0.9906mm" height="0.3556mm" shape="rect"/>
<smtpad portHints={["pin21"]} pcbX="2.9845mm" pcbY="0.974999mm" layer="top" width="0.9906mm" height="0.3556mm" shape="rect"/>
<smtpad portHints={["pin22"]} pcbX="2.9845mm" pcbY="1.625001mm" layer="top" width="0.9906mm" height="0.3556mm" shape="rect"/>
<smtpad portHints={["pin23"]} pcbX="2.925mm" pcbY="2.9845mm" layer="top" width="0.3556mm" height="0.9906mm" shape="rect"/>
<smtpad portHints={["pin24"]} pcbX="2.274999mm" pcbY="2.9845mm" layer="top" width="0.3556mm" height="0.9906mm" shape="rect"/>
<smtpad portHints={["pin25"]} pcbX="1.625001mm" pcbY="2.9845mm" layer="top" width="0.3556mm" height="0.9906mm" shape="rect"/>
<smtpad portHints={["pin26"]} pcbX="0.974999mm" pcbY="2.9845mm" layer="top" width="0.3556mm" height="0.9906mm" shape="rect"/>
<smtpad portHints={["pin27"]} pcbX="0.325001mm" pcbY="2.9845mm" layer="top" width="0.3556mm" height="0.9906mm" shape="rect"/>
<smtpad portHints={["pin28"]} pcbX="-0.325001mm" pcbY="2.9845mm" layer="top" width="0.3556mm" height="0.9906mm" shape="rect"/>
<smtpad portHints={["pin29"]} pcbX="-0.974999mm" pcbY="2.9845mm" layer="top" width="0.3556mm" height="0.9906mm" shape="rect"/>
<smtpad portHints={["pin30"]} pcbX="-1.625001mm" pcbY="2.9845mm" layer="top" width="0.3556mm" height="0.9906mm" shape="rect"/>
<smtpad portHints={["pin31"]} pcbX="-2.274999mm" pcbY="2.9845mm" layer="top" width="0.3556mm" height="0.9906mm" shape="rect"/>
<smtpad portHints={["pin32"]} pcbX="-2.925mm" pcbY="2.9845mm" layer="top" width="0.3556mm" height="0.9906mm" shape="rect"/>
<smtpad portHints={["pin33"]} pcbX="0mm" pcbY="0mm" layer="top" width="3.5052mm" height="3.5052mm" shape="rect"/>








<fabricationnotepath route={[{ "x": -0.5028, "y": -3.556 }, { "x": -0.5028, "y": -3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.556, "y": -1.1528 }, { "x": -3.556, "y": -0.7972 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.556, "y": 0.5028 }, { "x": -3.4798, "y": 0.5028 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.4798, "y": -0.1472 }, { "x": -3.4798, "y": -0.5028 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.4798, "y": -0.7972 }, { "x": -3.4798, "y": -1.1528 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -0.1472, "y": 3.556 }, { "x": -0.1472, "y": 3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.1028, "y": -3.4798 }, { "x": -2.7472, "y": -3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 2.4528, "y": -3.556 }, { "x": 2.0972, "y": -3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -1.4472, "y": 3.556 }, { "x": -1.4472, "y": 3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -1.8028, "y": 3.4798 }, { "x": -1.8028, "y": 3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -1.1528, "y": -3.556 }, { "x": -1.1528, "y": -3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -0.7972, "y": -3.556 }, { "x": -1.1528, "y": -3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.4798, "y": -0.7972 }, { "x": 3.556, "y": -0.7972 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -0.5028, "y": 3.556 }, { "x": -0.1472, "y": 3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -1.4472, "y": -3.556 }, { "x": -1.8028, "y": -3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -2.4528, "y": -3.4798 }, { "x": -2.0972, "y": -3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.4798, "y": 1.8028 }, { "x": -3.4798, "y": 1.4472 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.4798, "y": -1.8028 }, { "x": -3.556, "y": -1.8028 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.556, "y": 3.556 }, { "x": 3.556, "y": 3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.1028, "y": 3.556 }, { "x": -2.7472, "y": 3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.556, "y": 1.8028 }, { "x": 3.556, "y": 1.4472 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.556, "y": 1.1528 }, { "x": 3.556, "y": 0.7972 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 2.0972, "y": 3.4798 }, { "x": 2.0972, "y": 3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -2.4528, "y": 3.4798 }, { "x": -2.4528, "y": 3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 2.0972, "y": -3.4798 }, { "x": 2.4528, "y": -3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 2.7472, "y": 3.4798 }, { "x": 2.7472, "y": 3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -0.7972, "y": 3.556 }, { "x": -0.7972, "y": 3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -1.4472, "y": -3.4798 }, { "x": -1.4472, "y": -3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 1.8028, "y": 3.556 }, { "x": 1.8028, "y": 3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 1.1528, "y": -3.4798 }, { "x": 1.1528, "y": -3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.4798, "y": -1.4472 }, { "x": 3.556, "y": -1.4472 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.1028, "y": -3.4798 }, { "x": 3.1028, "y": -3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 2.4528, "y": 3.556 }, { "x": 2.4528, "y": 3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.556, "y": 0.1472 }, { "x": -3.556, "y": 0.5028 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 0.5028, "y": -3.556 }, { "x": 0.1472, "y": -3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -2.4528, "y": -3.556 }, { "x": -2.4528, "y": -3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 2.4528, "y": -3.4798 }, { "x": 2.4528, "y": -3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.556, "y": 1.4472 }, { "x": -3.556, "y": 1.8028 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 0.5028, "y": 3.556 }, { "x": 0.5028, "y": 3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.4798, "y": -1.8028 }, { "x": 3.4798, "y": -1.4472 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.4798, "y": -1.4472 }, { "x": -3.4798, "y": -1.8028 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -2.4528, "y": 3.556 }, { "x": -2.0972, "y": 3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.556, "y": -3.556 }, { "x": 3.556, "y": -3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.556, "y": -0.5028 }, { "x": 3.4798, "y": -0.5028 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -0.1472, "y": 3.4798 }, { "x": -0.5028, "y": 3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 2.0972, "y": 3.556 }, { "x": 2.4528, "y": 3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -2.7472, "y": -3.4798 }, { "x": -2.7472, "y": -3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.556, "y": -0.7972 }, { "x": 3.556, "y": -1.1528 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.4798, "y": -1.1528 }, { "x": 3.4798, "y": -0.7972 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.1028, "y": 3.4798 }, { "x": -3.1028, "y": 3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.556, "y": -3.556 }, { "x": -3.556, "y": -3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.556, "y": 3.556 }, { "x": -3.556, "y": 3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.4798, "y": 1.8028 }, { "x": 3.556, "y": 1.8028 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -2.7472, "y": 3.4798 }, { "x": -3.1028, "y": 3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -1.1528, "y": -3.4798 }, { "x": -0.7972, "y": -3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 0.1472, "y": 3.4798 }, { "x": 0.1472, "y": 3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.556, "y": 0.7972 }, { "x": 3.4798, "y": 0.7972 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -2.7472, "y": -3.556 }, { "x": -3.1028, "y": -3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.556, "y": 0.7972 }, { "x": -3.556, "y": 1.1528 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -1.8028, "y": -3.556 }, { "x": -1.8028, "y": -3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.4798, "y": -0.5028 }, { "x": 3.4798, "y": -0.1472 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.4798, "y": -0.1472 }, { "x": 3.556, "y": -0.1472 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.556, "y": -0.5028 }, { "x": -3.556, "y": -0.1472 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 1.8028, "y": 3.4798 }, { "x": 1.4472, "y": 3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.4798, "y": 1.1528 }, { "x": 3.556, "y": 1.1528 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -0.1472, "y": -3.556 }, { "x": -0.5028, "y": -3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 1.4472, "y": -3.556 }, { "x": 1.4472, "y": -3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -1.4472, "y": 3.4798 }, { "x": -1.8028, "y": 3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.556, "y": -0.1472 }, { "x": 3.556, "y": -0.5028 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 1.8028, "y": -3.4798 }, { "x": 1.8028, "y": -3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 1.4472, "y": 3.4798 }, { "x": 1.4472, "y": 3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.556, "y": -3.556 }, { "x": 3.556, "y": -3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.4798, "y": 1.1528 }, { "x": -3.4798, "y": 0.7972 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.4798, "y": 1.4472 }, { "x": -3.556, "y": 1.4472 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.556, "y": -0.7972 }, { "x": -3.4798, "y": -0.7972 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.4798, "y": 0.7972 }, { "x": 3.4798, "y": 1.1528 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.4798, "y": -1.1528 }, { "x": -3.556, "y": -1.1528 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 1.8028, "y": -3.556 }, { "x": 1.4472, "y": -3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 0.7972, "y": 3.4798 }, { "x": 0.7972, "y": 3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -1.8028, "y": -3.4798 }, { "x": -1.4472, "y": -3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.4798, "y": 1.4472 }, { "x": 3.4798, "y": 1.8028 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 0.5028, "y": 3.4798 }, { "x": 0.1472, "y": 3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -0.7972, "y": 3.4798 }, { "x": -1.1528, "y": 3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 2.4528, "y": 3.4798 }, { "x": 2.0972, "y": 3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.4798, "y": 0.5028 }, { "x": 3.556, "y": 0.5028 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -2.7472, "y": 3.556 }, { "x": -2.7472, "y": 3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.4798, "y": 0.1472 }, { "x": -3.556, "y": 0.1472 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 0.7972, "y": -3.556 }, { "x": 0.7972, "y": -3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 2.0972, "y": -3.556 }, { "x": 2.0972, "y": -3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 1.1528, "y": -3.556 }, { "x": 0.7972, "y": -3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.556, "y": 1.4472 }, { "x": 3.4798, "y": 1.4472 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 0.1472, "y": 3.556 }, { "x": 0.5028, "y": 3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.556, "y": -1.8028 }, { "x": -3.556, "y": -1.4472 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.1028, "y": -3.556 }, { "x": -3.1028, "y": -3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -0.1472, "y": -3.4798 }, { "x": -0.1472, "y": -3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.556, "y": 2.286 }, { "x": -2.286, "y": 3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 0.5028, "y": -3.4798 }, { "x": 0.5028, "y": -3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -1.8028, "y": 3.556 }, { "x": -1.4472, "y": 3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -1.1528, "y": 3.556 }, { "x": -0.7972, "y": 3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -2.0972, "y": -3.4798 }, { "x": -2.0972, "y": -3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 1.4472, "y": -3.4798 }, { "x": 1.8028, "y": -3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.556, "y": 0.5028 }, { "x": 3.556, "y": 0.1472 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -0.5028, "y": 3.4798 }, { "x": -0.5028, "y": 3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.556, "y": -0.1472 }, { "x": -3.4798, "y": -0.1472 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.556, "y": -1.4472 }, { "x": -3.4798, "y": -1.4472 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 0.7972, "y": 3.556 }, { "x": 1.1528, "y": 3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.4798, "y": 0.5028 }, { "x": -3.4798, "y": 0.1472 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.4798, "y": 0.1472 }, { "x": 3.4798, "y": 0.5028 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.556, "y": 1.8028 }, { "x": -3.4798, "y": 1.8028 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.4798, "y": 0.7972 }, { "x": -3.556, "y": 0.7972 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 2.7472, "y": 3.556 }, { "x": 3.1028, "y": 3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 1.1528, "y": 3.4798 }, { "x": 0.7972, "y": 3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 0.1472, "y": -3.556 }, { "x": 0.1472, "y": -3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -1.1528, "y": 3.4798 }, { "x": -1.1528, "y": 3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.1028, "y": 3.556 }, { "x": 3.1028, "y": 3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 1.1528, "y": 3.556 }, { "x": 1.1528, "y": 3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.556, "y": 0.1472 }, { "x": 3.4798, "y": 0.1472 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -2.0972, "y": -3.556 }, { "x": -2.4528, "y": -3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.556, "y": 3.556 }, { "x": -3.556, "y": 3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 0.1472, "y": -3.4798 }, { "x": 0.5028, "y": -3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.556, "y": 1.1528 }, { "x": -3.4798, "y": 1.1528 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.556, "y": -3.556 }, { "x": 3.556, "y": 3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 2.7472, "y": -3.556 }, { "x": 2.7472, "y": -3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.4798, "y": -0.5028 }, { "x": -3.556, "y": -0.5028 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.556, "y": -1.8028 }, { "x": 3.4798, "y": -1.8028 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -0.5028, "y": -3.4798 }, { "x": -0.1472, "y": -3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.1028, "y": 3.4798 }, { "x": 2.7472, "y": 3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 0.7972, "y": -3.4798 }, { "x": 1.1528, "y": -3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -2.0972, "y": 3.556 }, { "x": -2.0972, "y": 3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -2.0972, "y": 3.4798 }, { "x": -2.4528, "y": 3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -0.7972, "y": -3.4798 }, { "x": -0.7972, "y": -3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.556, "y": -1.4472 }, { "x": 3.556, "y": -1.8028 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 1.4472, "y": 3.556 }, { "x": 1.8028, "y": 3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.1028, "y": -3.556 }, { "x": 2.7472, "y": -3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.556, "y": -1.1528 }, { "x": 3.4798, "y": -1.1528 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 2.7472, "y": -3.4798 }, { "x": 3.1028, "y": -3.4798 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.556, "y": 3.556 }, { "x": -3.556, "y": -3.556 }]} strokeWidth={0.0254}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U8" font="tscircuit2024" fontSize={1}/>


<courtyardoutline outline={[{ "x": 3.81, "y": 2.0568 }, { "x": 3.81, "y": 2.0568 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.3568, "y": -3.81 }, { "x": 3.3568, "y": -3.81 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.81, "y": -2.0568 }, { "x": 3.81, "y": -3.81 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.81, "y": 3.81 }, { "x": -3.3568, "y": 3.81 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.81, "y": -2.0568 }, { "x": -3.81, "y": -2.0568 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.3568, "y": 3.81 }, { "x": 3.3568, "y": 3.81 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.81, "y": 2.0568 }, { "x": -3.81, "y": 2.0568 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.3568, "y": -3.81 }, { "x": -3.81, "y": -3.81 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.3568, "y": 3.81 }, { "x": -3.3568, "y": 3.81 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.3568, "y": 3.81 }, { "x": 3.81, "y": 3.81 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.81, "y": -2.0568 }, { "x": 3.81, "y": -2.0568 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.3568, "y": -3.81 }, { "x": -3.3568, "y": -3.81 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.81, "y": -3.81 }, { "x": -3.81, "y": -2.0568 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.81, "y": -3.81 }, { "x": 3.3568, "y": -3.81 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.3568, "y": 3.81 }, { "x": 3.3568, "y": 3.81 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.81, "y": 2.0568 }, { "x": 3.81, "y": -2.0568 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.81, "y": 2.0568 }, { "x": -3.81, "y": 3.81 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.81, "y": -2.0568 }, { "x": -3.81, "y": 2.0568 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.3568, "y": -3.81 }, { "x": -3.3568, "y": -3.81 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.81, "y": 3.81 }, { "x": 3.81, "y": 2.0568 }]} layer="top"/>
      </footprint>);
// C50: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C50 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C50" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// R9: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="4K7" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R9" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// C141: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C141 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C141" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// U3: W25Q128JVS; Package_SO:SOIC-8_5.23x5.23mm_P1.27mm
export const Footprint_U3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.6mm" pcbY="1.905mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-3.6mm" pcbY="0.635mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-3.6mm" pcbY="-0.635mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-3.6mm" pcbY="-1.905mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="3.6mm" pcbY="-1.905mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="3.6mm" pcbY="-0.635mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="3.6mm" pcbY="0.635mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="3.6mm" pcbY="1.905mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.6mm" ccwRotation={90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -2.615, "y": 1.615 }, { "x": -1.615, "y": 2.615 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.615, "y": 2.615 }, { "x": 2.615, "y": -2.615 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.615, "y": -2.615 }, { "x": -2.615, "y": -2.615 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.615, "y": 2.615 }, { "x": 2.615, "y": 2.615 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.615, "y": -2.615 }, { "x": -2.615, "y": 1.615 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U3" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": 4.65, "y": -2.86 }, { "x": 4.65, "y": 2.86 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.65, "y": 2.86 }, { "x": -4.65, "y": 2.86 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.65, "y": 2.86 }, { "x": -4.65, "y": -2.86 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.65, "y": -2.86 }, { "x": 4.65, "y": -2.86 }]} layer="top"/>
      </footprint>);
// U9: MPM3683GQN-7-P; mpm:MPM3683GQN-7
export const Footprint_U9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} layer="top" shape="polygon" points={[{ "x": -3.349998, "y": 2.4 }, { "x": -3.349998, "y": 1.6 }, { "x": -2.749998, "y": 1.6 }, { "x": -2.749998, "y": 2.4 }]}/>
<smtpad portHints={["pin1"]} layer="top" shape="polygon" points={[{ "x": -3.849998, "y": 1.775 }, { "x": -3.849998, "y": 1.425 }, { "x": -2.749998, "y": 1.425 }, { "x": -2.749998, "y": 1.775 }]}/>
<smtpad portHints={["pin1"]} pcbX="-3.299998mm" pcbY="2.4mm" layer="top" width="1.1mm" height="0.35mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-3.299998mm" pcbY="0.800001mm" layer="top" width="1.0922mm" height="0.3556mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-3.299998mm" pcbY="0mm" layer="top" width="1.0922mm" height="0.3556mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-3.299998mm" pcbY="-0.800001mm" layer="top" width="1.0922mm" height="0.3556mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} layer="top" shape="polygon" points={[{ "x": -3.349998, "y": -1.599999 }, { "x": -3.349998, "y": -2.399999 }, { "x": -2.749998, "y": -2.399999 }, { "x": -2.749998, "y": -1.599999 }]}/>
<smtpad portHints={["pin6"]} layer="top" shape="polygon" points={[{ "x": -3.849998, "y": -2.224999 }, { "x": -3.849998, "y": -2.574999 }, { "x": -2.749998, "y": -2.574999 }, { "x": -2.749998, "y": -2.224999 }]}/>
<smtpad portHints={["pin6"]} pcbX="-3.299998mm" pcbY="-1.599999mm" layer="top" width="1.1mm" height="0.35mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-2.00025mm" pcbY="-3.050032mm" layer="top" width="0.3556mm" height="1.4986mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-1.20015mm" pcbY="-3.050032mm" layer="top" width="0.3556mm" height="1.4986mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} layer="top" shape="polygon" points={[{ "x": -0.575, "y": -3.3 }, { "x": 0.575, "y": -3.3 }, { "x": 0.575, "y": -1.5 }, { "x": -0.575, "y": -1.5 }]}/>
<smtpad portHints={["pin10"]} layer="top" shape="polygon" points={[{ "x": 0.225, "y": -3.8 }, { "x": 0.575, "y": -3.8 }, { "x": 0.575, "y": -2.7 }, { "x": 0.225, "y": -2.7 }]}/>
<smtpad portHints={["pin12"]} pcbX="1.20015mm" pcbY="-3.050032mm" layer="top" width="0.3556mm" height="1.4986mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="2.00025mm" pcbY="-3.050032mm" layer="top" width="0.3556mm" height="1.4986mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} layer="top" shape="polygon" points={[{ "x": 3.349998, "y": -2.4 }, { "x": 3.349998, "y": -1.6 }, { "x": 2.749998, "y": -1.6 }, { "x": 2.749998, "y": -2.4 }]}/>
<smtpad portHints={["pin14"]} layer="top" shape="polygon" points={[{ "x": 3.849998, "y": -1.775 }, { "x": 3.849998, "y": -1.425 }, { "x": 2.749998, "y": -1.425 }, { "x": 2.749998, "y": -1.775 }]}/>
<smtpad portHints={["pin14"]} pcbX="3.299998mm" pcbY="-2.4mm" layer="top" width="1.1mm" height="0.35mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="3.299998mm" pcbY="-0.800001mm" layer="top" width="1.0922mm" height="0.3556mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="3.299998mm" pcbY="0mm" layer="top" width="1.0922mm" height="0.3556mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="3.299998mm" pcbY="0.800001mm" layer="top" width="1.0922mm" height="0.3556mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} layer="top" shape="polygon" points={[{ "x": 3.349998, "y": 1.599999 }, { "x": 3.349998, "y": 2.399999 }, { "x": 2.749998, "y": 2.399999 }, { "x": 2.749998, "y": 1.599999 }]}/>
<smtpad portHints={["pin19"]} layer="top" shape="polygon" points={[{ "x": 3.849998, "y": 2.224999 }, { "x": 3.849998, "y": 2.574999 }, { "x": 2.749998, "y": 2.574999 }, { "x": 2.749998, "y": 2.224999 }]}/>
<smtpad portHints={["pin19"]} pcbX="3.299998mm" pcbY="1.599999mm" layer="top" width="1.1mm" height="0.35mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="1.999999mm" pcbY="3.049999mm" layer="top" width="0.3556mm" height="1.4986mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="1.2mm" pcbY="3.049999mm" layer="top" width="0.3556mm" height="1.4986mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="0.399999mm" pcbY="3.049999mm" layer="top" width="0.3556mm" height="1.4986mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="-0.399999mm" pcbY="3.049999mm" layer="top" width="0.3556mm" height="1.4986mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="-1.2mm" pcbY="3.049999mm" layer="top" width="0.3556mm" height="1.4986mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="-2.000001mm" pcbY="3.049999mm" layer="top" width="0.3556mm" height="1.4986mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="-1.599999mm" pcbY="-0.575056mm" layer="top" width="1.143mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="1.599999mm" pcbY="-0.575056mm" layer="top" width="1.143mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": 3.556, "y": 3.556 }, { "x": -3.556, "y": 3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.556, "y": -3.556 }, { "x": 3.556, "y": -3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -3.556, "y": 3.556 }, { "x": -3.556, "y": -3.556 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 3.556, "y": -3.556 }, { "x": 3.556, "y": 3.556 }]} strokeWidth={0.0254}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U9" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -4.100099, "y": 3.81 }, { "x": -4.100099, "y": -3.81 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.100099, "y": 3.81 }, { "x": -4.100099, "y": 3.81 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.100099, "y": -3.81 }, { "x": 4.100099, "y": 3.81 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.100099, "y": -3.81 }, { "x": 4.100099, "y": -3.81 }]} layer="top"/>
      </footprint>);
// R25: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R25 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R25" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// C23: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C23" font="tscircuit2024" fontSize={0.8}/>

<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": 2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": -2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": 2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": -2.3, "y": -1.15 }]} layer="top"/>
      </footprint>);
// C1: 1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C1" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// R2: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R2" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// D8: RLED; LED_SMD:LED_0603_1608Metric
export const Footprint_D8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D8" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// R21: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R21" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// D6: GLED; LED_SMD:LED_0603_1608Metric
export const Footprint_D6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D6" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// R4: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R4" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// C140: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C140 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C140" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// D9: RLED; LED_SMD:LED_0603_1608Metric
export const Footprint_D9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D9" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// R5: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R5" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R13: 15K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R13" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// H1: MountingHole; MountingHole:MountingHole_3.2mm_M3
export const Footprint_H1 = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="3.2mm"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H1" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.45} layer="top"/>
      </footprint>);
// J7: 1V_EN; Connector_PinHeader_2.54mm:PinHeader_1x02_P2.54mm_Vertical
export const Footprint_J7 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>






<fabricationnotepath route={[{ "x": 1.27, "y": -3.81 }, { "x": -1.27, "y": -3.81 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 1.27 }, { "x": 1.27, "y": -3.81 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.635, "y": 1.27 }, { "x": 1.27, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -3.81 }, { "x": -1.27, "y": 0.635 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": 0.635 }, { "x": -0.635, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.27} anchorAlignment="center" text="J7" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": -4.35 }, { "x": 1.8, "y": -4.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": 1.8 }, { "x": -1.8, "y": -4.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": 1.8 }, { "x": -1.8, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": -4.35 }, { "x": 1.8, "y": 1.8 }]} layer="top"/>
      </footprint>);
// D11: RLED; LED_SMD:LED_0603_1608Metric
export const Footprint_D11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D11" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// D2: GLED; LED_SMD:LED_0603_1608Metric
export const Footprint_D2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D2" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// J6: I2C_LINK; Connector_PinHeader_2.54mm:PinHeader_2x02_P2.54mm_Vertical
export const Footprint_J6 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="2.54mm" pcbY="0mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin4"]} pcbX="2.54mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>








<fabricationnotepath route={[{ "x": 3.81, "y": 1.27 }, { "x": 3.81, "y": -3.81 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -3.81 }, { "x": -1.27, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": 1.27 }, { "x": 3.81, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": 0 }, { "x": 0, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.81, "y": -3.81 }, { "x": -1.27, "y": -3.81 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={1.27} pcbY={-1.27} anchorAlignment="center" text="J6" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.8 }, { "x": -1.8, "y": -4.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.35, "y": -4.35 }, { "x": 4.35, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -4.35 }, { "x": 4.35, "y": -4.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.35, "y": 1.8 }, { "x": -1.8, "y": 1.8 }]} layer="top"/>
      </footprint>);
// R22: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R22" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// Q3: BSS138; Package_TO_SOT_SMD:SOT-23
export const Footprint_Q3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.475mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.9375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.475mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.9375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.475mm" ccwRotation={-90} shape="rotated_rect"/>




<fabricationnotepath route={[{ "x": 0.65, "y": 1.45 }, { "x": 0.65, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.65, "y": 1.125 }, { "x": -0.325, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.325, "y": 1.45 }, { "x": 0.65, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": -1.45 }, { "x": -0.65, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.65, "y": -1.45 }, { "x": -0.65, "y": 1.125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="Q3" font="tscircuit2024" fontSize={0.32}/>

<courtyardoutline outline={[{ "x": -1.92, "y": -1.7 }, { "x": 1.92, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.92, "y": 1.7 }, { "x": -1.92, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.92, "y": -1.7 }, { "x": 1.92, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.92, "y": 1.7 }, { "x": -1.92, "y": -1.7 }]} layer="top"/>
      </footprint>);
// U2: MT47H64M8SH; easyeda2kicad:FBGA-60_L10.0-W8.0-P0.80-TL_MICRON_MT47H64M8SH
export const Footprint_U2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.2mm" pcbY="4mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin2"]} pcbX="-2.4mm" pcbY="4mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin3"]} pcbX="-1.6mm" pcbY="4mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin4"]} pcbX="1.6mm" pcbY="4mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin5"]} pcbX="2.4mm" pcbY="4mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin6"]} pcbX="3.2mm" pcbY="4mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin7"]} pcbX="-3.2mm" pcbY="3.2mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin8"]} pcbX="-2.4mm" pcbY="3.2mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin9"]} pcbX="-1.6mm" pcbY="3.2mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin10"]} pcbX="1.6mm" pcbY="3.2mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin11"]} pcbX="2.4mm" pcbY="3.2mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin12"]} pcbX="3.2mm" pcbY="3.2mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin13"]} pcbX="-3.2mm" pcbY="2.4mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin14"]} pcbX="-2.4mm" pcbY="2.4mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin15"]} pcbX="-1.6mm" pcbY="2.4mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin16"]} pcbX="1.6mm" pcbY="2.4mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin17"]} pcbX="2.4mm" pcbY="2.4mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin18"]} pcbX="3.2mm" pcbY="2.4mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin19"]} pcbX="-3.2mm" pcbY="1.6mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin20"]} pcbX="-2.4mm" pcbY="1.6mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin21"]} pcbX="-1.6mm" pcbY="1.6mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin22"]} pcbX="1.6mm" pcbY="1.6mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin23"]} pcbX="2.4mm" pcbY="1.6mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin24"]} pcbX="3.2mm" pcbY="1.6mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin25"]} pcbX="-3.2mm" pcbY="0.8mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin26"]} pcbX="-2.4mm" pcbY="0.8mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin27"]} pcbX="-1.6mm" pcbY="0.8mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin28"]} pcbX="1.6mm" pcbY="0.8mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin29"]} pcbX="2.4mm" pcbY="0.8mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin30"]} pcbX="3.2mm" pcbY="0.8mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin31"]} pcbX="-2.4mm" pcbY="0mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin32"]} pcbX="-1.6mm" pcbY="0mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin33"]} pcbX="1.6mm" pcbY="0mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin34"]} pcbX="2.4mm" pcbY="0mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin35"]} pcbX="3.2mm" pcbY="0mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin36"]} pcbX="-3.2mm" pcbY="-0.8mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin37"]} pcbX="-2.4mm" pcbY="-0.8mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin38"]} pcbX="-1.6mm" pcbY="-0.8mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin39"]} pcbX="1.6mm" pcbY="-0.8mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin40"]} pcbX="2.4mm" pcbY="-0.8mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin41"]} pcbX="-2.4mm" pcbY="-1.6mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin42"]} pcbX="-1.6mm" pcbY="-1.6mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin43"]} pcbX="1.6mm" pcbY="-1.6mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin44"]} pcbX="2.4mm" pcbY="-1.6mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin45"]} pcbX="3.2mm" pcbY="-1.6mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin46"]} pcbX="-3.2mm" pcbY="-2.4mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin47"]} pcbX="-2.4mm" pcbY="-2.4mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin48"]} pcbX="-1.6mm" pcbY="-2.4mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin49"]} pcbX="1.6mm" pcbY="-2.4mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin50"]} pcbX="2.4mm" pcbY="-2.4mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin51"]} pcbX="-2.4mm" pcbY="-3.2mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin52"]} pcbX="-1.6mm" pcbY="-3.2mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin53"]} pcbX="1.6mm" pcbY="-3.2mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin54"]} pcbX="2.4mm" pcbY="-3.2mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin55"]} pcbX="3.2mm" pcbY="-3.2mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin56"]} pcbX="-3.2mm" pcbY="-4mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin57"]} pcbX="-2.4mm" pcbY="-4mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin58"]} pcbX="-1.6mm" pcbY="-4mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin59"]} pcbX="1.6mm" pcbY="-4mm" layer="top" radius="0.18mm" shape="circle"/>
<smtpad portHints={["pin60"]} pcbX="2.4mm" pcbY="-4mm" layer="top" radius="0.18mm" shape="circle"/>







<fabricationnotepath route={[{ "x": 1.71, "y": 0.8 }, { "x": 1.701627, "y": 0.842095 }, { "x": 1.677782, "y": 0.877782 }, { "x": 1.642095, "y": 0.901627 }, { "x": 1.6, "y": 0.91 }, { "x": 1.557905, "y": 0.901627 }, { "x": 1.522218, "y": 0.877782 }, { "x": 1.498373, "y": 0.842095 }, { "x": 1.49, "y": 0.8 }, { "x": 1.498373, "y": 0.757905 }, { "x": 1.522218, "y": 0.722218 }, { "x": 1.557905, "y": 0.698373 }, { "x": 1.6, "y": 0.69 }, { "x": 1.642095, "y": 0.698373 }, { "x": 1.677782, "y": 0.722218 }, { "x": 1.701627, "y": 0.757905 }, { "x": 1.71, "y": 0.8 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 3.31, "y": 4 }, { "x": 3.301627, "y": 4.042095 }, { "x": 3.277782, "y": 4.077782 }, { "x": 3.242095, "y": 4.101627 }, { "x": 3.2, "y": 4.11 }, { "x": 3.157905, "y": 4.101627 }, { "x": 3.122218, "y": 4.077782 }, { "x": 3.098373, "y": 4.042095 }, { "x": 3.09, "y": 4 }, { "x": 3.098373, "y": 3.957905 }, { "x": 3.122218, "y": 3.922218 }, { "x": 3.157905, "y": 3.898373 }, { "x": 3.2, "y": 3.89 }, { "x": 3.242095, "y": 3.898373 }, { "x": 3.277782, "y": 3.922218 }, { "x": 3.301627, "y": 3.957905 }, { "x": 3.31, "y": 4 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 3.31, "y": -3.2 }, { "x": 3.301627, "y": -3.157905 }, { "x": 3.277782, "y": -3.122218 }, { "x": 3.242095, "y": -3.098373 }, { "x": 3.2, "y": -3.09 }, { "x": 3.157905, "y": -3.098373 }, { "x": 3.122218, "y": -3.122218 }, { "x": 3.098373, "y": -3.157905 }, { "x": 3.09, "y": -3.2 }, { "x": 3.098373, "y": -3.242095 }, { "x": 3.122218, "y": -3.277782 }, { "x": 3.157905, "y": -3.301627 }, { "x": 3.2, "y": -3.31 }, { "x": 3.242095, "y": -3.301627 }, { "x": 3.277782, "y": -3.277782 }, { "x": 3.301627, "y": -3.242095 }, { "x": 3.31, "y": -3.2 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 3.31, "y": -1.6 }, { "x": 3.301627, "y": -1.557905 }, { "x": 3.277782, "y": -1.522218 }, { "x": 3.242095, "y": -1.498373 }, { "x": 3.2, "y": -1.49 }, { "x": 3.157905, "y": -1.498373 }, { "x": 3.122218, "y": -1.522218 }, { "x": 3.098373, "y": -1.557905 }, { "x": 3.09, "y": -1.6 }, { "x": 3.098373, "y": -1.642095 }, { "x": 3.122218, "y": -1.677782 }, { "x": 3.157905, "y": -1.701627 }, { "x": 3.2, "y": -1.71 }, { "x": 3.242095, "y": -1.701627 }, { "x": 3.277782, "y": -1.677782 }, { "x": 3.301627, "y": -1.642095 }, { "x": 3.31, "y": -1.6 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 2.51, "y": -0.8 }, { "x": 2.501627, "y": -0.757905 }, { "x": 2.477782, "y": -0.722218 }, { "x": 2.442095, "y": -0.698373 }, { "x": 2.4, "y": -0.69 }, { "x": 2.357905, "y": -0.698373 }, { "x": 2.322218, "y": -0.722218 }, { "x": 2.298373, "y": -0.757905 }, { "x": 2.29, "y": -0.8 }, { "x": 2.298373, "y": -0.842095 }, { "x": 2.322218, "y": -0.877782 }, { "x": 2.357905, "y": -0.901627 }, { "x": 2.4, "y": -0.91 }, { "x": 2.442095, "y": -0.901627 }, { "x": 2.477782, "y": -0.877782 }, { "x": 2.501627, "y": -0.842095 }, { "x": 2.51, "y": -0.8 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -1.49, "y": -3.2 }, { "x": -1.498373, "y": -3.157905 }, { "x": -1.522218, "y": -3.122218 }, { "x": -1.557905, "y": -3.098373 }, { "x": -1.6, "y": -3.09 }, { "x": -1.642095, "y": -3.098373 }, { "x": -1.677782, "y": -3.122218 }, { "x": -1.701627, "y": -3.157905 }, { "x": -1.71, "y": -3.2 }, { "x": -1.701627, "y": -3.242095 }, { "x": -1.677782, "y": -3.277782 }, { "x": -1.642095, "y": -3.301627 }, { "x": -1.6, "y": -3.31 }, { "x": -1.557905, "y": -3.301627 }, { "x": -1.522218, "y": -3.277782 }, { "x": -1.498373, "y": -3.242095 }, { "x": -1.49, "y": -3.2 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -1.49, "y": 0 }, { "x": -1.498373, "y": 0.042095 }, { "x": -1.522218, "y": 0.077782 }, { "x": -1.557905, "y": 0.101627 }, { "x": -1.6, "y": 0.11 }, { "x": -1.642095, "y": 0.101627 }, { "x": -1.677782, "y": 0.077782 }, { "x": -1.701627, "y": 0.042095 }, { "x": -1.71, "y": 0 }, { "x": -1.701627, "y": -0.042095 }, { "x": -1.677782, "y": -0.077782 }, { "x": -1.642095, "y": -0.101627 }, { "x": -1.6, "y": -0.11 }, { "x": -1.557905, "y": -0.101627 }, { "x": -1.522218, "y": -0.077782 }, { "x": -1.498373, "y": -0.042095 }, { "x": -1.49, "y": 0 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -2.29, "y": 0.8 }, { "x": -2.298373, "y": 0.842095 }, { "x": -2.322218, "y": 0.877782 }, { "x": -2.357905, "y": 0.901627 }, { "x": -2.4, "y": 0.91 }, { "x": -2.442095, "y": 0.901627 }, { "x": -2.477782, "y": 0.877782 }, { "x": -2.501627, "y": 0.842095 }, { "x": -2.51, "y": 0.8 }, { "x": -2.501627, "y": 0.757905 }, { "x": -2.477782, "y": 0.722218 }, { "x": -2.442095, "y": 0.698373 }, { "x": -2.4, "y": 0.69 }, { "x": -2.357905, "y": 0.698373 }, { "x": -2.322218, "y": 0.722218 }, { "x": -2.298373, "y": 0.757905 }, { "x": -2.29, "y": 0.8 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 3.31, "y": 2.4 }, { "x": 3.301627, "y": 2.442095 }, { "x": 3.277782, "y": 2.477782 }, { "x": 3.242095, "y": 2.501627 }, { "x": 3.2, "y": 2.51 }, { "x": 3.157905, "y": 2.501627 }, { "x": 3.122218, "y": 2.477782 }, { "x": 3.098373, "y": 2.442095 }, { "x": 3.09, "y": 2.4 }, { "x": 3.098373, "y": 2.357905 }, { "x": 3.122218, "y": 2.322218 }, { "x": 3.157905, "y": 2.298373 }, { "x": 3.2, "y": 2.29 }, { "x": 3.242095, "y": 2.298373 }, { "x": 3.277782, "y": 2.322218 }, { "x": 3.301627, "y": 2.357905 }, { "x": 3.31, "y": 2.4 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 2.51, "y": -4 }, { "x": 2.501627, "y": -3.957905 }, { "x": 2.477782, "y": -3.922218 }, { "x": 2.442095, "y": -3.898373 }, { "x": 2.4, "y": -3.89 }, { "x": 2.357905, "y": -3.898373 }, { "x": 2.322218, "y": -3.922218 }, { "x": 2.298373, "y": -3.957905 }, { "x": 2.29, "y": -4 }, { "x": 2.298373, "y": -4.042095 }, { "x": 2.322218, "y": -4.077782 }, { "x": 2.357905, "y": -4.101627 }, { "x": 2.4, "y": -4.11 }, { "x": 2.442095, "y": -4.101627 }, { "x": 2.477782, "y": -4.077782 }, { "x": 2.501627, "y": -4.042095 }, { "x": 2.51, "y": -4 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -3.09, "y": 1.6 }, { "x": -3.098373, "y": 1.642095 }, { "x": -3.122218, "y": 1.677782 }, { "x": -3.157905, "y": 1.701627 }, { "x": -3.2, "y": 1.71 }, { "x": -3.242095, "y": 1.701627 }, { "x": -3.277782, "y": 1.677782 }, { "x": -3.301627, "y": 1.642095 }, { "x": -3.31, "y": 1.6 }, { "x": -3.301627, "y": 1.557905 }, { "x": -3.277782, "y": 1.522218 }, { "x": -3.242095, "y": 1.498373 }, { "x": -3.2, "y": 1.49 }, { "x": -3.157905, "y": 1.498373 }, { "x": -3.122218, "y": 1.522218 }, { "x": -3.098373, "y": 1.557905 }, { "x": -3.09, "y": 1.6 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -1.49, "y": 4 }, { "x": -1.498373, "y": 4.042095 }, { "x": -1.522218, "y": 4.077782 }, { "x": -1.557905, "y": 4.101627 }, { "x": -1.6, "y": 4.11 }, { "x": -1.642095, "y": 4.101627 }, { "x": -1.677782, "y": 4.077782 }, { "x": -1.701627, "y": 4.042095 }, { "x": -1.71, "y": 4 }, { "x": -1.701627, "y": 3.957905 }, { "x": -1.677782, "y": 3.922218 }, { "x": -1.642095, "y": 3.898373 }, { "x": -1.6, "y": 3.89 }, { "x": -1.557905, "y": 3.898373 }, { "x": -1.522218, "y": 3.922218 }, { "x": -1.498373, "y": 3.957905 }, { "x": -1.49, "y": 4 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 2.51, "y": -3.2 }, { "x": 2.501627, "y": -3.157905 }, { "x": 2.477782, "y": -3.122218 }, { "x": 2.442095, "y": -3.098373 }, { "x": 2.4, "y": -3.09 }, { "x": 2.357905, "y": -3.098373 }, { "x": 2.322218, "y": -3.122218 }, { "x": 2.298373, "y": -3.157905 }, { "x": 2.29, "y": -3.2 }, { "x": 2.298373, "y": -3.242095 }, { "x": 2.322218, "y": -3.277782 }, { "x": 2.357905, "y": -3.301627 }, { "x": 2.4, "y": -3.31 }, { "x": 2.442095, "y": -3.301627 }, { "x": 2.477782, "y": -3.277782 }, { "x": 2.501627, "y": -3.242095 }, { "x": 2.51, "y": -3.2 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -3.09, "y": 2.4 }, { "x": -3.098373, "y": 2.442095 }, { "x": -3.122218, "y": 2.477782 }, { "x": -3.157905, "y": 2.501627 }, { "x": -3.2, "y": 2.51 }, { "x": -3.242095, "y": 2.501627 }, { "x": -3.277782, "y": 2.477782 }, { "x": -3.301627, "y": 2.442095 }, { "x": -3.31, "y": 2.4 }, { "x": -3.301627, "y": 2.357905 }, { "x": -3.277782, "y": 2.322218 }, { "x": -3.242095, "y": 2.298373 }, { "x": -3.2, "y": 2.29 }, { "x": -3.157905, "y": 2.298373 }, { "x": -3.122218, "y": 2.322218 }, { "x": -3.098373, "y": 2.357905 }, { "x": -3.09, "y": 2.4 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 2.51, "y": 1.6 }, { "x": 2.501627, "y": 1.642095 }, { "x": 2.477782, "y": 1.677782 }, { "x": 2.442095, "y": 1.701627 }, { "x": 2.4, "y": 1.71 }, { "x": 2.357905, "y": 1.701627 }, { "x": 2.322218, "y": 1.677782 }, { "x": 2.298373, "y": 1.642095 }, { "x": 2.29, "y": 1.6 }, { "x": 2.298373, "y": 1.557905 }, { "x": 2.322218, "y": 1.522218 }, { "x": 2.357905, "y": 1.498373 }, { "x": 2.4, "y": 1.49 }, { "x": 2.442095, "y": 1.498373 }, { "x": 2.477782, "y": 1.522218 }, { "x": 2.501627, "y": 1.557905 }, { "x": 2.51, "y": 1.6 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -2.29, "y": -4 }, { "x": -2.298373, "y": -3.957905 }, { "x": -2.322218, "y": -3.922218 }, { "x": -2.357905, "y": -3.898373 }, { "x": -2.4, "y": -3.89 }, { "x": -2.442095, "y": -3.898373 }, { "x": -2.477782, "y": -3.922218 }, { "x": -2.501627, "y": -3.957905 }, { "x": -2.51, "y": -4 }, { "x": -2.501627, "y": -4.042095 }, { "x": -2.477782, "y": -4.077782 }, { "x": -2.442095, "y": -4.101627 }, { "x": -2.4, "y": -4.11 }, { "x": -2.357905, "y": -4.101627 }, { "x": -2.322218, "y": -4.077782 }, { "x": -2.298373, "y": -4.042095 }, { "x": -2.29, "y": -4 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -2.29, "y": -3.2 }, { "x": -2.298373, "y": -3.157905 }, { "x": -2.322218, "y": -3.122218 }, { "x": -2.357905, "y": -3.098373 }, { "x": -2.4, "y": -3.09 }, { "x": -2.442095, "y": -3.098373 }, { "x": -2.477782, "y": -3.122218 }, { "x": -2.501627, "y": -3.157905 }, { "x": -2.51, "y": -3.2 }, { "x": -2.501627, "y": -3.242095 }, { "x": -2.477782, "y": -3.277782 }, { "x": -2.442095, "y": -3.301627 }, { "x": -2.4, "y": -3.31 }, { "x": -2.357905, "y": -3.301627 }, { "x": -2.322218, "y": -3.277782 }, { "x": -2.298373, "y": -3.242095 }, { "x": -2.29, "y": -3.2 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 2.51, "y": -1.6 }, { "x": 2.501627, "y": -1.557905 }, { "x": 2.477782, "y": -1.522218 }, { "x": 2.442095, "y": -1.498373 }, { "x": 2.4, "y": -1.49 }, { "x": 2.357905, "y": -1.498373 }, { "x": 2.322218, "y": -1.522218 }, { "x": 2.298373, "y": -1.557905 }, { "x": 2.29, "y": -1.6 }, { "x": 2.298373, "y": -1.642095 }, { "x": 2.322218, "y": -1.677782 }, { "x": 2.357905, "y": -1.701627 }, { "x": 2.4, "y": -1.71 }, { "x": 2.442095, "y": -1.701627 }, { "x": 2.477782, "y": -1.677782 }, { "x": 2.501627, "y": -1.642095 }, { "x": 2.51, "y": -1.6 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -2.29, "y": -0.8 }, { "x": -2.298373, "y": -0.757905 }, { "x": -2.322218, "y": -0.722218 }, { "x": -2.357905, "y": -0.698373 }, { "x": -2.4, "y": -0.69 }, { "x": -2.442095, "y": -0.698373 }, { "x": -2.477782, "y": -0.722218 }, { "x": -2.501627, "y": -0.757905 }, { "x": -2.51, "y": -0.8 }, { "x": -2.501627, "y": -0.842095 }, { "x": -2.477782, "y": -0.877782 }, { "x": -2.442095, "y": -0.901627 }, { "x": -2.4, "y": -0.91 }, { "x": -2.357905, "y": -0.901627 }, { "x": -2.322218, "y": -0.877782 }, { "x": -2.298373, "y": -0.842095 }, { "x": -2.29, "y": -0.8 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -3.97, "y": 5 }, { "x": -3.972284, "y": 5.011481 }, { "x": -3.978787, "y": 5.021213 }, { "x": -3.988519, "y": 5.027716 }, { "x": -4, "y": 5.03 }, { "x": -4.011481, "y": 5.027716 }, { "x": -4.021213, "y": 5.021213 }, { "x": -4.027716, "y": 5.011481 }, { "x": -4.03, "y": 5 }, { "x": -4.027716, "y": 4.988519 }, { "x": -4.021213, "y": 4.978787 }, { "x": -4.011481, "y": 4.972284 }, { "x": -4, "y": 4.97 }, { "x": -3.988519, "y": 4.972284 }, { "x": -3.978787, "y": 4.978787 }, { "x": -3.972284, "y": 4.988519 }, { "x": -3.97, "y": 5 }]} strokeWidth={0.06}/>
<fabricationnotepath route={[{ "x": -1.49, "y": -2.4 }, { "x": -1.498373, "y": -2.357905 }, { "x": -1.522218, "y": -2.322218 }, { "x": -1.557905, "y": -2.298373 }, { "x": -1.6, "y": -2.29 }, { "x": -1.642095, "y": -2.298373 }, { "x": -1.677782, "y": -2.322218 }, { "x": -1.701627, "y": -2.357905 }, { "x": -1.71, "y": -2.4 }, { "x": -1.701627, "y": -2.442095 }, { "x": -1.677782, "y": -2.477782 }, { "x": -1.642095, "y": -2.501627 }, { "x": -1.6, "y": -2.51 }, { "x": -1.557905, "y": -2.501627 }, { "x": -1.522218, "y": -2.477782 }, { "x": -1.498373, "y": -2.442095 }, { "x": -1.49, "y": -2.4 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -3.09, "y": -2.4 }, { "x": -3.098373, "y": -2.357905 }, { "x": -3.122218, "y": -2.322218 }, { "x": -3.157905, "y": -2.298373 }, { "x": -3.2, "y": -2.29 }, { "x": -3.242095, "y": -2.298373 }, { "x": -3.277782, "y": -2.322218 }, { "x": -3.301627, "y": -2.357905 }, { "x": -3.31, "y": -2.4 }, { "x": -3.301627, "y": -2.442095 }, { "x": -3.277782, "y": -2.477782 }, { "x": -3.242095, "y": -2.501627 }, { "x": -3.2, "y": -2.51 }, { "x": -3.157905, "y": -2.501627 }, { "x": -3.122218, "y": -2.477782 }, { "x": -3.098373, "y": -2.442095 }, { "x": -3.09, "y": -2.4 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -2.29, "y": 1.6 }, { "x": -2.298373, "y": 1.642095 }, { "x": -2.322218, "y": 1.677782 }, { "x": -2.357905, "y": 1.701627 }, { "x": -2.4, "y": 1.71 }, { "x": -2.442095, "y": 1.701627 }, { "x": -2.477782, "y": 1.677782 }, { "x": -2.501627, "y": 1.642095 }, { "x": -2.51, "y": 1.6 }, { "x": -2.501627, "y": 1.557905 }, { "x": -2.477782, "y": 1.522218 }, { "x": -2.442095, "y": 1.498373 }, { "x": -2.4, "y": 1.49 }, { "x": -2.357905, "y": 1.498373 }, { "x": -2.322218, "y": 1.522218 }, { "x": -2.298373, "y": 1.557905 }, { "x": -2.29, "y": 1.6 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -3.09, "y": 0.8 }, { "x": -3.098373, "y": 0.842095 }, { "x": -3.122218, "y": 0.877782 }, { "x": -3.157905, "y": 0.901627 }, { "x": -3.2, "y": 0.91 }, { "x": -3.242095, "y": 0.901627 }, { "x": -3.277782, "y": 0.877782 }, { "x": -3.301627, "y": 0.842095 }, { "x": -3.31, "y": 0.8 }, { "x": -3.301627, "y": 0.757905 }, { "x": -3.277782, "y": 0.722218 }, { "x": -3.242095, "y": 0.698373 }, { "x": -3.2, "y": 0.69 }, { "x": -3.157905, "y": 0.698373 }, { "x": -3.122218, "y": 0.722218 }, { "x": -3.098373, "y": 0.757905 }, { "x": -3.09, "y": 0.8 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -1.49, "y": 3.2 }, { "x": -1.498373, "y": 3.242095 }, { "x": -1.522218, "y": 3.277782 }, { "x": -1.557905, "y": 3.301627 }, { "x": -1.6, "y": 3.31 }, { "x": -1.642095, "y": 3.301627 }, { "x": -1.677782, "y": 3.277782 }, { "x": -1.701627, "y": 3.242095 }, { "x": -1.71, "y": 3.2 }, { "x": -1.701627, "y": 3.157905 }, { "x": -1.677782, "y": 3.122218 }, { "x": -1.642095, "y": 3.098373 }, { "x": -1.6, "y": 3.09 }, { "x": -1.557905, "y": 3.098373 }, { "x": -1.522218, "y": 3.122218 }, { "x": -1.498373, "y": 3.157905 }, { "x": -1.49, "y": 3.2 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 1.71, "y": -2.4 }, { "x": 1.701627, "y": -2.357905 }, { "x": 1.677782, "y": -2.322218 }, { "x": 1.642095, "y": -2.298373 }, { "x": 1.6, "y": -2.29 }, { "x": 1.557905, "y": -2.298373 }, { "x": 1.522218, "y": -2.322218 }, { "x": 1.498373, "y": -2.357905 }, { "x": 1.49, "y": -2.4 }, { "x": 1.498373, "y": -2.442095 }, { "x": 1.522218, "y": -2.477782 }, { "x": 1.557905, "y": -2.501627 }, { "x": 1.6, "y": -2.51 }, { "x": 1.642095, "y": -2.501627 }, { "x": 1.677782, "y": -2.477782 }, { "x": 1.701627, "y": -2.442095 }, { "x": 1.71, "y": -2.4 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 2.51, "y": 4 }, { "x": 2.501627, "y": 4.042095 }, { "x": 2.477782, "y": 4.077782 }, { "x": 2.442095, "y": 4.101627 }, { "x": 2.4, "y": 4.11 }, { "x": 2.357905, "y": 4.101627 }, { "x": 2.322218, "y": 4.077782 }, { "x": 2.298373, "y": 4.042095 }, { "x": 2.29, "y": 4 }, { "x": 2.298373, "y": 3.957905 }, { "x": 2.322218, "y": 3.922218 }, { "x": 2.357905, "y": 3.898373 }, { "x": 2.4, "y": 3.89 }, { "x": 2.442095, "y": 3.898373 }, { "x": 2.477782, "y": 3.922218 }, { "x": 2.501627, "y": 3.957905 }, { "x": 2.51, "y": 4 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 3.31, "y": 1.6 }, { "x": 3.301627, "y": 1.642095 }, { "x": 3.277782, "y": 1.677782 }, { "x": 3.242095, "y": 1.701627 }, { "x": 3.2, "y": 1.71 }, { "x": 3.157905, "y": 1.701627 }, { "x": 3.122218, "y": 1.677782 }, { "x": 3.098373, "y": 1.642095 }, { "x": 3.09, "y": 1.6 }, { "x": 3.098373, "y": 1.557905 }, { "x": 3.122218, "y": 1.522218 }, { "x": 3.157905, "y": 1.498373 }, { "x": 3.2, "y": 1.49 }, { "x": 3.242095, "y": 1.498373 }, { "x": 3.277782, "y": 1.522218 }, { "x": 3.301627, "y": 1.557905 }, { "x": 3.31, "y": 1.6 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -1.49, "y": 1.6 }, { "x": -1.498373, "y": 1.642095 }, { "x": -1.522218, "y": 1.677782 }, { "x": -1.557905, "y": 1.701627 }, { "x": -1.6, "y": 1.71 }, { "x": -1.642095, "y": 1.701627 }, { "x": -1.677782, "y": 1.677782 }, { "x": -1.701627, "y": 1.642095 }, { "x": -1.71, "y": 1.6 }, { "x": -1.701627, "y": 1.557905 }, { "x": -1.677782, "y": 1.522218 }, { "x": -1.642095, "y": 1.498373 }, { "x": -1.6, "y": 1.49 }, { "x": -1.557905, "y": 1.498373 }, { "x": -1.522218, "y": 1.522218 }, { "x": -1.498373, "y": 1.557905 }, { "x": -1.49, "y": 1.6 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 2.51, "y": 2.4 }, { "x": 2.501627, "y": 2.442095 }, { "x": 2.477782, "y": 2.477782 }, { "x": 2.442095, "y": 2.501627 }, { "x": 2.4, "y": 2.51 }, { "x": 2.357905, "y": 2.501627 }, { "x": 2.322218, "y": 2.477782 }, { "x": 2.298373, "y": 2.442095 }, { "x": 2.29, "y": 2.4 }, { "x": 2.298373, "y": 2.357905 }, { "x": 2.322218, "y": 2.322218 }, { "x": 2.357905, "y": 2.298373 }, { "x": 2.4, "y": 2.29 }, { "x": 2.442095, "y": 2.298373 }, { "x": 2.477782, "y": 2.322218 }, { "x": 2.501627, "y": 2.357905 }, { "x": 2.51, "y": 2.4 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -1.49, "y": 0.8 }, { "x": -1.498373, "y": 0.842095 }, { "x": -1.522218, "y": 0.877782 }, { "x": -1.557905, "y": 0.901627 }, { "x": -1.6, "y": 0.91 }, { "x": -1.642095, "y": 0.901627 }, { "x": -1.677782, "y": 0.877782 }, { "x": -1.701627, "y": 0.842095 }, { "x": -1.71, "y": 0.8 }, { "x": -1.701627, "y": 0.757905 }, { "x": -1.677782, "y": 0.722218 }, { "x": -1.642095, "y": 0.698373 }, { "x": -1.6, "y": 0.69 }, { "x": -1.557905, "y": 0.698373 }, { "x": -1.522218, "y": 0.722218 }, { "x": -1.498373, "y": 0.757905 }, { "x": -1.49, "y": 0.8 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 3.31, "y": 0.8 }, { "x": 3.301627, "y": 0.842095 }, { "x": 3.277782, "y": 0.877782 }, { "x": 3.242095, "y": 0.901627 }, { "x": 3.2, "y": 0.91 }, { "x": 3.157905, "y": 0.901627 }, { "x": 3.122218, "y": 0.877782 }, { "x": 3.098373, "y": 0.842095 }, { "x": 3.09, "y": 0.8 }, { "x": 3.098373, "y": 0.757905 }, { "x": 3.122218, "y": 0.722218 }, { "x": 3.157905, "y": 0.698373 }, { "x": 3.2, "y": 0.69 }, { "x": 3.242095, "y": 0.698373 }, { "x": 3.277782, "y": 0.722218 }, { "x": 3.301627, "y": 0.757905 }, { "x": 3.31, "y": 0.8 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -2.29, "y": 2.4 }, { "x": -2.298373, "y": 2.442095 }, { "x": -2.322218, "y": 2.477782 }, { "x": -2.357905, "y": 2.501627 }, { "x": -2.4, "y": 2.51 }, { "x": -2.442095, "y": 2.501627 }, { "x": -2.477782, "y": 2.477782 }, { "x": -2.501627, "y": 2.442095 }, { "x": -2.51, "y": 2.4 }, { "x": -2.501627, "y": 2.357905 }, { "x": -2.477782, "y": 2.322218 }, { "x": -2.442095, "y": 2.298373 }, { "x": -2.4, "y": 2.29 }, { "x": -2.357905, "y": 2.298373 }, { "x": -2.322218, "y": 2.322218 }, { "x": -2.298373, "y": 2.357905 }, { "x": -2.29, "y": 2.4 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 1.71, "y": 0 }, { "x": 1.701627, "y": 0.042095 }, { "x": 1.677782, "y": 0.077782 }, { "x": 1.642095, "y": 0.101627 }, { "x": 1.6, "y": 0.11 }, { "x": 1.557905, "y": 0.101627 }, { "x": 1.522218, "y": 0.077782 }, { "x": 1.498373, "y": 0.042095 }, { "x": 1.49, "y": 0 }, { "x": 1.498373, "y": -0.042095 }, { "x": 1.522218, "y": -0.077782 }, { "x": 1.557905, "y": -0.101627 }, { "x": 1.6, "y": -0.11 }, { "x": 1.642095, "y": -0.101627 }, { "x": 1.677782, "y": -0.077782 }, { "x": 1.701627, "y": -0.042095 }, { "x": 1.71, "y": 0 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 2.51, "y": 3.2 }, { "x": 2.501627, "y": 3.242095 }, { "x": 2.477782, "y": 3.277782 }, { "x": 2.442095, "y": 3.301627 }, { "x": 2.4, "y": 3.31 }, { "x": 2.357905, "y": 3.301627 }, { "x": 2.322218, "y": 3.277782 }, { "x": 2.298373, "y": 3.242095 }, { "x": 2.29, "y": 3.2 }, { "x": 2.298373, "y": 3.157905 }, { "x": 2.322218, "y": 3.122218 }, { "x": 2.357905, "y": 3.098373 }, { "x": 2.4, "y": 3.09 }, { "x": 2.442095, "y": 3.098373 }, { "x": 2.477782, "y": 3.122218 }, { "x": 2.501627, "y": 3.157905 }, { "x": 2.51, "y": 3.2 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -2.29, "y": 4 }, { "x": -2.298373, "y": 4.042095 }, { "x": -2.322218, "y": 4.077782 }, { "x": -2.357905, "y": 4.101627 }, { "x": -2.4, "y": 4.11 }, { "x": -2.442095, "y": 4.101627 }, { "x": -2.477782, "y": 4.077782 }, { "x": -2.501627, "y": 4.042095 }, { "x": -2.51, "y": 4 }, { "x": -2.501627, "y": 3.957905 }, { "x": -2.477782, "y": 3.922218 }, { "x": -2.442095, "y": 3.898373 }, { "x": -2.4, "y": 3.89 }, { "x": -2.357905, "y": 3.898373 }, { "x": -2.322218, "y": 3.922218 }, { "x": -2.298373, "y": 3.957905 }, { "x": -2.29, "y": 4 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -2.29, "y": -1.6 }, { "x": -2.298373, "y": -1.557905 }, { "x": -2.322218, "y": -1.522218 }, { "x": -2.357905, "y": -1.498373 }, { "x": -2.4, "y": -1.49 }, { "x": -2.442095, "y": -1.498373 }, { "x": -2.477782, "y": -1.522218 }, { "x": -2.501627, "y": -1.557905 }, { "x": -2.51, "y": -1.6 }, { "x": -2.501627, "y": -1.642095 }, { "x": -2.477782, "y": -1.677782 }, { "x": -2.442095, "y": -1.701627 }, { "x": -2.4, "y": -1.71 }, { "x": -2.357905, "y": -1.701627 }, { "x": -2.322218, "y": -1.677782 }, { "x": -2.298373, "y": -1.642095 }, { "x": -2.29, "y": -1.6 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -1.49, "y": -1.6 }, { "x": -1.498373, "y": -1.557905 }, { "x": -1.522218, "y": -1.522218 }, { "x": -1.557905, "y": -1.498373 }, { "x": -1.6, "y": -1.49 }, { "x": -1.642095, "y": -1.498373 }, { "x": -1.677782, "y": -1.522218 }, { "x": -1.701627, "y": -1.557905 }, { "x": -1.71, "y": -1.6 }, { "x": -1.701627, "y": -1.642095 }, { "x": -1.677782, "y": -1.677782 }, { "x": -1.642095, "y": -1.701627 }, { "x": -1.6, "y": -1.71 }, { "x": -1.557905, "y": -1.701627 }, { "x": -1.522218, "y": -1.677782 }, { "x": -1.498373, "y": -1.642095 }, { "x": -1.49, "y": -1.6 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 2.51, "y": 0 }, { "x": 2.501627, "y": 0.042095 }, { "x": 2.477782, "y": 0.077782 }, { "x": 2.442095, "y": 0.101627 }, { "x": 2.4, "y": 0.11 }, { "x": 2.357905, "y": 0.101627 }, { "x": 2.322218, "y": 0.077782 }, { "x": 2.298373, "y": 0.042095 }, { "x": 2.29, "y": 0 }, { "x": 2.298373, "y": -0.042095 }, { "x": 2.322218, "y": -0.077782 }, { "x": 2.357905, "y": -0.101627 }, { "x": 2.4, "y": -0.11 }, { "x": 2.442095, "y": -0.101627 }, { "x": 2.477782, "y": -0.077782 }, { "x": 2.501627, "y": -0.042095 }, { "x": 2.51, "y": 0 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 1.71, "y": 1.6 }, { "x": 1.701627, "y": 1.642095 }, { "x": 1.677782, "y": 1.677782 }, { "x": 1.642095, "y": 1.701627 }, { "x": 1.6, "y": 1.71 }, { "x": 1.557905, "y": 1.701627 }, { "x": 1.522218, "y": 1.677782 }, { "x": 1.498373, "y": 1.642095 }, { "x": 1.49, "y": 1.6 }, { "x": 1.498373, "y": 1.557905 }, { "x": 1.522218, "y": 1.522218 }, { "x": 1.557905, "y": 1.498373 }, { "x": 1.6, "y": 1.49 }, { "x": 1.642095, "y": 1.498373 }, { "x": 1.677782, "y": 1.522218 }, { "x": 1.701627, "y": 1.557905 }, { "x": 1.71, "y": 1.6 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -2.29, "y": 3.2 }, { "x": -2.298373, "y": 3.242095 }, { "x": -2.322218, "y": 3.277782 }, { "x": -2.357905, "y": 3.301627 }, { "x": -2.4, "y": 3.31 }, { "x": -2.442095, "y": 3.301627 }, { "x": -2.477782, "y": 3.277782 }, { "x": -2.501627, "y": 3.242095 }, { "x": -2.51, "y": 3.2 }, { "x": -2.501627, "y": 3.157905 }, { "x": -2.477782, "y": 3.122218 }, { "x": -2.442095, "y": 3.098373 }, { "x": -2.4, "y": 3.09 }, { "x": -2.357905, "y": 3.098373 }, { "x": -2.322218, "y": 3.122218 }, { "x": -2.298373, "y": 3.157905 }, { "x": -2.29, "y": 3.2 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 1.71, "y": 2.4 }, { "x": 1.701627, "y": 2.442095 }, { "x": 1.677782, "y": 2.477782 }, { "x": 1.642095, "y": 2.501627 }, { "x": 1.6, "y": 2.51 }, { "x": 1.557905, "y": 2.501627 }, { "x": 1.522218, "y": 2.477782 }, { "x": 1.498373, "y": 2.442095 }, { "x": 1.49, "y": 2.4 }, { "x": 1.498373, "y": 2.357905 }, { "x": 1.522218, "y": 2.322218 }, { "x": 1.557905, "y": 2.298373 }, { "x": 1.6, "y": 2.29 }, { "x": 1.642095, "y": 2.298373 }, { "x": 1.677782, "y": 2.322218 }, { "x": 1.701627, "y": 2.357905 }, { "x": 1.71, "y": 2.4 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -1.49, "y": 2.4 }, { "x": -1.498373, "y": 2.442095 }, { "x": -1.522218, "y": 2.477782 }, { "x": -1.557905, "y": 2.501627 }, { "x": -1.6, "y": 2.51 }, { "x": -1.642095, "y": 2.501627 }, { "x": -1.677782, "y": 2.477782 }, { "x": -1.701627, "y": 2.442095 }, { "x": -1.71, "y": 2.4 }, { "x": -1.701627, "y": 2.357905 }, { "x": -1.677782, "y": 2.322218 }, { "x": -1.642095, "y": 2.298373 }, { "x": -1.6, "y": 2.29 }, { "x": -1.557905, "y": 2.298373 }, { "x": -1.522218, "y": 2.322218 }, { "x": -1.498373, "y": 2.357905 }, { "x": -1.49, "y": 2.4 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -1.49, "y": -0.8 }, { "x": -1.498373, "y": -0.757905 }, { "x": -1.522218, "y": -0.722218 }, { "x": -1.557905, "y": -0.698373 }, { "x": -1.6, "y": -0.69 }, { "x": -1.642095, "y": -0.698373 }, { "x": -1.677782, "y": -0.722218 }, { "x": -1.701627, "y": -0.757905 }, { "x": -1.71, "y": -0.8 }, { "x": -1.701627, "y": -0.842095 }, { "x": -1.677782, "y": -0.877782 }, { "x": -1.642095, "y": -0.901627 }, { "x": -1.6, "y": -0.91 }, { "x": -1.557905, "y": -0.901627 }, { "x": -1.522218, "y": -0.877782 }, { "x": -1.498373, "y": -0.842095 }, { "x": -1.49, "y": -0.8 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -3.09, "y": -4 }, { "x": -3.098373, "y": -3.957905 }, { "x": -3.122218, "y": -3.922218 }, { "x": -3.157905, "y": -3.898373 }, { "x": -3.2, "y": -3.89 }, { "x": -3.242095, "y": -3.898373 }, { "x": -3.277782, "y": -3.922218 }, { "x": -3.301627, "y": -3.957905 }, { "x": -3.31, "y": -4 }, { "x": -3.301627, "y": -4.042095 }, { "x": -3.277782, "y": -4.077782 }, { "x": -3.242095, "y": -4.101627 }, { "x": -3.2, "y": -4.11 }, { "x": -3.157905, "y": -4.101627 }, { "x": -3.122218, "y": -4.077782 }, { "x": -3.098373, "y": -4.042095 }, { "x": -3.09, "y": -4 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -3.09, "y": 4 }, { "x": -3.098373, "y": 4.042095 }, { "x": -3.122218, "y": 4.077782 }, { "x": -3.157905, "y": 4.101627 }, { "x": -3.2, "y": 4.11 }, { "x": -3.242095, "y": 4.101627 }, { "x": -3.277782, "y": 4.077782 }, { "x": -3.301627, "y": 4.042095 }, { "x": -3.31, "y": 4 }, { "x": -3.301627, "y": 3.957905 }, { "x": -3.277782, "y": 3.922218 }, { "x": -3.242095, "y": 3.898373 }, { "x": -3.2, "y": 3.89 }, { "x": -3.157905, "y": 3.898373 }, { "x": -3.122218, "y": 3.922218 }, { "x": -3.098373, "y": 3.957905 }, { "x": -3.09, "y": 4 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -3.09, "y": -0.8 }, { "x": -3.098373, "y": -0.757905 }, { "x": -3.122218, "y": -0.722218 }, { "x": -3.157905, "y": -0.698373 }, { "x": -3.2, "y": -0.69 }, { "x": -3.242095, "y": -0.698373 }, { "x": -3.277782, "y": -0.722218 }, { "x": -3.301627, "y": -0.757905 }, { "x": -3.31, "y": -0.8 }, { "x": -3.301627, "y": -0.842095 }, { "x": -3.277782, "y": -0.877782 }, { "x": -3.242095, "y": -0.901627 }, { "x": -3.2, "y": -0.91 }, { "x": -3.157905, "y": -0.901627 }, { "x": -3.122218, "y": -0.877782 }, { "x": -3.098373, "y": -0.842095 }, { "x": -3.09, "y": -0.8 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 1.71, "y": -4 }, { "x": 1.701627, "y": -3.957905 }, { "x": 1.677782, "y": -3.922218 }, { "x": 1.642095, "y": -3.898373 }, { "x": 1.6, "y": -3.89 }, { "x": 1.557905, "y": -3.898373 }, { "x": 1.522218, "y": -3.922218 }, { "x": 1.498373, "y": -3.957905 }, { "x": 1.49, "y": -4 }, { "x": 1.498373, "y": -4.042095 }, { "x": 1.522218, "y": -4.077782 }, { "x": 1.557905, "y": -4.101627 }, { "x": 1.6, "y": -4.11 }, { "x": 1.642095, "y": -4.101627 }, { "x": 1.677782, "y": -4.077782 }, { "x": 1.701627, "y": -4.042095 }, { "x": 1.71, "y": -4 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 1.71, "y": -3.2 }, { "x": 1.701627, "y": -3.157905 }, { "x": 1.677782, "y": -3.122218 }, { "x": 1.642095, "y": -3.098373 }, { "x": 1.6, "y": -3.09 }, { "x": 1.557905, "y": -3.098373 }, { "x": 1.522218, "y": -3.122218 }, { "x": 1.498373, "y": -3.157905 }, { "x": 1.49, "y": -3.2 }, { "x": 1.498373, "y": -3.242095 }, { "x": 1.522218, "y": -3.277782 }, { "x": 1.557905, "y": -3.301627 }, { "x": 1.6, "y": -3.31 }, { "x": 1.642095, "y": -3.301627 }, { "x": 1.677782, "y": -3.277782 }, { "x": 1.701627, "y": -3.242095 }, { "x": 1.71, "y": -3.2 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 3.31, "y": 3.2 }, { "x": 3.301627, "y": 3.242095 }, { "x": 3.277782, "y": 3.277782 }, { "x": 3.242095, "y": 3.301627 }, { "x": 3.2, "y": 3.31 }, { "x": 3.157905, "y": 3.301627 }, { "x": 3.122218, "y": 3.277782 }, { "x": 3.098373, "y": 3.242095 }, { "x": 3.09, "y": 3.2 }, { "x": 3.098373, "y": 3.157905 }, { "x": 3.122218, "y": 3.122218 }, { "x": 3.157905, "y": 3.098373 }, { "x": 3.2, "y": 3.09 }, { "x": 3.242095, "y": 3.098373 }, { "x": 3.277782, "y": 3.122218 }, { "x": 3.301627, "y": 3.157905 }, { "x": 3.31, "y": 3.2 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 1.71, "y": 3.2 }, { "x": 1.701627, "y": 3.242095 }, { "x": 1.677782, "y": 3.277782 }, { "x": 1.642095, "y": 3.301627 }, { "x": 1.6, "y": 3.31 }, { "x": 1.557905, "y": 3.301627 }, { "x": 1.522218, "y": 3.277782 }, { "x": 1.498373, "y": 3.242095 }, { "x": 1.49, "y": 3.2 }, { "x": 1.498373, "y": 3.157905 }, { "x": 1.522218, "y": 3.122218 }, { "x": 1.557905, "y": 3.098373 }, { "x": 1.6, "y": 3.09 }, { "x": 1.642095, "y": 3.098373 }, { "x": 1.677782, "y": 3.122218 }, { "x": 1.701627, "y": 3.157905 }, { "x": 1.71, "y": 3.2 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -2.29, "y": 0 }, { "x": -2.298373, "y": 0.042095 }, { "x": -2.322218, "y": 0.077782 }, { "x": -2.357905, "y": 0.101627 }, { "x": -2.4, "y": 0.11 }, { "x": -2.442095, "y": 0.101627 }, { "x": -2.477782, "y": 0.077782 }, { "x": -2.501627, "y": 0.042095 }, { "x": -2.51, "y": 0 }, { "x": -2.501627, "y": -0.042095 }, { "x": -2.477782, "y": -0.077782 }, { "x": -2.442095, "y": -0.101627 }, { "x": -2.4, "y": -0.11 }, { "x": -2.357905, "y": -0.101627 }, { "x": -2.322218, "y": -0.077782 }, { "x": -2.298373, "y": -0.042095 }, { "x": -2.29, "y": 0 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -1.49, "y": -4 }, { "x": -1.498373, "y": -3.957905 }, { "x": -1.522218, "y": -3.922218 }, { "x": -1.557905, "y": -3.898373 }, { "x": -1.6, "y": -3.89 }, { "x": -1.642095, "y": -3.898373 }, { "x": -1.677782, "y": -3.922218 }, { "x": -1.701627, "y": -3.957905 }, { "x": -1.71, "y": -4 }, { "x": -1.701627, "y": -4.042095 }, { "x": -1.677782, "y": -4.077782 }, { "x": -1.642095, "y": -4.101627 }, { "x": -1.6, "y": -4.11 }, { "x": -1.557905, "y": -4.101627 }, { "x": -1.522218, "y": -4.077782 }, { "x": -1.498373, "y": -4.042095 }, { "x": -1.49, "y": -4 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 1.71, "y": -0.8 }, { "x": 1.701627, "y": -0.757905 }, { "x": 1.677782, "y": -0.722218 }, { "x": 1.642095, "y": -0.698373 }, { "x": 1.6, "y": -0.69 }, { "x": 1.557905, "y": -0.698373 }, { "x": 1.522218, "y": -0.722218 }, { "x": 1.498373, "y": -0.757905 }, { "x": 1.49, "y": -0.8 }, { "x": 1.498373, "y": -0.842095 }, { "x": 1.522218, "y": -0.877782 }, { "x": 1.557905, "y": -0.901627 }, { "x": 1.6, "y": -0.91 }, { "x": 1.642095, "y": -0.901627 }, { "x": 1.677782, "y": -0.877782 }, { "x": 1.701627, "y": -0.842095 }, { "x": 1.71, "y": -0.8 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 2.51, "y": 0.8 }, { "x": 2.501627, "y": 0.842095 }, { "x": 2.477782, "y": 0.877782 }, { "x": 2.442095, "y": 0.901627 }, { "x": 2.4, "y": 0.91 }, { "x": 2.357905, "y": 0.901627 }, { "x": 2.322218, "y": 0.877782 }, { "x": 2.298373, "y": 0.842095 }, { "x": 2.29, "y": 0.8 }, { "x": 2.298373, "y": 0.757905 }, { "x": 2.322218, "y": 0.722218 }, { "x": 2.357905, "y": 0.698373 }, { "x": 2.4, "y": 0.69 }, { "x": 2.442095, "y": 0.698373 }, { "x": 2.477782, "y": 0.722218 }, { "x": 2.501627, "y": 0.757905 }, { "x": 2.51, "y": 0.8 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 3.31, "y": 0 }, { "x": 3.301627, "y": 0.042095 }, { "x": 3.277782, "y": 0.077782 }, { "x": 3.242095, "y": 0.101627 }, { "x": 3.2, "y": 0.11 }, { "x": 3.157905, "y": 0.101627 }, { "x": 3.122218, "y": 0.077782 }, { "x": 3.098373, "y": 0.042095 }, { "x": 3.09, "y": 0 }, { "x": 3.098373, "y": -0.042095 }, { "x": 3.122218, "y": -0.077782 }, { "x": 3.157905, "y": -0.101627 }, { "x": 3.2, "y": -0.11 }, { "x": 3.242095, "y": -0.101627 }, { "x": 3.277782, "y": -0.077782 }, { "x": 3.301627, "y": -0.042095 }, { "x": 3.31, "y": 0 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 1.71, "y": -1.6 }, { "x": 1.701627, "y": -1.557905 }, { "x": 1.677782, "y": -1.522218 }, { "x": 1.642095, "y": -1.498373 }, { "x": 1.6, "y": -1.49 }, { "x": 1.557905, "y": -1.498373 }, { "x": 1.522218, "y": -1.522218 }, { "x": 1.498373, "y": -1.557905 }, { "x": 1.49, "y": -1.6 }, { "x": 1.498373, "y": -1.642095 }, { "x": 1.522218, "y": -1.677782 }, { "x": 1.557905, "y": -1.701627 }, { "x": 1.6, "y": -1.71 }, { "x": 1.642095, "y": -1.701627 }, { "x": 1.677782, "y": -1.677782 }, { "x": 1.701627, "y": -1.642095 }, { "x": 1.71, "y": -1.6 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -2.29, "y": -2.4 }, { "x": -2.298373, "y": -2.357905 }, { "x": -2.322218, "y": -2.322218 }, { "x": -2.357905, "y": -2.298373 }, { "x": -2.4, "y": -2.29 }, { "x": -2.442095, "y": -2.298373 }, { "x": -2.477782, "y": -2.322218 }, { "x": -2.501627, "y": -2.357905 }, { "x": -2.51, "y": -2.4 }, { "x": -2.501627, "y": -2.442095 }, { "x": -2.477782, "y": -2.477782 }, { "x": -2.442095, "y": -2.501627 }, { "x": -2.4, "y": -2.51 }, { "x": -2.357905, "y": -2.501627 }, { "x": -2.322218, "y": -2.477782 }, { "x": -2.298373, "y": -2.442095 }, { "x": -2.29, "y": -2.4 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 2.51, "y": -2.4 }, { "x": 2.501627, "y": -2.357905 }, { "x": 2.477782, "y": -2.322218 }, { "x": 2.442095, "y": -2.298373 }, { "x": 2.4, "y": -2.29 }, { "x": 2.357905, "y": -2.298373 }, { "x": 2.322218, "y": -2.322218 }, { "x": 2.298373, "y": -2.357905 }, { "x": 2.29, "y": -2.4 }, { "x": 2.298373, "y": -2.442095 }, { "x": 2.322218, "y": -2.477782 }, { "x": 2.357905, "y": -2.501627 }, { "x": 2.4, "y": -2.51 }, { "x": 2.442095, "y": -2.501627 }, { "x": 2.477782, "y": -2.477782 }, { "x": 2.501627, "y": -2.442095 }, { "x": 2.51, "y": -2.4 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": 1.71, "y": 4 }, { "x": 1.701627, "y": 4.042095 }, { "x": 1.677782, "y": 4.077782 }, { "x": 1.642095, "y": 4.101627 }, { "x": 1.6, "y": 4.11 }, { "x": 1.557905, "y": 4.101627 }, { "x": 1.522218, "y": 4.077782 }, { "x": 1.498373, "y": 4.042095 }, { "x": 1.49, "y": 4 }, { "x": 1.498373, "y": 3.957905 }, { "x": 1.522218, "y": 3.922218 }, { "x": 1.557905, "y": 3.898373 }, { "x": 1.6, "y": 3.89 }, { "x": 1.642095, "y": 3.898373 }, { "x": 1.677782, "y": 3.922218 }, { "x": 1.701627, "y": 3.957905 }, { "x": 1.71, "y": 4 }]} strokeWidth={0.22}/>
<fabricationnotepath route={[{ "x": -3.09, "y": 3.2 }, { "x": -3.098373, "y": 3.242095 }, { "x": -3.122218, "y": 3.277782 }, { "x": -3.157905, "y": 3.301627 }, { "x": -3.2, "y": 3.31 }, { "x": -3.242095, "y": 3.301627 }, { "x": -3.277782, "y": 3.277782 }, { "x": -3.301627, "y": 3.242095 }, { "x": -3.31, "y": 3.2 }, { "x": -3.301627, "y": 3.157905 }, { "x": -3.277782, "y": 3.122218 }, { "x": -3.242095, "y": 3.098373 }, { "x": -3.2, "y": 3.09 }, { "x": -3.157905, "y": 3.098373 }, { "x": -3.122218, "y": 3.122218 }, { "x": -3.098373, "y": 3.157905 }, { "x": -3.09, "y": 3.2 }]} strokeWidth={0.22}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U2" font="tscircuit2024" fontSize={1}/>

      </footprint>);
// D12: RLED; LED_SMD:LED_0603_1608Metric
export const Footprint_D12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D12" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// D1: GLED; LED_SMD:LED_0603_1608Metric
export const Footprint_D1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D1" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// D14: RLED; LED_SMD:LED_0603_1608Metric
export const Footprint_D14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D14" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// C49: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C49 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C49" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C142: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C142 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C142" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C6: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C6" font="tscircuit2024" fontSize={0.8}/>

<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": 2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": -2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": 2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": -2.3, "y": -1.15 }]} layer="top"/>
      </footprint>);
// R17: 15K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R17" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C15: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" ccwRotation={0} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C15" font="tscircuit2024" fontSize={0.8}/>

<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": -2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": 2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": -2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": 2.3, "y": -1.15 }]} layer="top"/>
      </footprint>);
// C60: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C60 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C60" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C143: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C143 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C143" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C13: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C13" font="tscircuit2024" fontSize={0.8}/>

<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": 2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": -2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": 2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": -2.3, "y": 1.15 }]} layer="top"/>
      </footprint>);
// C103: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C103 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C103" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// NT4: NetTie_2; NetTie:NetTie-2_SMD_Pad0.5mm
export const Footprint_NT4 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.5mm" pcbY="0mm" layer="bottom" radius="0.25mm" shape="circle"/>
<smtpad portHints={["pin2"]} pcbX="0.5mm" pcbY="0mm" layer="bottom" radius="0.25mm" shape="circle"/>

<courtyardoutline outline={[{ "x": 1, "y": 0.5 }, { "x": 1, "y": -0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1, "y": 0.5 }, { "x": 1, "y": 0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1, "y": -0.5 }, { "x": -1, "y": -0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1, "y": -0.5 }, { "x": -1, "y": 0.5 }]} layer="bottom"/>
      </footprint>);
// C102: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C102 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C102" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// R19: 2K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R19 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R19" font="tscircuit2024" fontSize={0.26} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
      </footprint>);
// C53: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C53 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C53" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
      </footprint>);
// C113: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C113 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C113" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// R12: 3K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R12 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R12" font="tscircuit2024" fontSize={0.26} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
      </footprint>);
// C24: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C24 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C24" font="tscircuit2024" fontSize={0.8} layer="bottom"/>

<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": 2.3, "y": -1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": 2.3, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": -2.3, "y": -1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": -2.3, "y": 1.15 }]} layer="bottom"/>
      </footprint>);
// C101: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C101 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C101" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// R30: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R30 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R30" font="tscircuit2024" fontSize={0.26} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
      </footprint>);
// C29: 47uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C29 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C29" font="tscircuit2024" fontSize={0.5} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": 1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": -1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": -1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": 1.7, "y": 0.98 }]} layer="bottom"/>
      </footprint>);
// C56: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C56 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C56" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
      </footprint>);
// C41: 47uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C41 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C41" font="tscircuit2024" fontSize={0.5} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": -1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": -1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": 1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": 1.7, "y": 0.98 }]} layer="bottom"/>
      </footprint>);
// C120: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C120 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C120" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// C44: 100uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C44 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C44" font="tscircuit2024" fontSize={0.8} layer="bottom"/>

<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": 2.3, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": -2.3, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": -2.3, "y": -1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": 2.3, "y": -1.15 }]} layer="bottom"/>
      </footprint>);
// FB1: 600R@100MHz; Resistor_SMD:R_0603_1608Metric
export const Footprint_FB1 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FB1" font="tscircuit2024" fontSize={0.4} layer="bottom"/>

<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// C30: 4.7uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C30 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C30" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
      </footprint>);
// NT3: NetTie_2; NetTie:NetTie-2_SMD_Pad0.5mm
export const Footprint_NT3 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.5mm" pcbY="0mm" layer="bottom" radius="0.25mm" shape="circle"/>
<smtpad portHints={["pin2"]} pcbX="0.5mm" pcbY="0mm" layer="bottom" radius="0.25mm" shape="circle"/>

<courtyardoutline outline={[{ "x": -1, "y": -0.5 }, { "x": -1, "y": 0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1, "y": 0.5 }, { "x": 1, "y": 0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1, "y": -0.5 }, { "x": -1, "y": -0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1, "y": 0.5 }, { "x": 1, "y": -0.5 }]} layer="bottom"/>
      </footprint>);
// NT2: NetTie_2; NetTie:NetTie-2_SMD_Pad0.5mm
export const Footprint_NT2 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.5mm" pcbY="0mm" layer="bottom" radius="0.25mm" shape="circle"/>
<smtpad portHints={["pin2"]} pcbX="0.5mm" pcbY="0mm" layer="bottom" radius="0.25mm" shape="circle"/>

<courtyardoutline outline={[{ "x": -1, "y": -0.5 }, { "x": -1, "y": 0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1, "y": 0.5 }, { "x": 1, "y": -0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1, "y": 0.5 }, { "x": 1, "y": 0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1, "y": -0.5 }, { "x": -1, "y": -0.5 }]} layer="bottom"/>
      </footprint>);
// C32: 4.7uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C32 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C32" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// R27: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R27 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R27" font="tscircuit2024" fontSize={0.26} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
      </footprint>);
// C26: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C26 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C26" font="tscircuit2024" fontSize={0.8} layer="bottom"/>

<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": 2.3, "y": -1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": -2.3, "y": -1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": 2.3, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": -2.3, "y": 1.15 }]} layer="bottom"/>
      </footprint>);
// C18: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C18 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C18" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// U5: OB3225125MLDB6SI-00; easyeda2kicad:OSC-SMD_6P-L3.2-W2.5-BL_SG3225EAN
export const Footprint_U5 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.29mm" pcbY="0.93mm" layer="bottom" width="0.86mm" height="1.05mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0mm" pcbY="0.9mm" layer="bottom" width="0.82mm" height="1.05mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="1.29mm" pcbY="0.93mm" layer="bottom" width="0.86mm" height="1.05mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="1.29mm" pcbY="-0.93mm" layer="bottom" width="0.86mm" height="1.05mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="0mm" pcbY="-0.93mm" layer="bottom" width="0.82mm" height="1.05mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="-1.29mm" pcbY="-0.93mm" layer="bottom" width="0.86mm" height="1.05mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -1.57, "y": 1.25 }, { "x": -1.572284, "y": 1.261481 }, { "x": -1.578787, "y": 1.271213 }, { "x": -1.588519, "y": 1.277716 }, { "x": -1.6, "y": 1.28 }, { "x": -1.611481, "y": 1.277716 }, { "x": -1.621213, "y": 1.271213 }, { "x": -1.627716, "y": 1.261481 }, { "x": -1.63, "y": 1.25 }, { "x": -1.627716, "y": 1.238519 }, { "x": -1.621213, "y": 1.228787 }, { "x": -1.611481, "y": 1.222284 }, { "x": -1.6, "y": 1.22 }, { "x": -1.588519, "y": 1.222284 }, { "x": -1.578787, "y": 1.228787 }, { "x": -1.572284, "y": 1.238519 }, { "x": -1.57, "y": 1.25 }]} strokeWidth={0.06} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U5" font="tscircuit2024" fontSize={1} layer="bottom"/>

      </footprint>);
// C104: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C104 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C104" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// C7: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C7 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C7" font="tscircuit2024" fontSize={0.8} layer="bottom"/>

<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": 2.3, "y": -1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": -2.3, "y": -1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": 2.3, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": -2.3, "y": 1.15 }]} layer="bottom"/>
      </footprint>);
// C114: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C114 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C114" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// C10: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C10 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C10" font="tscircuit2024" fontSize={0.8} layer="bottom"/>

<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": -2.3, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": -2.3, "y": -1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": 2.3, "y": -1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": 2.3, "y": 1.15 }]} layer="bottom"/>
      </footprint>);
// C66: 4.7uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C66 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C66" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// C112: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C112 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C112" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
      </footprint>);
// NT7: NetTie_2; NetTie:NetTie-2_SMD_Pad0.5mm
export const Footprint_NT7 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.5mm" pcbY="0mm" layer="bottom" radius="0.25mm" shape="circle"/>
<smtpad portHints={["pin2"]} pcbX="0.5mm" pcbY="0mm" layer="bottom" radius="0.25mm" shape="circle"/>

<courtyardoutline outline={[{ "x": 1, "y": -0.5 }, { "x": -1, "y": -0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1, "y": -0.5 }, { "x": -1, "y": 0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1, "y": 0.5 }, { "x": 1, "y": -0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1, "y": 0.5 }, { "x": 1, "y": 0.5 }]} layer="bottom"/>
      </footprint>);
// C14: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C14 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C14" font="tscircuit2024" fontSize={0.8} layer="bottom"/>

<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": 2.3, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": 2.3, "y": -1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": -2.3, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": -2.3, "y": -1.15 }]} layer="bottom"/>
      </footprint>);
// C51: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C51 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C51" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// C9: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C9 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C9" font="tscircuit2024" fontSize={0.8} layer="bottom"/>

<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": 2.3, "y": -1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": 2.3, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": -2.3, "y": -1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": -2.3, "y": 1.15 }]} layer="bottom"/>
      </footprint>);
// C34: 47uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C34 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.68} anchorAlignment="center" text="47uF" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C34" font="tscircuit2024" fontSize={0.5} layer="bottom"/>

<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": 1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": -1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": 1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": -1.7, "y": -0.98 }]} layer="bottom"/>
      </footprint>);
// C40: 47uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C40 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C40" font="tscircuit2024" fontSize={0.5} layer="bottom"/>

<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": 1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": -1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": 1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": -1.7, "y": -0.98 }]} layer="bottom"/>
      </footprint>);
// C63: 47uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C63 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C63" font="tscircuit2024" fontSize={0.5} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": 1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": -1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": 1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": -1.7, "y": -0.98 }]} layer="bottom"/>
      </footprint>);
// C39: 47uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C39 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C39" font="tscircuit2024" fontSize={0.5} layer="bottom"/>

<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": -1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": 1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": 1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": -1.7, "y": -0.98 }]} layer="bottom"/>
      </footprint>);
// R26: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R26 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R26" font="tscircuit2024" fontSize={0.26} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
      </footprint>);
// C38: 47uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C38 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C38" font="tscircuit2024" fontSize={0.5} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": 1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": -1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": 1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": -1.7, "y": 0.98 }]} layer="bottom"/>
      </footprint>);
// C12: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C12 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" ccwRotation={360} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C12" font="tscircuit2024" fontSize={0.8} layer="bottom"/>

<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": -2.3, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": 2.3, "y": -1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": 2.3, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": -2.3, "y": -1.15 }]} layer="bottom"/>
      </footprint>);
// C8: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C8 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C8" font="tscircuit2024" fontSize={0.8} layer="bottom"/>

<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": -2.3, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": 2.3, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": -2.3, "y": -1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": 2.3, "y": -1.15 }]} layer="bottom"/>
      </footprint>);
// C107: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C107 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C107" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// C54: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C54 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C54" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
      </footprint>);
// NT6: NetTie_2; NetTie:NetTie-2_SMD_Pad0.5mm
export const Footprint_NT6 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.5mm" pcbY="0mm" layer="bottom" radius="0.25mm" shape="circle"/>
<smtpad portHints={["pin2"]} pcbX="0.5mm" pcbY="0mm" layer="bottom" radius="0.25mm" shape="circle"/>

<courtyardoutline outline={[{ "x": -1, "y": 0.5 }, { "x": 1, "y": 0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1, "y": -0.5 }, { "x": -1, "y": 0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1, "y": 0.5 }, { "x": 1, "y": -0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1, "y": -0.5 }, { "x": -1, "y": -0.5 }]} layer="bottom"/>
      </footprint>);
// C65: 4.7uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C65 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C65" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
      </footprint>);
// Q2: BSS138; Package_TO_SOT_SMD:SOT-23
export const Footprint_Q2 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.9375mm" pcbY="-0.95mm" layer="bottom" cornerRadius="0.075mm" width="0.6mm" height="1.475mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.9375mm" pcbY="0.95mm" layer="bottom" cornerRadius="0.075mm" width="0.6mm" height="1.475mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.9375mm" pcbY="0mm" layer="bottom" cornerRadius="0.075mm" width="0.6mm" height="1.475mm" ccwRotation={-90} shape="rotated_rect"/>




<fabricationnotepath route={[{ "x": 0.65, "y": -1.45 }, { "x": 0.65, "y": 1.45 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.65, "y": -1.125 }, { "x": -0.325, "y": -1.45 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.65, "y": 1.45 }, { "x": -0.65, "y": 1.45 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.325, "y": -1.45 }, { "x": 0.65, "y": -1.45 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.65, "y": 1.45 }, { "x": -0.65, "y": -1.125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="Q2" font="tscircuit2024" fontSize={0.32} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.92, "y": -1.7 }, { "x": -1.92, "y": 1.7 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.92, "y": -1.7 }, { "x": -1.92, "y": -1.7 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.92, "y": 1.7 }, { "x": 1.92, "y": 1.7 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.92, "y": 1.7 }, { "x": 1.92, "y": -1.7 }]} layer="bottom"/>
      </footprint>);
// NT5: NetTie_2; NetTie:NetTie-2_SMD_Pad0.5mm
export const Footprint_NT5 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.5mm" pcbY="0mm" layer="bottom" radius="0.25mm" shape="circle"/>
<smtpad portHints={["pin2"]} pcbX="0.5mm" pcbY="0mm" layer="bottom" radius="0.25mm" shape="circle"/>

<courtyardoutline outline={[{ "x": -1, "y": 0.5 }, { "x": 1, "y": 0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1, "y": -0.5 }, { "x": -1, "y": 0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1, "y": 0.5 }, { "x": 1, "y": -0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1, "y": -0.5 }, { "x": -1, "y": -0.5 }]} layer="bottom"/>
      </footprint>);
// NT1: NetTie_2; NetTie:NetTie-2_SMD_Pad0.5mm
export const Footprint_NT1 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.5mm" pcbY="0mm" layer="bottom" radius="0.25mm" shape="circle"/>
<smtpad portHints={["pin2"]} pcbX="0.5mm" pcbY="0mm" layer="bottom" radius="0.25mm" shape="circle"/>

<courtyardoutline outline={[{ "x": 1, "y": 0.5 }, { "x": 1, "y": -0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1, "y": -0.5 }, { "x": -1, "y": 0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1, "y": 0.5 }, { "x": 1, "y": 0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1, "y": -0.5 }, { "x": -1, "y": -0.5 }]} layer="bottom"/>
      </footprint>);
// R1: 100R; Resistor_SMD:R_0402_1005Metric
export const Footprint_R1 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R1" font="tscircuit2024" fontSize={0.26} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
      </footprint>);
// C11: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C11 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C11" font="tscircuit2024" fontSize={0.8} layer="bottom"/>

<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": 2.3, "y": -1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": -2.3, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": -2.3, "y": -1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": 2.3, "y": 1.15 }]} layer="bottom"/>
      </footprint>);
// C2: 4.7nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C2 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C2" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// C111: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C111 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C111" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// C16: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C16 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C16" font="tscircuit2024" fontSize={0.8} layer="bottom"/>

<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": -2.3, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": -2.3, "y": -1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": 2.3, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": 2.3, "y": -1.15 }]} layer="bottom"/>
      </footprint>);
// R7: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R7 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R7" font="tscircuit2024" fontSize={0.26} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
      </footprint>);
// C21: 4.7uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C21 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C21" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// C131: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C131 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C131" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
      </footprint>);
// C61: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C61 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C61" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
      </footprint>);
// C36: 47uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C36 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C36" font="tscircuit2024" fontSize={0.5} layer="bottom"/>

<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": -1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": -1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": 1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": 1.7, "y": 0.98 }]} layer="bottom"/>
      </footprint>);
// C55: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C55 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C55" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// Q1: BSS138; Package_TO_SOT_SMD:SOT-23
export const Footprint_Q1 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.9375mm" pcbY="-0.95mm" layer="bottom" cornerRadius="0.075mm" width="1.475mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.9375mm" pcbY="0.95mm" layer="bottom" cornerRadius="0.075mm" width="1.475mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.9375mm" pcbY="0mm" layer="bottom" cornerRadius="0.075mm" width="1.475mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>




<fabricationnotepath route={[{ "x": -0.65, "y": -1.125 }, { "x": -0.325, "y": -1.45 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.65, "y": -1.45 }, { "x": 0.65, "y": 1.45 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.65, "y": 1.45 }, { "x": -0.65, "y": 1.45 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.325, "y": -1.45 }, { "x": 0.65, "y": -1.45 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.65, "y": 1.45 }, { "x": -0.65, "y": -1.125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="Q1" font="tscircuit2024" fontSize={0.32} layer="bottom"/>

<courtyardoutline outline={[{ "x": 1.92, "y": -1.7 }, { "x": -1.92, "y": -1.7 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.92, "y": -1.7 }, { "x": -1.92, "y": 1.7 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.92, "y": 1.7 }, { "x": 1.92, "y": -1.7 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.92, "y": 1.7 }, { "x": 1.92, "y": 1.7 }]} layer="bottom"/>
      </footprint>);
// C130: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C130 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C130" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// C106: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C106 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C106" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
      </footprint>);
// C59: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C59 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C59" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// C105: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C105 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C105" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// R33: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R33 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R33" font="tscircuit2024" fontSize={0.26} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
      </footprint>);
// R20: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R20 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R20" font="tscircuit2024" fontSize={0.26} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
      </footprint>);
// C25: 4.7uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C25 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C25" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// C35: 47uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C35 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C35" font="tscircuit2024" fontSize={0.5} layer="bottom"/>

<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": -1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": 1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": -1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": 1.7, "y": 0.98 }]} layer="bottom"/>
      </footprint>);
// C19: 1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C19 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C19" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// C110: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C110 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C110" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
      </footprint>);
// C43: 100uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C43 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C43" font="tscircuit2024" fontSize={0.8} layer="bottom"/>

<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": -2.3, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": 2.3, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": 2.3, "y": -1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": -2.3, "y": -1.15 }]} layer="bottom"/>
      </footprint>);
// R11: 2K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R11 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R11" font="tscircuit2024" fontSize={0.26} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
      </footprint>);
// C121: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C121 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C121" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
      </footprint>);
// R8: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R8 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R8" font="tscircuit2024" fontSize={0.26} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
      </footprint>);
// C4: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C4 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C4" font="tscircuit2024" fontSize={0.8} layer="bottom"/>

<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": -2.3, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": -2.3, "y": -1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": 2.3, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": 2.3, "y": -1.15 }]} layer="bottom"/>
      </footprint>);
// R28: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R28 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R28" font="tscircuit2024" fontSize={0.26} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
      </footprint>);
// C46: 4.7uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C46 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C46" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
      </footprint>);
// C27: 4.7uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C27 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C27" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
      </footprint>);
// C64: 4.7uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C64 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C64" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// C37: 47uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C37 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C37" font="tscircuit2024" fontSize={0.5} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": -1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": 1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": -1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": 1.7, "y": -0.98 }]} layer="bottom"/>
      </footprint>);
// C52: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C52 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C52" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
      </footprint>);
// C108: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C108 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C108" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
      </footprint>);
// C57: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C57 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C57" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
      </footprint>);
// U4: OB3225125MLDB6SI-00; easyeda2kicad:OSC-SMD_6P-L3.2-W2.5-BL_SG3225EAN
export const Footprint_U4 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.29mm" pcbY="0.93mm" layer="bottom" width="0.86mm" height="1.05mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0mm" pcbY="0.9mm" layer="bottom" width="0.82mm" height="1.05mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="1.29mm" pcbY="0.93mm" layer="bottom" width="0.86mm" height="1.05mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="1.29mm" pcbY="-0.93mm" layer="bottom" width="0.86mm" height="1.05mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="0mm" pcbY="-0.93mm" layer="bottom" width="0.82mm" height="1.05mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="-1.29mm" pcbY="-0.93mm" layer="bottom" width="0.86mm" height="1.05mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -1.57, "y": 1.25 }, { "x": -1.572284, "y": 1.261481 }, { "x": -1.578787, "y": 1.271213 }, { "x": -1.588519, "y": 1.277716 }, { "x": -1.6, "y": 1.28 }, { "x": -1.611481, "y": 1.277716 }, { "x": -1.621213, "y": 1.271213 }, { "x": -1.627716, "y": 1.261481 }, { "x": -1.63, "y": 1.25 }, { "x": -1.627716, "y": 1.238519 }, { "x": -1.621213, "y": 1.228787 }, { "x": -1.611481, "y": 1.222284 }, { "x": -1.6, "y": 1.22 }, { "x": -1.588519, "y": 1.222284 }, { "x": -1.578787, "y": 1.228787 }, { "x": -1.572284, "y": 1.238519 }, { "x": -1.57, "y": 1.25 }]} strokeWidth={0.06} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U4" font="tscircuit2024" fontSize={1} layer="bottom"/>

      </footprint>);
// R29: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R29 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R29" font="tscircuit2024" fontSize={0.26} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
      </footprint>);
// C58: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C58 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C58" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
      </footprint>);
// NT8: NetTie_2; NetTie:NetTie-2_SMD_Pad0.5mm
export const Footprint_NT8 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.5mm" pcbY="0mm" layer="bottom" radius="0.25mm" shape="circle"/>
<smtpad portHints={["pin2"]} pcbX="0.5mm" pcbY="0mm" layer="bottom" radius="0.25mm" shape="circle"/>

<courtyardoutline outline={[{ "x": 1, "y": 0.5 }, { "x": 1, "y": -0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1, "y": 0.5 }, { "x": 1, "y": 0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1, "y": -0.5 }, { "x": -1, "y": -0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1, "y": -0.5 }, { "x": -1, "y": 0.5 }]} layer="bottom"/>
      </footprint>);
// C31: 47uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C31 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={0} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C31" font="tscircuit2024" fontSize={0.5} layer="bottom"/>

<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": 1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": 1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": -1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": -1.7, "y": 0.98 }]} layer="bottom"/>
      </footprint>);
// C100: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C100 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C100" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// C47: 4.7uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C47 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C47" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// C48: 4.7uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C48 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C48" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// R32: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R32 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R32" font="tscircuit2024" fontSize={0.26} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
      </footprint>);
// C62: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C62 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.16} anchorAlignment="center" text="100nF" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C62" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// C42: 100uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C42 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C42" font="tscircuit2024" fontSize={0.8} layer="bottom"/>

<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": -2.3, "y": -1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": 2.3, "y": -1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": -2.3, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": 2.3, "y": 1.15 }]} layer="bottom"/>
      </footprint>);
// C115: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C115 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C115" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// C28: 47uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C28 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={360} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C28" font="tscircuit2024" fontSize={0.5} layer="bottom"/>

<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": -1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": 1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": -1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": 1.7, "y": 0.98 }]} layer="bottom"/>
      </footprint>);
// C109: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C109 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C109" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
      </footprint>);
// C33: 47uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C33 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={0} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C33" font="tscircuit2024" fontSize={0.5} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": 1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": 1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": -1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": -1.7, "y": 0.98 }]} layer="bottom"/>
      </footprint>);
// R6: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R6 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R6" font="tscircuit2024" fontSize={0.26} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
      </footprint>);
// FB2: 600R@100MHz; Resistor_SMD:R_0603_1608Metric
export const Footprint_FB2 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FB2" font="tscircuit2024" fontSize={0.4} layer="bottom"/>

<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// C45: 4.7uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C45 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C45" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// R31: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R31 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R31" font="tscircuit2024" fontSize={0.26} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
      </footprint>);
// C20: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C20 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C20" font="tscircuit2024" fontSize={0.8} layer="bottom"/>

<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": -2.3, "y": -1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": 2.3, "y": -1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": 2.3, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": -2.3, "y": 1.15 }]} layer="bottom"/>
      </footprint>);
// R18: 2K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R18 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R18" font="tscircuit2024" fontSize={0.26} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
      </footprint>);
