import { qs, logger } from '../utils'

import { _SETTINGS } from '../settings'

export const hiddenRightbar = (b: boolean) => {
    let rightbar = qs('#page_rightbar')

    /**
     * Отключаем виджет погоды, если скрываем правое меню
     */
    if (b && _SETTINGS.weather) qs('#weather').click()

    try {
        if (b && !rightbar.hasAttribute('sp-hidden-rightbar')) {
            rightbar.style.display = 'none'
            rightbar.setAttribute('sp-hidden-rightbar', '1')
        } else if (rightbar.hasAttribute('sp-hidden-rightbar')) {
            rightbar.style.display = 'block'
            rightbar.removeAttribute('sp-hidden-rightbar')
        }
    } catch (e) {
        logger.error('hidderRightbar.ts', e)
    }
}