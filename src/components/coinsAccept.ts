import { find, http, remove, info, error } from '../utils'

import { SPACES, OVERRIDE } from '../types/strings'

export const coinsAccept = () => {
    let coins: any = find(document.links, { href: `${SPACES}/services/gift_get/?Link_id=` })

    if (coins && !OVERRIDE.COINS) {
        OVERRIDE.COINS = true

        try {
            http('GET', coins[0].href, true).then(e => {
                if (e.status === 200) {
                    remove(coins[0].parentNode)
                    info('Собрали монетку!')
                }

                OVERRIDE.COINS = false
            })
        } catch (e) {
            error('Ошибка (coinsAccept.ts): ' + e)
        }
    }
}