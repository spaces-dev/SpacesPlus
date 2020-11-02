import { qsa, getParams } from '../utils'

import { SPACES } from '../strings'

export const disableRedirect = () => {
    // @ts-ignore Все еще костыль, но так лучше
    qsa(`a[href*="${SPACES}/redirect/"`).forEach(e => e.href = getParams(e)['redirect'])
}