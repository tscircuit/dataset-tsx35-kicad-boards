// Tiliqua (apfaudio)
// Source: https://github.com/apfaudio/tiliqua-hardware
// Commit: 4ee5878ae821a6b7096f6aed6795dc1349475cb5; license: CERN-OHL-S-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
// J5: USB_C_Receptacle_USB2.0_14P; usb:USB-C-TH_U264-141N-4BAC10
export const Footprint_J5 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0.375mm" pcbY="2.925mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="0.375mm" pcbY="2.025mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="0.375mm" pcbY="1.125mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="0.375mm" pcbY="0.225mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin5"]} pcbX="0.375mm" pcbY="-0.675mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin6"]} pcbX="0.375mm" pcbY="-2.025mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin7"]} pcbX="0.375mm" pcbY="-2.925mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin8"]} pcbX="-0.375mm" pcbY="2.925mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin9"]} pcbX="-0.375mm" pcbY="2.025mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin10"]} pcbX="-0.375mm" pcbY="-1.125mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin11"]} pcbX="-0.375mm" pcbY="-0.225mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin12"]} pcbX="-0.375mm" pcbY="0.675mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin13"]} pcbX="-0.375mm" pcbY="-2.025mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin14"]} pcbX="-0.375mm" pcbY="-2.925mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin15"]} pcbX="-1.43mm" pcbY="3.05mm" outerHeight="1.6mm" outerWidth="1mm" holeHeight="1.2mm" holeWidth="0.6mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin15"]} pcbX="-1.43mm" pcbY="-3.05mm" outerHeight="2mm" outerWidth="1mm" holeHeight="1.7mm" holeWidth="0.6mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin15"]} pcbX="1.43mm" pcbY="3.05mm" outerHeight="1.6mm" outerWidth="1mm" holeHeight="1.2mm" holeWidth="0.6mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin15"]} pcbX="1.43mm" pcbY="-3.05mm" outerHeight="2mm" outerWidth="1mm" holeHeight="1.7mm" holeWidth="0.6mm" shape="pill" pcbRotation="0deg"/>


















<fabricationnotetext pcbX={0.01725} pcbY={-4.9525} anchorAlignment="center" text="USB_C_Receptacle_USB2.0_14P" font="tscircuit2024" fontSize={1}/>
      </footprint>);
// J6: CONN 2x5 P=2.54mm; Connector_PinHeader_2.54mm:PinHeader_2x05_P2.54mm_Horizontal
export const Footprint_J6 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="2.54mm" pcbY="0mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin4"]} pcbX="2.54mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin5"]} pcbX="0mm" pcbY="-5.08mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin6"]} pcbX="2.54mm" pcbY="-5.08mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin7"]} pcbX="0mm" pcbY="-7.62mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin8"]} pcbX="2.54mm" pcbY="-7.62mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin9"]} pcbX="0mm" pcbY="-10.16mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin10"]} pcbX="2.54mm" pcbY="-10.16mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>


<fabricationnotepath route={[{ "x": -0.32, "y": -9.84 }, { "x": -0.32, "y": -10.48 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.32, "y": -7.3 }, { "x": -0.32, "y": -7.94 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.32, "y": -4.76 }, { "x": -0.32, "y": -5.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.32, "y": -2.22 }, { "x": -0.32, "y": -2.86 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.32, "y": 0.32 }, { "x": -0.32, "y": -0.32 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={5.655} pcbY={-12.43} anchorAlignment="center" text="CONN 2x5 P=2.54mm" font="tscircuit2024" fontSize={1}/>
      </footprint>);
// D11: LED 0402 RED; LED_SMD:LED_0402_1005Metric
export const Footprint_D11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>

<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="LED 0402 RED" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D11" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C33: 100uF/10V; Capacitor_SMD:CP_Elec_6.3x5.4
export const Footprint_C33 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.8mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="3.5mm" height="1.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.8mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="3.5mm" height="1.6mm" ccwRotation={-180} shape="rotated_rect"/>










<fabricationnotepath route={[{ "x": 3.3, "y": 3.3 }, { "x": 3.3, "y": -3.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.3, "y": -3.3 }, { "x": 3.3, "y": -3.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.3, "y": 3.3 }, { "x": 3.3, "y": 3.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.389838, "y": 1.645 }, { "x": -2.389838, "y": 1.015 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.704838, "y": 1.33 }, { "x": -2.074838, "y": 1.33 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.3, "y": -2.3 }, { "x": -2.3, "y": -3.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.3, "y": 2.3 }, { "x": -2.3, "y": 3.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.3, "y": 2.3 }, { "x": -3.3, "y": -2.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.15, "y": 0 }, { "x": -2.910221, "y": -1.205453 }, { "x": -2.227386, "y": -2.227386 }, { "x": -1.205453, "y": -2.910221 }, { "x": 0, "y": -3.15 }, { "x": 1.205453, "y": -2.910221 }, { "x": 2.227386, "y": -2.227386 }, { "x": 2.910221, "y": -1.205453 }, { "x": 3.15, "y": 0 }, { "x": 2.910221, "y": 1.205453 }, { "x": 2.227386, "y": 2.227386 }, { "x": 1.205453, "y": 2.910221 }, { "x": 0, "y": 3.15 }, { "x": -1.205453, "y": 2.910221 }, { "x": -2.227386, "y": 2.227386 }, { "x": -2.910221, "y": 1.205453 }, { "x": -3.15, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-4.35} anchorAlignment="center" text="100uF/10V" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C33" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": 4.8, "y": -1.05 }, { "x": 3.55, "y": -1.05 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.8, "y": 1.05 }, { "x": 4.8, "y": -1.05 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.55, "y": -1.05 }, { "x": 3.55, "y": -3.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.55, "y": 1.05 }, { "x": 4.8, "y": 1.05 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.55, "y": 3.55 }, { "x": 3.55, "y": 1.05 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.4, "y": -3.55 }, { "x": 3.55, "y": -3.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.4, "y": 3.55 }, { "x": 3.55, "y": 3.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.55, "y": -2.4 }, { "x": -2.4, "y": -3.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.55, "y": -1.05 }, { "x": -3.55, "y": -2.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.55, "y": 1.05 }, { "x": -4.8, "y": 1.05 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.55, "y": 2.4 }, { "x": -2.4, "y": 3.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.55, "y": 2.4 }, { "x": -3.55, "y": 1.05 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.8, "y": -1.05 }, { "x": -3.55, "y": -1.05 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.8, "y": 1.05 }, { "x": -4.8, "y": -1.05 }]} layer="top"/>
      </footprint>);
// RN3: 220R; Resistor_SMD:R_Array_Convex_4x0402
export const Footprint_RN3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.5mm" pcbY="0.75mm" layer="top" width="0.4mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.5mm" pcbY="0.25mm" layer="top" width="0.3mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.5mm" pcbY="-0.25mm" layer="top" width="0.3mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.5mm" pcbY="-0.75mm" layer="top" width="0.4mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.5mm" pcbY="-0.75mm" layer="top" width="0.4mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.5mm" pcbY="-0.25mm" layer="top" width="0.3mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.5mm" pcbY="0.25mm" layer="top" width="0.3mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.5mm" pcbY="0.75mm" layer="top" width="0.4mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 1 }, { "x": 0.5, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": 0.5, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -1 }, { "x": -0.5, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -1 }, { "x": -0.5, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.1} anchorAlignment="center" text="220R" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="RN3" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
      </footprint>);
// U12: W25Q128JVP; package-son:WSON-8-1EP_6x5mm_P1.27mm_EP3.4x4mm
export const Footprint_U12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.6625mm" pcbY="1.905mm" layer="top" cornerRadius="0.0625mm" width="0.775mm" height="0.5mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.6625mm" pcbY="0.635mm" layer="top" cornerRadius="0.0625mm" width="0.775mm" height="0.5mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.6625mm" pcbY="-0.635mm" layer="top" cornerRadius="0.0625mm" width="0.775mm" height="0.5mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.6625mm" pcbY="-1.905mm" layer="top" cornerRadius="0.0625mm" width="0.775mm" height="0.5mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="2.6625mm" pcbY="-1.905mm" layer="top" cornerRadius="0.0625mm" width="0.775mm" height="0.5mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="2.6625mm" pcbY="-0.635mm" layer="top" cornerRadius="0.0625mm" width="0.775mm" height="0.5mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="2.6625mm" pcbY="0.635mm" layer="top" cornerRadius="0.0625mm" width="0.775mm" height="0.5mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="2.6625mm" pcbY="1.905mm" layer="top" cornerRadius="0.0625mm" width="0.775mm" height="0.5mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="0mm" pcbY="0mm" layer="top" width="3.4mm" height="4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -3, "y": 1.5 }, { "x": -3, "y": -2.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3, "y": -2.5 }, { "x": 3, "y": -2.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2, "y": 2.5 }, { "x": -3, "y": 1.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3, "y": 2.5 }, { "x": -2, "y": 2.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3, "y": -2.5 }, { "x": 3, "y": 2.5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U12" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -3.3, "y": 2.75 }, { "x": 3.3, "y": 2.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.3, "y": -2.75 }, { "x": -3.3, "y": 2.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.3, "y": 2.75 }, { "x": 3.3, "y": -2.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.3, "y": -2.75 }, { "x": -3.3, "y": -2.75 }]} layer="top"/>
      </footprint>);
// C17: 6.8pF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="6.8pF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C17" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// J10: DVI_GPDI; Connector_Video:HDMI_A_Amphenol_10029449-x01xLF_Horizontal
export const Footprint_J10 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin20"]} pcbX="-7.85mm" pcbY="-0.9mm" outerDiameter="1.8mm" holeDiameter="1.3mm" shape="circle"/>
<platedhole portHints={["pin20"]} pcbX="-7.25mm" pcbY="4mm" outerDiameter="1.8mm" holeDiameter="1.3mm" shape="circle"/>
<platedhole portHints={["pin20"]} pcbX="7.25mm" pcbY="4mm" outerDiameter="1.8mm" holeDiameter="1.3mm" shape="circle"/>
<platedhole portHints={["pin20"]} pcbX="7.85mm" pcbY="-0.9mm" outerDiameter="1.8mm" holeDiameter="1.3mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="4.75mm" pcbY="5mm" layer="top" width="1.9mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="4.25mm" pcbY="5mm" layer="top" width="1.9mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="3.75mm" pcbY="5mm" layer="top" width="1.9mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="3.25mm" pcbY="5mm" layer="top" width="1.9mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="2.75mm" pcbY="5mm" layer="top" width="1.9mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="2.25mm" pcbY="5mm" layer="top" width="1.9mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="1.75mm" pcbY="5mm" layer="top" width="1.9mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="1.25mm" pcbY="5mm" layer="top" width="1.9mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="0.75mm" pcbY="5mm" layer="top" width="1.9mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="0.25mm" pcbY="5mm" layer="top" width="1.9mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-0.25mm" pcbY="5mm" layer="top" width="1.9mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-0.75mm" pcbY="5mm" layer="top" width="1.9mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-1.25mm" pcbY="5mm" layer="top" width="1.9mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-1.75mm" pcbY="5mm" layer="top" width="1.9mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-2.25mm" pcbY="5mm" layer="top" width="1.9mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-2.75mm" pcbY="5mm" layer="top" width="1.9mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="-3.25mm" pcbY="5mm" layer="top" width="1.9mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="-3.75mm" pcbY="5mm" layer="top" width="1.9mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="-4.25mm" pcbY="5mm" layer="top" width="1.9mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": -7.5, "y": -4.5 }, { "x": 7.5, "y": -4.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -7.5, "y": -4.5 }, { "x": -7.5, "y": 4.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 7.5, "y": -4.5 }, { "x": 7.5, "y": 4.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 7.5, "y": 4.5 }, { "x": -7.5, "y": 4.5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-5.9} anchorAlignment="center" text="DVI_GPDI" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={-0.9} anchorAlignment="center" text="J10" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -9.25, "y": -5 }, { "x": -9.25, "y": 5.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 9.25, "y": -5 }, { "x": -9.25, "y": -5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -9.25, "y": 5.4 }, { "x": -4.9, "y": 5.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.9, "y": 5.4 }, { "x": -4.9, "y": 6.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.4, "y": 5.4 }, { "x": 9.25, "y": 5.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 9.25, "y": 5.4 }, { "x": 9.25, "y": -5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.9, "y": 6.45 }, { "x": 5.4, "y": 6.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.4, "y": 6.45 }, { "x": 5.4, "y": 5.4 }]} layer="top"/>
      </footprint>);
