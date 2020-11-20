import { qsa, error, info } from '../utils'

import { SPACES } from '../strings'

export const coinsAccept = () => {
    try {
        qsa(`a[href^="${SPACES}/services/gift_get/"`).forEach(e => {
            // Подтверждаем монетку
            (<HTMLElement>e).click()

            // Удаляем элемент
            e.parentElement?.remove()

            info('Собрали монетку', e)
        })
    } catch (e) {
        error('coinsAccept.ts', e)
    }
}