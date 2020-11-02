import { qsa, error, info } from '../utils'

import { SPACES } from '../strings'

export const coinsAccept = () => {
    try {
        qsa(`a[href*='${SPACES}/services/gift_get/?Link_id='`).forEach(e => {
            // Подтверждаем монетку
            (e as HTMLElement).click()

            // Удаляем элемент
            e.parentElement?.remove()

            info('Собрали монетку!')
        })
    } catch (e) {
        error('Ошибка (coinsAccept.ts): ' + e)
    }
}