// H3: MountingHole; m2:mounting_hole
export const Footprint_H3 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="6.4mm" holeDiameter="4.3mm" shape="circle"/>
<fabricationnotetext pcbX={-0.02} pcbY={-0.08} anchorAlignment="center" text="H3" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.95} layer="top"/>
      </footprint>);
// R24: 18K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="18K" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R24" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// F1: 16V 500mA; Fuse:Fuse_0805_2012Metric
export const Footprint_F1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9375mm" pcbY="0mm" layer="top" cornerRadius="0.121875mm" width="0.975mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.9375mm" pcbY="0mm" layer="top" cornerRadius="0.121875mm" width="0.975mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1, "y": -0.6 }, { "x": -1, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.6 }, { "x": 1, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.6 }, { "x": -1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.6 }, { "x": 1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="16V 500mA" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="F1" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.68, "y": -0.95 }, { "x": -1.68, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.68, "y": 0.95 }, { "x": 1.68, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.68, "y": -0.95 }, { "x": -1.68, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.68, "y": 0.95 }, { "x": 1.68, "y": 0.95 }]} layer="top"/>
      </footprint>);
// L2: FERRITE; Inductor_SMD:L_0603_1608Metric
export const Footprint_L2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.875mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.875mm" height="0.95mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="FERRITE" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L2" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// C21: 100uF/10V; Capacitor_SMD:CP_Elec_6.3x5.4
export const Footprint_C21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.8mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.6mm" height="3.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.8mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.6mm" height="3.5mm" ccwRotation={90} shape="rotated_rect"/>










<fabricationnotepath route={[{ "x": -2.3, "y": -3.3 }, { "x": 3.3, "y": -3.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.3, "y": -2.3 }, { "x": -2.3, "y": -3.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.704838, "y": 1.33 }, { "x": -2.074838, "y": 1.33 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.389838, "y": 1.645 }, { "x": -2.389838, "y": 1.015 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.3, "y": 2.3 }, { "x": -3.3, "y": -2.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.3, "y": 2.3 }, { "x": -2.3, "y": 3.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.3, "y": 3.3 }, { "x": 3.3, "y": 3.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.3, "y": 3.3 }, { "x": 3.3, "y": -3.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": 3.149999 }, { "x": -1.205452, "y": 2.91022 }, { "x": -2.227386, "y": 2.227386 }, { "x": -2.91022, "y": 1.205452 }, { "x": -3.149999, "y": 0 }, { "x": -2.91022, "y": -1.205452 }, { "x": -2.227386, "y": -2.227386 }, { "x": -1.205452, "y": -2.91022 }, { "x": 0, "y": -3.149999 }, { "x": 1.205452, "y": -2.91022 }, { "x": 2.227386, "y": -2.227386 }, { "x": 2.91022, "y": -1.205452 }, { "x": 3.149999, "y": 0 }, { "x": 2.91022, "y": 1.205452 }, { "x": 2.227386, "y": 2.227386 }, { "x": 1.205452, "y": 2.91022 }, { "x": 0, "y": 3.149999 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-4.349999} anchorAlignment="center" text="100uF/10V" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C21" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -2.4, "y": -3.55 }, { "x": 3.55, "y": -3.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.55, "y": -2.4 }, { "x": -2.4, "y": -3.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.8, "y": -1.050001 }, { "x": -3.55, "y": -1.05 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.8, "y": -1.050001 }, { "x": 3.55, "y": -1.05 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.55, "y": -1.05 }, { "x": -3.55, "y": -2.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.55, "y": -1.05 }, { "x": 3.55, "y": -3.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.55, "y": 1.05 }, { "x": -4.8, "y": 1.050001 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.55, "y": 1.05 }, { "x": 4.8, "y": 1.050001 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.8, "y": 1.050001 }, { "x": -4.8, "y": -1.050001 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.8, "y": 1.050001 }, { "x": 4.8, "y": -1.050001 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.55, "y": 2.4 }, { "x": -3.55, "y": 1.05 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.55, "y": 2.4 }, { "x": -2.4, "y": 3.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.4, "y": 3.55 }, { "x": 3.55, "y": 3.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.55, "y": 3.55 }, { "x": 3.55, "y": 1.05 }]} layer="top"/>
      </footprint>);
// RN1: 220R; Resistor_SMD:R_Array_Convex_4x0402
export const Footprint_RN1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.5mm" pcbY="0.75mm" layer="top" width="0.5mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.5mm" pcbY="0.25mm" layer="top" width="0.5mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.5mm" pcbY="-0.25mm" layer="top" width="0.5mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.5mm" pcbY="-0.75mm" layer="top" width="0.5mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.5mm" pcbY="-0.75mm" layer="top" width="0.5mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.5mm" pcbY="-0.25mm" layer="top" width="0.5mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.5mm" pcbY="0.25mm" layer="top" width="0.5mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.5mm" pcbY="0.75mm" layer="top" width="0.5mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -1 }, { "x": -0.5, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 1 }, { "x": 0.5, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -1 }, { "x": -0.5, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": 0.5, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.1} anchorAlignment="center" text="220R" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="RN1" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
      </footprint>);
// RN5: 33R; Resistor_SMD:R_Array_Convex_4x0402
export const Footprint_RN5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.499999mm" pcbY="0.75mm" layer="top" width="0.5mm" height="0.4mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.5mm" pcbY="0.25mm" layer="top" width="0.5mm" height="0.3mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.5mm" pcbY="-0.25mm" layer="top" width="0.5mm" height="0.3mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.499999mm" pcbY="-0.75mm" layer="top" width="0.5mm" height="0.4mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.499999mm" pcbY="-0.75mm" layer="top" width="0.5mm" height="0.4mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.5mm" pcbY="-0.25mm" layer="top" width="0.5mm" height="0.3mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.5mm" pcbY="0.25mm" layer="top" width="0.5mm" height="0.3mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.499999mm" pcbY="0.75mm" layer="top" width="0.5mm" height="0.4mm" ccwRotation={360} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -1 }, { "x": -0.5, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -1 }, { "x": -0.5, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": 0.5, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 1 }, { "x": 0.5, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.1} anchorAlignment="center" text="33R" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="RN5" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
      </footprint>);
// C50: 100nF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C50 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={360} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.05} anchorAlignment="center" text="100nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0.680001} anchorAlignment="center" text="C50" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C7: 0.1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C7" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C28: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C28 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C28" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C49: 100nF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C49 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={0} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.05} anchorAlignment="center" text="100nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0.680001} anchorAlignment="center" text="C49" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R10: 220R; Resistor_SMD:R_0402_1005Metric
export const Footprint_R10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="220R" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R10" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// J7: USB_C_Receptacle_USB2.0_14P; usb:USB-C-TH_U264-141N-4BAC10
export const Footprint_J7 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0.375mm" pcbY="2.925mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="0.375mm" pcbY="2.025mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="0.375mm" pcbY="1.125mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="0.375mm" pcbY="0.225mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin5"]} pcbX="0.375mm" pcbY="-0.675mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin6"]} pcbX="0.375mm" pcbY="-2.025mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin7"]} pcbX="0.375mm" pcbY="-2.925mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin8"]} pcbX="-0.375mm" pcbY="2.925mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin9"]} pcbX="-0.375mm" pcbY="2.025mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin10"]} pcbX="-0.375mm" pcbY="-1.125mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin11"]} pcbX="-0.375mm" pcbY="-0.225mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin12"]} pcbX="-0.375mm" pcbY="0.675mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin13"]} pcbX="-0.375mm" pcbY="-2.025mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin14"]} pcbX="-0.375mm" pcbY="-2.925mm" outerDiameter="0.6mm" holeDiameter="0.35mm" shape="circle"/>
<platedhole portHints={["pin15"]} pcbX="-1.43mm" pcbY="3.05mm" outerHeight="1.6mm" outerWidth="1mm" holeHeight="1.2mm" holeWidth="0.6mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin15"]} pcbX="-1.43mm" pcbY="-3.05mm" outerHeight="2mm" outerWidth="1mm" holeHeight="1.7mm" holeWidth="0.6mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin15"]} pcbX="1.43mm" pcbY="3.05mm" outerHeight="1.6mm" outerWidth="1mm" holeHeight="1.2mm" holeWidth="0.6mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin15"]} pcbX="1.43mm" pcbY="-3.05mm" outerHeight="2mm" outerWidth="1mm" holeHeight="1.7mm" holeWidth="0.6mm" shape="pill" pcbRotation="0deg"/>


















<fabricationnotetext pcbX={0.01725} pcbY={-4.9525} anchorAlignment="center" text="USB_C_Receptacle_USB2.0_14P" font="tscircuit2024" fontSize={1}/>
      </footprint>);
// R20: 900K (910K); Resistor_SMD:R_0402_1005Metric
export const Footprint_R20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.05} pcbY={-1.3} anchorAlignment="center" text="900K (910K)" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R20" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R25: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R25 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.509999mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.509999mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="4K7" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R25" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// L1: FERRITE; Inductor_SMD:L_0603_1608Metric
export const Footprint_L1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="FERRITE" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L1" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// U2: RP2040(QFN-56_7x7mm_P0.4mm); Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP3.2x3.2mm_ThermalVias
export const Footprint_U2 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin57"]} pcbX="-1.35mm" pcbY="1.35mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin57"]} pcbX="-1.35mm" pcbY="-1.35mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin57"]} pcbX="1.35mm" pcbY="1.35mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin57"]} pcbX="1.35mm" pcbY="-1.35mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="-3.4375mm" pcbY="2.6mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-3.4375mm" pcbY="2.2mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-3.4375mm" pcbY="1.8mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-3.4375mm" pcbY="1.4mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-3.4375mm" pcbY="1mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-3.4375mm" pcbY="0.6mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-3.4375mm" pcbY="0.2mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-3.4375mm" pcbY="-0.2mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-3.4375mm" pcbY="-0.6mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-3.4375mm" pcbY="-1mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-3.4375mm" pcbY="-1.4mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-3.4375mm" pcbY="-1.8mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-3.4375mm" pcbY="-2.2mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-3.4375mm" pcbY="-2.6mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-2.6mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-2.2mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="-1.8mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="-1.4mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="-1mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="-0.6mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="-0.2mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="0.2mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="0.6mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="1mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="1.4mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="1.8mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="2.2mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="2.6mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="3.4375mm" pcbY="-2.6mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="3.4375mm" pcbY="-2.2mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="3.4375mm" pcbY="-1.8mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="3.4375mm" pcbY="-1.4mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="3.4375mm" pcbY="-1mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin34"]} pcbX="3.4375mm" pcbY="-0.6mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin35"]} pcbX="3.4375mm" pcbY="-0.2mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin36"]} pcbX="3.4375mm" pcbY="0.2mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin37"]} pcbX="3.4375mm" pcbY="0.6mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin38"]} pcbX="3.4375mm" pcbY="1mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin39"]} pcbX="3.4375mm" pcbY="1.4mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin40"]} pcbX="3.4375mm" pcbY="1.8mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="3.4375mm" pcbY="2.2mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin42"]} pcbX="3.4375mm" pcbY="2.6mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin43"]} pcbX="2.6mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin44"]} pcbX="2.2mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin45"]} pcbX="1.8mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin46"]} pcbX="1.4mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin47"]} pcbX="1mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin48"]} pcbX="0.6mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin49"]} pcbX="0.2mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin50"]} pcbX="-0.2mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin51"]} pcbX="-0.6mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin52"]} pcbX="-1mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin53"]} pcbX="-1.4mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin54"]} pcbX="-1.8mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin55"]} pcbX="-2.2mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin56"]} pcbX="-2.6mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin57"]} pcbX="0mm" pcbY="0mm" layer="top" width="3.2mm" height="3.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin57"]} pcbX="0mm" pcbY="0mm" layer="bottom" width="3.2mm" height="3.2mm" ccwRotation={-90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": 3.5, "y": 3.5 }, { "x": 3.5, "y": -3.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.5, "y": 3.5 }, { "x": 3.5, "y": 3.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.5, "y": 2.5 }, { "x": -2.5, "y": 3.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.5, "y": -3.5 }, { "x": -3.5, "y": -3.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.5, "y": -3.5 }, { "x": -3.5, "y": 2.5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-4.83} anchorAlignment="center" text="RP2040(QFN-56_7x7mm_P0.4mm)" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U2" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": 4.13, "y": 4.13 }, { "x": -4.13, "y": 4.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.13, "y": 4.13 }, { "x": -4.13, "y": -4.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.13, "y": -4.13 }, { "x": 4.13, "y": 4.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.13, "y": -4.13 }, { "x": 4.13, "y": -4.13 }]} layer="top"/>
      </footprint>);
