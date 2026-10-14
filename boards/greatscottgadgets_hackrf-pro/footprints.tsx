// HackRF Pro
// Source: https://github.com/greatscottgadgets/hackrf-pro
// Commit: 359b98f2451395408bc25dae64efa9fc518e93d0; license: CERN-OHL-P-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
// D6: LED; praline:LED_Dual_Xinglight_XL-3210_Horizontal
export const Footprint_D6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0.4mm" pcbY="-0.55mm" layer="top" cornerRadius="0.0275mm" width="0.44mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.4mm" pcbY="-0.55mm" layer="top" cornerRadius="0.0275mm" width="0.44mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.475mm" pcbY="-0.33mm" layer="top" cornerRadius="0.055mm" width="0.88mm" height="0.95mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.475mm" pcbY="-0.33mm" layer="top" cornerRadius="0.055mm" width="0.88mm" height="0.95mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 1.6, "y": 0 }, { "x": -1.6, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0 }, { "x": -1.6, "y": -0.48 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.13 }, { "x": -1.25, "y": -0.48 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.48 }, { "x": 1.6, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.48 }, { "x": 1.6, "y": -0.48 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.102904, "y": 0 }, { "x": -1.091582, "y": 0.096768 }, { "x": -1.071786, "y": 0.192164 }, { "x": -1.043669, "y": 0.285447 }, { "x": -1.007452, "y": 0.375893 }, { "x": -0.963413, "y": 0.4628 }, { "x": -0.911896, "y": 0.545494 }, { "x": -0.8533, "y": 0.623332 }, { "x": -0.788081, "y": 0.69571 }, { "x": -0.716743, "y": 0.762067 }, { "x": -0.639842, "y": 0.821887 }, { "x": -0.557974, "y": 0.874706 }, { "x": -0.471774, "y": 0.920114 }, { "x": -0.381912, "y": 0.957758 }, { "x": -0.289085, "y": 0.987346 }, { "x": -0.194015, "y": 1.008649 }, { "x": -0.097438, "y": 1.021501 }, { "x": -0.000105, "y": 1.025802 }, { "x": 0.097229, "y": 1.021519 }, { "x": 0.193809, "y": 1.008686 }, { "x": 0.288883, "y": 0.987401 }, { "x": 0.381715, "y": 0.95783 }, { "x": 0.471584, "y": 0.920203 }, { "x": 0.557793, "y": 0.874812 }, { "x": 0.639671, "y": 0.822008 }, { "x": 0.716584, "y": 0.762203 }, { "x": 0.787934, "y": 0.69586 }, { "x": 0.853167, "y": 0.623494 }, { "x": 0.911778, "y": 0.545667 }, { "x": 0.963311, "y": 0.462983 }, { "x": 1.007365, "y": 0.376084 }, { "x": 1.0436, "y": 0.285645 }, { "x": 1.071734, "y": 0.192367 }, { "x": 1.091548, "y": 0.096975 }, { "x": 1.102889, "y": 0.000209 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.35} anchorAlignment="center" text="D6" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": 1.27, "y": 0.36 }, { "x": 2.2, "y": 0.36 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2, "y": 0.36 }, { "x": -1.27, "y": 0.36 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.2, "y": -1.02 }, { "x": 2.2, "y": 0.36 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2, "y": -1.02 }, { "x": -2.2, "y": 0.36 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2, "y": -1.02 }, { "x": 2.2, "y": -1.02 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.27, "y": 0.36 }, { "x": -1.235091, "y": 0.451659 }, { "x": -1.193577, "y": 0.540522 }, { "x": -1.14568, "y": 0.626113 }, { "x": -1.091656, "y": 0.707975 }, { "x": -1.031794, "y": 0.785671 }, { "x": -0.966414, "y": 0.858783 }, { "x": -0.895866, "y": 0.926922 }, { "x": -0.820526, "y": 0.989724 }, { "x": -0.740799, "y": 1.046851 }, { "x": -0.65711, "y": 1.097999 }, { "x": -0.569907, "y": 1.142895 }, { "x": -0.479655, "y": 1.181297 }, { "x": -0.386839, "y": 1.213002 }, { "x": -0.291954, "y": 1.237838 }, { "x": -0.195508, "y": 1.255674 }, { "x": -0.098016, "y": 1.266414 }, { "x": 0, "y": 1.27 }, { "x": 0.098016, "y": 1.266414 }, { "x": 0.195508, "y": 1.255674 }, { "x": 0.291954, "y": 1.237838 }, { "x": 0.386839, "y": 1.213002 }, { "x": 0.479655, "y": 1.181297 }, { "x": 0.569907, "y": 1.142895 }, { "x": 0.65711, "y": 1.097999 }, { "x": 0.740799, "y": 1.046851 }, { "x": 0.820526, "y": 0.989724 }, { "x": 0.895866, "y": 0.926922 }, { "x": 0.966414, "y": 0.858783 }, { "x": 1.031794, "y": 0.785671 }, { "x": 1.091656, "y": 0.707975 }, { "x": 1.14568, "y": 0.626113 }, { "x": 1.193577, "y": 0.540522 }, { "x": 1.235091, "y": 0.451659 }, { "x": 1.27, "y": 0.36 }]} layer="top"/>
      </footprint>);
// D4: LED; praline:LED_Dual_Xinglight_XL-3210_Horizontal
export const Footprint_D4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0.4mm" pcbY="-0.55mm" layer="top" cornerRadius="0.0275mm" width="0.44mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.4mm" pcbY="-0.55mm" layer="top" cornerRadius="0.0275mm" width="0.44mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.475mm" pcbY="-0.33mm" layer="top" cornerRadius="0.055mm" width="0.88mm" height="0.95mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.475mm" pcbY="-0.33mm" layer="top" cornerRadius="0.055mm" width="0.88mm" height="0.95mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 1.6, "y": 0 }, { "x": -1.6, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0 }, { "x": -1.6, "y": -0.48 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.13 }, { "x": -1.25, "y": -0.48 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.48 }, { "x": 1.6, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.48 }, { "x": 1.6, "y": -0.48 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.102904, "y": 0 }, { "x": -1.091582, "y": 0.096768 }, { "x": -1.071786, "y": 0.192164 }, { "x": -1.043669, "y": 0.285447 }, { "x": -1.007452, "y": 0.375893 }, { "x": -0.963413, "y": 0.4628 }, { "x": -0.911896, "y": 0.545494 }, { "x": -0.8533, "y": 0.623332 }, { "x": -0.788081, "y": 0.69571 }, { "x": -0.716743, "y": 0.762067 }, { "x": -0.639842, "y": 0.821887 }, { "x": -0.557974, "y": 0.874706 }, { "x": -0.471774, "y": 0.920114 }, { "x": -0.381912, "y": 0.957758 }, { "x": -0.289085, "y": 0.987346 }, { "x": -0.194015, "y": 1.008649 }, { "x": -0.097438, "y": 1.021501 }, { "x": -0.000105, "y": 1.025802 }, { "x": 0.097229, "y": 1.021519 }, { "x": 0.193809, "y": 1.008686 }, { "x": 0.288883, "y": 0.987401 }, { "x": 0.381715, "y": 0.95783 }, { "x": 0.471584, "y": 0.920203 }, { "x": 0.557793, "y": 0.874812 }, { "x": 0.639671, "y": 0.822008 }, { "x": 0.716584, "y": 0.762203 }, { "x": 0.787934, "y": 0.69586 }, { "x": 0.853167, "y": 0.623494 }, { "x": 0.911778, "y": 0.545667 }, { "x": 0.963311, "y": 0.462983 }, { "x": 1.007365, "y": 0.376084 }, { "x": 1.0436, "y": 0.285645 }, { "x": 1.071734, "y": 0.192367 }, { "x": 1.091548, "y": 0.096975 }, { "x": 1.102889, "y": 0.000209 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.35} anchorAlignment="center" text="D4" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": 1.27, "y": 0.36 }, { "x": 2.2, "y": 0.36 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2, "y": 0.36 }, { "x": -1.27, "y": 0.36 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.2, "y": -1.02 }, { "x": 2.2, "y": 0.36 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2, "y": -1.02 }, { "x": -2.2, "y": 0.36 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2, "y": -1.02 }, { "x": 2.2, "y": -1.02 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.27, "y": 0.36 }, { "x": -1.235091, "y": 0.451659 }, { "x": -1.193577, "y": 0.540522 }, { "x": -1.14568, "y": 0.626113 }, { "x": -1.091656, "y": 0.707975 }, { "x": -1.031794, "y": 0.785671 }, { "x": -0.966414, "y": 0.858783 }, { "x": -0.895866, "y": 0.926922 }, { "x": -0.820526, "y": 0.989724 }, { "x": -0.740799, "y": 1.046851 }, { "x": -0.65711, "y": 1.097999 }, { "x": -0.569907, "y": 1.142895 }, { "x": -0.479655, "y": 1.181297 }, { "x": -0.386839, "y": 1.213002 }, { "x": -0.291954, "y": 1.237838 }, { "x": -0.195508, "y": 1.255674 }, { "x": -0.098016, "y": 1.266414 }, { "x": 0, "y": 1.27 }, { "x": 0.098016, "y": 1.266414 }, { "x": 0.195508, "y": 1.255674 }, { "x": 0.291954, "y": 1.237838 }, { "x": 0.386839, "y": 1.213002 }, { "x": 0.479655, "y": 1.181297 }, { "x": 0.569907, "y": 1.142895 }, { "x": 0.65711, "y": 1.097999 }, { "x": 0.740799, "y": 1.046851 }, { "x": 0.820526, "y": 0.989724 }, { "x": 0.895866, "y": 0.926922 }, { "x": 0.966414, "y": 0.858783 }, { "x": 1.031794, "y": 0.785671 }, { "x": 1.091656, "y": 0.707975 }, { "x": 1.14568, "y": 0.626113 }, { "x": 1.193577, "y": 0.540522 }, { "x": 1.235091, "y": 0.451659 }, { "x": 1.27, "y": 0.36 }]} layer="top"/>
      </footprint>);
// D8: LED; praline:LED_Dual_Xinglight_XL-3210_Horizontal
export const Footprint_D8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0.4mm" pcbY="-0.55mm" layer="top" cornerRadius="0.0275mm" width="0.44mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.4mm" pcbY="-0.55mm" layer="top" cornerRadius="0.0275mm" width="0.44mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.475mm" pcbY="-0.33mm" layer="top" cornerRadius="0.055mm" width="0.88mm" height="0.95mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.475mm" pcbY="-0.33mm" layer="top" cornerRadius="0.055mm" width="0.88mm" height="0.95mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 1.6, "y": 0 }, { "x": -1.6, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0 }, { "x": -1.6, "y": -0.48 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.13 }, { "x": -1.25, "y": -0.48 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.48 }, { "x": 1.6, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.48 }, { "x": 1.6, "y": -0.48 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.102904, "y": 0 }, { "x": -1.091582, "y": 0.096768 }, { "x": -1.071786, "y": 0.192164 }, { "x": -1.043669, "y": 0.285447 }, { "x": -1.007452, "y": 0.375893 }, { "x": -0.963413, "y": 0.4628 }, { "x": -0.911896, "y": 0.545494 }, { "x": -0.8533, "y": 0.623332 }, { "x": -0.788081, "y": 0.69571 }, { "x": -0.716743, "y": 0.762067 }, { "x": -0.639842, "y": 0.821887 }, { "x": -0.557974, "y": 0.874706 }, { "x": -0.471774, "y": 0.920114 }, { "x": -0.381912, "y": 0.957758 }, { "x": -0.289085, "y": 0.987346 }, { "x": -0.194015, "y": 1.008649 }, { "x": -0.097438, "y": 1.021501 }, { "x": -0.000105, "y": 1.025802 }, { "x": 0.097229, "y": 1.021519 }, { "x": 0.193809, "y": 1.008686 }, { "x": 0.288883, "y": 0.987401 }, { "x": 0.381715, "y": 0.95783 }, { "x": 0.471584, "y": 0.920203 }, { "x": 0.557793, "y": 0.874812 }, { "x": 0.639671, "y": 0.822008 }, { "x": 0.716584, "y": 0.762203 }, { "x": 0.787934, "y": 0.69586 }, { "x": 0.853167, "y": 0.623494 }, { "x": 0.911778, "y": 0.545667 }, { "x": 0.963311, "y": 0.462983 }, { "x": 1.007365, "y": 0.376084 }, { "x": 1.0436, "y": 0.285645 }, { "x": 1.071734, "y": 0.192367 }, { "x": 1.091548, "y": 0.096975 }, { "x": 1.102889, "y": 0.000209 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.35} anchorAlignment="center" text="D8" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": 1.27, "y": 0.36 }, { "x": 2.2, "y": 0.36 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2, "y": 0.36 }, { "x": -1.27, "y": 0.36 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.2, "y": -1.02 }, { "x": 2.2, "y": 0.36 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2, "y": -1.02 }, { "x": -2.2, "y": 0.36 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2, "y": -1.02 }, { "x": 2.2, "y": -1.02 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.27, "y": 0.36 }, { "x": -1.235091, "y": 0.451659 }, { "x": -1.193577, "y": 0.540522 }, { "x": -1.14568, "y": 0.626113 }, { "x": -1.091656, "y": 0.707975 }, { "x": -1.031794, "y": 0.785671 }, { "x": -0.966414, "y": 0.858783 }, { "x": -0.895866, "y": 0.926922 }, { "x": -0.820526, "y": 0.989724 }, { "x": -0.740799, "y": 1.046851 }, { "x": -0.65711, "y": 1.097999 }, { "x": -0.569907, "y": 1.142895 }, { "x": -0.479655, "y": 1.181297 }, { "x": -0.386839, "y": 1.213002 }, { "x": -0.291954, "y": 1.237838 }, { "x": -0.195508, "y": 1.255674 }, { "x": -0.098016, "y": 1.266414 }, { "x": 0, "y": 1.27 }, { "x": 0.098016, "y": 1.266414 }, { "x": 0.195508, "y": 1.255674 }, { "x": 0.291954, "y": 1.237838 }, { "x": 0.386839, "y": 1.213002 }, { "x": 0.479655, "y": 1.181297 }, { "x": 0.569907, "y": 1.142895 }, { "x": 0.65711, "y": 1.097999 }, { "x": 0.740799, "y": 1.046851 }, { "x": 0.820526, "y": 0.989724 }, { "x": 0.895866, "y": 0.926922 }, { "x": 0.966414, "y": 0.858783 }, { "x": 1.031794, "y": 0.785671 }, { "x": 1.091656, "y": 0.707975 }, { "x": 1.14568, "y": 0.626113 }, { "x": 1.193577, "y": 0.540522 }, { "x": 1.235091, "y": 0.451659 }, { "x": 1.27, "y": 0.36 }]} layer="top"/>
      </footprint>);
// D5: LED; praline:LED_Single_Xinglight_XL-3210_Horizontal
export const Footprint_D5 = () => (<footprint originalLayer="top">
        <smtpad pcbX="0mm" pcbY="-0.55mm" layer="top" cornerRadius="0.0275mm" width="0.44mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin1"]} pcbX="-1.525mm" pcbY="-0.33mm" layer="top" cornerRadius="0.053125mm" width="0.88mm" height="0.85mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.525mm" pcbY="-0.33mm" layer="top" cornerRadius="0.053125mm" width="0.88mm" height="0.85mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 1.6, "y": 0 }, { "x": -1.6, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0 }, { "x": -1.6, "y": -0.48 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.13 }, { "x": -1.25, "y": -0.48 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.48 }, { "x": 1.6, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.48 }, { "x": 1.6, "y": -0.48 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.102904, "y": 0 }, { "x": -1.091582, "y": 0.096768 }, { "x": -1.071786, "y": 0.192164 }, { "x": -1.043669, "y": 0.285447 }, { "x": -1.007452, "y": 0.375893 }, { "x": -0.963413, "y": 0.4628 }, { "x": -0.911896, "y": 0.545494 }, { "x": -0.8533, "y": 0.623332 }, { "x": -0.788081, "y": 0.69571 }, { "x": -0.716743, "y": 0.762067 }, { "x": -0.639842, "y": 0.821887 }, { "x": -0.557974, "y": 0.874706 }, { "x": -0.471774, "y": 0.920114 }, { "x": -0.381912, "y": 0.957758 }, { "x": -0.289085, "y": 0.987346 }, { "x": -0.194015, "y": 1.008649 }, { "x": -0.097438, "y": 1.021501 }, { "x": -0.000105, "y": 1.025802 }, { "x": 0.097229, "y": 1.021519 }, { "x": 0.193809, "y": 1.008686 }, { "x": 0.288883, "y": 0.987401 }, { "x": 0.381715, "y": 0.95783 }, { "x": 0.471584, "y": 0.920203 }, { "x": 0.557793, "y": 0.874812 }, { "x": 0.639671, "y": 0.822008 }, { "x": 0.716584, "y": 0.762203 }, { "x": 0.787934, "y": 0.69586 }, { "x": 0.853167, "y": 0.623494 }, { "x": 0.911778, "y": 0.545667 }, { "x": 0.963311, "y": 0.462983 }, { "x": 1.007365, "y": 0.376084 }, { "x": 1.0436, "y": 0.285645 }, { "x": 1.071734, "y": 0.192367 }, { "x": 1.091548, "y": 0.096975 }, { "x": 1.102889, "y": 0.000209 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.35} anchorAlignment="center" text="D5" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": 1.27, "y": 0.36 }, { "x": 2.2, "y": 0.36 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2, "y": 0.36 }, { "x": -1.27, "y": 0.36 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.2, "y": -1.02 }, { "x": 2.2, "y": 0.36 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2, "y": -1.02 }, { "x": -2.2, "y": 0.36 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2, "y": -1.02 }, { "x": 2.2, "y": -1.02 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.27, "y": 0.36 }, { "x": -1.235091, "y": 0.451659 }, { "x": -1.193577, "y": 0.540522 }, { "x": -1.14568, "y": 0.626113 }, { "x": -1.091656, "y": 0.707975 }, { "x": -1.031794, "y": 0.785671 }, { "x": -0.966414, "y": 0.858783 }, { "x": -0.895866, "y": 0.926922 }, { "x": -0.820526, "y": 0.989724 }, { "x": -0.740799, "y": 1.046851 }, { "x": -0.65711, "y": 1.097999 }, { "x": -0.569907, "y": 1.142895 }, { "x": -0.479655, "y": 1.181297 }, { "x": -0.386839, "y": 1.213002 }, { "x": -0.291954, "y": 1.237838 }, { "x": -0.195508, "y": 1.255674 }, { "x": -0.098016, "y": 1.266414 }, { "x": 0, "y": 1.27 }, { "x": 0.098016, "y": 1.266414 }, { "x": 0.195508, "y": 1.255674 }, { "x": 0.291954, "y": 1.237838 }, { "x": 0.386839, "y": 1.213002 }, { "x": 0.479655, "y": 1.181297 }, { "x": 0.569907, "y": 1.142895 }, { "x": 0.65711, "y": 1.097999 }, { "x": 0.740799, "y": 1.046851 }, { "x": 0.820526, "y": 0.989724 }, { "x": 0.895866, "y": 0.926922 }, { "x": 0.966414, "y": 0.858783 }, { "x": 1.031794, "y": 0.785671 }, { "x": 1.091656, "y": 0.707975 }, { "x": 1.14568, "y": 0.626113 }, { "x": 1.193577, "y": 0.540522 }, { "x": 1.235091, "y": 0.451659 }, { "x": 1.27, "y": 0.36 }]} layer="top"/>
      </footprint>);
// D2: LED; praline:LED_Single_Xinglight_XL-3210_Horizontal
export const Footprint_D2 = () => (<footprint originalLayer="top">
        <smtpad pcbX="0mm" pcbY="-0.55mm" layer="top" cornerRadius="0.0275mm" width="0.44mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin1"]} pcbX="-1.525mm" pcbY="-0.33mm" layer="top" cornerRadius="0.053125mm" width="0.88mm" height="0.85mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.525mm" pcbY="-0.33mm" layer="top" cornerRadius="0.053125mm" width="0.88mm" height="0.85mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 1.6, "y": 0 }, { "x": -1.6, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0 }, { "x": -1.6, "y": -0.48 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.13 }, { "x": -1.25, "y": -0.48 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.48 }, { "x": 1.6, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.48 }, { "x": 1.6, "y": -0.48 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.102904, "y": 0 }, { "x": -1.091582, "y": 0.096768 }, { "x": -1.071786, "y": 0.192164 }, { "x": -1.043669, "y": 0.285447 }, { "x": -1.007452, "y": 0.375893 }, { "x": -0.963413, "y": 0.4628 }, { "x": -0.911896, "y": 0.545494 }, { "x": -0.8533, "y": 0.623332 }, { "x": -0.788081, "y": 0.69571 }, { "x": -0.716743, "y": 0.762067 }, { "x": -0.639842, "y": 0.821887 }, { "x": -0.557974, "y": 0.874706 }, { "x": -0.471774, "y": 0.920114 }, { "x": -0.381912, "y": 0.957758 }, { "x": -0.289085, "y": 0.987346 }, { "x": -0.194015, "y": 1.008649 }, { "x": -0.097438, "y": 1.021501 }, { "x": -0.000105, "y": 1.025802 }, { "x": 0.097229, "y": 1.021519 }, { "x": 0.193809, "y": 1.008686 }, { "x": 0.288883, "y": 0.987401 }, { "x": 0.381715, "y": 0.95783 }, { "x": 0.471584, "y": 0.920203 }, { "x": 0.557793, "y": 0.874812 }, { "x": 0.639671, "y": 0.822008 }, { "x": 0.716584, "y": 0.762203 }, { "x": 0.787934, "y": 0.69586 }, { "x": 0.853167, "y": 0.623494 }, { "x": 0.911778, "y": 0.545667 }, { "x": 0.963311, "y": 0.462983 }, { "x": 1.007365, "y": 0.376084 }, { "x": 1.0436, "y": 0.285645 }, { "x": 1.071734, "y": 0.192367 }, { "x": 1.091548, "y": 0.096975 }, { "x": 1.102889, "y": 0.000209 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.35} anchorAlignment="center" text="D2" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": 1.27, "y": 0.36 }, { "x": 2.2, "y": 0.36 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2, "y": 0.36 }, { "x": -1.27, "y": 0.36 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.2, "y": -1.02 }, { "x": 2.2, "y": 0.36 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2, "y": -1.02 }, { "x": -2.2, "y": 0.36 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2, "y": -1.02 }, { "x": 2.2, "y": -1.02 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.27, "y": 0.36 }, { "x": -1.235091, "y": 0.451659 }, { "x": -1.193577, "y": 0.540522 }, { "x": -1.14568, "y": 0.626113 }, { "x": -1.091656, "y": 0.707975 }, { "x": -1.031794, "y": 0.785671 }, { "x": -0.966414, "y": 0.858783 }, { "x": -0.895866, "y": 0.926922 }, { "x": -0.820526, "y": 0.989724 }, { "x": -0.740799, "y": 1.046851 }, { "x": -0.65711, "y": 1.097999 }, { "x": -0.569907, "y": 1.142895 }, { "x": -0.479655, "y": 1.181297 }, { "x": -0.386839, "y": 1.213002 }, { "x": -0.291954, "y": 1.237838 }, { "x": -0.195508, "y": 1.255674 }, { "x": -0.098016, "y": 1.266414 }, { "x": 0, "y": 1.27 }, { "x": 0.098016, "y": 1.266414 }, { "x": 0.195508, "y": 1.255674 }, { "x": 0.291954, "y": 1.237838 }, { "x": 0.386839, "y": 1.213002 }, { "x": 0.479655, "y": 1.181297 }, { "x": 0.569907, "y": 1.142895 }, { "x": 0.65711, "y": 1.097999 }, { "x": 0.740799, "y": 1.046851 }, { "x": 0.820526, "y": 0.989724 }, { "x": 0.895866, "y": 0.926922 }, { "x": 0.966414, "y": 0.858783 }, { "x": 1.031794, "y": 0.785671 }, { "x": 1.091656, "y": 0.707975 }, { "x": 1.14568, "y": 0.626113 }, { "x": 1.193577, "y": 0.540522 }, { "x": 1.235091, "y": 0.451659 }, { "x": 1.27, "y": 0.36 }]} layer="top"/>
      </footprint>);
// D7: LED; praline:LED_Dual_Xinglight_XL-3210_Horizontal
export const Footprint_D7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0.4mm" pcbY="-0.55mm" layer="top" cornerRadius="0.0275mm" width="0.44mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.4mm" pcbY="-0.55mm" layer="top" cornerRadius="0.0275mm" width="0.44mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.475mm" pcbY="-0.33mm" layer="top" cornerRadius="0.055mm" width="0.88mm" height="0.95mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.475mm" pcbY="-0.33mm" layer="top" cornerRadius="0.055mm" width="0.88mm" height="0.95mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 1.6, "y": 0 }, { "x": -1.6, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0 }, { "x": -1.6, "y": -0.48 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.13 }, { "x": -1.25, "y": -0.48 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.48 }, { "x": 1.6, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.48 }, { "x": 1.6, "y": -0.48 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.102904, "y": 0 }, { "x": -1.091582, "y": 0.096768 }, { "x": -1.071786, "y": 0.192164 }, { "x": -1.043669, "y": 0.285447 }, { "x": -1.007452, "y": 0.375893 }, { "x": -0.963413, "y": 0.4628 }, { "x": -0.911896, "y": 0.545494 }, { "x": -0.8533, "y": 0.623332 }, { "x": -0.788081, "y": 0.69571 }, { "x": -0.716743, "y": 0.762067 }, { "x": -0.639842, "y": 0.821887 }, { "x": -0.557974, "y": 0.874706 }, { "x": -0.471774, "y": 0.920114 }, { "x": -0.381912, "y": 0.957758 }, { "x": -0.289085, "y": 0.987346 }, { "x": -0.194015, "y": 1.008649 }, { "x": -0.097438, "y": 1.021501 }, { "x": -0.000105, "y": 1.025802 }, { "x": 0.097229, "y": 1.021519 }, { "x": 0.193809, "y": 1.008686 }, { "x": 0.288883, "y": 0.987401 }, { "x": 0.381715, "y": 0.95783 }, { "x": 0.471584, "y": 0.920203 }, { "x": 0.557793, "y": 0.874812 }, { "x": 0.639671, "y": 0.822008 }, { "x": 0.716584, "y": 0.762203 }, { "x": 0.787934, "y": 0.69586 }, { "x": 0.853167, "y": 0.623494 }, { "x": 0.911778, "y": 0.545667 }, { "x": 0.963311, "y": 0.462983 }, { "x": 1.007365, "y": 0.376084 }, { "x": 1.0436, "y": 0.285645 }, { "x": 1.071734, "y": 0.192367 }, { "x": 1.091548, "y": 0.096975 }, { "x": 1.102889, "y": 0.000209 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.35} anchorAlignment="center" text="D7" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": 1.27, "y": 0.36 }, { "x": 2.2, "y": 0.36 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2, "y": 0.36 }, { "x": -1.27, "y": 0.36 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.2, "y": -1.02 }, { "x": 2.2, "y": 0.36 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2, "y": -1.02 }, { "x": -2.2, "y": 0.36 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2, "y": -1.02 }, { "x": 2.2, "y": -1.02 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.27, "y": 0.36 }, { "x": -1.235091, "y": 0.451659 }, { "x": -1.193577, "y": 0.540522 }, { "x": -1.14568, "y": 0.626113 }, { "x": -1.091656, "y": 0.707975 }, { "x": -1.031794, "y": 0.785671 }, { "x": -0.966414, "y": 0.858783 }, { "x": -0.895866, "y": 0.926922 }, { "x": -0.820526, "y": 0.989724 }, { "x": -0.740799, "y": 1.046851 }, { "x": -0.65711, "y": 1.097999 }, { "x": -0.569907, "y": 1.142895 }, { "x": -0.479655, "y": 1.181297 }, { "x": -0.386839, "y": 1.213002 }, { "x": -0.291954, "y": 1.237838 }, { "x": -0.195508, "y": 1.255674 }, { "x": -0.098016, "y": 1.266414 }, { "x": 0, "y": 1.27 }, { "x": 0.098016, "y": 1.266414 }, { "x": 0.195508, "y": 1.255674 }, { "x": 0.291954, "y": 1.237838 }, { "x": 0.386839, "y": 1.213002 }, { "x": 0.479655, "y": 1.181297 }, { "x": 0.569907, "y": 1.142895 }, { "x": 0.65711, "y": 1.097999 }, { "x": 0.740799, "y": 1.046851 }, { "x": 0.820526, "y": 0.989724 }, { "x": 0.895866, "y": 0.926922 }, { "x": 0.966414, "y": 0.858783 }, { "x": 1.031794, "y": 0.785671 }, { "x": 1.091656, "y": 0.707975 }, { "x": 1.14568, "y": 0.626113 }, { "x": 1.193577, "y": 0.540522 }, { "x": 1.235091, "y": 0.451659 }, { "x": 1.27, "y": 0.36 }]} layer="top"/>
      </footprint>);
