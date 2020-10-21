import { find, getParams } from '../utils'

import { SPACES } from '../types/strings'

export const disableRedirect = () => {
    let urls = find(document.links, { href: `${SPACES}/redirect/?` })

    if (urls) {
        for (let url of urls) {
            url.setAttribute('href', getParams(url)['redirect'])
        }
    }
}