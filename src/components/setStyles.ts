import { qs, ce } from '../utils'

import { ENV_PATH, REVISION } from '../strings'
import { _SETTINGS } from '../settings'

export const setStyles = () => {
    let stl = qs('#SP_PLUS_INJSTYLE') || ce('style', {
        id: 'SP_PLUS_INJSTYLE',
        type: 'text/css'
    })

    if (!qs('#SP_STICKER_CSS')) {
        let sticker = ce('link', {
            rel: 'stylesheet',
            type: 'text/css',
            id: 'SP_STICKER_CSS',
            href: `${ENV_PATH}/css/sticker.css?r=${REVISION}`
        })

        document.getElementsByTagName('head')[0].appendChild(sticker)
    }

    if (!qs('#SP_PLUS_MENU')) {
        let menu = ce('link', {
            rel: 'stylesheet',
            type: 'text/css',
            id: 'SP_PLUS_MENU',
            href: `${ENV_PATH}/css/menu.css?r=${REVISION}`
        })

        document.getElementsByTagName('head')[0].appendChild(menu)
    }

    if (_SETTINGS.bodystyle) {
        if (_SETTINGS.bodystyleSet.url && _SETTINGS.bodystyleSet.urlchecked)
            stl.innerHTML = `body,#main_wrap{background-image:url(${_SETTINGS.bodystyleSet.url})}`
        if (_SETTINGS.bodystyleSet.color && _SETTINGS.bodystyleSet.colorchecked)
            stl.innerHTML = `body,#main_wrap{background-color:${_SETTINGS.bodystyleSet.color}}`
    }

    document.getElementsByTagName('head')[0].appendChild(stl)
}