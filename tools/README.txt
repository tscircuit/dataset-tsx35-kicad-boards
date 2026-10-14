check.mjs / check-all.mjs compile native TSX and compare it with validation-reference.json.
Use CHECK_SCHEMATIC=1 to enable the full schematic renderer during those checks.

check-kicad-nets.py exports the pinned upstream KiCad schematics to netlists and
compares connected sets of shared physical terminals with metadata.json. The native
compile check then independently verifies that the TSX implements those same nets.

The standard tsci dev server reads tscircuit.config.json to exclude validation
reports, original KiCad files, and generated output from its watcher.
