import type { CapturedSmile, SmileEntry, SmileMap } from './types'
import { LocalStorage } from '@zero-dependency/storage'
import { getSettings } from '@/core/settings-store'

const smilesKey = 'sp_recent_smiles'
const smiles = new LocalStorage<Record<string, unknown>>(smilesKey, {})

function sitePath(src: string) {
  try {
    const url = new URL(src, location.origin)
    return `${url.pathname}${url.search}`
  } catch {
    return src
  }
}

function siteSet(srcset: string) {
  return srcset.replace(/https?:\/\/[^/\s,]+/g, '')
}

export function withOrigin(path: string) {
  try {
    const url = new URL(path, location.origin)
    return `${location.origin}${url.pathname}${url.search}`
  } catch {
    return path
  }
}

export function restoreSet(srcset: string) {
  if (!srcset) return ''
  return srcset.replace(/(^|,\s*)(?:https?:\/\/[^/\s,]+)?(?=\/)/g, `$1${location.origin}`)
}

export function imageSource(image: HTMLImageElement) {
  const raw = image.getAttribute('src') || image.currentSrc || image.src
  return sitePath(raw)
}

export function imageSet(image: HTMLImageElement) {
  return siteSet(image.getAttribute('srcset') ?? '')
}

function isUrl(value: string) {
  return value.startsWith('http://') || value.startsWith('https://')
}

function isSize(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value) && value > 0
}

function isEntry(value: unknown): value is SmileEntry {
  if (!Array.isArray(value)) return false
  const [smile, cellWidth, cellHeight, imageWidth, imageHeight, set] = value
  if (typeof smile !== 'string' || smile === '') return false
  if (value.length === 6 && typeof set !== 'string') return false
  if (value.length === 3) return isSize(cellWidth) && isSize(cellHeight)
  if (value.length !== 5 && value.length !== 6) return false
  const cellOk = (cellWidth === 0 && cellHeight === 0) || (isSize(cellWidth) && isSize(cellHeight))
  return cellOk && isSize(imageWidth) && isSize(imageHeight)
}

export function storageKey(key: string) {
  if (isUrl(key) || key.startsWith('/')) return sitePath(key)
  return key
}

export function readSmiles(): SmileMap {
  const next: SmileMap = {}
  for (const [key, value] of Object.entries(smiles.value)) {
    if (!isEntry(value)) continue
    const stored = storageKey(key)
    if (next[stored]) continue
    const set = value.length === 6 ? siteSet(value[5] ?? '') : ''
    if (value.length === 6) next[stored] = [value[0], value[1], value[2], value[3], value[4], set]
    else if (value.length === 5) next[stored] = [value[0], value[1], value[2], value[3], value[4]]
    else next[stored] = [value[0], value[1], value[2]]
  }
  return next
}

export function writeSmiles(next: SmileMap) {
  smiles.write(next)
}

export function compactSmiles() {
  const raw = smiles.value
  const next = readSmiles()
  if (JSON.stringify(raw) !== JSON.stringify(next)) smiles.write(next)
}

export function positive(value: string | null) {
  const number = Number.parseInt(value ?? '', 10)
  return number > 0 ? number : 0
}

export function saveSmile(src: string, smile: string, captured: CapturedSmile) {
  const key = sitePath(src)
  if (!key.startsWith('/') || (!captured.cell && !captured.image)) return
  const max = getSettings().recentSmiles.max || 60
  const cell = captured.cell ?? [0, 0]
  const image = captured.image
  const set = siteSet(captured.srcset)
  let record: SmileEntry = [smile, cell[0], cell[1]]
  if (image) {
    record = set
      ? [smile, cell[0], cell[1], image[0], image[1], set]
      : [smile, cell[0], cell[1], image[0], image[1]]
  }
  const next: SmileMap = { [key]: record }
  for (const [storedKey, value] of Object.entries(readSmiles())) {
    if (storedKey === key || value[0] === smile) continue
    next[storedKey] = value
    if (Object.keys(next).length >= max) break
  }
  smiles.write(next)
}

export function trimSmiles(max: number) {
  const next: SmileMap = {}
  for (const [key, value] of Object.entries(readSmiles())) {
    next[key] = value
    if (Object.keys(next).length >= max) break
  }
  smiles.write(next)
}

export function resetSmiles() {
  smiles.reset()
}

export function clearStoredSmiles() {
  localStorage.removeItem(smilesKey)
}
