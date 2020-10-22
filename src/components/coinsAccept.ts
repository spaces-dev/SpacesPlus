import { find, http, remove, info, error } from '../utils'

import { SPACES } from '../types/strings'

// TODO: Отладка
export const coinsAccept = async () => {
    let coins: any = find(document.links, { href: `${SPACES}/services/gift_get/?Link_id=` })

    if (coins) {
        console.log(coins)
        try {
            await http('GET', coins[0].href, true).then(e => {
                console.log(e)
                remove(coins[0].parentNode)
                info('Собрали монетку!')
            })
        } catch (e) {
            error('Ошибка (coinsAccept.ts): ' + e)
        }
    }
}