// R41: 33R; Resistor_SMD:R_0402_1005Metric
export const Footprint_R41 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="33R" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R41" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// D17: LED 0402 RED; LED_SMD:LED_0402_1005Metric
export const Footprint_D17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>

<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D17" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// RN10: 33R; Resistor_SMD:R_Array_Convex_4x0402
export const Footprint_RN10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.5mm" pcbY="0.75mm" layer="top" width="0.5mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.5mm" pcbY="0.25mm" layer="top" width="0.5mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.5mm" pcbY="-0.25mm" layer="top" width="0.5mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.5mm" pcbY="-0.75mm" layer="top" width="0.5mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="0.5mm" pcbY="-0.75mm" layer="top" width="0.5mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="0.5mm" pcbY="-0.25mm" layer="top" width="0.5mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="0.5mm" pcbY="0.25mm" layer="top" width="0.5mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="0.5mm" pcbY="0.75mm" layer="top" width="0.5mm" height="0.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": 0.5, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -1 }, { "x": -0.5, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 1 }, { "x": 0.5, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -1 }, { "x": -0.5, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.1} anchorAlignment="center" text="33R" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="RN10" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
      </footprint>);
// R29: 10K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R29 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="10K" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R29" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// J3: Conn_02x06_Top_Bottom; Connector_PinSocket_2.54mm:PinSocket_2x06_P2.54mm_Horizontal
export const Footprint_J3 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-12.7mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="-10.16mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-7.62mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin4"]} pcbX="0mm" pcbY="-5.08mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin5"]} pcbX="0mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin6"]} pcbX="0mm" pcbY="0mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin7"]} pcbX="-2.54mm" pcbY="-12.7mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin8"]} pcbX="-2.54mm" pcbY="-10.16mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin9"]} pcbX="-2.54mm" pcbY="-7.62mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin10"]} pcbX="-2.54mm" pcbY="-5.08mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin11"]} pcbX="-2.54mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin12"]} pcbX="-2.54mm" pcbY="0mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<fabricationnotepath route={[{ "x": 0, "y": -0.3 }, { "x": 0, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": -2.84 }, { "x": 0, "y": -2.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": -5.38 }, { "x": 0, "y": -4.78 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": -7.92 }, { "x": 0, "y": -7.32 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": -10.46 }, { "x": 0, "y": -9.86 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": -13 }, { "x": 0, "y": -12.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-5.65} pcbY={-15.47} anchorAlignment="center" text="Conn_02x06_Top_Bottom" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -13.05, "y": 1.8 }, { "x": -13.05, "y": -14.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -13.05, "y": -14.45 }, { "x": 1.8, "y": -14.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": 1.8 }, { "x": -13.05, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": -14.45 }, { "x": 1.8, "y": 1.8 }]} layer="top"/>
      </footprint>);
// U5: AP63200WU; Package_TO_SOT_SMD:TSOT-23-6
export const Footprint_U5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="1.1375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": 0.8, "y": 1.45 }, { "x": 0.8, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 1.45 }, { "x": 0.8, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 1.05 }, { "x": -0.4, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -1.45 }, { "x": -0.8, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -1.45 }, { "x": -0.8, "y": 1.05 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.4} anchorAlignment="center" text="AP63200WU" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U5" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": 2.05, "y": 1.7 }, { "x": -2.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": 1.7 }, { "x": -2.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": -1.7 }, { "x": 2.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": -1.7 }, { "x": 2.05, "y": -1.7 }]} layer="top"/>
      </footprint>);
// C2: 0.1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C2" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C22: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.85} anchorAlignment="center" text="22uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C22" font="tscircuit2024" fontSize={0.8}/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": 2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": 2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": -2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": -2.3, "y": 1.15 }]} layer="top"/>
      </footprint>);
// RN8: 33R; Resistor_SMD:R_Array_Convex_4x0402
export const Footprint_RN8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.5mm" pcbY="0.75mm" layer="top" width="0.4mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.5mm" pcbY="0.25mm" layer="top" width="0.3mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.5mm" pcbY="-0.25mm" layer="top" width="0.3mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.5mm" pcbY="-0.75mm" layer="top" width="0.4mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.5mm" pcbY="-0.75mm" layer="top" width="0.4mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.5mm" pcbY="-0.25mm" layer="top" width="0.3mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.5mm" pcbY="0.25mm" layer="top" width="0.3mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.5mm" pcbY="0.75mm" layer="top" width="0.4mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 1 }, { "x": 0.5, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": 0.5, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -1 }, { "x": -0.5, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -1 }, { "x": -0.5, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.1} anchorAlignment="center" text="33R" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="RN8" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
      </footprint>);
// U14: PCA9306; Package_SO:SSOP-8_2.95x2.8mm_P0.65mm
export const Footprint_U14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.7mm" pcbY="0.975mm" layer="top" width="0.3mm" height="1.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.7mm" pcbY="0.325mm" layer="top" width="0.3mm" height="1.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.7mm" pcbY="-0.325mm" layer="top" width="0.3mm" height="1.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.7mm" pcbY="-0.975mm" layer="top" width="0.3mm" height="1.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="1.7mm" pcbY="-0.975mm" layer="top" width="0.3mm" height="1.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="1.7mm" pcbY="-0.325mm" layer="top" width="0.3mm" height="1.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="1.7mm" pcbY="0.325mm" layer="top" width="0.3mm" height="1.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="1.7mm" pcbY="0.975mm" layer="top" width="0.3mm" height="1.6mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -1.475, "y": -1.4 }, { "x": -1.475, "y": 0.7 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.475, "y": -1.4 }, { "x": -1.475, "y": -1.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.475, "y": 1.4 }, { "x": -1.475, "y": 0.7 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.475, "y": 1.4 }, { "x": 1.475, "y": 1.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.475, "y": 1.4 }, { "x": 1.475, "y": -1.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.6} anchorAlignment="center" text="PCA9306" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U14" font="tscircuit2024" fontSize={0.6}/>
<courtyardoutline outline={[{ "x": -2.75, "y": -1.65 }, { "x": -2.75, "y": 1.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.75, "y": -1.65 }, { "x": -2.75, "y": -1.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.75, "y": 1.65 }, { "x": 2.75, "y": 1.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.75, "y": 1.65 }, { "x": 2.75, "y": -1.65 }]} layer="top"/>
      </footprint>);
// C38: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C38 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.85} anchorAlignment="center" text="22uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C38" font="tscircuit2024" fontSize={0.8}/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": -2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": -2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": 2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": 2.3, "y": -1.15 }]} layer="top"/>
      </footprint>);
// H1: MountingHole; MountingHole:MountingHole_2.2mm_M2_Pad_Via
export const Footprint_H1 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="-1.65mm" pcbY="0mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.166726mm" pcbY="1.166726mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.166726mm" pcbY="-1.166726mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="1.65mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="4.4mm" holeDiameter="2.2mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-1.65mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.166726mm" pcbY="1.166726mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.166726mm" pcbY="-1.166726mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.65mm" pcbY="0mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-3.2} anchorAlignment="center" text="MountingHole" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={2.45} layer="top"/>
      </footprint>);
// R26: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R26 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.509999mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.509999mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="4K7" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R26" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R8: 100R; Resistor_SMD:R_0402_1005Metric
export const Footprint_R8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="100R" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R8" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// C43: 100nF; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C43 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="100nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C43" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// R17: 157K (158K); Resistor_SMD:R_0402_1005Metric
export const Footprint_R17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="157K (158K)" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R17" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// D3: 1N4007FL; Diode_SMD:D_SOD-123F
export const Footprint_D3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.4mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.1mm" height="1.1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.4mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.1mm" height="1.1mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 1.4, "y": 0.9 }, { "x": 1.4, "y": -0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4, "y": 0.9 }, { "x": 1.4, "y": 0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.25, "y": 0.4 }, { "x": 0.25, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.25, "y": 0 }, { "x": 0.75, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0 }, { "x": -0.35, "y": 0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0 }, { "x": 0.25, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0 }, { "x": -0.35, "y": -0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.75, "y": 0 }, { "x": -0.35, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.25, "y": -0.4 }, { "x": -0.35, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4, "y": -0.9 }, { "x": -1.4, "y": -0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4, "y": -0.9 }, { "x": -1.4, "y": 0.9 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.1} anchorAlignment="center" text="1N4007FL" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={-0.127} pcbY={1.905} anchorAlignment="center" text="D3" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": 2.2, "y": 1.15 }, { "x": 2.2, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2, "y": 1.15 }, { "x": 2.2, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2, "y": 1.15 }, { "x": -2.2, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.2, "y": -1.15 }, { "x": -2.2, "y": -1.15 }]} layer="top"/>
      </footprint>);
// R22: 10K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="10K" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R22" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C19: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.85} anchorAlignment="center" text="22uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C19" font="tscircuit2024" fontSize={0.8}/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": -2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": 2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": -2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": 2.3, "y": 1.15 }]} layer="top"/>
      </footprint>);
// C39: 10n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C39 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="10n" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C39" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C37: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C37 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C37" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// L5: FERRITE; Inductor_SMD:L_0603_1608Metric
export const Footprint_L5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.875mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.875mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="FERRITE" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L5" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// C11: 2.2uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="2.2uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C11" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// D9: LED 0402 RED; LED_SMD:LED_0402_1005Metric
export const Footprint_D9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>

<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="LED 0402 RED" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D9" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R38: 200K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R38 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="200K" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R38" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// C30: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C30 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C30" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C3: 0.1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C3" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// L6: FERRITE; Inductor_SMD:L_0603_1608Metric
export const Footprint_L6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="FERRITE" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L6" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// F3: 15V 50mA; Fuse:Fuse_0805_2012Metric
export const Footprint_F3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9375mm" pcbY="0mm" layer="top" cornerRadius="0.121875mm" width="1.4mm" height="0.975mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.9375mm" pcbY="0mm" layer="top" cornerRadius="0.121875mm" width="1.4mm" height="0.975mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1, "y": 0.6 }, { "x": 1, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.6 }, { "x": 1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.6 }, { "x": -1, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.6 }, { "x": -1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="15V 50mA" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="F3" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.68, "y": 0.95 }, { "x": 1.68, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.68, "y": 0.95 }, { "x": 1.68, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.68, "y": -0.95 }, { "x": -1.68, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.68, "y": -0.95 }, { "x": -1.68, "y": 0.95 }]} layer="top"/>
      </footprint>);
