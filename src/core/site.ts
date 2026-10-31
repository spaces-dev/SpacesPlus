import { pkgBasePath, pkgVersion } from './pkg-info'
import { packVersion } from './version'

export interface DeviceInfo {
  id: number
  os: string
  pc: boolean
  type: string
  browser: string
  v: number
  old: boolean
}

interface SiteRequireList extends Array<unknown> {
  push: (argv: unknown[]) => number
}

type SiteRequire = ((names: string[], onLoad?: () => void, onError?: () => void) => void) & {
  push?: (argv: unknown[]) => void
}

declare global {
  interface Window {
    __require?: SiteRequire | SiteRequireList
    Device: DeviceInfo
  }
}

export function readPage<T>(read: (win: Window) => T | null | undefined): T | undefined {
  const fromWindow = read(window)
  if (fromWindow != null) return fromWindow
  try {
    return read(unsafeWindow) ?? undefined
  } catch {
    return undefined
  }
}

export function loadSiteModules(names: string[], onLoad: () => void, onError?: () => void) {
  const require = readPage(win => win.__require)
  if (typeof require === 'function') {
    require(names, onLoad, onError)
    return true
  }
  if (Array.isArray(require)) {
    require.push([names, onLoad, onError])
    return true
  }
  return false
}

export const revision = Date.now()

export const assetOrigin = pkgBasePath.replace(/\/$/, '')

export const cacheBust = (file: string) => `${assetOrigin}/${file}?r=${revision}`

export const host = location.hostname

export const baseUrl = `${location.protocol}//${host}`

export const versionNumber = packVersion(pkgVersion)

const unsupportedDeviceIds = new Set([1, 2])
const touchDeviceId = 3
const desktopDeviceId = 4

const fallbackDevice: DeviceInfo = {
  id: desktopDeviceId,
  os: '',
  pc: true,
  type: 'pc',
  browser: '',
  v: 0,
  old: false,
}

const readDevice = (): DeviceInfo => readPage(win => win.Device) ?? fallbackDevice

export const device: DeviceInfo = readDevice()

export const isLegacySite = () => unsupportedDeviceIds.has(device.id)

export const isTouch = () => device.id === touchDeviceId

export const isCurrentSite = () => device.id === touchDeviceId || device.id === desktopDeviceId

export const sessionCode = {
  unauthorized: '01001',
} as const

export const session = {
  ck: '',
  sid: '',
  username: '',
  onlineNick: null as string | null,
  playerTrack: 0,
  version: versionNumber,
}

export const pathIndex = {
  section: 1,
  page: 2,
  slug: 3,
} as const

export function pathAt(index?: number) {
  const path = location.pathname
  if (!index) return path
  return path.replace(/\/\s*$/, '').split('/')[index]
}

export function searchParam(url: string, key: string) {
  try {
    return new URL(url, location.origin).searchParams.get(key) ?? ''
  } catch {
    return ''
  }
}

export function queryFlag(name: string) {
  const params = new URLSearchParams(location.search)
  return params.get(name)
}

export const settingsPath = '/settings/'
export const plusSettingsFlag = 'sp_plus_settings'
export const backupFlag = 'sp_backup'
export const changelogFlag = 'sp_changelog'
export const communityPath = '/soo/extension/'

export const siteSettingsUrl = () => `${baseUrl}${settingsPath}`

export const notificationSettingsUrl = () => `${siteSettingsUrl()}notification/`

export function plusSettingsUrl(flag?: string) {
  const query = flag ? `${plusSettingsFlag}=1&${flag}=1` : `${plusSettingsFlag}=1`
  return `${baseUrl}${settingsPath}?${query}`
}

export const communityUrl = () => `${baseUrl}${communityPath}`

export const anchoredHref = (path: string) => `a[href^="${baseUrl}${path}"]`
