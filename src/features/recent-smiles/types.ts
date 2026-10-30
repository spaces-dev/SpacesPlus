export type SmileEntry
  = | [string, number, number]
    | [string, number, number, number, number]
    | [string, number, number, number, number, string]

export type SmileMap = Record<string, SmileEntry>

export type SmileBox = [number, number]

export interface CapturedSmile {
  cell: SmileBox | null
  image: SmileBox | null
  srcset: string
}
