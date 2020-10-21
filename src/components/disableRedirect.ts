import { find, getParams } from '../utils'

import { SPACES } from '../types/strings'

export const disableRedirect = () => {
    let urls = find(document.links, { href: `${SPACES}/redirect/?` })

    if (urls) {
        for (let i = 0; i < urls.length; i++) {
            urls[i].setAttribute('href', getParams(urls[i])['redirect'])
        }
    }
}