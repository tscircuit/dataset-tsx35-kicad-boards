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

## Files

- `boards/<id>/`: editable board, footprint, and schematic TSX, plus the upstream license.
- `examples/*.circuit.tsx`: one preview entrypoint per board.
- `upstream-schematics/`: original KiCad schematics and project settings.
- `manifest.json`: entrypoints, counts, and pinned upstream sources; exported by `index.js` with lightweight `index.d.ts` types.

Install the dataset from GitHub with `bun add github:tscircuit/dataset-tsx35-kicad-boards`. No transpilation is needed.

## Scope

All 25 boards matched 15,235 shared physical terminals against KiCad-exported schematic netlists with zero net mismatches. The TSX contains explicit native connections. Generated checking reports and conversion intermediates are excluded from this package.

These are unrouted reconstructions: original tracks, vias, and pours are omitted, and routing is disabled by default. Schematics retain sheet grouping and use native passive symbols or generic boxes. Original component CAD bodies are not included. Full schematic rendering completed for 22 boards; ECP5 DC-SCM, HackRF Pro, and Kintex PCIe exceeded the renderer time limit. Source placement/DRC findings remain; fabrication readiness has not been established.

Each board retains `LICENSE.upstream`. There is no blanket corpus license; `manifest.json` records each original repository, commit, license, and selected PCB.