// R11: 5.1K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="5.1K" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R11" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// C10: 0.1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C10" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// Y1: Crystal_GND24_Small; Crystal:Crystal_SMD_3225-4Pin_3.2x2.5mm
export const Footprint_Y1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="-0.85mm" layer="top" width="1.4mm" height="1.2mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.1mm" pcbY="-0.85mm" layer="top" width="1.4mm" height="1.2mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1mm" pcbY="0.85mm" layer="top" width="1.4mm" height="1.2mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.1mm" pcbY="0.85mm" layer="top" width="1.4mm" height="1.2mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 1.25 }, { "x": -1.6, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.25 }, { "x": -0.6, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -1.25 }, { "x": 1.6, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 1.25 }, { "x": -1.6, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -1.25 }, { "x": 1.6, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.45} anchorAlignment="center" text="Crystal_GND24_Small" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="Y1" font="tscircuit2024" fontSize={0.7}/>
<courtyardoutline outline={[{ "x": -2.1, "y": 1.7 }, { "x": -2.1, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.1, "y": -1.7 }, { "x": 2.1, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1, "y": 1.7 }, { "x": -2.1, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1, "y": -1.7 }, { "x": 2.1, "y": 1.7 }]} layer="top"/>
      </footprint>);
// C5: 0.1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C5" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// L4: FERRITE; Inductor_SMD:L_0603_1608Metric
export const Footprint_L4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.875mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.875mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="FERRITE" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L4" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// R33: 10K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R33 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="10K" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R33" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R32: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R32 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="4K7" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R32" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R37: 47K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R37 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="47K" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R37" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// RN9: 33R; Resistor_SMD:R_Array_Convex_4x0402
export const Footprint_RN9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.499999mm" pcbY="0.75mm" layer="top" width="0.5mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.5mm" pcbY="0.25mm" layer="top" width="0.5mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.5mm" pcbY="-0.25mm" layer="top" width="0.5mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.499999mm" pcbY="-0.75mm" layer="top" width="0.5mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.499999mm" pcbY="-0.75mm" layer="top" width="0.5mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.5mm" pcbY="-0.25mm" layer="top" width="0.5mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.5mm" pcbY="0.25mm" layer="top" width="0.5mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.499999mm" pcbY="0.75mm" layer="top" width="0.5mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -1 }, { "x": -0.5, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 1 }, { "x": 0.5, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -1 }, { "x": -0.5, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": 0.5, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.1} anchorAlignment="center" text="33R" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="RN9" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
      </footprint>);
// R13: 10K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="10K" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R13" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// C1: 0.1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C1" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// R14: 10K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="10K" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R14" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// C20: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.85} anchorAlignment="center" text="22uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C20" font="tscircuit2024" fontSize={0.8}/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": -2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": 2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": -2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": 2.3, "y": 1.15 }]} layer="top"/>
      </footprint>);
// C26: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C26 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.85} anchorAlignment="center" text="22uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C26" font="tscircuit2024" fontSize={0.8}/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": 2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": -2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": 2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": -2.3, "y": -1.15 }]} layer="top"/>
      </footprint>);
// C9: 0.1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C9" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// L8: 2.2uH; Inductor_SMD:L_0805_2012Metric
export const Footprint_L8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9375mm" pcbY="0mm" layer="top" cornerRadius="0.121875mm" width="1.4mm" height="0.975mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.9375mm" pcbY="0mm" layer="top" cornerRadius="0.121875mm" width="1.4mm" height="0.975mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": -0.6 }, { "x": 1, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.6 }, { "x": 1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.6 }, { "x": -1, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.6 }, { "x": -1, "y": 0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -1.68, "y": -0.95 }, { "x": 1.68, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.68, "y": -0.95 }, { "x": 1.68, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.68, "y": 0.95 }, { "x": -1.68, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.68, "y": 0.95 }, { "x": -1.68, "y": 0.95 }]} layer="top"/>
      </footprint>);
// C27: 100nF; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C27 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="100nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C27" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// SW3: RotaryEncoder_Switch; Rotary_Encoder:RotaryEncoder_Bourns_Horizontal_PEC09-2xxxF-Sxxxx
export const Footprint_SW3 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="1.8mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="5mm" outerDiameter="1.8mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="2.5mm" outerDiameter="1.8mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="-6.25mm" pcbY="0mm" outerDiameter="1.8mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin5"]} pcbX="-6.25mm" pcbY="5mm" outerDiameter="1.8mm" holeDiameter="1mm" shape="circle"/>



<fabricationnotepath route={[{ "x": 20, "y": 0 }, { "x": 12.5, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 20, "y": 5 }, { "x": 20, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 12.5, "y": -0.5 }, { "x": 5, "y": -0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 12.5, "y": 5 }, { "x": 20, "y": 5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 12.5, "y": 5.5 }, { "x": 12.5, "y": -0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 5, "y": -2 }, { "x": -8.3, "y": -2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 5, "y": 5.5 }, { "x": 12.5, "y": 5.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 5, "y": 7 }, { "x": 5, "y": -2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 5, "y": 7 }, { "x": -8.3, "y": 7 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -8.3, "y": 7 }, { "x": -8.3, "y": -2 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-1.1} pcbY={-3.9} anchorAlignment="center" text="RotaryEncoder_Switch" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={2} pcbY={2.5} anchorAlignment="center" text="SW3" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": 5, "y": -2.5 }, { "x": -9, "y": -2.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5, "y": 7.5 }, { "x": 5, "y": -2.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -9, "y": -2.5 }, { "x": -9, "y": 7.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -9, "y": 7.5 }, { "x": 5, "y": 7.5 }]} layer="top"/>
      </footprint>);
// C24: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.85} anchorAlignment="center" text="22uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C24" font="tscircuit2024" fontSize={0.8}/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": -2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": 2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": -2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": 2.3, "y": 1.15 }]} layer="top"/>
      </footprint>);
// F2: 15V 200mA; Fuse:Fuse_0805_2012Metric
export const Footprint_F2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9375mm" pcbY="0mm" layer="top" cornerRadius="0.121875mm" width="1.4mm" height="0.975mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.9375mm" pcbY="0mm" layer="top" cornerRadius="0.121875mm" width="1.4mm" height="0.975mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1, "y": 0.6 }, { "x": 1, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.6 }, { "x": 1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.6 }, { "x": -1, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.6 }, { "x": -1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="15V 200mA" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="F2" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.68, "y": 0.95 }, { "x": 1.68, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.68, "y": 0.95 }, { "x": 1.68, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.68, "y": -0.95 }, { "x": -1.68, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.68, "y": -0.95 }, { "x": -1.68, "y": 0.95 }]} layer="top"/>
      </footprint>);
// C42: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C42 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.85} anchorAlignment="center" text="22uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C42" font="tscircuit2024" fontSize={0.8}/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": -2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": -2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": 2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": 2.3, "y": -1.15 }]} layer="top"/>
      </footprint>);
// J2: Conn_02x06_Top_Bottom; Connector_PinSocket_2.54mm:PinSocket_2x06_P2.54mm_Horizontal
export const Footprint_J2 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-12.7mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="-10.16mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-7.62mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin4"]} pcbX="0mm" pcbY="-5.08mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin5"]} pcbX="0mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin6"]} pcbX="0mm" pcbY="0mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin7"]} pcbX="-2.54mm" pcbY="-12.7mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin8"]} pcbX="-2.54mm" pcbY="-10.16mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin9"]} pcbX="-2.54mm" pcbY="-7.62mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin10"]} pcbX="-2.54mm" pcbY="-5.08mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin11"]} pcbX="-2.54mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin12"]} pcbX="-2.54mm" pcbY="0mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<fabricationnotepath route={[{ "x": 0, "y": -0.3 }, { "x": 0, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": -2.84 }, { "x": 0, "y": -2.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": -5.38 }, { "x": 0, "y": -4.78 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": -7.92 }, { "x": 0, "y": -7.32 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": -10.46 }, { "x": 0, "y": -9.86 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": -13 }, { "x": 0, "y": -12.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-5.65} pcbY={-15.47} anchorAlignment="center" text="Conn_02x06_Top_Bottom" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -13.05, "y": 1.8 }, { "x": -13.05, "y": -14.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -13.05, "y": -14.45 }, { "x": 1.8, "y": -14.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": 1.8 }, { "x": -13.05, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": -14.45 }, { "x": 1.8, "y": 1.8 }]} layer="top"/>
      </footprint>);
// U13: PI3HDX511E; Package_DFN_QFN:Diodes_ZL32_TQFN-32-1EP_3x6mm_P0.4mm_EP1.25x3.5mm
export const Footprint_U13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.5mm" pcbY="2mm" layer="top" cornerRadius="0.025mm" width="0.75mm" height="0.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.5mm" pcbY="1.6mm" layer="top" cornerRadius="0.025mm" width="0.75mm" height="0.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.5mm" pcbY="1.2mm" layer="top" cornerRadius="0.025mm" width="0.75mm" height="0.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.5mm" pcbY="0.8mm" layer="top" cornerRadius="0.025mm" width="0.75mm" height="0.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-1.5mm" pcbY="0.4mm" layer="top" cornerRadius="0.025mm" width="0.75mm" height="0.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-1.5mm" pcbY="0mm" layer="top" cornerRadius="0.025mm" width="0.75mm" height="0.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-1.5mm" pcbY="-0.4mm" layer="top" cornerRadius="0.025mm" width="0.75mm" height="0.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-1.5mm" pcbY="-0.8mm" layer="top" cornerRadius="0.025mm" width="0.75mm" height="0.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-1.5mm" pcbY="-1.2mm" layer="top" cornerRadius="0.025mm" width="0.75mm" height="0.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-1.5mm" pcbY="-1.6mm" layer="top" cornerRadius="0.025mm" width="0.75mm" height="0.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-1.5mm" pcbY="-2mm" layer="top" cornerRadius="0.025mm" width="0.75mm" height="0.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-0.8mm" pcbY="-3mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.75mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-0.4mm" pcbY="-3mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.75mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="0mm" pcbY="-3mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.75mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="0.4mm" pcbY="-3mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.75mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="0.8mm" pcbY="-3mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.75mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="1.5mm" pcbY="-2mm" layer="top" cornerRadius="0.025mm" width="0.75mm" height="0.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="1.5mm" pcbY="-1.6mm" layer="top" cornerRadius="0.025mm" width="0.75mm" height="0.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="1.5mm" pcbY="-1.2mm" layer="top" cornerRadius="0.025mm" width="0.75mm" height="0.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="1.5mm" pcbY="-0.8mm" layer="top" cornerRadius="0.025mm" width="0.75mm" height="0.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="1.5mm" pcbY="-0.4mm" layer="top" cornerRadius="0.025mm" width="0.75mm" height="0.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="1.5mm" pcbY="0mm" layer="top" cornerRadius="0.025mm" width="0.75mm" height="0.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="1.5mm" pcbY="0.4mm" layer="top" cornerRadius="0.025mm" width="0.75mm" height="0.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="1.5mm" pcbY="0.8mm" layer="top" cornerRadius="0.025mm" width="0.75mm" height="0.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="1.5mm" pcbY="1.2mm" layer="top" cornerRadius="0.025mm" width="0.75mm" height="0.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="1.5mm" pcbY="1.6mm" layer="top" cornerRadius="0.025mm" width="0.75mm" height="0.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="1.5mm" pcbY="2mm" layer="top" cornerRadius="0.025mm" width="0.75mm" height="0.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="0.8mm" pcbY="3mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.75mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="0.4mm" pcbY="3mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.75mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="0mm" pcbY="3mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.75mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="-0.4mm" pcbY="3mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.75mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="-0.8mm" pcbY="3mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.75mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="0mm" pcbY="0mm" layer="top" width="1.25mm" height="3.5mm" ccwRotation={-180} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": 1.5, "y": -3 }, { "x": -1.5, "y": -3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.5, "y": 3 }, { "x": 1.5, "y": -3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.75, "y": 3 }, { "x": 1.5, "y": 3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.5, "y": -3 }, { "x": -1.5, "y": 2.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.5, "y": 2.25 }, { "x": -0.75, "y": 3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-4.329999} anchorAlignment="center" text="PI3HDX511E" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U13" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": 2.13, "y": -3.63 }, { "x": 2.13, "y": 3.63 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.13, "y": 3.63 }, { "x": -2.13, "y": 3.63 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.13, "y": -3.63 }, { "x": 2.13, "y": -3.63 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.13, "y": 3.63 }, { "x": -2.13, "y": -3.63 }]} layer="top"/>
      </footprint>);
