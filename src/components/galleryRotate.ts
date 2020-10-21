import { ce, qs, error, setCookie } from '../utils'

import { _SETTINGS } from '../types/settings'

export const galleryRotate = () => {
    let Image = qs('#gallery-container')
    let Rotate = qs('#SP_IMAGE_ROTATE')
    let Video = qs('.player-dummy_wrap')

    try {
        if (Rotate) {
            Image.className = 'accel-3d rotate' + _SETTINGS.angle
        }

        if (Image !== null && Rotate === null && !Video) {
            let buttonRotate = ce('a', {
                class: 'gallery__tools_button',
                id: 'SP_IMAGE_ROTATE',
                title: 'Повернуть',
                html: '<span class="ico_gallery ico_gallery_reload m"></span>',
                onclick: () => {
                    _SETTINGS.angle = (_SETTINGS.angle + 90) % 360
                    setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))
                    return false
                }
            })

            qs('#g_dloadlink').after(buttonRotate)
        }
    } catch (e) {
        error('Ошибка (galleryRotate.ts): ' + e)
    }
}