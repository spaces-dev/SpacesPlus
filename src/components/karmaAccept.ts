import { qsa, error, info } from '../utils'

import { SPACES } from '../strings'

export const karmaAccept = () => {
    try {
        qsa(`a[href*='${SPACES}/mysite/rate_n_karma/karma/?Accept='`).forEach(e => {
            // Подтверждаем карму
            (e as HTMLElement).click()

            // Удаляем элемент
            e.parentElement?.remove()

            info('Собрали карму!')
        })
    } catch (e) {
        error('Ошибка (karmaAccept.ts): ' + e)
    }
}