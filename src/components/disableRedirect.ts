import { qsa, getParams } from '../utils'

import { SPACES } from '../strings'

export const disableRedirect = () => {
    qsa(`a[href^="${SPACES}/redirect/"`).forEach(e => {

        // Все еще костыль, но так лучше
        (e as HTMLLinkElement).href = getParams((e as HTMLLinkElement).href)['redirect']
    })
}