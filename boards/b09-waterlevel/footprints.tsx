// Arduino water-level monitor
// Source: https://github.com/Srushti-D-Hebbar/arduino-water-level-monitor
// Commit: 7b47f46949e99d8075590de0c5a08a550d646d84; license: MIT. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
// R4: 10k; Resistor_SMD:R_0805_2012Metric
export const Footprint_R4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9125mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.025mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.9125mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.025mm" height="1.4mm" shape="rect"/>


<fabricationnoterect pcbX={0} pcbY={0} width={2} height={1.25} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={3.36} height={1.9} layer="top" pcbRotation="0deg"/>
      </footprint>);
// RV1: 10k; Potentiometer_SMD:Potentiometer_Bourns_3224J_Horizontal
export const Footprint_RV1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="2mm" pcbY="1.15mm" layer="top" cornerRadius="0.125mm" width="2mm" height="1.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="2mm" height="2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="2mm" pcbY="-1.15mm" layer="top" cornerRadius="0.125mm" width="2mm" height="1.3mm" ccwRotation={-180} shape="rotated_rect"/>







<fabricationnoterect pcbX={0} pcbY={0} width={4.6} height={4.8} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={6.5} height={5.3} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// J4: POWER_IN; Connector_PinHeader_2.54mm:PinHeader_1x02_P2.54mm_Vertical
export const Footprint_J4 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="-2.54mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>






<fabricationnotepath route={[{ "x": -1.27, "y": 0.635 }, { "x": -0.635, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -3.81 }, { "x": -1.27, "y": 0.635 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.635, "y": 1.27 }, { "x": 1.27, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 1.27 }, { "x": 1.27, "y": -3.81 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -3.81 }, { "x": -1.27, "y": -3.81 }]} strokeWidth={0.1}/>

<courtyardrect pcbX={0} pcbY={-1.275} width={3.54} height={6.09} layer="top" pcbRotation="0deg"/>
      </footprint>);
// U2: HC-SR04; Connector_PinHeader_2.54mm:PinHeader_1x04_P2.54mm_Vertical
export const Footprint_U2 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="-2.54mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-5.08mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="0mm" pcbY="-7.62mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>






