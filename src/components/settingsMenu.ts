import { ce, qs, find, error, remove, getQuery, setCookie, inBefore, insertAfter, rever } from '../utils'

import { _SETTINGS } from '../types/Settings'
import { _SETSTRINGS } from '../types/setStrings'
import { HTTP, PATHNAME, BASE_URL, VER } from '../types/base'

import { scrollMove } from './scrollMove'
import { friendsOnline } from './friendsOnline'
import { settingsFriend } from './settingsFriends'

export const settingsMenu = () => {

    const {
        comments,
        blogsd,
        readersd,
        favorite,
        rotate,
        playback,
        blocked,
        rscroll,
        hrightbar,
        apidebug,
        playerdn,
        nredirect,
        coins,
        karma,
        online,
        ads,
        myEvents,
        friendsOn,
        sticker,
        fixes,
        bodystyle,
        upVersion,
        bodystyleSetting,
        events,
        friendsOnMax,
        friendsListSH,
        friendsDisplay,
        hideNotyf,
        msgAlert,
        msgAlertSettings,
        weatherWidget,
        weatherSettings
    } = _SETTINGS.e

    if (PATHNAME === '/settings/' && !qs('#SP_PLUS_SETLINK')) {
        try {
            // TODO: interface
            let entryLink: any = find(document.links, { href: `${HTTP}//${BASE_URL}/settings/notification/?` })

            if (entryLink) {
                entryLink = entryLink[0]
                const urlSett = getQuery('sp_plus_settings')
                const urlSettEditor = getQuery('sp_cookie_editor')
                const urlSettChangeLog = getQuery('sp_changelog')
                const urlSettBackup = getQuery('sp_backup')
                const baseLink = ce('a', {
                    href: `${HTTP}//${BASE_URL}/settings/?sp_plus_settings=1`,
                    id: 'SP_PLUS_SETLINK',
                    class: entryLink.className,
                    html: '<span>Настройки Spaces+</span><span class="ico ico_arr ico_m"></span>',
                    onclick: function () {
                        // TODO: interface
                        let prnt: any = qs('#SP_PLUS_SETLINK')?.parentElement?.parentNode?.parentNode?.parentNode
                        if (prnt.id === 'main') {
                            let hp = qs('#header_path')
                            if (hp) {
                                hp.innerHTML = hp.innerHTML.replace('Настройки', `<a href="${HTTP}//${BASE_URL}/settings/" style="margin-bottom: 1px">Настройки</a><span class="location-bar__sep ico"></span><span id="SP_PLUS_SETHEAD2">Spaces+</span>`)
                            }
                            prnt.innerHTML = `<div class="widgets-group widgets-group_top js-container__block"><div class="b-title cl b-title_center b-title_first oh"><div class="b-title__item" id="SP_PLUS_SETHEAD">Настройки Spaces+</div></div><div class="content"><div class="list f-c_fll"> <div id="SP_PLUS_SETAREA"></div></div></div></div> <div id="SP_PLUS_ABOUT"></div> <a id="SP_PLUS_SETBACK" href="${HTTP}//${BASE_URL}/settings/?" class="link-return full_link"><span class="ico ico_arrow-back" style="margin: 0px 6px -1px 0px"></span><span class="m">Назад</span></a>`
                        }
                        const setArea = qs('#SP_PLUS_SETAREA')
                        const eventAlert = qs('#SP_PLUS_ALERT')
                        if (setArea) {
                            for (let i in _SETTINGS.e) {
                                if (typeof _SETSTRINGS[i] !== 'undefined') {
                                    let checkbox = ce('input', {
                                        id: i,
                                        type: 'checkbox',
                                        class: 'sp-checkbox-square',
                                        checked: _SETTINGS.e[i],
                                        onclick: (e: any) => {
                                            const { id, checked } = e.target
                                            _SETTINGS.e[id] = checked
                                            setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS.e))

                                            switch (e.target.id) {
                                                case 'comments':
                                                case 'readersd':
                                                case 'favorite':
                                                case 'rotate':
                                                case 'playback':
                                                case 'blocked':
                                                case 'rscroll':
                                                    scrollMove()
                                                    break
                                                case 'hrightbar':
                                                case 'apidebug':
                                                case 'playerdn':
                                                case 'nredirect':
                                                case 'coins':
                                                case 'karma':
                                                case 'online':
                                                case 'ads':
                                                case 'myEvents':
                                                case 'friendsOn':
                                                    friendsOnline(e.target.checked)
                                                    if (e.target.checked) {
                                                        settingsFriend(e.target)
                                                    } else {
                                                        let frMaxWrap = qs("#SP_PLUS_MAXFRIENDS")
                                                        if (frMaxWrap) { remove(frMaxWrap) }
                                                    }
                                                    break
                                                case 'sticker':
                                                case 'fixes':
                                                case 'bodystyle':
                                                case 'msgAlert':
                                                case 'weatherWidget':
                                            }
                                        }
                                    })

                                    let description = ce('label', {
                                        html: _SETSTRINGS[i],
                                        attr: { 'for': i }
                                    })

                                    let label = ce('label', { class: 'stnd-link bstrwrap' })

                                    label.appendChild(checkbox)
                                    label.appendChild(description)
                                    setArea.appendChild(label)
                                    setArea.appendChild(label)
                                }
                            }

                            if (friendsOn) {
                                settingsFriend(qs('#friendsOn'))
                            }

                            // footer start
                            let aboutWidget = ce('div', { class: 'widgets-group widgets-group_top nl wbg' })
                            let content = ce('div', { class: 'content-item3' })
                            let title = ce('div', {
                                class: 'grey',
                                html: 'Developed by <a href="https://crashmax.ru" target="_blank">crashmax</a> with love ❤️'
                            })

                            let ver = ce('div', {
                                style: 'float: right',
                                html: 'v' + rever(VER)
                            })

                            aboutWidget.appendChild(content)
                            content.appendChild(title)
                            title.appendChild(ver)
                            qs('#SP_PLUS_ABOUT')?.appendChild(aboutWidget)
                            // footer end
                        }
                        return false
                    }
                })

                inBefore(baseLink, entryLink)
                if (entryLink.nextElementSibling.nodeName === 'BR') {
                    insertAfter(ce('br'), baseLink)
                }

                // outaded start
                if (urlSett) {
                    document.title = 'Настройки Spaces+'
                    let clickEvent = document.createEvent('MouseEvent')
                    let clickEvent2 = document.createEvent('MouseEvent')
                    clickEvent.initEvent('click', true, true)
                    baseLink.dispatchEvent(clickEvent)
                    if (urlSettEditor) {
                        document.title = 'Spaces+: Редактор cookies'
                        clickEvent2.initEvent('click', true, true)
                        qs('#sp_cookie_editor')?.dispatchEvent(clickEvent2)
                    } else if (urlSettChangeLog) {
                        document.title = 'Spaces+: История обновлений'
                        clickEvent2.initEvent('click', true, true)
                        qs('#sp_changelog')?.dispatchEvent(clickEvent2)
                    } else if (urlSettBackup) {
                        document.title = 'Spaces+: Импорт и экспорт параметров'
                        clickEvent2.initEvent('click', true, true)
                        qs('#sp_backup')?.dispatchEvent(clickEvent2)
                    }
                }
                // outaded end
            }
        } catch (e) {
            error('Ошибка (SETTINGS): ' + e)
        }
    }
}