import { find, http, remove, info, error } from '../utils'

import { SPACES } from '../types/strings'

// TODO: Отладка
export const karmaAccept = async () => {
    let karma: any = find(document.links, { href: `${SPACES}/mysite/rate_n_karma/karma/?Accept=` })

    if (karma) {
        console.log(karma)
        try {
            await http('GET', karma[0].href, true).then(e => {
                console.log(e)
                remove(karma[0].parentNode)
                info('Cобрали карму!')
            })
        } catch (e) {
            error('Ошибка (karmaAccept.ts): ' + e)
        }
    }
}