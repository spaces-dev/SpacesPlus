export interface HistoryEntry {
  build: number
  date: string
  changes: string
}

export interface CheckUpdates {
  history: HistoryEntry[]
}
