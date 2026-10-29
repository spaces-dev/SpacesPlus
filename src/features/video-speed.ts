import type { Feature } from '@/core/feature'
import { el } from '@zero-dependency/dom'
import { log } from '@/core/log'
import { getSettings, setSetting } from '@/core/settings-store'

export const videoSpeed: Feature = {
  id: 'playback',
  title: 'Кнопка ускорения видео',
  description: 'В видеоплеере добавляется кнопка ускорения видео, примерно как на YouTube.',
  start: ctx => ctx.onDom(() => {
    try {
      const playback = document.querySelector('#SP_PLAYBACK_VIDEO')
      const video = document.querySelector('video')
      if (playback && video) video.playbackRate = getSettings().videoSpeed

      const controls = document.querySelector('span.jwcontrols')
      const target = document.querySelector('span[class*="jwtext jwduration jwhidden"]')
      if (!controls || playback || !target) return

      const button = el('span', {
        className: 'jwtext jwduration jwhidden',
        id: 'SP_PLAYBACK_VIDEO',
        innerHTML: `x${getSettings().videoSpeed}`,
      })
      button.onclick = () => {
        let speed = (getSettings().videoSpeed + 0.25) % 2.25
        if (speed === 0) speed = 0.5
        setSetting('videoSpeed', speed)
        button.innerHTML = `x${speed}`
        if (video) video.playbackRate = speed
        return false
      }
      target.after(button)
    } catch (error) {
      log.error('playback', error)
    }
  }),
}
