import { qs } from '../utils/qs'
import { ce } from '../utils/ce'

import { ENV, GITHUB, REVISION } from '../types/base'
import { _SETTINGS } from '../types/defaultSettings'

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

    if (_SETTINGS.bodystyle) {
        if (_SETTINGS.bodystyleSetting.url && _SETTINGS.bodystyleSetting.urlchecked)
            stl.innerHTML = `body,#main_wrap{background-image:url(${_SETTINGS.bodystyleSetting.url})}`
        if (_SETTINGS.bodystyleSetting.color && _SETTINGS.bodystyleSetting.colorchecked)
            stl.innerHTML = `body,#main_wrap{background-color:${_SETTINGS.bodystyleSetting.color}}`
    }

    document.getElementsByTagName('head')[0].appendChild(stl)
}