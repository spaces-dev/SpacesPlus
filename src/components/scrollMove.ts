import { qs, logger } from '../utils'

import { _SETTINGS } from '../settings'

export const scrollMove = (b: boolean) => {
    let scroll = qs('#scroll_page')

    try {
        if (b && !scroll.hasAttribute('sp-replace')) {
            scroll.style.left = 'auto'
            scroll.style.right = '0'
            scroll.setAttribute('sp-replace', '1')
        } else if (!_SETTINGS.rscroll && scroll.hasAttribute('sp-replace')) {
            scroll.style.left = '0'
            scroll.style.right = 'auto'
            scroll.removeAttribute('sp-replace')
        }
    } catch (e) {
        logger.error('scrollMove.ts', e)
    }
}