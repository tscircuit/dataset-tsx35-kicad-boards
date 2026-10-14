import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
const dataset = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
let failures = 0
for (const board of JSON.parse(fs.readFileSync(path.join(dataset, 'manifest.json')))) {
  const result = spawnSync(process.execPath, [path.join(dataset, 'tools/check.mjs'), dataset, board.id], {stdio: 'inherit'})
  if (result.status !== 0) failures++
}
process.exitCode = failures ? 1 : 0