// C1: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C1" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C3: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C3" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C5: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.9} pcbY={0} anchorAlignment="center" text="C5" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C7: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="C7" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C8: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.4} anchorAlignment="center" text="C8" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C9: 3.3 nF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.4} anchorAlignment="center" text="C9" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C10: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C10" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C11: 3.3 nF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="C11" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C12: 330 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="C12" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C13: 330 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.68} anchorAlignment="center" text="C13" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C14: 8.2 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="C14" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C15: 180 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={1} pcbY={0} anchorAlignment="center" text="C15" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C16: 3.3 nF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="C16" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C17: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.008113} pcbY={-0.483919} anchorAlignment="center" text="C17" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C18: 3.3 nF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C18" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C19: 3.3 nF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C19" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C20: 3.3 nF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.041385} pcbY={-0.462706} anchorAlignment="center" text="C20" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C21: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="C21" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C22: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C22" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C23: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C23" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C24: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="C24" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C25: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C25 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.4} anchorAlignment="center" text="C25" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C26: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C26 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="C26" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C27: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C27 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="C27" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C28: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C28 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.4} anchorAlignment="center" text="C28" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C29: 3.3 nF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C29 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C29" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C30: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C30 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C30" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C31: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C31 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="C31" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C34: 33 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C34 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.9} pcbY={0} anchorAlignment="center" text="C34" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C35: 33 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C35 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.9} pcbY={0} anchorAlignment="center" text="C35" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C36: 33 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C36 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.9} pcbY={0} anchorAlignment="center" text="C36" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C37: 33 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C37 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.9} pcbY={0} anchorAlignment="center" text="C37" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C41: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C41 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="C41" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C42: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C42 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="C42" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C46: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C46 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="C46" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C49: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C49 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="C49" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C50: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C50 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.4} anchorAlignment="center" text="C50" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C53: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C53 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C53" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C55: 3.3 nF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C55 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.55} anchorAlignment="center" text="C55" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C57: 3.3 nF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C57 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="C57" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C58: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C58 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.4} anchorAlignment="center" text="C58" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C59: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C59 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.4} anchorAlignment="center" text="C59" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C60: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C60 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C60" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C62: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C62 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="C62" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C63: 3.3 nF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C63 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="C63" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C64: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C64 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C64" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C65: 3.3 nF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C65 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C65" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C66: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C66 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="C66" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C67: 33 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C67 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="C67" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C70: 100 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C70 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="C70" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C71: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C71 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.55} anchorAlignment="center" text="C71" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C73: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C73 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="C73" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C75: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C75 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="C75" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C77: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C77 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C77" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C79: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C79 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="C79" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C82: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C82 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="C82" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C83: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C83 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="C83" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C84: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C84 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="C84" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C85: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C85 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.8} pcbY={0} anchorAlignment="center" text="C85" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C86: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C86 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={1} pcbY={0} anchorAlignment="center" text="C86" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C87: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C87 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={1} pcbY={0} anchorAlignment="center" text="C87" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C88: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C88 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={1} pcbY={0} anchorAlignment="center" text="C88" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C89: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C89 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="C89" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C90: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C90 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="C90" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C92: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C92 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="C92" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C93: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C93 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C93" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C94: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C94 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C94" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C97: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C97 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.49} anchorAlignment="center" text="C97" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C98: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C98 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="C98" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C99: 22 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C99 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.8} pcbY={0} anchorAlignment="center" text="C99" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C100: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C100 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C100" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C102: 22 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C102 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.85} pcbY={0} anchorAlignment="center" text="C102" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C104: 4.3 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C104 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.85} pcbY={0} anchorAlignment="center" text="C104" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C105: 10 uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C105 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C105" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C106: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C106 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="C106" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C111: 4.3 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C111 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.85} pcbY={0} anchorAlignment="center" text="C111" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C113: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C113 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C113" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C115: 22 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C115 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="C115" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C116: 47 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C116 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="C116" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C118: 18 pF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C118 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C118" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C119: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C119 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C119" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C120: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C120 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C120" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C121: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C121 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C121" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C122: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C122 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C122" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C123: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C123 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="C123" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C125: 33 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C125 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C125" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C126: 10 uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C126 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C126" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C127: 10 uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C127 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C127" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C128: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C128 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C128" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C129: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C129 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C129" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C130: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C130 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C130" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C131: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C131 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C131" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C132: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C132 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C132" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C133: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C133 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C133" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C134: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C134 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C134" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C135: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C135 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C135" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C136: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C136 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C136" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C137: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C137 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C137" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C138: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C138 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C138" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C143: 22 uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C143 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C143" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
      </footprint>);
// C144: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C144 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C144" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C145: 10 uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C145 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C145" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
      </footprint>);
// C146: 10 uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C146 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C146" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
      </footprint>);
// C157: 18 pF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C157 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C157" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C158: 18 pF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C158 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C158" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C160: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C160 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="C160" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C161: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C161 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C161" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C164: 18 pF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C164 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C164" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C171: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C171 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C171" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// D1: TVS; praline:TSSLP-2-1
export const Footprint_D1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.19mm" pcbY="0mm" layer="top" cornerRadius="0.015mm" width="0.32mm" height="0.24mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.19mm" pcbY="0mm" layer="top" cornerRadius="0.015mm" width="0.32mm" height="0.24mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.55} anchorAlignment="center" text="D1" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={-0.2} pcbY={0} width={0.3} height={0.2} strokeWidth={0.1} isFilled={false} hasStroke={true}/>
<courtyardrect pcbX={0} pcbY={0} width={0.9} height={0.6} layer="top" pcbRotation="180deg"/>
      </footprint>);
// D3: TVS; praline:TSLP-2-19
export const Footprint_D3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.325mm" pcbY="0mm" layer="top" cornerRadius="0.021875mm" width="0.6mm" height="0.35mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.325mm" pcbY="0mm" layer="top" cornerRadius="0.021875mm" width="0.6mm" height="0.35mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.7} anchorAlignment="center" text="D3" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={-0.325} pcbY={0} width={0.6} height={0.35} strokeWidth={0.1} isFilled={false} hasStroke={true}/>
<courtyardrect pcbX={0} pcbY={0} width={1.3} height={0.9} layer="top" pcbRotation="180deg"/>
      </footprint>);
// D9: TVS; praline:TSLP-2-19
export const Footprint_D9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.325mm" pcbY="0mm" layer="top" cornerRadius="0.021875mm" width="0.35mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.325mm" pcbY="0mm" layer="top" cornerRadius="0.021875mm" width="0.35mm" height="0.6mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.65} anchorAlignment="center" text="D9" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={-0.325} pcbY={0} width={0.35} height={0.6} strokeWidth={0.1} isFilled={false} hasStroke={true}/>
<courtyardrect pcbX={0} pcbY={0} width={1.3} height={0.9} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP6: TestPoint; TestPoint:TestPoint_Loop_D1.80mm_Drill1.0mm_Beaded
export const Footprint_TP6 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="2mm" holeDiameter="1mm" shape="circle"/>

<fabricationnotepath route={[{ "x": -0.9, "y": 0.2 }, { "x": 0.9, "y": 0.2 }]} strokeWidth={0.12}/>
<fabricationnotepath route={[{ "x": -0.9, "y": -0.2 }, { "x": -0.9, "y": 0.2 }]} strokeWidth={0.12}/>
<fabricationnotepath route={[{ "x": 0.9, "y": 0.2 }, { "x": 0.9, "y": -0.2 }]} strokeWidth={0.12}/>
<fabricationnotepath route={[{ "x": 0.9, "y": -0.2 }, { "x": -0.9, "y": -0.2 }]} strokeWidth={0.12}/>
<fabricationnotepath route={[{ "x": 1.3, "y": 0 }, { "x": 1.201043, "y": 0.497488 }, { "x": 0.919239, "y": 0.919239 }, { "x": 0.497488, "y": 1.201043 }, { "x": 0, "y": 1.3 }, { "x": -0.497488, "y": 1.201043 }, { "x": -0.919239, "y": 0.919239 }, { "x": -1.201043, "y": 0.497488 }, { "x": -1.3, "y": 0 }, { "x": -1.201043, "y": -0.497488 }, { "x": -0.919239, "y": -0.919239 }, { "x": -0.497488, "y": -1.201043 }, { "x": 0, "y": -1.3 }, { "x": 0.497488, "y": -1.201043 }, { "x": 0.919239, "y": -0.919239 }, { "x": 1.201043, "y": -0.497488 }, { "x": 1.3, "y": 0 }]} strokeWidth={0.12}/>
<fabricationnotetext pcbX={0.7} pcbY={-2.5} anchorAlignment="center" text="TP6" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={1.8} layer="top"/>
      </footprint>);
// L1: DNP; Inductor_SMD:L_0201_0603Metric
export const Footprint_L1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="L1" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// L2: 100 uH; praline:L_TDK_MLZ2012_h1.25mm
export const Footprint_L2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.9mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L2" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.55, "y": -0.85 }, { "x": 1.55, "y": 0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.55, "y": 0.85 }, { "x": -1.55, "y": 0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.55, "y": -0.85 }, { "x": 1.55, "y": -0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.55, "y": 0.85 }, { "x": -1.55, "y": -0.85 }]} layer="top"/>
      </footprint>);
// L3: 56 nH; Inductor_SMD:L_0201_0603Metric
export const Footprint_L3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.36} anchorAlignment="center" text="L3" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// L7: DNP; Inductor_SMD:L_0201_0603Metric
export const Footprint_L7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="L7" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// L9: 10 nH; Inductor_SMD:L_0201_0603Metric
export const Footprint_L9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="L9" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// L10: 4.7 uH; Inductor_SMD:L_Taiyo-Yuden_NR-40xx
export const Footprint_L10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.4mm" pcbY="0mm" layer="top" width="1.2mm" height="3.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.4mm" pcbY="0mm" layer="top" width="1.2mm" height="3.7mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 2, "y": -1.25 }, { "x": 1.25, "y": -2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2, "y": 1.25 }, { "x": 2, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2, "y": 1.25 }, { "x": 1.25, "y": 2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.25, "y": -2 }, { "x": 1.25, "y": -2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.25, "y": 2 }, { "x": 1.25, "y": 2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2, "y": -1.25 }, { "x": -1.25, "y": -2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2, "y": -1.25 }, { "x": -2, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2, "y": 1.25 }, { "x": -1.25, "y": 2 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L10" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": 2.25, "y": -2.25 }, { "x": 2.25, "y": 2.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.25, "y": 2.25 }, { "x": -2.25, "y": 2.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.25, "y": -2.25 }, { "x": 2.25, "y": -2.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.25, "y": 2.25 }, { "x": -2.25, "y": -2.25 }]} layer="top"/>
      </footprint>);
// L11: 4.7 uH; Inductor_SMD:L_Taiyo-Yuden_NR-40xx
export const Footprint_L11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.4mm" pcbY="0mm" layer="top" width="1.2mm" height="3.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.4mm" pcbY="0mm" layer="top" width="1.2mm" height="3.7mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 2, "y": -1.25 }, { "x": 1.25, "y": -2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2, "y": 1.25 }, { "x": 2, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2, "y": 1.25 }, { "x": 1.25, "y": 2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.25, "y": -2 }, { "x": 1.25, "y": -2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.25, "y": 2 }, { "x": 1.25, "y": 2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2, "y": -1.25 }, { "x": -1.25, "y": -2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2, "y": -1.25 }, { "x": -2, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2, "y": 1.25 }, { "x": -1.25, "y": 2 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L11" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": 2.25, "y": -2.25 }, { "x": 2.25, "y": 2.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.25, "y": 2.25 }, { "x": -2.25, "y": 2.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.25, "y": -2.25 }, { "x": 2.25, "y": -2.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.25, "y": 2.25 }, { "x": -2.25, "y": -2.25 }]} layer="top"/>
      </footprint>);
// L13: 2.2 uH; Inductor_SMD:L_0603_1608Metric
export const Footprint_L13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L13" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// P2: SMA; praline:SMA_MyAntenna_A-SMA-KE-16.5A_EdgeMount
export const Footprint_P2 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin2"]} pcbX="0.7mm" pcbY="4.2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="0.7mm" pcbY="3.1mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="0.7mm" pcbY="2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="0.7mm" pcbY="-2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="0.7mm" pcbY="-3.1mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="0.7mm" pcbY="-4.2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="1.7mm" pcbY="4.2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="1.7mm" pcbY="3.1mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="1.7mm" pcbY="2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="1.7mm" pcbY="-2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="1.7mm" pcbY="-3.1mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="1.7mm" pcbY="-4.2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="2.7mm" pcbY="4.2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="2.7mm" pcbY="3.1mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="2.7mm" pcbY="2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="2.7mm" pcbY="-2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="2.7mm" pcbY="-3.1mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="2.7mm" pcbY="-4.2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="3.7mm" pcbY="4.2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="3.7mm" pcbY="3.1mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="3.7mm" pcbY="2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="3.7mm" pcbY="-2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="3.7mm" pcbY="-3.1mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="3.7mm" pcbY="-4.2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="2.15mm" pcbY="0mm" layer="top" width="3.9mm" height="1.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.15mm" pcbY="3.1mm" layer="top" width="3.9mm" height="2.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.15mm" pcbY="3.1mm" layer="bottom" width="3.9mm" height="2.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.15mm" pcbY="0mm" layer="bottom" width="3.9mm" height="9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.15mm" pcbY="-3.1mm" layer="top" width="3.9mm" height="2.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.15mm" pcbY="-3.1mm" layer="bottom" width="3.9mm" height="2.8mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 4, "y": -3 }, { "x": 4, "y": -2.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 4, "y": -2.1 }, { "x": 0, "y": -2.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 4, "y": -0.5 }, { "x": 4, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 4, "y": 0.5 }, { "x": 0, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 4, "y": 2.1 }, { "x": 4, "y": 3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 4, "y": 3 }, { "x": 0, "y": 3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": -3 }, { "x": 4, "y": -3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": -0.5 }, { "x": 4, "y": -0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": 2.1 }, { "x": 4, "y": 2.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.25, "y": 3.2 }, { "x": -2.75, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -4.25, "y": 3.2 }, { "x": -3.75, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -5.25, "y": 3.2 }, { "x": -4.75, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -6.25, "y": 3.2 }, { "x": -5.75, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -7.25, "y": 3.2 }, { "x": -6.75, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -8.25, "y": 3.2 }, { "x": -7.75, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -9.25, "y": 3.2 }, { "x": -8.75, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -10.25, "y": 3.2 }, { "x": -9.75, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -11.25, "y": 3.2 }, { "x": -10.75, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -12.5, "y": -3.2 }, { "x": -1.5, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -12.5, "y": -3.2 }, { "x": -12.5, "y": 3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -12.5, "y": 3.2 }, { "x": -1.5, "y": 3.2 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.85} pcbY={0} anchorAlignment="center" text="P2" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={-0.75} pcbY={0} width={1.5} height={6.5} strokeWidth={0.1} isFilled={false} hasStroke={true}/>
<courtyardoutline outline={[{ "x": 4.6, "y": -5 }, { "x": 4.6, "y": 5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -13, "y": -5 }, { "x": 4.6, "y": -5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -13, "y": 5 }, { "x": 4.6, "y": 5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -13, "y": 5 }, { "x": -13, "y": -5 }]} layer="top"/>
      </footprint>);
// P3: SMA; praline:SMA_MyAntenna_A-SMA-KE-16.5A_EdgeMount
export const Footprint_P3 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin2"]} pcbX="0.7mm" pcbY="4.2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="0.7mm" pcbY="3.1mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="0.7mm" pcbY="2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="0.7mm" pcbY="-2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="0.7mm" pcbY="-3.1mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="0.7mm" pcbY="-4.2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="1.7mm" pcbY="4.2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="1.7mm" pcbY="3.1mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="1.7mm" pcbY="2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="1.7mm" pcbY="-2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="1.7mm" pcbY="-3.1mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="1.7mm" pcbY="-4.2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="2.7mm" pcbY="4.2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="2.7mm" pcbY="3.1mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="2.7mm" pcbY="2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="2.7mm" pcbY="-2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="2.7mm" pcbY="-3.1mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="2.7mm" pcbY="-4.2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="3.7mm" pcbY="4.2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="3.7mm" pcbY="3.1mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="3.7mm" pcbY="2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="3.7mm" pcbY="-2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="3.7mm" pcbY="-3.1mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="3.7mm" pcbY="-4.2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="2.15mm" pcbY="0mm" layer="top" width="3.9mm" height="1.3mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="2.15mm" pcbY="3.1mm" layer="top" width="3.9mm" height="2.8mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="2.15mm" pcbY="3.1mm" layer="bottom" width="3.9mm" height="2.8mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="2.15mm" pcbY="0mm" layer="bottom" width="3.9mm" height="9mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="2.15mm" pcbY="-3.1mm" layer="top" width="3.9mm" height="2.8mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="2.15mm" pcbY="-3.1mm" layer="bottom" width="3.9mm" height="2.8mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -12.5, "y": 3.2 }, { "x": -1.5, "y": 3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -12.5, "y": -3.2 }, { "x": -12.5, "y": 3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -12.5, "y": -3.2 }, { "x": -1.5, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -11.25, "y": 3.2 }, { "x": -10.75, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -10.25, "y": 3.2 }, { "x": -9.75, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -9.25, "y": 3.2 }, { "x": -8.75, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -8.25, "y": 3.2 }, { "x": -7.75, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -7.25, "y": 3.2 }, { "x": -6.75, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -6.25, "y": 3.2 }, { "x": -5.75, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -5.25, "y": 3.2 }, { "x": -4.75, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -4.25, "y": 3.2 }, { "x": -3.75, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.25, "y": 3.2 }, { "x": -2.75, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": 2.1 }, { "x": 4, "y": 2.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": -0.5 }, { "x": 4, "y": -0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": -3 }, { "x": 4, "y": -3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 4, "y": 3 }, { "x": 0, "y": 3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 4, "y": 2.1 }, { "x": 4, "y": 3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 4, "y": 0.5 }, { "x": 0, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 4, "y": -0.5 }, { "x": 4, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 4, "y": -2.1 }, { "x": 0, "y": -2.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 4, "y": -3 }, { "x": 4, "y": -2.1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.75} pcbY={0} anchorAlignment="center" text="P3" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={-0.75} pcbY={0} width={1.5} height={6.5} strokeWidth={0.1} isFilled={false} hasStroke={true}/>
<courtyardoutline outline={[{ "x": -13, "y": 5 }, { "x": -13, "y": -5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -13, "y": 5 }, { "x": 4.6, "y": 5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -13, "y": -5 }, { "x": 4.6, "y": -5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.6, "y": -5 }, { "x": 4.6, "y": 5 }]} layer="top"/>
      </footprint>);
// P1: SMA; praline:SMA_MyAntenna_A-SMA-KE-16.5A_EdgeMount
export const Footprint_P1 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin2"]} pcbX="0.7mm" pcbY="4.2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="0.7mm" pcbY="3.1mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="0.7mm" pcbY="2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="0.7mm" pcbY="-2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="0.7mm" pcbY="-3.1mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="0.7mm" pcbY="-4.2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="1.7mm" pcbY="4.2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="1.7mm" pcbY="3.1mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="1.7mm" pcbY="2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="1.7mm" pcbY="-2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="1.7mm" pcbY="-3.1mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="1.7mm" pcbY="-4.2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="2.7mm" pcbY="4.2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="2.7mm" pcbY="3.1mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="2.7mm" pcbY="2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="2.7mm" pcbY="-2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="2.7mm" pcbY="-3.1mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="2.7mm" pcbY="-4.2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="3.7mm" pcbY="4.2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="3.7mm" pcbY="3.1mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="3.7mm" pcbY="2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="3.7mm" pcbY="-2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="3.7mm" pcbY="-3.1mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="3.7mm" pcbY="-4.2mm" outerDiameter="0.45mm" holeDiameter="0.3mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="2.15mm" pcbY="0mm" layer="top" width="3.9mm" height="1.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.15mm" pcbY="3.1mm" layer="top" width="3.9mm" height="2.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.15mm" pcbY="3.1mm" layer="bottom" width="3.9mm" height="2.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.15mm" pcbY="0mm" layer="bottom" width="3.9mm" height="9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.15mm" pcbY="-3.1mm" layer="top" width="3.9mm" height="2.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.15mm" pcbY="-3.1mm" layer="bottom" width="3.9mm" height="2.8mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 4, "y": -3 }, { "x": 4, "y": -2.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 4, "y": -2.1 }, { "x": 0, "y": -2.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 4, "y": -0.5 }, { "x": 4, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 4, "y": 0.5 }, { "x": 0, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 4, "y": 2.1 }, { "x": 4, "y": 3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 4, "y": 3 }, { "x": 0, "y": 3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": -3 }, { "x": 4, "y": -3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": -0.5 }, { "x": 4, "y": -0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": 2.1 }, { "x": 4, "y": 2.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.25, "y": 3.2 }, { "x": -2.75, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -4.25, "y": 3.2 }, { "x": -3.75, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -5.25, "y": 3.2 }, { "x": -4.75, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -6.25, "y": 3.2 }, { "x": -5.75, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -7.25, "y": 3.2 }, { "x": -6.75, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -8.25, "y": 3.2 }, { "x": -7.75, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -9.25, "y": 3.2 }, { "x": -8.75, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -10.25, "y": 3.2 }, { "x": -9.75, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -11.25, "y": 3.2 }, { "x": -10.75, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -12.5, "y": -3.2 }, { "x": -1.5, "y": -3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -12.5, "y": -3.2 }, { "x": -12.5, "y": 3.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -12.5, "y": 3.2 }, { "x": -1.5, "y": 3.2 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.85} pcbY={0} anchorAlignment="center" text="P1" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={-0.75} pcbY={0} width={1.5} height={6.5} strokeWidth={0.1} isFilled={false} hasStroke={true}/>
<courtyardoutline outline={[{ "x": 4.6, "y": -5 }, { "x": 4.6, "y": 5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -13, "y": -5 }, { "x": 4.6, "y": -5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -13, "y": 5 }, { "x": 4.6, "y": 5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -13, "y": 5 }, { "x": -13, "y": -5 }]} layer="top"/>
      </footprint>);
// P20: HEADER_2x11; praline:PinSocket_2x11_P2.54mm_Vertical_Flipped
export const Footprint_P20 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="2.54mm" pcbY="0mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-2.54mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="2.54mm" pcbY="-2.54mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin5"]} pcbX="0mm" pcbY="-5.08mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin6"]} pcbX="2.54mm" pcbY="-5.08mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin7"]} pcbX="0mm" pcbY="-7.62mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin8"]} pcbX="2.54mm" pcbY="-7.62mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin9"]} pcbX="0mm" pcbY="-10.16mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin10"]} pcbX="2.54mm" pcbY="-10.16mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin11"]} pcbX="0mm" pcbY="-12.7mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin12"]} pcbX="2.54mm" pcbY="-12.7mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin13"]} pcbX="0mm" pcbY="-15.24mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin14"]} pcbX="2.54mm" pcbY="-15.24mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin15"]} pcbX="0mm" pcbY="-17.78mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin16"]} pcbX="2.54mm" pcbY="-17.78mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin17"]} pcbX="0mm" pcbY="-20.32mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin18"]} pcbX="2.54mm" pcbY="-20.32mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin19"]} pcbX="0mm" pcbY="-22.86mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin20"]} pcbX="2.54mm" pcbY="-22.86mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin21"]} pcbX="0mm" pcbY="-25.4mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin22"]} pcbX="2.54mm" pcbY="-25.4mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>








<fabricationnotepath route={[{ "x": 3.81, "y": -26.67 }, { "x": 3.81, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.81, "y": 1.27 }, { "x": -0.27, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.27, "y": 1.27 }, { "x": -1.27, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -26.67 }, { "x": 3.81, "y": -26.67 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": 0.27 }, { "x": -1.27, "y": -26.67 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={1.27} pcbY={-12.7} anchorAlignment="center" text="P20" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": 4.34, "y": -27.15 }, { "x": 4.34, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.34, "y": 1.8 }, { "x": -1.76, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.76, "y": -27.15 }, { "x": 4.34, "y": -27.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.76, "y": 1.8 }, { "x": -1.76, "y": -27.15 }]} layer="top"/>
      </footprint>);
// P22: HEADER_2x13; praline:PinSocket_2x13_P2.54mm_Vertical_Flipped
export const Footprint_P22 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="2.54mm" pcbY="0mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-2.54mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="2.54mm" pcbY="-2.54mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin5"]} pcbX="0mm" pcbY="-5.08mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin6"]} pcbX="2.54mm" pcbY="-5.08mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin7"]} pcbX="0mm" pcbY="-7.62mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin8"]} pcbX="2.54mm" pcbY="-7.62mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin9"]} pcbX="0mm" pcbY="-10.16mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin10"]} pcbX="2.54mm" pcbY="-10.16mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin11"]} pcbX="0mm" pcbY="-12.7mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin12"]} pcbX="2.54mm" pcbY="-12.7mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin13"]} pcbX="0mm" pcbY="-15.24mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin14"]} pcbX="2.54mm" pcbY="-15.24mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin15"]} pcbX="0mm" pcbY="-17.78mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin16"]} pcbX="2.54mm" pcbY="-17.78mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin17"]} pcbX="0mm" pcbY="-20.32mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin18"]} pcbX="2.54mm" pcbY="-20.32mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin19"]} pcbX="0mm" pcbY="-22.86mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin20"]} pcbX="2.54mm" pcbY="-22.86mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin21"]} pcbX="0mm" pcbY="-25.4mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin22"]} pcbX="2.54mm" pcbY="-25.4mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin23"]} pcbX="0mm" pcbY="-27.94mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin24"]} pcbX="2.54mm" pcbY="-27.94mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin25"]} pcbX="0mm" pcbY="-30.48mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin26"]} pcbX="2.54mm" pcbY="-30.48mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>








