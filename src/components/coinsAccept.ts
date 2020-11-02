import { info } from '../utils'

import { SPACES } from '../strings'

export const coinsAccept = () => {
    document.querySelectorAll(`a[href*='${SPACES}/services/gift_get/?Link_id='`).forEach(e => {
        // Подтверждаем монетку
        (e as HTMLElement).click()

        // Удаляем элемент
        e.parentElement?.remove()

        info('Собрали монетку!')
    })
}