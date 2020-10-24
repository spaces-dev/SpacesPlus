import { find, http, remove, info, error } from '../utils'

import { SPACES, OVERRIDE } from '../strings'

export const karmaAccept = () => {
    let karma: any = find(document.links, { href: `${SPACES}/mysite/rate_n_karma/karma/?Accept=` })

    if (karma && !OVERRIDE.KARMA) {
        OVERRIDE.KARMA = true

        try {
            http('GET', karma[0].href, true).then(e => {
                if (e.status === 200) {
                    remove(karma[0].parentNode)
                    info('Cобрали карму!')
                }

                OVERRIDE.KARMA = false
            })
        } catch (e) {
            error('Ошибка (karmaAccept.ts): ' + e)
        }
    }
}