<fabricationnotepath route={[{ "x": -1.27, "y": -31.75 }, { "x": 3.81, "y": -31.75 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.81, "y": -31.75 }, { "x": 3.81, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": 0.27 }, { "x": -1.27, "y": -31.75 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.27, "y": 1.27 }, { "x": -1.27, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.81, "y": 1.27 }, { "x": -0.27, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={1.27} pcbY={-15.24} anchorAlignment="center" text="P22" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -1.76, "y": -32.25 }, { "x": 4.34, "y": -32.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.34, "y": -32.25 }, { "x": 4.34, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.76, "y": 1.8 }, { "x": -1.76, "y": -32.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.34, "y": 1.8 }, { "x": -1.76, "y": 1.8 }]} layer="top"/>
      </footprint>);
// P26: LPC_JTAG; Connector_PinHeader_1.27mm:PinHeader_2x05_P1.27mm_Vertical
export const Footprint_P26 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="0.65mm" rectPadWidth="1mm" rectPadHeight="1mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="1.27mm" pcbY="0mm" outerDiameter="1mm" holeDiameter="0.65mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-1.27mm" outerDiameter="1mm" holeDiameter="0.65mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="1.27mm" pcbY="-1.27mm" outerDiameter="1mm" holeDiameter="0.65mm" shape="circle"/>
<platedhole portHints={["pin5"]} pcbX="0mm" pcbY="-2.54mm" outerDiameter="1mm" holeDiameter="0.65mm" shape="circle"/>
<platedhole portHints={["pin6"]} pcbX="1.27mm" pcbY="-2.54mm" outerDiameter="1mm" holeDiameter="0.65mm" shape="circle"/>
<platedhole portHints={["pin7"]} pcbX="0mm" pcbY="-3.81mm" outerDiameter="1mm" holeDiameter="0.65mm" shape="circle"/>
<platedhole portHints={["pin8"]} pcbX="1.27mm" pcbY="-3.81mm" outerDiameter="1mm" holeDiameter="0.65mm" shape="circle"/>
<platedhole portHints={["pin9"]} pcbX="0mm" pcbY="-5.08mm" outerDiameter="1mm" holeDiameter="0.65mm" shape="circle"/>
<platedhole portHints={["pin10"]} pcbX="1.27mm" pcbY="-5.08mm" outerDiameter="1mm" holeDiameter="0.65mm" shape="circle"/>









<fabricationnotepath route={[{ "x": -1.07, "y": -5.715 }, { "x": -1.07, "y": -0.2175 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.34, "y": -5.715 }, { "x": -1.07, "y": -5.715 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.07, "y": -0.2175 }, { "x": -0.2175, "y": 0.635 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.2175, "y": 0.635 }, { "x": 2.34, "y": 0.635 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.34, "y": 0.635 }, { "x": 2.34, "y": -5.715 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.635} pcbY={-2.54} anchorAlignment="center" text="P26" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -1.57, "y": -6.22 }, { "x": 2.84, "y": -6.22 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.84, "y": -6.22 }, { "x": 2.84, "y": 1.14 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.57, "y": 1.14 }, { "x": -1.57, "y": -6.22 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.84, "y": 1.14 }, { "x": -1.57, "y": 1.14 }]} layer="top"/>
      </footprint>);
// P28: HEADER_2x11; praline:PinSocket_2x11_P2.54mm_Vertical_Flipped
export const Footprint_P28 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="2.54mm" pcbY="0mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-2.54mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="2.54mm" pcbY="-2.54mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin5"]} pcbX="0mm" pcbY="-5.08mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin6"]} pcbX="2.54mm" pcbY="-5.08mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin7"]} pcbX="0mm" pcbY="-7.62mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin8"]} pcbX="2.54mm" pcbY="-7.62mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin9"]} pcbX="0mm" pcbY="-10.16mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin10"]} pcbX="2.54mm" pcbY="-10.16mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin11"]} pcbX="0mm" pcbY="-12.7mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin12"]} pcbX="2.54mm" pcbY="-12.7mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin13"]} pcbX="0mm" pcbY="-15.24mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin14"]} pcbX="2.54mm" pcbY="-15.24mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin15"]} pcbX="0mm" pcbY="-17.78mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin16"]} pcbX="2.54mm" pcbY="-17.78mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin17"]} pcbX="0mm" pcbY="-20.32mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin18"]} pcbX="2.54mm" pcbY="-20.32mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin19"]} pcbX="0mm" pcbY="-22.86mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin20"]} pcbX="2.54mm" pcbY="-22.86mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin21"]} pcbX="0mm" pcbY="-25.4mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin22"]} pcbX="2.54mm" pcbY="-25.4mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>








<fabricationnotepath route={[{ "x": 3.81, "y": -26.67 }, { "x": 3.81, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.81, "y": 1.27 }, { "x": -0.27, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.27, "y": 1.27 }, { "x": -1.27, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -26.67 }, { "x": 3.81, "y": -26.67 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": 0.27 }, { "x": -1.27, "y": -26.67 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={1.27} pcbY={-12.7} anchorAlignment="center" text="P28" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": 4.34, "y": -27.15 }, { "x": 4.34, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.34, "y": 1.8 }, { "x": -1.76, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.76, "y": -27.15 }, { "x": 4.34, "y": -27.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.76, "y": 1.8 }, { "x": -1.76, "y": -27.15 }]} layer="top"/>
      </footprint>);
// Q3: PMOS; Package_TO_SOT_SMD:SOT-23-3
export const Footprint_Q3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": -0.8, "y": 1.05 }, { "x": -0.8, "y": -1.45 }, { "x": 0.8, "y": -1.45 }, { "x": 0.8, "y": 1.45 }, { "x": -0.4, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="Q3" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": -1.05, "y": -1.7 }, { "x": -1.05, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": -1.7 }, { "x": -1.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": -1.5 }, { "x": -2.05, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": -1.5 }, { "x": -2.05, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": -0.55 }, { "x": 1.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": -0.55 }, { "x": 1.05, "y": -0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": 0.55 }, { "x": 2.05, "y": 0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": 0.55 }, { "x": 2.05, "y": -0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": 1.5 }, { "x": -1.05, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": 1.5 }, { "x": -1.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": 1.7 }, { "x": 1.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": 1.7 }, { "x": 1.05, "y": 0.55 }]} layer="top"/>
      </footprint>);
// Q5: PMOS; Package_TO_SOT_SMD:SOT-23-3
export const Footprint_Q5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" shape="rect"/>





<fabricationnotepath route={[{ "x": -0.8, "y": 1.05 }, { "x": -0.8, "y": -1.45 }, { "x": 0.8, "y": -1.45 }, { "x": 0.8, "y": 1.45 }, { "x": -0.4, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="Q5" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": -2.05, "y": 1.5 }, { "x": -1.05, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": -1.5 }, { "x": -2.05, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": 1.7 }, { "x": 1.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": 1.5 }, { "x": -1.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": -1.5 }, { "x": -2.05, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": -1.7 }, { "x": -1.05, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": 1.7 }, { "x": 1.05, "y": 0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": 0.55 }, { "x": 2.05, "y": 0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": -0.55 }, { "x": 1.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": -1.7 }, { "x": -1.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": 0.55 }, { "x": 2.05, "y": -0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": -0.55 }, { "x": 1.05, "y": -0.55 }]} layer="top"/>
      </footprint>);
// R1: 470; Resistor_SMD:R_0201_0603Metric
export const Footprint_R1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={1.2} anchorAlignment="center" text="R1" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R2: 470; Resistor_SMD:R_0201_0603Metric
export const Footprint_R2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.9} anchorAlignment="center" text="R2" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R3: 22.6k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={1} pcbY={0} anchorAlignment="center" text="R3" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R4: 51k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.9} pcbY={0} anchorAlignment="center" text="R4" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R5: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.509999mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.509999mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R5" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R7: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R7" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R8: 0; Resistor_SMD:R_0201_0603Metric
export const Footprint_R8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R8" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R9: 0; Resistor_SMD:R_0201_0603Metric
export const Footprint_R9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R9" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R10: 0; Resistor_SMD:R_0201_0603Metric
export const Footprint_R10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R10" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R11: 22.6k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R11" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R13: 0; Resistor_SMD:R_0201_0603Metric
export const Footprint_R13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R13" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R14: DNP; Resistor_SMD:R_0201_0603Metric
export const Footprint_R14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R14" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R15: DNP; Resistor_SMD:R_0201_0603Metric
export const Footprint_R15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R15" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R16: DNP; Resistor_SMD:R_0201_0603Metric
export const Footprint_R16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R16" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R17: DNP; Resistor_SMD:R_0201_0603Metric
export const Footprint_R17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R17" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R18: 22.6k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.55} anchorAlignment="center" text="R18" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R19: 33; Resistor_SMD:R_0201_0603Metric
export const Footprint_R19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.4} anchorAlignment="center" text="R19" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R25: 750; Resistor_SMD:R_0201_0603Metric
export const Footprint_R25 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.95} pcbY={0} anchorAlignment="center" text="R25" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R26: 1.2k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R26 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.95} pcbY={0} anchorAlignment="center" text="R26" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R27: 1.8k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R27 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R27" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R28: 1.8k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R28 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R28" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R30: 33; Resistor_SMD:R_0201_0603Metric
export const Footprint_R30 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="R30" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R31: 33; Resistor_SMD:R_0201_0603Metric
export const Footprint_R31 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="R31" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R33: 10; Resistor_SMD:R_0201_0603Metric
export const Footprint_R33 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R33" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R34: 33; Resistor_SMD:R_0201_0603Metric
export const Footprint_R34 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R34" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R36: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R36 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R36" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R37: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R37 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R37" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R46: 180k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R46 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R46" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R47: 180k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R47 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R47" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R48: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R48 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R48" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R49: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R49 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R49" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R51: 4.7k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R51 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="R51" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R52: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R52 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R52" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R54: 4.7k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R54 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R54" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R55: 180k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R55 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R55" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R56: 820k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R56 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R56" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R59: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R59 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R59" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R62: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R62 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R62" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R63: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R63 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R63" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R64: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R64 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R64" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R65: 18k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R65 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R65" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R66: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R66 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R66" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R67: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R67 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R67" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R68: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R68 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R68" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R69: 12k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R69 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="R69" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R72: 470; Resistor_SMD:R_0201_0603Metric
export const Footprint_R72 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R72" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R73: 3k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R73 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R73" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R74: 4.7k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R74 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.55} anchorAlignment="center" text="R74" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R75: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R75 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R75" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R76: 4.7k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R76 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.55} anchorAlignment="center" text="R76" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R85: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R85 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R85" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R93: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R93 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R93" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R104: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R104 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R104" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R105: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R105 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R105" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// SW1: SWITCH; praline:SW_Tactile_SPST_Angled_PTS645Vx58-2LFS
export const Footprint_SW1 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="1.75mm" holeDiameter="0.99mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="4.5mm" pcbY="0mm" outerDiameter="1.75mm" holeDiameter="0.99mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="-1.25mm" pcbY="-2.49mm" outerDiameter="2.1mm" holeDiameter="1.3mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="5.76mm" pcbY="-2.49mm" outerDiameter="2.1mm" holeDiameter="1.3mm" shape="circle"/>













<fabricationnotepath route={[{ "x": 4, "y": 5.85 }, { "x": 4, "y": 2.59 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 5.85 }, { "x": 4, "y": 5.85 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 5.85 }, { "x": 0.5, "y": 2.59 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.5, "y": 2.59 }, { "x": 6, "y": 2.59 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.2, "y": -0.86 }, { "x": 5.7, "y": -0.86 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 6, "y": -4.2 }, { "x": 6, "y": 2.59 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 5.7, "y": -4.2 }, { "x": 5.7, "y": -0.86 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 5.7, "y": -4.2 }, { "x": 6, "y": -4.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.2, "y": -4.2 }, { "x": -1.2, "y": -0.86 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.5, "y": -4.2 }, { "x": -1.5, "y": 2.59 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.5, "y": -4.2 }, { "x": -1.2, "y": -4.2 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={2.25} pcbY={-1.68} anchorAlignment="center" text="SW1" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": 7.05, "y": 2.8 }, { "x": 7.05, "y": -4.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.5, "y": 2.8 }, { "x": 7.05, "y": 2.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 7.05, "y": -4.45 }, { "x": -2.5, "y": -4.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.5, "y": -4.45 }, { "x": -2.5, "y": 2.8 }]} layer="top"/>
      </footprint>);
// SW2: SWITCH; praline:SW_Tactile_SPST_Angled_PTS645Vx58-2LFS
export const Footprint_SW2 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="1.75mm" holeDiameter="0.99mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="4.5mm" pcbY="0mm" outerDiameter="1.75mm" holeDiameter="0.99mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="-1.25mm" pcbY="-2.49mm" outerDiameter="2.1mm" holeDiameter="1.3mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="5.76mm" pcbY="-2.49mm" outerDiameter="2.1mm" holeDiameter="1.3mm" shape="circle"/>













<fabricationnotepath route={[{ "x": 4, "y": 5.85 }, { "x": 4, "y": 2.59 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 5.85 }, { "x": 4, "y": 5.85 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 5.85 }, { "x": 0.5, "y": 2.59 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.5, "y": 2.59 }, { "x": 6, "y": 2.59 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.2, "y": -0.86 }, { "x": 5.7, "y": -0.86 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 6, "y": -4.2 }, { "x": 6, "y": 2.59 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 5.7, "y": -4.2 }, { "x": 5.7, "y": -0.86 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 5.7, "y": -4.2 }, { "x": 6, "y": -4.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.2, "y": -4.2 }, { "x": -1.2, "y": -0.86 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.5, "y": -4.2 }, { "x": -1.5, "y": 2.59 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.5, "y": -4.2 }, { "x": -1.2, "y": -4.2 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={2.25} pcbY={-1.68} anchorAlignment="center" text="SW2" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": 7.05, "y": 2.8 }, { "x": 7.05, "y": -4.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.5, "y": 2.8 }, { "x": 7.05, "y": 2.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 7.05, "y": -4.45 }, { "x": -2.5, "y": -4.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.5, "y": -4.45 }, { "x": -2.5, "y": 2.8 }]} layer="top"/>
      </footprint>);
// T1: RF_BALUN; RF_Converter:Anaren_0805_2012Metric-6
export const Footprint_T1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.495mm" pcbY="0.65mm" layer="top" width="0.33mm" height="0.41mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.495mm" pcbY="0mm" layer="top" width="0.33mm" height="0.41mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.495mm" pcbY="-0.65mm" layer="top" width="0.33mm" height="0.41mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.495mm" pcbY="-0.65mm" layer="top" width="0.33mm" height="0.41mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.495mm" pcbY="0mm" layer="top" width="0.33mm" height="0.41mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.495mm" pcbY="0.65mm" layer="top" width="0.33mm" height="0.41mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.645, "y": -1.02 }, { "x": 0.645, "y": 1.02 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.645, "y": 1.02 }, { "x": -0.3225, "y": 1.02 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.645, "y": -1.02 }, { "x": 0.645, "y": -1.02 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.645, "y": 0.6975 }, { "x": -0.3225, "y": 1.02 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.645, "y": 0.6975 }, { "x": -0.645, "y": -1.02 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="T1" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 0.91, "y": -1.27 }, { "x": -0.91, "y": -1.27 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 1.27 }, { "x": 0.91, "y": -1.27 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -1.27 }, { "x": -0.91, "y": 1.27 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 1.27 }, { "x": 0.91, "y": 1.27 }]} layer="top"/>
      </footprint>);
// T2: RF_BALUN; RF_Converter:Anaren_0805_2012Metric-6
export const Footprint_T2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.495mm" pcbY="0.65mm" layer="top" width="0.41mm" height="0.33mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.495mm" pcbY="0mm" layer="top" width="0.41mm" height="0.33mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.495mm" pcbY="-0.65mm" layer="top" width="0.41mm" height="0.33mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.495mm" pcbY="-0.65mm" layer="top" width="0.41mm" height="0.33mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.495mm" pcbY="0mm" layer="top" width="0.41mm" height="0.33mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.495mm" pcbY="0.65mm" layer="top" width="0.41mm" height="0.33mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.645, "y": -1.02 }, { "x": 0.645, "y": -1.02 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.645, "y": -1.02 }, { "x": 0.645, "y": 1.02 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.645, "y": 0.6975 }, { "x": -0.645, "y": -1.02 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.645, "y": 0.6975 }, { "x": -0.3225, "y": 1.02 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.645, "y": 1.02 }, { "x": -0.3225, "y": 1.02 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="T2" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -0.91, "y": -1.27 }, { "x": -0.91, "y": 1.27 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -1.27 }, { "x": -0.91, "y": -1.27 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 1.27 }, { "x": 0.91, "y": 1.27 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 1.27 }, { "x": 0.91, "y": -1.27 }]} layer="top"/>
      </footprint>);
// T3: IF_BALUN; praline:Balun_TDK_TFSZ06052460-3310A2X
export const Footprint_T3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.19mm" pcbY="0.2mm" layer="top" cornerRadius="0.0045mm" width="0.18mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.19mm" pcbY="-0.2mm" layer="top" cornerRadius="0.0045mm" width="0.18mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.19mm" pcbY="-0.2mm" layer="top" cornerRadius="0.0045mm" width="0.18mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="0.19mm" pcbY="0.2mm" layer="top" cornerRadius="0.0045mm" width="0.18mm" height="0.2mm" shape="rect"/>

<fabricationnotepath route={[{ "x": -0.25, "y": 0.075 }, { "x": 0, "y": 0.325 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.25, "y": -0.325 }, { "x": -0.25, "y": 0.075 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": 0.325 }, { "x": 0.25, "y": 0.325 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.25, "y": 0.325 }, { "x": 0.25, "y": -0.325 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.25, "y": -0.325 }, { "x": -0.25, "y": -0.325 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.05} pcbY={-0.95} anchorAlignment="center" text="T3" font="tscircuit2024" fontSize={0.5}/>
<courtyardrect pcbX={0} pcbY={0} width={0.8} height={0.96} layer="top" pcbRotation="0deg"/>
      </footprint>);
// T4: IF_BALUN; praline:Balun_TDK_TFSZ06052460-3310A2X
export const Footprint_T4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.19mm" pcbY="0.2mm" layer="top" cornerRadius="0.0045mm" width="0.18mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.19mm" pcbY="-0.2mm" layer="top" cornerRadius="0.0045mm" width="0.18mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.19mm" pcbY="-0.2mm" layer="top" cornerRadius="0.0045mm" width="0.18mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="0.19mm" pcbY="0.2mm" layer="top" cornerRadius="0.0045mm" width="0.18mm" height="0.2mm" shape="rect"/>

<fabricationnotepath route={[{ "x": -0.25, "y": 0.075 }, { "x": 0, "y": 0.325 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.25, "y": -0.325 }, { "x": -0.25, "y": 0.075 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": 0.325 }, { "x": 0.25, "y": 0.325 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.25, "y": 0.325 }, { "x": 0.25, "y": -0.325 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.25, "y": -0.325 }, { "x": -0.25, "y": -0.325 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.05} pcbY={-0.95} anchorAlignment="center" text="T4" font="tscircuit2024" fontSize={0.5}/>
<courtyardrect pcbX={0} pcbY={0} width={0.8} height={0.96} layer="top" pcbRotation="0deg"/>
      </footprint>);
// U1: MXD8546F; praline:QFN-12-1EP_2x2mm_P0.5mm_EP1x1mm
export const Footprint_U1 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin13"]} pcbX="-0.25mm" pcbY="0.25mm" outerDiameter="0.4mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin13"]} pcbX="-0.25mm" pcbY="-0.25mm" outerDiameter="0.4mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin13"]} pcbX="0.25mm" pcbY="0.25mm" outerDiameter="0.4mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin13"]} pcbX="0.25mm" pcbY="-0.25mm" outerDiameter="0.4mm" holeDiameter="0.3mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0.5mm" layer="top" width="0.6mm" height="0.25mm" radius="0.125mm" ccwRotation={-180} shape="rotated_pill"/>
<smtpad portHints={["pin2"]} pcbX="-1mm" pcbY="0mm" layer="top" width="0.6mm" height="0.25mm" radius="0.125mm" ccwRotation={-180} shape="rotated_pill"/>
<smtpad portHints={["pin3"]} pcbX="-1mm" pcbY="-0.5mm" layer="top" width="0.6mm" height="0.25mm" radius="0.125mm" ccwRotation={-180} shape="rotated_pill"/>
<smtpad portHints={["pin4"]} pcbX="-0.5mm" pcbY="-1mm" layer="top" width="0.25mm" height="0.6mm" radius="0.125mm" ccwRotation={-180} shape="rotated_pill"/>
<smtpad portHints={["pin5"]} pcbX="0mm" pcbY="-1mm" layer="top" width="0.25mm" height="0.6mm" radius="0.125mm" ccwRotation={-180} shape="rotated_pill"/>
<smtpad portHints={["pin6"]} pcbX="0.5mm" pcbY="-1mm" layer="top" width="0.25mm" height="0.6mm" radius="0.125mm" ccwRotation={-180} shape="rotated_pill"/>
<smtpad portHints={["pin7"]} pcbX="1mm" pcbY="-0.5mm" layer="top" width="0.6mm" height="0.25mm" radius="0.125mm" ccwRotation={-180} shape="rotated_pill"/>
<smtpad portHints={["pin8"]} pcbX="1mm" pcbY="0mm" layer="top" width="0.6mm" height="0.25mm" radius="0.125mm" ccwRotation={-180} shape="rotated_pill"/>
<smtpad portHints={["pin9"]} pcbX="1mm" pcbY="0.5mm" layer="top" width="0.6mm" height="0.25mm" radius="0.125mm" ccwRotation={-180} shape="rotated_pill"/>
<smtpad portHints={["pin10"]} pcbX="0.5mm" pcbY="1mm" layer="top" width="0.25mm" height="0.6mm" radius="0.125mm" ccwRotation={-180} shape="rotated_pill"/>
<smtpad portHints={["pin11"]} pcbX="0mm" pcbY="1mm" layer="top" width="0.25mm" height="0.6mm" radius="0.125mm" ccwRotation={-180} shape="rotated_pill"/>
<smtpad portHints={["pin12"]} pcbX="-0.5mm" pcbY="1mm" layer="top" width="0.25mm" height="0.6mm" radius="0.125mm" ccwRotation={-180} shape="rotated_pill"/>
<smtpad portHints={["pin13"]} pcbX="0mm" pcbY="0mm" layer="top" width="1mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>







<fabricationnotepath route={[{ "x": 1, "y": -1 }, { "x": -1, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 1 }, { "x": 1, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": 1, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -1 }, { "x": -1, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.5 }, { "x": -0.5, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U1" font="tscircuit2024" fontSize={0.5}/>
<courtyardrect pcbX={0} pcbY={0} width={3.1} height={3.1} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// U2: MXD8546F; praline:QFN-12-1EP_2x2mm_P0.5mm_EP1x1mm
export const Footprint_U2 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin13"]} pcbX="-0.25mm" pcbY="0.25mm" outerDiameter="0.4mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin13"]} pcbX="-0.25mm" pcbY="-0.25mm" outerDiameter="0.4mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin13"]} pcbX="0.25mm" pcbY="0.25mm" outerDiameter="0.4mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin13"]} pcbX="0.25mm" pcbY="-0.25mm" outerDiameter="0.4mm" holeDiameter="0.3mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0.5mm" layer="top" width="0.25mm" height="0.6mm" radius="0.125mm" ccwRotation={-90} shape="rotated_pill"/>
<smtpad portHints={["pin2"]} pcbX="-1mm" pcbY="0mm" layer="top" width="0.25mm" height="0.6mm" radius="0.125mm" ccwRotation={-90} shape="rotated_pill"/>
<smtpad portHints={["pin3"]} pcbX="-1mm" pcbY="-0.5mm" layer="top" width="0.25mm" height="0.6mm" radius="0.125mm" ccwRotation={-90} shape="rotated_pill"/>
<smtpad portHints={["pin4"]} pcbX="-0.5mm" pcbY="-1mm" layer="top" width="0.6mm" height="0.25mm" radius="0.125mm" ccwRotation={-90} shape="rotated_pill"/>
<smtpad portHints={["pin5"]} pcbX="0mm" pcbY="-1mm" layer="top" width="0.6mm" height="0.25mm" radius="0.125mm" ccwRotation={-90} shape="rotated_pill"/>
<smtpad portHints={["pin6"]} pcbX="0.5mm" pcbY="-1mm" layer="top" width="0.6mm" height="0.25mm" radius="0.125mm" ccwRotation={-90} shape="rotated_pill"/>
<smtpad portHints={["pin7"]} pcbX="1mm" pcbY="-0.5mm" layer="top" width="0.25mm" height="0.6mm" radius="0.125mm" ccwRotation={-90} shape="rotated_pill"/>
<smtpad portHints={["pin8"]} pcbX="1mm" pcbY="0mm" layer="top" width="0.25mm" height="0.6mm" radius="0.125mm" ccwRotation={-90} shape="rotated_pill"/>
<smtpad portHints={["pin9"]} pcbX="1mm" pcbY="0.5mm" layer="top" width="0.25mm" height="0.6mm" radius="0.125mm" ccwRotation={-90} shape="rotated_pill"/>
<smtpad portHints={["pin10"]} pcbX="0.5mm" pcbY="1mm" layer="top" width="0.6mm" height="0.25mm" radius="0.125mm" ccwRotation={-90} shape="rotated_pill"/>
<smtpad portHints={["pin11"]} pcbX="0mm" pcbY="1mm" layer="top" width="0.6mm" height="0.25mm" radius="0.125mm" ccwRotation={-90} shape="rotated_pill"/>
<smtpad portHints={["pin12"]} pcbX="-0.5mm" pcbY="1mm" layer="top" width="0.6mm" height="0.25mm" radius="0.125mm" ccwRotation={-90} shape="rotated_pill"/>
<smtpad portHints={["pin13"]} pcbX="0mm" pcbY="0mm" layer="top" width="1mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>







<fabricationnotepath route={[{ "x": 1, "y": 1 }, { "x": 1, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": 1, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.5 }, { "x": -0.5, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -1 }, { "x": -1, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -1 }, { "x": -1, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U2" font="tscircuit2024" fontSize={0.5}/>
<courtyardrect pcbX={0} pcbY={0} width={3.1} height={3.1} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// U4: RFFC5072; praline:QFN-32-1EP_5x5mm_P0.5mm_EP3.7x3.7mm_ThermalVias
export const Footprint_U4 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin33"]} pcbX="-1mm" pcbY="1mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin33"]} pcbX="-1mm" pcbY="0mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin33"]} pcbX="-1mm" pcbY="-1mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin33"]} pcbX="0mm" pcbY="1mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin33"]} pcbX="0mm" pcbY="0mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin33"]} pcbX="0mm" pcbY="-1mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin33"]} pcbX="1mm" pcbY="1mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin33"]} pcbX="1mm" pcbY="0mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin33"]} pcbX="1mm" pcbY="-1mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="-2.45mm" pcbY="1.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.45mm" pcbY="1.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.45mm" pcbY="0.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.45mm" pcbY="0.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-2.45mm" pcbY="-0.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-2.45mm" pcbY="-0.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-2.45mm" pcbY="-1.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-2.45mm" pcbY="-1.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-1.75mm" pcbY="-2.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-1.25mm" pcbY="-2.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-0.75mm" pcbY="-2.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-0.25mm" pcbY="-2.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="0.25mm" pcbY="-2.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="0.75mm" pcbY="-2.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="1.25mm" pcbY="-2.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="1.75mm" pcbY="-2.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="2.45mm" pcbY="-1.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="2.45mm" pcbY="-1.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="2.45mm" pcbY="-0.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="2.45mm" pcbY="-0.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="2.45mm" pcbY="0.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="2.45mm" pcbY="0.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="2.45mm" pcbY="1.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="2.45mm" pcbY="1.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="1.75mm" pcbY="2.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="1.25mm" pcbY="2.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="0.75mm" pcbY="2.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="0.25mm" pcbY="2.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="-0.25mm" pcbY="2.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="-0.75mm" pcbY="2.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="-1.25mm" pcbY="2.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="-1.75mm" pcbY="2.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="0mm" pcbY="0mm" layer="bottom" width="2.5mm" height="2.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="0mm" pcbY="0mm" layer="top" width="3.7mm" height="3.7mm" ccwRotation={90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -2.5, "y": -2.5 }, { "x": -2.5, "y": 1.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.5, "y": -2.5 }, { "x": -2.5, "y": -2.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.5, "y": 1.5 }, { "x": -1.5, "y": 2.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.5, "y": 2.5 }, { "x": 2.5, "y": 2.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.5, "y": 2.5 }, { "x": 2.5, "y": -2.5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U4" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -3.1, "y": -3.1 }, { "x": 3.1, "y": -3.1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.1, "y": -3.1 }, { "x": 3.1, "y": 3.1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.1, "y": 3.1 }, { "x": -3.1, "y": -3.1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.1, "y": 3.1 }, { "x": -3.1, "y": 3.1 }]} layer="top"/>
      </footprint>);
// U5: FM8625H; praline:TSLP-6-4_1.1x0.7mm_P0.4mm
export const Footprint_U5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.2mm" pcbY="0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.2mm" pcbY="0mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.2mm" pcbY="-0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.2mm" pcbY="-0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.2mm" pcbY="0mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.2mm" pcbY="0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": 0.35, "y": -0.55 }, { "x": -0.35, "y": -0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.35, "y": 0.55 }, { "x": 0.35, "y": -0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.35, "y": 0.55 }, { "x": -0.1, "y": 0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.55 }, { "x": -0.35, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": -0.55 }, { "x": -0.35, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U5" font="tscircuit2024" fontSize={0.4}/>
<courtyardrect pcbX={0} pcbY={0} width={1} height={1.4} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// U6: FM8625H; praline:TSLP-6-4_1.1x0.7mm_P0.4mm
export const Footprint_U6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.2mm" pcbY="0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.2mm" pcbY="0mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.2mm" pcbY="-0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.2mm" pcbY="-0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.2mm" pcbY="0mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.2mm" pcbY="0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": 0.35, "y": 0.55 }, { "x": -0.1, "y": 0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.35, "y": 0.55 }, { "x": 0.35, "y": -0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.55 }, { "x": -0.35, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.35, "y": -0.55 }, { "x": -0.35, "y": -0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": -0.55 }, { "x": -0.35, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U6" font="tscircuit2024" fontSize={0.4}/>
<courtyardrect pcbX={0} pcbY={0} width={1} height={1.4} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// U7: FM8625H; praline:TSLP-6-4_1.1x0.7mm_P0.4mm
export const Footprint_U7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.2mm" pcbY="0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.199999mm" pcbY="0mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.2mm" pcbY="-0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.2mm" pcbY="-0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.199999mm" pcbY="0mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.2mm" pcbY="0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": -0.35, "y": -0.55 }, { "x": -0.349999, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.35, "y": -0.55 }, { "x": -0.35, "y": -0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.55 }, { "x": -0.349999, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.35, "y": 0.55 }, { "x": 0.35, "y": -0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.35, "y": 0.55 }, { "x": -0.1, "y": 0.55 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U7" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": -0.5, "y": 0.7 }, { "x": 0.5, "y": 0.7 }, { "x": 0.5, "y": -0.7 }, { "x": -0.5, "y": -0.7 }]} layer="top"/>
      </footprint>);
// U9: MXD8638C; praline:MXD8638C
export const Footprint_U9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.4mm" pcbY="0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.4mm" pcbY="0mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.4mm" pcbY="-0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0mm" pcbY="-0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.4mm" pcbY="-0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.4mm" pcbY="0mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.4mm" pcbY="0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0mm" pcbY="0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="0mm" pcbY="0mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": -0.55, "y": -0.55 }, { "x": -0.55, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.55, "y": -0.55 }, { "x": -0.55, "y": -0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.55, "y": 0.25 }, { "x": -0.25, "y": 0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.25, "y": 0.55 }, { "x": 0.55, "y": 0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.55, "y": 0.55 }, { "x": 0.55, "y": -0.55 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U9" font="tscircuit2024" fontSize={0.25}/>
<courtyardrect pcbX={0} pcbY={0} width={1.4} height={1.4} layer="top" pcbRotation="180deg"/>
      </footprint>);
// U10: 74LVC1G86; Package_TO_SOT_SMD:SOT-353_SC-70-5
export const Footprint_U10 = () => (<footprint originalLayer="top">
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
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U10" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.6, "y": -1.4 }, { "x": 1.6, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": -1.4 }, { "x": 1.6, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.4 }, { "x": 1.6, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.4 }, { "x": -1.6, "y": -1.4 }]} layer="top"/>
      </footprint>);
// U11: 74LVC1G86; Package_TO_SOT_SMD:SOT-353_SC-70-5
export const Footprint_U11 = () => (<footprint originalLayer="top">
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
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U11" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.6, "y": -1.4 }, { "x": 1.6, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": -1.4 }, { "x": 1.6, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.4 }, { "x": 1.6, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.4 }, { "x": -1.6, "y": -1.4 }]} layer="top"/>
      </footprint>);
// U12: MXD8638C; praline:MXD8638C
export const Footprint_U12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.4mm" pcbY="0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.4mm" pcbY="0mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.4mm" pcbY="-0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0mm" pcbY="-0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.4mm" pcbY="-0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.4mm" pcbY="0mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.4mm" pcbY="0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0mm" pcbY="0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="0mm" pcbY="0mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": 0.55, "y": 0.55 }, { "x": 0.55, "y": -0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.25, "y": 0.55 }, { "x": 0.55, "y": 0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.55, "y": 0.25 }, { "x": -0.25, "y": 0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.55, "y": -0.55 }, { "x": -0.55, "y": -0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.55, "y": -0.55 }, { "x": -0.55, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U12" font="tscircuit2024" fontSize={0.25}/>
<courtyardrect pcbX={0} pcbY={0} width={1.4} height={1.4} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// U14: MXD8638C; praline:MXD8638C
export const Footprint_U14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.4mm" pcbY="0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.4mm" pcbY="0mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.4mm" pcbY="-0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0mm" pcbY="-0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.4mm" pcbY="-0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.4mm" pcbY="0mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.4mm" pcbY="0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0mm" pcbY="0.4mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="0mm" pcbY="0mm" layer="top" cornerRadius="0.015625mm" width="0.25mm" height="0.25mm" ccwRotation={90} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": -0.55, "y": -0.55 }, { "x": -0.55, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.55, "y": -0.55 }, { "x": -0.55, "y": -0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.55, "y": 0.25 }, { "x": -0.25, "y": 0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.25, "y": 0.55 }, { "x": 0.55, "y": 0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.55, "y": 0.55 }, { "x": 0.55, "y": -0.55 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U14" font="tscircuit2024" fontSize={0.25}/>
<courtyardrect pcbX={0} pcbY={0} width={1.4} height={1.4} layer="top" pcbRotation="180deg"/>
      </footprint>);
// U15: TVS_USB; Package_DFN_QFN:Diodes_UDFN-10_1.0x2.5mm_P0.5mm
export const Footprint_U15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.3875mm" pcbY="1mm" layer="top" width="0.625mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.3875mm" pcbY="0.5mm" layer="top" width="0.625mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.35mm" pcbY="0mm" layer="top" width="0.7mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.3875mm" pcbY="-0.5mm" layer="top" width="0.625mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-0.3875mm" pcbY="-1mm" layer="top" width="0.625mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.3875mm" pcbY="-1mm" layer="top" width="0.625mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.3875mm" pcbY="-0.5mm" layer="top" width="0.625mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.4125mm" pcbY="0mm" layer="top" width="0.575mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="0.3875mm" pcbY="0.5mm" layer="top" width="0.625mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="0.3875mm" pcbY="1mm" layer="top" width="0.625mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.5, "y": 1.25 }, { "x": 0.5, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 1.25 }, { "x": -0.25, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.25, "y": 1.25 }, { "x": -0.5, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -1.25 }, { "x": 0.5, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": -0.5, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U15" font="tscircuit2024" fontSize={0.55}/>
<courtyardoutline outline={[{ "x": 0.95, "y": -1.5 }, { "x": -0.95, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.95, "y": 1.5 }, { "x": 0.95, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.95, "y": -1.5 }, { "x": -0.95, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.95, "y": 1.5 }, { "x": 0.95, "y": 1.5 }]} layer="top"/>
      </footprint>);
