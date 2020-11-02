import { ce, qs, error, setCookie } from '../utils'

import { _SETTINGS } from '../settings'

export const videoSpeedPlayback = () => {
    let jwcontrols = qs('span.jwcontrols')
    let playback = qs('#SP_PLAYBACK_VIDEO')

    try {
        if (playback) (qs('video') as HTMLVideoElement).playbackRate = _SETTINGS.videoSpeed

        if (jwcontrols && !playback) {
            let target = qs('span[class*="jwtext jwduration jwhidden"]')

            let buttonPlayback = ce('span', {
                class: 'jwtext jwduration jwhidden',
                id: 'SP_PLAYBACK_VIDEO',
                html: 'x' + _SETTINGS.videoSpeed,
                onclick: () => {
                    _SETTINGS.videoSpeed = (_SETTINGS.videoSpeed + 0.25) % 2.25
                    if (_SETTINGS.videoSpeed === 0) _SETTINGS.videoSpeed = 0.5
                    setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))
                    buttonPlayback.innerHTML = 'x' + _SETTINGS.videoSpeed
                    return false
                }
            })

            target.after(buttonPlayback)
        }
    } catch (e) {
        error('Ошибка (videoSpeedPlayback.ts): ' + e)
    }
}