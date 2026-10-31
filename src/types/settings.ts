import type { toggleId } from './toggles'

export interface RecentSmiles {
  show: boolean
  max: number
}

export interface FriendsSet {
  max: number
  expanded: boolean
}

export interface HideNotify {
  configImport: boolean
}

export interface BodystyleSet {
  url: string
  color: string
  urlchecked: boolean
  colorchecked: boolean
}

export interface WeatherSet {
  interval: number
  time: number
  city: string | null
  language: 'ru' | 'en'
  units: 'metric' | 'imperial'
  key: string
}

export interface Settings {
  [toggleId.readers]: boolean
  [toggleId.comments]: boolean
  [toggleId.oldHeader]: boolean
  [toggleId.player]: boolean
  [toggleId.redirect]: boolean
  [toggleId.coins]: boolean
  [toggleId.scroll]: boolean
  [toggleId.rightbar]: boolean
  [toggleId.favorite]: boolean
  [toggleId.gallery]: boolean
  angle: number
  [toggleId.karma]: boolean
  [toggleId.playback]: boolean
  videoSpeed: number
  upVersion: number | string
  hideNotify: HideNotify
  [toggleId.recents]: boolean
  recentSmiles: RecentSmiles
  [toggleId.friends]: boolean
  friendsSet: FriendsSet
  [toggleId.background]: boolean
  bodystyleSet: BodystyleSet
  [toggleId.weather]: boolean
  weatherSet: WeatherSet
}