// U17: MAX2831; praline:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm_ThermalVias
export const Footprint_U17 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin49"]} pcbX="-2.55mm" pcbY="2.55mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="-2.55mm" pcbY="1.275mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="-2.55mm" pcbY="0mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="-2.55mm" pcbY="-1.275mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="-2.55mm" pcbY="-2.55mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="-1.275mm" pcbY="2.55mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="-1.275mm" pcbY="1.275mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="-1.275mm" pcbY="0mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="-1.275mm" pcbY="-1.275mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="-1.275mm" pcbY="-2.55mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="0mm" pcbY="2.55mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="0mm" pcbY="1.275mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="0mm" pcbY="0mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="0mm" pcbY="-1.275mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="0mm" pcbY="-2.55mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="1.275mm" pcbY="2.55mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="1.275mm" pcbY="1.275mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="1.275mm" pcbY="0mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="1.275mm" pcbY="-1.275mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="1.275mm" pcbY="-2.55mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="2.55mm" pcbY="2.55mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="2.55mm" pcbY="1.275mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="2.55mm" pcbY="0mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="2.55mm" pcbY="-1.275mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="2.55mm" pcbY="-2.55mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="-3.4375mm" pcbY="2.75mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-3.4375mm" pcbY="2.25mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-3.4375mm" pcbY="1.75mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-3.4375mm" pcbY="1.25mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-3.4375mm" pcbY="0.75mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="-3.4375mm" pcbY="0.25mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="-3.4375mm" pcbY="-0.25mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="-3.4375mm" pcbY="-0.75mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="-3.4375mm" pcbY="-1.25mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="-3.4375mm" pcbY="-1.75mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin11"]} pcbX="-3.4375mm" pcbY="-2.25mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin12"]} pcbX="-3.4375mm" pcbY="-2.75mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin13"]} pcbX="-2.75mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin14"]} pcbX="-2.25mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin15"]} pcbX="-1.75mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin16"]} pcbX="-1.25mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin17"]} pcbX="-0.75mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin18"]} pcbX="-0.25mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin19"]} pcbX="0.25mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin20"]} pcbX="0.75mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin21"]} pcbX="1.25mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin22"]} pcbX="1.75mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin23"]} pcbX="2.25mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin24"]} pcbX="2.75mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin25"]} pcbX="3.4375mm" pcbY="-2.75mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin26"]} pcbX="3.4375mm" pcbY="-2.25mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin27"]} pcbX="3.4375mm" pcbY="-1.75mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin28"]} pcbX="3.4375mm" pcbY="-1.25mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin29"]} pcbX="3.4375mm" pcbY="-0.75mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin30"]} pcbX="3.4375mm" pcbY="-0.25mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin31"]} pcbX="3.4375mm" pcbY="0.25mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin32"]} pcbX="3.4375mm" pcbY="0.75mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin33"]} pcbX="3.4375mm" pcbY="1.25mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin34"]} pcbX="3.4375mm" pcbY="1.75mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin35"]} pcbX="3.4375mm" pcbY="2.25mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin36"]} pcbX="3.4375mm" pcbY="2.75mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin37"]} pcbX="2.75mm" pcbY="3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin38"]} pcbX="2.25mm" pcbY="3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin39"]} pcbX="1.75mm" pcbY="3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin40"]} pcbX="1.25mm" pcbY="3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin41"]} pcbX="0.75mm" pcbY="3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin42"]} pcbX="0.25mm" pcbY="3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin43"]} pcbX="-0.25mm" pcbY="3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin44"]} pcbX="-0.75mm" pcbY="3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin45"]} pcbX="-1.25mm" pcbY="3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin46"]} pcbX="-1.75mm" pcbY="3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin47"]} pcbX="-2.25mm" pcbY="3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin48"]} pcbX="-2.75mm" pcbY="3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin49"]} pcbX="0mm" pcbY="0mm" layer="top" width="5.6mm" height="5.6mm" shape="rect"/>
<smtpad portHints={["pin49"]} pcbX="0mm" pcbY="0mm" layer="bottom" width="5.6mm" height="5.6mm" shape="rect"/>









<fabricationnotepath route={[{ "x": -3.5, "y": 2.5 }, { "x": -2.5, "y": 3.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.5, "y": -3.5 }, { "x": -3.5, "y": 2.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.5, "y": 3.5 }, { "x": 3.5, "y": 3.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.5, "y": 3.5 }, { "x": 3.5, "y": -3.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.5, "y": -3.5 }, { "x": -3.5, "y": -3.5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U17" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -4.13, "y": 4.13 }, { "x": -4.13, "y": -4.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.13, "y": -4.13 }, { "x": 4.13, "y": -4.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.13, "y": 4.13 }, { "x": -4.13, "y": 4.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.13, "y": -4.13 }, { "x": 4.13, "y": 4.13 }]} layer="top"/>
      </footprint>);
// U18: MAX5865; praline:QFN-48-1EP_7x7mm_P0.5mm_EP5.3x5.3mm_ThermalVias
export const Footprint_U18 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin49"]} pcbX="-2.4mm" pcbY="2.4mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="-2.4mm" pcbY="1.2mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="-2.4mm" pcbY="0mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="-2.4mm" pcbY="-1.2mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="-2.4mm" pcbY="-2.4mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="-1.2mm" pcbY="2.4mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="-1.2mm" pcbY="1.2mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="-1.2mm" pcbY="0mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="-1.2mm" pcbY="-1.2mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="-1.2mm" pcbY="-2.4mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="0mm" pcbY="2.4mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="0mm" pcbY="1.2mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="0mm" pcbY="0mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="0mm" pcbY="-1.2mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="0mm" pcbY="-2.4mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="1.2mm" pcbY="2.4mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="1.2mm" pcbY="1.2mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="1.2mm" pcbY="0mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="1.2mm" pcbY="-1.2mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="1.2mm" pcbY="-2.4mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="2.4mm" pcbY="2.4mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="2.4mm" pcbY="1.2mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="2.4mm" pcbY="0mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="2.4mm" pcbY="-1.2mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="2.4mm" pcbY="-2.4mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="-3.45mm" pcbY="2.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-3.45mm" pcbY="2.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-3.45mm" pcbY="1.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-3.45mm" pcbY="1.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-3.45mm" pcbY="0.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-3.45mm" pcbY="0.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-3.45mm" pcbY="-0.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-3.45mm" pcbY="-0.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-3.45mm" pcbY="-1.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-3.45mm" pcbY="-1.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-3.45mm" pcbY="-2.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-3.45mm" pcbY="-2.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-2.75mm" pcbY="-3.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-2.25mm" pcbY="-3.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-1.75mm" pcbY="-3.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-1.25mm" pcbY="-3.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="-0.75mm" pcbY="-3.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="-0.25mm" pcbY="-3.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="0.25mm" pcbY="-3.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="0.75mm" pcbY="-3.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="1.25mm" pcbY="-3.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="1.75mm" pcbY="-3.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="2.25mm" pcbY="-3.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="2.75mm" pcbY="-3.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="3.45mm" pcbY="-2.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="3.45mm" pcbY="-2.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="3.45mm" pcbY="-1.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="3.45mm" pcbY="-1.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="3.45mm" pcbY="-0.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="3.45mm" pcbY="-0.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="3.45mm" pcbY="0.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="3.45mm" pcbY="0.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="3.45mm" pcbY="1.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin34"]} pcbX="3.45mm" pcbY="1.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin35"]} pcbX="3.45mm" pcbY="2.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin36"]} pcbX="3.45mm" pcbY="2.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin37"]} pcbX="2.75mm" pcbY="3.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin38"]} pcbX="2.25mm" pcbY="3.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin39"]} pcbX="1.75mm" pcbY="3.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin40"]} pcbX="1.25mm" pcbY="3.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="0.75mm" pcbY="3.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin42"]} pcbX="0.25mm" pcbY="3.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin43"]} pcbX="-0.25mm" pcbY="3.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin44"]} pcbX="-0.75mm" pcbY="3.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin45"]} pcbX="-1.25mm" pcbY="3.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin46"]} pcbX="-1.75mm" pcbY="3.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin47"]} pcbX="-2.25mm" pcbY="3.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin48"]} pcbX="-2.75mm" pcbY="3.45mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin49"]} pcbX="0mm" pcbY="0mm" layer="top" width="5.3mm" height="5.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin49"]} pcbX="0mm" pcbY="0mm" layer="bottom" width="5.3mm" height="5.3mm" ccwRotation={-90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": 3.5, "y": 3.5 }, { "x": 3.5, "y": -3.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.5, "y": 3.5 }, { "x": 3.5, "y": 3.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.5, "y": 2.5 }, { "x": -2.5, "y": 3.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.5, "y": -3.5 }, { "x": -3.5, "y": -3.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.5, "y": -3.5 }, { "x": -3.5, "y": 2.5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U18" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": 4.1, "y": 4.1 }, { "x": -4.1, "y": 4.1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.1, "y": 4.1 }, { "x": -4.1, "y": -4.1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.1, "y": -4.1 }, { "x": 4.1, "y": 4.1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.1, "y": -4.1 }, { "x": 4.1, "y": -4.1 }]} layer="top"/>
      </footprint>);
// U19: SI5351C; praline:QFN-20-1EP_4x4mm_P0.5mm_EP2.7x2.7mm_ThermalVias
export const Footprint_U19 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin21"]} pcbX="-1.1mm" pcbY="1.1mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin21"]} pcbX="-1.1mm" pcbY="-1.1mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin21"]} pcbX="1.1mm" pcbY="1.1mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin21"]} pcbX="1.1mm" pcbY="-1.1mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="-1.95mm" pcbY="1mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.95mm" pcbY="0.5mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.95mm" pcbY="0mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.95mm" pcbY="-0.5mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-1.95mm" pcbY="-1mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-1mm" pcbY="-1.95mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-0.5mm" pcbY="-1.95mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0mm" pcbY="-1.95mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="0.5mm" pcbY="-1.95mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="1mm" pcbY="-1.95mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="1.95mm" pcbY="-1mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="1.95mm" pcbY="-0.5mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="1.95mm" pcbY="0mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="1.95mm" pcbY="0.5mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="1.95mm" pcbY="1mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="1mm" pcbY="1.95mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="0.5mm" pcbY="1.95mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="0mm" pcbY="1.95mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="-0.5mm" pcbY="1.95mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="-1mm" pcbY="1.95mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="0mm" pcbY="0mm" layer="top" width="2.7mm" height="2.7mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="0mm" pcbY="0mm" layer="bottom" width="2.7mm" height="2.7mm" ccwRotation={-90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": 2, "y": 2 }, { "x": 2, "y": -2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 2 }, { "x": 2, "y": 2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2, "y": 1 }, { "x": -1, "y": 2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2, "y": -2 }, { "x": -2, "y": -2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2, "y": -2 }, { "x": -2, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U19" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": 2.6, "y": 2.6 }, { "x": -2.6, "y": 2.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.6, "y": 2.6 }, { "x": -2.6, "y": -2.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.6, "y": -2.6 }, { "x": 2.6, "y": 2.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.6, "y": -2.6 }, { "x": 2.6, "y": -2.6 }]} layer="top"/>
      </footprint>);
// U20: W25Q32; Package_SO:SOIC-8_5.3x5.3mm_P1.27mm
export const Footprint_U20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.5875mm" pcbY="1.905mm" layer="top" cornerRadius="0.08125mm" width="1.625mm" height="0.65mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-3.5875mm" pcbY="0.635mm" layer="top" cornerRadius="0.08125mm" width="1.625mm" height="0.65mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-3.5875mm" pcbY="-0.635mm" layer="top" cornerRadius="0.08125mm" width="1.625mm" height="0.65mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-3.5875mm" pcbY="-1.905mm" layer="top" cornerRadius="0.08125mm" width="1.625mm" height="0.65mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="3.5875mm" pcbY="-1.905mm" layer="top" cornerRadius="0.08125mm" width="1.625mm" height="0.65mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="3.5875mm" pcbY="-0.635mm" layer="top" cornerRadius="0.08125mm" width="1.625mm" height="0.65mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="3.5875mm" pcbY="0.635mm" layer="top" cornerRadius="0.08125mm" width="1.625mm" height="0.65mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="3.5875mm" pcbY="1.905mm" layer="top" cornerRadius="0.08125mm" width="1.625mm" height="0.65mm" ccwRotation={-180} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -2.65, "y": 1.65 }, { "x": -2.65, "y": -2.65 }, { "x": 2.65, "y": -2.65 }, { "x": 2.65, "y": 2.65 }, { "x": -1.65, "y": 2.65 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U20" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": 4.65, "y": -2.48 }, { "x": 2.9, "y": -2.48 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.65, "y": 2.48 }, { "x": 4.65, "y": -2.48 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.9, "y": -2.9 }, { "x": -2.9, "y": -2.9 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.9, "y": -2.48 }, { "x": 2.9, "y": -2.9 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.9, "y": 2.48 }, { "x": 4.65, "y": 2.48 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.9, "y": 2.9 }, { "x": 2.9, "y": 2.48 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.9, "y": -2.9 }, { "x": -2.9, "y": -2.48 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.9, "y": -2.48 }, { "x": -4.65, "y": -2.48 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.9, "y": 2.48 }, { "x": -2.9, "y": 2.9 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.9, "y": 2.9 }, { "x": 2.9, "y": 2.9 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.65, "y": -2.48 }, { "x": -4.65, "y": 2.48 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.65, "y": 2.48 }, { "x": -2.9, "y": 2.48 }]} layer="top"/>
      </footprint>);
// U21: TPS62410; praline:Texas_S-PVSON-N10_ThermalVias
export const Footprint_U21 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin11"]} pcbX="-0.5mm" pcbY="0.75mm" outerDiameter="0.6mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin11"]} pcbX="-0.5mm" pcbY="-0.75mm" outerDiameter="0.6mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin11"]} pcbX="0mm" pcbY="0mm" outerDiameter="0.6mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin11"]} pcbX="0.5mm" pcbY="0.75mm" outerDiameter="0.6mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin11"]} pcbX="0.5mm" pcbY="-0.75mm" outerDiameter="0.6mm" holeDiameter="0.3mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="-1.76mm" pcbY="1mm" layer="top" cornerRadius="0.035mm" width="0.28mm" height="0.28mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="1mm" layer="top" width="0.28mm" height="0.85mm" radius="0.14mm" ccwRotation={-90} shape="rotated_pill"/>
<smtpad portHints={["pin2"]} pcbX="-1.76mm" pcbY="0.5mm" layer="top" cornerRadius="0.035mm" width="0.28mm" height="0.28mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.475mm" pcbY="0.5mm" layer="top" width="0.28mm" height="0.85mm" radius="0.14mm" ccwRotation={-90} shape="rotated_pill"/>
<smtpad portHints={["pin3"]} pcbX="-1.76mm" pcbY="0mm" layer="top" cornerRadius="0.035mm" width="0.28mm" height="0.28mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.475mm" pcbY="0mm" layer="top" width="0.28mm" height="0.85mm" radius="0.14mm" ccwRotation={-90} shape="rotated_pill"/>
<smtpad portHints={["pin4"]} pcbX="-1.76mm" pcbY="-0.5mm" layer="top" cornerRadius="0.035mm" width="0.28mm" height="0.28mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.475mm" pcbY="-0.5mm" layer="top" width="0.28mm" height="0.85mm" radius="0.14mm" ccwRotation={-90} shape="rotated_pill"/>
<smtpad portHints={["pin5"]} pcbX="-1.76mm" pcbY="-1mm" layer="top" cornerRadius="0.035mm" width="0.28mm" height="0.28mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-1.475mm" pcbY="-1mm" layer="top" width="0.28mm" height="0.85mm" radius="0.14mm" ccwRotation={-90} shape="rotated_pill"/>
<smtpad portHints={["pin6"]} pcbX="1.475mm" pcbY="-1mm" layer="top" width="0.28mm" height="0.85mm" radius="0.14mm" ccwRotation={-90} shape="rotated_pill"/>
<smtpad portHints={["pin6"]} pcbX="1.76mm" pcbY="-1mm" layer="top" cornerRadius="0.035mm" width="0.28mm" height="0.28mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="1.475mm" pcbY="-0.5mm" layer="top" width="0.28mm" height="0.85mm" radius="0.14mm" ccwRotation={-90} shape="rotated_pill"/>
<smtpad portHints={["pin7"]} pcbX="1.76mm" pcbY="-0.5mm" layer="top" cornerRadius="0.035mm" width="0.28mm" height="0.28mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="1.475mm" pcbY="0mm" layer="top" width="0.28mm" height="0.85mm" radius="0.14mm" ccwRotation={-90} shape="rotated_pill"/>
<smtpad portHints={["pin8"]} pcbX="1.76mm" pcbY="0mm" layer="top" cornerRadius="0.035mm" width="0.28mm" height="0.28mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="1.475mm" pcbY="0.5mm" layer="top" width="0.28mm" height="0.85mm" radius="0.14mm" ccwRotation={-90} shape="rotated_pill"/>
<smtpad portHints={["pin9"]} pcbX="1.76mm" pcbY="0.5mm" layer="top" cornerRadius="0.035mm" width="0.28mm" height="0.28mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="1.475mm" pcbY="1mm" layer="top" width="0.28mm" height="0.85mm" radius="0.14mm" ccwRotation={-90} shape="rotated_pill"/>
<smtpad portHints={["pin10"]} pcbX="1.76mm" pcbY="1mm" layer="top" cornerRadius="0.035mm" width="0.28mm" height="0.28mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-0.45mm" pcbY="0.635mm" layer="top" width="1.05mm" height="0.68mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-0.45mm" pcbY="-0.635mm" layer="top" width="1.05mm" height="0.68mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-0.25mm" pcbY="1.6mm" layer="top" width="0.5mm" height="0.26mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-0.25mm" pcbY="1.5mm" layer="top" cornerRadius="0.035mm" width="0.8mm" height="0.28mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-0.25mm" pcbY="-1.5mm" layer="top" cornerRadius="0.035mm" width="0.8mm" height="0.28mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-0.25mm" pcbY="-1.6mm" layer="top" width="0.5mm" height="0.26mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="0mm" pcbY="0mm" layer="top" cornerRadius="0.04125mm" width="2.4mm" height="1.65mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="0mm" pcbY="0mm" layer="bottom" cornerRadius="0.115mm" width="2.8mm" height="2.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="0.25mm" pcbY="1.6mm" layer="top" width="0.5mm" height="0.26mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="0.25mm" pcbY="1.5mm" layer="top" cornerRadius="0.035mm" width="0.8mm" height="0.28mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="0.25mm" pcbY="-1.5mm" layer="top" cornerRadius="0.035mm" width="0.8mm" height="0.28mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="0.25mm" pcbY="-1.6mm" layer="top" width="0.5mm" height="0.26mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="0.45mm" pcbY="0.635mm" layer="top" width="1.05mm" height="0.68mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="0.45mm" pcbY="-0.635mm" layer="top" width="1.05mm" height="0.68mm" ccwRotation={-90} shape="rotated_rect"/>








