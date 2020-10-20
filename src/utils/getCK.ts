import { find, getParams } from './index'

import { SPACES } from '../types/base'

export const getCK = () => {
    let target: any = find(document.links, { href: `${SPACES}/logout/?` })
    return getParams(target[0].href).CK
}