export interface BoardEntry {
  id: string
  components: number
  nets: number
  source: string
  success: boolean
  schematic: string
  schematic_sheets: number
  schematic_net_check: string
  schematic_source: string
  silkscreen_omitted: boolean
}

declare const boards: BoardEntry[]
export { boards }
export default boards