// C51: 100nF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C51 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={360} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.05} anchorAlignment="center" text="100nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0.680001} anchorAlignment="center" text="C51" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// U10: TLV62569ADRLR; Package_TO_SOT_SMD:SOT-563
export const Footprint_U10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.75mm" pcbY="0.5mm" layer="top" cornerRadius="0.0425mm" width="0.34mm" height="0.7mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.75mm" pcbY="0mm" layer="top" cornerRadius="0.0425mm" width="0.34mm" height="0.7mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.75mm" pcbY="-0.5mm" layer="top" cornerRadius="0.0425mm" width="0.34mm" height="0.7mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.75mm" pcbY="-0.5mm" layer="top" cornerRadius="0.0425mm" width="0.34mm" height="0.7mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.75mm" pcbY="0mm" layer="top" cornerRadius="0.0425mm" width="0.34mm" height="0.7mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.75mm" pcbY="0.5mm" layer="top" cornerRadius="0.0425mm" width="0.34mm" height="0.7mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.65, "y": -0.85 }, { "x": -0.65, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": -0.85 }, { "x": -0.65, "y": -0.85 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.85 }, { "x": -0.65, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.85 }, { "x": 0.65, "y": 0.85 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": 0.85 }, { "x": 0.65, "y": -0.85 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -1.35, "y": -1.1 }, { "x": 1.35, "y": -1.1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.35, "y": -1.1 }, { "x": -1.35, "y": 1.1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.35, "y": 1.1 }, { "x": 1.35, "y": -1.1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.35, "y": 1.1 }, { "x": -1.35, "y": 1.1 }]} layer="top"/>
      </footprint>);
// R39: 210K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R39 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="210K" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R39" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C32: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C32 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.85} anchorAlignment="center" text="22uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C32" font="tscircuit2024" fontSize={0.8}/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": 2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": 2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": -2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": -2.3, "y": 1.15 }]} layer="top"/>
      </footprint>);
// R7: 27R; Resistor_SMD:R_0402_1005Metric
export const Footprint_R7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="27R" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R7" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R6: 27R; Resistor_SMD:R_0402_1005Metric
export const Footprint_R6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="27R" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R6" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R18: 30K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="30K" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R18" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R36: 47K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R36 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="47K" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R36" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R16: 220R; Resistor_SMD:R_0402_1005Metric
export const Footprint_R16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="220R" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R16" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R31: 2K2; Resistor_SMD:R_0402_1005Metric
export const Footprint_R31 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="2K2" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R31" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R40: 33R; Resistor_SMD:R_0402_1005Metric
export const Footprint_R40 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="33R" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R40" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// C12: 2.2uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="2.2uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C12" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// J8: MICROMOD-2222; m2:TE_21992304
export const Footprint_J8 = () => (<footprint originalLayer="top">
        <hole pcbX="-10mm" pcbY="0mm" diameter="1.1mm"/>
<hole pcbX="10mm" pcbY="0mm" diameter="1.6mm"/>
<smtpad portHints={["pin1"]} pcbX="-9.25mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-9mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-8.75mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-8.5mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-8.25mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-8mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-7.75mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-7.5mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-7.25mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-7mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-6.75mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-6.5mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-6.25mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-6mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-5.75mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-5.5mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="-5.25mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="-5mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="-4.75mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="-4.5mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="-4.25mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="-4mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="-3.75mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="-1.5mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="-1.25mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin34"]} pcbX="-1mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin35"]} pcbX="-0.75mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin36"]} pcbX="-0.5mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin37"]} pcbX="-0.25mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin38"]} pcbX="0mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin39"]} pcbX="0.25mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin40"]} pcbX="0.5mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="0.75mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin42"]} pcbX="1mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin43"]} pcbX="1.25mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin44"]} pcbX="1.5mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin45"]} pcbX="1.75mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin46"]} pcbX="2mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin47"]} pcbX="2.25mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin48"]} pcbX="2.5mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin49"]} pcbX="2.75mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin50"]} pcbX="3mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin51"]} pcbX="3.25mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin52"]} pcbX="3.5mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin53"]} pcbX="3.75mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin54"]} pcbX="4mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin55"]} pcbX="4.25mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin56"]} pcbX="4.5mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin57"]} pcbX="4.75mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin58"]} pcbX="5mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin59"]} pcbX="5.25mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin60"]} pcbX="5.5mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin61"]} pcbX="5.75mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin62"]} pcbX="6mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin63"]} pcbX="6.25mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin64"]} pcbX="6.5mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin65"]} pcbX="6.75mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin66"]} pcbX="7mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin67"]} pcbX="7.25mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin68"]} pcbX="7.5mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin69"]} pcbX="7.75mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin70"]} pcbX="8mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin71"]} pcbX="8.25mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin72"]} pcbX="8.5mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin73"]} pcbX="8.75mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin74"]} pcbX="9mm" pcbY="-2.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin75"]} pcbX="9.25mm" pcbY="5.275mm" layer="top" cornerRadius="0.018mm" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin76"]} pcbX="-10.35mm" pcbY="4.5mm" layer="top" cornerRadius="0.126mm" width="1.2mm" height="2.75mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin77"]} pcbX="10.35mm" pcbY="4.5mm" layer="top" cornerRadius="0.126mm" width="1.2mm" height="2.75mm" ccwRotation={-180} shape="rotated_rect"/>








<fabricationnotepath route={[{ "x": 10.95, "y": -2.5 }, { "x": -10.95, "y": -2.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 10.95, "y": 5.25 }, { "x": 10.95, "y": -2.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -10.95, "y": -2.5 }, { "x": -10.95, "y": 5.25 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -10.95, "y": 5.25 }, { "x": 10.95, "y": 5.25 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -9.35, "y": 7.05 }, { "x": -9.342388, "y": 7.011732 }, { "x": -9.320711, "y": 6.979289 }, { "x": -9.288268, "y": 6.957612 }, { "x": -9.25, "y": 6.95 }, { "x": -9.211732, "y": 6.957612 }, { "x": -9.179289, "y": 6.979289 }, { "x": -9.157612, "y": 7.011732 }, { "x": -9.15, "y": 7.05 }, { "x": -9.157612, "y": 7.088268 }, { "x": -9.179289, "y": 7.120711 }, { "x": -9.211732, "y": 7.142388 }, { "x": -9.25, "y": 7.15 }, { "x": -9.288268, "y": 7.142388 }, { "x": -9.320711, "y": 7.120711 }, { "x": -9.342388, "y": 7.088268 }, { "x": -9.35, "y": 7.05 }]} strokeWidth={0.2}/>
<fabricationnotetext pcbX={-4.215} pcbY={-4.935} anchorAlignment="center" text="MICROMOD-2222" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": 11.2, "y": -3.3 }, { "x": 11.2, "y": 6.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 11.2, "y": 6.3 }, { "x": -11.2, "y": 6.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -11.2, "y": -3.3 }, { "x": 11.2, "y": -3.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -11.2, "y": 6.3 }, { "x": -11.2, "y": -3.3 }]} layer="top"/>
      </footprint>);
// C13: 0.1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C13" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// R19: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="4K7" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R19" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R15: 1K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="1K" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R15" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C16: 15pF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="15pF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C16" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// U9: AP2161W; Package_TO_SOT_SMD:SOT-23-5
export const Footprint_U9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" shape="rect"/>





<fabricationnotepath route={[{ "x": -0.8, "y": 1.05 }, { "x": -0.4, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -1.45 }, { "x": -0.8, "y": 1.05 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 1.45 }, { "x": 0.8, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 1.45 }, { "x": 0.8, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -1.45 }, { "x": -0.8, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.4} anchorAlignment="center" text="AP2161W" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U9" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": -2.05, "y": 1.7 }, { "x": -2.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": -1.7 }, { "x": 2.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": 1.7 }, { "x": -2.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": -1.7 }, { "x": 2.05, "y": 1.7 }]} layer="top"/>
      </footprint>);
// R50: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R50 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="4K7" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R50" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R9: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.509999mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.509999mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="4K7" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R9" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C53: 100nF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C53 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={360} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.05} anchorAlignment="center" text="100nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0.680001} anchorAlignment="center" text="C53" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R44: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R44 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="4K7" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R44" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// D5: LED 0402 GREEN; LED_SMD:LED_0402_1005Metric
export const Footprint_D5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>

<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="LED 0402 GREEN" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D5" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// D7: LED 0402 GREEN; LED_SMD:LED_0402_1005Metric
export const Footprint_D7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>

<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="LED 0402 GREEN" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D7" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R27: 10K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R27 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="10K" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R27" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// C29: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C29 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.85} anchorAlignment="center" text="22uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C29" font="tscircuit2024" fontSize={0.8}/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": 2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": -2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": 2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": -2.3, "y": -1.15 }]} layer="top"/>
      </footprint>);
// D2: 1N4007FL; Diode_SMD:D_SOD-123F
export const Footprint_D2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.4mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.1mm" height="1.1mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.4mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.1mm" height="1.1mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -1.4, "y": 0.9 }, { "x": 1.4, "y": 0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4, "y": -0.9 }, { "x": -1.4, "y": 0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.75, "y": 0 }, { "x": -0.35, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0 }, { "x": -0.35, "y": 0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0 }, { "x": -0.35, "y": -0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0 }, { "x": 0.25, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.25, "y": 0.4 }, { "x": 0.25, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.25, "y": 0 }, { "x": 0.75, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.25, "y": -0.4 }, { "x": -0.35, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4, "y": 0.9 }, { "x": 1.4, "y": -0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4, "y": -0.9 }, { "x": -1.4, "y": -0.9 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.1} anchorAlignment="center" text="1N4007FL" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={-0.127} pcbY={1.905} anchorAlignment="center" text="D2" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -2.2, "y": 1.15 }, { "x": -2.2, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2, "y": 1.15 }, { "x": 2.2, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.2, "y": 1.15 }, { "x": 2.2, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.2, "y": -1.15 }, { "x": -2.2, "y": -1.15 }]} layer="top"/>
      </footprint>);
