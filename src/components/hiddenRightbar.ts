import { qs, error } from '../utils'

import { _SETTINGS } from '../types/settings'

export const hiddenRightbar = (b: boolean) => {
    let rightbar = qs('#page_rightbar')

    try {
        if (b && !rightbar.hasAttribute('sp-hidden-rightbar')) {
            rightbar.style.display = 'none'
            rightbar.setAttribute('sp-hidden-rightbar', '1')
        } else if (!_SETTINGS.hrightbar && rightbar.hasAttribute('sp-hidden-rightbar')) {
            rightbar.style.display = 'block'
            rightbar.removeAttribute('sp-hidden-rightbar')
        }
    } catch (e) {
        error('Ошибка (hidderRightbar.ts): ' + e)
    }
}