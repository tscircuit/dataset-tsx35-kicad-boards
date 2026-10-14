export interface BoardEntry {
  id: string
  components: number
  nets: number
  source: string
  schematic: string
  schematic_sheets: number
  schematic_source: string
  upstream: {
    name: string
    author: string
    repository: string
    commit: string
    license: string
    pcb: string
    pcb_git_blob_sha: string
  }
}

declare const boards: BoardEntry[]
export { boards }
export default boards
