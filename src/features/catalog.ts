import type { Settings } from '@/types/settings'
import { toggleId } from '@/types/toggles'

const toggle = toggleId satisfies Record<string, keyof Settings>

export interface SettingsSection {
  title: string
  ids: readonly (keyof Settings)[]
}

export const settingsSections: SettingsSection[] = [
  {
    title: 'Контент',
    ids: [toggle.comments, toggle.readers, toggle.favorite],
  },
  {
    title: 'Сбор',
    ids: [toggle.coins, toggle.karma],
  },
  {
    title: 'Медиа',
    ids: [toggle.player, toggle.gallery, toggle.playback],
  },
  {
    title: 'Интерфейс',
    ids: [toggle.oldHeader, toggle.scroll, toggle.rightbar, toggle.redirect],
  },
]

export const groupedOptionIds = [
  toggle.friends,
  toggle.background,
  toggle.weather,
  toggle.recents,
] as const

const grouped = new Set<string>(groupedOptionIds)

export const isGroupedOption = (id: string) => grouped.has(id)