<fabricationnotepath route={[{ "x": 1.27, "y": -8.89 }, { "x": -1.27, "y": -8.89 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 1.27 }, { "x": 1.27, "y": -8.89 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.635, "y": 1.27 }, { "x": 1.27, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -8.89 }, { "x": -1.27, "y": 0.635 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": 0.635 }, { "x": -0.635, "y": 1.27 }]} strokeWidth={0.1}/>

<courtyardrect pcbX={0} pcbY={-3.81} width={3.54} height={11.16} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C4: 10uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnoterect pcbX={0} pcbY={0} width={1.6} height={3.2} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={4.6} height={2.3} layer="top" pcbRotation="180deg"/>
      </footprint>);
// SW2: AUTO/MANUAL; Button_Switch_SMD:SW_SPST_B3S-1000
export const Footprint_SW2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.975mm" pcbY="2.25mm" layer="top" width="1.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin1"]} pcbX="3.975mm" pcbY="2.25mm" layer="top" width="1.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-3.975mm" pcbY="-2.25mm" layer="top" width="1.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="3.975mm" pcbY="-2.25mm" layer="top" width="1.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>








<fabricationnotepath route={[{ "x": -3, "y": -3.3 }, { "x": -3, "y": 3.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3, "y": -3.3 }, { "x": -3, "y": -3.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3, "y": 3.3 }, { "x": 3, "y": 3.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3, "y": 3.3 }, { "x": 3, "y": -3.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": 1.65 }, { "x": -0.631428, "y": 1.524401 }, { "x": -1.166726, "y": 1.166726 }, { "x": -1.524401, "y": 0.631428 }, { "x": -1.65, "y": 0 }, { "x": -1.524401, "y": -0.631428 }, { "x": -1.166726, "y": -1.166726 }, { "x": -0.631428, "y": -1.524401 }, { "x": 0, "y": -1.65 }, { "x": 0.631428, "y": -1.524401 }, { "x": 1.166726, "y": -1.166726 }, { "x": 1.524401, "y": -0.631428 }, { "x": 1.65, "y": 0 }, { "x": 1.524401, "y": 0.631428 }, { "x": 1.166726, "y": 1.166726 }, { "x": 0.631428, "y": 1.524401 }, { "x": 0, "y": 1.65 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -5, "y": -3.7 }, { "x": 5, "y": -3.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5, "y": -3.7 }, { "x": 5, "y": 3.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5, "y": 3.7 }, { "x": -5, "y": -3.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5, "y": 3.7 }, { "x": -5, "y": 3.7 }]} layer="top"/>
      </footprint>);
// R3: 220R; Resistor_SMD:R_0805_2012Metric
export const Footprint_R3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9125mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.025mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.9125mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.025mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnoterect pcbX={0} pcbY={0} width={1.25} height={2} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={3.36} height={1.9} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C2: 10uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnoterect pcbX={0} pcbY={0} width={1.6} height={3.2} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={4.6} height={2.3} layer="top" pcbRotation="180deg"/>
      </footprint>);
// Q1: 2N2219; Package_TO_SOT_THT:TO-39-3
export const Footprint_Q1 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerHeight="1.2mm" outerWidth="1.6mm" holeHeight="0.7mm" holeWidth="0.7mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin2"]} pcbX="2.54mm" pcbY="-2.54mm" outerDiameter="1.2mm" holeDiameter="0.7mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="5.08mm" pcbY="0mm" outerDiameter="1.2mm" holeDiameter="0.7mm" shape="circle"/>




<fabricationnotepath route={[{ "x": -1.27151, "y": 4.419621 }, { "x": -1.879621, "y": 3.81151 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.879621, "y": 3.81151 }, { "x": -1.07352, "y": 3.005408 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.465408, "y": 3.61352 }, { "x": -1.27151, "y": 4.419621 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.54, "y": -4.25 }, { "x": 4.166405, "y": -3.926488 }, { "x": 5.545204, "y": -3.005204 }, { "x": 6.466488, "y": -1.626405 }, { "x": 6.79, "y": 0 }, { "x": 6.466488, "y": 1.626405 }, { "x": 5.545204, "y": 3.005204 }, { "x": 4.166405, "y": 3.926488 }, { "x": 2.54, "y": 4.25 }, { "x": 0.913595, "y": 3.926488 }, { "x": -0.465204, "y": 3.005204 }, { "x": -1.386488, "y": 1.626405 }, { "x": -1.71, "y": 0 }, { "x": -1.386488, "y": -1.626405 }, { "x": -0.465204, "y": -3.005204 }, { "x": 0.913595, "y": -3.926488 }, { "x": 2.54, "y": -4.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.465408, "y": 3.61352 }, { "x": -0.387933, "y": 3.676577 }, { "x": -0.309135, "y": 3.737972 }, { "x": -0.229049, "y": 3.797679 }, { "x": -0.147714, "y": 3.855671 }, { "x": -0.065164, "y": 3.911921 }, { "x": 0.018563, "y": 3.966404 }, { "x": 0.103429, "y": 4.019095 }, { "x": 0.189396, "y": 4.069971 }, { "x": 0.276424, "y": 4.119008 }, { "x": 0.364475, "y": 4.166185 }, { "x": 0.453508, "y": 4.211479 }, { "x": 0.543484, "y": 4.254871 }, { "x": 0.634362, "y": 4.296341 }, { "x": 0.726101, "y": 4.335871 }, { "x": 0.818659, "y": 4.373441 }, { "x": 0.911995, "y": 4.409037 }, { "x": 1.006066, "y": 4.44264 }, { "x": 1.10083, "y": 4.474237 }, { "x": 1.196244, "y": 4.503812 }, { "x": 1.292265, "y": 4.531353 }, { "x": 1.38885, "y": 4.556847 }, { "x": 1.485955, "y": 4.580283 }, { "x": 1.583536, "y": 4.60165 }, { "x": 1.681549, "y": 4.620938 }, { "x": 1.779949, "y": 4.638138 }, { "x": 1.878694, "y": 4.653244 }, { "x": 1.977736, "y": 4.666247 }, { "x": 2.077033, "y": 4.677143 }, { "x": 2.176539, "y": 4.685926 }, { "x": 2.276209, "y": 4.692592 }, { "x": 2.375998, "y": 4.697138 }, { "x": 2.475862, "y": 4.699563 }, { "x": 2.575754, "y": 4.699864 }, { "x": 2.67563, "y": 4.698043 }, { "x": 2.775445, "y": 4.694099 }, { "x": 2.875154, "y": 4.688035 }, { "x": 2.974711, "y": 4.679854 }, { "x": 3.074072, "y": 4.669558 }, { "x": 3.173191, "y": 4.657153 }, { "x": 3.272025, "y": 4.642644 }, { "x": 3.370528, "y": 4.626038 }, { "x": 3.468655, "y": 4.607342 }, { "x": 3.566363, "y": 4.586565 }, { "x": 3.663608, "y": 4.563717 }, { "x": 3.760345, "y": 4.538806 }, { "x": 3.856531, "y": 4.511846 }, { "x": 3.952122, "y": 4.482847 }, { "x": 4.047075, "y": 4.451823 }, { "x": 4.141347, "y": 4.418788 }, { "x": 4.234896, "y": 4.383758 }, { "x": 4.327679, "y": 4.346747 }, { "x": 4.419655, "y": 4.307772 }, { "x": 4.510782, "y": 4.266851 }, { "x": 4.601018, "y": 4.224004 }, { "x": 4.690324, "y": 4.179248 }, { "x": 4.778658, "y": 4.132604 }, { "x": 4.865981, "y": 4.084093 }, { "x": 4.952253, "y": 4.033737 }, { "x": 5.037436, "y": 3.98156 }, { "x": 5.12149, "y": 3.927584 }, { "x": 5.204378, "y": 3.871833 }, { "x": 5.286063, "y": 3.814334 }, { "x": 5.366507, "y": 3.755111 }, { "x": 5.445674, "y": 3.694193 }, { "x": 5.523529, "y": 3.631605 }, { "x": 5.600036, "y": 3.567377 }, { "x": 5.675161, "y": 3.501538 }, { "x": 5.74887, "y": 3.434117 }, { "x": 5.821129, "y": 3.365144 }, { "x": 5.891906, "y": 3.294652 }, { "x": 5.961169, "y": 3.222671 }, { "x": 6.028886, "y": 3.149234 }, { "x": 6.095027, "y": 3.074375 }, { "x": 6.159563, "y": 2.998127 }, { "x": 6.222463, "y": 2.920525 }, { "x": 6.2837, "y": 2.841604 }, { "x": 6.343246, "y": 2.761398 }, { "x": 6.401074, "y": 2.679946 }, { "x": 6.457158, "y": 2.597283 }, { "x": 6.511472, "y": 2.513447 }, { "x": 6.563992, "y": 2.428475 }, { "x": 6.614695, "y": 2.342406 }, { "x": 6.663556, "y": 2.255279 }, { "x": 6.710556, "y": 2.167134 }, { "x": 6.755671, "y": 2.078009 }, { "x": 6.798882, "y": 1.987946 }, { "x": 6.840169, "y": 1.896985 }, { "x": 6.879513, "y": 1.805166 }, { "x": 6.916898, "y": 1.712533 }, { "x": 6.952305, "y": 1.619126 }, { "x": 6.985719, "y": 1.524987 }, { "x": 7.017125, "y": 1.43016 }, { "x": 7.046508, "y": 1.334686 }, { "x": 7.073856, "y": 1.23861 }, { "x": 7.099155, "y": 1.141974 }, { "x": 7.122396, "y": 1.044822 }, { "x": 7.143566, "y": 0.947198 }, { "x": 7.162656, "y": 0.849147 }, { "x": 7.179659, "y": 0.750712 }, { "x": 7.194565, "y": 0.651937 }, { "x": 7.20737, "y": 0.552869 }, { "x": 7.218065, "y": 0.45355 }, { "x": 7.226648, "y": 0.354027 }, { "x": 7.233113, "y": 0.254343 }, { "x": 7.237459, "y": 0.154545 }, { "x": 7.239682, "y": 0.054677 }, { "x": 7.239783, "y": -0.045216 }, { "x": 7.23776, "y": -0.145088 }, { "x": 7.233616, "y": -0.244895 }, { "x": 7.227351, "y": -0.344591 }, { "x": 7.218969, "y": -0.444131 }, { "x": 7.208473, "y": -0.543471 }, { "x": 7.195868, "y": -0.642566 }, { "x": 7.181161, "y": -0.74137 }, { "x": 7.164356, "y": -0.839839 }, { "x": 7.145463, "y": -0.937929 }, { "x": 7.12449, "y": -1.035595 }, { "x": 7.101445, "y": -1.132793 }, { "x": 7.07634, "y": -1.22948 }, { "x": 7.049186, "y": -1.325611 }, { "x": 7.019995, "y": -1.421143 }, { "x": 6.98878, "y": -1.516034 }, { "x": 6.955555, "y": -1.61024 }, { "x": 6.920336, "y": -1.703718 }, { "x": 6.883139, "y": -1.796427 }, { "x": 6.843979, "y": -1.888324 }, { "x": 6.802875, "y": -1.979368 }, { "x": 6.759846, "y": -2.069518 }, { "x": 6.71491, "y": -2.158733 }, { "x": 6.668088, "y": -2.246973 }, { "x": 6.619402, "y": -2.334198 }, { "x": 6.568873, "y": -2.420369 }, { "x": 6.516524, "y": -2.505446 }, { "x": 6.462378, "y": -2.589392 }, { "x": 6.406461, "y": -2.672167 }, { "x": 6.348798, "y": -2.753736 }, { "x": 6.289413, "y": -2.834061 }, { "x": 6.228335, "y": -2.913106 }, { "x": 6.165591, "y": -2.990834 }, { "x": 6.101209, "y": -3.067212 }, { "x": 6.035219, "y": -3.142204 }, { "x": 5.96765, "y": -3.215777 }, { "x": 5.898532, "y": -3.287897 }, { "x": 5.827897, "y": -3.358532 }, { "x": 5.755777, "y": -3.42765 }, { "x": 5.682204, "y": -3.495219 }, { "x": 5.607212, "y": -3.561209 }, { "x": 5.530834, "y": -3.625591 }, { "x": 5.453106, "y": -3.688335 }, { "x": 5.374061, "y": -3.749413 }, { "x": 5.293736, "y": -3.808798 }, { "x": 5.212167, "y": -3.866461 }, { "x": 5.129392, "y": -3.922378 }, { "x": 5.045446, "y": -3.976524 }, { "x": 4.960369, "y": -4.028873 }, { "x": 4.874198, "y": -4.079402 }, { "x": 4.786973, "y": -4.128088 }, { "x": 4.698733, "y": -4.17491 }, { "x": 4.609518, "y": -4.219846 }, { "x": 4.519368, "y": -4.262875 }, { "x": 4.428324, "y": -4.303979 }, { "x": 4.336427, "y": -4.343139 }, { "x": 4.243718, "y": -4.380336 }, { "x": 4.15024, "y": -4.415555 }, { "x": 4.056034, "y": -4.44878 }, { "x": 3.961143, "y": -4.479995 }, { "x": 3.865611, "y": -4.509186 }, { "x": 3.76948, "y": -4.53634 }, { "x": 3.672793, "y": -4.561445 }, { "x": 3.575595, "y": -4.58449 }, { "x": 3.477929, "y": -4.605463 }, { "x": 3.379839, "y": -4.624356 }, { "x": 3.28137, "y": -4.641161 }, { "x": 3.182566, "y": -4.655868 }, { "x": 3.083471, "y": -4.668473 }, { "x": 2.984131, "y": -4.678969 }, { "x": 2.884591, "y": -4.687351 }, { "x": 2.784895, "y": -4.693616 }, { "x": 2.685088, "y": -4.69776 }, { "x": 2.585216, "y": -4.699783 }, { "x": 2.485323, "y": -4.699682 }, { "x": 2.385455, "y": -4.697459 }, { "x": 2.285657, "y": -4.693113 }, { "x": 2.185973, "y": -4.686648 }, { "x": 2.08645, "y": -4.678065 }, { "x": 1.987131, "y": -4.66737 }, { "x": 1.888063, "y": -4.654565 }, { "x": 1.789288, "y": -4.639659 }, { "x": 1.690853, "y": -4.622656 }, { "x": 1.592802, "y": -4.603566 }, { "x": 1.495178, "y": -4.582396 }, { "x": 1.398026, "y": -4.559155 }, { "x": 1.30139, "y": -4.533856 }, { "x": 1.205314, "y": -4.506508 }, { "x": 1.10984, "y": -4.477125 }, { "x": 1.015013, "y": -4.445719 }, { "x": 0.920874, "y": -4.412305 }, { "x": 0.827467, "y": -4.376898 }, { "x": 0.734834, "y": -4.339513 }, { "x": 0.643015, "y": -4.300169 }, { "x": 0.552054, "y": -4.258882 }, { "x": 0.461991, "y": -4.215671 }, { "x": 0.372866, "y": -4.170556 }, { "x": 0.284721, "y": -4.123556 }, { "x": 0.197594, "y": -4.074695 }, { "x": 0.111525, "y": -4.023992 }, { "x": 0.026553, "y": -3.971472 }, { "x": -0.057283, "y": -3.917158 }, { "x": -0.139946, "y": -3.861074 }, { "x": -0.221398, "y": -3.803246 }, { "x": -0.301604, "y": -3.7437 }, { "x": -0.380525, "y": -3.682463 }, { "x": -0.458127, "y": -3.619563 }, { "x": -0.534375, "y": -3.555027 }, { "x": -0.609234, "y": -3.488886 }, { "x": -0.682671, "y": -3.421169 }, { "x": -0.754652, "y": -3.351906 }, { "x": -0.825144, "y": -3.281129 }, { "x": -0.894117, "y": -3.20887 }, { "x": -0.961538, "y": -3.135161 }, { "x": -1.027377, "y": -3.060036 }, { "x": -1.091605, "y": -2.983529 }, { "x": -1.154193, "y": -2.905674 }, { "x": -1.215111, "y": -2.826507 }, { "x": -1.274334, "y": -2.746063 }, { "x": -1.331833, "y": -2.664378 }, { "x": -1.387584, "y": -2.58149 }, { "x": -1.44156, "y": -2.497436 }, { "x": -1.493737, "y": -2.412253 }, { "x": -1.544093, "y": -2.325981 }, { "x": -1.592604, "y": -2.238658 }, { "x": -1.639248, "y": -2.150324 }, { "x": -1.684004, "y": -2.061018 }, { "x": -1.726851, "y": -1.970782 }, { "x": -1.767772, "y": -1.879655 }, { "x": -1.806747, "y": -1.787679 }, { "x": -1.843758, "y": -1.694896 }, { "x": -1.878788, "y": -1.601347 }, { "x": -1.911823, "y": -1.507075 }, { "x": -1.942847, "y": -1.412122 }, { "x": -1.971846, "y": -1.316531 }, { "x": -1.998806, "y": -1.220345 }, { "x": -2.023717, "y": -1.123608 }, { "x": -2.046565, "y": -1.026363 }, { "x": -2.067342, "y": -0.928655 }, { "x": -2.086038, "y": -0.830528 }, { "x": -2.102644, "y": -0.732025 }, { "x": -2.117153, "y": -0.633191 }, { "x": -2.129558, "y": -0.534072 }, { "x": -2.139854, "y": -0.434711 }, { "x": -2.148035, "y": -0.335154 }, { "x": -2.154099, "y": -0.235445 }, { "x": -2.158043, "y": -0.13563 }, { "x": -2.159864, "y": -0.035754 }, { "x": -2.159563, "y": 0.064138 }, { "x": -2.157138, "y": 0.164002 }, { "x": -2.152592, "y": 0.263791 }, { "x": -2.145926, "y": 0.363461 }, { "x": -2.137143, "y": 0.462967 }, { "x": -2.126247, "y": 0.562264 }, { "x": -2.113244, "y": 0.661306 }, { "x": -2.098138, "y": 0.760051 }, { "x": -2.080938, "y": 0.858451 }, { "x": -2.06165, "y": 0.956464 }, { "x": -2.040283, "y": 1.054045 }, { "x": -2.016847, "y": 1.15115 }, { "x": -1.991353, "y": 1.247735 }, { "x": -1.963812, "y": 1.343756 }, { "x": -1.934237, "y": 1.43917 }, { "x": -1.90264, "y": 1.533934 }, { "x": -1.869037, "y": 1.628005 }, { "x": -1.833441, "y": 1.721341 }, { "x": -1.795871, "y": 1.813899 }, { "x": -1.756341, "y": 1.905638 }, { "x": -1.714871, "y": 1.996516 }, { "x": -1.671479, "y": 2.086492 }, { "x": -1.626185, "y": 2.175525 }, { "x": -1.579008, "y": 2.263576 }, { "x": -1.529971, "y": 2.350604 }, { "x": -1.479095, "y": 2.436571 }, { "x": -1.426404, "y": 2.521437 }, { "x": -1.371921, "y": 2.605164 }, { "x": -1.315671, "y": 2.687714 }, { "x": -1.257679, "y": 2.769049 }, { "x": -1.197972, "y": 2.849135 }, { "x": -1.136577, "y": 2.927933 }, { "x": -1.07352, "y": 3.005408 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.269834, "y": 4.771499 }, { "x": -2.231499, "y": 3.809834 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.446162, "y": 3.947827 }, { "x": -1.269834, "y": 4.771499 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.231499, "y": 3.809834 }, { "x": -1.407827, "y": 2.986162 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.446162, "y": 3.947827 }, { "x": -0.365974, "y": 4.007221 }, { "x": -0.284605, "y": 4.064986 }, { "x": -0.202088, "y": 4.121099 }, { "x": -0.118457, "y": 4.175537 }, { "x": -0.033745, "y": 4.228279 }, { "x": 0.052013, "y": 4.279302 }, { "x": 0.138782, "y": 4.328585 }, { "x": 0.226526, "y": 4.37611 }, { "x": 0.315211, "y": 4.421857 }, { "x": 0.4048, "y": 4.465806 }, { "x": 0.495257, "y": 4.50794 }, { "x": 0.586545, "y": 4.548243 }, { "x": 0.678626, "y": 4.586697 }, { "x": 0.771464, "y": 4.623287 }, { "x": 0.865021, "y": 4.657998 }, { "x": 0.959258, "y": 4.690816 }, { "x": 1.054138, "y": 4.721728 }, { "x": 1.149622, "y": 4.750721 }, { "x": 1.245671, "y": 4.777783 }, { "x": 1.342246, "y": 4.802904 }, { "x": 1.439307, "y": 4.826073 }, { "x": 1.536816, "y": 4.84728 }, { "x": 1.634732, "y": 4.866517 }, { "x": 1.733017, "y": 4.883777 }, { "x": 1.831629, "y": 4.899052 }, { "x": 1.93053, "y": 4.912336 }, { "x": 2.029678, "y": 4.923624 }, { "x": 2.129033, "y": 4.932911 }, { "x": 2.228555, "y": 4.940193 }, { "x": 2.328204, "y": 4.945467 }, { "x": 2.427939, "y": 4.948732 }, { "x": 2.52772, "y": 4.949985 }, { "x": 2.627505, "y": 4.949227 }, { "x": 2.727255, "y": 4.946457 }, { "x": 2.826929, "y": 4.941677 }, { "x": 2.926486, "y": 4.934889 }, { "x": 3.025887, "y": 4.926095 }, { "x": 3.125089, "y": 4.9153 }, { "x": 3.224054, "y": 4.902507 }, { "x": 3.322741, "y": 4.887721 }, { "x": 3.42111, "y": 4.870949 }, { "x": 3.519121, "y": 4.852198 }, { "x": 3.616734, "y": 4.831475 }, { "x": 3.713909, "y": 4.808788 }, { "x": 3.810607, "y": 4.784147 }, { "x": 3.906789, "y": 4.757561 }, { "x": 4.002416, "y": 4.729042 }, { "x": 4.097448, "y": 4.698602 }, { "x": 4.191847, "y": 4.666252 }, { "x": 4.285575, "y": 4.632005 }, { "x": 4.378593, "y": 4.595876 }, { "x": 4.470864, "y": 4.557879 }, { "x": 4.562351, "y": 4.51803 }, { "x": 4.653016, "y": 4.476345 }, { "x": 4.742822, "y": 4.432841 }, { "x": 4.831732, "y": 4.387535 }, { "x": 4.919712, "y": 4.340446 }, { "x": 5.006724, "y": 4.291594 }, { "x": 5.092734, "y": 4.240997 }, { "x": 5.177706, "y": 4.188676 }, { "x": 5.261607, "y": 4.134654 }, { "x": 5.344401, "y": 4.078951 }, { "x": 5.426056, "y": 4.02159 }, { "x": 5.506537, "y": 3.962595 }, { "x": 5.585814, "y": 3.90199 }, { "x": 5.663852, "y": 3.839798 }, { "x": 5.740621, "y": 3.776047 }, { "x": 5.816089, "y": 3.710761 }, { "x": 5.890226, "y": 3.643966 }, { "x": 5.963001, "y": 3.575691 }, { "x": 6.034385, "y": 3.505963 }, { "x": 6.104349, "y": 3.43481 }, { "x": 6.172865, "y": 3.362261 }, { "x": 6.239904, "y": 3.288345 }, { "x": 6.305439, "y": 3.213094 }, { "x": 6.369445, "y": 3.136536 }, { "x": 6.431894, "y": 3.058704 }, { "x": 6.492761, "y": 2.979629 }, { "x": 6.552022, "y": 2.899342 }, { "x": 6.609652, "y": 2.817878 }, { "x": 6.665629, "y": 2.735268 }, { "x": 6.719929, "y": 2.651547 }, { "x": 6.77253, "y": 2.566748 }, { "x": 6.823411, "y": 2.480906 }, { "x": 6.872551, "y": 2.394056 }, { "x": 6.919931, "y": 2.306233 }, { "x": 6.965531, "y": 2.217472 }, { "x": 7.009332, "y": 2.127811 }, { "x": 7.051316, "y": 2.037285 }, { "x": 7.091468, "y": 1.94593 }, { "x": 7.12977, "y": 1.853785 }, { "x": 7.166206, "y": 1.760887 }, { "x": 7.200762, "y": 1.667273 }, { "x": 7.233425, "y": 1.572981 }, { "x": 7.26418, "y": 1.47805 }, { "x": 7.293014, "y": 1.382519 }, { "x": 7.319918, "y": 1.286425 }, { "x": 7.344879, "y": 1.189809 }, { "x": 7.367887, "y": 1.092709 }, { "x": 7.388933, "y": 0.995166 }, { "x": 7.408008, "y": 0.897217 }, { "x": 7.425106, "y": 0.798905 }, { "x": 7.440217, "y": 0.700267 }, { "x": 7.453338, "y": 0.601345 }, { "x": 7.464462, "y": 0.502178 }, { "x": 7.473584, "y": 0.402808 }, { "x": 7.480701, "y": 0.303274 }, { "x": 7.485811, "y": 0.203616 }, { "x": 7.488911, "y": 0.103876 }, { "x": 7.489999, "y": 0.004093 }, { "x": 7.489076, "y": -0.095691 }, { "x": 7.486141, "y": -0.195436 }, { "x": 7.481196, "y": -0.295102 }, { "x": 7.474243, "y": -0.394648 }, { "x": 7.465285, "y": -0.494033 }, { "x": 7.454326, "y": -0.593218 }, { "x": 7.441369, "y": -0.692162 }, { "x": 7.42642, "y": -0.790824 }, { "x": 7.409486, "y": -0.889165 }, { "x": 7.390572, "y": -0.987145 }, { "x": 7.369687, "y": -1.084723 }, { "x": 7.34684, "y": -1.181861 }, { "x": 7.322039, "y": -1.278518 }, { "x": 7.295295, "y": -1.374656 }, { "x": 7.266618, "y": -1.470235 }, { "x": 7.23602, "y": -1.565217 }, { "x": 7.203514, "y": -1.659562 }, { "x": 7.169112, "y": -1.753233 }, { "x": 7.132829, "y": -1.846192 }, { "x": 7.09468, "y": -1.9384 }, { "x": 7.05468, "y": -2.029821 }, { "x": 7.012845, "y": -2.120416 }, { "x": 6.969192, "y": -2.21015 }, { "x": 6.923739, "y": -2.298986 }, { "x": 6.876505, "y": -2.386887 }, { "x": 6.827508, "y": -2.473819 }, { "x": 6.776769, "y": -2.559745 }, { "x": 6.724308, "y": -2.64463 }, { "x": 6.670147, "y": -2.728441 }, { "x": 6.614307, "y": -2.811143 }, { "x": 6.556812, "y": -2.892703 }, { "x": 6.497683, "y": -2.973087 }, { "x": 6.436947, "y": -3.052263 }, { "x": 6.374627, "y": -3.130198 }, { "x": 6.310748, "y": -3.206862 }, { "x": 6.245337, "y": -3.282222 }, { "x": 6.178421, "y": -3.356248 }, { "x": 6.110025, "y": -3.42891 }, { "x": 6.040179, "y": -3.500179 }, { "x": 5.96891, "y": -3.570025 }, { "x": 5.896248, "y": -3.638421 }, { "x": 5.822222, "y": -3.705337 }, { "x": 5.746862, "y": -3.770748 }, { "x": 5.670198, "y": -3.834627 }, { "x": 5.592263, "y": -3.896947 }, { "x": 5.513087, "y": -3.957683 }, { "x": 5.432703, "y": -4.016812 }, { "x": 5.351143, "y": -4.074307 }, { "x": 5.268441, "y": -4.130147 }, { "x": 5.18463, "y": -4.184308 }, { "x": 5.099745, "y": -4.236769 }, { "x": 5.013819, "y": -4.287508 }, { "x": 4.926887, "y": -4.336505 }, { "x": 4.838986, "y": -4.383739 }, { "x": 4.75015, "y": -4.429192 }, { "x": 4.660416, "y": -4.472845 }, { "x": 4.569821, "y": -4.51468 }, { "x": 4.4784, "y": -4.55468 }, { "x": 4.386192, "y": -4.592829 }, { "x": 4.293233, "y": -4.629112 }, { "x": 4.199562, "y": -4.663514 }, { "x": 4.105217, "y": -4.69602 }, { "x": 4.010235, "y": -4.726618 }, { "x": 3.914656, "y": -4.755295 }, { "x": 3.818518, "y": -4.782039 }, { "x": 3.721861, "y": -4.80684 }, { "x": 3.624723, "y": -4.829687 }, { "x": 3.527145, "y": -4.850572 }, { "x": 3.429165, "y": -4.869486 }, { "x": 3.330824, "y": -4.88642 }, { "x": 3.232162, "y": -4.901369 }, { "x": 3.133218, "y": -4.914326 }, { "x": 3.034033, "y": -4.925285 }, { "x": 2.934648, "y": -4.934243 }, { "x": 2.835102, "y": -4.941196 }, { "x": 2.735436, "y": -4.946141 }, { "x": 2.635691, "y": -4.949076 }, { "x": 2.535907, "y": -4.949999 }, { "x": 2.436124, "y": -4.948911 }, { "x": 2.336384, "y": -4.945811 }, { "x": 2.236726, "y": -4.940701 }, { "x": 2.137192, "y": -4.933584 }, { "x": 2.037822, "y": -4.924462 }, { "x": 1.938655, "y": -4.913338 }, { "x": 1.839733, "y": -4.900217 }, { "x": 1.741095, "y": -4.885106 }, { "x": 1.642783, "y": -4.868008 }, { "x": 1.544834, "y": -4.848933 }, { "x": 1.447291, "y": -4.827887 }, { "x": 1.350191, "y": -4.804879 }, { "x": 1.253575, "y": -4.779918 }, { "x": 1.157481, "y": -4.753014 }, { "x": 1.06195, "y": -4.72418 }, { "x": 0.967019, "y": -4.693425 }, { "x": 0.872727, "y": -4.660762 }, { "x": 0.779113, "y": -4.626206 }, { "x": 0.686215, "y": -4.58977 }, { "x": 0.59407, "y": -4.551468 }, { "x": 0.502715, "y": -4.511316 }, { "x": 0.412189, "y": -4.469332 }, { "x": 0.322528, "y": -4.425531 }, { "x": 0.233767, "y": -4.379931 }, { "x": 0.145944, "y": -4.332551 }, { "x": 0.059094, "y": -4.283411 }, { "x": -0.026748, "y": -4.23253 }, { "x": -0.111547, "y": -4.179929 }, { "x": -0.195268, "y": -4.125629 }, { "x": -0.277878, "y": -4.069652 }, { "x": -0.359342, "y": -4.012022 }, { "x": -0.439629, "y": -3.952761 }, { "x": -0.518704, "y": -3.891894 }, { "x": -0.596536, "y": -3.829445 }, { "x": -0.673094, "y": -3.765439 }, { "x": -0.748345, "y": -3.699904 }, { "x": -0.822261, "y": -3.632865 }, { "x": -0.89481, "y": -3.564349 }, { "x": -0.965963, "y": -3.494385 }, { "x": -1.035691, "y": -3.423001 }, { "x": -1.103966, "y": -3.350226 }, { "x": -1.170761, "y": -3.276089 }, { "x": -1.236047, "y": -3.200621 }, { "x": -1.299798, "y": -3.123852 }, { "x": -1.36199, "y": -3.045814 }, { "x": -1.422595, "y": -2.966537 }, { "x": -1.48159, "y": -2.886056 }, { "x": -1.538951, "y": -2.804401 }, { "x": -1.594654, "y": -2.721607 }, { "x": -1.648676, "y": -2.637706 }, { "x": -1.700997, "y": -2.552734 }, { "x": -1.751594, "y": -2.466724 }, { "x": -1.800446, "y": -2.379712 }, { "x": -1.847535, "y": -2.291732 }, { "x": -1.892841, "y": -2.202822 }, { "x": -1.936345, "y": -2.113016 }, { "x": -1.97803, "y": -2.022351 }, { "x": -2.017879, "y": -1.930864 }, { "x": -2.055876, "y": -1.838593 }, { "x": -2.092005, "y": -1.745575 }, { "x": -2.126252, "y": -1.651847 }, { "x": -2.158602, "y": -1.557448 }, { "x": -2.189042, "y": -1.462416 }, { "x": -2.217561, "y": -1.366789 }, { "x": -2.244147, "y": -1.270607 }, { "x": -2.268788, "y": -1.173909 }, { "x": -2.291475, "y": -1.076734 }, { "x": -2.312198, "y": -0.979121 }, { "x": -2.330949, "y": -0.88111 }, { "x": -2.347721, "y": -0.782741 }, { "x": -2.362507, "y": -0.684054 }, { "x": -2.3753, "y": -0.585089 }, { "x": -2.386095, "y": -0.485887 }, { "x": -2.394889, "y": -0.386486 }, { "x": -2.401677, "y": -0.286929 }, { "x": -2.406457, "y": -0.187255 }, { "x": -2.409227, "y": -0.087505 }, { "x": -2.409985, "y": 0.01228 }, { "x": -2.408732, "y": 0.112061 }, { "x": -2.405467, "y": 0.211796 }, { "x": -2.400193, "y": 0.311445 }, { "x": -2.392911, "y": 0.410967 }, { "x": -2.383624, "y": 0.510322 }, { "x": -2.372336, "y": 0.60947 }, { "x": -2.359052, "y": 0.708371 }, { "x": -2.343777, "y": 0.806983 }, { "x": -2.326517, "y": 0.905268 }, { "x": -2.30728, "y": 1.003184 }, { "x": -2.286073, "y": 1.100693 }, { "x": -2.262904, "y": 1.197754 }, { "x": -2.237783, "y": 1.294329 }, { "x": -2.210721, "y": 1.390378 }, { "x": -2.181728, "y": 1.485862 }, { "x": -2.150816, "y": 1.580742 }, { "x": -2.117998, "y": 1.674979 }, { "x": -2.083287, "y": 1.768536 }, { "x": -2.046697, "y": 1.861374 }, { "x": -2.008243, "y": 1.953455 }, { "x": -1.96794, "y": 2.044743 }, { "x": -1.925806, "y": 2.1352 }, { "x": -1.881857, "y": 2.224789 }, { "x": -1.83611, "y": 2.313474 }, { "x": -1.788585, "y": 2.401218 }, { "x": -1.739302, "y": 2.487987 }, { "x": -1.688279, "y": 2.573745 }, { "x": -1.635537, "y": 2.658457 }, { "x": -1.581099, "y": 2.742088 }, { "x": -1.524986, "y": 2.824605 }, { "x": -1.467221, "y": 2.905974 }, { "x": -1.407827, "y": 2.986162 }]} layer="top"/>
      </footprint>);
