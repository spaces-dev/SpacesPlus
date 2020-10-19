import { qs, error } from '../utils'

import { _SETTINGS } from '../types/Settings'

export const scrollMove = () => {
    try {
        const scroller: any = qs('#scroll_page')

        if (scroller && !scroller.hasAttribute('sp-replace')) {
            scroller.style.left = 'auto'
            scroller.style.right = '0'
            scroller.setAttribute('sp-replace', '1')
        } else if (!_SETTINGS.e.rscroll && scroller && scroller.hasAttribute('sp-replace')) {
            scroller.style.left = '0'
            scroller.style.right = 'auto'
            scroller.removeAttribute('sp-replace')
        }
    } catch (e) {
        error('Ошибка (strollMove.ts): ' + e)
    }
}