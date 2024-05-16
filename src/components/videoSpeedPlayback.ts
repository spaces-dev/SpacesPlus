import { _SETTINGS } from '../settings'
import { ce, logger, qs, setSettings } from '../utils'

export const videoSpeedPlayback = () => {
  let jwcontrols = qs('span.jwcontrols')
  let playback = qs('#SP_PLAYBACK_VIDEO')

  try {
    if (playback)
      (<HTMLVideoElement>qs('video')).playbackRate = _SETTINGS.videoSpeed

    if (jwcontrols && !playback) {
      let target = qs('span[class*="jwtext jwduration jwhidden"]')

      let buttonPlayback = ce('span', {
        className: 'jwtext jwduration jwhidden',
        id: 'SP_PLAYBACK_VIDEO',
        innerHTML: 'x' + _SETTINGS.videoSpeed,
        onclick: () => {
          let videoSpeed = (_SETTINGS.videoSpeed + 0.25) % 2.25
          if (videoSpeed === 0) videoSpeed = 0.5
          setSettings('videoSpeed', videoSpeed)
          buttonPlayback.innerHTML = 'x' + videoSpeed
          return false
        }
      })

      target.after(buttonPlayback)
    }
  } catch (e) {
    logger.error('videoSpeedPlayback.ts', e)
  }
}
