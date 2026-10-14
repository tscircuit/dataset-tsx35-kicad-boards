# dataset-tsx35-kicad-boards

25 KiCad boards from the [Zap comparison](https://zap.mutual.solutions/compare#cmp), reconstructed as native tscircuit TSX: 3,981 PCB components and 4,653 nets. Original PCB placements are retained; silkscreen text and drawings are omitted.

[View on tscircuit.com](https://tscircuit.com/0hmX/dataset-tsx35-kicad-boards)

## Run

```sh
bun install --frozen-lockfile --ignore-scripts
bun run dev
bun run typecheck
bun run build --site
```

`tsconfig.json`, `tscircuit.config.json`, and all six scripts match `tsci init`. Dependencies are pinned for compatibility. To build one board's HTML preview:

```sh
bun run build examples/b03-ftdi-jtag.circuit.tsx --site
```

All 25 boards enable the normal automatic router by default, with `routeRemaining={true}`. Their original assigned KiCad copper zones are declared as native `<copperpour />` elements, preserving net names, layers, priority order, and board boundaries. Inner planes reserve their regions; outer pours fill around routed traces.

To build an inspection preview without running the autorouter (also used by CI):

```sh
bun run build examples/b03-ftdi-jtag.circuit.tsx --site --routing-disabled
```

## Files

- `boards/<id>/`: editable board, footprint, and schematic TSX, plus the upstream license.
- `examples/*.circuit.tsx`: one preview entrypoint per board.
- `upstream-schematics/`: original KiCad schematics and project settings.
- `manifest.json`: entrypoints, counts, and pinned upstream sources; exported by `index.js` with lightweight `index.d.ts` types.

Install the dataset from GitHub with `bun add github:tscircuit/dataset-tsx35-kicad-boards`. No transpilation is needed.

## Scope

All 25 boards matched 15,235 shared physical terminals against KiCad-exported schematic netlists with zero net mismatches. The TSX contains explicit native connections. Generated checking reports and conversion intermediates are excluded from this package.

Original tracks and vias are omitted; running a preview or build generates routes with the normal autorouter. Copper zones without an assigned electrical net are excluded. Schematics retain sheet grouping and use native passive symbols or generic boxes. Original component CAD bodies are not included. Full schematic rendering completed for 22 boards; ECP5 DC-SCM, HackRF Pro, and Kintex PCIe exceeded the renderer time limit. Source placement/DRC findings remain; fabrication readiness has not been established.

Each board retains `LICENSE.upstream`. There is no blanket corpus license; `manifest.json` records each original repository, commit, license, and selected PCB.
