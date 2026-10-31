import type { Settings } from '@/types/settings'
import { Cookie } from '@zero-dependency/cookie'
import { toggleId } from '@/types/toggles'
import { coalesce } from './coalesce'
import { assetOrigin, host, versionNumber } from './site'

export const storageKey = {
  settings: 'SP_PLUS_SET',
  weather: 'SP_WEATHER',
  launch: 'SP_LAUNCH',
} as const

interface JsonCookies {
  [storageKey.settings]: Settings
  [storageKey.weather]: unknown
}

interface StringCookies {
  [storageKey.launch]: string
}

type SpacesCookies = JsonCookies & StringCookies

type Scalar = string | number | boolean | null

type NestedGroup = {
  [K in keyof Settings]: Settings[K] extends object ? K : never
}[keyof Settings]

type NestedPath = {
  [K in NestedGroup]: `${K}.${Extract<keyof Settings[K], string>}`
}[NestedGroup]

export type SettingPath = keyof Settings | NestedPath

type ValueAt<P extends string> = P extends `${infer Parent}.${infer Child}`
  ? Parent extends keyof Settings
    ? Child extends keyof Settings[Parent]
      ? Settings[Parent][Child]
      : never
    : never
  : P extends keyof Settings
    ? Settings[P]
    : never

type SetSetting = {
  <P extends SettingPath>(key: P, value: ValueAt<P>): void
  (key: string, value: Scalar): void
}

const jsonKeys = new Set<keyof SpacesCookies>([storageKey.settings, storageKey.weather])
const cookieLifetimeDays = 365
const defaultBackgroundColor = '#DAE1E8'
const defaultWeatherKey = '5f11ea40424990937175d20a072e0c72'

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

export const defaultSettings = {
  [toggleId.readers]: false,
  [toggleId.comments]: false,
  [toggleId.oldHeader]: true,
  [toggleId.player]: true,
  [toggleId.redirect]: true,
  [toggleId.coins]: true,
  [toggleId.scroll]: false,
  [toggleId.rightbar]: false,
  [toggleId.favorite]: true,
  [toggleId.gallery]: true,
  angle: 0,
  [toggleId.karma]: true,
  [toggleId.playback]: true,
  videoSpeed: 1,
  upVersion: versionNumber,
  hideNotify: {
    configImport: false,
  },
  [toggleId.recents]: true,
  recentSmiles: {
    show: false,
    max: 60,
  },
  [toggleId.friends]: true,
  friendsSet: {
    max: 10,
    expanded: false,
  },
  [toggleId.background]: true,
  bodystyleSet: {
    url: `${assetOrigin}/backgrounds/default.png`,
    color: defaultBackgroundColor,
    urlchecked: false,
    colorchecked: false,
  },
  [toggleId.weather]: false,
  weatherSet: {
    interval: 3600,
    time: 0,
    city: null,
    language: 'ru',
    units: 'metric',
    key: defaultWeatherKey,
  },
} satisfies Settings

const nestedKeys = new Set<keyof Settings>(
  (Object.keys(defaultSettings) as (keyof Settings)[]).filter(key => isRecord(defaultSettings[key])),
)

export function mergeSettings(saved: unknown): Settings {
  const next: Settings = structuredClone(defaultSettings)
  if (!isRecord(saved)) return next

  for (const key of Object.keys(defaultSettings) as (keyof Settings)[]) {
    const value = saved[key]
    if (value === undefined) continue

    if (nestedKeys.has(key) && isRecord(value)) {
      const currentGroup = next[key]
      if (isRecord(currentGroup)) Object.assign(currentGroup, value)
      continue
    }

    Object.assign(next, { [key]: value })
  }

  if (!next[toggleId.background]) {
    next[toggleId.background] = true
    next.bodystyleSet.urlchecked = false
    next.bodystyleSet.colorchecked = false
  }

  return next
}

export const cookies = new Cookie<SpacesCookies>({
  attributes: {
    path: '/',
    domain: `.${host}`,
    expires: cookieLifetimeDays,
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

let current = mergeSettings(cookies.get(storageKey.settings))

if (!cookies.has(storageKey.settings)) cookies.set(storageKey.settings, current)

const listeners = new Set<() => void>()

const emit = coalesce(() => {
  for (const listener of [...listeners]) listener()
})

function commit() {
  cookies.set(storageKey.settings, current)
  emit()
}

export const getSettings = () => current

export const settingEnabled = (id: string) => current[id as keyof Settings] === true

export const settingKey = {
  angle: 'angle',
  playbackSpeed: 'videoSpeed',
  seenVersion: 'upVersion',
  dismissImport: 'hideNotify.configImport',
  recentOpen: 'recentSmiles.show',
  recentLimit: 'recentSmiles.max',
  friendsLimit: 'friendsSet.max',
  friendsExpanded: 'friendsSet.expanded',
  backgroundUrl: 'bodystyleSet.url',
  backgroundColor: 'bodystyleSet.color',
  backgroundImageOn: 'bodystyleSet.urlchecked',
  backgroundColorOn: 'bodystyleSet.colorchecked',
  weatherCity: 'weatherSet.city',
  weatherKey: 'weatherSet.key',
  weatherInterval: 'weatherSet.interval',
} as const satisfies Record<string, SettingPath>

export const setSetting: SetSetting = (key: string, value: Scalar) => {
  const [parent, child] = key.split('.')
  if (child && parent) {
    const group = current[parent as keyof Settings]
    if (isRecord(group)) group[child] = value
  } else {
    Object.assign(current, { [key]: value })
  }

  commit()
}

export function replaceSettings(value: unknown) {
  current = mergeSettings(value)
  commit()
}

export function subscribeSettings(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export function resetSpacesCookies() {
  cookies.remove(storageKey.settings)
  cookies.remove(storageKey.weather)
}