<fabricationnotepath route={[{ "x": 1.55, "y": 1.55 }, { "x": 1.55, "y": -1.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.775, "y": 1.55 }, { "x": 1.55, "y": 1.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.775, "y": 1.55 }, { "x": -1.55, "y": 0.775 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.55, "y": -1.55 }, { "x": -1.55, "y": -1.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.55, "y": -1.55 }, { "x": -1.55, "y": 0.775 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U21" font="tscircuit2024" fontSize={0.7}/>
<courtyardoutline outline={[{ "x": 2.15, "y": 2.15 }, { "x": 2.15, "y": -2.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.15, "y": 2.15 }, { "x": 2.15, "y": 2.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.15, "y": 2.15 }, { "x": -2.15, "y": -2.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.15, "y": -2.15 }, { "x": 2.15, "y": -2.15 }]} layer="top"/>
      </footprint>);
// U23: LPC4330FET180; praline:TFBGA-180_12x12mm_Layout14x14_P0.8mm
export const Footprint_U23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-5.2mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin2"]} pcbX="-4.4mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin3"]} pcbX="-3.6mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin4"]} pcbX="-2.8mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin5"]} pcbX="-2mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin6"]} pcbX="-1.2mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin7"]} pcbX="-0.4mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin8"]} pcbX="0.4mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin9"]} pcbX="1.2mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin10"]} pcbX="2mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin11"]} pcbX="2.8mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin12"]} pcbX="3.6mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin13"]} pcbX="4.4mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin14"]} pcbX="5.2mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin15"]} pcbX="-5.2mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin16"]} pcbX="-4.4mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin17"]} pcbX="-3.6mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin18"]} pcbX="-2.8mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin19"]} pcbX="-2mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin20"]} pcbX="-1.2mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin21"]} pcbX="-0.4mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin22"]} pcbX="0.4mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin23"]} pcbX="1.2mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin24"]} pcbX="2mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin25"]} pcbX="2.8mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin26"]} pcbX="3.6mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin27"]} pcbX="4.4mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin28"]} pcbX="5.2mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin29"]} pcbX="-5.2mm" pcbY="3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin30"]} pcbX="-4.4mm" pcbY="3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin31"]} pcbX="-3.6mm" pcbY="3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin32"]} pcbX="-2.8mm" pcbY="3.599999mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin33"]} pcbX="-2mm" pcbY="3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin34"]} pcbX="-1.200001mm" pcbY="3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin35"]} pcbX="-0.4mm" pcbY="3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin36"]} pcbX="0.4mm" pcbY="3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin37"]} pcbX="1.200001mm" pcbY="3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin38"]} pcbX="2mm" pcbY="3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin39"]} pcbX="2.8mm" pcbY="3.599999mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin40"]} pcbX="3.6mm" pcbY="3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin41"]} pcbX="4.4mm" pcbY="3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin42"]} pcbX="5.2mm" pcbY="3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin43"]} pcbX="-5.2mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin44"]} pcbX="-4.4mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin45"]} pcbX="-3.599999mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin46"]} pcbX="-2.8mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin47"]} pcbX="-2.000001mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin48"]} pcbX="-1.2mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin49"]} pcbX="-0.4mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin50"]} pcbX="0.4mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin51"]} pcbX="1.2mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin52"]} pcbX="2.000001mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin53"]} pcbX="2.8mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin54"]} pcbX="3.599999mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin55"]} pcbX="4.4mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin56"]} pcbX="5.2mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin57"]} pcbX="-5.2mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin58"]} pcbX="-4.4mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin59"]} pcbX="-3.6mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin60"]} pcbX="-2.8mm" pcbY="2.000001mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin61"]} pcbX="-2mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin62"]} pcbX="-1.200001mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin63"]} pcbX="-0.4mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin64"]} pcbX="0.4mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin65"]} pcbX="1.200001mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin66"]} pcbX="2mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin67"]} pcbX="2.8mm" pcbY="2.000001mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin68"]} pcbX="3.6mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin69"]} pcbX="4.4mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin70"]} pcbX="5.2mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin71"]} pcbX="-5.2mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin72"]} pcbX="-4.4mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin73"]} pcbX="-3.6mm" pcbY="1.200001mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin74"]} pcbX="-2.8mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin75"]} pcbX="-2mm" pcbY="1.200001mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin76"]} pcbX="2mm" pcbY="1.200001mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin77"]} pcbX="2.8mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin78"]} pcbX="3.6mm" pcbY="1.200001mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin79"]} pcbX="4.4mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin80"]} pcbX="5.2mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin81"]} pcbX="-5.2mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin82"]} pcbX="-4.4mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin83"]} pcbX="-3.6mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin84"]} pcbX="-2.8mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin85"]} pcbX="-2mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin86"]} pcbX="2mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin87"]} pcbX="2.8mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin88"]} pcbX="3.6mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin89"]} pcbX="4.4mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin90"]} pcbX="5.2mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin91"]} pcbX="-5.2mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin92"]} pcbX="-4.4mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin93"]} pcbX="-3.6mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin94"]} pcbX="-2.8mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin95"]} pcbX="-2mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin96"]} pcbX="2mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin97"]} pcbX="2.8mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin98"]} pcbX="3.6mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin99"]} pcbX="4.4mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin100"]} pcbX="5.2mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin101"]} pcbX="-5.2mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin102"]} pcbX="-4.4mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin103"]} pcbX="-3.6mm" pcbY="-1.200001mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin104"]} pcbX="-2.8mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin105"]} pcbX="-2mm" pcbY="-1.200001mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin106"]} pcbX="2mm" pcbY="-1.200001mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin107"]} pcbX="2.8mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin108"]} pcbX="3.6mm" pcbY="-1.200001mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin109"]} pcbX="4.4mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin110"]} pcbX="5.2mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin111"]} pcbX="-5.2mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin112"]} pcbX="-4.4mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin113"]} pcbX="-3.6mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin114"]} pcbX="-2.8mm" pcbY="-2.000001mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin115"]} pcbX="-2mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin116"]} pcbX="-1.200001mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin117"]} pcbX="-0.4mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin118"]} pcbX="0.4mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin119"]} pcbX="1.200001mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin120"]} pcbX="2mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin121"]} pcbX="2.8mm" pcbY="-2.000001mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin122"]} pcbX="3.6mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin123"]} pcbX="4.4mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin124"]} pcbX="5.2mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin125"]} pcbX="-5.2mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin126"]} pcbX="-4.4mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin127"]} pcbX="-3.599999mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin128"]} pcbX="-2.8mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin129"]} pcbX="-2.000001mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin130"]} pcbX="-1.2mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin131"]} pcbX="-0.4mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin132"]} pcbX="0.4mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin133"]} pcbX="1.2mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin134"]} pcbX="2.000001mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin135"]} pcbX="2.8mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin136"]} pcbX="3.599999mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin137"]} pcbX="4.4mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin138"]} pcbX="5.2mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin139"]} pcbX="-5.2mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin140"]} pcbX="-4.4mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin141"]} pcbX="-3.6mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin142"]} pcbX="-2.8mm" pcbY="-3.599999mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin143"]} pcbX="-2mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin144"]} pcbX="-1.200001mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin145"]} pcbX="-0.4mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin146"]} pcbX="0.4mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin147"]} pcbX="1.200001mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin148"]} pcbX="2mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin149"]} pcbX="2.8mm" pcbY="-3.599999mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin150"]} pcbX="3.6mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin151"]} pcbX="4.4mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin152"]} pcbX="5.2mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin153"]} pcbX="-5.2mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin154"]} pcbX="-4.4mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin155"]} pcbX="-3.6mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin156"]} pcbX="-2.8mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin157"]} pcbX="-2mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin158"]} pcbX="-1.2mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin159"]} pcbX="-0.4mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin160"]} pcbX="0.4mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin161"]} pcbX="1.2mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin162"]} pcbX="2mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin163"]} pcbX="2.8mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin164"]} pcbX="3.6mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin165"]} pcbX="4.4mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin166"]} pcbX="5.2mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin167"]} pcbX="-5.2mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin168"]} pcbX="-4.4mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin169"]} pcbX="-3.6mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin170"]} pcbX="-2.8mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin171"]} pcbX="-2mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin172"]} pcbX="-1.2mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin173"]} pcbX="-0.4mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin174"]} pcbX="0.4mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin175"]} pcbX="1.2mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin176"]} pcbX="2mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin177"]} pcbX="2.8mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin178"]} pcbX="3.6mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin179"]} pcbX="4.4mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin180"]} pcbX="5.2mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>





<fabricationnotepath route={[{ "x": -6, "y": -6 }, { "x": 6, "y": -6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 6, "y": -6 }, { "x": 6, "y": 6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -6, "y": 5 }, { "x": -6, "y": -6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -5, "y": 6 }, { "x": -6, "y": 5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 6, "y": 6 }, { "x": -5, "y": 6 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U23" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -7, "y": -7 }, { "x": -7, "y": 7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 7, "y": -7 }, { "x": -7, "y": -7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -7, "y": 7 }, { "x": 7, "y": 7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 7, "y": 7 }, { "x": 7, "y": -7 }]} layer="top"/>
      </footprint>);
// X2: MCU_XTAL; praline:Crystal_SMD_3225-4Pin_3.2x2.5mm
export const Footprint_X2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.85mm" pcbY="1.1mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.85mm" pcbY="-1.1mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.85mm" pcbY="-1.1mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.85mm" pcbY="1.1mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 1.25, "y": 1.6 }, { "x": -0.625, "y": 1.6 }, { "x": -1.25, "y": 0.975001 }, { "x": -1.25, "y": -1.6 }, { "x": 1.25, "y": -1.6 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="X2" font="tscircuit2024" fontSize={0.8}/>
<courtyardrect pcbX={0} pcbY={0} width={3.5} height={4.2} layer="top" pcbRotation="180deg"/>
      </footprint>);
// X3: RTC_XTAL; praline:Crystal_SMD_3215-2Pin_3.2x1.5mm
export const Footprint_X3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.25mm" pcbY="0mm" layer="top" width="1.8mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.25mm" pcbY="0mm" layer="top" width="1.8mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": -0.75 }, { "x": 1.6, "y": -0.75 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.75 }, { "x": -1.6, "y": -0.75 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.75 }, { "x": 1.6, "y": 0.75 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.75 }, { "x": 1.6, "y": -0.75 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="X3" font="tscircuit2024" fontSize={0.8}/>
<courtyardoutline outline={[{ "x": -2, "y": -1.15 }, { "x": 2, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2, "y": 1.15 }, { "x": -2, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2, "y": 1.15 }, { "x": 2, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2, "y": 1.15 }, { "x": 2, "y": -1.15 }]} layer="top"/>
      </footprint>);
// R122: 4.7k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R122 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.4} anchorAlignment="center" text="R122" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R133: 1k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R133 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.34} anchorAlignment="center" text="R133" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// L32: 56 nH; Inductor_SMD:L_0201_0603Metric
export const Footprint_L32 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="L32" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R83: 33k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R83 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.99} pcbY={0} anchorAlignment="center" text="R83" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C199: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C199 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C199" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// R102: 330; Resistor_SMD:R_0201_0603Metric
export const Footprint_R102 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="R102" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// D12: D; praline:D_SOD-123FL
export const Footprint_D12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.45mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.5mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.45mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.5mm" shape="rect"/>



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
<fabricationnotetext pcbX={2} pcbY={-1.85} anchorAlignment="center" text="D12" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -2.2, "y": 1.15 }, { "x": -2.2, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2, "y": 1.15 }, { "x": 2.2, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.2, "y": 1.15 }, { "x": 2.2, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.2, "y": -1.15 }, { "x": -2.2, "y": -1.15 }]} layer="top"/>
      </footprint>);
// C124: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C124 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C124" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// R94: 1k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R94 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R94" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C203: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C203 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.4} anchorAlignment="center" text="C203" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// Q1: NMOS/PMOS; Package_TO_SOT_SMD:SOT-563
export const Footprint_Q1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7125mm" pcbY="0.5mm" layer="top" cornerRadius="0.04375mm" width="0.675mm" height="0.35mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.7125mm" pcbY="0mm" layer="top" cornerRadius="0.04375mm" width="0.675mm" height="0.35mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.7125mm" pcbY="-0.5mm" layer="top" cornerRadius="0.04375mm" width="0.675mm" height="0.35mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="0.7125mm" pcbY="-0.5mm" layer="top" cornerRadius="0.04375mm" width="0.675mm" height="0.35mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="0.7125mm" pcbY="0mm" layer="top" cornerRadius="0.04375mm" width="0.675mm" height="0.35mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="0.7125mm" pcbY="0.5mm" layer="top" cornerRadius="0.04375mm" width="0.675mm" height="0.35mm" shape="rect"/>





<fabricationnotepath route={[{ "x": -0.6, "y": 0.5 }, { "x": -0.6, "y": -0.8 }, { "x": 0.6, "y": -0.8 }, { "x": 0.6, "y": 0.8 }, { "x": -0.3, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="Q1" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": -1.2, "y": 0.83 }, { "x": -0.75, "y": 0.83 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.2, "y": -0.83 }, { "x": -1.2, "y": 0.83 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.75, "y": 0.95 }, { "x": 0.75, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.75, "y": 0.83 }, { "x": -0.75, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.75, "y": -0.83 }, { "x": -1.2, "y": -0.83 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.75, "y": -0.95 }, { "x": -0.75, "y": -0.83 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.75, "y": 0.95 }, { "x": 0.75, "y": 0.83 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.75, "y": 0.83 }, { "x": 1.2, "y": 0.83 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.75, "y": -0.83 }, { "x": 0.75, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.75, "y": -0.95 }, { "x": -0.75, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.2, "y": 0.83 }, { "x": 1.2, "y": -0.83 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.2, "y": -0.83 }, { "x": 0.75, "y": -0.83 }]} layer="top"/>
      </footprint>);
// R50: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R50 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R50" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C114: 0.3 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C114 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.4} anchorAlignment="center" text="C114" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// FB8: Ferrite; Inductor_SMD:L_0603_1608Metric
export const Footprint_FB8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.875mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.875mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FB8" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// U31: 74LVC1G3157; Package_TO_SOT_SMD:SOT-363_SC-70-6
export const Footprint_U31 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.95mm" pcbY="-0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="0.95mm" pcbY="-0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="0.95mm" pcbY="0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.675, "y": 0.6 }, { "x": -0.675, "y": -1.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.175, "y": 1.1 }, { "x": -0.675, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.675, "y": 1.1 }, { "x": -0.175, "y": 1.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.675, "y": 1.1 }, { "x": 0.675, "y": -1.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.675, "y": -1.1 }, { "x": -0.675, "y": -1.1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U31" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.4 }, { "x": -1.6, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.4 }, { "x": 1.6, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": -1.4 }, { "x": 1.6, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.6, "y": -1.4 }, { "x": 1.6, "y": 1.4 }]} layer="top"/>
      </footprint>);
// R136: 220; Resistor_SMD:R_0201_0603Metric
export const Footprint_R136 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.4} anchorAlignment="center" text="R136" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// U39: 74LVC1G08; Package_TO_SOT_SMD:SOT-353_SC-70-5
export const Footprint_U39 = () => (<footprint originalLayer="top">
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
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U39" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.6, "y": -1.4 }, { "x": 1.6, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": -1.4 }, { "x": 1.6, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.4 }, { "x": 1.6, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.4 }, { "x": -1.6, "y": -1.4 }]} layer="top"/>
      </footprint>);
// U16: ICE40UP5K; praline:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm_ThermalVias
export const Footprint_U16 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin49"]} pcbX="-2.55mm" pcbY="2.55mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="-2.55mm" pcbY="1.275mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="-2.55mm" pcbY="0mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="-2.55mm" pcbY="-1.275mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="-2.55mm" pcbY="-2.55mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="-1.275mm" pcbY="2.55mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="-1.275mm" pcbY="1.275mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="-1.275mm" pcbY="0mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="-1.275mm" pcbY="-1.275mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="-1.275mm" pcbY="-2.55mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="0mm" pcbY="2.55mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="0mm" pcbY="1.275mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="0mm" pcbY="0mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="0mm" pcbY="-1.275mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="0mm" pcbY="-2.55mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="1.275mm" pcbY="2.55mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="1.275mm" pcbY="1.275mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="1.275mm" pcbY="0mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="1.275mm" pcbY="-1.275mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="1.275mm" pcbY="-2.55mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="2.55mm" pcbY="2.55mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="2.55mm" pcbY="1.275mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="2.55mm" pcbY="0mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="2.55mm" pcbY="-1.275mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin49"]} pcbX="2.55mm" pcbY="-2.55mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="-3.4375mm" pcbY="2.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-3.4375mm" pcbY="2.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-3.4375mm" pcbY="1.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-3.4375mm" pcbY="1.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-3.4375mm" pcbY="0.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-3.4375mm" pcbY="0.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-3.4375mm" pcbY="-0.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-3.4375mm" pcbY="-0.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-3.4375mm" pcbY="-1.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-3.4375mm" pcbY="-1.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-3.4375mm" pcbY="-2.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-3.4375mm" pcbY="-2.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-2.75mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-2.25mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-1.75mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-1.25mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="-0.75mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="-0.25mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="0.25mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="0.75mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="1.25mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="1.75mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="2.25mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="2.75mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="3.4375mm" pcbY="-2.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="3.4375mm" pcbY="-2.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="3.4375mm" pcbY="-1.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="3.4375mm" pcbY="-1.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="3.4375mm" pcbY="-0.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="3.4375mm" pcbY="-0.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="3.4375mm" pcbY="0.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="3.4375mm" pcbY="0.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="3.4375mm" pcbY="1.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin34"]} pcbX="3.4375mm" pcbY="1.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin35"]} pcbX="3.4375mm" pcbY="2.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin36"]} pcbX="3.4375mm" pcbY="2.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin37"]} pcbX="2.75mm" pcbY="3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin38"]} pcbX="2.25mm" pcbY="3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin39"]} pcbX="1.75mm" pcbY="3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin40"]} pcbX="1.25mm" pcbY="3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="0.75mm" pcbY="3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin42"]} pcbX="0.25mm" pcbY="3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin43"]} pcbX="-0.25mm" pcbY="3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin44"]} pcbX="-0.75mm" pcbY="3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin45"]} pcbX="-1.25mm" pcbY="3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin46"]} pcbX="-1.75mm" pcbY="3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin47"]} pcbX="-2.25mm" pcbY="3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin48"]} pcbX="-2.75mm" pcbY="3.4375mm" layer="top" cornerRadius="0.03125mm" width="0.875mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin49"]} pcbX="0mm" pcbY="0mm" layer="top" width="5.6mm" height="5.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin49"]} pcbX="0mm" pcbY="0mm" layer="bottom" width="5.6mm" height="5.6mm" ccwRotation={-90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": 3.5, "y": 3.5 }, { "x": 3.5, "y": -3.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.5, "y": 3.5 }, { "x": 3.5, "y": 3.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.5, "y": 2.5 }, { "x": -2.5, "y": 3.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.5, "y": -3.5 }, { "x": -3.5, "y": -3.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.5, "y": -3.5 }, { "x": -3.5, "y": 2.5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U16" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": 4.13, "y": 4.13 }, { "x": -4.13, "y": 4.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.13, "y": 4.13 }, { "x": -4.13, "y": -4.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.13, "y": -4.13 }, { "x": 4.13, "y": 4.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.13, "y": -4.13 }, { "x": 4.13, "y": -4.13 }]} layer="top"/>
      </footprint>);
// C195: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C195 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.4} anchorAlignment="center" text="C195" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R128: 220; Resistor_SMD:R_0201_0603Metric
export const Footprint_R128 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="R128" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R157: 330; Resistor_SMD:R_0201_0603Metric
export const Footprint_R157 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R157" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C159: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C159 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="C159" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R61: 22.6k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R61 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="R61" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C168: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C168 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C168" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// RN4: 100; Resistor_SMD:R_Array_Convex_4x0402
export const Footprint_RN4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.5mm" pcbY="0.75mm" layer="top" width="0.4mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.5mm" pcbY="0.25mm" layer="top" width="0.3mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.5mm" pcbY="-0.25mm" layer="top" width="0.3mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.5mm" pcbY="-0.75mm" layer="top" width="0.4mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.5mm" pcbY="-0.75mm" layer="top" width="0.4mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.5mm" pcbY="-0.25mm" layer="top" width="0.3mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.5mm" pcbY="0.25mm" layer="top" width="0.3mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.5mm" pcbY="0.75mm" layer="top" width="0.4mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -1 }, { "x": -0.5, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -1 }, { "x": -0.5, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": 0.5, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 1 }, { "x": 0.5, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="RN4" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
      </footprint>);
// RN6: 100; Resistor_SMD:R_Array_Convex_4x0402
export const Footprint_RN6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.5mm" pcbY="0.75mm" layer="top" width="0.4mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.5mm" pcbY="0.25mm" layer="top" width="0.3mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.5mm" pcbY="-0.25mm" layer="top" width="0.3mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.5mm" pcbY="-0.75mm" layer="top" width="0.4mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.5mm" pcbY="-0.75mm" layer="top" width="0.4mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.5mm" pcbY="-0.25mm" layer="top" width="0.3mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.5mm" pcbY="0.25mm" layer="top" width="0.3mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.5mm" pcbY="0.75mm" layer="top" width="0.4mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -1 }, { "x": -0.5, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -1 }, { "x": -0.5, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": 0.5, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 1 }, { "x": 0.5, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="RN6" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
      </footprint>);
// FL1: CommonModeChoke; praline:L_CommonModeChoke_Murata_DLM0NS
export const Footprint_FL1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.3mm" pcbY="0.25mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.3mm" pcbY="0.25mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.3mm" pcbY="-0.25mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="0.3mm" pcbY="-0.25mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.325, "y": 0.225 }, { "x": -0.325, "y": -0.425 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.325, "y": 0.225 }, { "x": -0.125, "y": 0.425 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.325, "y": 0.425 }, { "x": -0.125, "y": 0.425 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.325, "y": 0.425 }, { "x": 0.325, "y": -0.425 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.325, "y": -0.425 }, { "x": -0.325, "y": -0.425 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.8} pcbY={0} anchorAlignment="center" text="FL1" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -0.6, "y": 0.6 }, { "x": 0.6, "y": 0.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.6, "y": -0.6 }, { "x": -0.6, "y": 0.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.6, "y": -0.6 }, { "x": 0.6, "y": -0.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.6, "y": -0.6 }, { "x": 0.6, "y": 0.6 }]} layer="top"/>
      </footprint>);
// FB5: Ferrite; Inductor_SMD:L_0603_1608Metric
export const Footprint_FB5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FB5" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// R70: 820k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R70 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R70" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// C178: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C178 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.44} anchorAlignment="center" text="C178" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R96: 1k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R96 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R96" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// H3: MountingHole_Pad; praline:MountingHole_3.2mm_M3_Pad_Via
export const Footprint_H3 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="-2.2mm" pcbY="0mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.556mm" pcbY="1.556mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.556mm" pcbY="-1.556mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="2.2mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="5.6mm" holeDiameter="3.2mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-2.2mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.556mm" pcbY="1.556mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.556mm" pcbY="-1.556mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="2.2mm" pcbY="0mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H3" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.05} layer="top"/>
      </footprint>);
// U40: BGB741L7ESD; praline:TSLP-7-1
export const Footprint_U40 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin7"]} pcbX="-0.35mm" pcbY="0.3mm" outerDiameter="0.4mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin7"]} pcbX="-0.35mm" pcbY="-0.3mm" outerDiameter="0.4mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin7"]} pcbX="0.35mm" pcbY="0.3mm" outerDiameter="0.4mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin7"]} pcbX="0.35mm" pcbY="-0.3mm" outerDiameter="0.4mm" holeDiameter="0.3mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="-0.5mm" pcbY="-0.925mm" layer="top" cornerRadius="0.01875mm" width="0.35mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0mm" pcbY="-0.925mm" layer="top" cornerRadius="0.01875mm" width="0.35mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.5mm" pcbY="-0.925mm" layer="top" cornerRadius="0.01875mm" width="0.35mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.5mm" pcbY="0.925mm" layer="top" cornerRadius="0.01875mm" width="0.35mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0mm" pcbY="0.925mm" layer="top" cornerRadius="0.01875mm" width="0.35mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-0.5mm" pcbY="0.925mm" layer="top" cornerRadius="0.01875mm" width="0.35mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-0.45mm" pcbY="0.4mm" layer="top" cornerRadius="0.055mm" width="0.3mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-0.45mm" pcbY="0mm" layer="top" width="0.3mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-0.45mm" pcbY="-0.4mm" layer="top" cornerRadius="0.055mm" width="0.3mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0mm" pcbY="0.4mm" layer="top" width="0.3mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0mm" pcbY="0mm" layer="top" width="0.3mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0mm" pcbY="0mm" layer="top" cornerRadius="0.055mm" width="1.1mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0mm" pcbY="0mm" layer="bottom" cornerRadius="0.055mm" width="1.1mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0mm" pcbY="-0.4mm" layer="top" width="0.3mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.45mm" pcbY="0.4mm" layer="top" cornerRadius="0.055mm" width="0.3mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.45mm" pcbY="0mm" layer="top" width="0.3mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.45mm" pcbY="-0.4mm" layer="top" cornerRadius="0.055mm" width="0.3mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.35, "y": -1 }, { "x": -0.65, "y": -0.7 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": -1 }, { "x": -0.35, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.65, "y": -0.7 }, { "x": -0.65, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.65, "y": 1 }, { "x": 0.65, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": 1 }, { "x": 0.65, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U40" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -0.8, "y": -1.25 }, { "x": -0.8, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.8, "y": -1.25 }, { "x": -0.8, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": 1.25 }, { "x": 0.8, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.8, "y": 1.25 }, { "x": 0.8, "y": -1.25 }]} layer="top"/>
      </footprint>);
// U24: AP22652; Package_SO:TSOP-6_1.65x3.05mm_P0.95mm
export const Footprint_U24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.16mm" pcbY="0.95mm" layer="top" width="0.7mm" height="0.51mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.16mm" pcbY="0mm" layer="top" width="0.7mm" height="0.51mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.16mm" pcbY="-0.95mm" layer="top" width="0.7mm" height="0.51mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.16mm" pcbY="-0.95mm" layer="top" width="0.7mm" height="0.51mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="1.16mm" pcbY="0mm" layer="top" width="0.7mm" height="0.51mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="1.16mm" pcbY="0.95mm" layer="top" width="0.7mm" height="0.51mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.825, "y": -1.525 }, { "x": -0.825, "y": -1.525 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.825, "y": 1.525 }, { "x": 0.825, "y": -1.525 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.825, "y": 1.525 }, { "x": -0.425, "y": 1.525 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.825, "y": 1.1 }, { "x": -0.425, "y": 1.525 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.825, "y": 1.1 }, { "x": -0.825, "y": -1.525 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U24" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.76, "y": -1.77 }, { "x": 1.76, "y": 1.78 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.76, "y": -1.77 }, { "x": -1.76, "y": -1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.76, "y": 1.78 }, { "x": 1.76, "y": 1.78 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.76, "y": 1.78 }, { "x": -1.76, "y": -1.77 }]} layer="top"/>
      </footprint>);
