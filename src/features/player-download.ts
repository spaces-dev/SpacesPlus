import type { Feature } from '@/core/feature'
import { el } from '@zero-dependency/dom'
import { log } from '@/core/log'
import { session } from '@/core/site'

interface TrackState {
  id: string
}

interface PlaylistState {
  playlist: {
    playlist: Array<{ src: string }>
  }
}

export const playerDownload: Feature = {
  id: 'playerdn',
  title: 'Кнопка загрузки трека из плеера',
  description: 'Добавляется кнопка в аудиоплеер, которая позволяет скачивать воспроизведенный трек.',
  start: ctx => ctx.onDom(() => {
    try {
      const trackRaw = sessionStorage.getItem('music:track')
      const playlistRaw = sessionStorage.getItem('music:playlist')
      const player = document.querySelector('#gp_main_player')
      const repeat = document.querySelector('a.js-music_repeat')
      if (!player || !trackRaw || !playlistRaw || !repeat) return

      const track = JSON.parse(trackRaw) as TrackState
      const playlist = JSON.parse(playlistRaw) as PlaylistState
      const trackId = Number.parseInt(track.id, 10)
      const src = playlist.playlist.playlist[trackId]?.src
      if (!src) return

      const existing = document.querySelector<HTMLElement>('#SP_MUSIC_DOWN')
      if (!existing) {
        session.playerTrack = trackId
        const cell = el('td', {
          id: 'SP_MUSIC_DOWN',
          className: 'ico_td',
          innerHTML: '<span style="margin: 0px 6px 0px 0px !important" class="sp sp-download-darkblue" title="Скачать"></span>',
        })
        cell.onclick = () => {
          location.href = src
        }
        repeat.parentElement?.after(cell)
        return
      }

      if (session.playerTrack !== trackId) {
        session.playerTrack = trackId
        existing.onclick = () => {
          location.href = src
        }
        log.info('Обновили ссылку на трек', track)
      }
    } catch (error) {
      log.error('playerdn', error)
    }
  }),
}