// R28: 2K2; Resistor_SMD:R_0402_1005Metric
export const Footprint_R28 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="2K2" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R28" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R3: 10K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="10K" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R3" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// SW2: SW_Tactile_SPST; Button_Switch_SMD:SW_SPST_SKQG_WithStem
export const Footprint_SW2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.1mm" pcbY="1.850001mm" layer="top" width="1.1mm" height="1.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin1"]} pcbX="3.1mm" pcbY="1.850001mm" layer="top" width="1.1mm" height="1.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-3.1mm" pcbY="-1.850001mm" layer="top" width="1.1mm" height="1.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="3.1mm" pcbY="-1.850001mm" layer="top" width="1.1mm" height="1.8mm" ccwRotation={90} shape="rotated_rect"/>








<fabricationnotepath route={[{ "x": -1.4, "y": -2.6 }, { "x": -2.6, "y": -1.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4, "y": -2.6 }, { "x": -1.4, "y": -2.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.95, "y": -1.865 }, { "x": -1.865, "y": -0.95 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.95, "y": -1.865 }, { "x": -0.95, "y": -1.865 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.95, "y": -1.865 }, { "x": 1.865, "y": -0.95 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.6, "y": -1.4 }, { "x": -2.6, "y": 1.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.6, "y": -1.4 }, { "x": 1.4, "y": -2.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.865, "y": -0.95 }, { "x": -1.865, "y": 0.95 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.865, "y": 0.95 }, { "x": 1.865, "y": -0.95 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.6, "y": 1.4 }, { "x": -1.4, "y": 2.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.6, "y": 1.4 }, { "x": 2.6, "y": -1.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.95, "y": 1.865 }, { "x": -1.865, "y": 0.95 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.95, "y": 1.865 }, { "x": 0.95, "y": 1.865 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.95, "y": 1.865 }, { "x": 1.865, "y": 0.95 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4, "y": 2.6 }, { "x": 1.4, "y": 2.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4, "y": 2.6 }, { "x": 2.6, "y": 1.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": 1 }, { "x": -0.382683, "y": 0.92388 }, { "x": -0.707107, "y": 0.707107 }, { "x": -0.92388, "y": 0.382683 }, { "x": -1, "y": 0 }, { "x": -0.92388, "y": -0.382683 }, { "x": -0.707107, "y": -0.707107 }, { "x": -0.382683, "y": -0.92388 }, { "x": 0, "y": -1 }, { "x": 0.382683, "y": -0.92388 }, { "x": 0.707107, "y": -0.707107 }, { "x": 0.92388, "y": -0.382683 }, { "x": 1, "y": 0 }, { "x": 0.92388, "y": 0.382683 }, { "x": 0.707107, "y": 0.707107 }, { "x": 0.382683, "y": 0.92388 }, { "x": 0, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-3.599999} anchorAlignment="center" text="SW_Tactile_SPST" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="SW2" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": -4.25, "y": -2.85 }, { "x": 4.25, "y": -2.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.25, "y": -2.85 }, { "x": 4.25, "y": 2.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.25, "y": 2.85 }, { "x": -4.25, "y": -2.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.25, "y": 2.85 }, { "x": -4.25, "y": 2.85 }]} layer="top"/>
      </footprint>);
// C25: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C25 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C25" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// R1: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="4K7" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R1" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// D1: 1N4007FL; Diode_SMD:D_SOD-123F
export const Footprint_D1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.4mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.1mm" height="1.1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.4mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.1mm" height="1.1mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 1.4, "y": -0.9 }, { "x": -1.4, "y": -0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4, "y": 0.9 }, { "x": 1.4, "y": -0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.25, "y": -0.4 }, { "x": -0.35, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.25, "y": 0 }, { "x": 0.75, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.25, "y": 0.4 }, { "x": 0.25, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0 }, { "x": 0.25, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0 }, { "x": -0.35, "y": -0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0 }, { "x": -0.35, "y": 0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.75, "y": 0 }, { "x": -0.35, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4, "y": -0.9 }, { "x": -1.4, "y": 0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4, "y": 0.9 }, { "x": 1.4, "y": 0.9 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.1} anchorAlignment="center" text="1N4007FL" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={-0.127} pcbY={1.905} anchorAlignment="center" text="D1" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": 2.2, "y": -1.15 }, { "x": -2.2, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.2, "y": 1.15 }, { "x": 2.2, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2, "y": 1.15 }, { "x": 2.2, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2, "y": 1.15 }, { "x": -2.2, "y": -1.15 }]} layer="top"/>
      </footprint>);
// C41: 10n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C41 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="10n" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C41" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C46: 100nF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C46 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={0} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.05} anchorAlignment="center" text="100nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0.680001} anchorAlignment="center" text="C46" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// D13: LED 0402 GREEN; LED_SMD:LED_0402_1005Metric
export const Footprint_D13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>

<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D13" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C48: 100nF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C48 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={0} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.05} anchorAlignment="center" text="100nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0.680001} anchorAlignment="center" text="C48" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C15: 15pF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="15pF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C15" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// R12: 5.1K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="5.1K" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R12" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// C23: 22uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.85} anchorAlignment="center" text="22uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C23" font="tscircuit2024" fontSize={0.8}/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": 2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": 2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": -2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": -2.3, "y": 1.15 }]} layer="top"/>
      </footprint>);
// C40: 10n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C40 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="10n" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C40" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C4: 0.1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C4" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// R5: 1K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="1K" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R5" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// C34: 100nF; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C34 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="100nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C34" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// R2: 4K7; Resistor_SMD:R_0402_1005Metric
export const Footprint_R2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="4K7" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R2" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// L3: 10uH 2A; Inductor_SMD:L_Vishay_IHLP-2020
export const Footprint_L3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.4265mm" pcbY="0mm" layer="top" width="2.79mm" height="1.903mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.4265mm" pcbY="0mm" layer="top" width="2.79mm" height="1.903mm" ccwRotation={-90} shape="rotated_rect"/>






<fabricationnotepath route={[{ "x": 2.54, "y": 2.54 }, { "x": -2.54, "y": 2.54 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.54, "y": 2.54 }, { "x": -2.54, "y": -2.54 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.54, "y": -2.54 }, { "x": 2.54, "y": 2.54 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.54, "y": -2.54 }, { "x": 2.54, "y": -2.54 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-4.04} anchorAlignment="center" text="10uH 2A" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L3" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": 3.65, "y": 2.8 }, { "x": -3.65, "y": 2.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.65, "y": 2.8 }, { "x": -3.65, "y": -2.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.65, "y": -2.8 }, { "x": 3.65, "y": 2.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.65, "y": -2.8 }, { "x": 3.65, "y": -2.8 }]} layer="top"/>
      </footprint>);
// H2: MountingHole; MountingHole:MountingHole_2.2mm_M2_Pad_Via
export const Footprint_H2 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="-1.65mm" pcbY="0mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.166726mm" pcbY="1.166726mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.166726mm" pcbY="-1.166726mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="1.65mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="4.4mm" holeDiameter="2.2mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-1.65mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.166726mm" pcbY="1.166726mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.166726mm" pcbY="-1.166726mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.65mm" pcbY="0mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-3.2} anchorAlignment="center" text="MountingHole" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={2.45} layer="top"/>
      </footprint>);
// R30: 10K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R30 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="10K" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R30" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C31: 100pF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C31 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100pF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C31" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// U8: TUSB322I; Package_DFN_QFN:Texas_X2QFN-12_1.6x1.6mm_P0.4mm
export const Footprint_U8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.725mm" pcbY="0.2mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.85mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.725mm" pcbY="-0.2mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.85mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.6mm" pcbY="-0.825mm" layer="top" cornerRadius="0.025mm" width="0.65mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.2mm" pcbY="-0.825mm" layer="top" cornerRadius="0.025mm" width="0.65mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.2mm" pcbY="-0.825mm" layer="top" cornerRadius="0.025mm" width="0.65mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.6mm" pcbY="-0.825mm" layer="top" cornerRadius="0.025mm" width="0.65mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.725mm" pcbY="-0.2mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.85mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.725mm" pcbY="0.2mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.85mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="0.6mm" pcbY="0.825mm" layer="top" cornerRadius="0.025mm" width="0.65mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="0.2mm" pcbY="0.825mm" layer="top" cornerRadius="0.025mm" width="0.65mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-0.2mm" pcbY="0.825mm" layer="top" cornerRadius="0.025mm" width="0.65mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-0.6mm" pcbY="0.825mm" layer="top" cornerRadius="0.025mm" width="0.65mm" height="0.2mm" ccwRotation={-90} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": 0.8, "y": 0.8 }, { "x": 0.8, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.8 }, { "x": 0.8, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": -0.4, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.8 }, { "x": -0.8, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.8 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.1} anchorAlignment="center" text="TUSB322I" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U8" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": 1.4, "y": 1.4 }, { "x": -1.4, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.4, "y": 1.4 }, { "x": -1.4, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.4, "y": -1.4 }, { "x": 1.4, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.4, "y": -1.4 }, { "x": 1.4, "y": -1.4 }]} layer="top"/>
      </footprint>);
// C14: 0.1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C14" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C47: 100nF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C47 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={0} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.05} anchorAlignment="center" text="100nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0.680001} anchorAlignment="center" text="C47" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R4: 10K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="10K" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R4" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// U7: PCA9635 LED DRIVER; Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm
export const Footprint_U7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.8625mm" pcbY="4.225mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.8625mm" pcbY="3.575mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.8625mm" pcbY="2.925mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.8625mm" pcbY="2.275mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-2.8625mm" pcbY="1.625mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-2.8625mm" pcbY="0.975mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-2.8625mm" pcbY="0.325mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-2.8625mm" pcbY="-0.325mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-2.8625mm" pcbY="-0.975mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-2.8625mm" pcbY="-1.625mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-2.8625mm" pcbY="-2.275mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-2.8625mm" pcbY="-2.925mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-2.8625mm" pcbY="-3.575mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-2.8625mm" pcbY="-4.225mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="2.8625mm" pcbY="-4.225mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="2.8625mm" pcbY="-3.575mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="2.8625mm" pcbY="-2.925mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="2.8625mm" pcbY="-2.275mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="2.8625mm" pcbY="-1.625mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="2.8625mm" pcbY="-0.975mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="2.8625mm" pcbY="-0.325mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="2.8625mm" pcbY="0.325mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="2.8625mm" pcbY="0.975mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="2.8625mm" pcbY="1.625mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="2.8625mm" pcbY="2.275mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="2.8625mm" pcbY="2.925mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="2.8625mm" pcbY="3.575mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="2.8625mm" pcbY="4.225mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -2.2, "y": -4.85 }, { "x": -2.2, "y": 3.85 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.2, "y": -4.85 }, { "x": -2.2, "y": -4.85 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.2, "y": 3.85 }, { "x": -1.2, "y": 4.85 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.2, "y": 4.85 }, { "x": 2.2, "y": 4.85 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.2, "y": 4.85 }, { "x": 2.2, "y": -4.85 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-5.8} anchorAlignment="center" text="PCA9635 LED DRIVER" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U7" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -3.85, "y": -5.1 }, { "x": 3.85, "y": -5.1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.85, "y": -5.1 }, { "x": 3.85, "y": 5.1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.85, "y": 5.1 }, { "x": -3.85, "y": -5.1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.85, "y": 5.1 }, { "x": -3.85, "y": 5.1 }]} layer="top"/>
      </footprint>);
// C45: 4.7uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C45 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="4.7uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C45" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
      </footprint>);
// C6: 0.1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C6" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// J4: ~; jacks:AUDIO-TH_PJ-325M
export const Footprint_J4 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="-5.9mm" pcbY="-1mm" outerHeight="3.5mm" outerWidth="1.5mm" holeHeight="2.2mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin2"]} pcbX="2.2mm" pcbY="1mm" outerHeight="3.5mm" outerWidth="1.5mm" holeHeight="2.2mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin3"]} pcbX="0.3mm" pcbY="-1mm" outerHeight="3.5mm" outerWidth="1.5mm" holeHeight="2.2mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin4"]} pcbX="-3.4mm" pcbY="1mm" outerHeight="3.5mm" outerWidth="1.5mm" holeHeight="2.2mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin5"]} pcbX="5.9mm" pcbY="-1mm" outerHeight="3.5mm" outerWidth="1.5mm" holeHeight="2.2mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>