// C197: 10 uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C197 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C197" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
      </footprint>);
// C48: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C48 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.68} anchorAlignment="center" text="C48" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// U37: 74LVC1G3157; Package_TO_SOT_SMD:SOT-363_SC-70-6
export const Footprint_U37 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.95mm" pcbY="-0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.95mm" pcbY="-0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.95mm" pcbY="0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.675, "y": -1.1 }, { "x": -0.675, "y": -1.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.675, "y": 1.1 }, { "x": 0.675, "y": -1.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.675, "y": 1.1 }, { "x": -0.175, "y": 1.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.175, "y": 1.1 }, { "x": -0.675, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.675, "y": 0.6 }, { "x": -0.675, "y": -1.1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U37" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.6, "y": -1.4 }, { "x": 1.6, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": -1.4 }, { "x": 1.6, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.4 }, { "x": 1.6, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.4 }, { "x": -1.6, "y": -1.4 }]} layer="top"/>
      </footprint>);
// R20: 180k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R20" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// L29: 100 uH; praline:L_TDK_MLZ2012_h1.25mm
export const Footprint_L29 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.9mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L29" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.55, "y": -0.85 }, { "x": 1.55, "y": 0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.55, "y": 0.85 }, { "x": -1.55, "y": 0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.55, "y": -0.85 }, { "x": 1.55, "y": -0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.55, "y": 0.85 }, { "x": -1.55, "y": -0.85 }]} layer="top"/>
      </footprint>);
// R6: 100; Resistor_SMD:R_0201_0603Metric
export const Footprint_R6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R6" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R87: 33k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R87 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-1} pcbY={0} anchorAlignment="center" text="R87" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C179: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C179 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.46} anchorAlignment="center" text="C179" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// D10: Schottky; praline:TSLP-2-19
export const Footprint_D10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.325mm" pcbY="0mm" layer="top" cornerRadius="0.021875mm" width="0.6mm" height="0.35mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.325mm" pcbY="0mm" layer="top" cornerRadius="0.021875mm" width="0.6mm" height="0.35mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.65} anchorAlignment="center" text="D10" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={-0.325} pcbY={0} width={0.6} height={0.35} strokeWidth={0.1} isFilled={false} hasStroke={true}/>
<courtyardrect pcbX={0} pcbY={0} width={1.3} height={0.9} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C184: 10 uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C184 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C184" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
      </footprint>);
// U38: BGB741L7ESD; praline:TSLP-7-1
export const Footprint_U38 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin7"]} pcbX="-0.35mm" pcbY="0.3mm" outerDiameter="0.4mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin7"]} pcbX="-0.35mm" pcbY="-0.3mm" outerDiameter="0.4mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin7"]} pcbX="0.35mm" pcbY="0.3mm" outerDiameter="0.4mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin7"]} pcbX="0.35mm" pcbY="-0.3mm" outerDiameter="0.4mm" holeDiameter="0.3mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="-0.5mm" pcbY="-0.925mm" layer="top" cornerRadius="0.01875mm" width="0.3mm" height="0.35mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0mm" pcbY="-0.925mm" layer="top" cornerRadius="0.01875mm" width="0.3mm" height="0.35mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.5mm" pcbY="-0.925mm" layer="top" cornerRadius="0.01875mm" width="0.3mm" height="0.35mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.5mm" pcbY="0.925mm" layer="top" cornerRadius="0.01875mm" width="0.3mm" height="0.35mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0mm" pcbY="0.925mm" layer="top" cornerRadius="0.01875mm" width="0.3mm" height="0.35mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-0.5mm" pcbY="0.925mm" layer="top" cornerRadius="0.01875mm" width="0.3mm" height="0.35mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-0.45mm" pcbY="0.4mm" layer="top" cornerRadius="0.055mm" width="0.3mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-0.45mm" pcbY="0mm" layer="top" width="0.3mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-0.45mm" pcbY="-0.4mm" layer="top" cornerRadius="0.055mm" width="0.3mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0mm" pcbY="0.4mm" layer="top" width="0.3mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0mm" pcbY="0mm" layer="top" width="0.3mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0mm" pcbY="0mm" layer="top" cornerRadius="0.055mm" width="1.2mm" height="1.1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0mm" pcbY="0mm" layer="bottom" cornerRadius="0.055mm" width="1.2mm" height="1.1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0mm" pcbY="-0.4mm" layer="top" width="0.3mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.45mm" pcbY="0.4mm" layer="top" cornerRadius="0.055mm" width="0.3mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.45mm" pcbY="0mm" layer="top" width="0.3mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.45mm" pcbY="-0.4mm" layer="top" cornerRadius="0.055mm" width="0.3mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.65, "y": -1 }, { "x": -0.35, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": 1 }, { "x": 0.65, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": -1 }, { "x": -0.65, "y": -0.7 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.65, "y": -0.7 }, { "x": -0.65, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.65, "y": 1 }, { "x": 0.65, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U38" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 0.8, "y": -1.25 }, { "x": -0.8, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.8, "y": 1.25 }, { "x": 0.8, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -1.25 }, { "x": -0.8, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": 1.25 }, { "x": 0.8, "y": 1.25 }]} layer="top"/>
      </footprint>);
// R120: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R120 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R120" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C74: 180 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C74 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="C74" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C210: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C210 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="C210" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C56: 1.8 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C56 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.4} anchorAlignment="center" text="C56" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C177: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C177 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C177" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// RN2: 100; Resistor_SMD:R_Array_Convex_4x0402
export const Footprint_RN2 = () => (<footprint originalLayer="top">
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
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="RN2" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
      </footprint>);
// RN1: 100; Resistor_SMD:R_Array_Convex_4x0402
export const Footprint_RN1 = () => (<footprint originalLayer="top">
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
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="RN1" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
      </footprint>);
// U28: AP22652; Package_SO:TSOP-6_1.65x3.05mm_P0.95mm
export const Footprint_U28 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.16mm" pcbY="0.95mm" layer="top" width="0.7mm" height="0.51mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.16mm" pcbY="0mm" layer="top" width="0.7mm" height="0.51mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.16mm" pcbY="-0.95mm" layer="top" width="0.7mm" height="0.51mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="1.16mm" pcbY="-0.95mm" layer="top" width="0.7mm" height="0.51mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="1.16mm" pcbY="0mm" layer="top" width="0.7mm" height="0.51mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="1.16mm" pcbY="0.95mm" layer="top" width="0.7mm" height="0.51mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.825, "y": 1.1 }, { "x": -0.825, "y": -1.525 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.825, "y": 1.1 }, { "x": -0.425, "y": 1.525 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.825, "y": 1.525 }, { "x": -0.425, "y": 1.525 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.825, "y": 1.525 }, { "x": 0.825, "y": -1.525 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.825, "y": -1.525 }, { "x": -0.825, "y": -1.525 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U28" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1.76, "y": 1.78 }, { "x": -1.76, "y": -1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.76, "y": 1.78 }, { "x": 1.76, "y": 1.78 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.76, "y": -1.77 }, { "x": -1.76, "y": -1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.76, "y": -1.77 }, { "x": 1.76, "y": 1.78 }]} layer="top"/>
      </footprint>);
// C170: 10 uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C170 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C170" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
      </footprint>);
// R22: 33k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R22" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R116: 470; Resistor_SMD:R_0201_0603Metric
export const Footprint_R116 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="R116" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R152: 3; Resistor_SMD:R_0201_0603Metric
export const Footprint_R152 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.15} pcbY={0.4} anchorAlignment="center" text="R152" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// FB6: Ferrite; Inductor_SMD:L_0603_1608Metric
export const Footprint_FB6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FB6" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// C153: 100 nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C153 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C153" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C80: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C80 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C80" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// U3: GT4227; praline:GTIC_UQFN-10_1.4x1.8mm_P0.4mm
export const Footprint_U3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.5185mm" pcbY="0.2mm" layer="top" cornerRadius="0.028125mm" width="0.225mm" height="0.663mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.5685mm" pcbY="-0.2mm" layer="top" cornerRadius="0.028125mm" width="0.225mm" height="0.563mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.4mm" pcbY="-0.7685mm" layer="top" cornerRadius="0.028125mm" width="0.563mm" height="0.225mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0mm" pcbY="-0.7685mm" layer="top" cornerRadius="0.028125mm" width="0.563mm" height="0.225mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.4mm" pcbY="-0.7685mm" layer="top" cornerRadius="0.028125mm" width="0.563mm" height="0.225mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.5685mm" pcbY="-0.2mm" layer="top" cornerRadius="0.028125mm" width="0.225mm" height="0.563mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.5685mm" pcbY="0.2mm" layer="top" cornerRadius="0.028125mm" width="0.225mm" height="0.563mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.4mm" pcbY="0.7685mm" layer="top" cornerRadius="0.028125mm" width="0.563mm" height="0.225mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="0mm" pcbY="0.7685mm" layer="top" cornerRadius="0.028125mm" width="0.563mm" height="0.225mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-0.4mm" pcbY="0.7685mm" layer="top" cornerRadius="0.028125mm" width="0.563mm" height="0.225mm" ccwRotation={-90} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": 0.7, "y": 0.9 }, { "x": 0.7, "y": -0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.9 }, { "x": 0.7, "y": 0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.7, "y": 0.55 }, { "x": -0.35, "y": 0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.7, "y": -0.9 }, { "x": -0.7, "y": -0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.7, "y": -0.9 }, { "x": -0.7, "y": 0.55 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U3" font="tscircuit2024" fontSize={0.45}/>
<courtyardoutline outline={[{ "x": 1.1, "y": 1.3 }, { "x": -1.1, "y": 1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.1, "y": 1.3 }, { "x": -1.1, "y": -1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.1, "y": -1.3 }, { "x": 1.1, "y": 1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.1, "y": -1.3 }, { "x": 1.1, "y": -1.3 }]} layer="top"/>
      </footprint>);
// R89: 18.7k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R89 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R89" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// FID4: Fiducial_1mm_Mask2mm; Fiducial:Fiducial_1mm_Mask2mm
export const Footprint_FID4 = () => (<footprint originalLayer="top">
        <smtpad pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>
<fabricationnotepath route={[{ "x": 1, "y": 0 }, { "x": 0.92388, "y": 0.382683 }, { "x": 0.707107, "y": 0.707107 }, { "x": 0.382683, "y": 0.92388 }, { "x": 0, "y": 1 }, { "x": -0.382683, "y": 0.92388 }, { "x": -0.707107, "y": 0.707107 }, { "x": -0.92388, "y": 0.382683 }, { "x": -1, "y": 0 }, { "x": -0.92388, "y": -0.382683 }, { "x": -0.707107, "y": -0.707107 }, { "x": -0.382683, "y": -0.92388 }, { "x": 0, "y": -1 }, { "x": 0.382683, "y": -0.92388 }, { "x": 0.707107, "y": -0.707107 }, { "x": 0.92388, "y": -0.382683 }, { "x": 1, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FID4" font="tscircuit2024" fontSize={0.5}/>
<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// H2: MountingHole_Pad; praline:MountingHole_3.2mm_M3_Pad_Via
export const Footprint_H2 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="-2.2mm" pcbY="0mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.556mm" pcbY="1.556mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.556mm" pcbY="-1.556mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="2.2mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="5.6mm" holeDiameter="3.2mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-2.2mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.556mm" pcbY="1.556mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.556mm" pcbY="-1.556mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="2.2mm" pcbY="0mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H2" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.05} layer="top"/>
      </footprint>);
// H7: MountingHole_Pad; MountingHole:MountingHole_2.2mm_M2_Pad_Via
export const Footprint_H7 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="-1.65mm" pcbY="0mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.166726mm" pcbY="1.166726mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.166726mm" pcbY="-1.166726mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="1.65mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="4.4mm" holeDiameter="2.2mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-1.65mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.166726mm" pcbY="1.166726mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.166726mm" pcbY="-1.166726mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.65mm" pcbY="0mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H7" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={2.45} layer="top"/>
      </footprint>);
// C52: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C52 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C52" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// Q9: 2PNP; Package_TO_SOT_SMD:SOT-363_SC-70-6
export const Footprint_Q9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.95mm" pcbY="-0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.95mm" pcbY="-0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.95mm" pcbY="0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.675, "y": -1.1 }, { "x": -0.675, "y": -1.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.675, "y": 1.1 }, { "x": 0.675, "y": -1.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.675, "y": 1.1 }, { "x": -0.175, "y": 1.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.175, "y": 1.1 }, { "x": -0.675, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.675, "y": 0.6 }, { "x": -0.675, "y": -1.1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="Q9" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.6, "y": -1.4 }, { "x": 1.6, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": -1.4 }, { "x": 1.6, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.4 }, { "x": 1.6, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.4 }, { "x": -1.6, "y": -1.4 }]} layer="top"/>
      </footprint>);
// L18: 1.6 nH; Inductor_SMD:L_0201_0603Metric
export const Footprint_L18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="L18" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C200: 10 uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C200 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C200" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
      </footprint>);
// C185: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C185 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="C185" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R29: 100; Resistor_SMD:R_0201_0603Metric
export const Footprint_R29 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.43} anchorAlignment="center" text="R29" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C76: 180 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C76 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="C76" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C72: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C72 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="C72" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// L16: 1.8 nH; Inductor_SMD:L_0201_0603Metric
export const Footprint_L16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="L16" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R110: 330; Resistor_SMD:R_0201_0603Metric
export const Footprint_R110 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="R110" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C139: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C139 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="C139" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C110: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C110 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C110" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// R106: 4.7k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R106 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.9} pcbY={0} anchorAlignment="center" text="R106" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// L28: 18 nH; Inductor_SMD:L_0201_0603Metric
export const Footprint_L28 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.35} anchorAlignment="center" text="L28" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C109: 33 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C109 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={1} pcbY={0} anchorAlignment="center" text="C109" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R151: 1k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R151 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="R151" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R21: 100; Resistor_SMD:R_0201_0603Metric
export const Footprint_R21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.05} pcbY={0.5} anchorAlignment="center" text="R21" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// L14: 5.6 nH; Inductor_SMD:L_0201_0603Metric
export const Footprint_L14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.05} pcbY={-0.5} anchorAlignment="center" text="L14" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// RN5: 100; Resistor_SMD:R_Array_Convex_4x0402
export const Footprint_RN5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.5mm" pcbY="0.75mm" layer="top" width="0.4mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.5mm" pcbY="0.25mm" layer="top" width="0.3mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.5mm" pcbY="-0.25mm" layer="top" width="0.3mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.5mm" pcbY="-0.75mm" layer="top" width="0.4mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.5mm" pcbY="-0.75mm" layer="top" width="0.4mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.5mm" pcbY="-0.25mm" layer="top" width="0.3mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.5mm" pcbY="0.25mm" layer="top" width="0.3mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.5mm" pcbY="0.75mm" layer="top" width="0.4mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -1 }, { "x": -0.5, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -1 }, { "x": -0.5, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": 0.5, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 1 }, { "x": 0.5, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="RN5" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
      </footprint>);
// L31: 56 nH; Inductor_SMD:L_0201_0603Metric
export const Footprint_L31 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="L31" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C196: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C196 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C196" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// Q6: PMOS; Package_TO_SOT_SMD:SOT-23-3
export const Footprint_Q6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" shape="rect"/>





<fabricationnotepath route={[{ "x": -0.8, "y": 1.05 }, { "x": -0.8, "y": -1.45 }, { "x": 0.8, "y": -1.45 }, { "x": 0.8, "y": 1.45 }, { "x": -0.4, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="Q6" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": -2.05, "y": 1.5 }, { "x": -1.05, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": -1.5 }, { "x": -2.05, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": 1.7 }, { "x": 1.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": 1.5 }, { "x": -1.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": -1.5 }, { "x": -2.05, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": -1.7 }, { "x": -1.05, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": 1.7 }, { "x": 1.05, "y": 0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": 0.55 }, { "x": 2.05, "y": 0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": -0.55 }, { "x": 1.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": -1.7 }, { "x": -1.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": 0.55 }, { "x": 2.05, "y": -0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": -0.55 }, { "x": 1.05, "y": -0.55 }]} layer="top"/>
      </footprint>);
// L4: 100 uH; praline:L_TDK_MLZ2012_h1.25mm
export const Footprint_L4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1.2mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.9mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1.2mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L4" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.55, "y": 0.85 }, { "x": -1.55, "y": 0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.55, "y": 0.85 }, { "x": -1.55, "y": -0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.55, "y": -0.85 }, { "x": 1.55, "y": 0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.55, "y": -0.85 }, { "x": 1.55, "y": -0.85 }]} layer="top"/>
      </footprint>);
// C166: 10 uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C166 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C166" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
      </footprint>);
// C142: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C142 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.68} anchorAlignment="center" text="C142" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// L17: 1.8 nH; Inductor_SMD:L_0201_0603Metric
export const Footprint_L17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="L17" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// L33: 100 uH; praline:L_TDK_MLZ2012_h1.25mm
export const Footprint_L33 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1.2mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.9mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1.2mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L33" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.55, "y": 0.85 }, { "x": -1.55, "y": 0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.55, "y": 0.85 }, { "x": -1.55, "y": -0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.55, "y": -0.85 }, { "x": 1.55, "y": 0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.55, "y": -0.85 }, { "x": 1.55, "y": -0.85 }]} layer="top"/>
      </footprint>);
// C68: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C68 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.6} anchorAlignment="center" text="C68" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C190: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C190 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C190" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// JP1: SolderJumper_2_Bridged; Jumper:SolderJumper-2_P1.3mm_Bridged_RoundedPad1.0x1.5mm
export const Footprint_JP1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.65mm" pcbY="-0.25mm" layer="top" radius="0.5mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="-0.65mm" pcbY="0.25mm" layer="top" radius="0.5mm" shape="circle"/>
<smtpad portHints={["pin1"]} layer="top" shape="polygon" points={[{ "x": -0.15, "y": -0.75 }, { "x": -0.65, "y": -0.75 }, { "x": -0.65, "y": 0.75 }, { "x": -0.15, "y": 0.75 }]}/>
<smtpad portHints={["pin2"]} pcbX="0.65mm" pcbY="-0.25mm" layer="top" radius="0.5mm" shape="circle"/>
<smtpad portHints={["pin2"]} pcbX="0.65mm" pcbY="0.25mm" layer="top" radius="0.5mm" shape="circle"/>
<smtpad portHints={["pin2"]} layer="top" shape="polygon" points={[{ "x": 0.65, "y": -0.75 }, { "x": 0.15, "y": -0.75 }, { "x": 0.15, "y": 0.75 }, { "x": 0.65, "y": 0.75 }]}/>









<courtyardoutline outline={[{ "x": 1.65, "y": -1.25 }, { "x": 1.65, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.65, "y": -1.25 }, { "x": -1.65, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.65, "y": 1.25 }, { "x": 1.65, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.65, "y": 1.25 }, { "x": -1.65, "y": -1.25 }]} layer="top"/>
      </footprint>);
// R153: 1k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R153 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="R153" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// U22: LDO_2V5; Package_TO_SOT_SMD:SOT-23-3
export const Footprint_U22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": -0.8, "y": 1.05 }, { "x": -0.8, "y": -1.45 }, { "x": 0.8, "y": -1.45 }, { "x": 0.8, "y": 1.45 }, { "x": -0.4, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U22" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": 1.05, "y": 1.7 }, { "x": 1.05, "y": 0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": 1.7 }, { "x": 1.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": 1.5 }, { "x": -1.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": 1.5 }, { "x": -1.05, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": 0.55 }, { "x": 2.05, "y": -0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": 0.55 }, { "x": 2.05, "y": 0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": -0.55 }, { "x": 1.05, "y": -0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": -0.55 }, { "x": 1.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": -1.5 }, { "x": -2.05, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": -1.5 }, { "x": -2.05, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": -1.7 }, { "x": -1.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": -1.7 }, { "x": -1.05, "y": -1.5 }]} layer="top"/>
      </footprint>);
// C186: 10 uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C186 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C186" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R100: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R100 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R100" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R91: 18.7k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R91 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R91" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R23: 33; Resistor_SMD:R_0201_0603Metric
export const Footprint_R23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.95} pcbY={0} anchorAlignment="center" text="R23" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R129: 1k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R129 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R129" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C188: 0.3 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C188 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C188" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C96: 1.6 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C96 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C96" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// U13: 74LVC1G86; Package_TO_SOT_SMD:SOT-353_SC-70-5
export const Footprint_U13 = () => (<footprint originalLayer="top">
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
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U13" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.6, "y": -1.4 }, { "x": 1.6, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": -1.4 }, { "x": 1.6, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.4 }, { "x": 1.6, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.4 }, { "x": -1.6, "y": -1.4 }]} layer="top"/>
      </footprint>);
// FB3: Ferrite; Inductor_SMD:L_0603_1608Metric
export const Footprint_FB3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FB3" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// RN3: 100; Resistor_SMD:R_Array_Convex_4x0402
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
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="RN3" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
      </footprint>);
// FL3: BPF; praline:Filter_Pulse_BPF1608LM09R5000A
export const Footprint_FL3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.8625mm" pcbY="0mm" layer="top" cornerRadius="0.025mm" width="0.4mm" height="0.425mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0mm" pcbY="0mm" layer="bottom" width="0.8mm" height="1.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0mm" pcbY="-0.4625mm" layer="top" cornerRadius="0.026563mm" width="0.425mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.8625mm" pcbY="0mm" layer="top" cornerRadius="0.025mm" width="0.4mm" height="0.425mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0mm" pcbY="0.4625mm" layer="top" cornerRadius="0.026563mm" width="0.425mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.4, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.4 }, { "x": -0.8, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.9} anchorAlignment="center" text="FL3" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 0.56, "y": 0.93 }, { "x": 0.56, "y": 0.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.56, "y": 0.93 }, { "x": 0.56, "y": 0.93 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.56, "y": 0.93 }, { "x": -0.56, "y": 0.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": 0.65 }, { "x": 1.05, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.56, "y": 0.65 }, { "x": 1.05, "y": 0.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": 0.65 }, { "x": -0.56, "y": 0.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": 0.65 }, { "x": -1.05, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.33, "y": 0.45 }, { "x": 1.33, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": 0.45 }, { "x": 1.33, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.33, "y": 0.45 }, { "x": -1.05, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.33, "y": 0.45 }, { "x": -1.33, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": -0.45 }, { "x": 1.33, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": -0.45 }, { "x": 1.05, "y": -0.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": -0.45 }, { "x": -1.33, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": -0.45 }, { "x": -1.05, "y": -0.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.56, "y": -0.65 }, { "x": 1.05, "y": -0.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.56, "y": -0.65 }, { "x": 0.56, "y": -0.93 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.56, "y": -0.65 }, { "x": -0.56, "y": -0.93 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": -0.65 }, { "x": -0.56, "y": -0.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.56, "y": -0.93 }, { "x": 0.56, "y": -0.93 }]} layer="top"/>
      </footprint>);
// R111: 330; Resistor_SMD:R_0201_0603Metric
export const Footprint_R111 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="R111" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// J3: RF_SHIELD_FRAME; praline:Laird_Technologies_BMI-S-230-F_50.8x38.1mm
export const Footprint_J3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-25.3mm" pcbY="17.775mm" layer="top" cornerRadius="0.0625mm" width="1mm" height="3.35mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="-25.3mm" pcbY="12mm" layer="top" cornerRadius="0.0625mm" width="1mm" height="3.8mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="-25.3mm" pcbY="6mm" layer="top" cornerRadius="0.0625mm" width="1mm" height="3.8mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="-25.3mm" pcbY="0mm" layer="top" cornerRadius="0.0625mm" width="1mm" height="3.8mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="-25.3mm" pcbY="-6mm" layer="top" cornerRadius="0.0625mm" width="1mm" height="3.8mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="-25.3mm" pcbY="-12mm" layer="top" cornerRadius="0.0625mm" width="1mm" height="3.8mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="-25.3mm" pcbY="-17.775mm" layer="top" cornerRadius="0.0625mm" width="1mm" height="3.35mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="-23.95mm" pcbY="18.95mm" layer="top" cornerRadius="0.0625mm" width="3.7mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="-23.95mm" pcbY="-18.95mm" layer="top" cornerRadius="0.0625mm" width="3.7mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="-18mm" pcbY="18.95mm" layer="top" cornerRadius="0.0625mm" width="3.8mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="-18mm" pcbY="-18.95mm" layer="top" cornerRadius="0.0625mm" width="3.8mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="-12mm" pcbY="18.95mm" layer="top" cornerRadius="0.0625mm" width="3.8mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="-12mm" pcbY="-18.95mm" layer="top" cornerRadius="0.0625mm" width="3.8mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="-6mm" pcbY="18.95mm" layer="top" cornerRadius="0.0625mm" width="3.8mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="-6mm" pcbY="-18.95mm" layer="top" cornerRadius="0.0625mm" width="3.8mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="0mm" pcbY="18.95mm" layer="top" cornerRadius="0.0625mm" width="3.8mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="0mm" pcbY="-18.95mm" layer="top" cornerRadius="0.0625mm" width="3.8mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="6mm" pcbY="18.95mm" layer="top" cornerRadius="0.0625mm" width="3.8mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="6mm" pcbY="-18.95mm" layer="top" cornerRadius="0.0625mm" width="3.8mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="11.875mm" pcbY="18.95mm" layer="top" cornerRadius="0.0625mm" width="3.55mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="12mm" pcbY="-18.95mm" layer="top" cornerRadius="0.0625mm" width="3.8mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="18mm" pcbY="-18.95mm" layer="top" cornerRadius="0.0625mm" width="3.8mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="18.125mm" pcbY="18.95mm" layer="top" cornerRadius="0.0625mm" width="3.55mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="23.95mm" pcbY="18.95mm" layer="top" cornerRadius="0.0625mm" width="3.7mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="23.95mm" pcbY="-18.95mm" layer="top" cornerRadius="0.0625mm" width="3.7mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="25.3mm" pcbY="17.775mm" layer="top" cornerRadius="0.0625mm" width="1mm" height="3.35mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="25.3mm" pcbY="12mm" layer="top" cornerRadius="0.0625mm" width="1mm" height="3.8mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="25.3mm" pcbY="6mm" layer="top" cornerRadius="0.0625mm" width="1mm" height="3.8mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="25.3mm" pcbY="0mm" layer="top" cornerRadius="0.0625mm" width="1mm" height="3.8mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="25.3mm" pcbY="-6mm" layer="top" cornerRadius="0.0625mm" width="1mm" height="3.8mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="25.3mm" pcbY="-12mm" layer="top" cornerRadius="0.0625mm" width="1mm" height="3.8mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="25.3mm" pcbY="-17.775mm" layer="top" cornerRadius="0.0625mm" width="1mm" height="3.35mm" shape="rect"/>





























