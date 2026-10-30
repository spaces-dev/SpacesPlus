import type { Feature } from '@/core/feature'
import { el, observeElement } from '@zero-dependency/dom'
import { log } from '@/core/log'
import { readPage } from '@/core/site'

interface SavedFile {
  src?: string
  index?: number
}

interface MusicHowl {
  _src?: string | string[]
  playing?: () => boolean
}

function howlUrl(howl: MusicHowl) {
  const src = Array.isArray(howl._src) ? howl._src[0] : howl._src
  if (!src || src.includes('/i/sounds/')) return
  return src
}

function fromPlaylist() {
  const activeId = document.querySelector('#gp_playlist .js-music_pl_play.gp-playlist_active')?.getAttribute('data-n')
  if (!activeId) return
  return document.querySelector<HTMLElement>(`.player_item[data-src][data-n="${CSS.escape(activeId)}"]`)?.getAttribute('data-src') ?? undefined
}

function fromTitle() {
  const artist = document.querySelector('#gp_main_player .js-music_artist')?.textContent?.trim() ?? ''
  const title = document.querySelector('#gp_main_player .js-music_title')?.textContent?.trim() ?? ''
  if (!artist && !title) return
  const item = [...document.querySelectorAll<HTMLElement>('.player_item[data-src]')].find((node) => {
    return node.getAttribute('data-artist') === artist && node.getAttribute('data-title') === title
  })
  return item?.getAttribute('data-src') ?? undefined
}

function fromHowler() {
  const howls = readPage(win => (win as Window & { Howler?: { _howls?: MusicHowl[] } }).Howler)?._howls ?? []
  const tracks = howls.flatMap((howl) => {
    const src = howlUrl(howl)
    return src ? [{ src, playing: Boolean(howl.playing?.()) }] : []
  })
  return tracks.find(track => track.playing)?.src ?? tracks.at(-1)?.src
}

function fromStorage() {
  try {
    const trackRaw = readPage(win => win.sessionStorage.getItem('music:track'))
    const playlistRaw = readPage(win => win.sessionStorage.getItem('music:playlist'))
    if (!trackRaw || !playlistRaw) return
    const track = JSON.parse(trackRaw) as { id?: string | number }
    const saved = JSON.parse(playlistRaw) as { playlist?: { playlist?: SavedFile[] } }
    const trackId = Number.parseInt(String(track.id), 10)
    const files = saved.playlist?.playlist ?? []
    const file = files.find(item => item.index === trackId) ?? files[trackId]
    return file?.src || undefined
  } catch (error) {
    log.error('playerdn', error)
  }
}

const trackUrl = () => fromPlaylist() ?? fromTitle() ?? fromHowler() ?? fromStorage()

function trackLabel() {
  const artist = document.querySelector('#gp_main_player .js-music_artist')?.textContent?.trim() ?? ''
  const title = document.querySelector('#gp_main_player .js-music_title')?.textContent?.trim() ?? ''
  const fromHeader = [artist, title].filter(Boolean).join(' - ')
  if (fromHeader) return fromHeader
  return document.querySelector('#gp_playlist .gp-playlist_active')?.textContent?.replace(/\s+/g, ' ').trim() || 'track'
}

const latin: Record<string, string> = {
  а: 'a',
  б: 'b',
  в: 'v',
  г: 'g',
  д: 'd',
  е: 'e',
  ё: 'yo',
  ж: 'zh',
  з: 'z',
  и: 'i',
  й: 'y',
  к: 'k',
  л: 'l',
  м: 'm',
  н: 'n',
  о: 'o',
  п: 'p',
  р: 'r',
  с: 's',
  т: 't',
  у: 'u',
  ф: 'f',
  х: 'h',
  ц: 'ts',
  ч: 'ch',
  ш: 'sh',
  щ: 'sch',
  ъ: '',
  ы: 'y',
  ь: '',
  э: 'e',
  ю: 'yu',
  я: 'ya',
}

function transliterate(value: string) {
  return value.replace(/[А-Яа-яЁё]/g, (char) => {
    const mapped = latin[char.toLowerCase()] ?? ''
    if (char === char.toLowerCase() || !mapped) return mapped
    return mapped.charAt(0).toUpperCase() + mapped.slice(1)
  })
}

function fileName(label: string) {
  const ascii = transliterate(label)
    .replace(/&/g, ' and ')
    .replace(/[^\w.-]+/g, '_')
    .replace(/_+/g, '_')
    .replace(/^[_.-]+|[_.-]+$/g, '')
  const base = (ascii || 'track').slice(0, 120)
  return base.toLowerCase().endsWith('.mp3') ? base : `${base}.mp3`
}

function downloadUrl(src: string, label: string) {
  const url = new URL(src, location.href)
  const segments = url.pathname.split('/')
  segments[segments.length - 1] = fileName(label)
  url.pathname = segments.join('/')
  const href = url.href
  const last = href.split('/').pop() ?? ''
  if (last.includes('%')) return src
  return href
}

const repeatCell = () => document.querySelector('#gp_main_player a.js-music_repeat')?.closest('td') ?? undefined

function downloadCell(src: string, label: string) {
  const href = downloadUrl(src, label)
  const cell = document.querySelector<HTMLTableCellElement>('#SP_MUSIC_DOWN') ?? el('td', {
    id: 'SP_MUSIC_DOWN',
    className: 'ico_td',
  })
  const link = cell.querySelector('a') ?? el('a', {
    className: 'tdn',
    title: 'Скачать',
  }, el('span', { className: 'ico ico_download2_darkblue' }))
  if (!link.isConnected) cell.replaceChildren(link)
  link.onclick = (event) => {
    event.stopImmediatePropagation()
  }
  const previous = link.getAttribute('href')
  if (previous !== href) {
    link.setAttribute('href', href)
    link.title = `Скачать ${label}`
    if (previous) log.info('Обновили ссылку на трек', label)
  }
  return cell
}

function syncDownload() {
  const anchor = repeatCell()
  const src = anchor ? trackUrl() : undefined
  if (!anchor || !src) return

  const cell = downloadCell(src, trackLabel())
  if (cell.previousElementSibling !== anchor) anchor.after(cell)
}

export const playerDownload: Feature = {
  id: 'playerdn',
  title: 'Кнопка загрузки трека из плеера',
  description: 'Добавляется кнопка в аудиоплеер, которая позволяет скачивать воспроизведенный трек.',
  start: (ctx) => {
    let artistNode: Element | null = null
    let titleNode: Element | null = null
    let stopArtist = () => {}
    let stopTitle = () => {}
    const onTrackText = () => {
      try {
        syncDownload()
      } catch (error) {
        log.error('playerdn', error)
      }
    }
    const watchText = (selector: string, current: Element | null, stop: () => void) => {
      const node = document.querySelector(selector)
      if (!node || node === current) return { node: current, stop }
      stop()
      return { node, stop: observeElement(node, onTrackText, { characterData: true }) }
    }
    const watchTrack = () => {
      const artist = watchText('#gp_main_player .js-music_artist', artistNode, stopArtist)
      artistNode = artist.node
      stopArtist = artist.stop
      const title = watchText('#gp_main_player .js-music_title', titleNode, stopTitle)
      titleNode = title.node
      stopTitle = title.stop
    }

    const stopDom = ctx.onDom(() => {
      try {
        watchTrack()
        syncDownload()
      } catch (error) {
        log.error('playerdn', error)
      }
    })

    return () => {
      stopDom()
      stopArtist()
      stopTitle()
    }
  },
}
