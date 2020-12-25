import { ce, qs, logger, setSettings } from '../utils'

import { _SETTINGS } from '../settings'

export const galleryRotate = () => {

    // просмотрщик изображений
    let Image = qs('#gallery-container')

    // кнопка поворота
    let Rotate = qs('#SP_IMAGE_ROTATE')

    // видеоплеер
    let Video = qs('.player-dummy_wrap')

    try {

        // встявляем кнопку поворота при условии что есть просмотрщик и главное что это не видеоплеер
        if (Image && !Rotate && !Video) {
            let buttonRotate = ce('a', {
                className: 'gallery__tools_button',
                id: 'SP_IMAGE_ROTATE',
                title: 'Повернуть',
                innerHTML: '<span class="ico_gallery ico_gallery_reload m"></span>',
                onclick: () => {
                    // градус поворота (0, 90, 180, 270)
                    setSettings('angle', (_SETTINGS.angle + 90) % 360)

                    // применяем класс для повора изображения
                    Image.className = 'accel-3d rotate' + _SETTINGS.angle
                    return false
                }
            })

            // вставляем кнопку поворота после кнопки скачивания
            qs('#g_dloadlink').after(buttonRotate)
        }
    } catch (e) {
        logger.error('galleryRotate.ts', e)
    }
}