import { ce, qs, find, error, setCookie } from '../utils'

import { _SETTINGS } from '../settings'

export const videoSpeedPlayback = () => {
    let jwcontrols: any = find(document.getElementsByTagName('span'), { className: 'jwcontrols' })
    let playback = qs('#SP_PLAYBACK_VIDEO')

    try {
        if (playback) {
            document.querySelector('video')!.playbackRate = _SETTINGS.videoSpeed
        }

        if (jwcontrols !== null && playback === null) {
            let target: any = find(document.getElementsByTagName('span'), { className: 'jwtext jwduration jwhidden' })
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

            target[0].after(buttonPlayback)
        }
    } catch (e) {
        error('Ошибка (videoSpeedPlayback.ts): ' + e)
    }
}