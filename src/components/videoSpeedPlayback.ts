import { ce, qs, error, setSettings } from '../utils'

import { _SETTINGS } from '../settings'

export const videoSpeedPlayback = () => {
    let jwcontrols = qs('span.jwcontrols')
    let playback = qs('#SP_PLAYBACK_VIDEO')

    try {
        if (playback) (<HTMLVideoElement>qs('video')).playbackRate = _SETTINGS.videoSpeed

        if (jwcontrols && !playback) {
            let target = qs('span[class*="jwtext jwduration jwhidden"]')

            let buttonPlayback = ce('span', {
                class: 'jwtext jwduration jwhidden',
                id: 'SP_PLAYBACK_VIDEO',
                html: 'x' + _SETTINGS.videoSpeed,
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
        error('videoSpeedPlayback.ts', e)
    }
}