<fabricationnotetext pcbX={-1.924} pcbY={-5.727} anchorAlignment="center" text="~" font="tscircuit2024" fontSize={1}/>
      </footprint>);
// C8: 0.1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C8" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// R42: 47K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R42 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="47K" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R42" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// D4: B0520LW; Diode_SMD:D_SOD-123
export const Footprint_D4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.65mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="1.2mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.65mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="1.2mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -1.4, "y": 0.9 }, { "x": 1.4, "y": 0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4, "y": -0.9 }, { "x": -1.4, "y": 0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.75, "y": 0 }, { "x": -0.35, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0 }, { "x": -0.35, "y": 0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0 }, { "x": -0.35, "y": -0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0 }, { "x": 0.25, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.25, "y": 0.4 }, { "x": 0.25, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.25, "y": 0 }, { "x": 0.75, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.25, "y": -0.4 }, { "x": -0.35, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4, "y": 0.9 }, { "x": 1.4, "y": -0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4, "y": -0.9 }, { "x": -1.4, "y": -0.9 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.1} anchorAlignment="center" text="B0520LW" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={2} anchorAlignment="center" text="D4" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -2.35, "y": 1.15 }, { "x": -2.35, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.35, "y": 1.15 }, { "x": 2.35, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.35, "y": 1.15 }, { "x": 2.35, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.35, "y": -1.15 }, { "x": -2.35, "y": -1.15 }]} layer="top"/>
      </footprint>);
// RN6: 33R; Resistor_SMD:R_Array_Convex_4x0402
export const Footprint_RN6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.499999mm" pcbY="0.75mm" layer="top" width="0.5mm" height="0.4mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.5mm" pcbY="0.25mm" layer="top" width="0.5mm" height="0.3mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.5mm" pcbY="-0.25mm" layer="top" width="0.5mm" height="0.3mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.499999mm" pcbY="-0.75mm" layer="top" width="0.5mm" height="0.4mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.499999mm" pcbY="-0.75mm" layer="top" width="0.5mm" height="0.4mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.5mm" pcbY="-0.25mm" layer="top" width="0.5mm" height="0.3mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.5mm" pcbY="0.25mm" layer="top" width="0.5mm" height="0.3mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.499999mm" pcbY="0.75mm" layer="top" width="0.5mm" height="0.4mm" ccwRotation={360} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -1 }, { "x": -0.5, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -1 }, { "x": -0.5, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 1 }, { "x": 0.5, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": 0.5, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.1} anchorAlignment="center" text="33R" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="RN6" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
      </footprint>);
// C52: 100nF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C52 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={360} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.05} anchorAlignment="center" text="100nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0.680001} anchorAlignment="center" text="C52" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R23: 10K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="10K" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R23" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R21: 10K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="10K" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R21" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// L7: FERRITE; Inductor_SMD:L_0603_1608Metric
export const Footprint_L7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.875mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.875mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="FERRITE" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L7" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// D6: LED 0402 GREEN; LED_SMD:LED_0402_1005Metric
export const Footprint_D6 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>

<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="LED 0402 GREEN" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D6" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
      </footprint>);
// U3: USBLC6-4SC6; Package_TO_SOT_SMD:SOT-23-6
export const Footprint_U3 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.1375mm" pcbY="-0.95mm" layer="bottom" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1375mm" pcbY="0mm" layer="bottom" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1375mm" pcbY="0.95mm" layer="bottom" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1375mm" pcbY="0.95mm" layer="bottom" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1375mm" pcbY="0mm" layer="bottom" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="1.1375mm" pcbY="-0.95mm" layer="bottom" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": 0.8, "y": -1.45 }, { "x": 0.8, "y": 1.45 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 1.45 }, { "x": -0.8, "y": 1.45 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.4, "y": -1.45 }, { "x": 0.8, "y": -1.45 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": -1.05 }, { "x": -0.4, "y": -1.45 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 1.45 }, { "x": -0.8, "y": -1.05 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={2.4} anchorAlignment="center" text="USBLC6-4SC6" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U3" font="tscircuit2024" fontSize={0.4} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.05, "y": -1.5 }, { "x": 2.05, "y": 1.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.05, "y": 1.5 }, { "x": 1.05, "y": 1.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.05, "y": -1.7 }, { "x": 1.05, "y": -1.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.05, "y": -1.5 }, { "x": 2.05, "y": -1.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.05, "y": 1.5 }, { "x": 1.05, "y": 1.7 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.05, "y": 1.7 }, { "x": -1.05, "y": 1.7 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.05, "y": -1.7 }, { "x": 1.05, "y": -1.7 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.05, "y": -1.5 }, { "x": -1.05, "y": -1.7 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.05, "y": 1.5 }, { "x": -2.05, "y": 1.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.05, "y": 1.7 }, { "x": -1.05, "y": 1.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.05, "y": -1.5 }, { "x": -1.05, "y": -1.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.05, "y": 1.5 }, { "x": -2.05, "y": -1.5 }]} layer="bottom"/>
      </footprint>);
// R49: 33R; Resistor_SMD:R_0402_1005Metric
export const Footprint_R49 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.509999mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.509999mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={0} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="33R" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R49" font="tscircuit2024" fontSize={0.26} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
      </footprint>);
// Y2: 25MHz AMB8G; Crystal:Crystal_SMD_3225-4Pin_3.2x2.5mm
export const Footprint_Y2 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="0.85mm" layer="bottom" width="1.4mm" height="1.2mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.1mm" pcbY="0.85mm" layer="bottom" width="1.4mm" height="1.2mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1mm" pcbY="-0.85mm" layer="bottom" width="1.4mm" height="1.2mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.1mm" pcbY="-0.85mm" layer="bottom" width="1.4mm" height="1.2mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 1.25 }, { "x": -1.6, "y": -1.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.6, "y": -1.25 }, { "x": 1.6, "y": -1.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.6, "y": 1.25 }, { "x": -1.6, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.6, "y": 1.25 }, { "x": -1.6, "y": 1.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.6, "y": -1.25 }, { "x": 1.6, "y": 1.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={2.45} anchorAlignment="center" text="25MHz AMB8G" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="Y2" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.1, "y": 1.7 }, { "x": -2.1, "y": -1.7 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.1, "y": -1.7 }, { "x": 2.1, "y": -1.7 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.1, "y": 1.7 }, { "x": -2.1, "y": 1.7 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.1, "y": -1.7 }, { "x": 2.1, "y": 1.7 }]} layer="bottom"/>
      </footprint>);
// D16: LED 0402 GREEN; LED_SMD:LED_0402_1005Metric
export const Footprint_D16 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>

<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="LED 0402 GREEN" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D16" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
      </footprint>);
// D14: LED 0402 GREEN; LED_SMD:LED_0402_1005Metric
export const Footprint_D14 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>

<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="LED 0402 GREEN" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D14" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
      </footprint>);
// U6: 74AUC1G79; Package_TO_SOT_SMD:SOT-23-5
export const Footprint_U6 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.1375mm" pcbY="-0.949999mm" layer="bottom" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1375mm" pcbY="0mm" layer="bottom" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1375mm" pcbY="0.949999mm" layer="bottom" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1375mm" pcbY="0.949999mm" layer="bottom" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1375mm" pcbY="-0.949999mm" layer="bottom" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": 0.8, "y": 1.45 }, { "x": 0.8, "y": -1.45 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 1.45 }, { "x": 0.8, "y": 1.45 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": -1.050001 }, { "x": -0.8, "y": 1.45 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -1.45 }, { "x": -0.4, "y": -1.45 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.4, "y": -1.45 }, { "x": -0.8, "y": -1.050001 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={2.4} anchorAlignment="center" text="74AUC1G79" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U6" font="tscircuit2024" fontSize={0.4} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.049999, "y": 1.7 }, { "x": -2.049999, "y": 1.7 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.049999, "y": 1.7 }, { "x": -2.049999, "y": -1.7 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.049999, "y": -1.7 }, { "x": 2.049999, "y": 1.7 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.049999, "y": -1.7 }, { "x": 2.049999, "y": -1.7 }]} layer="bottom"/>
      </footprint>);
// R48: 33R; Resistor_SMD:R_0402_1005Metric
export const Footprint_R48 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.509999mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.509999mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={0} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="33R" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R48" font="tscircuit2024" fontSize={0.26} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
      </footprint>);
// D10: LED 0402 RED; LED_SMD:LED_0402_1005Metric
export const Footprint_D10 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>

<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="LED 0402 RED" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D10" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
      </footprint>);
// D8: LED 0402 GREEN; LED_SMD:LED_0402_1005Metric
export const Footprint_D8 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>

<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="LED 0402 GREEN" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D8" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
      </footprint>);
// J1: Conn_01x15; ffc-ctxj:FFC_0.5-14P_CTXJ-H2.0_1
export const Footprint_J1 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-3.25mm" pcbY="-1.85mm" layer="bottom" width="1.8mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.75mm" pcbY="-1.85mm" layer="bottom" width="1.8mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.25mm" pcbY="-1.85mm" layer="bottom" width="1.8mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.75mm" pcbY="-1.85mm" layer="bottom" width="1.8mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-1.25mm" pcbY="-1.85mm" layer="bottom" width="1.8mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-0.75mm" pcbY="-1.85mm" layer="bottom" width="1.8mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-0.25mm" pcbY="-1.85mm" layer="bottom" width="1.8mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.25mm" pcbY="-1.85mm" layer="bottom" width="1.8mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="0.75mm" pcbY="-1.85mm" layer="bottom" width="1.8mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="1.25mm" pcbY="-1.85mm" layer="bottom" width="1.8mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="1.75mm" pcbY="-1.85mm" layer="bottom" width="1.8mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="2.25mm" pcbY="-1.85mm" layer="bottom" width="1.8mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="2.75mm" pcbY="-1.85mm" layer="bottom" width="1.8mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="3.25mm" pcbY="-1.85mm" layer="bottom" width="1.8mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-5.2mm" pcbY="0.05mm" layer="bottom" width="3.2mm" height="2.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="5.2mm" pcbY="0.05mm" layer="bottom" width="3.2mm" height="2.5mm" ccwRotation={90} shape="rotated_rect"/>






<fabricationnotetext pcbX={0} pcbY={5.6} anchorAlignment="center" text="Conn_01x15" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={3.7} anchorAlignment="center" text="J1" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardoutline outline={[{ "x": -6.6, "y": -3 }, { "x": 6.55, "y": -3 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 6.55, "y": -3 }, { "x": 6.55, "y": 3.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -6.6, "y": 3.5 }, { "x": -6.6, "y": -3 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 6.55, "y": 3.5 }, { "x": -6.6, "y": 3.5 }]} layer="bottom"/>
      </footprint>);
// RN4: 220R; Resistor_SMD:R_Array_Convex_4x0402
export const Footprint_RN4 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.5mm" pcbY="-0.75mm" layer="bottom" width="0.5mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.5mm" pcbY="-0.25mm" layer="bottom" width="0.5mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.5mm" pcbY="0.25mm" layer="bottom" width="0.5mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.5mm" pcbY="0.75mm" layer="bottom" width="0.5mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.5mm" pcbY="0.75mm" layer="bottom" width="0.5mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.5mm" pcbY="0.25mm" layer="bottom" width="0.5mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.5mm" pcbY="-0.25mm" layer="bottom" width="0.5mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.5mm" pcbY="-0.75mm" layer="bottom" width="0.5mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -1 }, { "x": -0.5, "y": -1 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 1 }, { "x": 0.5, "y": -1 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -1 }, { "x": -0.5, "y": 1 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": 0.5, "y": 1 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={2.1} anchorAlignment="center" text="220R" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="RN4" font="tscircuit2024" fontSize={0.5} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": 1, "y": 1.25 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": -1, "y": -1.25 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": 1, "y": 1.25 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": -1, "y": -1.25 }]} layer="bottom"/>
      </footprint>);
