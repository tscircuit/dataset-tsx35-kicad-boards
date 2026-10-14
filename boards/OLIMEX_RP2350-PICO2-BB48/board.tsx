import { KiCadSchematic, KiCadNet } from './schematic'
// RP2350-PICO2-BB48
// Source: https://github.com/OLIMEX/RP2350-PICO2-BB48
// Commit: 74b030363ca03eea5bfa6dac59cbcd9e4277e910; license: MIT. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import { Footprint_FID1, Footprint_LED1, Footprint_FID3, Footprint_FID2, Footprint_D1, Footprint_R18, Footprint_R17, Footprint_RST1, Footprint_R5, Footprint_R12, Footprint_pUEXT1, Footprint_BOOT1, Footprint_R15, Footprint_USB_C1, Footprint_R13, Footprint_C14, Footprint_SWD1, Footprint_L1, Footprint_R2, Footprint_Q1, Footprint_C21, Footprint_FB1, Footprint_Logo_OLIMEX_80, Footprint_C22, Footprint_C2, Footprint_U3, Footprint_L2, Footprint_U2, Footprint_R3, Footprint_C20, Footprint_C18, Footprint_C24, Footprint_R11, Footprint_R1, Footprint_C1, Footprint_U1, Footprint_R9, Footprint_C25, Footprint_R14, Footprint_QWST1, Footprint_C19, Footprint_C6, Footprint_C5, Footprint_R10, Footprint_R7, Footprint_R6, Footprint_C10, Footprint_C4, Footprint_R20, Footprint_Sign_PB_Free, Footprint_C17, Footprint_C9, Footprint_C16, Footprint_C11, Footprint_U4, Footprint_U5, Footprint_FID4, Footprint_C3, Footprint_C8, Footprint_C26, Footprint_Sign_Antistatic_Small, Footprint_R25, Footprint_R16, Footprint_FID6, Footprint_R23, Footprint_C12, Footprint_C13, Footprint_EXT2, Footprint_FID5, Footprint_R21, Footprint_EXT1, Footprint_R22, Footprint_C7, Footprint_Logo_OLIMEX_80_Bot, Footprint_R19, Footprint_Sign_OSHW_7_3x6_0mm, Footprint_L3, Footprint_Sign_CE, Footprint_R24, Footprint_R27, Footprint_Sign_RecycleBin_1, Footprint_C27, Footprint_C15, Footprint_MICRO_SD1, Footprint_R26 } from './footprints';
export default function Board({ routingDisabled = false }: {
    routingDisabled?: boolean;
} = {}) {
    return (<board width={18.30000000000001} height={69} thickness={1.578} layers={4} outline={[{ "x": -9.150000000000006, "y": -34.5 }, { "x": -9.150000000000006, "y": 34.5 }, { "x": 9.150000000000006, "y": 34.5 }, { "x": 9.150000000000006, "y": -34.5 }, { "x": -9.150000000000006, "y": -34.5 }]} routingDisabled={routingDisabled} routeRemaining={true} schAutoLayoutEnabled={false} schMaxTraceDistance={1} schTraceAutoLabelEnabled={true}>
    {/* Original KiCad copper zones, clipped to the board, in ascending priority. */}
    <copperpour name="GND_top_2_0" connectsTo="net.GND" layer="top" clearance={0.1778} useThermalReliefs coveredWithSolderMask />
    <copperpour name="GND_inner1_2_0" connectsTo="net.GND" layer="inner1" clearance={0.1778} useThermalReliefs unbroken coveredWithSolderMask />
    <copperpour name="GND_bottom_2_0" connectsTo="net.GND" layer="bottom" clearance={0.1778} useThermalReliefs coveredWithSolderMask />
    <copperpour name="_3_3V_inner2_3_0" connectsTo="net._3_3V" layer="inner2" clearance={0.2} useThermalReliefs unbroken coveredWithSolderMask />
    <copperpour name="VBUS_top_4_0" connectsTo="net.VBUS" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":8.071703,"y":32.198},{"x":7.655707,"y":33.087707},{"x":6.766,"y":33.408535},{"x":6.032172,"y":31.928593},{"x":6.750593,"y":31.210172}]} />
    <copperpour name="_GPIO21_inner1_5_0" connectsTo="net._GPIO21" layer="inner1" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":-6.282863,"y":-26.660666},{"x":-6.372666,"y":-26.570863},{"x":-7.925206,"y":-27.051671},{"x":-7.585707,"y":-27.873707},{"x":-6.763671,"y":-28.213206}]} />
    <copperpour name="_GPIO47_inner2_6_0" connectsTo="net._GPIO47" layer="inner2" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":7.655707,"y":-32.953707},{"x":7.995206,"y":-32.131671},{"x":6.442666,"y":-31.650863},{"x":6.352863,"y":-31.740666},{"x":6.833671,"y":-33.293206}]} />
    <copperpour name="VSYS_bottom_7_0" connectsTo="net.VSYS" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":7.995206,"y":29.725671},{"x":7.655707,"y":30.547707},{"x":6.833671,"y":30.887206},{"x":6.038554,"y":29.648975},{"x":6.756975,"y":28.930554}]} />
    <copperpour name="VBUS_top_8_0" connectsTo="net.VBUS" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":4.862,"y":24.792},{"x":4.734193,"y":25.792},{"x":3.161,"y":26.102},{"x":3.161,"y":25.086},{"x":4.011,"y":24.253496}]} />
    <copperpour name="_GPIO23_inner1_9_0" connectsTo="net._GPIO23" layer="inner1" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":-6.282863,"y":-31.740666},{"x":-6.372666,"y":-31.650863},{"x":-7.925206,"y":-32.131671},{"x":-7.585707,"y":-32.953707},{"x":-6.763671,"y":-33.293206}]} />
    <copperpour name="_GPIO45_inner2_10_0" connectsTo="net._GPIO45" layer="inner2" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":7.655,"y":-27.874},{"x":7.995206,"y":-27.051671},{"x":6.5755,"y":-26.568446},{"x":6.4485,"y":-26.568446},{"x":6.833671,"y":-28.213206}]} />
    <copperpour name="_GPIO24_SPI1_RX_SD_DAT0_bottom_11_0" connectsTo="net._GPIO24_SPI1_RX_SD_DAT0" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":7.995206,"y":24.645671},{"x":7.655707,"y":25.467707},{"x":6.833671,"y":25.807206},{"x":6.352863,"y":24.254666},{"x":6.442666,"y":24.164863}]} />
    <copperpour name="_SWDIO_top_12_0" connectsTo="net._SWDIO" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.115707,"y":-7.560707},{"x":5.461939,"y":-6.671},{"x":3.642284,"y":-6.117481},{"x":3.552481,"y":-6.207284},{"x":4.226,"y":-7.949892}]} />
    <copperpour name="_GPIO18_inner1_13_0" connectsTo="net._GPIO18" layer="inner1" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":-6.282863,"y":-19.040666},{"x":-6.372666,"y":-18.950863},{"x":-7.925206,"y":-19.431671},{"x":-7.585707,"y":-20.253707},{"x":-6.763671,"y":-20.593206}]} />
    <copperpour name="_GPIO31_inner2_14_0" connectsTo="net._GPIO31" layer="inner2" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":7.655707,"y":7.687707},{"x":7.026382,"y":8.315618},{"x":6.113552,"y":6.997355},{"x":6.203355,"y":6.907552},{"x":7.655,"y":6.798}]} />
    <copperpour name="_GPIO27_bottom_15_0" connectsTo="net._GPIO27" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":7.995206,"y":17.025671},{"x":7.655707,"y":17.847707},{"x":6.833671,"y":18.187206},{"x":6.352863,"y":16.634666},{"x":6.442666,"y":16.544863}]} />
    <copperpour name="VSYS_top_16_0" connectsTo="net.VSYS" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.711,"y":20.792},{"x":5.623,"y":21.642},{"x":4.607,"y":21.642},{"x":4.140395,"y":20.792},{"x":4.861,"y":19.791}]} />
    <copperpour name="_GPIO42_inner1_17_0" connectsTo="net._GPIO42" layer="inner1" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":7.655,"y":-20.254},{"x":7.995206,"y":-19.431671},{"x":6.5755,"y":-18.948446},{"x":6.4485,"y":-18.948446},{"x":6.833671,"y":-20.593206}]} />
    <copperpour name="_GPIO46_inner2_18_0" connectsTo="net._GPIO46" layer="inner2" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":8.544,"y":-30.413},{"x":8.798,"y":-29.082143},{"x":8.671,"y":-29.082143},{"x":7.314794,"y":-29.591671},{"x":7.655,"y":-30.414}]} />
    <copperpour name="_GPIO26_bottom_19_0" connectsTo="net._GPIO26" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":7.995206,"y":19.565671},{"x":7.655707,"y":20.387707},{"x":6.833671,"y":20.727206},{"x":6.352863,"y":19.174666},{"x":6.442666,"y":19.084863}]} />
    <copperpour name="VSYS_top_20_0" connectsTo="net.VSYS" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":4.861707,"y":19.791293},{"x":4.011,"y":20.792},{"x":3.534562,"y":20.653858},{"x":2.816142,"y":19.935438},{"x":4.011,"y":19.158161}]} />
    <copperpour name="_GPIO16_inner1_21_0" connectsTo="net._GPIO16" layer="inner1" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":-6.3785,"y":-13.868446},{"x":-6.5055,"y":-13.868446},{"x":-7.925206,"y":-14.351671},{"x":-7.585,"y":-15.174},{"x":-6.763671,"y":-15.513206}]} />
    <copperpour name="__1V1_inner2_22_0" connectsTo="net.__1V1" layer="inner2" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":-3.202,"y":1.083},{"x":-3.202,"y":1.591},{"x":-3.902,"y":1.687},{"x":-3.903,"y":1.337},{"x":-3.902,"y":0.987}]} />
    <copperpour name="_GPIO36_bottom_23_0" connectsTo="net._GPIO36" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":7.655707,"y":-5.013707},{"x":7.995206,"y":-4.191671},{"x":6.417231,"y":-3.748928},{"x":6.327428,"y":-3.838731},{"x":6.833671,"y":-5.353206}]} />
    <copperpour name="_GPIO15_top_24_0" connectsTo="net._GPIO15" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-6.282863,"y":-11.420666},{"x":-6.372666,"y":-11.330863},{"x":-7.925206,"y":-11.811671},{"x":-7.585707,"y":-12.633707},{"x":-6.763671,"y":-12.973206}]} />
    <copperpour name="_GPIO40_inner1_25_0" connectsTo="net._GPIO40" layer="inner1" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":7.655,"y":-15.174},{"x":7.995206,"y":-14.351671},{"x":6.5755,"y":-13.868446},{"x":6.4485,"y":-13.868446},{"x":6.833671,"y":-15.513206}]} />
    <copperpour name="__1V1_inner2_26_0" connectsTo="net.__1V1" layer="inner2" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":2.448707,"y":2.098293},{"x":2.581939,"y":2.422358},{"x":2.081762,"y":2.697448},{"x":1.722552,"y":2.338238},{"x":2.200513,"y":1.851513}]} />
    <copperpour name="_GPIO11_SPI1_TX_SD_CMD_bottom_27_0" connectsTo="net._GPIO11_SPI1_TX_SD_CMD" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-6.763671,"y":-2.132794},{"x":-7.585,"y":-2.472},{"x":-7.925206,"y":-3.294329},{"x":-6.5055,"y":-3.777554},{"x":-6.3785,"y":-3.777554}]} />
    <copperpour name="_GPIO10_SPI1_SCK_SD_CLK_top_28_0" connectsTo="net._GPIO10_SPI1_SCK_SD_CLK" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-6.282863,"y":1.279334},{"x":-6.372666,"y":1.369137},{"x":-7.925206,"y":0.888329},{"x":-7.585707,"y":0.066293},{"x":-6.763671,"y":-0.273206}]} />
    <copperpour name="_GPIO44_inner1_29_0" connectsTo="net._GPIO44" layer="inner1" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":7.655,"y":-25.334},{"x":7.995206,"y":-24.511671},{"x":6.5755,"y":-24.028446},{"x":6.4485,"y":-24.028446},{"x":6.833671,"y":-25.673206}]} />
    <copperpour name="_GPIO8_QMI_CS1n_inner2_30_0" connectsTo="net._GPIO8_QMI_CS1n" layer="inner2" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":2.606875,"y":17.523927},{"x":2.390358,"y":18.107939},{"x":2.066293,"y":17.974707},{"x":1.933061,"y":17.650642},{"x":2.517073,"y":17.434125}]} />
    <copperpour name="_GPIO28_bottom_31_0" connectsTo="net._GPIO28" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":7.995206,"y":14.485671},{"x":7.655,"y":15.308},{"x":6.833671,"y":15.647206},{"x":6.4485,"y":14.002446},{"x":6.5755,"y":14.002446}]} />
    <copperpour name="_SWCLK_top_32_0" connectsTo="net._SWCLK" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.115707,"y":-10.100707},{"x":5.455206,"y":-9.278671},{"x":3.902666,"y":-8.797863},{"x":3.812863,"y":-8.887666},{"x":4.293671,"y":-10.440206}]} />
    <copperpour name="_GPIO41_inner1_33_0" connectsTo="net._GPIO41" layer="inner1" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":8.283618,"y":-17.084382},{"x":6.965355,"y":-16.171552},{"x":6.875552,"y":-16.261355},{"x":6.766,"y":-17.713},{"x":7.655707,"y":-17.713707}]} />
    <copperpour name="_GPIO47_inner2_34_0" connectsTo="net._GPIO47" layer="inner2" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":6.518939,"y":4.188642},{"x":6.385707,"y":4.512707},{"x":6.061642,"y":4.645939},{"x":5.845125,"y":4.061927},{"x":5.934927,"y":3.972125}]} />
    <copperpour name="_GPIO9_SPI1_CSn_bottom_35_0" connectsTo="net._GPIO9_SPI1_CSn" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-6.763671,"y":2.947206},{"x":-7.585,"y":2.608},{"x":-7.925206,"y":1.785671},{"x":-6.5055,"y":1.302446},{"x":-6.3785,"y":1.302446}]} />
    <copperpour name="_3V3_EN_top_36_0" connectsTo="net._3V3_EN" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-6.282863,"y":26.794666},{"x":-6.763671,"y":28.347206},{"x":-7.585707,"y":28.007707},{"x":-7.925206,"y":27.185671},{"x":-6.372666,"y":26.704863}]} />
    <copperpour name="_GPIO17_inner1_37_0" connectsTo="net._GPIO17" layer="inner1" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":-6.696,"y":-17.713},{"x":-6.805552,"y":-16.261355},{"x":-6.895355,"y":-16.171552},{"x":-8.213618,"y":-17.084382},{"x":-7.585707,"y":-17.713707}]} />
    <copperpour name="_GPIO45_inner2_38_0" connectsTo="net._GPIO45" layer="inner2" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":6.4612,"y":2.9682},{"x":6.461907,"y":3.318907},{"x":6.213713,"y":3.565687},{"x":5.834739,"y":3.035541},{"x":5.924541,"y":2.945739}]} />
    <copperpour name="_GPIO6_SPI0_SCK_SCK__bottom_39_0" connectsTo="net._GPIO6_SPI0_SCK_SCK_" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-6.763671,"y":10.567206},{"x":-7.585,"y":10.228},{"x":-7.925206,"y":9.405671},{"x":-6.5055,"y":8.922446},{"x":-6.3785,"y":8.922446}]} />
    <copperpour name="_GPIO2_I2C1_SDA_top_40_0" connectsTo="net._GPIO2_I2C1_SDA" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-6.282863,"y":19.174666},{"x":-6.763671,"y":20.727206},{"x":-7.585707,"y":20.387707},{"x":-7.925206,"y":19.565671},{"x":-6.372666,"y":19.084863}]} />
    <copperpour name="_GPIO20_inner1_41_0" connectsTo="net._GPIO20" layer="inner1" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":-6.696,"y":-25.333},{"x":-6.511256,"y":-23.968059},{"x":-6.601059,"y":-23.878256},{"x":-7.925206,"y":-24.511671},{"x":-7.585707,"y":-25.333707}]} />
    <copperpour name="_GPIO46_inner2_42_0" connectsTo="net._GPIO46" layer="inner2" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":8.613358,"y":4.010939},{"x":8.29,"y":3.878},{"x":8.156061,"y":3.553642},{"x":8.671,"y":3.361118},{"x":8.798,"y":3.361118}]} />
    <copperpour name="_GPIO38_bottom_43_0" connectsTo="net._GPIO38" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":7.655,"y":-10.094},{"x":7.995206,"y":-9.271671},{"x":6.5755,"y":-8.788446},{"x":6.4485,"y":-8.788446},{"x":6.833671,"y":-10.433206}]} />
    <copperpour name="_GPIO25_User_Led_top_44_0" connectsTo="net._GPIO25_User_Led" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":7.995206,"y":22.105671},{"x":7.655707,"y":22.927707},{"x":6.833671,"y":23.267206},{"x":6.352863,"y":21.714666},{"x":6.442666,"y":21.624863}]} />
    <copperpour name="_GPIO19_inner1_45_0" connectsTo="net._GPIO19" layer="inner1" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":-6.696,"y":-22.793},{"x":-6.593693,"y":-21.383496},{"x":-6.683496,"y":-21.293693},{"x":-7.925206,"y":-21.971671},{"x":-7.585707,"y":-22.793707}]} />
    <copperpour name="_GPIO8_QMI_CS1n_inner2_46_0" connectsTo="net._GPIO8_QMI_CS1n" layer="inner2" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":-1.8756,"y":4.2326},{"x":-1.895511,"y":4.777687},{"x":-1.985313,"y":4.867489},{"x":-2.473087,"y":4.480087},{"x":-2.226307,"y":4.231893}]} />
    <copperpour name="_GPIO7_SPI0_TX_MOSI__bottom_47_0" connectsTo="net._GPIO7_SPI0_TX_MOSI_" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-6.805552,"y":6.235355},{"x":-6.696,"y":7.687},{"x":-7.585707,"y":7.687707},{"x":-8.213618,"y":7.058382},{"x":-6.895355,"y":6.145552}]} />
    <copperpour name="_GPIO1_UART0_RX_top_48_0" connectsTo="net._GPIO1_UART0_RX" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-6.282863,"y":21.714666},{"x":-6.763671,"y":23.267206},{"x":-7.585707,"y":22.927707},{"x":-7.925206,"y":22.105671},{"x":-6.372666,"y":21.624863}]} />
    <copperpour name="_GPIO22_inner1_49_0" connectsTo="net._GPIO22" layer="inner1" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":-6.696,"y":-30.413},{"x":-6.646658,"y":-28.992961},{"x":-6.736461,"y":-28.903158},{"x":-7.925206,"y":-29.591671},{"x":-7.585707,"y":-30.413707}]} />
    <copperpour name="_GPIO31_inner2_50_0" connectsTo="net._GPIO31" layer="inner2" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":4.83,"y":-4.505},{"x":4.9245,"y":-3.962815},{"x":4.7975,"y":-3.962815},{"x":4.346061,"y":-4.181642},{"x":4.48,"y":-4.506}]} />
    <copperpour name="_GPIO37_bottom_51_0" connectsTo="net._GPIO37" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":8.283618,"y":-6.924382},{"x":7.071284,"y":-5.990481},{"x":6.981481,"y":-6.080284},{"x":6.766,"y":-7.553},{"x":7.655707,"y":-7.553707}]} />
    <copperpour name="_GPIO3_I2C1_SCL_top_52_0" connectsTo="net._GPIO3_I2C1_SCL" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-6.763671,"y":18.187206},{"x":-7.585,"y":17.848},{"x":-7.925206,"y":17.025671},{"x":-6.5055,"y":16.542446},{"x":-6.3785,"y":16.542446}]} />
    <copperpour name="_GPIO43_inner1_53_0" connectsTo="net._GPIO43" layer="inner1" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":7.995206,"y":-21.971671},{"x":6.91239,"y":-21.262087},{"x":6.822587,"y":-21.35189},{"x":6.766,"y":-22.793},{"x":7.655707,"y":-22.793707}]} />
    <copperpour name="_GPIO35_bottom_54_0" connectsTo="net._GPIO35" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":7.655707,"y":-2.472293},{"x":7.314794,"y":-1.651671},{"x":5.977899,"y":-2.445784},{"x":6.067701,"y":-2.535586},{"x":7.314794,"y":-3.294329}]} />
    <copperpour name="_GPIO14_top_55_0" connectsTo="net._GPIO14" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-6.3785,"y":-8.788446},{"x":-6.5055,"y":-8.788446},{"x":-7.925206,"y":-9.271671},{"x":-7.585,"y":-10.094},{"x":-6.763671,"y":-10.433206}]} />
    <copperpour name="_GPIO40_inner1_56_0" connectsTo="net._GPIO40" layer="inner1" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":8.1955,"y":1.337},{"x":8.060561,"y":1.660358},{"x":7.4945,"y":1.4005},{"x":7.4945,"y":1.2735},{"x":8.060561,"y":1.013642}]} />
    <copperpour name="_SD_VDD_bottom_57_0" connectsTo="net._SD_VDD" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":0.790617,"y":-16.046593},{"x":0.431407,"y":-15.687383},{"x":-0.643205,"y":-16.316},{"x":-0.473707,"y":-17.078707},{"x":0.162,"y":-17.32062}]} />
    <copperpour name="_GPIO12_top_58_0" connectsTo="net._GPIO12" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-6.3785,"y":-3.708446},{"x":-6.5055,"y":-3.708446},{"x":-7.925206,"y":-4.191671},{"x":-7.585,"y":-5.014},{"x":-6.763671,"y":-5.353206}]} />
    <copperpour name="_GPIO17_inner1_59_0" connectsTo="net._GPIO17" layer="inner1" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":-3.6724,"y":-1.8126},{"x":-3.807339,"y":-1.489242},{"x":-4.3734,"y":-1.7491},{"x":-4.3734,"y":-1.8761},{"x":-3.807339,"y":-2.135958}]} />
    <copperpour name="_GPIO5_SPI0_CSn_CS___bottom_60_0" connectsTo="net._GPIO5_SPI0_CSn_CS__" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-6.699622,"y":11.336425},{"x":-6.696,"y":12.767},{"x":-7.585707,"y":12.767707},{"x":-7.925206,"y":11.945671},{"x":-6.789425,"y":11.246622}]} />
    <copperpour name="_GPIO4_SPI0_RX_MISO__top_61_0" connectsTo="net._GPIO4_SPI0_RX_MISO_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-6.79231,"y":13.857988},{"x":-6.696,"y":15.307},{"x":-7.585707,"y":15.307707},{"x":-8.213618,"y":14.678382},{"x":-6.882113,"y":13.768185}]} />
    <copperpour name="_GPIO44_inner1_62_0" connectsTo="net._GPIO44" layer="inner1" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":3.749875,"y":2.410927},{"x":3.533358,"y":2.994939},{"x":3.209293,"y":2.861707},{"x":3.076061,"y":2.537642},{"x":3.660073,"y":2.321125}]} />
    <copperpour name="_GPIO25_User_Led_bottom_63_0" connectsTo="net._GPIO25_User_Led" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":7.995206,"y":22.105671},{"x":7.655707,"y":22.927707},{"x":6.766,"y":22.927},{"x":6.769622,"y":21.496425},{"x":6.859425,"y":21.406622}]} />
    <copperpour name="_GPIO6_SPI0_SCK_SCK__top_64_0" connectsTo="net._GPIO6_SPI0_SCK_SCK_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-6.805552,"y":8.775355},{"x":-6.696,"y":10.227},{"x":-7.585707,"y":10.227707},{"x":-8.213618,"y":9.598382},{"x":-6.895355,"y":8.685552}]} />
    <copperpour name="_GPIO41_inner1_65_0" connectsTo="net._GPIO41" layer="inner1" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":6.141166,"y":0.989792},{"x":6.007934,"y":1.313857},{"x":5.683869,"y":1.447089},{"x":5.41106,"y":0.947323},{"x":5.500862,"y":0.857521}]} />
    <copperpour name="_GPIO30_bottom_66_0" connectsTo="net._GPIO30" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":8.540378,"y":8.796425},{"x":8.544,"y":10.227},{"x":7.654293,"y":10.227707},{"x":7.314794,"y":9.405671},{"x":8.450575,"y":8.706622}]} />
    <copperpour name="VSYS_top_67_0" connectsTo="net.VSYS" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.623,"y":21.388},{"x":4.607,"y":21.388},{"x":4.407186,"y":20.792},{"x":4.861,"y":19.918},{"x":5.457,"y":19.86689}]} />
    <copperpour name="_GPIO22_inner1_68_0" connectsTo="net._GPIO22" layer="inner1" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":-3.031461,"y":-3.812358},{"x":-3.1654,"y":-3.488},{"x":-3.488758,"y":-3.355061},{"x":-3.7115,"y":-3.989101},{"x":-3.5845,"y":-3.989101}]} />
    <copperpour name="_GPIO39_bottom_69_0" connectsTo="net._GPIO39" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":8.544,"y":-12.633},{"x":8.798,"y":-11.302143},{"x":8.671,"y":-11.302143},{"x":7.314794,"y":-11.811671},{"x":7.655,"y":-12.634}]} />
    <copperpour name="_GPIO11_SPI1_TX_SD_CMD_top_70_0" connectsTo="net._GPIO11_SPI1_TX_SD_CMD" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-6.696,"y":-2.473},{"x":-6.911481,"y":-1.000284},{"x":-7.001284,"y":-0.910481},{"x":-8.213618,"y":-1.844382},{"x":-7.585707,"y":-2.473707}]} />
    <copperpour name="_GPIO19_inner1_71_0" connectsTo="net._GPIO19" layer="inner1" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":-3.901293,"y":-2.980293},{"x":-4.035939,"y":-2.657642},{"x":-4.627863,"y":-2.98206},{"x":-4.53806,"y":-3.071863},{"x":-4.035939,"y":-3.304358}]} />
    <copperpour name="_GPIO10_SPI1_SCK_SD_CLK_bottom_72_0" connectsTo="net._GPIO10_SPI1_SCK_SD_CLK" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-6.748796,"y":-1.373356},{"x":-6.696,"y":0.067},{"x":-7.585707,"y":0.067707},{"x":-7.925206,"y":-0.754329},{"x":-6.838599,"y":-1.463159}]} />
    <copperpour name="_GPIO9_SPI1_CSn_top_73_0" connectsTo="net._GPIO9_SPI1_CSn" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-6.099848,"y":1.8365},{"x":-6.099848,"y":1.9635},{"x":-6.956382,"y":3.235618},{"x":-7.586,"y":2.607},{"x":-7.585,"y":1.718}]} />
    <copperpour name="_GPIO43_inner1_74_0" connectsTo="net._GPIO43" layer="inner1" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":6.284107,"y":2.429907},{"x":6.149461,"y":2.752558},{"x":5.572416,"y":2.392219},{"x":5.662219,"y":2.302416},{"x":6.149461,"y":2.105842}]} />
    <copperpour name="_GPIO29_bottom_75_0" connectsTo="net._GPIO29" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":7.995206,"y":11.945671},{"x":7.655,"y":12.768},{"x":6.766,"y":12.767},{"x":6.7025,"y":11.357235},{"x":6.8295,"y":11.357235}]} />
    <copperpour name="_GPIO33_top_76_0" connectsTo="net._GPIO33" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":8.476329,"y":2.947206},{"x":7.655,"y":2.608},{"x":7.314794,"y":1.785671},{"x":8.7182,"y":1.405815},{"x":8.8452,"y":1.405815}]} />
    <copperpour name="_GPIO18_inner1_77_0" connectsTo="net._GPIO18" layer="inner1" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":-3.012,"y":-2.6},{"x":-3.013,"y":-2.25},{"x":-3.628411,"y":-2.315838},{"x":-3.628411,"y":-2.442838},{"x":-3.260487,"y":-2.847487}]} />
    <copperpour name="_GPIO32_bottom_78_0" connectsTo="net._GPIO32" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":7.995206,"y":4.325671},{"x":7.656,"y":5.147},{"x":6.766,"y":5.147},{"x":6.568723,"y":3.9659},{"x":6.568723,"y":3.8389}]} />
    <copperpour name="_GPIO13_top_79_0" connectsTo="net._GPIO13" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-6.696,"y":-7.553},{"x":-6.646658,"y":-6.132961},{"x":-6.736461,"y":-6.043158},{"x":-7.925206,"y":-6.731671},{"x":-7.585707,"y":-7.553707}]} />
    <copperpour name="_GPIO23_inner1_80_0" connectsTo="net._GPIO23" layer="inner1" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":-4.130513,"y":-5.927487},{"x":-4.378,"y":-5.679},{"x":-4.728,"y":-5.68},{"x":-4.7275,"y":-6.261535},{"x":-4.6005,"y":-6.261535}]} />
    <copperpour name="_SD_VDD_bottom_81_0" connectsTo="net._SD_VDD" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":1.591516,"y":-15.681},{"x":1.305707,"y":-15.045293},{"x":0.543,"y":-14.949723},{"x":0.168383,"y":-15.950407},{"x":0.527593,"y":-16.309617}]} />
    <copperpour name="_GPIO0_UART0_TX_top_82_0" connectsTo="net._GPIO0_UART0_TX" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-6.69852,"y":24.036645},{"x":-6.696,"y":25.467},{"x":-7.585707,"y":25.467707},{"x":-7.925206,"y":24.645671},{"x":-6.788323,"y":23.946842}]} />
    <copperpour name="_GPIO20_inner1_83_0" connectsTo="net._GPIO20" layer="inner1" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":-4.3592,"y":-4.093},{"x":-4.358493,"y":-3.742293},{"x":-4.682558,"y":-3.609061},{"x":-4.970292,"y":-4.08649},{"x":-4.88049,"y":-4.176292}]} />
    <copperpour name="_SD_VDD_bottom_84_0" connectsTo="net._SD_VDD" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-0.021075,"y":-17.84},{"x":-0.473,"y":-17.077},{"x":-1.108,"y":-17.84},{"x":-1.104,"y":-18.475},{"x":-0.596,"y":-18.475}]} />
    <copperpour name="_GPIO5_SPI0_CSn_CS___top_85_0" connectsTo="net._GPIO5_SPI0_CSn_CS__" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-6.699622,"y":11.336425},{"x":-6.696,"y":12.767},{"x":-7.585707,"y":12.767707},{"x":-7.925206,"y":11.945671},{"x":-6.789425,"y":11.246622}]} />
    <copperpour name="_GPIO21_inner1_86_0" connectsTo="net._GPIO21" layer="inner1" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":-4.358493,"y":-4.587353},{"x":-4.606687,"y":-4.340573},{"x":-5.049875,"y":-4.674072},{"x":-4.960072,"y":-4.763875},{"x":-4.493139,"y":-4.911418}]} />
    <copperpour name="_3_3V_bottom_87_0" connectsTo="net._3_3V" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-0.726293,"y":-15.045293},{"x":-1.489,"y":-14.411},{"x":-2.139407,"y":-14.649593},{"x":-1.600593,"y":-15.188407},{"x":-1.489,"y":-15.599931}]} />
    <copperpour name="_GPIO7_SPI0_TX_MOSI__top_88_0" connectsTo="net._GPIO7_SPI0_TX_MOSI_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-6.699622,"y":6.256425},{"x":-6.696,"y":7.687},{"x":-7.585707,"y":7.687707},{"x":-7.925206,"y":6.865671},{"x":-6.789425,"y":6.166622}]} />
    <copperpour name="_GPIO16_inner1_89_0" connectsTo="net._GPIO16" layer="inner1" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":-3.545693,"y":-0.973693},{"x":-3.793887,"y":-0.726913},{"x":-4.235065,"y":-1.065263},{"x":-4.145263,"y":-1.155065},{"x":-3.680339,"y":-1.297758}]} />
    <copperpour name="_3_3V_bottom_90_0" connectsTo="net._3_3V" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-1.108,"y":-15.173},{"x":-1.108,"y":-14.411},{"x":-1.997,"y":-14.419},{"x":-1.998,"y":-14.919},{"x":-1.805658,"y":-15.38094}]} />
    <copperpour name="_GPIO8_QMI_CS1n_top_91_0" connectsTo="net._GPIO8_QMI_CS1n" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-6.699622,"y":3.716425},{"x":-6.696,"y":5.147},{"x":-7.585707,"y":5.147707},{"x":-7.925206,"y":4.325671},{"x":-6.789425,"y":3.626622}]} />
    <copperpour name="_GPIO42_inner1_92_0" connectsTo="net._GPIO42" layer="inner1" clearance={0.127} unbroken coveredWithSolderMask outline={[{"x":6.815846,"y":1.530553},{"x":6.814846,"y":1.880553},{"x":6.255615,"y":1.9339},{"x":6.255615,"y":1.8069},{"x":6.491488,"y":1.396614}]} />
    <copperpour name="_3_3V_bottom_93_0" connectsTo="net._3_3V" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":1.941,"y":3.877},{"x":1.748658,"y":4.33894},{"x":1.051,"y":4.004},{"x":1.051,"y":3.496},{"x":1.94,"y":3.377}]} />
    <copperpour name="_GPIO34_top_94_0" connectsTo="net._GPIO34" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":8.283618,"y":-0.561618},{"x":7.655707,"y":0.067707},{"x":6.833671,"y":-0.273206},{"x":7.069414,"y":-1.442139},{"x":7.159217,"y":-1.531942}]} />
    <copperpour name="_3_3V_bottom_95_0" connectsTo="net._3_3V" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-1.235,"y":-15.554},{"x":-1.997,"y":-14.918},{"x":-2.45894,"y":-15.110342},{"x":-2.2002,"y":-15.919},{"x":-1.7938,"y":-15.919}]} />
    <copperpour name="VBUS_top_96_0" connectsTo="net.VBUS" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":4.862,"y":24.665},{"x":4.748571,"y":25.538},{"x":3.754327,"y":26.102},{"x":3.754327,"y":25.086},{"x":4.265,"y":24.387834}]} />
    <copperpour name="_3_3V_bottom_97_0" connectsTo="net._3_3V" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":1.940707,"y":3.876293},{"x":2.131342,"y":4.33894},{"x":1.376578,"y":4.72779},{"x":1.08921,"y":4.440422},{"x":1.47806,"y":3.685658}]} />
    <copperpour name="VSYS_top_98_0" connectsTo="net.VSYS" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":4.862,"y":19.919},{"x":4.265,"y":20.709512},{"x":3.669,"y":20.768},{"x":3.669,"y":19.752},{"x":4.265,"y":19.469774}]} />
    <copperpour name="_3_3V_bottom_99_0" connectsTo="net._3_3V" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.7242,"y":18.7614},{"x":-3.694815,"y":19.244},{"x":-4.537,"y":19.109},{"x":-4.538,"y":18.609},{"x":-4.183447,"y":18.255447}]} />
    <copperpour name="Net__U3_XIN__top_100_0" connectsTo="net.Net__U3_XIN_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":0.206901,"y":-8.994902},{"x":0.117098,"y":-8.905099},{"x":-1.106596,"y":-9.023},{"x":-0.938707,"y":-9.623707},{"x":-0.238,"y":-9.898293}]} />
    <copperpour name="_GPIO8_QMI_CS1n_bottom_101_0" connectsTo="net._GPIO8_QMI_CS1n" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":3.972707,"y":17.211293},{"x":3.988119,"y":17.512},{"x":2.826879,"y":17.573331},{"x":2.467669,"y":17.214121},{"x":2.872,"y":17.059967}]} />
    <copperpour name="Net__C20_Pad1__top_102_0" connectsTo="net.Net__C20_Pad1_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":2.562,"y":-7.934},{"x":2.562,"y":-7.68},{"x":1.962,"y":-7.423},{"x":1.261,"y":-8.023},{"x":1.962,"y":-8.514829}]} />
    <copperpour name="_3_3V_bottom_103_0" connectsTo="net._3_3V" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":2.44,"y":3.877},{"x":2.321,"y":4.639},{"x":1.813,"y":4.639},{"x":1.47806,"y":4.068342},{"x":1.94,"y":3.876}]} />
    <copperpour name="_3_3V_top_104_0" connectsTo="net._3_3V" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.536293,"y":19.624293},{"x":-4.326579,"y":20.133},{"x":-5.359308,"y":20.537111},{"x":-5.449111,"y":20.447308},{"x":-5.045,"y":19.41458}]} />
    <copperpour name="_3_3V_bottom_105_0" connectsTo="net._3_3V" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":3.54494,"y":4.068342},{"x":3.337,"y":4.639},{"x":2.829,"y":4.639},{"x":2.62106,"y":4.068342},{"x":3.083,"y":3.876}]} />
    <copperpour name="_3_3V_top_106_0" connectsTo="net._3_3V" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-1.53506,"y":-14.727658},{"x":-1.997,"y":-13.998927},{"x":-2.505,"y":-13.998927},{"x":-2.497,"y":-14.919},{"x":-1.997,"y":-14.92}]} />
    <copperpour name="_3_3V_bottom_107_0" connectsTo="net._3_3V" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-1.862,"y":17.212},{"x":-2.963,"y":17.512},{"x":-3.263,"y":17.466},{"x":-3.263,"y":16.958},{"x":-2.963,"y":16.912}]} />
    <copperpour name="__1V1_top_108_0" connectsTo="net.__1V1" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":2.969031,"y":9.715},{"x":2.829,"y":10.166},{"x":1.929,"y":10.086786},{"x":1.6225,"y":9.368553},{"x":1.7495,"y":9.368553}]} />
    <copperpour name="_GPIO8_QMI_CS1n_bottom_109_0" connectsTo="net._GPIO8_QMI_CS1n" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":3.407421,"y":17.512},{"x":2.496474,"y":17.903737},{"x":2.137263,"y":17.544526},{"x":2.237,"y":17.428526},{"x":3.337707,"y":17.211293}]} />
    <copperpour name="_3_3V_top_110_0" connectsTo="net._3_3V" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":3.963855,"y":4.004},{"x":3.963855,"y":4.512},{"x":3.083,"y":4.377},{"x":3.082,"y":3.877},{"x":3.436553,"y":3.523447}]} />
    <copperpour name="_QSPI_SD0_bottom_111_0" connectsTo="net._QSPI_SD0" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-1.098,"y":13.3385},{"x":-1.098,"y":13.4655},{"x":-1.398,"y":13.702},{"x":-2.499,"y":13.402},{"x":-1.398,"y":13.102}]} />
    <copperpour name="_3_3V_top_112_0" connectsTo="net._3_3V" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":0.134553,"y":-30.766553},{"x":-0.219,"y":-30.412},{"x":-0.719,"y":-30.413},{"x":-0.754,"y":-31.315032},{"x":-0.246,"y":-31.315032}]} />
    <copperpour name="_QSPI_CLK_bottom_113_0" connectsTo="net._QSPI_CLK" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-0.463,"y":14.6085},{"x":-0.463,"y":14.7355},{"x":-0.763,"y":14.972},{"x":-1.864,"y":14.672},{"x":-0.763,"y":14.372}]} />
    <copperpour name="_3_3V_top_114_0" connectsTo="net._3_3V" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.291,"y":-26.476},{"x":-4.246,"y":-25.58065},{"x":-4.754,"y":-25.58065},{"x":-5.144553,"y":-26.122447},{"x":-4.791,"y":-26.477}]} />
    <copperpour name="_QSPI_CLK_bottom_115_0" connectsTo="net._QSPI_CLK" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-1.098,"y":14.6085},{"x":-1.098,"y":14.7355},{"x":-1.398,"y":14.972},{"x":-2.499,"y":14.672},{"x":-1.398,"y":14.372}]} />
    <copperpour name="_SW1_top_116_0" connectsTo="net._SW1" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":0.553474,"y":20.525},{"x":0.162,"y":20.975},{"x":-0.092,"y":20.975},{"x":-0.223,"y":20.525},{"x":0.227,"y":19.624}]} />
    <copperpour name="_QSPI_SD3_bottom_117_0" connectsTo="net._QSPI_SD3" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-0.463,"y":15.8785},{"x":-0.463,"y":16.0055},{"x":-0.763,"y":16.242},{"x":-1.864,"y":15.942},{"x":-0.763,"y":15.642}]} />
    <copperpour name="_3_3V_top_118_0" connectsTo="net._3_3V" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.183447,"y":17.112447},{"x":-4.537,"y":17.467},{"x":-5.037,"y":17.466},{"x":-5.172,"y":16.704},{"x":-4.664,"y":16.704}]} />
    <copperpour name="__1V1_bottom_119_0" connectsTo="net.__1V1" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":0.893,"y":-3.559},{"x":0.543,"y":-3.558},{"x":0.193,"y":-3.559},{"x":0.289,"y":-4.259},{"x":0.797,"y":-4.259}]} />
    <copperpour name="_3_3V_top_120_0" connectsTo="net._3_3V" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.60629,"y":12.12692},{"x":5.143843,"y":12.795843},{"x":4.860293,"y":12.513707},{"x":4.578157,"y":12.230157},{"x":5.24708,"y":11.76771}]} />
    <copperpour name="_GPIO8_QMI_CS1n_bottom_121_0" connectsTo="net._GPIO8_QMI_CS1n" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":2.741579,"y":17.658631},{"x":2.314487,"y":18.221487},{"x":2.066293,"y":17.974707},{"x":1.819513,"y":17.726513},{"x":2.382369,"y":17.299421}]} />
    <copperpour name="__1V1_top_122_0" connectsTo="net.__1V1" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":4.81494,"y":10.035658},{"x":4.353,"y":10.228},{"x":3.89106,"y":10.035658},{"x":4.099,"y":9.465},{"x":4.607,"y":9.465}]} />
    <copperpour name="_3_3V_bottom_123_0" connectsTo="net._3_3V" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":3.171487,"y":0.327513},{"x":2.924707,"y":0.575707},{"x":2.676513,"y":0.822487},{"x":2.249421,"y":0.259631},{"x":2.608631,"y":-0.099579}]} />
    <copperpour name="_QSPI_SD1_top_124_0" connectsTo="net._QSPI_SD1" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-2.078,"y":11.14},{"x":-2.124,"y":11.44},{"x":-2.632,"y":11.44},{"x":-2.678,"y":11.14},{"x":-2.378,"y":10.039}]} />
    <copperpour name="_3_3V_bottom_125_0" connectsTo="net._3_3V" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-2.408194,"y":17.512},{"x":-3.14,"y":17.812},{"x":-3.648,"y":17.812},{"x":-3.485296,"y":17.512},{"x":-2.498,"y":17.211}]} />
    <copperpour name="_QSPI_SD2_top_126_0" connectsTo="net._QSPI_SD2" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-0.808,"y":11.14},{"x":-0.854,"y":11.44},{"x":-1.362,"y":11.44},{"x":-1.408,"y":11.14},{"x":-1.108,"y":10.039}]} />
    <copperpour name="_3_3V_bottom_127_0" connectsTo="net._3_3V" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-2.028,"y":6.925},{"x":-2.378,"y":6.926},{"x":-2.728,"y":6.925},{"x":-2.632,"y":6.29},{"x":-2.124,"y":6.29}]} />
    <copperpour name="VSYS_top_128_0" connectsTo="net.VSYS" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.116,"y":22.927},{"x":5.115,"y":23.427},{"x":4.253481,"y":23.3715},{"x":4.253481,"y":23.2445},{"x":4.761447,"y":22.573447}]} />
    <copperpour name="_QSPI_SD0_bottom_129_0" connectsTo="net._QSPI_SD0" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-0.458226,"y":13.453972},{"x":-0.548028,"y":13.543774},{"x":-0.763,"y":13.702},{"x":-1.863707,"y":13.401293},{"x":-0.763,"y":13.179465}]} />
    <copperpour name="_QSPI_CSn_top_130_0" connectsTo="net._QSPI_CSn" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.119967,"y":8.77277},{"x":-3.348,"y":10.092312},{"x":-3.648707,"y":10.040707},{"x":-3.562773,"y":8.94},{"x":-3.20977,"y":8.682967}]} />
    <copperpour name="__1V1_bottom_131_0" connectsTo="net.__1V1" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.901,"y":1.337},{"x":-4.035939,"y":1.660358},{"x":-4.576738,"y":1.4132},{"x":-4.576738,"y":1.0068},{"x":-3.902,"y":0.987}]} />
    <copperpour name="_QSPI_CLK_top_132_0" connectsTo="net._QSPI_CLK" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-0.579967,"y":17.77723},{"x":-0.66977,"y":17.867033},{"x":-1.022773,"y":17.61},{"x":-1.108707,"y":16.509293},{"x":-0.808,"y":16.457689}]} />
    <copperpour name="__1V1_bottom_133_0" connectsTo="net.__1V1" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":2.448,"y":2.098},{"x":2.695487,"y":2.346487},{"x":2.448,"y":2.69379},{"x":1.94,"y":2.69379},{"x":2.124642,"y":1.965061}]} />
    <copperpour name="_3_3V_top_134_0" connectsTo="net._3_3V" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":3.274342,"y":4.33894},{"x":2.7016,"y":4.676935},{"x":2.4984,"y":4.676935},{"x":2.583,"y":3.877},{"x":3.083,"y":3.876}]} />
    <copperpour name="_USB_CC1_bottom_135_0" connectsTo="net._USB_CC1" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":1.44183,"y":27.776538},{"x":1.272758,"y":28.344139},{"x":0.948693,"y":28.210907},{"x":0.701913,"y":27.962713},{"x":1.154462,"y":27.48917}]} />
    <copperpour name="_QSPI_SD1_top_136_0" connectsTo="net._QSPI_SD1" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-2.078,"y":8.94},{"x":-2.378,"y":10.041},{"x":-2.678,"y":8.94},{"x":-2.4415,"y":8.64},{"x":-2.3145,"y":8.64}]} />
    <copperpour name="_D___bottom_137_0" connectsTo="net._D__" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":1.1216,"y":6.7726},{"x":1.0002,"y":7.433},{"x":0.5938,"y":7.433},{"x":0.448242,"y":6.906539},{"x":0.7716,"y":6.7716}]} />
    <copperpour name="_QSPI_SD2_top_138_0" connectsTo="net._QSPI_SD2" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-0.808,"y":8.94},{"x":-1.108,"y":10.041},{"x":-1.408,"y":8.94},{"x":-1.1715,"y":8.64},{"x":-1.0445,"y":8.64}]} />
    <copperpour name="_3_3V_bottom_139_0" connectsTo="net._3_3V" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.844261,"y":-0.535758},{"x":-3.9772,"y":-0.2124},{"x":-4.225687,"y":0.035087},{"x":-4.557268,"y":-0.3648},{"x":-4.557268,"y":-0.7712}]} />
    <copperpour name="_QSPI_SD1_top_140_0" connectsTo="net._QSPI_SD1" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-2.028,"y":11.624},{"x":-2.378,"y":11.625},{"x":-2.728,"y":11.624},{"x":-2.632,"y":10.924},{"x":-2.124,"y":10.924}]} />
    <copperpour name="_D__bottom_141_0" connectsTo="net._D_" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":2.009358,"y":6.906539},{"x":1.8892,"y":7.433},{"x":1.4828,"y":7.433},{"x":1.362642,"y":6.906539},{"x":1.686,"y":6.7716}]} />
    <copperpour name="_3_3V_top_142_0" connectsTo="net._3_3V" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.679,"y":-6.537},{"x":-4.029,"y":-6.536},{"x":-4.379,"y":-6.537},{"x":-4.283,"y":-7.237},{"x":-3.775,"y":-7.237}]} />
    <copperpour name="_GPIO8_QMI_CS1n_bottom_143_0" connectsTo="net._GPIO8_QMI_CS1n" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":2.067707,"y":17.973293},{"x":2.200939,"y":18.297358},{"x":1.661829,"y":18.558776},{"x":1.482224,"y":18.379171},{"x":1.743642,"y":17.840061}]} />
    <copperpour name="_3_3V_top_144_0" connectsTo="net._3_3V" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.679,"y":-7.426},{"x":-3.775,"y":-6.726},{"x":-4.283,"y":-6.726},{"x":-4.379,"y":-7.426},{"x":-4.029,"y":-7.427}]} />
    <copperpour name="_USB_D__bottom_145_0" connectsTo="net._USB_D_" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":0.544417,"y":26.095075},{"x":0.2255,"y":26.229},{"x":0.0477,"y":26.229},{"x":-0.05307,"y":25.847588},{"x":0.29693,"y":25.846588}]} />
    <copperpour name="__1V1_top_146_0" connectsTo="net.__1V1" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":3.142948,"y":1.8704},{"x":3.142948,"y":2.3784},{"x":2.448,"y":2.449},{"x":2.447,"y":2.099},{"x":2.448,"y":1.749}]} />
    <copperpour name="_GPIO9_SPI1_CSn_bottom_147_0" connectsTo="net._GPIO9_SPI1_CSn" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.028,"y":-12.506},{"x":-4.162939,"y":-12.182642},{"x":-4.729,"y":-12.4425},{"x":-4.729,"y":-12.5695},{"x":-4.162939,"y":-12.829358}]} />
    <copperpour name="_3_3V_top_148_0" connectsTo="net._3_3V" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.902,"y":17.253262},{"x":-3.394,"y":17.253262},{"x":-4.183447,"y":17.819553},{"x":-4.537,"y":17.467},{"x":-4.345658,"y":17.00406}]} />
    <copperpour name="_QSPI_CLK_bottom_149_0" connectsTo="net._QSPI_CLK" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":0.671,"y":14.672},{"x":0.536061,"y":14.995358},{"x":-0.03,"y":14.7355},{"x":-0.03,"y":14.6085},{"x":0.536061,"y":14.348642}]} />
    <copperpour name="_3_3V_top_150_0" connectsTo="net._3_3V" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-0.2,"y":-31.15},{"x":-0.246,"y":-30.85},{"x":-0.754,"y":-30.85},{"x":-0.8,"y":-31.15},{"x":-0.5,"y":-31.926}]} />
    <copperpour name="_GPIO9_SPI1_CSn_bottom_151_0" connectsTo="net._GPIO9_SPI1_CSn" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.329,"y":-12.5695},{"x":-3.329,"y":-12.4425},{"x":-3.895061,"y":-12.182642},{"x":-4.03,"y":-12.506},{"x":-3.895061,"y":-12.829358}]} />
    <copperpour name="_3_3V_top_152_0" connectsTo="net._3_3V" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.2,"y":-25.7},{"x":-4.5,"y":-24.924},{"x":-4.8,"y":-25.7},{"x":-4.754,"y":-26},{"x":-4.246,"y":-26}]} />
    <copperpour name="_GPIO24_SPI1_RX_SD_DAT0_bottom_153_0" connectsTo="net._GPIO24_SPI1_RX_SD_DAT0" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":0.358358,"y":-2.066939},{"x":0.035,"y":-1.932},{"x":-0.288358,"y":-2.066939},{"x":-0.0285,"y":-2.633},{"x":0.0985,"y":-2.633}]} />
    <copperpour name="_QSPI_SD2_top_154_0" connectsTo="net._QSPI_SD2" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-0.885,"y":11.624},{"x":-1.235,"y":11.625},{"x":-1.558358,"y":11.490061},{"x":-1.362,"y":10.949262},{"x":-0.854,"y":10.949262}]} />
    <copperpour name="_RUN_bottom_155_0" connectsTo="net._RUN" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":1.433,"y":-11.236},{"x":1.298061,"y":-10.912642},{"x":0.732,"y":-11.1725},{"x":0.732,"y":-11.2995},{"x":1.298061,"y":-11.559358}]} />
    <copperpour name="_3_3V_top_156_0" connectsTo="net._3_3V" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.647,"y":16.51},{"x":-3.948,"y":17.436306},{"x":-4.248,"y":17.593},{"x":-4.248,"y":17.085},{"x":-3.948,"y":16.414075}]} />
    <copperpour name="_GPIO0_UART0_TX_bottom_157_0" connectsTo="net._GPIO0_UART0_TX" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.489125,"y":-7.991927},{"x":-3.578927,"y":-7.902125},{"x":-4.162939,"y":-8.118642},{"x":-4.029707,"y":-8.442707},{"x":-3.705642,"y":-8.575939}]} />
    <copperpour name="Net__LED1_A__top_158_0" connectsTo="net.Net__LED1_A_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":3.25,"y":15.662},{"x":3.1592,"y":16.062},{"x":2.7528,"y":16.062},{"x":2.499579,"y":15.662},{"x":2.85,"y":15.261}]} />
    <copperpour name="_GPIO30_bottom_159_0" connectsTo="net._GPIO30" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":3.851475,"y":-2.861127},{"x":3.761673,"y":-2.771325},{"x":3.177661,"y":-2.987842},{"x":3.310893,"y":-3.311907},{"x":3.634958,"y":-3.445139}]} />
    <copperpour name="_3_3V_top_160_0" connectsTo="net._3_3V" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":4.504172,"y":-29.061961},{"x":4.449,"y":-28.635},{"x":4.098293,"y":-28.634293},{"x":3.775642,"y":-28.768939},{"x":4.144961,"y":-29.421172}]} />
    <copperpour name="_QSPI_SD1_bottom_161_0" connectsTo="net._QSPI_SD1" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-1.838125,"y":12.074073},{"x":-1.927927,"y":12.163875},{"x":-2.511939,"y":11.947358},{"x":-2.378707,"y":11.623293},{"x":-2.054642,"y":11.490061}]} />
    <copperpour name="_3_3V_top_162_0" connectsTo="net._3_3V" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.486815,"y":-6.41},{"x":-3.486815,"y":-5.902},{"x":-4.162939,"y":-6.213642},{"x":-4.03,"y":-6.537},{"x":-3.781513,"y":-6.784487}]} />
    <copperpour name="_GPIO35_bottom_163_0" connectsTo="net._GPIO35" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":6.719282,"y":-2.5365},{"x":6.719282,"y":-2.4095},{"x":6.156739,"y":-2.167327},{"x":6.0218,"y":-2.490685},{"x":6.156739,"y":-2.814043}]} />
    <copperpour name="_BOOTSEL__top_164_0" connectsTo="net._BOOTSEL_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":4.925707,"y":-15.425707},{"x":4.93862,"y":-14.9},{"x":4.415092,"y":-14.63729},{"x":4.32529,"y":-14.727092},{"x":4.6,"y":-15.532764}]} />
    <copperpour name="_GPIO6_SPI0_SCK_SCK__bottom_165_0" connectsTo="net._GPIO6_SPI0_SCK_SCK_" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":0.422939,"y":-12.372158},{"x":0.289707,"y":-12.048093},{"x":-0.034358,"y":-11.914861},{"x":-0.271223,"y":-12.468421},{"x":-0.181421,"y":-12.558223}]} />
    <copperpour name="_QSPI_CSn_top_166_0" connectsTo="net._QSPI_CSn" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.460414,"y":11.14},{"x":-3.742398,"y":11.427201},{"x":-3.832201,"y":11.337398},{"x":-3.948,"y":11.14},{"x":-3.647293,"y":10.039293}]} />
    <copperpour name="_3_3V_bottom_167_0" connectsTo="net._3_3V" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":6.004,"y":-17.913481},{"x":5.75,"y":-17.913481},{"x":5.235061,"y":-18.024642},{"x":5.369,"y":-18.349},{"x":5.692358,"y":-18.481939}]} />
    <copperpour name="_GPIO3_I2C1_SCL_top_168_0" connectsTo="net._GPIO3_I2C1_SCL" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-0.2,"y":-24.15},{"x":-0.4365,"y":-23.85},{"x":-0.5635,"y":-23.85},{"x":-0.8,"y":-24.15},{"x":-0.5,"y":-24.926}]} />
    <copperpour name="_GPIO28_bottom_169_0" connectsTo="net._GPIO28" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":2.680584,"y":-3.054118},{"x":2.590782,"y":-2.964316},{"x":2.060061,"y":-3.216442},{"x":2.193293,"y":-3.540507},{"x":2.517358,"y":-3.673739}]} />
    <copperpour name="_GPIO3_I2C1_SCL_top_170_0" connectsTo="net._GPIO3_I2C1_SCL" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-0.2,"y":-25.7},{"x":-0.5,"y":-24.924},{"x":-0.8,"y":-25.7},{"x":-0.5635,"y":-26},{"x":-0.4365,"y":-26}]} />
    <copperpour name="_GPIO1_UART0_RX_bottom_171_0" connectsTo="net._GPIO1_UART0_RX" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.565256,"y":-8.957058},{"x":-3.655058,"y":-8.867256},{"x":-4.162939,"y":-9.134642},{"x":-4.029707,"y":-9.458707},{"x":-3.705642,"y":-9.591939}]} />
    <copperpour name="_GPIO2_I2C1_SDA_top_172_0" connectsTo="net._GPIO2_I2C1_SDA" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":0.8,"y":-24.15},{"x":0.5635,"y":-23.85},{"x":0.4365,"y":-23.85},{"x":0.2,"y":-24.15},{"x":0.5,"y":-24.926}]} />
    <copperpour name="_GPIO0_UART0_TX_bottom_173_0" connectsTo="net._GPIO0_UART0_TX" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.514061,"y":7.109642},{"x":-3.647293,"y":7.433707},{"x":-3.971358,"y":7.566939},{"x":-4.238744,"y":7.059058},{"x":-4.148942,"y":6.969256}]} />
    <copperpour name="_GPIO0_UART0_TX_top_174_0" connectsTo="net._GPIO0_UART0_TX" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-2.2,"y":-24.15},{"x":-2.4365,"y":-23.85},{"x":-2.5635,"y":-23.85},{"x":-2.8,"y":-24.15},{"x":-2.5,"y":-24.926}]} />
    <copperpour name="_GPIO5_SPI0_CSn_CS___bottom_175_0" connectsTo="net._GPIO5_SPI0_CSn_CS__" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-0.339061,"y":-11.813358},{"x":-0.472293,"y":-11.489293},{"x":-0.796358,"y":-11.356061},{"x":-0.936744,"y":-11.990942},{"x":-0.846942,"y":-12.080744}]} />
    <copperpour name="_GPIO5_SPI0_CSn_CS___top_176_0" connectsTo="net._GPIO5_SPI0_CSn_CS__" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":4.8,"y":-24.15},{"x":4.5635,"y":-23.85},{"x":4.4365,"y":-23.85},{"x":4.2,"y":-24.15},{"x":4.5,"y":-24.926}]} />
    <copperpour name="_GPIO2_I2C1_SDA_bottom_177_0" connectsTo="net._GPIO2_I2C1_SDA" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-2.168256,"y":-9.592058},{"x":-2.258058,"y":-9.502256},{"x":-2.892939,"y":-9.642642},{"x":-2.759707,"y":-9.966707},{"x":-2.435642,"y":-10.099939}]} />
    <copperpour name="_GPIO2_I2C1_SDA_top_178_0" connectsTo="net._GPIO2_I2C1_SDA" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":0.8,"y":-25.7},{"x":0.5,"y":-24.924},{"x":0.2,"y":-25.7},{"x":0.4365,"y":-26},{"x":0.5635,"y":-26}]} />
    <copperpour name="_QSPI_CSn_bottom_179_0" connectsTo="net._QSPI_CSn" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-1.228061,"y":4.061642},{"x":-1.361293,"y":4.385707},{"x":-1.685358,"y":4.518939},{"x":-1.825744,"y":3.884058},{"x":-1.735942,"y":3.794256}]} />
    <copperpour name="_GPIO6_SPI0_SCK_SCK__top_180_0" connectsTo="net._GPIO6_SPI0_SCK_SCK_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":3.8,"y":-24.15},{"x":3.5635,"y":-23.85},{"x":3.4365,"y":-23.85},{"x":3.2,"y":-24.15},{"x":3.5,"y":-24.926}]} />
    <copperpour name="_GPIO26_bottom_181_0" connectsTo="net._GPIO26" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":2.2715,"y":-1.86194},{"x":2.181698,"y":-1.772138},{"x":1.679061,"y":-2.043029},{"x":1.812293,"y":-2.367094},{"x":2.136358,"y":-2.500326}]} />
    <copperpour name="_GPIO7_SPI0_TX_MOSI__top_182_0" connectsTo="net._GPIO7_SPI0_TX_MOSI_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":2.8,"y":-24.15},{"x":2.5635,"y":-23.85},{"x":2.4365,"y":-23.85},{"x":2.2,"y":-24.15},{"x":2.5,"y":-24.926}]} />
    <copperpour name="_3_3V_bottom_183_0" connectsTo="net._3_3V" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-5.813009,"y":-16.6335},{"x":-5.813009,"y":-16.5065},{"x":-6.358861,"y":-16.348242},{"x":-6.4938,"y":-16.6716},{"x":-6.358861,"y":-16.994958}]} />
    <copperpour name="_GPIO1_UART0_RX_top_184_0" connectsTo="net._GPIO1_UART0_RX" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-1.2,"y":-24.15},{"x":-1.4365,"y":-23.85},{"x":-1.5635,"y":-23.85},{"x":-1.8,"y":-24.15},{"x":-1.5,"y":-24.926}]} />
    <copperpour name="_USB_D___bottom_185_0" connectsTo="net._USB_D__" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-0.1047,"y":26.379664},{"x":-0.2825,"y":26.229},{"x":-0.733939,"y":26.171358},{"x":-0.6,"y":25.847},{"x":-0.276642,"y":25.714061}]} />
    <copperpour name="_GPIO4_SPI0_RX_MISO__top_186_0" connectsTo="net._GPIO4_SPI0_RX_MISO_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":1.786375,"y":-24.15},{"x":1.525809,"y":-23.813007},{"x":1.436007,"y":-23.902809},{"x":1.2,"y":-24.15},{"x":1.500707,"y":-24.925707}]} />
    <copperpour name="_GPIO24_SPI1_RX_SD_DAT0_bottom_187_0" connectsTo="net._GPIO24_SPI1_RX_SD_DAT0" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":0.537834,"y":-1.5205},{"x":0.537834,"y":-1.3935},{"x":-0.098939,"y":-1.609642},{"x":0.034,"y":-1.933},{"x":0.358358,"y":-2.066939}]} />
    <copperpour name="_GPIO2_I2C1_SDA_top_188_0" connectsTo="net._GPIO2_I2C1_SDA" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":0.60854,"y":-32.928738},{"x":0.8,"y":-32.7},{"x":0.499293,"y":-31.924293},{"x":0.246295,"y":-32.7},{"x":0.518738,"y":-33.01854}]} />
    <copperpour name="_GPIO2_I2C1_SDA_bottom_189_0" connectsTo="net._GPIO2_I2C1_SDA" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-2.712677,"y":3.920479},{"x":-2.6884,"y":4.4866},{"x":-3.039107,"y":4.487307},{"x":-3.285887,"y":4.239113},{"x":-2.802479,"y":3.830677}]} />
    <copperpour name="_QSPI_CSn_top_190_0" connectsTo="net._QSPI_CSn" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":2.263358,"y":-12.131939},{"x":1.94,"y":-11.997},{"x":1.616642,"y":-12.131939},{"x":1.813,"y":-12.698},{"x":2.067,"y":-12.698}]} />
    <copperpour name="_USB_CC1_bottom_191_0" connectsTo="net._USB_CC1" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":1.559707,"y":27.371293},{"x":1.637554,"y":27.647},{"x":1.275908,"y":27.94246},{"x":0.98854,"y":27.655092},{"x":1.309,"y":27.268446}]} />
    <copperpour name="_RUN_top_192_0" connectsTo="net._RUN" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-2.75,"y":-14.9},{"x":-3.0115,"y":-14.575},{"x":-3.1385,"y":-14.575},{"x":-3.4,"y":-14.9},{"x":-3.075,"y":-15.426}]} />
    <copperpour name="_GPIO4_SPI0_RX_MISO__bottom_193_0" connectsTo="net._GPIO4_SPI0_RX_MISO_" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.879061,"y":4.569642},{"x":-5.013,"y":4.894},{"x":-5.336358,"y":5.026939},{"x":-5.4895,"y":4.349607},{"x":-5.3625,"y":4.349607}]} />
    <copperpour name="_USB_D__top_194_0" connectsTo="net._USB_D_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":0.416,"y":25.981527},{"x":0.377,"y":26.538253},{"x":0.123,"y":26.538253},{"x":0.035,"y":25.981527},{"x":0.29693,"y":25.846588}]} />
    <copperpour name="_GPIO32_bottom_195_0" connectsTo="net._GPIO32" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":4.449,"y":-3.743},{"x":4.3911,"y":-3.117844},{"x":4.2641,"y":-3.117844},{"x":3.851513,"y":-3.495513},{"x":4.099,"y":-3.744}]} />
    <copperpour name="_GPIO28_top_196_0" connectsTo="net._GPIO28" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":2.517358,"y":-3.673739},{"x":2.194,"y":-3.5388},{"x":1.870642,"y":-3.673739},{"x":2.0984,"y":-4.238607},{"x":2.3016,"y":-4.238607}]} />
    <copperpour name="_GPIO3_I2C1_SCL_bottom_197_0" connectsTo="net._GPIO3_I2C1_SCL" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-2.033137,"y":-8.94894},{"x":-2.12294,"y":-8.859137},{"x":-2.625061,"y":-8.626642},{"x":-2.759707,"y":-8.950707},{"x":-2.625061,"y":-9.273358}]} />
    <copperpour name="_GPIO3_I2C1_SCL_top_198_0" connectsTo="net._GPIO3_I2C1_SCL" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":2.094616,"y":-32.6355},{"x":2.094616,"y":-32.5085},{"x":1.8,"y":-31.809025},{"x":1.499,"y":-31.925},{"x":1.8,"y":-32.694909}]} />
    <copperpour name="_GPIO38_bottom_199_0" connectsTo="net._GPIO38" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":5.988141,"y":-0.595217},{"x":5.739947,"y":-0.348437},{"x":5.319869,"y":-0.789226},{"x":5.409672,"y":-0.879029},{"x":5.987434,"y":-0.945924}]} />
    <copperpour name="_RUN_top_200_0" connectsTo="net._RUN" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-2.78923,"y":-19.05},{"x":-3.0765,"y":-18.725},{"x":-3.2035,"y":-18.725},{"x":-3.4,"y":-19.05},{"x":-3.075,"y":-19.576}]} />
    <copperpour name="_GPIO29_bottom_201_0" connectsTo="net._GPIO29" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":3.641558,"y":-2.262861},{"x":3.438244,"y":-1.772827},{"x":3.348441,"y":-1.683024},{"x":2.994842,"y":-2.262861},{"x":3.317493,"y":-2.397507}]} />
    <copperpour name="_RUN_top_202_0" connectsTo="net._RUN" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-2.78923,"y":-15.95},{"x":-3.075,"y":-15.424},{"x":-3.4,"y":-15.95},{"x":-3.2035,"y":-16.275},{"x":-3.0765,"y":-16.275}]} />
    <copperpour name="_GPIO39_bottom_203_0" connectsTo="net._GPIO39" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":6.577113,"y":-0.365511},{"x":6.6334,"y":0.194},{"x":6.282693,"y":0.194707},{"x":6.035913,"y":-0.053487},{"x":6.487311,"y":-0.455313}]} />
    <copperpour name="__1V1_top_204_0" connectsTo="net.__1V1" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":0.866358,"y":-3.692939},{"x":0.543,"y":-3.558},{"x":0.219642,"y":-3.692939},{"x":0.4984,"y":-4.247662},{"x":0.7016,"y":-4.247662}]} />
    <copperpour name="_QSPI_SD0_bottom_205_0" connectsTo="net._QSPI_SD0" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-0.345,"y":13.656},{"x":-0.593487,"y":13.903487},{"x":-0.94079,"y":13.4655},{"x":-0.94079,"y":13.3385},{"x":-0.346,"y":13.306}]} />
    <copperpour name="_3_3V_top_206_0" connectsTo="net._3_3V" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.647,"y":16.51},{"x":-3.948,"y":17.014353},{"x":-4.239302,"y":17.085},{"x":-4.239302,"y":16.577},{"x":-3.948,"y":16.331904}]} />
    <copperpour name="_QSPI_SD3_bottom_207_0" connectsTo="net._QSPI_SD3" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":1.56,"y":16.196},{"x":1.311513,"y":16.443487},{"x":0.96421,"y":16.0055},{"x":0.96421,"y":15.8785},{"x":1.559,"y":15.846}]} />
    <copperpour name="_USB_D___top_208_0" connectsTo="net._USB_D__" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-0.133521,"y":25.354845},{"x":-0.276642,"y":25.981939},{"x":-0.600707,"y":25.848707},{"x":-0.733939,"y":25.524642},{"x":-0.259245,"y":25.229121}]} />
    <copperpour name="_GPIO1_UART0_RX_bottom_209_0" connectsTo="net._GPIO1_UART0_RX" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.400513,"y":6.328513},{"x":-3.648,"y":6.577},{"x":-3.998,"y":6.576},{"x":-3.9909,"y":5.991731},{"x":-3.8639,"y":5.991731}]} />
    <copperpour name="_3_3V_top_210_0" connectsTo="net._3_3V" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.730713,"y":-0.459887},{"x":-3.9782,"y":-0.2114},{"x":-4.3282,"y":-0.2124},{"x":-4.2576,"y":-0.856451},{"x":-4.0544,"y":-0.856451}]} />
    <copperpour name="_RUN_bottom_211_0" connectsTo="net._RUN" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.447465,"y":-10.7915},{"x":-3.447465,"y":-10.6645},{"x":-3.781513,"y":-10.194513},{"x":-4.03,"y":-10.442},{"x":-4.029,"y":-10.792}]} />
    <copperpour name="_3_3V_top_212_0" connectsTo="net._3_3V" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-2.028,"y":6.925},{"x":-2.378,"y":6.926},{"x":-2.625487,"y":6.677513},{"x":-2.3016,"y":6.28377},{"x":-2.0984,"y":6.28377}]} />
    <copperpour name="_3_3V_bottom_213_0" connectsTo="net._3_3V" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.27134,"y":3.720908},{"x":-4.516,"y":4.069964},{"x":-4.791707,"y":4.004707},{"x":-4.904002,"y":3.754},{"x":-4.4354,"y":3.4706}]} />
    <copperpour name="_USB_D___top_214_0" connectsTo="net._USB_D__" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-0.123,"y":26.403025},{"x":-0.377,"y":26.229},{"x":-0.733939,"y":26.171358},{"x":-0.6,"y":25.847},{"x":-0.276642,"y":25.714061}]} />
    <copperpour name="_QSPI_CSn_bottom_215_0" connectsTo="net._QSPI_CSn" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":2.263358,"y":-11.864061},{"x":2.1305,"y":-11.323262},{"x":2.0035,"y":-11.323262},{"x":1.692513,"y":-11.750513},{"x":1.94,"y":-11.999}]} />
    <copperpour name="_GPIO3_I2C1_SCL_top_216_0" connectsTo="net._GPIO3_I2C1_SCL" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.696242,"y":7.400661},{"x":-5.0196,"y":7.5356},{"x":-5.342958,"y":7.400661},{"x":-5.0831,"y":6.8346},{"x":-4.9561,"y":6.8346}]} />
    <copperpour name="_GPIO7_SPI0_TX_MOSI__bottom_217_0" connectsTo="net._GPIO7_SPI0_TX_MOSI_" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":0.417,"y":-13.014},{"x":0.168513,"y":-12.766513},{"x":-0.258738,"y":-13.0775},{"x":-0.258738,"y":-13.2045},{"x":0.282061,"y":-13.337358}]} />
    <copperpour name="_RUN_top_218_0" connectsTo="net._RUN" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.705642,"y":-10.575939},{"x":-4.029,"y":-10.441},{"x":-4.352358,"y":-10.575939},{"x":-4.0925,"y":-11.142},{"x":-3.9655,"y":-11.142}]} />
    <copperpour name="_GPIO37_bottom_219_0" connectsTo="net._GPIO37" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":6.4876,"y":-1.3046},{"x":6.352661,"y":-0.981242},{"x":5.820366,"y":-1.0965},{"x":5.820366,"y":-1.2235},{"x":6.239113,"y":-1.552087}]} />
    <copperpour name="_GPIO7_SPI0_TX_MOSI__top_220_0" connectsTo="net._GPIO7_SPI0_TX_MOSI_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":0.739358,"y":-13.147939},{"x":0.416,"y":-13.013},{"x":0.092642,"y":-13.147939},{"x":0.3525,"y":-13.714},{"x":0.4795,"y":-13.714}]} />
    <copperpour name="_3_3V_bottom_221_0" connectsTo="net._3_3V" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":1.64646,"y":4.457908},{"x":1.326,"y":4.749344},{"x":1.050293,"y":4.639707},{"x":0.970701,"y":4.389},{"x":1.359092,"y":4.17054}]} />
    <copperpour name="_GPIO9_SPI1_CSn_top_222_0" connectsTo="net._GPIO9_SPI1_CSn" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.705642,"y":-12.639939},{"x":-4.029,"y":-12.505},{"x":-4.352358,"y":-12.639939},{"x":-4.0925,"y":-13.206},{"x":-3.9655,"y":-13.206}]} />
    <copperpour name="_GPIO4_SPI0_RX_MISO__bottom_223_0" connectsTo="net._GPIO4_SPI0_RX_MISO_" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-1.361,"y":-11.49},{"x":-1.362,"y":-11.14},{"x":-1.904185,"y":-11.0455},{"x":-1.904185,"y":-11.1725},{"x":-1.685358,"y":-11.623939}]} />
    <copperpour name="_GPIO40_top_224_0" connectsTo="net._GPIO40" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":8.1955,"y":1.337},{"x":8.060561,"y":1.660358},{"x":7.4945,"y":1.4005},{"x":7.4945,"y":1.2735},{"x":8.060561,"y":1.013642}]} />
    <copperpour name="_GPIO9_SPI1_CSn_bottom_225_0" connectsTo="net._GPIO9_SPI1_CSn" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.425,"y":-14.157},{"x":-3.775,"y":-14.156},{"x":-3.908939,"y":-14.480358},{"x":-3.4575,"y":-14.699185},{"x":-3.3305,"y":-14.699185}]} />
    <copperpour name="_QSPI_SD0_top_226_0" connectsTo="net._QSPI_SD0" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-0.022642,"y":13.789939},{"x":-0.2825,"y":14.356},{"x":-0.4095,"y":14.356},{"x":-0.669358,"y":13.789939},{"x":-0.346,"y":13.655}]} />
    <copperpour name="_QSPI_SD2_bottom_227_0" connectsTo="net._QSPI_SD2" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-0.546335,"y":11.714863},{"x":-0.636137,"y":11.804665},{"x":-1.101061,"y":11.947358},{"x":-1.235707,"y":11.623293},{"x":-0.987513,"y":11.376513}]} />
    <copperpour name="_GPIO2_I2C1_SDA_top_228_0" connectsTo="net._GPIO2_I2C1_SDA" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-2.435642,"y":-10.099939},{"x":-2.759,"y":-9.965},{"x":-3.082358,"y":-10.099939},{"x":-2.8225,"y":-10.666},{"x":-2.6955,"y":-10.666}]} />
    <copperpour name="_GPIO27_bottom_229_0" connectsTo="net._GPIO27" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":1.933906,"y":-3.0445},{"x":1.933906,"y":-2.9175},{"x":1.3812,"y":-2.9866},{"x":1.3802,"y":-3.3366},{"x":1.704558,"y":-3.470539}]} />
    <copperpour name="_GPIO0_UART0_TX_top_230_0" connectsTo="net._GPIO0_UART0_TX" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.895061,"y":-8.765358},{"x":-4.028293,"y":-8.441293},{"x":-4.352358,"y":-8.308061},{"x":-4.568875,"y":-8.892073},{"x":-4.479073,"y":-8.981875}]} />
    <copperpour name="_GPIO25_User_Led_bottom_231_0" connectsTo="net._GPIO25_User_Led" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":1.476706,"y":-1.7999},{"x":1.476706,"y":-1.6729},{"x":0.924,"y":-1.742},{"x":0.923,"y":-2.092},{"x":1.247358,"y":-2.225939}]} />
    <copperpour name="_GPIO3_I2C1_SCL_top_232_0" connectsTo="net._GPIO3_I2C1_SCL" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-2.625061,"y":-9.273358},{"x":-2.758293,"y":-8.949293},{"x":-3.082358,"y":-8.816061},{"x":-3.298875,"y":-9.400073},{"x":-3.209073,"y":-9.489875}]} />
    <copperpour name="_GPIO36_bottom_233_0" connectsTo="net._GPIO36" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":5.858539,"y":-2.034358},{"x":5.7246,"y":-1.71},{"x":5.3746,"y":-1.711},{"x":5.3055,"y":-2.263706},{"x":5.4325,"y":-2.263706}]} />
    <copperpour name="_GPIO8_QMI_CS1n_top_234_0" connectsTo="net._GPIO8_QMI_CS1n" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-2.091661,"y":3.909242},{"x":-2.224893,"y":4.233307},{"x":-2.548958,"y":4.366539},{"x":-2.765475,"y":3.782527},{"x":-2.675673,"y":3.692725}]} />
    <copperpour name="_GPIO3_I2C1_SCL_bottom_235_0" connectsTo="net._GPIO3_I2C1_SCL" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.345814,"y":7.661384},{"x":-4.435616,"y":7.751186},{"x":-4.885661,"y":7.857958},{"x":-5.020307,"y":7.533893},{"x":-4.772113,"y":7.287113}]} />
    <copperpour name="_GPIO29_top_236_0" connectsTo="net._GPIO29" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":3.452139,"y":-2.720158},{"x":3.318907,"y":-2.396093},{"x":2.994842,"y":-2.262861},{"x":2.775681,"y":-2.842917},{"x":2.865483,"y":-2.932719}]} />
    <copperpour name="_GPIO8_QMI_CS1n_bottom_237_0" connectsTo="net._GPIO8_QMI_CS1n" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":1.567579,"y":18.653026},{"x":1.301,"y":19.093554},{"x":1.050293,"y":18.990707},{"x":0.972447,"y":18.715},{"x":1.387974,"y":18.473421}]} />
    <copperpour name="_QSPI_CSn_top_238_0" connectsTo="net._QSPI_CSn" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-1.362,"y":4.384},{"x":-1.228061,"y":4.708358},{"x":-1.6984,"y":4.903574},{"x":-1.9016,"y":4.903574},{"x":-1.685358,"y":4.251061}]} />
    <copperpour name="Net__MICRO_SD1_DAT0_slash_DO__bottom_239_0" connectsTo="net.Net__MICRO_SD1_DAT0_slash_DO_" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":3.05,"y":-25.3},{"x":2.8635,"y":-25.05},{"x":2.7365,"y":-25.05},{"x":2.55,"y":-25.3},{"x":2.8,"y":-25.801}]} />
    <copperpour name="_GPIO36_top_240_0" connectsTo="net._GPIO36" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.7256,"y":-1.711},{"x":5.590661,"y":-1.387642},{"x":5.026788,"y":-1.6365},{"x":5.026788,"y":-1.7635},{"x":5.590661,"y":-2.034358}]} />
    <copperpour name="Net__MICRO_SD1_DAT1_slash_RES__bottom_241_0" connectsTo="net.Net__MICRO_SD1_DAT1_slash_RES_" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":4.15,"y":-25.3},{"x":3.9635,"y":-25.05},{"x":3.8365,"y":-25.05},{"x":3.65,"y":-25.3},{"x":3.9,"y":-25.801}]} />
    <copperpour name="_GPIO46_top_242_0" connectsTo="net._GPIO46" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":8.291,"y":3.877},{"x":8.156061,"y":4.200358},{"x":7.595052,"y":3.9659},{"x":7.595052,"y":3.8389},{"x":8.156061,"y":3.553642}]} />
    <copperpour name="Net__MICRO_SD1_CLK_slash_SCLK__bottom_243_0" connectsTo="net.Net__MICRO_SD1_CLK_slash_SCLK_" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":0.656922,"y":-26.50012},{"x":0.85,"y":-26.3},{"x":0.599293,"y":-25.799293},{"x":0.357802,"y":-26.3},{"x":0.56712,"y":-26.589922}]} />
    <copperpour name="_GPIO4_SPI0_RX_MISO__top_244_0" connectsTo="net._GPIO4_SPI0_RX_MISO_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.689642,"y":5.026939},{"x":-4.9815,"y":5.586635},{"x":-5.1085,"y":5.586635},{"x":-5.336358,"y":5.026939},{"x":-5.013,"y":4.892}]} />
    <copperpour name="_3_3V_bottom_245_0" connectsTo="net._3_3V" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":5.783579,"y":-16.804974},{"x":5.517,"y":-16.459656},{"x":5.241293,"y":-16.569293},{"x":5.161701,"y":-16.82},{"x":5.603974,"y":-16.984579}]} />
    <copperpour name="_GPIO23_top_246_0" connectsTo="net._GPIO23" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.866899,"y":-5.210701},{"x":-3.956701,"y":-5.120899},{"x":-4.511939,"y":-5.356642},{"x":-4.378707,"y":-5.680707},{"x":-4.054642,"y":-5.813939}]} />
    <copperpour name="_3_3V_bottom_247_0" connectsTo="net._3_3V" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.106421,"y":19.351974},{"x":-3.286026,"y":19.531579},{"x":-3.631343,"y":19.265},{"x":-3.521707,"y":18.989293},{"x":-3.271,"y":18.909701}]} />
    <copperpour name="_GPIO1_UART0_RX_top_248_0" connectsTo="net._GPIO1_UART0_RX" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.647293,"y":6.575293},{"x":-3.514061,"y":6.899358},{"x":-4.128565,"y":7.070241},{"x":-4.218367,"y":6.980439},{"x":-3.971358,"y":6.442061}]} />
    <copperpour name="_3_3V_bottom_249_0" connectsTo="net._3_3V" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.19554,"y":-0.513908},{"x":-4.482908,"y":-0.22654},{"x":-4.842517,"y":-0.318},{"x":-4.791707,"y":-0.568707},{"x":-4.516,"y":-0.720761}]} />
    <copperpour name="_GPIO16_top_250_0" connectsTo="net._GPIO16" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.412461,"y":-1.297758},{"x":-3.545693,"y":-0.973693},{"x":-3.869758,"y":-0.840461},{"x":-4.116797,"y":-1.378795},{"x":-4.026995,"y":-1.468597}]} />
    <copperpour name="Net__MICRO_SD1_CD_slash_DAT3_slash_CS__bottom_251_0" connectsTo="net.Net__MICRO_SD1_CD_slash_DAT3_slash_CS_" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-2.463501,"y":-25.3},{"x":-2.675605,"y":-25.013593},{"x":-2.765407,"y":-25.103395},{"x":-2.95,"y":-25.3},{"x":-2.699293,"y":-25.800707}]} />
    <copperpour name="_GPIO47_top_252_0" connectsTo="net._GPIO47" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":6.518939,"y":4.188642},{"x":6.385707,"y":4.512707},{"x":6.061642,"y":4.645939},{"x":5.890803,"y":4.031405},{"x":5.980605,"y":3.941603}]} />
    <copperpour name="_GPIO11_SPI1_TX_SD_CMD_bottom_253_0" connectsTo="net._GPIO11_SPI1_TX_SD_CMD" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-1.371133,"y":-25.3},{"x":-1.586919,"y":-25.018279},{"x":-1.676721,"y":-25.108081},{"x":-1.85,"y":-25.3},{"x":-1.599293,"y":-25.800707}]} />
    <copperpour name="_GPIO1_UART0_RX_top_254_0" connectsTo="net._GPIO1_UART0_RX" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.070073,"y":6.182875},{"x":-3.324642,"y":6.709939},{"x":-3.648707,"y":6.576707},{"x":-3.781939,"y":6.252642},{"x":-3.159875,"y":6.093073}]} />
    <copperpour name="Net__MICRO_SD1_DAT2_slash_RES__bottom_255_0" connectsTo="net.Net__MICRO_SD1_DAT2_slash_RES_" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.55,"y":-25.3},{"x":-3.716915,"y":-25.110717},{"x":-3.806717,"y":-25.020915},{"x":-4.024559,"y":-25.3},{"x":-3.800707,"y":-25.800707}]} />
    <copperpour name="__1V1_top_256_0" connectsTo="net.__1V1" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.768061,"y":1.013642},{"x":-3.901293,"y":1.337707},{"x":-4.225358,"y":1.470939},{"x":-4.373837,"y":0.841465},{"x":-4.284035,"y":0.751663}]} />
    <copperpour name="__1V1_bottom_257_0" connectsTo="net.__1V1" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.266,"y":1.0068},{"x":-4.266,"y":1.4132},{"x":-4.516,"y":1.46},{"x":-4.792,"y":1.21},{"x":-4.516,"y":0.96}]} />
    <copperpour name="_GPIO19_top_258_0" connectsTo="net._GPIO19" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.901,"y":-2.981},{"x":-4.035939,"y":-2.657642},{"x":-4.585888,"y":-2.8365},{"x":-4.585888,"y":-2.9635},{"x":-4.035939,"y":-3.304358}]} />
    <copperpour name="_GPIO24_SPI1_RX_SD_DAT0_bottom_259_0" connectsTo="net._GPIO24_SPI1_RX_SD_DAT0" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":2.829707,"y":-11.109707},{"x":2.932554,"y":-10.859},{"x":2.447125,"y":-10.637323},{"x":2.357323,"y":-10.727125},{"x":2.554,"y":-11.187554}]} />
    <copperpour name="_GPIO1_UART0_RX_top_260_0" connectsTo="net._GPIO1_UART0_RX" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.895061,"y":-9.781358},{"x":-4.028293,"y":-9.457293},{"x":-4.352358,"y":-9.324061},{"x":-4.619744,"y":-9.831942},{"x":-4.529942,"y":-9.921744}]} />
    <copperpour name="Net__MICRO_SD1_CD_slash_DAT3_slash_CS__bottom_261_0" connectsTo="net.Net__MICRO_SD1_CD_slash_DAT3_slash_CS_" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-2.795323,"y":-17.967875},{"x":-2.992,"y":-17.507446},{"x":-3.267707,"y":-17.585293},{"x":-3.370554,"y":-17.836},{"x":-2.885125,"y":-18.057677}]} />
    <copperpour name="_GPIO4_SPI0_RX_MISO__top_262_0" connectsTo="net._GPIO4_SPI0_RX_MISO_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-0.898256,"y":-11.990942},{"x":-1.038642,"y":-11.356061},{"x":-1.362707,"y":-11.489293},{"x":-1.495939,"y":-11.813358},{"x":-0.988058,"y":-12.080744}]} />
    <copperpour name="Net__MICRO_SD1_DAT2_slash_RES__bottom_263_0" connectsTo="net.Net__MICRO_SD1_DAT2_slash_RES_" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.573323,"y":-17.967875},{"x":-4.77,"y":-17.507446},{"x":-5.045707,"y":-17.585293},{"x":-5.148554,"y":-17.836},{"x":-4.663125,"y":-18.057677}]} />
    <copperpour name="_GPIO0_UART0_TX_top_264_0" connectsTo="net._GPIO0_UART0_TX" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.057256,"y":7.059058},{"x":-3.324642,"y":7.566939},{"x":-3.648707,"y":7.433707},{"x":-3.781939,"y":7.109642},{"x":-3.147058,"y":6.969256}]} />
    <copperpour name="Net__MICRO_SD1_CLK_slash_SCLK__bottom_265_0" connectsTo="net.Net__MICRO_SD1_CLK_slash_SCLK_" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":3.554677,"y":-17.967875},{"x":3.358,"y":-17.507446},{"x":3.082293,"y":-17.585293},{"x":2.979446,"y":-17.836},{"x":3.464875,"y":-18.057677}]} />
    <copperpour name="_D___top_266_0" connectsTo="net._D__" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":1.1272,"y":6.5186},{"x":1.094958,"y":6.906539},{"x":0.7716,"y":6.7736},{"x":0.637661,"y":6.449242},{"x":1.0637,"y":6.3916}]} />
    <copperpour name="Net__MICRO_SD1_DAT0_slash_DO__bottom_267_0" connectsTo="net.Net__MICRO_SD1_DAT0_slash_DO_" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":4.456554,"y":-17.836},{"x":4.353707,"y":-17.585293},{"x":4.078,"y":-17.507446},{"x":3.881323,"y":-17.967875},{"x":3.971125,"y":-18.057677}]} />
    <copperpour name="_BOOTSEL__top_268_0" connectsTo="net._BOOTSEL_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.140029,"y":-15.95},{"x":4.925,"y":-15.424},{"x":4.6,"y":-15.95},{"x":4.6705,"y":-16.275},{"x":4.7975,"y":-16.275}]} />
    <copperpour name="Net__MICRO_SD1_DAT0_slash_DO__bottom_269_0" connectsTo="net.Net__MICRO_SD1_DAT0_slash_DO_" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":4.353707,"y":-17.586707},{"x":4.456554,"y":-17.336},{"x":3.971125,"y":-17.114323},{"x":3.881323,"y":-17.204125},{"x":4.078,"y":-17.664554}]} />
    <copperpour name="_BOOTSEL__top_270_0" connectsTo="net._BOOTSEL_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.140029,"y":-19.05},{"x":4.7975,"y":-18.725},{"x":4.6705,"y":-18.725},{"x":4.6,"y":-19.05},{"x":4.925,"y":-19.576}]} />
    <copperpour name="_GPIO11_SPI1_TX_SD_CMD_bottom_271_0" connectsTo="net._GPIO11_SPI1_TX_SD_CMD" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-1.996293,"y":-17.586707},{"x":-1.893446,"y":-17.336},{"x":-2.378875,"y":-17.114323},{"x":-2.468677,"y":-17.204125},{"x":-2.272,"y":-17.664554}]} />
    <copperpour name="_GPIO0_UART0_TX_top_272_0" connectsTo="net._GPIO0_UART0_TX" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.400513,"y":7.680487},{"x":-3.848843,"y":8.103453},{"x":-3.938645,"y":8.013651},{"x":-3.998,"y":7.433},{"x":-3.647293,"y":7.432293}]} />
    <copperpour name="Net__MICRO_SD1_DAT1_slash_RES__bottom_273_0" connectsTo="net.Net__MICRO_SD1_DAT1_slash_RES_" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":5.345554,"y":-17.836},{"x":5.242707,"y":-17.585293},{"x":4.967,"y":-17.507446},{"x":4.770323,"y":-17.967875},{"x":4.860125,"y":-18.057677}]} />
    <copperpour name="_GPIO44_top_274_0" connectsTo="net._GPIO44" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":3.84606,"y":2.770137},{"x":3.935863,"y":2.85994},{"x":3.343939,"y":3.184358},{"x":3.209293,"y":2.861707},{"x":3.343939,"y":2.537642}]} />
    <copperpour name="_D__bottom_275_0" connectsTo="net._D_" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":1.936,"y":7.183},{"x":1.686,"y":7.434},{"x":1.436,"y":7.183},{"x":1.4828,"y":6.933},{"x":1.8892,"y":6.933}]} />
    <copperpour name="_QSPI_CLK_top_276_0" connectsTo="net._QSPI_CLK" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":1.02,"y":14.672},{"x":0.9875,"y":15.284031},{"x":0.8605,"y":15.284031},{"x":0.422513,"y":14.919487},{"x":0.67,"y":14.671}]} />
    <copperpour name="_D___bottom_277_0" connectsTo="net._D__" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":1.047,"y":7.183},{"x":0.797,"y":7.434},{"x":0.547,"y":7.183},{"x":0.5938,"y":6.933},{"x":1.0002,"y":6.933}]} />
    <copperpour name="_GPIO39_top_278_0" connectsTo="net._GPIO39" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":6.2834,"y":-0.156},{"x":6.284107,"y":0.194707},{"x":6.035913,"y":0.441487},{"x":5.652725,"y":-0.067473},{"x":5.742527,"y":-0.157275}]} />
    <copperpour name="_3_3V_bottom_279_0" connectsTo="net._3_3V" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-1.747,"y":-16.32},{"x":-1.7938,"y":-16.07},{"x":-2.2002,"y":-16.07},{"x":-2.247,"y":-16.32},{"x":-1.997,"y":-16.571}]} />
    <copperpour name="_GPIO45_top_280_0" connectsTo="net._GPIO45" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":6.4612,"y":2.9682},{"x":6.461907,"y":3.318907},{"x":6.213713,"y":3.565687},{"x":5.830525,"y":3.056727},{"x":5.920327,"y":2.966925}]} />
    <copperpour name="_USB_D___bottom_281_0" connectsTo="net._USB_D__" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":2.200638,"y":8.698214},{"x":1.94,"y":8.703},{"x":1.608319,"y":8.699},{"x":1.685293,"y":8.448293},{"x":1.961,"y":8.334962}]} />
    <copperpour name="_GPIO24_SPI1_RX_SD_DAT0_top_282_0" connectsTo="net._GPIO24_SPI1_RX_SD_DAT0" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":0.035707,"y":-1.932293},{"x":-0.098939,"y":-1.609642},{"x":-0.68149,"y":-1.956688},{"x":-0.591688,"y":-2.04649},{"x":-0.098939,"y":-2.256358}]} />
    <copperpour name="Net__MICRO_SD1_DAT0_slash_DO__bottom_283_0" connectsTo="net.Net__MICRO_SD1_DAT0_slash_DO_" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":3.079,"y":-13.174871},{"x":2.829,"y":-13.267},{"x":2.735814,"y":-13.543},{"x":3.1465,"y":-13.713739},{"x":3.2735,"y":-13.713739}]} />
    <copperpour name="_GPIO41_top_284_0" connectsTo="net._GPIO41" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":6.008227,"y":1.31315},{"x":5.75974,"y":1.560637},{"x":5.386797,"y":1.1635},{"x":5.386797,"y":1.0365},{"x":6.007227,"y":0.96315}]} />
    <copperpour name="_GPIO9_SPI1_CSn_bottom_285_0" connectsTo="net._GPIO9_SPI1_CSn" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":1.876815,"y":-13.543},{"x":1.814,"y":-13.268},{"x":1.563,"y":-13.153492},{"x":1.367261,"y":-13.5855},{"x":1.367261,"y":-13.7125}]} />
    <copperpour name="_GPIO18_top_286_0" connectsTo="net._GPIO18" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.012,"y":-2.6},{"x":-3.013,"y":-2.25},{"x":-3.628411,"y":-2.315838},{"x":-3.628411,"y":-2.442838},{"x":-3.260487,"y":-2.847487}]} />
    <copperpour name="_GPIO11_SPI1_TX_SD_CMD_bottom_287_0" connectsTo="net._GPIO11_SPI1_TX_SD_CMD" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-1.882493,"y":-17.836},{"x":-1.997,"y":-17.585},{"x":-2.272,"y":-17.522184},{"x":-2.4415,"y":-18.031739},{"x":-2.3145,"y":-18.031739}]} />
    <copperpour name="_GPIO17_top_288_0" connectsTo="net._GPIO17" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.672693,"y":-1.811893},{"x":-3.920887,"y":-1.565113},{"x":-4.309848,"y":-2.045046},{"x":-4.220046,"y":-2.134848},{"x":-3.6734,"y":-2.1626}]} />
    <copperpour name="_GPIO10_SPI1_SCK_SD_CLK_bottom_289_0" connectsTo="net._GPIO10_SPI1_SCK_SD_CLK" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":3.083,"y":-16.571},{"x":3.197507,"y":-16.32},{"x":2.7655,"y":-16.124261},{"x":2.6385,"y":-16.124261},{"x":2.808,"y":-16.633815}]} />
    <copperpour name="_GPIO25_User_Led_top_290_0" connectsTo="net._GPIO25_User_Led" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":1.057939,"y":-2.415358},{"x":0.925,"y":-2.092},{"x":0.600642,"y":-1.958061},{"x":0.392336,"y":-2.4349},{"x":0.392336,"y":-2.5619}]} />
    <copperpour name="_3_3V_bottom_291_0" connectsTo="net._3_3V" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":0.036,"y":18.99},{"x":-0.215,"y":19.24},{"x":-0.465,"y":19.117},{"x":-0.465,"y":18.863},{"x":-0.215,"y":18.74}]} />
    <copperpour name="_GPIO30_top_292_0" connectsTo="net._GPIO30" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":3.559087,"y":-3.558687},{"x":3.312307,"y":-3.310493},{"x":2.9616,"y":-3.3112},{"x":3.002697,"y":-3.860501},{"x":3.092499,"y":-3.950303}]} />
    <copperpour name="Net__MICRO_SD1_CD_slash_DAT3_slash_CS__bottom_293_0" connectsTo="net.Net__MICRO_SD1_CD_slash_DAT3_slash_CS_" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.266,"y":-17.586},{"x":-3.542,"y":-17.336},{"x":-3.792,"y":-17.5225},{"x":-3.792,"y":-17.6495},{"x":-3.542,"y":-17.836}]} />
    <copperpour name="_GPIO22_top_294_0" connectsTo="net._GPIO22" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-2.917913,"y":-3.736487},{"x":-3.1654,"y":-3.488},{"x":-3.5154,"y":-3.489},{"x":-3.4635,"y":-4.095098},{"x":-3.3365,"y":-4.095098}]} />
    <copperpour name="Net__MICRO_SD1_CD_slash_DAT3_slash_CS__bottom_295_0" connectsTo="net.Net__MICRO_SD1_CD_slash_DAT3_slash_CS_" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.631,"y":-17.6495},{"x":-3.631,"y":-17.5225},{"x":-3.881,"y":-17.336},{"x":-4.157,"y":-17.586},{"x":-3.881,"y":-17.836}]} />
    <copperpour name="_GPIO35_top_296_0" connectsTo="net._GPIO35" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":6.023507,"y":-2.491392},{"x":6.0228,"y":-2.140685},{"x":5.468248,"y":-2.203045},{"x":5.378445,"y":-2.292848},{"x":5.775313,"y":-2.738172}]} />
    <copperpour name="Net__MICRO_SD1_DAT0_slash_DO__bottom_297_0" connectsTo="net.Net__MICRO_SD1_DAT0_slash_DO_" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":3.079,"y":-12.993},{"x":2.8925,"y":-12.743},{"x":2.7655,"y":-12.743},{"x":2.579,"y":-12.993},{"x":2.829,"y":-13.269}]} />
    <copperpour name="_GPIO9_SPI1_CSn_top_298_0" connectsTo="net._GPIO9_SPI1_CSn" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.527513,"y":-13.909513},{"x":-3.9655,"y":-13.56221},{"x":-4.0925,"y":-13.56221},{"x":-4.125,"y":-14.157},{"x":-3.775,"y":-14.158}]} />
    <copperpour name="_3_3V_bottom_299_0" connectsTo="net._3_3V" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.155,"y":-16.57},{"x":-4.431,"y":-16.32},{"x":-4.681,"y":-16.5065},{"x":-4.681,"y":-16.6335},{"x":-4.431,"y":-16.82}]} />
    <copperpour name="_GPIO43_top_300_0" connectsTo="net._GPIO43" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":6.284107,"y":2.429907},{"x":6.035913,"y":2.676687},{"x":5.630263,"y":2.252565},{"x":5.720065,"y":2.162763},{"x":6.2834,"y":2.0792}]} />
    <copperpour name="_3_3V_bottom_301_0" connectsTo="net._3_3V" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.52,"y":-16.6335},{"x":-4.52,"y":-16.5065},{"x":-4.77,"y":-16.32},{"x":-5.046,"y":-16.57},{"x":-4.77,"y":-16.82}]} />
    <copperpour name="_GPIO38_top_302_0" connectsTo="net._GPIO38" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.988141,"y":-0.595217},{"x":5.739947,"y":-0.348437},{"x":5.332639,"y":-0.768558},{"x":5.422442,"y":-0.858361},{"x":5.987434,"y":-0.945924}]} />
    <copperpour name="_3_3V_bottom_303_0" connectsTo="net._3_3V" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-5.044,"y":-16.57},{"x":-5.32,"y":-16.32},{"x":-5.57,"y":-16.5065},{"x":-5.57,"y":-16.6335},{"x":-5.32,"y":-16.82}]} />
    <copperpour name="_GPIO32_top_304_0" connectsTo="net._GPIO32" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":4.346487,"y":-3.990487},{"x":4.099,"y":-3.742},{"x":3.749,"y":-3.743},{"x":3.7365,"y":-4.31915},{"x":3.8635,"y":-4.31915}]} />
    <copperpour name="Net__MICRO_SD1_DAT0_slash_DO__bottom_305_0" connectsTo="net.Net__MICRO_SD1_DAT0_slash_DO_" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":3.079,"y":-12.375},{"x":2.829,"y":-12.124},{"x":2.579,"y":-12.375},{"x":2.7655,"y":-12.625},{"x":2.8925,"y":-12.625}]} />
    <copperpour name="_USB_CC1_top_306_0" connectsTo="net._USB_CC1" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":1.2994,"y":28.2102},{"x":0.9494,"y":28.2112},{"x":0.701913,"y":27.962713},{"x":1.1865,"y":27.634713},{"x":1.3135,"y":27.634713}]} />
    <copperpour name="_GPIO9_SPI1_CSn_bottom_307_0" connectsTo="net._GPIO9_SPI1_CSn" layer="bottom" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.07272,"y":-16.32},{"x":-3.3305,"y":-16.07},{"x":-3.4575,"y":-16.07},{"x":-3.542,"y":-16.32},{"x":-3.267,"y":-16.571}]} />
    <copperpour name="_3_3V_top_308_0" connectsTo="net._3_3V" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.869661,"y":2.842442},{"x":-4.0026,"y":3.1658},{"x":-4.326958,"y":3.299739},{"x":-4.468108,"y":2.7635},{"x":-4.468108,"y":2.6365}]} />
    <copperpour name="_GPIO6_SPI0_SCK_SCK__top_309_0" connectsTo="net._GPIO6_SPI0_SCK_SCK_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":0.900092,"y":-12.39229},{"x":0.612358,"y":-11.914861},{"x":0.288293,"y":-12.048093},{"x":0.289,"y":-12.3988},{"x":0.81029,"y":-12.482092}]} />
    <copperpour name="_QSPI_SD3_top_310_0" connectsTo="net._QSPI_SD3" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":1.806487,"y":16.443487},{"x":1.4955,"y":16.870738},{"x":1.3685,"y":16.870738},{"x":1.235642,"y":16.329939},{"x":1.559,"y":16.195}]} />
    <copperpour name="_QSPI_SD3_top_311_0" connectsTo="net._QSPI_SD3" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":1.806487,"y":15.948513},{"x":1.559,"y":16.197},{"x":1.235642,"y":16.062061},{"x":1.3685,"y":15.521262},{"x":1.4955,"y":15.521262}]} />
    <copperpour name="_QSPI_CLK_top_312_0" connectsTo="net._QSPI_CLK" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":0.993358,"y":14.538061},{"x":0.67,"y":14.673},{"x":0.422513,"y":14.424513},{"x":0.7335,"y":13.997262},{"x":0.8605,"y":13.997262}]} />
    <copperpour name="_QSPI_SD0_top_313_0" connectsTo="net._QSPI_SD0" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-0.098513,"y":13.408513},{"x":-0.346,"y":13.657},{"x":-0.669358,"y":13.522061},{"x":-0.5365,"y":12.981262},{"x":-0.4095,"y":12.981262}]} />
    <copperpour name="_GPIO5_SPI0_CSn_CS___top_314_0" connectsTo="net._GPIO5_SPI0_CSn_CS__" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":0.201738,"y":-11.4265},{"x":0.201738,"y":-11.2995},{"x":-0.339061,"y":-11.166642},{"x":-0.474,"y":-11.49},{"x":-0.225513,"y":-11.737487}]} />
    <copperpour name="_RUN_top_315_0" connectsTo="net._RUN" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":2.106738,"y":-11.4265},{"x":2.106738,"y":-11.2995},{"x":1.679487,"y":-10.988513},{"x":1.431,"y":-11.236},{"x":1.565939,"y":-11.559358}]} />
    <copperpour name="_GPIO37_top_316_0" connectsTo="net._GPIO37" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":6.4876,"y":-1.3046},{"x":6.352661,"y":-0.981242},{"x":5.820366,"y":-1.0965},{"x":5.820366,"y":-1.2235},{"x":6.239113,"y":-1.552087}]} />
    <copperpour name="_3_3V_top_317_0" connectsTo="net._3_3V" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.648,"y":-6.602},{"x":-3.14,"y":-6.602},{"x":-3.895061,"y":-6.213642},{"x":-4.029,"y":-6.536},{"x":-3.895061,"y":-6.860358}]} />
    <copperpour name="_3_3V_top_318_0" connectsTo="net._3_3V" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.14,"y":-7.361},{"x":-3.648,"y":-7.361},{"x":-3.895061,"y":-7.102642},{"x":-4.029,"y":-7.427},{"x":-3.895061,"y":-7.749358}]} />
    <copperpour name="_GPIO31_top_319_0" connectsTo="net._GPIO31" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":4.613939,"y":-4.828358},{"x":4.481,"y":-4.505},{"x":4.13,"y":-4.505},{"x":4.056002,"y":-4.9749},{"x":4.056002,"y":-5.1019}]} />
    <copperpour name="_GPIO26_top_320_0" connectsTo="net._GPIO26" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":1.813,"y":-2.716387},{"x":1.814,"y":-2.366387},{"x":1.489642,"y":-2.232448},{"x":1.275065,"y":-2.6889},{"x":1.275065,"y":-2.8159}]} />
    <copperpour name="_GPIO2_I2C1_SDA_top_321_0" connectsTo="net._GPIO2_I2C1_SDA" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-2.904461,"y":4.809958},{"x":-3.3365,"y":5.03682},{"x":-3.4635,"y":5.03682},{"x":-3.3884,"y":4.4866},{"x":-3.0384,"y":4.4856}]} />
    <copperpour name="_GPIO3_I2C1_SCL_top_322_0" connectsTo="net._GPIO3_I2C1_SCL" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.772113,"y":7.782087},{"x":-5.110463,"y":8.223265},{"x":-5.200265,"y":8.133463},{"x":-5.342958,"y":7.668539},{"x":-5.018893,"y":7.533893}]} />
    <copperpour name="_GPIO42_top_323_0" connectsTo="net._GPIO42" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":6.815846,"y":1.530553},{"x":6.814846,"y":1.880553},{"x":6.255615,"y":1.9339},{"x":6.255615,"y":1.8069},{"x":6.491488,"y":1.396614}]} />
    <copperpour name="_GPIO27_top_324_0" connectsTo="net._GPIO27" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":1.3822,"y":-3.3366},{"x":1.3812,"y":-2.9866},{"x":0.817973,"y":-2.9429},{"x":0.817973,"y":-3.0699},{"x":1.057842,"y":-3.470539}]} />
    <copperpour name="_D__top_325_0" connectsTo="net._D_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":1.933487,"y":6.525113},{"x":1.685293,"y":6.773307},{"x":1.362642,"y":6.638661},{"x":1.432,"y":6.417},{"x":1.5844,"y":6.3916}]} />
    <copperpour name="Net__C20_Pad1__top_326_0" connectsTo="net.Net__C20_Pad1_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":2.379979,"y":-6.898974},{"x":2.19,"y":-6.451629},{"x":1.939293,"y":-6.536293},{"x":1.836733,"y":-6.812},{"x":2.200374,"y":-7.078579}]} />
    <copperpour name="_GPIO20_top_327_0" connectsTo="net._GPIO20" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.225261,"y":-3.419642},{"x":-4.783034,"y":-3.2365},{"x":-4.783034,"y":-3.3635},{"x":-4.7092,"y":-3.743},{"x":-4.3582,"y":-3.743}]} />
    <copperpour name="_ADC_AVDD_top_328_0" connectsTo="net._ADC_AVDD" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":6.246587,"y":7.31},{"x":6.131707,"y":7.560707},{"x":5.856,"y":7.62253},{"x":5.677921,"y":7.223026},{"x":5.857526,"y":7.043421}]} />
    <copperpour name="_GPIO21_top_329_0" connectsTo="net._GPIO21" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.775,"y":-4.759},{"x":-3.844902,"y":-4.378},{"x":-4.225261,"y":-4.391702},{"x":-4.359907,"y":-4.588767},{"x":-4.111713,"y":-4.835547}]} />
    <copperpour name="_GPIO3_I2C1_SCL_top_330_0" connectsTo="net._GPIO3_I2C1_SCL" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":4.849677,"y":-29.904125},{"x":4.759875,"y":-29.814323},{"x":4.253624,"y":-30.036},{"x":4.352293,"y":-30.286707},{"x":4.628,"y":-30.370158}]} />
    <copperpour name="Net__C20_Pad1__top_331_0" connectsTo="net.Net__C20_Pad1_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":2.859753,"y":-7.93},{"x":2.83,"y":-7.68},{"x":2.554,"y":-7.489454},{"x":2.304,"y":-7.68},{"x":2.304,"y":-7.934}]} />
    <copperpour name="_VREG_AVDD_top_332_0" connectsTo="net._VREG_AVDD" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.238,"y":7.336754},{"x":4.988,"y":7.307},{"x":4.797455,"y":7.031},{"x":4.988,"y":6.781},{"x":5.242,"y":6.781}]} />
    <copperpour name="_VREG_AVDD_top_333_0" connectsTo="net._VREG_AVDD" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.242,"y":7.831},{"x":4.988,"y":7.831},{"x":4.797455,"y":7.581},{"x":4.988,"y":7.305},{"x":5.238,"y":7.275247}]} />
    <copperpour name="_QSPI_CSn_top_334_0" connectsTo="net._QSPI_CSn" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.446323,"y":12.131125},{"x":-4.643,"y":12.591554},{"x":-4.918707,"y":12.513707},{"x":-5.021554,"y":12.263},{"x":-4.536125,"y":12.041323}]} />
    <copperpour name="_3_3V_top_335_0" connectsTo="net._3_3V" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.839446,"y":22.398},{"x":-4.917293,"y":22.673707},{"x":-5.168,"y":22.776554},{"x":-5.389677,"y":22.291125},{"x":-5.299875,"y":22.201323}]} />
    <copperpour name="_3_3V_top_336_0" connectsTo="net._3_3V" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.814446,"y":16.454},{"x":-4.917293,"y":16.704707},{"x":-5.193,"y":16.782554},{"x":-5.389677,"y":16.322125},{"x":-5.299875,"y":16.232323}]} />
    <copperpour name="Net__U2_FB__top_337_0" connectsTo="net.Net__U2_FB_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-2.541323,"y":23.054875},{"x":-2.631125,"y":23.144677},{"x":-3.091554,"y":22.948},{"x":-3.013707,"y":22.672293},{"x":-2.763,"y":22.569446}]} />
    <copperpour name="Net__U3_XOUT__top_338_0" connectsTo="net.Net__U3_XOUT_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":0.924707,"y":-6.537707},{"x":1.002553,"y":-6.262},{"x":0.542124,"y":-6.065322},{"x":0.452322,"y":-6.155124},{"x":0.674,"y":-6.640553}]} />
    <copperpour name="_RUN_top_339_0" connectsTo="net._RUN" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":4.570678,"y":-5.266124},{"x":4.480876,"y":-5.176322},{"x":4.020447,"y":-5.373},{"x":4.098293,"y":-5.648707},{"x":4.349,"y":-5.751553}]} />
    <copperpour name="Net__U2_FB__top_340_0" connectsTo="net.Net__U2_FB_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.012,"y":22.673},{"x":-3.263,"y":22.923},{"x":-3.513,"y":22.8762},{"x":-3.513,"y":22.4698},{"x":-3.263,"y":22.423}]} />
    <copperpour name="Net__LED1_A__top_341_0" connectsTo="net.Net__LED1_A_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":3.206,"y":16.2},{"x":2.956,"y":16.451},{"x":2.706,"y":16.2},{"x":2.7528,"y":15.95},{"x":3.1592,"y":15.95}]} />
    <copperpour name="Net__U2_FB__top_342_0" connectsTo="net.Net__U2_FB_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.402,"y":22.4698},{"x":-3.402,"y":22.8762},{"x":-3.652,"y":22.923},{"x":-3.903,"y":22.673},{"x":-3.652,"y":22.423}]} />
    <copperpour name="_GPIO4_SPI0_RX_MISO__top_343_0" connectsTo="net._GPIO4_SPI0_RX_MISO_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.918,"y":4.759061},{"x":-5.014,"y":4.893},{"x":-5.172,"y":4.645513},{"x":-5.172,"y":4.385},{"x":-4.918,"y":4.3635}]} />
    <copperpour name="Net__C20_Pad1__top_344_0" connectsTo="net.Net__C20_Pad1_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":2.829707,"y":-7.680707},{"x":2.965667,"y":-7.43},{"x":2.644426,"y":-7.163421},{"x":2.464821,"y":-7.343026},{"x":2.554,"y":-7.714245}]} />
    <copperpour name="_QSPI_CSn_top_345_0" connectsTo="net._QSPI_CSn" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":2.19,"y":-13.12},{"x":2.067,"y":-12.87},{"x":1.813,"y":-12.87},{"x":1.69,"y":-13.12},{"x":1.94,"y":-13.396}]} />
    <copperpour name="Net__U3_XIN__top_346_0" connectsTo="net.Net__U3_XIN_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":0.158,"y":-6.47417},{"x":-0.092,"y":-6.536},{"x":-0.229161,"y":-6.812},{"x":0.0985,"y":-7.018094},{"x":0.2255,"y":-7.018094}]} />
    <copperpour name="_USB_CC2_top_347_0" connectsTo="net._USB_CC2" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-1.747,"y":24.345},{"x":-1.8954,"y":24.595},{"x":-2.0986,"y":24.595},{"x":-2.247,"y":24.345},{"x":-1.997,"y":24.069}]} />
    <copperpour name="_BOOTSEL__top_348_0" connectsTo="net._BOOTSEL_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":3.427677,"y":-13.649875},{"x":3.206,"y":-13.264935},{"x":2.955293,"y":-13.394293},{"x":2.912791,"y":-13.67},{"x":3.337875,"y":-13.739677}]} />
    <copperpour name="VBUS_top_349_0" connectsTo="net.VBUS" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-2.086062,"y":27.651613},{"x":-2.301587,"y":27.867138},{"x":-2.358639,"y":27.643},{"x":-2.275707,"y":27.067293},{"x":-2.125,"y":27.064427}]} />
    <copperpour name="_VREG_AVDD_top_350_0" connectsTo="net._VREG_AVDD" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.43628,"y":8.199},{"x":5.242,"y":8.45},{"x":4.967,"y":8.199},{"x":4.988,"y":7.949},{"x":5.242,"y":7.949}]} />
    <copperpour name="_GPIO25_User_Led_top_351_0" connectsTo="net._GPIO25_User_Led" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":3.481,"y":17.4025},{"x":3.481,"y":17.5295},{"x":3.231,"y":17.716},{"x":2.955,"y":17.466},{"x":3.231,"y":17.216}]} />
    <copperpour name="_RUN_top_352_0" connectsTo="net._RUN" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.017,"y":-13.12},{"x":-3.2035,"y":-12.87},{"x":-3.3305,"y":-12.87},{"x":-3.517,"y":-13.12},{"x":-3.267,"y":-13.396}]} />
    <copperpour name="_GPIO3_I2C1_SCL_top_353_0" connectsTo="net._GPIO3_I2C1_SCL" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":4.603,"y":-30.536},{"x":4.353,"y":-30.285},{"x":4.103,"y":-30.536},{"x":4.2895,"y":-30.786},{"x":4.4165,"y":-30.786}]} />
    <copperpour name="_3V3_EN_top_354_0" connectsTo="net._3V3_EN" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":1.814,"y":24.07},{"x":1.563,"y":24.32},{"x":1.313,"y":24.1335},{"x":1.313,"y":24.0065},{"x":1.563,"y":23.82}]} />
    <copperpour name="_3_3V_top_355_0" connectsTo="net._3_3V" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.668,"y":13.779},{"x":-4.8545,"y":14.029},{"x":-4.9815,"y":14.029},{"x":-5.168,"y":13.779},{"x":-4.918,"y":13.528}]} />
    <copperpour name="_GPIO2_I2C1_SDA_top_356_0" connectsTo="net._GPIO2_I2C1_SDA" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.806922,"y":-30.31888},{"x":5.71712,"y":-30.229078},{"x":5.517,"y":-30.036},{"x":5.241293,"y":-30.286707},{"x":5.517,"y":-30.530042}]} />
    <copperpour name="VSYS_top_357_0" connectsTo="net.VSYS" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":3.249244,"y":23.940954},{"x":3.339046,"y":24.030756},{"x":3.079,"y":24.279156},{"x":2.828293,"y":24.070707},{"x":3.079,"y":23.795}]} />
    <copperpour name="_GPIO2_I2C1_SDA_top_358_0" connectsTo="net._GPIO2_I2C1_SDA" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.451155,"y":-30.536},{"x":5.242707,"y":-30.285293},{"x":4.967,"y":-30.536},{"x":5.112954,"y":-30.706244},{"x":5.202756,"y":-30.796046}]} />
    <copperpour name="_RUN_top_359_0" connectsTo="net._RUN" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":4.099707,"y":-5.648707},{"x":3.849,"y":-5.373},{"x":3.678756,"y":-5.518954},{"x":3.588954,"y":-5.608756},{"x":3.849,"y":-5.857155}]} />
    <copperpour name="Net__U3_XIN__top_360_0" connectsTo="net.Net__U3_XIN_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":0.102739,"y":-6.262},{"x":-0.162078,"y":-6.06188},{"x":-0.25188,"y":-5.972078},{"x":-0.342,"y":-6.262},{"x":-0.092707,"y":-6.537707}]} />
    <copperpour name="VBUS_top_361_0" connectsTo="net.VBUS" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-2.375,"y":27.643},{"x":-2.419712,"y":27.696784},{"x":-2.599316,"y":27.876388},{"x":-2.662784,"y":27.643},{"x":-2.525707,"y":27.067293}]} />
    <copperpour name="_USB_CC2_top_362_0" connectsTo="net._USB_CC2" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-1.625,"y":26.493},{"x":-1.75,"y":27.069},{"x":-1.875,"y":26.493},{"x":-1.8516,"y":26.368},{"x":-1.6484,"y":26.368}]} />
    <copperpour name="_USB_D__top_363_0" connectsTo="net._USB_D_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-0.625,"y":27.643},{"x":-0.6611,"y":27.768},{"x":-0.8389,"y":27.768},{"x":-0.875,"y":27.643},{"x":-0.75,"y":27.067}]} />
    <copperpour name="_USB_D__top_364_0" connectsTo="net._USB_D_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":0.375,"y":27.643},{"x":0.3389,"y":27.768},{"x":0.1611,"y":27.768},{"x":0.125,"y":27.643},{"x":0.25,"y":27.067}]} />
    <copperpour name="_USB_CC1_top_365_0" connectsTo="net._USB_CC1" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":1.375,"y":27.643},{"x":1.3135,"y":27.768},{"x":1.1865,"y":27.768},{"x":1.125,"y":27.643},{"x":1.25,"y":27.067}]} />
    <copperpour name="_GPIO34_top_366_0" connectsTo="net._GPIO34" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.402111,"y":-2.552309},{"x":5.2865,"y":-2.479977},{"x":4.895793,"y":-2.499293},{"x":4.888629,"y":-2.6},{"x":5.312309,"y":-2.642111}]} />
    <copperpour name="_GPIO38_top_367_0" connectsTo="net._GPIO38" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.403429,"y":-0.877373},{"x":5.313627,"y":-0.787571},{"x":4.893257,"y":-0.8},{"x":4.895793,"y":-0.900707},{"x":5.2865,"y":-0.944174}]} />
    <copperpour name="_GPIO33_top_368_0" connectsTo="net._GPIO33" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.402551,"y":-2.924748},{"x":5.2865,"y":-2.857657},{"x":4.895793,"y":-2.899293},{"x":4.892858,"y":-3},{"x":5.312748,"y":-3.014551}]} />
    <copperpour name="_D__top_369_0" connectsTo="net._D_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":1.9,"y":5.7865},{"x":1.8889,"y":5.8865},{"x":1.7111,"y":5.8865},{"x":1.7,"y":5.7865},{"x":1.8,"y":5.3955}]} />
    <copperpour name="_GPIO12_top_370_0" connectsTo="net._GPIO12" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.8955,"y":0.3},{"x":-5.2865,"y":0.4},{"x":-5.3865,"y":0.3635},{"x":-5.3865,"y":0.2365},{"x":-5.2865,"y":0.2}]} />
    <copperpour name="_GPIO6_SPI0_SCK_SCK__top_371_0" connectsTo="net._GPIO6_SPI0_SCK_SCK_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.8955,"y":3.5},{"x":-5.2865,"y":3.6},{"x":-5.3865,"y":3.5635},{"x":-5.3865,"y":3.4365},{"x":-5.2865,"y":3.4}]} />
    <copperpour name="_GPIO9_SPI1_CSn_top_372_0" connectsTo="net._GPIO9_SPI1_CSn" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.8955,"y":1.9},{"x":-5.2865,"y":2},{"x":-5.3865,"y":1.9635},{"x":-5.3865,"y":1.8365},{"x":-5.2865,"y":1.8}]} />
    <copperpour name="_GPIO18_top_373_0" connectsTo="net._GPIO18" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.4065,"y":-2.5635},{"x":-4.4065,"y":-2.4365},{"x":-4.5065,"y":-2.4},{"x":-4.8975,"y":-2.5},{"x":-4.5065,"y":-2.6}]} />
    <copperpour name="_GPIO47_top_374_0" connectsTo="net._GPIO47" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.3865,"y":3.4365},{"x":5.3865,"y":3.5635},{"x":5.2865,"y":3.6},{"x":4.8955,"y":3.5},{"x":5.2865,"y":3.4}]} />
    <copperpour name="_GPIO8_QMI_CS1n_top_375_0" connectsTo="net._GPIO8_QMI_CS1n" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.4065,"y":2.2365},{"x":-4.4065,"y":2.3635},{"x":-4.5065,"y":2.4},{"x":-4.8975,"y":2.3},{"x":-4.5065,"y":2.2}]} />
    <copperpour name="_GPIO2_I2C1_SDA_top_376_0" connectsTo="net._GPIO2_I2C1_SDA" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.3,"y":5.7865},{"x":-3.3365,"y":5.8865},{"x":-3.4635,"y":5.8865},{"x":-3.5,"y":5.7865},{"x":-3.4,"y":5.3955}]} />
    <copperpour name="_GPIO45_top_377_0" connectsTo="net._GPIO45" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.3865,"y":2.6365},{"x":5.3865,"y":2.7635},{"x":5.2865,"y":2.8},{"x":4.8955,"y":2.7},{"x":5.2865,"y":2.6}]} />
    <copperpour name="_GPIO41_top_378_0" connectsTo="net._GPIO41" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.3865,"y":1.0365},{"x":5.3865,"y":1.1635},{"x":5.2865,"y":1.2},{"x":4.8955,"y":1.1},{"x":5.2865,"y":1}]} />
    <copperpour name="_GPIO46_top_379_0" connectsTo="net._GPIO46" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.3865,"y":3.0365},{"x":5.3865,"y":3.1635},{"x":5.2865,"y":3.2},{"x":4.8955,"y":3.1},{"x":5.2865,"y":3}]} />
    <copperpour name="_GPIO13_top_380_0" connectsTo="net._GPIO13" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.8955,"y":-0.1},{"x":-5.2865,"y":0},{"x":-5.3865,"y":-0.0365},{"x":-5.3865,"y":-0.1635},{"x":-5.2865,"y":-0.2}]} />
    <copperpour name="_GPIO11_SPI1_TX_SD_CMD_top_381_0" connectsTo="net._GPIO11_SPI1_TX_SD_CMD" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.8955,"y":1.1},{"x":-5.2865,"y":1.2},{"x":-5.3865,"y":1.1635},{"x":-5.3865,"y":1.0365},{"x":-5.2865,"y":1}]} />
    <copperpour name="_GPIO42_top_382_0" connectsTo="net._GPIO42" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.3865,"y":1.4365},{"x":5.3865,"y":1.5635},{"x":5.2865,"y":1.6},{"x":4.8955,"y":1.5},{"x":5.2865,"y":1.4}]} />
    <copperpour name="_GPIO25_User_Led_top_383_0" connectsTo="net._GPIO25_User_Led" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-1.7,"y":-4.0065},{"x":-1.7365,"y":-3.9065},{"x":-1.8635,"y":-3.9065},{"x":-1.9,"y":-4.0065},{"x":-1.8,"y":-4.3975}]} />
    <copperpour name="_GPIO16_top_384_0" connectsTo="net._GPIO16" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.4065,"y":-1.7635},{"x":-4.4065,"y":-1.6365},{"x":-4.5065,"y":-1.6},{"x":-4.8975,"y":-1.7},{"x":-4.5065,"y":-1.8}]} />
    <copperpour name="_GPIO10_SPI1_SCK_SD_CLK_top_385_0" connectsTo="net._GPIO10_SPI1_SCK_SD_CLK" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.8955,"y":1.5},{"x":-5.2865,"y":1.6},{"x":-5.3865,"y":1.5635},{"x":-5.3865,"y":1.4365},{"x":-5.2865,"y":1.4}]} />
    <copperpour name="_GPIO2_I2C1_SDA_top_386_0" connectsTo="net._GPIO2_I2C1_SDA" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.3,"y":5.0065},{"x":-3.4,"y":5.3975},{"x":-3.5,"y":5.0065},{"x":-3.4635,"y":4.9065},{"x":-3.3365,"y":4.9065}]} />
    <copperpour name="_GPIO36_top_387_0" connectsTo="net._GPIO36" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.3865,"y":-1.7635},{"x":5.3865,"y":-1.6365},{"x":5.2865,"y":-1.6},{"x":4.8955,"y":-1.7},{"x":5.2865,"y":-1.8}]} />
    <copperpour name="_GPIO17_top_388_0" connectsTo="net._GPIO17" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.4065,"y":-2.1635},{"x":-4.4065,"y":-2.0365},{"x":-4.5065,"y":-2},{"x":-4.8975,"y":-2.1},{"x":-4.5065,"y":-2.2}]} />
    <copperpour name="_GPIO7_SPI0_TX_MOSI__top_389_0" connectsTo="net._GPIO7_SPI0_TX_MOSI_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.8955,"y":3.1},{"x":-5.2865,"y":3.2},{"x":-5.3865,"y":3.1635},{"x":-5.3865,"y":3.0365},{"x":-5.2865,"y":3}]} />
    <copperpour name="_GPIO1_UART0_RX_top_390_0" connectsTo="net._GPIO1_UART0_RX" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-2.9,"y":5.7865},{"x":-2.9365,"y":5.8865},{"x":-3.0635,"y":5.8865},{"x":-3.1,"y":5.7865},{"x":-3,"y":5.3955}]} />
    <copperpour name="_GPIO24_SPI1_RX_SD_DAT0_top_391_0" connectsTo="net._GPIO24_SPI1_RX_SD_DAT0" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-2.1,"y":-4.0065},{"x":-2.1365,"y":-3.9065},{"x":-2.2635,"y":-3.9065},{"x":-2.3,"y":-4.0065},{"x":-2.2,"y":-4.3975}]} />
    <copperpour name="_GPIO19_top_392_0" connectsTo="net._GPIO19" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.4065,"y":-2.9635},{"x":-4.4065,"y":-2.8365},{"x":-4.5065,"y":-2.8},{"x":-4.8975,"y":-2.9},{"x":-4.5065,"y":-3}]} />
    <copperpour name="_GPIO0_UART0_TX_top_393_0" connectsTo="net._GPIO0_UART0_TX" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-2.5,"y":5.7865},{"x":-2.5365,"y":5.8865},{"x":-2.6635,"y":5.8865},{"x":-2.7,"y":5.7865},{"x":-2.6,"y":5.3955}]} />
    <copperpour name="_GPIO22_top_394_0" connectsTo="net._GPIO22" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.3,"y":-4.0065},{"x":-3.3365,"y":-3.9065},{"x":-3.4635,"y":-3.9065},{"x":-3.5,"y":-4.0065},{"x":-3.4,"y":-4.3975}]} />
    <copperpour name="_GPIO26_top_395_0" connectsTo="net._GPIO26" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-1.3,"y":-4.0065},{"x":-1.3365,"y":-3.9065},{"x":-1.4635,"y":-3.9065},{"x":-1.5,"y":-4.0065},{"x":-1.4,"y":-4.3975}]} />
    <copperpour name="_GPIO27_top_396_0" connectsTo="net._GPIO27" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-0.9,"y":-4.0065},{"x":-0.9365,"y":-3.9065},{"x":-1.0635,"y":-3.9065},{"x":-1.1,"y":-4.0065},{"x":-1,"y":-4.3975}]} />
    <copperpour name="_GPIO5_SPI0_CSn_CS___top_397_0" connectsTo="net._GPIO5_SPI0_CSn_CS__" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.8955,"y":3.9},{"x":-5.2865,"y":4},{"x":-5.3865,"y":3.9635},{"x":-5.3865,"y":3.8365},{"x":-5.2865,"y":3.8}]} />
    <copperpour name="_3_3V_top_398_0" connectsTo="net._3_3V" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.4065,"y":2.6365},{"x":-4.4065,"y":2.861},{"x":-4.5065,"y":2.8},{"x":-4.8975,"y":2.7},{"x":-4.5065,"y":2.6}]} />
    <copperpour name="_D___top_399_0" connectsTo="net._D__" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":1.499476,"y":5.7865},{"x":1.462022,"y":5.949014},{"x":1.336299,"y":5.823291},{"x":1.3,"y":5.7865},{"x":1.400707,"y":5.395793}]} />
    <copperpour name="_GPIO23_top_400_0" connectsTo="net._GPIO23" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-2.904623,"y":-4.7865},{"x":-2.999293,"y":-4.395793},{"x":-3.1,"y":-4.7865},{"x":-3.050867,"y":-4.839128},{"x":-2.961065,"y":-4.92893}]} />
    <copperpour name="_GPIO15_top_401_0" connectsTo="net._GPIO15" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.895793,"y":-0.899293},{"x":-5.2865,"y":-0.805227},{"x":-5.428618,"y":-0.861817},{"x":-5.338817,"y":-0.951618},{"x":-5.2865,"y":-1}]} />
    <copperpour name="_GPIO8_QMI_CS1n_top_402_0" connectsTo="net._GPIO8_QMI_CS1n" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.895793,"y":2.299293},{"x":-5.2865,"y":2.4},{"x":-5.337645,"y":2.354447},{"x":-5.427447,"y":2.264645},{"x":-5.2865,"y":2.207501}]} />
    <copperpour name="_RUN_top_403_0" connectsTo="net._RUN" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":1.854447,"y":-4.837645},{"x":1.9,"y":-4.7865},{"x":1.799293,"y":-4.395793},{"x":1.707501,"y":-4.7865},{"x":1.764645,"y":-4.927447}]} />
    <copperpour name="_GPIO43_top_404_0" connectsTo="net._GPIO43" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.425836,"y":1.868534},{"x":5.336034,"y":1.958336},{"x":5.2865,"y":2},{"x":4.895793,"y":1.899293},{"x":5.2865,"y":1.81064}]} />
    <copperpour name="__1V1_top_405_0" connectsTo="net.__1V1" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.367164,"y":0.668534},{"x":-4.283,"y":0.956},{"x":-4.5065,"y":0.8},{"x":-4.897207,"y":0.699293},{"x":-4.5065,"y":0.61064}]} />
    <copperpour name="_GPIO14_top_406_0" connectsTo="net._GPIO14" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.895793,"y":-0.499293},{"x":-5.2865,"y":-0.416095},{"x":-5.423053,"y":-0.475252},{"x":-5.333252,"y":-0.565053},{"x":-5.2865,"y":-0.6}]} />
    <copperpour name="_SWDIO_top_407_0" connectsTo="net._SWDIO" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":1.467882,"y":-4.83208},{"x":1.5,"y":-4.7865},{"x":1.399293,"y":-4.395793},{"x":1.318406,"y":-4.7865},{"x":1.37808,"y":-4.921882}]} />
    <copperpour name="_GPIO30_top_408_0" connectsTo="net._GPIO30" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":3.1,"y":-4.0065},{"x":3.077781,"y":-3.96502},{"x":2.98798,"y":-3.875219},{"x":2.926552,"y":-4.0065},{"x":2.999293,"y":-4.397207}]} />
    <copperpour name="_SWCLK_top_409_0" connectsTo="net._SWCLK" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":1.081317,"y":-4.826515},{"x":1.1,"y":-4.7865},{"x":0.999293,"y":-4.395793},{"x":0.929484,"y":-4.7865},{"x":0.991515,"y":-4.916317}]} />
    <copperpour name="_GPIO40_top_410_0" connectsTo="net._GPIO40" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.414559,"y":-0.104242},{"x":5.324758,"y":-0.014441},{"x":5.2865,"y":0},{"x":4.895793,"y":-0.100707},{"x":5.2865,"y":-0.166981}]} />
    <copperpour name="_GPIO37_top_411_0" connectsTo="net._GPIO37" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.412743,"y":-1.299859},{"x":5.322941,"y":-1.210057},{"x":5.2865,"y":-1.2},{"x":4.895793,"y":-1.300707},{"x":5.2865,"y":-1.36331}]} />
    <copperpour name="_GPIO29_top_412_0" connectsTo="net._GPIO29" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":2.7,"y":-4.0065},{"x":2.691216,"y":-3.970586},{"x":2.601414,"y":-3.880784},{"x":2.53776,"y":-4.0065},{"x":2.599293,"y":-4.397207}]} />
    <copperpour name="_GPIO39_top_413_0" connectsTo="net._GPIO39" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":5.408994,"y":-0.490808},{"x":5.319192,"y":-0.401006},{"x":5.2865,"y":-0.4},{"x":4.895793,"y":-0.500707},{"x":5.2865,"y":-0.555668}]} />
    <copperpour name="_GPIO4_SPI0_RX_MISO__top_414_0" connectsTo="net._GPIO4_SPI0_RX_MISO_" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-4.846787,"y":4.4},{"x":-4.8418,"y":4.6898},{"x":-5.1085,"y":4.5},{"x":-5.095451,"y":4.4},{"x":-4.8965,"y":4.299}]} />
    <copperpour name="_GPIO21_top_415_0" connectsTo="net._GPIO21" layer="top" clearance={0.127} coveredWithSolderMask outline={[{"x":-3.9,"y":-4.566091},{"x":-3.799,"y":-4.3965},{"x":-3.9,"y":-4.337892},{"x":-3.99648,"y":-4.4415},{"x":-3.99648,"y":-4.5685}]} />
    {/* FID1: Fiducial */}
    <chip name={"FID1"} pcbX={-5.045} pcbY={-33.08} pcbRotation={0} pinLabels={{ "pin1": ["Fid1"] }} displayName={"Fiducial"} footprint={<Footprint_FID1 />} noSchematicRepresentation={true}/>

    {/* LED1: LED/GREEN/0603 */}
    <chip name={"LED1"} pcbX={2.85} pcbY={14.5} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED/GREEN/0603"} footprint={<Footprint_LED1 />} noSchematicRepresentation={true}/>

    {/* FID3: Fiducial */}
    <chip name={"FID3"} pcbX={-4.664} pcbY={25.086} pcbRotation={0} pinLabels={{ "pin1": ["Fid1"] }} displayName={"Fiducial"} footprint={<Footprint_FID3 />} noSchematicRepresentation={true}/>

    {/* FID2: Fiducial */}
    <chip name={"FID2"} pcbX={5.115} pcbY={-33.08} pcbRotation={0} pinLabels={{ "pin1": ["Fid1"] }} displayName={"Fiducial"} footprint={<Footprint_FID2 />} noSchematicRepresentation={true}/>

    {/* D1: 1N5822/SS34/SMA */}
    <chip name={"D1"} pcbX={4.861} pcbY={22.292} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"1N5822/SS34/SMA"} footprint={<Footprint_D1 />} noSchematicRepresentation={true}/>

    {/* R18: 2.2k/R0402 */}
    <chip name={"R18"} pcbX={5.242} pcbY={-29.778} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"2.2k/R0402"} footprint={<Footprint_R18 />} noSchematicRepresentation={true}/>

    {/* R17: 2.2k/R0402 */}
    <chip name={"R17"} pcbX={4.353} pcbY={-29.778} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"2.2k/R0402"} footprint={<Footprint_R17 />} noSchematicRepresentation={true}/>

    {/* RST1: YTS-A016-X */}
    <chip name={"RST1"} pcbX={-4.15} pcbY={-17.5} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"YTS-A016-X"} footprint={<Footprint_RST1 />} noSchematicRepresentation={true}/>

    {/* R5: 5.1k/1%/R0402 */}
    <chip name={"R5"} pcbX={-2.505} pcbY={24.07} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"5.1k/1%/R0402"} footprint={<Footprint_R5 />} noSchematicRepresentation={true}/>

    {/* R12: 1M/R0402 */}
    <chip name={"R12"} pcbX={2.321} pcbY={24.07} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"1M/R0402"} footprint={<Footprint_R12 />} noSchematicRepresentation={true}/>

    {/* pUEXT1: SH1.0-10P-180D */}
    <chip name={"pUEXT1"} pcbX={0} pcbY={-23.5} pcbRotation={0} pinLabels={{ "pin11": ["0"], "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"] }} displayName={"SH1.0-10P-180D"} footprint={<Footprint_pUEXT1 />} noSchematicRepresentation={true}/>

    {/* BOOT1: YTS-A016-X */}
    <chip name={"BOOT1"} pcbX={3.85} pcbY={-17.5} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"YTS-A016-X"} footprint={<Footprint_BOOT1 />} noSchematicRepresentation={true}/>

    {/* R15: 2.2k/R0402 */}
    <chip name={"R15"} pcbX={2.956} pcbY={16.958} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"2.2k/R0402"} footprint={<Footprint_R15 />} noSchematicRepresentation={true}/>

    {/* USB-C1: USB-C-16P-F(A40-00119-A52-12) */}
    <chip name={"USB_C1"} pcbX={0} pcbY={31} pcbRotation={90} pinLabels={{ "pin1": ["0"], "pin2": ["A1"], "pin3": ["A4"], "pin4": ["A5"], "pin5": ["A6"], "pin6": ["A7"], "pin7": ["A8"], "pin8": ["A9"], "pin9": ["A12"], "pin10": ["B1"], "pin11": ["B4"], "pin12": ["B5"], "pin13": ["B6"], "pin14": ["B7"], "pin15": ["B8"], "pin16": ["B9"], "pin17": ["B12"] }} displayName={"USB-C-16P-F(A40-00119-A52-12)"} footprint={<Footprint_USB_C1 />} noSchematicRepresentation={true}/>

    {/* R13: 220k/R0402 */}
    <chip name={"R13"} pcbX={-4.41} pcbY={22.673} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"220k/R0402"} footprint={<Footprint_R13 />} noSchematicRepresentation={true}/>

    {/* C14: 4.7uF/10V/20%/X5R/C0402 */}
    <chip name={"C14"} pcbX={4.353} pcbY={8.957} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"4.7uF/10V/20%/X5R/C0402"} footprint={<Footprint_C14 />} noSchematicRepresentation={true}/>

    {/* SWD1: NA(NH1x3) */}
    <chip name={"SWD1"} pcbX={5.115} pcbY={-10.1} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"NA(NH1x3)"} footprint={<Footprint_SWD1 />} noSchematicRepresentation={true}/>

    {/* L1: 3.3uH/2.0A/DCR=140mR/20%/2.00x1.60x1.00mm/L2016(PIM201610-3R3MTS00) */}
    <chip name={"L1"} pcbX={2.829} pcbY={9.465} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"3.3uH/2.0A/DCR=140mR/20%/2.00x1.60x1.00mm/L2016(PIM201610-3R3MTS00)"} footprint={<Footprint_L1 />} noSchematicRepresentation={true}/>

    {/* R2: NA(10k/R0402) */}
    <chip name={"R2"} pcbX={-2.759} pcbY={-13.395} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(10k/R0402)"} footprint={<Footprint_R2 />} noSchematicRepresentation={true}/>

    {/* Q1: Q12MHz/18pF/30ppm/4P/3.2x2.5mm(ABM8-12.000MHZ-D2Y-T) */}
    <chip name={"Q1"} pcbX={0.162} pcbY={-8.823} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"Q12MHz/18pF/30ppm/4P/3.2x2.5mm(ABM8-12.000MHZ-D2Y-T)"} footprint={<Footprint_Q1 />} noSchematicRepresentation={true}/>

    {/* C21: 27pF/50V/5%/C0G/C0402 */}
    <chip name={"C21"} pcbX={-0.6} pcbY={-6.537} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"27pF/50V/5%/C0G/C0402"} footprint={<Footprint_C21 />} noSchematicRepresentation={true}/>

    {/* FB1: PZ1005U601-R45TF/0.34OHM/0.45A */}
    <chip name={"FB1"} pcbX={6.131} pcbY={8.957} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"PZ1005U601-R45TF/0.34OHM/0.45A"} footprint={<Footprint_FB1 />} noSchematicRepresentation={true}/>

    {/* Logo_OLIMEX_80: Logo_OLIMEX_80 */}
    <chip name={"Logo_OLIMEX_80"} pcbX={-5.7816} pcbY={-28.508} pcbRotation={90} pinLabels={{}} displayName={"Logo_OLIMEX_80"} footprint={<Footprint_Logo_OLIMEX_80 />} noSchematicRepresentation={true}/>

    {/* C22: 22uF/6.3V/20%/X5R/C0603 */}
    <chip name={"C22"} pcbX={2.448} pcbY={21.911} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"22uF/6.3V/20%/X5R/C0603"} footprint={<Footprint_C22 />} noSchematicRepresentation={true}/>

    {/* C2: NA(100nF/10V/20%/X5R/C0402) */}
    <chip name={"C2"} pcbX={4.607} pcbY={-5.648} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(100nF/10V/20%/X5R/C0402)"} footprint={<Footprint_C2 />} noSchematicRepresentation={true}/>

    {/* U3: RP2350B(QFN-80_10.00x10.00x0.90mm_P0.4mm) */}
    <chip name={"U3"} pcbX={0} pcbY={0.5} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["51"], "pin52": ["52"], "pin53": ["53"], "pin54": ["54"], "pin55": ["55"], "pin56": ["56"], "pin57": ["57"], "pin58": ["58"], "pin59": ["59"], "pin60": ["60"], "pin61": ["61"], "pin62": ["62"], "pin63": ["63"], "pin64": ["64"], "pin65": ["65"], "pin66": ["66"], "pin67": ["67"], "pin68": ["68"], "pin69": ["69"], "pin70": ["70"], "pin71": ["71"], "pin72": ["72"], "pin73": ["73"], "pin74": ["74"], "pin75": ["75"], "pin76": ["76"], "pin77": ["77"], "pin78": ["78"], "pin79": ["79"], "pin80": ["80"], "pin81": ["81"] }} displayName={"RP2350B(QFN-80_10.00x10.00x0.90mm_P0.4mm)"} footprint={<Footprint_U3 />} noSchematicRepresentation={true}/>

    {/* L2: 1.0uH/4.2A/DCR=35mR/20%/2.00x1.60x1.00mm/L2016(PIM201610-1R0MTS00) */}
    <chip name={"L2"} pcbX={-0.473} pcbY={19.625} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"1.0uH/4.2A/DCR=35mR/20%/2.00x1.60x1.00mm/L2016(PIM201610-1R0MTS00)"} footprint={<Footprint_L2 />} noSchematicRepresentation={true}/>

    {/* U2: TPS62A02ADRLR(SOT-563-6) */}
    <chip name={"U2"} pcbX={0.035} pcbY={22.292} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"TPS62A02ADRLR(SOT-563-6)"} footprint={<Footprint_U2 />} noSchematicRepresentation={true}/>

    {/* R3: 33R/R0402 */}
    <chip name={"R3"} pcbX={5.242} pcbY={8.957} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"33R/R0402"} footprint={<Footprint_R3 />} noSchematicRepresentation={true}/>

    {/* C20: 27pF/50V/5%/C0G/C0402 */}
    <chip name={"C20"} pcbX={2.829} pcbY={-8.188} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"27pF/50V/5%/C0G/C0402"} footprint={<Footprint_C20 />} noSchematicRepresentation={true}/>

    {/* C18: 4.7uF/10V/20%/X5R/C0402 */}
    <chip name={"C18"} pcbX={4.48} pcbY={7.306} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"4.7uF/10V/20%/X5R/C0402"} footprint={<Footprint_C18 />} noSchematicRepresentation={true}/>

    {/* C24: 22uF/6.3V/20%/X5R/C0603 */}
    <chip name={"C24"} pcbX={-2.886} pcbY={20.514} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"22uF/6.3V/20%/X5R/C0603"} footprint={<Footprint_C24 />} noSchematicRepresentation={true}/>

    {/* R11: 1k/R0402 */}
    <chip name={"R11"} pcbX={2.448} pcbY={-13.395} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"1k/R0402"} footprint={<Footprint_R11 />} noSchematicRepresentation={true}/>

    {/* R1: 10k/R0402 */}
    <chip name={"R1"} pcbX={-4.918} pcbY={13.021} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"10k/R0402"} footprint={<Footprint_R1 />} noSchematicRepresentation={true}/>

    {/* C1: 100nF/10V/20%/X5R/C0402 */}
    <chip name={"C1"} pcbX={-4.918} pcbY={16.196} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100nF/10V/20%/X5R/C0402"} footprint={<Footprint_C1 />} noSchematicRepresentation={true}/>

    {/* U1: W25Q16JVSSIQ */}
    <chip name={"U1"} pcbX={-1.743} pcbY={13.275} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"W25Q16JVSSIQ"} footprint={<Footprint_U1 />} noSchematicRepresentation={true}/>

    {/* R9: 1k/R0402 */}
    <chip name={"R9"} pcbX={1.432} pcbY={-6.537} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"1k/R0402"} footprint={<Footprint_R9 />} noSchematicRepresentation={true}/>

    {/* C25: NA(22uF/6.3V/20%/X5R/C0603) */}
    <chip name={"C25"} pcbX={-4.537} pcbY={20.514} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(22uF/6.3V/20%/X5R/C0603)"} footprint={<Footprint_C25 />} noSchematicRepresentation={true}/>

    {/* R14: 49.9k/1%/R0402 */}
    <chip name={"R14"} pcbX={-2.505} pcbY={22.673} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"49.9k/1%/R0402"} footprint={<Footprint_R14 />} noSchematicRepresentation={true}/>

    {/* QWST1: SH1.0-4P-180D */}
    <chip name={"QWST1"} pcbX={0} pcbY={-30.5} pcbRotation={0} pinLabels={{ "pin5": ["0"], "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"SH1.0-4P-180D"} footprint={<Footprint_QWST1 />} noSchematicRepresentation={true}/>

    {/* C19: 4.7uF/10V/20%/X5R/C0402 */}
    <chip name={"C19"} pcbX={6.131} pcbY={7.052} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"4.7uF/10V/20%/X5R/C0402"} footprint={<Footprint_C19 />} noSchematicRepresentation={true}/>

    {/* C6: 100nF/10V/20%/X5R/C0402 */}
    <chip name={"C6"} pcbX={-2.886} pcbY={-7.426} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100nF/10V/20%/X5R/C0402"} footprint={<Footprint_C6 />} noSchematicRepresentation={true}/>

    {/* C5: 100nF/10V/20%/X5R/C0402 */}
    <chip name={"C5"} pcbX={-2.886} pcbY={-6.537} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100nF/10V/20%/X5R/C0402"} footprint={<Footprint_C5 />} noSchematicRepresentation={true}/>

    {/* R10: 5.1k/1%/R0402 */}
    <chip name={"R10"} pcbX={2.067} pcbY={27.372} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"5.1k/1%/R0402"} footprint={<Footprint_R10 />} noSchematicRepresentation={true}/>

    {/* R7: 27R/R0402 */}
    <chip name={"R7"} pcbX={0.797} pcbY={7.941} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"27R/R0402"} footprint={<Footprint_R7 />} noSchematicRepresentation={true}/>

    {/* R6: 27R/R0402 */}
    <chip name={"R6"} pcbX={1.686} pcbY={7.941} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"27R/R0402"} footprint={<Footprint_R6 />} noSchematicRepresentation={true}/>

    {/* C10: 100nF/10V/20%/X5R/C0402 */}
    <chip name={"C10"} pcbX={-2.378} pcbY={5.782} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100nF/10V/20%/X5R/C0402"} footprint={<Footprint_C10 />} noSchematicRepresentation={true}/>

    {/* C4: 100nF/10V/20%/X5R/C0402 */}
    <chip name={"C4"} pcbX={-4.791} pcbY={-0.06} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100nF/10V/20%/X5R/C0402"} footprint={<Footprint_C4 />} noSchematicRepresentation={true}/>

    {/* R20: NA(10k/R0402) */}
    <chip name={"R20"} pcbX={-1.997} pcbY={-17.078} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(10k/R0402)"} footprint={<Footprint_R20 />} noSchematicRepresentation={true}/>

    {/* Sign_PB-Free: Sign_PB-Free */}
    <chip name={"Sign_PB_Free"} pcbX={0.416} pcbY={-8.696} pcbRotation={180} pinLabels={{}} displayName={"Sign_PB-Free"} footprint={<Footprint_Sign_PB_Free />} noSchematicRepresentation={true}/>

    {/* C17: 100nF/10V/20%/X5R/C0402 */}
    <chip name={"C17"} pcbX={1.686} pcbY={2.734} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100nF/10V/20%/X5R/C0402"} footprint={<Footprint_C17 />} noSchematicRepresentation={true}/>

    {/* C9: 100nF/10V/20%/X5R/C0402 */}
    <chip name={"C9"} pcbX={2.067} pcbY={5.147} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100nF/10V/20%/X5R/C0402"} footprint={<Footprint_C9 />} noSchematicRepresentation={true}/>

    {/* C16: 4.7uF/10V/20%/X5R/C0402 */}
    <chip name={"C16"} pcbX={1.051} pcbY={-4.378} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"4.7uF/10V/20%/X5R/C0402"} footprint={<Footprint_C16 />} noSchematicRepresentation={true}/>

    {/* C11: 100nF/10V/20%/X5R/C0402 */}
    <chip name={"C11"} pcbX={0.543} pcbY={3.75} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100nF/10V/20%/X5R/C0402"} footprint={<Footprint_C11 />} noSchematicRepresentation={true}/>

    {/* U4: NA(W25Q128JVSIQ(SOIC-8_208mils)) */}
    <chip name={"U4"} pcbX={0.737} pcbY={15.307} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"NA(W25Q128JVSIQ(SOIC-8_208mils))"} footprint={<Footprint_U4 />} noSchematicRepresentation={true}/>

    {/* U5: NA(APS6404L-3SQR-SN(SOIC-8_150mils)) */}
    <chip name={"U5"} pcbX={0.737} pcbY={15.307} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"NA(APS6404L-3SQR-SN(SOIC-8_150mils))"} footprint={<Footprint_U5 />} noSchematicRepresentation={true}/>

    {/* FID4: Fiducial */}
    <chip name={"FID4"} pcbX={-5.045} pcbY={-33.08} pcbRotation={180} pinLabels={{ "pin1": ["Fid1"] }} displayName={"Fiducial"} footprint={<Footprint_FID4 />} noSchematicRepresentation={true}/>

    {/* C3: 100nF/10V/20%/X5R/C0402 */}
    <chip name={"C3"} pcbX={-4.791} pcbY={3.496} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100nF/10V/20%/X5R/C0402"} footprint={<Footprint_C3 />} noSchematicRepresentation={true}/>

    {/* C8: 100nF/10V/20%/X5R/C0402 */}
    <chip name={"C8"} pcbX={1.813} pcbY={0.956} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100nF/10V/20%/X5R/C0402"} footprint={<Footprint_C8 />} noSchematicRepresentation={true}/>

    {/* C26: NA(100nF/10V/20%/X5R/C0402) */}
    <chip name={"C26"} pcbX={-3.013} pcbY={18.99} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(100nF/10V/20%/X5R/C0402)"} footprint={<Footprint_C26 />} noSchematicRepresentation={true}/>

    {/* Sign_Antistatic_Small: Sign_Antistatic */}
    <chip name={"Sign_Antistatic_Small"} pcbX={0.035} pcbY={30.166} pcbRotation={180} pinLabels={{}} displayName={"Sign_Antistatic"} footprint={<Footprint_Sign_Antistatic_Small />} noSchematicRepresentation={true}/>

    {/* R25: NA(33R/R0402) */}
    <chip name={"R25"} pcbX={3.083} pcbY={-17.078} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(33R/R0402)"} footprint={<Footprint_R25 />} noSchematicRepresentation={true}/>

    {/* R16: NA(10k/R0402) */}
    <chip name={"R16"} pcbX={0.543} pcbY={18.99} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(10k/R0402)"} footprint={<Footprint_R16 />} noSchematicRepresentation={true}/>

    {/* FID6: Fiducial */}
    <chip name={"FID6"} pcbX={5.115} pcbY={-33.08} pcbRotation={180} pinLabels={{ "pin1": ["Fid1"] }} displayName={"Fiducial"} footprint={<Footprint_FID6 />} noSchematicRepresentation={true}/>

    {/* R23: NA(10k/R0402) */}
    <chip name={"R23"} pcbX={-5.045} pcbY={-17.078} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(10k/R0402)"} footprint={<Footprint_R23 />} noSchematicRepresentation={true}/>

    {/* C12: 100nF/10V/20%/X5R/C0402 */}
    <chip name={"C12"} pcbX={1.051} pcbY={5.147} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100nF/10V/20%/X5R/C0402"} footprint={<Footprint_C12 />} noSchematicRepresentation={true}/>

    {/* C13: 4.7uF/10V/20%/X5R/C0402 */}
    <chip name={"C13"} pcbX={3.083} pcbY={5.147} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"4.7uF/10V/20%/X5R/C0402"} footprint={<Footprint_C13 />} noSchematicRepresentation={true}/>

    {/* EXT2: HN1x27 */}
    <chip name={"EXT2"} pcbX={7.655} pcbY={0.067} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"] }} displayName={"HN1x27"} footprint={<Footprint_EXT2 />} noSchematicRepresentation={true}/>

    {/* FID5: Fiducial */}
    <chip name={"FID5"} pcbX={-4.664} pcbY={25.086} pcbRotation={180} pinLabels={{ "pin1": ["Fid1"] }} displayName={"Fiducial"} footprint={<Footprint_FID5 />} noSchematicRepresentation={true}/>

    {/* R21: NA(10k/R0402) */}
    <chip name={"R21"} pcbX={4.353} pcbY={-17.078} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(10k/R0402)"} footprint={<Footprint_R21 />} noSchematicRepresentation={true}/>

    {/* EXT1: HN1x27 */}
    <chip name={"EXT1"} pcbX={-7.585} pcbY={0.067} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"] }} displayName={"HN1x27"} footprint={<Footprint_EXT1 />} noSchematicRepresentation={true}/>

    {/* R22: NA(10k/R0402) */}
    <chip name={"R22"} pcbX={5.242} pcbY={-17.078} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(10k/R0402)"} footprint={<Footprint_R22 />} noSchematicRepresentation={true}/>

    {/* C7: 100nF/10V/20%/X5R/C0402 */}
    <chip name={"C7"} pcbX={1.813} pcbY={0.067} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100nF/10V/20%/X5R/C0402"} footprint={<Footprint_C7 />} noSchematicRepresentation={true}/>

    {/* Logo_OLIMEX_80-Bot: Logo_OLIMEX_80 */}
    <chip name={"Logo_OLIMEX_80_Bot"} pcbX={2.7782} pcbY={25.2892} pcbRotation={180} pinLabels={{}} displayName={"Logo_OLIMEX_80"} footprint={<Footprint_Logo_OLIMEX_80_Bot />} noSchematicRepresentation={true}/>

    {/* R19: NA(10k/R0402) */}
    <chip name={"R19"} pcbX={-4.156} pcbY={-17.078} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(10k/R0402)"} footprint={<Footprint_R19 />} noSchematicRepresentation={true}/>

    {/* Sign_OSHW_7.3x6.0mm: Sign_OSHW_7.3x6.0mm */}
    <chip name={"Sign_OSHW_7_3x6_0mm"} pcbX={-3.394} pcbY={-3.616} pcbRotation={180} pinLabels={{}} displayName={"Sign_OSHW_7.3x6.0mm"} footprint={<Footprint_Sign_OSHW_7_3x6_0mm />} noSchematicRepresentation={true}/>

    {/* L3: NA(600OHM/2A/UPZ2012E-601-2R0TF/0805) */}
    <chip name={"L3"} pcbX={0.289} pcbY={-15.046} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(600OHM/2A/UPZ2012E-601-2R0TF/0805)"} footprint={<Footprint_L3 />} noSchematicRepresentation={true}/>

    {/* Sign_CE: CE_Sign */}
    <chip name={"Sign_CE"} pcbX={-0.981} pcbY={-32.064} pcbRotation={180} pinLabels={{}} displayName={"CE_Sign"} footprint={<Footprint_Sign_CE />} noSchematicRepresentation={true}/>

    {/* R24: NA(33R/R0402) */}
    <chip name={"R24"} pcbX={-3.267} pcbY={-17.078} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(33R/R0402)"} footprint={<Footprint_R24 />} noSchematicRepresentation={true}/>

    {/* R27: NA */}
    <chip name={"R27"} pcbX={2.321} pcbY={-13.268} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA"} footprint={<Footprint_R27 />} noSchematicRepresentation={true}/>

    {/* Sign_RecycleBin_1: Sign_RecycleBin_1 */}
    <chip name={"Sign_RecycleBin_1"} pcbX={-1.235} pcbY={-12.506} pcbRotation={180} pinLabels={{}} displayName={"Sign_RecycleBin_1"} footprint={<Footprint_Sign_RecycleBin_1 />} noSchematicRepresentation={true}/>

    {/* C27: NA(47uF/6.3V/20%/X5R/C0805) */}
    <chip name={"C27"} pcbX={0.543} pcbY={-17.078} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(47uF/6.3V/20%/X5R/C0805)"} footprint={<Footprint_C27 />} noSchematicRepresentation={true}/>

    {/* C15: 100nF/10V/20%/X5R/C0402 */}
    <chip name={"C15"} pcbX={-4.791} pcbY={1.718} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100nF/10V/20%/X5R/C0402"} footprint={<Footprint_C15 />} noSchematicRepresentation={true}/>

    {/* MICRO_SD1: NA(TFC-9P-1.7H(ATFFS150A01BR016)) */}
    <chip name={"MICRO_SD1"} pcbX={0.05} pcbY={-22.5} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["CD1"], "pin10": ["CH1"] }} displayName={"NA(TFC-9P-1.7H(ATFFS150A01BR016))"} footprint={<Footprint_MICRO_SD1 />} noSchematicRepresentation={true}/>

    {/* R26: NA(33R/R0402) */}
    <chip name={"R26"} pcbX={2.829} pcbY={-11.617} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(33R/R0402)"} footprint={<Footprint_R26 />} noSchematicRepresentation={true}/>

    {/* KiCad net: unconnected-(FID1-FID*-PadFid1) */}
    <KiCadNet name={"unconnected__FID1_FID__PadFid1_"} connectsTo={[".FID1 > .pin1"]}/>
    {/* KiCad net: GND */}
    <KiCadNet name={"GND"} connectsTo={[".LED1 > .pin1", ".RST1 > .pin2", ".R5 > .pin1", ".pUEXT1 > .pin11", ".pUEXT1 > .pin2", ".BOOT1 > .pin2", ".USB_C1 > .pin1", ".USB_C1 > .pin2", ".USB_C1 > .pin9", ".USB_C1 > .pin10", ".USB_C1 > .pin17", ".C14 > .pin2", ".SWD1 > .pin3", ".Q1 > .pin3", ".C21 > .pin2", ".C22 > .pin2", ".C2 > .pin2", ".U3 > .pin62", ".U3 > .pin81", ".U2 > .pin1", ".C20 > .pin2", ".C18 > .pin2", ".C24 > .pin2", ".C1 > .pin1", ".U1 > .pin4", ".C25 > .pin2", ".R14 > .pin2", ".QWST1 > .pin5", ".QWST1 > .pin1", ".C19 > .pin2", ".C6 > .pin2", ".C5 > .pin2", ".R10 > .pin1", ".C10 > .pin2", ".C4 > .pin2", ".C17 > .pin2", ".C9 > .pin2", ".C16 > .pin2", ".C11 > .pin2", ".U4 > .pin4", ".U5 > .pin4", ".C3 > .pin2", ".C8 > .pin2", ".C26 > .pin1", ".C12 > .pin2", ".C13 > .pin2", ".EXT2 > .pin3", ".EXT1 > .pin2", ".C7 > .pin2", ".C27 > .pin2", ".C15 > .pin2", ".MICRO_SD1 > .pin6", ".MICRO_SD1 > .pin10"]}/>
    {/* KiCad net: Net-(LED1-A) */}
    <KiCadNet name={"Net__LED1_A_"} connectsTo={[".LED1 > .pin2", ".R15 > .pin1"]}/>
    {/* KiCad net: unconnected-(FID3-FID*-PadFid1) */}
    <KiCadNet name={"unconnected__FID3_FID__PadFid1_"} connectsTo={[".FID3 > .pin1"]}/>
    {/* KiCad net: unconnected-(FID2-FID*-PadFid1) */}
    <KiCadNet name={"unconnected__FID2_FID__PadFid1_"} connectsTo={[".FID2 > .pin1"]}/>
    {/* KiCad net: VSYS */}
    <KiCadNet name={"VSYS"} connectsTo={[".D1 > .pin1", ".R12 > .pin1", ".C22 > .pin1", ".U2 > .pin3", ".EXT2 > .pin2"]}/>
    {/* KiCad net: VBUS */}
    <KiCadNet name={"VBUS"} connectsTo={[".D1 > .pin2", ".USB_C1 > .pin3", ".USB_C1 > .pin8", ".USB_C1 > .pin11", ".USB_C1 > .pin16", ".EXT2 > .pin1"]}/>
    {/* KiCad net: +3.3V */}
    <KiCadNet name={"_3_3V"} connectsTo={[".R18 > .pin1", ".R17 > .pin1", ".pUEXT1 > .pin1", ".R13 > .pin2", ".R2 > .pin1", ".FB1 > .pin1", ".U3 > .pin5", ".U3 > .pin15", ".U3 > .pin24", ".U3 > .pin29", ".U3 > .pin41", ".U3 > .pin50", ".U3 > .pin60", ".U3 > .pin64", ".U3 > .pin68", ".U3 > .pin69", ".U3 > .pin76", ".L2 > .pin1", ".R3 > .pin1", ".C24 > .pin1", ".R1 > .pin1", ".C1 > .pin2", ".U1 > .pin8", ".C25 > .pin1", ".QWST1 > .pin2", ".C6 > .pin1", ".C5 > .pin1", ".C10 > .pin1", ".C4 > .pin1", ".R20 > .pin1", ".C9 > .pin1", ".C11 > .pin1", ".U4 > .pin8", ".U5 > .pin8", ".C3 > .pin1", ".C8 > .pin1", ".C26 > .pin2", ".R16 > .pin1", ".R23 > .pin1", ".C12 > .pin1", ".C13 > .pin1", ".R21 > .pin1", ".EXT1 > .pin1", ".R22 > .pin1", ".C7 > .pin1", ".R19 > .pin1", ".L3 > .pin1"]}/>
    {/* KiCad net: /GPIO2\I2C1_SDA */}
    <KiCadNet name={"_GPIO2_I2C1_SDA"} connectsTo={[".R18 > .pin2", ".pUEXT1 > .pin6", ".U3 > .pin79", ".QWST1 > .pin3", ".EXT1 > .pin6"]}/>
    {/* KiCad net: /GPIO3\I2C1_SCL */}
    <KiCadNet name={"_GPIO3_I2C1_SCL"} connectsTo={[".R17 > .pin2", ".pUEXT1 > .pin5", ".U3 > .pin80", ".QWST1 > .pin4", ".EXT1 > .pin7"]}/>
    {/* KiCad net: /RUN */}
    <KiCadNet name={"_RUN"} connectsTo={[".RST1 > .pin1", ".R2 > .pin2", ".C2 > .pin1", ".U3 > .pin35"]}/>
    {/* KiCad net: /USB_CC2 */}
    <KiCadNet name={"_USB_CC2"} connectsTo={[".R5 > .pin2", ".USB_C1 > .pin12"]}/>
    {/* KiCad net: /3V3_EN */}
    <KiCadNet name={"_3V3_EN"} connectsTo={[".R12 > .pin2", ".U2 > .pin4", ".EXT1 > .pin3"]}/>
    {/* KiCad net: /GPIO0\UART0_TX */}
    <KiCadNet name={"_GPIO0_UART0_TX"} connectsTo={[".pUEXT1 > .pin3", ".U3 > .pin77", ".EXT1 > .pin4"]}/>
    {/* KiCad net: /GPIO1\UART0_RX */}
    <KiCadNet name={"_GPIO1_UART0_RX"} connectsTo={[".pUEXT1 > .pin4", ".U3 > .pin78", ".EXT1 > .pin5"]}/>
    {/* KiCad net: /GPIO4\SPI0_RX(MISO) */}
    <KiCadNet name={"_GPIO4_SPI0_RX_MISO_"} connectsTo={[".pUEXT1 > .pin7", ".U3 > .pin1", ".EXT1 > .pin8"]}/>
    {/* KiCad net: /GPIO7\SPI0_TX(MOSI) */}
    <KiCadNet name={"_GPIO7_SPI0_TX_MOSI_"} connectsTo={[".pUEXT1 > .pin8", ".U3 > .pin4", ".EXT1 > .pin11"]}/>
    {/* KiCad net: /GPIO6\SPI0_SCK(SCK) */}
    <KiCadNet name={"_GPIO6_SPI0_SCK_SCK_"} connectsTo={[".pUEXT1 > .pin9", ".U3 > .pin3", ".EXT1 > .pin10"]}/>
    {/* KiCad net: /GPIO5\SPI0_CSn(CS#) */}
    <KiCadNet name={"_GPIO5_SPI0_CSn_CS__"} connectsTo={[".pUEXT1 > .pin10", ".U3 > .pin2", ".EXT1 > .pin9"]}/>
    {/* KiCad net: /BOOTSEL# */}
    <KiCadNet name={"_BOOTSEL_"} connectsTo={[".BOOT1 > .pin1", ".R11 > .pin2"]}/>
    {/* KiCad net: /GPIO25\User_Led */}
    <KiCadNet name={"_GPIO25_User_Led"} connectsTo={[".R15 > .pin2", ".U3 > .pin26", ".EXT2 > .pin5"]}/>
    {/* KiCad net: /USB_CC1 */}
    <KiCadNet name={"_USB_CC1"} connectsTo={[".USB_C1 > .pin4", ".R10 > .pin2"]}/>
    {/* KiCad net: /USB_D+ */}
    <KiCadNet name={"_USB_D_"} connectsTo={[".USB_C1 > .pin5", ".USB_C1 > .pin13", ".R7 > .pin1"]}/>
    {/* KiCad net: /USB_D- */}
    <KiCadNet name={"_USB_D__"} connectsTo={[".USB_C1 > .pin6", ".USB_C1 > .pin14", ".R6 > .pin1"]}/>
    {/* KiCad net: unconnected-(USB-C1-SBU1-PadA8) */}
    <KiCadNet name={"unconnected__USB_C1_SBU1_PadA8_"} connectsTo={[".USB_C1 > .pin7"]}/>
    {/* KiCad net: unconnected-(USB-C1-SBU2-PadB8) */}
    <KiCadNet name={"unconnected__USB_C1_SBU2_PadB8_"} connectsTo={[".USB_C1 > .pin15"]}/>
    {/* KiCad net: Net-(U2-FB) */}
    <KiCadNet name={"Net__U2_FB_"} connectsTo={[".R13 > .pin1", ".U2 > .pin5", ".R14 > .pin1"]}/>
    {/* KiCad net: /+1V1 */}
    <KiCadNet name={"__1V1"} connectsTo={[".C14 > .pin1", ".L1 > .pin1", ".U3 > .pin10", ".U3 > .pin32", ".U3 > .pin51", ".U3 > .pin65", ".C17 > .pin1", ".C16 > .pin1", ".C15 > .pin1"]}/>
    {/* KiCad net: /SWDIO */}
    <KiCadNet name={"_SWDIO"} connectsTo={[".SWD1 > .pin1", ".U3 > .pin34"]}/>
    {/* KiCad net: /SWCLK */}
    <KiCadNet name={"_SWCLK"} connectsTo={[".SWD1 > .pin2", ".U3 > .pin33"]}/>
    {/* KiCad net: Net-(U3-VREG_LX) */}
    <KiCadNet name={"Net__U3_VREG_LX_"} connectsTo={[".L1 > .pin2", ".U3 > .pin63"]}/>
    {/* KiCad net: Net-(C20-Pad1) */}
    <KiCadNet name={"Net__C20_Pad1_"} connectsTo={[".Q1 > .pin1", ".C20 > .pin1", ".R9 > .pin1"]}/>
    {/* KiCad net: Net-(U3-XIN) */}
    <KiCadNet name={"Net__U3_XIN_"} connectsTo={[".Q1 > .pin2", ".C21 > .pin1", ".U3 > .pin30"]}/>
    {/* KiCad net: /ADC_AVDD */}
    <KiCadNet name={"_ADC_AVDD"} connectsTo={[".FB1 > .pin2", ".U3 > .pin59", ".C19 > .pin1"]}/>
    {/* KiCad net: /GPIO8\QMI_CS1n */}
    <KiCadNet name={"_GPIO8_QMI_CS1n"} connectsTo={[".U3 > .pin6", ".U4 > .pin1", ".U5 > .pin1", ".R16 > .pin2", ".EXT1 > .pin12"]}/>
    {/* KiCad net: /GPIO9\SPI1_CSn */}
    <KiCadNet name={"_GPIO9_SPI1_CSn"} connectsTo={[".U3 > .pin7", ".EXT1 > .pin13", ".R24 > .pin1", ".R27 > .pin1"]}/>
    {/* KiCad net: /GPIO10\SPI1_SCK\SD_CLK */}
    <KiCadNet name={"_GPIO10_SPI1_SCK_SD_CLK"} connectsTo={[".U3 > .pin8", ".R25 > .pin1", ".EXT1 > .pin14"]}/>
    {/* KiCad net: /GPIO11\SPI1_TX\SD_CMD */}
    <KiCadNet name={"_GPIO11_SPI1_TX_SD_CMD"} connectsTo={[".U3 > .pin9", ".R20 > .pin2", ".EXT1 > .pin15", ".MICRO_SD1 > .pin3"]}/>
    {/* KiCad net: /GPIO12 */}
    <KiCadNet name={"_GPIO12"} connectsTo={[".U3 > .pin11", ".EXT1 > .pin16"]}/>
    {/* KiCad net: /GPIO13 */}
    <KiCadNet name={"_GPIO13"} connectsTo={[".U3 > .pin12", ".EXT1 > .pin17"]}/>
    {/* KiCad net: /GPIO14 */}
    <KiCadNet name={"_GPIO14"} connectsTo={[".U3 > .pin13", ".EXT1 > .pin18"]}/>
    {/* KiCad net: /GPIO15 */}
    <KiCadNet name={"_GPIO15"} connectsTo={[".U3 > .pin14", ".EXT1 > .pin19"]}/>
    {/* KiCad net: /GPIO16 */}
    <KiCadNet name={"_GPIO16"} connectsTo={[".U3 > .pin16", ".EXT1 > .pin20"]}/>
    {/* KiCad net: /GPIO17 */}
    <KiCadNet name={"_GPIO17"} connectsTo={[".U3 > .pin17", ".EXT1 > .pin21"]}/>
    {/* KiCad net: /GPIO18 */}
    <KiCadNet name={"_GPIO18"} connectsTo={[".U3 > .pin18", ".EXT1 > .pin22"]}/>
    {/* KiCad net: /GPIO19 */}
    <KiCadNet name={"_GPIO19"} connectsTo={[".U3 > .pin19", ".EXT1 > .pin23"]}/>
    {/* KiCad net: /GPIO20 */}
    <KiCadNet name={"_GPIO20"} connectsTo={[".U3 > .pin20", ".EXT1 > .pin24"]}/>
    {/* KiCad net: /GPIO21 */}
    <KiCadNet name={"_GPIO21"} connectsTo={[".U3 > .pin21", ".EXT1 > .pin25"]}/>
    {/* KiCad net: /GPIO22 */}
    <KiCadNet name={"_GPIO22"} connectsTo={[".U3 > .pin22", ".EXT1 > .pin26"]}/>
    {/* KiCad net: /GPIO23 */}
    <KiCadNet name={"_GPIO23"} connectsTo={[".U3 > .pin23", ".EXT1 > .pin27"]}/>
    {/* KiCad net: /GPIO24\SPI1_RX\SD_DAT0 */}
    <KiCadNet name={"_GPIO24_SPI1_RX_SD_DAT0"} connectsTo={[".U3 > .pin25", ".EXT2 > .pin4", ".R26 > .pin1"]}/>
    {/* KiCad net: /GPIO26 */}
    <KiCadNet name={"_GPIO26"} connectsTo={[".U3 > .pin27", ".EXT2 > .pin6"]}/>
    {/* KiCad net: /GPIO27 */}
    <KiCadNet name={"_GPIO27"} connectsTo={[".U3 > .pin28", ".EXT2 > .pin7"]}/>
    {/* KiCad net: Net-(U3-XOUT) */}
    <KiCadNet name={"Net__U3_XOUT_"} connectsTo={[".U3 > .pin31", ".R9 > .pin2"]}/>
    {/* KiCad net: /GPIO28 */}
    <KiCadNet name={"_GPIO28"} connectsTo={[".U3 > .pin36", ".EXT2 > .pin8"]}/>
    {/* KiCad net: /GPIO29 */}
    <KiCadNet name={"_GPIO29"} connectsTo={[".U3 > .pin37", ".EXT2 > .pin9"]}/>
    {/* KiCad net: /GPIO30 */}
    <KiCadNet name={"_GPIO30"} connectsTo={[".U3 > .pin38", ".EXT2 > .pin10"]}/>
    {/* KiCad net: /GPIO31 */}
    <KiCadNet name={"_GPIO31"} connectsTo={[".U3 > .pin39", ".EXT2 > .pin11"]}/>
    {/* KiCad net: /GPIO32 */}
    <KiCadNet name={"_GPIO32"} connectsTo={[".U3 > .pin40", ".EXT2 > .pin12"]}/>
    {/* KiCad net: /GPIO33 */}
    <KiCadNet name={"_GPIO33"} connectsTo={[".U3 > .pin42", ".EXT2 > .pin13"]}/>
    {/* KiCad net: /GPIO34 */}
    <KiCadNet name={"_GPIO34"} connectsTo={[".U3 > .pin43", ".EXT2 > .pin14"]}/>
    {/* KiCad net: /GPIO35 */}
    <KiCadNet name={"_GPIO35"} connectsTo={[".U3 > .pin44", ".EXT2 > .pin15"]}/>
    {/* KiCad net: /GPIO36 */}
    <KiCadNet name={"_GPIO36"} connectsTo={[".U3 > .pin45", ".EXT2 > .pin16"]}/>
    {/* KiCad net: /GPIO37 */}
    <KiCadNet name={"_GPIO37"} connectsTo={[".U3 > .pin46", ".EXT2 > .pin17"]}/>
    {/* KiCad net: /GPIO38 */}
    <KiCadNet name={"_GPIO38"} connectsTo={[".U3 > .pin47", ".EXT2 > .pin18"]}/>
    {/* KiCad net: /GPIO39 */}
    <KiCadNet name={"_GPIO39"} connectsTo={[".U3 > .pin48", ".EXT2 > .pin19"]}/>
    {/* KiCad net: /GPIO40 */}
    <KiCadNet name={"_GPIO40"} connectsTo={[".U3 > .pin49", ".EXT2 > .pin20"]}/>
    {/* KiCad net: /GPIO41 */}
    <KiCadNet name={"_GPIO41"} connectsTo={[".U3 > .pin52", ".EXT2 > .pin21"]}/>
    {/* KiCad net: /GPIO42 */}
    <KiCadNet name={"_GPIO42"} connectsTo={[".U3 > .pin53", ".EXT2 > .pin22"]}/>
    {/* KiCad net: /GPIO43 */}
    <KiCadNet name={"_GPIO43"} connectsTo={[".U3 > .pin54", ".EXT2 > .pin23"]}/>
    {/* KiCad net: /GPIO44 */}
    <KiCadNet name={"_GPIO44"} connectsTo={[".U3 > .pin55", ".EXT2 > .pin24"]}/>
    {/* KiCad net: /GPIO45 */}
    <KiCadNet name={"_GPIO45"} connectsTo={[".U3 > .pin56", ".EXT2 > .pin25"]}/>
    {/* KiCad net: /GPIO46 */}
    <KiCadNet name={"_GPIO46"} connectsTo={[".U3 > .pin57", ".EXT2 > .pin26"]}/>
    {/* KiCad net: /GPIO47 */}
    <KiCadNet name={"_GPIO47"} connectsTo={[".U3 > .pin58", ".EXT2 > .pin27"]}/>
    {/* KiCad net: /VREG_AVDD */}
    <KiCadNet name={"_VREG_AVDD"} connectsTo={[".U3 > .pin61", ".R3 > .pin2", ".C18 > .pin1"]}/>
    {/* KiCad net: /D- */}
    <KiCadNet name={"_D_"} connectsTo={[".U3 > .pin66", ".R6 > .pin2"]}/>
    {/* KiCad net: /D+ */}
    <KiCadNet name={"_D__"} connectsTo={[".U3 > .pin67", ".R7 > .pin2"]}/>
    {/* KiCad net: /QSPI_SD3 */}
    <KiCadNet name={"_QSPI_SD3"} connectsTo={[".U3 > .pin70", ".U1 > .pin7", ".U4 > .pin7", ".U5 > .pin7"]}/>
    {/* KiCad net: /QSPI_CLK */}
    <KiCadNet name={"_QSPI_CLK"} connectsTo={[".U3 > .pin71", ".U1 > .pin6", ".U4 > .pin6", ".U5 > .pin6"]}/>
    {/* KiCad net: /QSPI_SD0 */}
    <KiCadNet name={"_QSPI_SD0"} connectsTo={[".U3 > .pin72", ".U1 > .pin5", ".U4 > .pin5", ".U5 > .pin5"]}/>
    {/* KiCad net: /QSPI_SD2 */}
    <KiCadNet name={"_QSPI_SD2"} connectsTo={[".U3 > .pin73", ".U1 > .pin3", ".U4 > .pin3", ".U5 > .pin3"]}/>
    {/* KiCad net: /QSPI_SD1 */}
    <KiCadNet name={"_QSPI_SD1"} connectsTo={[".U3 > .pin74", ".U1 > .pin2", ".U4 > .pin2", ".U5 > .pin2"]}/>
    {/* KiCad net: /QSPI_CSn */}
    <KiCadNet name={"_QSPI_CSn"} connectsTo={[".U3 > .pin75", ".R11 > .pin1", ".R1 > .pin2", ".U1 > .pin1"]}/>
    {/* KiCad net: /SW1 */}
    <KiCadNet name={"_SW1"} connectsTo={[".L2 > .pin2", ".U2 > .pin2"]}/>
    {/* KiCad net: unconnected-(U2-PG-Pad6) */}
    <KiCadNet name={"unconnected__U2_PG_Pad6_"} connectsTo={[".U2 > .pin6"]}/>
    {/* KiCad net: unconnected-(FID4-FID*-PadFid1) */}
    <KiCadNet name={"unconnected__FID4_FID__PadFid1_"} connectsTo={[".FID4 > .pin1"]}/>
    {/* KiCad net: Net-(MICRO_SD1-CLK{slash}SCLK) */}
    <KiCadNet name={"Net__MICRO_SD1_CLK_slash_SCLK_"} connectsTo={[".R25 > .pin2", ".MICRO_SD1 > .pin5"]}/>
    {/* KiCad net: unconnected-(FID6-FID*-PadFid1) */}
    <KiCadNet name={"unconnected__FID6_FID__PadFid1_"} connectsTo={[".FID6 > .pin1"]}/>
    {/* KiCad net: Net-(MICRO_SD1-DAT2{slash}RES) */}
    <KiCadNet name={"Net__MICRO_SD1_DAT2_slash_RES_"} connectsTo={[".R23 > .pin2", ".MICRO_SD1 > .pin1"]}/>
    {/* KiCad net: unconnected-(FID5-FID*-PadFid1) */}
    <KiCadNet name={"unconnected__FID5_FID__PadFid1_"} connectsTo={[".FID5 > .pin1"]}/>
    {/* KiCad net: Net-(MICRO_SD1-DAT0{slash}DO) */}
    <KiCadNet name={"Net__MICRO_SD1_DAT0_slash_DO_"} connectsTo={[".R21 > .pin2", ".R27 > .pin2", ".MICRO_SD1 > .pin7", ".R26 > .pin2"]}/>
    {/* KiCad net: Net-(MICRO_SD1-DAT1{slash}RES) */}
    <KiCadNet name={"Net__MICRO_SD1_DAT1_slash_RES_"} connectsTo={[".R22 > .pin2", ".MICRO_SD1 > .pin8"]}/>
    {/* KiCad net: Net-(MICRO_SD1-CD{slash}DAT3{slash}CS) */}
    <KiCadNet name={"Net__MICRO_SD1_CD_slash_DAT3_slash_CS_"} connectsTo={[".R19 > .pin2", ".R24 > .pin2", ".MICRO_SD1 > .pin2"]}/>
    {/* KiCad net: /SD_VDD */}
    <KiCadNet name={"_SD_VDD"} connectsTo={[".L3 > .pin2", ".C27 > .pin1", ".MICRO_SD1 > .pin4"]}/>
    {/* KiCad net: unconnected-(MICRO_SD1-Card_Detect-PadCD1) */}
    <KiCadNet name={"unconnected__MICRO_SD1_Card_Detect_PadCD1_"} connectsTo={[".MICRO_SD1 > .pin9"]}/>
    <KiCadSchematic /></board>);
}
