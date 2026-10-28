import type { DeviceInfo } from '@/types/device'
import pkg from '../../package.json' with { type: 'json' }

export const revision = Date.now()

export const assetOrigin = import.meta.env.DEV
  ? 'http://localhost:3000'
  : pkg.homepage.replace(/\/$/, '')

export const host = location.hostname

export const baseUrl = `${location.protocol}//${host}`

export const version = pkg.version

export const versionNumber = Number(pkg.version.split('.').join(''))

const fallbackDevice: DeviceInfo = {
  id: 4,
  os: '',
  pc: true,
  type: 'pc',
  browser: '',
  v: 0,
  old: false,
}

function readDevice(): DeviceInfo {
  if (window.Device) return window.Device
  try {
    return unsafeWindow.Device ?? fallbackDevice
  } catch {
    return fallbackDevice
  }
}

export const device: DeviceInfo = readDevice()

export const isDesktop = () => device.id === 4

export const isTouch = () => device.id === 3

export const session = {
  ck: '',
  sid: '',
  username: '',
  onlineNick: null as string | null,
  playerTrack: 0,
  version: versionNumber,
}

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