// U1: USBLC6-2P6; Package_TO_SOT_SMD:SOT-666
export const Footprint_U1 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.85mm" pcbY="-0.5375mm" layer="bottom" cornerRadius="0.046875mm" width="0.5mm" height="0.375mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.925mm" pcbY="0mm" layer="bottom" cornerRadius="0.0375mm" width="0.65mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.85mm" pcbY="0.5375mm" layer="bottom" cornerRadius="0.046875mm" width="0.5mm" height="0.375mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.85mm" pcbY="0.5375mm" layer="bottom" cornerRadius="0.046875mm" width="0.5mm" height="0.375mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.925mm" pcbY="0mm" layer="bottom" cornerRadius="0.0375mm" width="0.65mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.85mm" pcbY="-0.5375mm" layer="bottom" cornerRadius="0.046875mm" width="0.5mm" height="0.375mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.65, "y": -0.85 }, { "x": 0.65, "y": 0.85 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.65, "y": -0.85 }, { "x": -0.33, "y": -0.85 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.65, "y": -0.85 }, { "x": -0.33, "y": -0.85 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.65, "y": 0.85 }, { "x": -0.65, "y": 0.85 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.65, "y": -0.53 }, { "x": -0.33, "y": -0.85 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.65, "y": -0.53 }, { "x": -0.65, "y": 0.85 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.75} anchorAlignment="center" text="USBLC6-2P6" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U1" font="tscircuit2024" fontSize={0.5} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.5, "y": 1.1 }, { "x": 1.5, "y": -1.1 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.5, "y": -1.1 }, { "x": 1.5, "y": -1.1 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.5, "y": -1.1 }, { "x": -1.5, "y": 1.1 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.5, "y": 1.1 }, { "x": 1.5, "y": 1.1 }]} layer="bottom"/>
      </footprint>);
// REF**: WEEE-Logo_4.2x6mm_SilkScreen; Symbol:WEEE-Logo_4.2x6mm_SilkScreen
export const Footprint_REF__ = () => (<footprint originalLayer="bottom">
        

      </footprint>);
// U4: H11L1SR2M; Package_DIP:DIP-6_W8.89mm_SMDSocket_LongPads
export const Footprint_U4 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-4.445mm" pcbY="-2.54mm" layer="bottom" width="1.6mm" height="3.1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-4.445mm" pcbY="0mm" layer="bottom" width="1.6mm" height="3.1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-4.445mm" pcbY="2.54mm" layer="bottom" width="1.6mm" height="3.1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="4.445mm" pcbY="2.54mm" layer="bottom" width="1.6mm" height="3.1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="4.445mm" pcbY="0mm" layer="bottom" width="1.6mm" height="3.1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="4.445mm" pcbY="-2.54mm" layer="bottom" width="1.6mm" height="3.1mm" ccwRotation={-90} shape="rotated_rect"/>










<fabricationnotepath route={[{ "x": 5.08, "y": 3.87 }, { "x": -5.08, "y": 3.87 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -5.08, "y": 3.87 }, { "x": -5.08, "y": -3.87 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 3.175, "y": 3.81 }, { "x": 3.175, "y": -3.81 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -3.175, "y": 3.81 }, { "x": 3.175, "y": 3.81 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -3.175, "y": -2.81 }, { "x": -3.175, "y": 3.81 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 3.175, "y": -3.81 }, { "x": -2.175, "y": -3.81 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -2.175, "y": -3.81 }, { "x": -3.175, "y": -2.81 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 5.08, "y": -3.87 }, { "x": 5.08, "y": 3.87 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -5.08, "y": -3.87 }, { "x": 5.08, "y": -3.87 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={4.87} anchorAlignment="center" text="H11L1SR2M" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U4" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardoutline outline={[{ "x": 6.25, "y": 4.15 }, { "x": -6.25, "y": 4.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -6.25, "y": 4.15 }, { "x": -6.25, "y": -4.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 6.25, "y": -4.15 }, { "x": 6.25, "y": 4.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -6.25, "y": -4.15 }, { "x": 6.25, "y": -4.15 }]} layer="bottom"/>
      </footprint>);
// C35: 100nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C35 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.16} anchorAlignment="center" text="100nF" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C35" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
      </footprint>);
// C44: 4.7uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C44 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.68} anchorAlignment="center" text="4.7uF" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C44" font="tscircuit2024" fontSize={0.5} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": -1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": -1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": 1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": 1.7, "y": -0.98 }]} layer="bottom"/>
      </footprint>);
// D12: LED 0402 RED; LED_SMD:LED_0402_1005Metric
export const Footprint_D12 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>

<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="LED 0402 RED" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D12" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
      </footprint>);
// R47: 33R; Resistor_SMD:R_0402_1005Metric
export const Footprint_R47 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.509999mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.509999mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={0} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="33R" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R47" font="tscircuit2024" fontSize={0.26} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
      </footprint>);
// RN7: 33R; Resistor_SMD:R_Array_Convex_4x0402
export const Footprint_RN7 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.499999mm" pcbY="-0.75mm" layer="bottom" width="0.5mm" height="0.4mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.5mm" pcbY="-0.25mm" layer="bottom" width="0.5mm" height="0.3mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.5mm" pcbY="0.25mm" layer="bottom" width="0.5mm" height="0.3mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.499999mm" pcbY="0.75mm" layer="bottom" width="0.5mm" height="0.4mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.499999mm" pcbY="0.75mm" layer="bottom" width="0.5mm" height="0.4mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.5mm" pcbY="0.25mm" layer="bottom" width="0.5mm" height="0.3mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.5mm" pcbY="-0.25mm" layer="bottom" width="0.5mm" height="0.3mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.499999mm" pcbY="-0.75mm" layer="bottom" width="0.5mm" height="0.4mm" ccwRotation={0} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": -0.5, "y": -1 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 1 }, { "x": -0.5, "y": 1 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -1 }, { "x": 0.5, "y": -1 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -1 }, { "x": 0.5, "y": 1 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={2.1} anchorAlignment="center" text="33R" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="RN7" font="tscircuit2024" fontSize={0.5} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1, "y": 1.25 }, { "x": -1, "y": 1.25 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1, "y": 1.25 }, { "x": 1, "y": -1.25 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1, "y": -1.25 }, { "x": -1, "y": 1.25 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1, "y": -1.25 }, { "x": 1, "y": -1.25 }]} layer="bottom"/>
      </footprint>);
// RN2: 220R; Resistor_SMD:R_Array_Convex_4x0402
export const Footprint_RN2 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.5mm" pcbY="-0.75mm" layer="bottom" width="0.5mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.5mm" pcbY="-0.25mm" layer="bottom" width="0.5mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.5mm" pcbY="0.25mm" layer="bottom" width="0.5mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.5mm" pcbY="0.75mm" layer="bottom" width="0.5mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.5mm" pcbY="0.75mm" layer="bottom" width="0.5mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.5mm" pcbY="0.25mm" layer="bottom" width="0.5mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.5mm" pcbY="-0.25mm" layer="bottom" width="0.5mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.5mm" pcbY="-0.75mm" layer="bottom" width="0.5mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -1 }, { "x": -0.5, "y": -1 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 1 }, { "x": 0.5, "y": -1 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -1 }, { "x": -0.5, "y": 1 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": 0.5, "y": 1 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={2.1} anchorAlignment="center" text="220R" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="RN2" font="tscircuit2024" fontSize={0.5} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": 1, "y": 1.25 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": -1, "y": -1.25 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": 1, "y": 1.25 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": -1, "y": -1.25 }]} layer="bottom"/>
      </footprint>);
// U11: Si5351A-B-GT; Package_SO:MSOP-10_3x3mm_P0.5mm
export const Footprint_U11 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-2.1125mm" pcbY="-1mm" layer="bottom" cornerRadius="0.04375mm" width="0.35mm" height="1.625mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.1125mm" pcbY="-0.5mm" layer="bottom" cornerRadius="0.04375mm" width="0.35mm" height="1.625mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.1125mm" pcbY="0mm" layer="bottom" cornerRadius="0.04375mm" width="0.35mm" height="1.625mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.1125mm" pcbY="0.5mm" layer="bottom" cornerRadius="0.04375mm" width="0.35mm" height="1.625mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-2.1125mm" pcbY="1mm" layer="bottom" cornerRadius="0.04375mm" width="0.35mm" height="1.625mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="2.1125mm" pcbY="1mm" layer="bottom" cornerRadius="0.04375mm" width="0.35mm" height="1.625mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="2.1125mm" pcbY="0.5mm" layer="bottom" cornerRadius="0.04375mm" width="0.35mm" height="1.625mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="2.1125mm" pcbY="0mm" layer="bottom" cornerRadius="0.04375mm" width="0.35mm" height="1.625mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="2.1125mm" pcbY="-0.5mm" layer="bottom" cornerRadius="0.04375mm" width="0.35mm" height="1.625mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="2.1125mm" pcbY="-1mm" layer="bottom" cornerRadius="0.04375mm" width="0.35mm" height="1.625mm" ccwRotation={-90} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": 1.5, "y": 1.5 }, { "x": 1.5, "y": -1.5 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.5, "y": 1.5 }, { "x": 1.5, "y": 1.5 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.5, "y": -0.75 }, { "x": -1.5, "y": 1.5 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.5, "y": -1.5 }, { "x": -0.75, "y": -1.5 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.75, "y": -1.5 }, { "x": -1.5, "y": -0.75 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={2.45} anchorAlignment="center" text="Si5351A-B-GT" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U11" font="tscircuit2024" fontSize={0.75} layer="bottom"/>
<courtyardoutline outline={[{ "x": 3.18, "y": 1.75 }, { "x": -3.18, "y": 1.75 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -3.18, "y": 1.75 }, { "x": -3.18, "y": -1.75 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 3.18, "y": -1.75 }, { "x": 3.18, "y": 1.75 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -3.18, "y": -1.75 }, { "x": 3.18, "y": -1.75 }]} layer="bottom"/>
      </footprint>);
// R34: 33R; Resistor_SMD:R_0402_1005Metric
export const Footprint_R34 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="33R" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R34" font="tscircuit2024" fontSize={0.26} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
      </footprint>);
// D20: LED 0402 RED; LED_SMD:LED_0402_1005Metric
export const Footprint_D20 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>

<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="LED 0402 RED" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D20" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
      </footprint>);
// R45: 10K; Resistor_SMD:R_0402_1005Metric
export const Footprint_R45 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.509999mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.509999mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="10K" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R45" font="tscircuit2024" fontSize={0.26} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
      </footprint>);
// R35: 33R; Resistor_SMD:R_0402_1005Metric
export const Footprint_R35 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="33R" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R35" font="tscircuit2024" fontSize={0.26} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
      </footprint>);
// D18: LED 0402 RED; LED_SMD:LED_0402_1005Metric
export const Footprint_D18 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>

<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="LED 0402 RED" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D18" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
      </footprint>);
// R46: 0R; Resistor_SMD:R_0402_1005Metric
export const Footprint_R46 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.509999mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.509999mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="0R" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R46" font="tscircuit2024" fontSize={0.26} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
      </footprint>);
// C36: 0.1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C36 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.16} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C36" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
