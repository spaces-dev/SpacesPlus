export interface RecentSmiles {
  show: boolean
  max: number
}

export interface FriendsSet {
  max: number
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
  blogsd: boolean
  readersd: boolean
  comments: boolean
  blockedfiles: boolean
  oldheader: boolean
  playerdn: boolean
  dredirect: boolean
  online: boolean
  coins: boolean
  rscroll: boolean
  hrightbar: boolean
  favorite: boolean
  grotate: boolean
  angle: number
  adblock: boolean
  stickyheader: boolean
  apidebug: boolean
  karma: boolean
  sticker: boolean
  playback: boolean
  videoSpeed: number
  upVersion: number
  hideNotify: HideNotify
  recents: boolean
  recentSmiles: RecentSmiles
  friendsOn: boolean
  friendsSet: FriendsSet
  bodystyle: boolean
  bodystyleSet: BodystyleSet
  weather: boolean
  weatherSet: WeatherSet
}
