import type { Settings } from '../types/settings'
import type { WeatherPayload } from '../types/weather'
import { Cookie } from '@zero-dependency/cookie'
import { assetOrigin, host, versionNumber } from './site'

interface JsonCookies {
  SP_PLUS_SET: Settings
  SP_WEATHER: WeatherPayload
}

interface StringCookies {
  SP_LAUNCH: string
  sandbox: string
  force_ajax_transport: string
  gp_left_btn: string
}

type SpacesCookies = JsonCookies & StringCookies

const jsonKeys = new Set<keyof SpacesCookies>(['SP_PLUS_SET', 'SP_WEATHER'])

const nestedKeys = ['hideNotify', 'recentSmiles', 'friendsSet', 'bodystyleSet', 'weatherSet'] as const

export const defaultSettings = {
  blogsd: false,
  readersd: false,
  comments: false,
  blockedfiles: true,
  oldheader: true,
  playerdn: true,
  dredirect: true,
  online: true,
  coins: true,
  rscroll: false,
  hrightbar: false,
  favorite: true,
  grotate: true,
  angle: 0,
  adblock: true,
  stickyheader: true,
  apidebug: false,
  karma: true,
  sticker: true,
  playback: true,
  videoSpeed: 1,
  upVersion: versionNumber,
  hideNotify: {
    configImport: false,
  },
  recents: true,
  recentSmiles: {
    show: false,
    max: 60,
  },
  friendsOn: true,
  friendsSet: {
    max: 10,
  },
  bodystyle: true,
  bodystyleSet: {
    url: `${assetOrigin}/backgrounds/default.png`,
    color: '#DAE1E8',
    urlchecked: true,
    colorchecked: false,
  },
  weather: false,
  weatherSet: {
    interval: 3600,
    time: 0,
    city: null,
    language: 'ru',
    units: 'metric',
    key: '5f11ea40424990937175d20a072e0c72',
  },
} satisfies Settings

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

export function mergeSettings(saved: unknown): Settings {
  const next: Settings = structuredClone(defaultSettings)
  if (!isRecord(saved)) return next

  for (const key of Object.keys(defaultSettings) as (keyof Settings)[]) {
    const value = saved[key]
    if (value === undefined) continue

    if (nestedKeys.includes(key as typeof nestedKeys[number]) && isRecord(value)) {
      const current = next[key]
      if (isRecord(current)) {
        Object.assign(current, value)
      }
      continue
    }

    Object.assign(next, { [key]: value })
  }

  return next
}

export const cookies = new Cookie<SpacesCookies>({
  attributes: {
    path: '/',
    domain: `.${host}`,
    expires: 365,
  },
  encode: (value, name) => {
    if (jsonKeys.has(name)) return JSON.stringify(value)
    return String(value ?? '')
  },
  decode: (value, name) => {
    if (!jsonKeys.has(name)) return value
    try {
      return JSON.parse(value)
    } catch {
      return null
    }
  },
})

let current = mergeSettings(cookies.get('SP_PLUS_SET'))

if (!cookies.has('SP_PLUS_SET')) cookies.set('SP_PLUS_SET', current)

const listeners = new Set<() => void>()

let running = false
let queued = false

function emit() {
  if (running) {
    queued = true
    return
  }

  running = true
  try {
    do {
      queued = false
      for (const listener of [...listeners]) listener()
    } while (queued)
  } finally {
    running = false
  }
}

export const getSettings = () => current

export function setSetting(key: string, value: string | number | boolean | null) {
  const [parent, child] = key.split('.')
  if (child && parent) {
    const group = current[parent as keyof Settings]
    if (isRecord(group)) group[child] = value
  } else {
    Object.assign(current, { [key]: value })
  }

  cookies.set('SP_PLUS_SET', current)
  emit()
}

export function replaceSettings(value: unknown) {
  current = mergeSettings(value)
  cookies.set('SP_PLUS_SET', current)
  emit()
}

export function subscribeSettings(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export function resetSpacesCookies() {
  cookies.remove('SP_PLUS_SET')
  cookies.remove('SP_WEATHER')
  cookies.remove('gp_left_btn')
  cookies.remove('force_ajax_transport')
  cookies.remove('sandbox')
}