<fabricationnotepath route={[{ "x": -25.4, "y": 18.05 }, { "x": -25.4, "y": -19.05 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -25.4, "y": -19.05 }, { "x": 25.4, "y": -19.05 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -24.4, "y": 19.05 }, { "x": -25.4, "y": 18.05 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 25.4, "y": 19.05 }, { "x": -24.4, "y": 19.05 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 25.4, "y": -19.05 }, { "x": 25.4, "y": 19.05 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-23.2} pcbY={17.05} anchorAlignment="center" text="J3" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -26.05, "y": 19.7 }, { "x": -26.05, "y": -19.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -26.05, "y": -19.7 }, { "x": 26.05, "y": -19.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -24.55, "y": 18.2 }, { "x": -24.55, "y": -18.2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -24.55, "y": -18.2 }, { "x": 24.55, "y": -18.2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 24.55, "y": 18.2 }, { "x": -24.55, "y": 18.2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 24.55, "y": -18.2 }, { "x": 24.55, "y": 18.2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 26.05, "y": 19.7 }, { "x": -26.05, "y": 19.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 26.05, "y": -19.7 }, { "x": 26.05, "y": 19.7 }]} layer="top"/>
      </footprint>);
// C167: 10 uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C167 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C167" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C212: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C212 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.55} anchorAlignment="center" text="C212" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R71: 5.1k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R71 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R71" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// C108: 180 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C108 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="C108" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R92: 4.7k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R92 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R92" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C148: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C148 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.47} anchorAlignment="center" text="C148" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// D18: TVS; praline:TSLP-2-19
export const Footprint_D18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.325mm" pcbY="0mm" layer="top" cornerRadius="0.021875mm" width="0.6mm" height="0.35mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.325mm" pcbY="0mm" layer="top" cornerRadius="0.021875mm" width="0.6mm" height="0.35mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.7} anchorAlignment="center" text="D18" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={-0.325} pcbY={0} width={0.6} height={0.35} strokeWidth={0.1} isFilled={false} hasStroke={true}/>
<courtyardrect pcbX={0} pcbY={0} width={1.3} height={0.9} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R78: 2.2k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R78 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R78" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C69: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C69 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="C69" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R86: 33k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R86 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-1} pcbY={0} anchorAlignment="center" text="R86" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// D16: 5.6 V; praline:TSLP-2-19
export const Footprint_D16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.325mm" pcbY="0mm" layer="top" cornerRadius="0.021875mm" width="0.35mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.325mm" pcbY="0mm" layer="top" cornerRadius="0.021875mm" width="0.35mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.6} anchorAlignment="center" text="D16" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={-0.325} pcbY={0} width={0.35} height={0.6} strokeWidth={0.1} isFilled={false} hasStroke={true}/>
<courtyardrect pcbX={0} pcbY={0} width={1.3} height={0.9} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R121: 12k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R121 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R121" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C33: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C33 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C33" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// R24: 1k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R24" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R32: 33; Resistor_SMD:R_0201_0603Metric
export const Footprint_R32 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R32" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C39: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C39 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C39" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C141: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C141 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.68} anchorAlignment="center" text="C141" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// FID1: Fiducial_1mm_Mask2mm; Fiducial:Fiducial_1mm_Mask2mm
export const Footprint_FID1 = () => (<footprint originalLayer="top">
        <smtpad pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>
<fabricationnotepath route={[{ "x": 1, "y": 0 }, { "x": 0.92388, "y": 0.382683 }, { "x": 0.707107, "y": 0.707107 }, { "x": 0.382683, "y": 0.92388 }, { "x": 0, "y": 1 }, { "x": -0.382683, "y": 0.92388 }, { "x": -0.707107, "y": 0.707107 }, { "x": -0.92388, "y": 0.382683 }, { "x": -1, "y": 0 }, { "x": -0.92388, "y": -0.382683 }, { "x": -0.707107, "y": -0.707107 }, { "x": -0.382683, "y": -0.92388 }, { "x": 0, "y": -1 }, { "x": 0.382683, "y": -0.92388 }, { "x": 0.707107, "y": -0.707107 }, { "x": 0.92388, "y": -0.382683 }, { "x": 1, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FID1" font="tscircuit2024" fontSize={0.5}/>
<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// C204: 10 uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C204 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C204" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C91: 1.6 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C91 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C91" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R149: 0; Resistor_SMD:R_0201_0603Metric
export const Footprint_R149 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="R149" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C202: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C202 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.35} anchorAlignment="center" text="C202" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// FB2: Ferrite; Inductor_SMD:L_0603_1608Metric
export const Footprint_FB2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.875mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.875mm" height="0.95mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FB2" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// R123: 10; Resistor_SMD:R_0201_0603Metric
export const Footprint_R123 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R123" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R135: 12k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R135 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.55} anchorAlignment="center" text="R135" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// U34: GT4227; praline:GTIC_UQFN-10_1.4x1.8mm_P0.4mm
export const Footprint_U34 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.5185mm" pcbY="0.2mm" layer="top" cornerRadius="0.028125mm" width="0.663mm" height="0.225mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.5685mm" pcbY="-0.2mm" layer="top" cornerRadius="0.028125mm" width="0.563mm" height="0.225mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.4mm" pcbY="-0.7685mm" layer="top" cornerRadius="0.028125mm" width="0.225mm" height="0.563mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="0mm" pcbY="-0.7685mm" layer="top" cornerRadius="0.028125mm" width="0.225mm" height="0.563mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="0.4mm" pcbY="-0.7685mm" layer="top" cornerRadius="0.028125mm" width="0.225mm" height="0.563mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="0.5685mm" pcbY="-0.2mm" layer="top" cornerRadius="0.028125mm" width="0.563mm" height="0.225mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="0.5685mm" pcbY="0.2mm" layer="top" cornerRadius="0.028125mm" width="0.563mm" height="0.225mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="0.4mm" pcbY="0.7685mm" layer="top" cornerRadius="0.028125mm" width="0.225mm" height="0.563mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="0mm" pcbY="0.7685mm" layer="top" cornerRadius="0.028125mm" width="0.225mm" height="0.563mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="-0.4mm" pcbY="0.7685mm" layer="top" cornerRadius="0.028125mm" width="0.225mm" height="0.563mm" shape="rect"/>





<fabricationnotepath route={[{ "x": -0.7, "y": 0.55 }, { "x": -0.35, "y": 0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.7, "y": -0.9 }, { "x": -0.7, "y": 0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.9 }, { "x": 0.7, "y": 0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.7, "y": 0.9 }, { "x": 0.7, "y": -0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.7, "y": -0.9 }, { "x": -0.7, "y": -0.9 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U34" font="tscircuit2024" fontSize={0.45}/>
<courtyardoutline outline={[{ "x": -1.1, "y": 1.3 }, { "x": -1.1, "y": -1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.1, "y": -1.3 }, { "x": 1.1, "y": -1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.1, "y": 1.3 }, { "x": -1.1, "y": 1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.1, "y": -1.3 }, { "x": 1.1, "y": 1.3 }]} layer="top"/>
      </footprint>);
// C189: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C189 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="C189" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R107: 4.7k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R107 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R107" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C101: 0.7 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C101 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.1} pcbY={-0.45} anchorAlignment="center" text="C101" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C207: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C207 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C207" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// J1: USB_C; praline:USB_C_Receptacle_HRO_TYPE-C-31-M-12
export const Footprint_J1 = () => (<footprint originalLayer="top">
        <hole pcbX="-2.89mm" pcbY="2.6mm" diameter="0.65mm"/>
<hole pcbX="2.89mm" pcbY="2.6mm" diameter="0.65mm"/>
<platedhole portHints={["pin17"]} pcbX="-4.32mm" pcbY="3.13mm" outerHeight="2.1mm" outerWidth="1mm" holeHeight="1.7mm" holeWidth="0.6mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin17"]} pcbX="-4.32mm" pcbY="-1.05mm" outerHeight="1.6mm" outerWidth="1mm" holeHeight="1.2mm" holeWidth="0.6mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin17"]} pcbX="4.32mm" pcbY="3.13mm" outerHeight="2.1mm" outerWidth="1mm" holeHeight="1.7mm" holeWidth="0.6mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin17"]} pcbX="4.32mm" pcbY="-1.05mm" outerHeight="1.6mm" outerWidth="1mm" holeHeight="1.2mm" holeWidth="0.6mm" shape="pill" pcbRotation="0deg"/>
<smtpad portHints={["pin1"]} pcbX="-3.25mm" pcbY="4.045mm" layer="top" cornerRadius="0.075mm" width="1.45mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.45mm" pcbY="4.045mm" layer="top" cornerRadius="0.075mm" width="1.45mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.25mm" pcbY="4.045mm" layer="top" cornerRadius="0.0375mm" width="1.45mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.25mm" pcbY="4.045mm" layer="top" cornerRadius="0.0375mm" width="1.45mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.25mm" pcbY="4.045mm" layer="top" cornerRadius="0.0375mm" width="1.45mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="1.25mm" pcbY="4.045mm" layer="top" cornerRadius="0.0375mm" width="1.45mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="2.45mm" pcbY="4.045mm" layer="top" cornerRadius="0.075mm" width="1.45mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="3.25mm" pcbY="4.045mm" layer="top" cornerRadius="0.075mm" width="1.45mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="3.25mm" pcbY="4.045mm" layer="top" cornerRadius="0.075mm" width="1.45mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="2.45mm" pcbY="4.045mm" layer="top" cornerRadius="0.075mm" width="1.45mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="1.75mm" pcbY="4.045mm" layer="top" cornerRadius="0.0375mm" width="1.45mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="0.75mm" pcbY="4.045mm" layer="top" cornerRadius="0.0375mm" width="1.45mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-0.75mm" pcbY="4.045mm" layer="top" cornerRadius="0.0375mm" width="1.45mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-1.75mm" pcbY="4.045mm" layer="top" cornerRadius="0.0375mm" width="1.45mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-2.45mm" pcbY="4.045mm" layer="top" cornerRadius="0.075mm" width="1.45mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-3.25mm" pcbY="4.045mm" layer="top" cornerRadius="0.075mm" width="1.45mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>




<fabricationnotepath route={[{ "x": 4.47, "y": 3.65 }, { "x": 4.47, "y": -3.65 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -4.47, "y": 3.65 }, { "x": 4.47, "y": 3.65 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -4.47, "y": 3.65 }, { "x": -4.47, "y": -3.65 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -4.47, "y": -3.65 }, { "x": 4.47, "y": -3.65 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="J1" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": 5.32, "y": 5.27 }, { "x": 5.32, "y": -4.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5.32, "y": 5.27 }, { "x": 5.32, "y": 5.27 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5.32, "y": 5.27 }, { "x": -5.32, "y": -4.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5.32, "y": -4.15 }, { "x": 5.32, "y": -4.15 }]} layer="top"/>
      </footprint>);
// U35: GT4227; praline:GTIC_UQFN-10_1.4x1.8mm_P0.4mm
export const Footprint_U35 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.5185mm" pcbY="0.2mm" layer="top" cornerRadius="0.028125mm" width="0.225mm" height="0.663mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.5685mm" pcbY="-0.2mm" layer="top" cornerRadius="0.028125mm" width="0.225mm" height="0.563mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.4mm" pcbY="-0.7685mm" layer="top" cornerRadius="0.028125mm" width="0.563mm" height="0.225mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0mm" pcbY="-0.7685mm" layer="top" cornerRadius="0.028125mm" width="0.563mm" height="0.225mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.4mm" pcbY="-0.7685mm" layer="top" cornerRadius="0.028125mm" width="0.563mm" height="0.225mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.5685mm" pcbY="-0.2mm" layer="top" cornerRadius="0.028125mm" width="0.225mm" height="0.563mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.5685mm" pcbY="0.2mm" layer="top" cornerRadius="0.028125mm" width="0.225mm" height="0.563mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.4mm" pcbY="0.7685mm" layer="top" cornerRadius="0.028125mm" width="0.563mm" height="0.225mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="0mm" pcbY="0.7685mm" layer="top" cornerRadius="0.028125mm" width="0.563mm" height="0.225mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-0.4mm" pcbY="0.7685mm" layer="top" cornerRadius="0.028125mm" width="0.563mm" height="0.225mm" ccwRotation={-90} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": 0.7, "y": 0.9 }, { "x": 0.7, "y": -0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.9 }, { "x": 0.7, "y": 0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.7, "y": 0.55 }, { "x": -0.35, "y": 0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.7, "y": -0.9 }, { "x": -0.7, "y": -0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.7, "y": -0.9 }, { "x": -0.7, "y": 0.55 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U35" font="tscircuit2024" fontSize={0.45}/>
<courtyardoutline outline={[{ "x": 1.1, "y": 1.3 }, { "x": -1.1, "y": 1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.1, "y": 1.3 }, { "x": -1.1, "y": -1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.1, "y": -1.3 }, { "x": 1.1, "y": 1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.1, "y": -1.3 }, { "x": 1.1, "y": -1.3 }]} layer="top"/>
      </footprint>);
// L19: 47 uH; praline:L_Taiyo-Yuden_A251818
export const Footprint_L19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.05mm" pcbY="0mm" layer="top" cornerRadius="0.06mm" width="2mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.05mm" pcbY="0mm" layer="top" cornerRadius="0.06mm" width="2mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1.25, "y": 0.9 }, { "x": 1.25, "y": -0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.25, "y": 0.9 }, { "x": 1.25, "y": 0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.25, "y": -0.9 }, { "x": -1.25, "y": -0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.25, "y": -0.9 }, { "x": -1.25, "y": 0.9 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L19" font="tscircuit2024" fontSize={0.62}/>
<courtyardoutline outline={[{ "x": 1.6, "y": 1.25 }, { "x": 1.6, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.25 }, { "x": 1.6, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.6, "y": -1.25 }, { "x": -1.6, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": -1.25 }, { "x": -1.6, "y": 1.25 }]} layer="top"/>
      </footprint>);
// C117: 10 uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C117 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C117" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C187: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C187 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="C187" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R137: 470; Resistor_SMD:R_0201_0603Metric
export const Footprint_R137 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="R137" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C155: 100 nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C155 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C155" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// R97: 4.7k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R97 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R97" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R142: 33; Resistor_SMD:R_0201_0603Metric
export const Footprint_R142 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.4} anchorAlignment="center" text="R142" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// D13: 0; praline:TSLP-2-19
export const Footprint_D13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.325mm" pcbY="0mm" layer="top" cornerRadius="0.021875mm" width="0.35mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.325mm" pcbY="0mm" layer="top" cornerRadius="0.021875mm" width="0.35mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.7} anchorAlignment="center" text="D13" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={-0.325} pcbY={0} width={0.35} height={0.6} strokeWidth={0.1} isFilled={false} hasStroke={true}/>
<courtyardrect pcbX={0} pcbY={0} width={1.3} height={0.9} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// X1: TCXO; praline:Oscillator_SMD_SeikoEpson_TG2520SMN-xxx-xxxxxx-4Pin_2.5x2.0mm
export const Footprint_X1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="1.05mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.7mm" pcbY="-1.05mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.7mm" pcbY="-1.05mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.7mm" pcbY="1.05mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 1, "y": 1.25 }, { "x": 1, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1.25 }, { "x": 1, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.75 }, { "x": -0.5, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.75 }, { "x": -1, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -1.25 }, { "x": 1, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="X1" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.45, "y": 1.7 }, { "x": 1.45, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.45, "y": 1.7 }, { "x": 1.45, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.45, "y": 1.7 }, { "x": -1.45, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.45, "y": -1.7 }, { "x": 1.45, "y": -1.7 }]} layer="top"/>
      </footprint>);
// H5: MountingHole_Pad; MountingHole:MountingHole_2.2mm_M2_Pad_Via
export const Footprint_H5 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="-1.65mm" pcbY="0mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.166726mm" pcbY="1.166726mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.166726mm" pcbY="-1.166726mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="1.65mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="4.4mm" holeDiameter="2.2mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-1.65mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.166726mm" pcbY="1.166726mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.166726mm" pcbY="-1.166726mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.65mm" pcbY="0mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H5" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={2.45} layer="top"/>
      </footprint>);
// C61: 0.7 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C61 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C61" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// D17: 5.6 V; praline:TSLP-2-19
export const Footprint_D17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.325mm" pcbY="0mm" layer="top" cornerRadius="0.021875mm" width="0.35mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.325mm" pcbY="0mm" layer="top" cornerRadius="0.021875mm" width="0.35mm" height="0.6mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.6} anchorAlignment="center" text="D17" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={-0.325} pcbY={0} width={0.35} height={0.6} strokeWidth={0.1} isFilled={false} hasStroke={true}/>
<courtyardrect pcbX={0} pcbY={0} width={1.3} height={0.9} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R140: 100; Resistor_SMD:R_0201_0603Metric
export const Footprint_R140 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R140" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C181: 10 uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C181 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C181" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
      </footprint>);
// C51: 0.7 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C51 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C51" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// L6: 5.6 nH; Inductor_SMD:L_0201_0603Metric
export const Footprint_L6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="L6" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C107: 180 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C107 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="C107" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R60: 5.1k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R60 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R60" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R35: 1k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R35 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="R35" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C176: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C176 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="C176" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C81: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C81 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C81" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// L21: 100 uH; praline:L_TDK_MLZ2012_h1.25mm
export const Footprint_L21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1.2mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.9mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1.2mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L21" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1.55, "y": -0.85 }, { "x": 1.55, "y": -0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.55, "y": -0.85 }, { "x": 1.55, "y": 0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.55, "y": 0.85 }, { "x": -1.55, "y": -0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.55, "y": 0.85 }, { "x": -1.55, "y": 0.85 }]} layer="top"/>
      </footprint>);
// C180: 100 nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C180 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C180" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// R44: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R44 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R44" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R154: 1k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R154 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.1} pcbY={0.4} anchorAlignment="center" text="R154" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R146: 220; Resistor_SMD:R_0201_0603Metric
export const Footprint_R146 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="R146" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// L27: 100 uH; praline:L_TDK_MLZ2012_h1.25mm
export const Footprint_L27 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1.2mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.9mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1.2mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L27" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1.55, "y": -0.85 }, { "x": 1.55, "y": -0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.55, "y": -0.85 }, { "x": 1.55, "y": 0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.55, "y": 0.85 }, { "x": -1.55, "y": -0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.55, "y": 0.85 }, { "x": -1.55, "y": 0.85 }]} layer="top"/>
      </footprint>);
// D15: Schottky; praline:TSSLP-2-1
export const Footprint_D15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.19mm" pcbY="0mm" layer="top" cornerRadius="0.015mm" width="0.32mm" height="0.24mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.19mm" pcbY="0mm" layer="top" cornerRadius="0.015mm" width="0.32mm" height="0.24mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="D15" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={-0.2} pcbY={0} width={0.3} height={0.2} strokeWidth={0.1} isFilled={false} hasStroke={true}/>
<courtyardrect pcbX={0} pcbY={0} width={0.9} height={0.6} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R53: 1.8k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R53 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R53" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C6: 3.3 nF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="C6" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R150: 0; Resistor_SMD:R_0201_0603Metric
export const Footprint_R150 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="R150" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// U27: 74LVC1G32; Package_TO_SOT_SMD:SOT-353_SC-70-5
export const Footprint_U27 = () => (<footprint originalLayer="top">
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
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U27" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.6, "y": -1.4 }, { "x": 1.6, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": -1.4 }, { "x": 1.6, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.4 }, { "x": 1.6, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.4 }, { "x": -1.6, "y": -1.4 }]} layer="top"/>
      </footprint>);
// C174: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C174 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="C174" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R147: 220; Resistor_SMD:R_0201_0603Metric
export const Footprint_R147 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="R147" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C156: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C156 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C156" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C95: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C95 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.68} anchorAlignment="center" text="C95" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C152: 330 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C152 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="C152" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R156: 330; Resistor_SMD:R_0201_0603Metric
export const Footprint_R156 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="R156" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// FB1: Ferrite; Inductor_SMD:L_0603_1608Metric
export const Footprint_FB1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FB1" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// C201: 10 uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C201 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C201" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
      </footprint>);
// R138: 1k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R138 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-1.15} pcbY={0} anchorAlignment="center" text="R138" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R45: 1.8k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R45 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R45" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// L12: 56 nH; Inductor_SMD:L_0201_0603Metric
export const Footprint_L12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="L12" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C193: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C193 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.55} anchorAlignment="center" text="C193" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R126: 4.7k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R126 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="R126" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C149: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C149 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C149" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R113: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R113 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R113" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// C4: 3.3 nF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="C4" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R112: 330; Resistor_SMD:R_0201_0603Metric
export const Footprint_R112 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="R112" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// H8: MountingHole_Pad; MountingHole:MountingHole_2.2mm_M2_Pad_Via
export const Footprint_H8 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="-1.65mm" pcbY="0mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.166726mm" pcbY="1.166726mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.166726mm" pcbY="-1.166726mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="1.65mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="4.4mm" holeDiameter="2.2mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-1.65mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.166726mm" pcbY="1.166726mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.166726mm" pcbY="-1.166726mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.65mm" pcbY="0mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H8" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={2.45} layer="top"/>
      </footprint>);
// C206: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C206 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="C206" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// L22: 100 uH; praline:L_TDK_MLZ2012_h1.25mm
export const Footprint_L22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1.2mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.9mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1.2mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L22" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1.55, "y": -0.85 }, { "x": 1.55, "y": -0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.55, "y": -0.85 }, { "x": 1.55, "y": 0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.55, "y": 0.85 }, { "x": -1.55, "y": -0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.55, "y": 0.85 }, { "x": -1.55, "y": 0.85 }]} layer="top"/>
      </footprint>);
// C45: 2.2 nF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C45 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.95} pcbY={0} anchorAlignment="center" text="C45" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R38: 180k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R38 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R38" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R108: 33; Resistor_SMD:R_0201_0603Metric
export const Footprint_R108 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="R108" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R127: 100; Resistor_SMD:R_0201_0603Metric
export const Footprint_R127 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R127" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C205: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C205 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="C205" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// U8: GT4227; praline:GTIC_UQFN-10_1.4x1.8mm_P0.4mm
export const Footprint_U8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.5185mm" pcbY="0.2mm" layer="top" cornerRadius="0.028125mm" width="0.663mm" height="0.225mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.5685mm" pcbY="-0.2mm" layer="top" cornerRadius="0.028125mm" width="0.563mm" height="0.225mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.4mm" pcbY="-0.7685mm" layer="top" cornerRadius="0.028125mm" width="0.225mm" height="0.563mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="0mm" pcbY="-0.7685mm" layer="top" cornerRadius="0.028125mm" width="0.225mm" height="0.563mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="0.4mm" pcbY="-0.7685mm" layer="top" cornerRadius="0.028125mm" width="0.225mm" height="0.563mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="0.5685mm" pcbY="-0.2mm" layer="top" cornerRadius="0.028125mm" width="0.563mm" height="0.225mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="0.5685mm" pcbY="0.2mm" layer="top" cornerRadius="0.028125mm" width="0.563mm" height="0.225mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="0.4mm" pcbY="0.7685mm" layer="top" cornerRadius="0.028125mm" width="0.225mm" height="0.563mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="0mm" pcbY="0.7685mm" layer="top" cornerRadius="0.028125mm" width="0.225mm" height="0.563mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="-0.4mm" pcbY="0.7685mm" layer="top" cornerRadius="0.028125mm" width="0.225mm" height="0.563mm" shape="rect"/>





<fabricationnotepath route={[{ "x": -0.7, "y": 0.55 }, { "x": -0.35, "y": 0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.7, "y": -0.9 }, { "x": -0.7, "y": 0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.9 }, { "x": 0.7, "y": 0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.7, "y": 0.9 }, { "x": 0.7, "y": -0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.7, "y": -0.9 }, { "x": -0.7, "y": -0.9 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U8" font="tscircuit2024" fontSize={0.45}/>
<courtyardoutline outline={[{ "x": -1.1, "y": 1.3 }, { "x": -1.1, "y": -1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.1, "y": -1.3 }, { "x": 1.1, "y": -1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.1, "y": 1.3 }, { "x": -1.1, "y": 1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.1, "y": -1.3 }, { "x": 1.1, "y": 1.3 }]} layer="top"/>
      </footprint>);
// R58: 820k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R58 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R58" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R80: 5.1k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R80 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R80" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C198: 0.7 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C198 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="C198" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R109: 4.7k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R109 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R109" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// Q4: PMOS; Package_TO_SOT_SMD:SOT-23-3
export const Footprint_Q4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": -0.8, "y": 1.05 }, { "x": -0.8, "y": -1.45 }, { "x": 0.8, "y": -1.45 }, { "x": 0.8, "y": 1.45 }, { "x": -0.4, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="Q4" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": 2.05, "y": -0.55 }, { "x": 1.05, "y": -0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": 0.55 }, { "x": 2.05, "y": -0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": -1.7 }, { "x": -1.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": -0.55 }, { "x": 1.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": 0.55 }, { "x": 2.05, "y": 0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": 1.7 }, { "x": 1.05, "y": 0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": -1.7 }, { "x": -1.05, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": -1.5 }, { "x": -2.05, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": 1.5 }, { "x": -1.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": 1.7 }, { "x": 1.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": -1.5 }, { "x": -2.05, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": 1.5 }, { "x": -1.05, "y": 1.5 }]} layer="top"/>
      </footprint>);
// R131: 220; Resistor_SMD:R_0201_0603Metric
export const Footprint_R131 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="R131" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C32: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C32 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C32" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// R125: 12k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R125 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R125" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R88: 18.7k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R88 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R88" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R117: 470; Resistor_SMD:R_0201_0603Metric
export const Footprint_R117 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="R117" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R132: 470; Resistor_SMD:R_0201_0603Metric
export const Footprint_R132 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="R132" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// L23: 100 uH; praline:L_TDK_MLZ2012_h1.25mm
export const Footprint_L23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1.2mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.9mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1.2mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L23" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1.55, "y": -0.85 }, { "x": 1.55, "y": -0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.55, "y": -0.85 }, { "x": 1.55, "y": 0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.55, "y": 0.85 }, { "x": -1.55, "y": -0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.55, "y": 0.85 }, { "x": -1.55, "y": 0.85 }]} layer="top"/>
      </footprint>);
// C154: 10 uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C154 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C154" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R130: 220; Resistor_SMD:R_0201_0603Metric
export const Footprint_R130 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="R130" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C47: 68 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C47 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="C47" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C103: 0.7 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C103 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="C103" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// FB4: Ferrite; Inductor_SMD:L_0603_1608Metric
export const Footprint_FB4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FB4" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// R141: 100; Resistor_SMD:R_0201_0603Metric
export const Footprint_R141 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R141" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// H4: MountingHole_Pad; praline:MountingHole_3.2mm_M3_Pad_Via
export const Footprint_H4 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="-2.2mm" pcbY="0mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.556mm" pcbY="1.556mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.556mm" pcbY="-1.556mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="2.2mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="5.6mm" holeDiameter="3.2mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-2.2mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.556mm" pcbY="1.556mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.556mm" pcbY="-1.556mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="2.2mm" pcbY="0mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H4" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.05} layer="top"/>
      </footprint>);
// R114: 1k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R114 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="R114" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// H6: MountingHole_Pad; MountingHole:MountingHole_2.2mm_M2_Pad_Via
export const Footprint_H6 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="-1.65mm" pcbY="0mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.166726mm" pcbY="1.166726mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.166726mm" pcbY="-1.166726mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="1.65mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="4.4mm" holeDiameter="2.2mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-1.65mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.166726mm" pcbY="1.166726mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.166726mm" pcbY="-1.166726mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.65mm" pcbY="0mm" outerDiameter="0.7mm" holeDiameter="0.4mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H6" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={2.45} layer="top"/>
      </footprint>);
