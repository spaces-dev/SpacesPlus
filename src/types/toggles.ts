export const toggleId = {
  readers: 'readersd',
  comments: 'comments',
  oldHeader: 'oldheader',
  player: 'playerdn',
  redirect: 'dredirect',
  coins: 'coins',
  scroll: 'rscroll',
  rightbar: 'hrightbar',
  favorite: 'favorite',
  gallery: 'grotate',
  karma: 'karma',
  playback: 'playback',
  recents: 'recents',
  friends: 'friendsOn',
  background: 'bodystyle',
  weather: 'weather',
} as const

export type ToggleId = typeof toggleId[keyof typeof toggleId]