// SW1: SET; Button_Switch_SMD:SW_SPST_B3S-1000
export const Footprint_SW1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.975mm" pcbY="2.25mm" layer="top" width="1.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin1"]} pcbX="3.975mm" pcbY="2.25mm" layer="top" width="1.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-3.975mm" pcbY="-2.25mm" layer="top" width="1.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="3.975mm" pcbY="-2.25mm" layer="top" width="1.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>








<fabricationnotepath route={[{ "x": -3, "y": -3.3 }, { "x": -3, "y": 3.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3, "y": -3.3 }, { "x": -3, "y": -3.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3, "y": 3.3 }, { "x": 3, "y": 3.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3, "y": 3.3 }, { "x": 3, "y": -3.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": 1.65 }, { "x": -0.631428, "y": 1.524401 }, { "x": -1.166726, "y": 1.166726 }, { "x": -1.524401, "y": 0.631428 }, { "x": -1.65, "y": 0 }, { "x": -1.524401, "y": -0.631428 }, { "x": -1.166726, "y": -1.166726 }, { "x": -0.631428, "y": -1.524401 }, { "x": 0, "y": -1.65 }, { "x": 0.631428, "y": -1.524401 }, { "x": 1.166726, "y": -1.166726 }, { "x": 1.524401, "y": -0.631428 }, { "x": 1.65, "y": 0 }, { "x": 1.524401, "y": 0.631428 }, { "x": 1.166726, "y": 1.166726 }, { "x": 0.631428, "y": 1.524401 }, { "x": 0, "y": 1.65 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -5, "y": -3.7 }, { "x": 5, "y": -3.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5, "y": -3.7 }, { "x": 5, "y": 3.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5, "y": 3.7 }, { "x": -5, "y": -3.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5, "y": 3.7 }, { "x": -5, "y": 3.7 }]} layer="top"/>
      </footprint>);
// J2: Conn_01x16_Pin; Connector_PinHeader_2.54mm:PinHeader_1x16_P2.54mm_Vertical
export const Footprint_J2 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="-2.54mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-5.08mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="0mm" pcbY="-7.62mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin5"]} pcbX="0mm" pcbY="-10.16mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin6"]} pcbX="0mm" pcbY="-12.7mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin7"]} pcbX="0mm" pcbY="-15.24mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin8"]} pcbX="0mm" pcbY="-17.78mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin9"]} pcbX="0mm" pcbY="-20.32mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin10"]} pcbX="0mm" pcbY="-22.86mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin11"]} pcbX="0mm" pcbY="-25.4mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin12"]} pcbX="0mm" pcbY="-27.94mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin13"]} pcbX="0mm" pcbY="-30.48mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin14"]} pcbX="0mm" pcbY="-33.02mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin15"]} pcbX="0mm" pcbY="-35.56mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin16"]} pcbX="0mm" pcbY="-38.1mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>






<fabricationnotepath route={[{ "x": 1.27, "y": -39.37 }, { "x": -1.27, "y": -39.37 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 1.27 }, { "x": 1.27, "y": -39.37 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.635, "y": 1.27 }, { "x": 1.27, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -39.37 }, { "x": -1.27, "y": 0.635 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": 0.635 }, { "x": -0.635, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-19.05} anchorAlignment="center" text="J2" font="tscircuit2024" fontSize={1}/>

<courtyardrect pcbX={0} pcbY={-19.05} width={3.54} height={41.66} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// D1: 1N4007; Diode_THT:D_DO-41_SOD81_P10.16mm_Horizontal
export const Footprint_D1 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1.1mm" rectPadWidth="2.2mm" rectPadHeight="2.2mm" rectBorderRadius="0.125mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="10.16mm" pcbY="0mm" outerDiameter="2.2mm" holeDiameter="1.1mm" shape="circle"/>






<fabricationnotepath route={[{ "x": 10.16, "y": 0 }, { "x": 7.68, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.36, "y": 1.35 }, { "x": 3.36, "y": -1.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.26, "y": 1.35 }, { "x": 3.26, "y": -1.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.16, "y": 1.35 }, { "x": 3.16, "y": -1.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": 0 }, { "x": 2.48, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnoterect pcbX={5.08} pcbY={0} width={5.2} height={2.7} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={5.08} pcbY={0} width={12.86} height={3.2} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R1: 1k; Resistor_SMD:R_0805_2012Metric
export const Footprint_R1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9125mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.025mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.9125mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.025mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnoterect pcbX={0} pcbY={0} width={2} height={1.25} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={3.36} height={1.9} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// K1: SANYOU_SRD_Form_C; Relay_THT:Relay_SPDT_SANYOU_SRD_Series_Form_C
export const Footprint_K1 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="3mm" holeDiameter="1.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="1.95mm" pcbY="-6.05mm" outerDiameter="2.5mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="14.15mm" pcbY="-6.05mm" outerDiameter="3mm" holeDiameter="1.3mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="14.2mm" pcbY="6mm" outerDiameter="3mm" holeDiameter="1.3mm" shape="circle"/>
<platedhole portHints={["pin5"]} pcbX="1.95mm" pcbY="5.95mm" outerDiameter="2.5mm" holeDiameter="1mm" shape="circle"/>






















<fabricationnotepath route={[{ "x": -1.3, "y": 7.7 }, { "x": 18.3, "y": 7.7 }]} strokeWidth={0.12}/>
<fabricationnotepath route={[{ "x": -1.3, "y": -7.7 }, { "x": -1.3, "y": 7.7 }]} strokeWidth={0.12}/>
<fabricationnotepath route={[{ "x": 18.3, "y": 7.7 }, { "x": 18.3, "y": -7.7 }]} strokeWidth={0.12}/>
<fabricationnotepath route={[{ "x": 18.3, "y": -7.7 }, { "x": -1.3, "y": -7.7 }]} strokeWidth={0.12}/>
<fabricationnotetext pcbX={0} pcbY={2.3} anchorAlignment="center" text="1" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.55, "y": -7.95 }, { "x": -1.55, "y": 7.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.55, "y": -7.95 }, { "x": 18.55, "y": -7.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 18.55, "y": 7.95 }, { "x": -1.55, "y": 7.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 18.55, "y": 7.95 }, { "x": 18.55, "y": -7.95 }]} layer="top"/>
      </footprint>);
// R5: 10k; Resistor_SMD:R_0805_2012Metric
export const Footprint_R5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9125mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.025mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.9125mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.025mm" height="1.4mm" shape="rect"/>


<fabricationnoterect pcbX={0} pcbY={0} width={2} height={1.25} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={3.36} height={1.9} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C1: 100nF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnoterect pcbX={0} pcbY={0} width={1.25} height={2} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={3.4} height={1.96} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C3: 100nF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnoterect pcbX={0} pcbY={0} width={1.25} height={2} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={3.4} height={1.96} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// J3: RELAY_OUT; Connector_PinHeader_2.54mm:PinHeader_1x03_P2.54mm_Vertical
export const Footprint_J3 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="-2.54mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-5.08mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>






<fabricationnotepath route={[{ "x": 1.27, "y": -6.35 }, { "x": -1.27, "y": -6.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 1.27 }, { "x": 1.27, "y": -6.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.635, "y": 1.27 }, { "x": 1.27, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -6.35 }, { "x": -1.27, "y": 0.635 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": 0.635 }, { "x": -0.635, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.54} anchorAlignment="center" text="J3" font="tscircuit2024" fontSize={1}/>

<courtyardrect pcbX={0} pcbY={-2.54} width={3.54} height={8.62} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// U1: Arduino_UNO_R3; Module:Arduino_UNO_R3
export const Footprint_U1 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.6mm" rectPadHeight="1.6mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="90deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="2.54mm" pcbY="0mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin3"]} pcbX="5.08mm" pcbY="0mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin4"]} pcbX="7.62mm" pcbY="0mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin5"]} pcbX="10.16mm" pcbY="0mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin6"]} pcbX="12.7mm" pcbY="0mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin7"]} pcbX="15.24mm" pcbY="0mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin8"]} pcbX="17.78mm" pcbY="0mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin9"]} pcbX="22.86mm" pcbY="0mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin10"]} pcbX="25.4mm" pcbY="0mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin11"]} pcbX="27.94mm" pcbY="0mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin12"]} pcbX="30.48mm" pcbY="0mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin13"]} pcbX="33.02mm" pcbY="0mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin14"]} pcbX="35.56mm" pcbY="0mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin15"]} pcbX="35.56mm" pcbY="-48.26mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin16"]} pcbX="33.02mm" pcbY="-48.26mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin17"]} pcbX="30.48mm" pcbY="-48.26mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin18"]} pcbX="27.94mm" pcbY="-48.26mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin19"]} pcbX="25.4mm" pcbY="-48.26mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin20"]} pcbX="22.86mm" pcbY="-48.26mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin21"]} pcbX="20.32mm" pcbY="-48.26mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin22"]} pcbX="17.78mm" pcbY="-48.26mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin23"]} pcbX="13.72mm" pcbY="-48.26mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin24"]} pcbX="11.18mm" pcbY="-48.26mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin25"]} pcbX="8.64mm" pcbY="-48.26mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin26"]} pcbX="6.1mm" pcbY="-48.26mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin27"]} pcbX="3.56mm" pcbY="-48.26mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin28"]} pcbX="1.02mm" pcbY="-48.26mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin29"]} pcbX="-1.52mm" pcbY="-48.26mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin30"]} pcbX="-4.06mm" pcbY="-48.26mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin31"]} pcbX="-6.6mm" pcbY="-48.26mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin32"]} pcbX="-9.14mm" pcbY="-48.26mm" outerHeight="1.6mm" outerWidth="1.6mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="90deg"/>

















<fabricationnotepath route={[{ "x": -27.94, "y": -50.8 }, { "x": -27.94, "y": 2.54 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 36.58, "y": -50.8 }, { "x": -27.94, "y": -50.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 38.1, "y": -49.28 }, { "x": 36.58, "y": -50.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -34.29, "y": -41.27 }, { "x": -34.29, "y": -29.84 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -18.41, "y": -41.27 }, { "x": -34.29, "y": -41.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 38.1, "y": -37.85 }, { "x": 38.1, "y": -49.28 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 40.64, "y": -35.31 }, { "x": 38.1, "y": -37.85 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -34.29, "y": -29.84 }, { "x": -18.41, "y": -29.84 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -18.41, "y": -29.84 }, { "x": -18.41, "y": -41.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -29.84, "y": -9.53 }, { "x": -29.84, "y": -0.64 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -16.51, "y": -9.53 }, { "x": -29.84, "y": -9.53 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 40.64, "y": -2.54 }, { "x": 40.64, "y": -35.31 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -29.84, "y": -0.64 }, { "x": -16.51, "y": -0.64 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -16.51, "y": -0.64 }, { "x": -16.51, "y": -9.53 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 38.1, "y": 0 }, { "x": 40.64, "y": -2.54 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -27.94, "y": 2.54 }, { "x": 38.1, "y": 2.54 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 38.1, "y": 2.54 }, { "x": 38.1, "y": 0 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -28.19, "y": -51.05 }, { "x": -28.19, "y": -41.53 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 36.58, "y": -51.05 }, { "x": -28.19, "y": -51.05 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 38.35, "y": -49.28 }, { "x": 36.58, "y": -51.05 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -34.54, "y": -41.53 }, { "x": -34.54, "y": -29.59 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -28.19, "y": -41.53 }, { "x": -34.54, "y": -41.53 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 38.35, "y": -37.85 }, { "x": 38.35, "y": -49.28 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 40.89, "y": -35.31 }, { "x": 38.35, "y": -37.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -34.54, "y": -29.59 }, { "x": -28.19, "y": -29.59 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -28.19, "y": -29.59 }, { "x": -28.19, "y": -9.78 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -30.1, "y": -9.78 }, { "x": -30.1, "y": -0.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -28.19, "y": -9.78 }, { "x": -30.1, "y": -9.78 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 40.89, "y": -2.54 }, { "x": 40.89, "y": -35.31 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -30.1, "y": -0.38 }, { "x": -28.19, "y": -0.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -28.19, "y": -0.38 }, { "x": -28.19, "y": 2.79 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 38.35, "y": 0 }, { "x": 40.89, "y": -2.54 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -28.19, "y": 2.79 }, { "x": 38.35, "y": 2.79 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 38.35, "y": 2.79 }, { "x": 38.35, "y": 0 }]} layer="top"/>
      </footprint>);