// U33: 74HC4051; Package_DFN_QFN:DHVQFN-16-1EP_2.5x3.5mm_P0.5mm_EP1x2mm
export const Footprint_U33 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.25mm" pcbY="1.6875mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.825mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1875mm" pcbY="1.25mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1875mm" pcbY="0.75mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.1875mm" pcbY="0.25mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-1.1875mm" pcbY="-0.25mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-1.1875mm" pcbY="-0.75mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-1.1875mm" pcbY="-1.25mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-0.25mm" pcbY="-1.6875mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.825mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="0.25mm" pcbY="-1.6875mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.825mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="1.1875mm" pcbY="-1.25mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="1.1875mm" pcbY="-0.75mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="1.1875mm" pcbY="-0.25mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="1.1875mm" pcbY="0.25mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="1.1875mm" pcbY="0.75mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="1.1875mm" pcbY="1.25mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="0.25mm" pcbY="1.6875mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.825mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="0mm" pcbY="0mm" layer="top" width="1mm" height="2mm" ccwRotation={-180} shape="rotated_rect"/>








<fabricationnotepath route={[{ "x": -1.25, "y": 1.125 }, { "x": -1.25, "y": -1.75 }, { "x": 1.25, "y": -1.75 }, { "x": 1.25, "y": 1.75 }, { "x": -0.625, "y": 1.75 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U33" font="tscircuit2024" fontSize={0.88}/>
<courtyardoutline outline={[{ "x": 1.85, "y": -1.63 }, { "x": 1.5, "y": -1.63 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 1.63 }, { "x": 1.85, "y": -1.63 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.5, "y": -2 }, { "x": 0.63, "y": -2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.5, "y": -1.63 }, { "x": 1.5, "y": -2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.5, "y": 1.63 }, { "x": 1.85, "y": 1.63 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.5, "y": 2 }, { "x": 1.5, "y": 1.63 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.63, "y": -2.35 }, { "x": -0.63, "y": -2.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.63, "y": -2 }, { "x": 0.63, "y": -2.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.63, "y": 2 }, { "x": 1.5, "y": 2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.63, "y": 2.35 }, { "x": 0.63, "y": 2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.63, "y": -2.35 }, { "x": -0.63, "y": -2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.63, "y": -2 }, { "x": -1.5, "y": -2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.63, "y": 2 }, { "x": -0.63, "y": 2.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.63, "y": 2.35 }, { "x": 0.63, "y": 2.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.5, "y": -2 }, { "x": -1.5, "y": -1.63 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.5, "y": -1.63 }, { "x": -1.85, "y": -1.63 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.5, "y": 1.63 }, { "x": -1.5, "y": 2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.5, "y": 2 }, { "x": -0.63, "y": 2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -1.63 }, { "x": -1.85, "y": 1.63 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": 1.63 }, { "x": -1.5, "y": 1.63 }]} layer="top"/>
      </footprint>);
// R134: 180; Resistor_SMD:R_0201_0603Metric
export const Footprint_R134 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.35} anchorAlignment="center" text="R134" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C140: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C140 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C140" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// R77: 2.2k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R77 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.68} anchorAlignment="center" text="R77" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// Q10: 2NPN; Package_TO_SOT_SMD:SOT-363_SC-70-6
export const Footprint_Q10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.95mm" pcbY="-0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.95mm" pcbY="-0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.95mm" pcbY="0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.675, "y": -1.1 }, { "x": -0.675, "y": -1.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.675, "y": 1.1 }, { "x": 0.675, "y": -1.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.675, "y": 1.1 }, { "x": -0.175, "y": 1.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.175, "y": 1.1 }, { "x": -0.675, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.675, "y": 0.6 }, { "x": -0.675, "y": -1.1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="Q10" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.6, "y": -1.4 }, { "x": 1.6, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": -1.4 }, { "x": 1.6, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.4 }, { "x": 1.6, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.4 }, { "x": -1.6, "y": -1.4 }]} layer="top"/>
      </footprint>);
// C208: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C208 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="C208" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R43: 220; Resistor_SMD:R_0201_0603Metric
export const Footprint_R43 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.38} anchorAlignment="center" text="R43" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R57: 33k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R57 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="R57" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// U36: 74LVC1G86; Package_TO_SOT_SMD:SOT-353_SC-70-5
export const Footprint_U36 = () => (<footprint originalLayer="top">
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
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U36" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.6, "y": -1.4 }, { "x": 1.6, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": -1.4 }, { "x": 1.6, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.4 }, { "x": 1.6, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.4 }, { "x": -1.6, "y": -1.4 }]} layer="top"/>
      </footprint>);
// C151: 330 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C151 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="C151" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C192: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C192 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.35} anchorAlignment="center" text="C192" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R119: DNP; Resistor_SMD:R_0201_0603Metric
export const Footprint_R119 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="R119" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R98: 1k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R98 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="R98" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R145: 100; Resistor_SMD:R_0201_0603Metric
export const Footprint_R145 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="R145" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R143: 100; Resistor_SMD:R_0201_0603Metric
export const Footprint_R143 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="R143" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// U30: 74LVC1G3157; Package_TO_SOT_SMD:SOT-363_SC-70-6
export const Footprint_U30 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.95mm" pcbY="-0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="0.95mm" pcbY="-0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="0.95mm" pcbY="0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.675, "y": 0.6 }, { "x": -0.675, "y": -1.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.175, "y": 1.1 }, { "x": -0.675, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.675, "y": 1.1 }, { "x": -0.175, "y": 1.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.675, "y": 1.1 }, { "x": 0.675, "y": -1.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.675, "y": -1.1 }, { "x": -0.675, "y": -1.1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U30" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.4 }, { "x": -1.6, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.4 }, { "x": 1.6, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": -1.4 }, { "x": 1.6, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.6, "y": -1.4 }, { "x": 1.6, "y": 1.4 }]} layer="top"/>
      </footprint>);
// C191: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C191 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="C191" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C78: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C78 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.4} anchorAlignment="center" text="C78" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R99: 4.7k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R99 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="R99" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// L34: 33 nH; Inductor_SMD:L_0201_0603Metric
export const Footprint_L34 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={1} pcbY={0} anchorAlignment="center" text="L34" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C150: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C150 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.01} pcbY={0.57} anchorAlignment="center" text="C150" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// L24: 100 uH; praline:L_TDK_MLZ2012_h1.25mm
export const Footprint_L24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1.2mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.9mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1.2mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L24" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1.55, "y": -0.85 }, { "x": 1.55, "y": -0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.55, "y": -0.85 }, { "x": 1.55, "y": 0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.55, "y": 0.85 }, { "x": -1.55, "y": -0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.55, "y": 0.85 }, { "x": -1.55, "y": 0.85 }]} layer="top"/>
      </footprint>);
// C182: 10 uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C182 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C182" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
      </footprint>);
// C211: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C211 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="C211" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C162: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C162 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C162" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// R90: 18.7k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R90 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R90" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// Q7: 2NPN; Package_TO_SOT_SMD:SOT-363_SC-70-6
export const Footprint_Q7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.95mm" pcbY="-0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.95mm" pcbY="-0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.95mm" pcbY="0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.675, "y": -1.1 }, { "x": -0.675, "y": -1.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.675, "y": 1.1 }, { "x": 0.675, "y": -1.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.675, "y": 1.1 }, { "x": -0.175, "y": 1.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.175, "y": 1.1 }, { "x": -0.675, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.675, "y": 0.6 }, { "x": -0.675, "y": -1.1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="Q7" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.6, "y": -1.4 }, { "x": 1.6, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": -1.4 }, { "x": 1.6, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.4 }, { "x": 1.6, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.4 }, { "x": -1.6, "y": -1.4 }]} layer="top"/>
      </footprint>);
// R139: 33; Resistor_SMD:R_0201_0603Metric
export const Footprint_R139 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.55} anchorAlignment="center" text="R139" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C172: 10 uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C172 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C172" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
      </footprint>);
// L26: 100 uH; praline:L_TDK_MLZ2012_h1.25mm
export const Footprint_L26 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1.2mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.9mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1.2mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L26" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1.55, "y": -0.85 }, { "x": 1.55, "y": -0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.55, "y": -0.85 }, { "x": 1.55, "y": 0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.55, "y": 0.85 }, { "x": -1.55, "y": -0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.55, "y": 0.85 }, { "x": -1.55, "y": 0.85 }]} layer="top"/>
      </footprint>);
// C43: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C43 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C43" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C147: 22 uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C147 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C147" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
      </footprint>);
// D14: PIN; praline:TSLP-2-19
export const Footprint_D14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.325mm" pcbY="0mm" layer="top" cornerRadius="0.021875mm" width="0.6mm" height="0.35mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.325mm" pcbY="0mm" layer="top" cornerRadius="0.021875mm" width="0.6mm" height="0.35mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.6} anchorAlignment="center" text="D14" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={-0.325} pcbY={0} width={0.6} height={0.35} strokeWidth={0.1} isFilled={false} hasStroke={true}/>
<courtyardrect pcbX={0} pcbY={0} width={1.3} height={0.9} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R148: 100; Resistor_SMD:R_0201_0603Metric
export const Footprint_R148 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="R148" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R41: 33; Resistor_SMD:R_0201_0603Metric
export const Footprint_R41 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R41" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C175: 10 uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C175 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C175" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
      </footprint>);
// L15: 4.7 nH; Inductor_SMD:L_0201_0603Metric
export const Footprint_L15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="L15" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R79: 5.1k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R79 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R79" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// C2: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C2" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R155: 10; Resistor_SMD:R_0201_0603Metric
export const Footprint_R155 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R155" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C169: 10 uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C169 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C169" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R12: 33; Resistor_SMD:R_0201_0603Metric
export const Footprint_R12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R12" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R42: 220; Resistor_SMD:R_0201_0603Metric
export const Footprint_R42 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="R42" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R81: 33k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R81 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={1} pcbY={0} anchorAlignment="center" text="R81" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// RN7: 100; Resistor_SMD:R_Array_Convex_4x0402
export const Footprint_RN7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.5mm" pcbY="0.75mm" layer="top" width="0.4mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.5mm" pcbY="0.25mm" layer="top" width="0.3mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.5mm" pcbY="-0.25mm" layer="top" width="0.3mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.5mm" pcbY="-0.75mm" layer="top" width="0.4mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.5mm" pcbY="-0.75mm" layer="top" width="0.4mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.5mm" pcbY="-0.25mm" layer="top" width="0.3mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.5mm" pcbY="0.25mm" layer="top" width="0.3mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.5mm" pcbY="0.75mm" layer="top" width="0.4mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -1 }, { "x": -0.5, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -1 }, { "x": -0.5, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": 0.5, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 1 }, { "x": 0.5, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="RN7" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
      </footprint>);
// H1: MountingHole_Pad; praline:MountingHole_3.2mm_M3_Pad_Via
export const Footprint_H1 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="-2.2mm" pcbY="0mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.556mm" pcbY="1.556mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.556mm" pcbY="-1.556mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="2.2mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="5.6mm" holeDiameter="3.2mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-2.2mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.556mm" pcbY="1.556mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.556mm" pcbY="-1.556mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="2.2mm" pcbY="0mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H1" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.05} layer="top"/>
      </footprint>);
// L30: 56 nH; Inductor_SMD:L_0201_0603Metric
export const Footprint_L30 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.36} anchorAlignment="center" text="L30" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R115: 470; Resistor_SMD:R_0201_0603Metric
export const Footprint_R115 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.4} anchorAlignment="center" text="R115" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// RN8: 100; Resistor_SMD:R_Array_Convex_4x0402
export const Footprint_RN8 = () => (<footprint originalLayer="top">
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
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="RN8" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1, "y": 1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": -1, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1, "y": -1.25 }, { "x": 1, "y": 1.25 }]} layer="top"/>
      </footprint>);
// C173: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C173 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C173" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C112: 100 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C112 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C112" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// FL2: BPF; praline:Filter_Pulse_BPF1608LM09R5000A
export const Footprint_FL2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.8625mm" pcbY="0mm" layer="top" cornerRadius="0.025mm" width="0.425mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0mm" pcbY="0mm" layer="bottom" width="1.6mm" height="0.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0mm" pcbY="-0.4625mm" layer="top" cornerRadius="0.026563mm" width="0.6mm" height="0.425mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.8625mm" pcbY="0mm" layer="top" cornerRadius="0.025mm" width="0.425mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0mm" pcbY="0.4625mm" layer="top" cornerRadius="0.026563mm" width="0.6mm" height="0.425mm" ccwRotation={-180} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.4, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.4 }, { "x": -0.8, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.949999} anchorAlignment="center" text="FL2" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.33, "y": 0.45 }, { "x": 1.33, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": -0.45 }, { "x": 1.33, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": -0.45 }, { "x": 1.05, "y": -0.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": 0.45 }, { "x": 1.33, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": 0.65 }, { "x": 1.05, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.56, "y": -0.65 }, { "x": 1.05, "y": -0.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.56, "y": -0.65 }, { "x": 0.56, "y": -0.93 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.56, "y": 0.65 }, { "x": 1.05, "y": 0.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.56, "y": 0.93 }, { "x": 0.56, "y": 0.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.56, "y": -0.93 }, { "x": 0.56, "y": -0.93 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.56, "y": -0.65 }, { "x": -0.56, "y": -0.93 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.56, "y": 0.93 }, { "x": 0.56, "y": 0.93 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.56, "y": 0.93 }, { "x": -0.56, "y": 0.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": -0.65 }, { "x": -0.56, "y": -0.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": -0.45 }, { "x": -1.05, "y": -0.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": -0.45 }, { "x": -1.33, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": 0.65 }, { "x": -0.56, "y": 0.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": 0.65 }, { "x": -1.05, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.33, "y": 0.45 }, { "x": -1.05, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.33, "y": 0.45 }, { "x": -1.33, "y": -0.45 }]} layer="top"/>
      </footprint>);
// C44: 100 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C44 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.95} pcbY={0} anchorAlignment="center" text="C44" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// C54: 1.8 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C54 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.9} pcbY={0} anchorAlignment="center" text="C54" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C183: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C183 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="C183" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C163: 10 uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C163 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C163" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
      </footprint>);
// L8: 4.7 nH; Inductor_SMD:L_0201_0603Metric
export const Footprint_L8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.45} anchorAlignment="center" text="L8" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R95: 4.7k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R95 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.5} anchorAlignment="center" text="R95" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R103: 4.7k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R103 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.9} pcbY={0} anchorAlignment="center" text="R103" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// R101: 100k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R101 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R101" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// U32: LDO_2V5; Package_TO_SOT_SMD:SOT-23-3
export const Footprint_U32 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": -0.8, "y": 1.05 }, { "x": -0.8, "y": -1.45 }, { "x": 0.8, "y": -1.45 }, { "x": 0.8, "y": 1.45 }, { "x": -0.4, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U32" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": 2.05, "y": -0.55 }, { "x": 1.05, "y": -0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": 0.55 }, { "x": 2.05, "y": -0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": -1.7 }, { "x": -1.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": -0.55 }, { "x": 1.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": 0.55 }, { "x": 2.05, "y": 0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": 1.7 }, { "x": 1.05, "y": 0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": -1.7 }, { "x": -1.05, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": -1.5 }, { "x": -2.05, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": 1.5 }, { "x": -1.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": 1.7 }, { "x": 1.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": -1.5 }, { "x": -2.05, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": 1.5 }, { "x": -1.05, "y": 1.5 }]} layer="top"/>
      </footprint>);
// R144: 1k; Resistor_SMD:R_0201_0603Metric
export const Footprint_R144 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.35} anchorAlignment="center" text="R144" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// FID3: Fiducial_1mm_Mask2mm; Fiducial:Fiducial_1mm_Mask2mm
export const Footprint_FID3 = () => (<footprint originalLayer="top">
        <smtpad pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>
<fabricationnotepath route={[{ "x": 1, "y": 0 }, { "x": 0.92388, "y": 0.382683 }, { "x": 0.707107, "y": 0.707107 }, { "x": 0.382683, "y": 0.92388 }, { "x": 0, "y": 1 }, { "x": -0.382683, "y": 0.92388 }, { "x": -0.707107, "y": 0.707107 }, { "x": -0.92388, "y": 0.382683 }, { "x": -1, "y": 0 }, { "x": -0.92388, "y": -0.382683 }, { "x": -0.707107, "y": -0.707107 }, { "x": -0.382683, "y": -0.92388 }, { "x": 0, "y": -1 }, { "x": 0.382683, "y": -0.92388 }, { "x": 0.707107, "y": -0.707107 }, { "x": 0.92388, "y": -0.382683 }, { "x": 1, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FID3" font="tscircuit2024" fontSize={0.5}/>
<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// D11: 6.2 V; praline:TSLP-2-19
export const Footprint_D11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.325mm" pcbY="0mm" layer="top" cornerRadius="0.021875mm" width="0.35mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.325mm" pcbY="0mm" layer="top" cornerRadius="0.021875mm" width="0.35mm" height="0.6mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.7} anchorAlignment="center" text="D11" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={-0.325} pcbY={0} width={0.35} height={0.6} strokeWidth={0.1} isFilled={false} hasStroke={true}/>
<courtyardrect pcbX={0} pcbY={0} width={1.3} height={0.9} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R82: 18k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R82 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R82" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R118: DNP; Resistor_SMD:R_0201_0603Metric
export const Footprint_R118 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="R118" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
      </footprint>);
// U26: 74HC00; Package_DFN_QFN:DHVQFN-14-1EP_2.5x3mm_P0.5mm_EP1x1.5mm
export const Footprint_U26 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.25mm" pcbY="1.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.825mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1875mm" pcbY="1mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1875mm" pcbY="0.5mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.1875mm" pcbY="0mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-1.1875mm" pcbY="-0.5mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="-1.1875mm" pcbY="-1mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="-0.25mm" pcbY="-1.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.825mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="0.25mm" pcbY="-1.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.825mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="1.1875mm" pcbY="-1mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="1.1875mm" pcbY="-0.5mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin11"]} pcbX="1.1875mm" pcbY="0mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin12"]} pcbX="1.1875mm" pcbY="0.5mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin13"]} pcbX="1.1875mm" pcbY="1mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin14"]} pcbX="0.25mm" pcbY="1.4375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.825mm" shape="rect"/>
<smtpad portHints={["pin15"]} pcbX="0mm" pcbY="0mm" layer="top" width="1mm" height="1.5mm" shape="rect"/>








<fabricationnotepath route={[{ "x": -1.25, "y": 0.875 }, { "x": -1.25, "y": -1.5 }, { "x": 1.25, "y": -1.5 }, { "x": 1.25, "y": 1.5 }, { "x": -0.625, "y": 1.5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U26" font="tscircuit2024" fontSize={0.75}/>
<courtyardoutline outline={[{ "x": -1.85, "y": 1.38 }, { "x": -1.5, "y": 1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -1.38 }, { "x": -1.85, "y": 1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.5, "y": 1.75 }, { "x": -0.63, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.5, "y": 1.38 }, { "x": -1.5, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.5, "y": -1.38 }, { "x": -1.85, "y": -1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.5, "y": -1.75 }, { "x": -1.5, "y": -1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.63, "y": 2.1 }, { "x": 0.63, "y": 2.1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.63, "y": 1.75 }, { "x": -0.63, "y": 2.1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.63, "y": -1.75 }, { "x": -1.5, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.63, "y": -2.1 }, { "x": -0.63, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.63, "y": 2.1 }, { "x": 0.63, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.63, "y": 1.75 }, { "x": 1.5, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.63, "y": -1.75 }, { "x": 0.63, "y": -2.1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.63, "y": -2.1 }, { "x": -0.63, "y": -2.1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.5, "y": 1.75 }, { "x": 1.5, "y": 1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.5, "y": 1.38 }, { "x": 1.85, "y": 1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.5, "y": -1.38 }, { "x": 1.5, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.5, "y": -1.75 }, { "x": 0.63, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 1.38 }, { "x": 1.85, "y": -1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -1.38 }, { "x": 1.5, "y": -1.38 }]} layer="top"/>
      </footprint>);
// R124: 220; Resistor_SMD:R_0201_0603Metric
export const Footprint_R124 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.46mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.38} anchorAlignment="center" text="R124" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// C209: 0.3 pF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C209 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.45} anchorAlignment="center" text="C209" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// FID2: Fiducial_1mm_Mask2mm; Fiducial:Fiducial_1mm_Mask2mm
export const Footprint_FID2 = () => (<footprint originalLayer="top">
        <smtpad pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>
<fabricationnotepath route={[{ "x": 1, "y": 0 }, { "x": 0.92388, "y": 0.382683 }, { "x": 0.707107, "y": 0.707107 }, { "x": 0.382683, "y": 0.92388 }, { "x": 0, "y": 1 }, { "x": -0.382683, "y": 0.92388 }, { "x": -0.707107, "y": 0.707107 }, { "x": -0.92388, "y": 0.382683 }, { "x": -1, "y": 0 }, { "x": -0.92388, "y": -0.382683 }, { "x": -0.707107, "y": -0.707107 }, { "x": -0.382683, "y": -0.92388 }, { "x": 0, "y": -1 }, { "x": 0.382683, "y": -0.92388 }, { "x": 0.707107, "y": -0.707107 }, { "x": 0.92388, "y": -0.382683 }, { "x": 1, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FID2" font="tscircuit2024" fontSize={0.5}/>
<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// FB7: Ferrite; Inductor_SMD:L_0603_1608Metric
export const Footprint_FB7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FB7" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// C165: 10 uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C165 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C165" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C194: 1 uF; Capacitor_SMD:C_0201_0603Metric
export const Footprint_C194 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.5} anchorAlignment="center" text="C194" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// L5: 100 uH; praline:L_TDK_MLZ2012_h1.25mm
export const Footprint_L5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.9mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L5" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.55, "y": -0.85 }, { "x": 1.55, "y": 0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.55, "y": 0.85 }, { "x": -1.55, "y": 0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.55, "y": -0.85 }, { "x": 1.55, "y": -0.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.55, "y": 0.85 }, { "x": -1.55, "y": -0.85 }]} layer="top"/>
      </footprint>);
// U25: TRF37C73; Package_SON:WSON-8-1EP_2x2mm_P0.5mm_EP0.9x1.6mm
export const Footprint_U25 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0.75mm" layer="top" cornerRadius="0.03125mm" width="0.5mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.95mm" pcbY="0.25mm" layer="top" cornerRadius="0.03125mm" width="0.5mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.95mm" pcbY="-0.25mm" layer="top" cornerRadius="0.03125mm" width="0.5mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.95mm" pcbY="-0.75mm" layer="top" cornerRadius="0.03125mm" width="0.5mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.95mm" pcbY="-0.75mm" layer="top" cornerRadius="0.03125mm" width="0.5mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.95mm" pcbY="-0.25mm" layer="top" cornerRadius="0.03125mm" width="0.5mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.95mm" pcbY="0.25mm" layer="top" cornerRadius="0.03125mm" width="0.5mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.95mm" pcbY="0.75mm" layer="top" cornerRadius="0.03125mm" width="0.5mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="0mm" pcbY="0mm" layer="top" width="0.9mm" height="1.6mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 1, "y": -1 }, { "x": -1, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 1 }, { "x": 1, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": 1, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": -1, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -1 }, { "x": -1, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U25" font="tscircuit2024" fontSize={0.7}/>
<courtyardoutline outline={[{ "x": 1.6, "y": 1.25 }, { "x": 1.6, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": -1.25 }, { "x": 1.6, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.25 }, { "x": 1.6, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.25 }, { "x": -1.6, "y": -1.25 }]} layer="top"/>
      </footprint>);
// R84: 33; Resistor_SMD:R_0201_0603Metric
export const Footprint_R84 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.32mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.46mm" height="0.4mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.15 }, { "x": 0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.15 }, { "x": -0.3, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": 0.15 }, { "x": 0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3, "y": -0.15 }, { "x": -0.3, "y": -0.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.95} pcbY={0} anchorAlignment="center" text="R84" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.7, "y": 0.35 }, { "x": 0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.7, "y": -0.35 }, { "x": -0.7, "y": 0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.35 }, { "x": 0.7, "y": -0.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.35 }, { "x": -0.7, "y": -0.35 }]} layer="top"/>
      </footprint>);
// R40: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R40 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R40" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R39: 37.4k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R39 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R39" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C40: 1 uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C40 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C40" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// TP54: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP54 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP54" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP16: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP16 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP16" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP21: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP21 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP21" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP36: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP36 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={1.6} anchorAlignment="center" text="TP36" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP2: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP2 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP2" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP1: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP1 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={2.3} pcbY={0} anchorAlignment="center" text="TP1" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP60: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP60 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={1.8} anchorAlignment="center" text="TP60" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP58: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP58 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={1.7} anchorAlignment="center" text="TP58" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP12: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP12 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={1.5} anchorAlignment="center" text="TP12" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP65: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP65 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP65" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP10: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP10 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP10" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP22: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP22 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={-2.8} pcbY={-0.1} anchorAlignment="center" text="TP22" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP57: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP57 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={1.7} anchorAlignment="center" text="TP57" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP51: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP51 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP51" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP38: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP38 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP38" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP19: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP19 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP19" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP59: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP59 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={-2.7} pcbY={0.1} anchorAlignment="center" text="TP59" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP31: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP31 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP31" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP45: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP45 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP45" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP23: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP23 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP23" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP4: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP4 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP4" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP49: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP49 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP49" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP13: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP13 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={1.5} anchorAlignment="center" text="TP13" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP41: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP41 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP41" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP7: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP7 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP7" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP3: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP3 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP3" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP18: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP18 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP18" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP34: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP34 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP34" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP32: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP32 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP32" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP30: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP30 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP30" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP20: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP20 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP20" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP9: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP9 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP9" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP61: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP61 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP61" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP24: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP24 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={-2.75} pcbY={0} anchorAlignment="center" text="TP24" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP17: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP17 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP17" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP39: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP39 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.7} anchorAlignment="center" text="TP39" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP8: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP8 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={1.6} anchorAlignment="center" text="TP8" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP48: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP48 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP48" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP27: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP27 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP27" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP66: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP66 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP66" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP15: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP15 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP15" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP56: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP56 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP56" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP33: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP33 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP33" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP37: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP37 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP37" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP50: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP50 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0.05} pcbY={1.55} anchorAlignment="center" text="TP50" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP11: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP11 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP11" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP42: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP42 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP42" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP14: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP14 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={1.5} anchorAlignment="center" text="TP14" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP52: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP52 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP52" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP63: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP63 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0.1} pcbY={1.5} anchorAlignment="center" text="TP63" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP35: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP35 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP35" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP46: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP46 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP46" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP43: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP43 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP43" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP53: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP53 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP53" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP26: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP26 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP26" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP28: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP28 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP28" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP47: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP47 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP47" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP62: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP62 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP62" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP64: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP64 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP64" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP55: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP55 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP55" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP40: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP40 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP40" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP29: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP29 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP29" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP5: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP5 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={1.6} anchorAlignment="center" text="TP5" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP44: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP44 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={1.5} anchorAlignment="center" text="TP44" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP25: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP25 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={1.55} anchorAlignment="center" text="TP25" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
