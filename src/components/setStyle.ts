import { qs, ce } from '../utils'

import { ENV, GITHUB, REVISION } from '../types/base'
import { _SETTINGS } from '../types/Settings'

export const setStyle = () => {
    let stl = qs('#SP_PLUS_INJSTYLE') || ce('style', {
        id: 'SP_PLUS_INJSTYLE',
        type: 'text/css'
    })

    if (!qs('#SP_PLUS_MENU')) {
        let menu = qs('#SP_PLUS_MENU') || ce('link', {
            rel: 'stylesheet',
            type: 'text/css',
            id: 'SP_PLUS_MENU',
            href: `https://${ENV ?? GITHUB}/src/attaches/css/menu.css?r=${REVISION}`
        })

        document.getElementsByTagName('head')[0].appendChild(menu)
    }

    if (_SETTINGS.STRINGS.bodystyle) {
        if (_SETTINGS.STRINGS.bodystyleSetting.url && _SETTINGS.STRINGS.bodystyleSetting.urlchecked)
            stl.innerHTML = `body,#main_wrap{background-image:url(${_SETTINGS.STRINGS.bodystyleSetting.url})}`
        if (_SETTINGS.STRINGS.bodystyleSetting.color && _SETTINGS.STRINGS.bodystyleSetting.colorchecked)
            stl.innerHTML = `body,#main_wrap{background-color:${_SETTINGS.STRINGS.bodystyleSetting.color}}`
    }

    document.getElementsByTagName('head')[0].appendChild(stl)
}