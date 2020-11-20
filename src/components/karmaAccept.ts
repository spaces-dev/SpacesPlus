import { qsa, error, info } from '../utils'

import { SPACES } from '../strings'

export const karmaAccept = () => {
    try {
        qsa(`a[href^="${SPACES}/mysite/rate_n_karma/karma/?Accept="`).forEach(e => {
            // Подтверждаем карму
            (<HTMLElement>e).click()

            // Удаляем элемент
            e.parentElement?.remove()

            info('Собрали карму!', e)
        })
    } catch (e) {
        error('karmaAccept.ts', e)
    }
}