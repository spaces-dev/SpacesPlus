import {
    ce,
    qs,
    find,
    error,
    rever,
    remove,
    inBefore,
    getQuery,
    setCookie,
    delCookie,
    historyPush,
    insertAfter,
    confirmBox
} from '../utils'

import { _SETTINGS } from '../types/Settings'
import { _SETSTRINGS } from '../types/setStrings'
import { SPACES, PATHNAME, HREF, VER } from '../types/base'

import { scrollMove } from './scrollMove'
import { friendsOnline } from './friendsOnline'
import { settingsBackupMenu } from './settingsBackupMenu'
import { settingsFriend } from './settingsFriends'
import { settingsFeatures } from './settingsFeatures'
import { changelogMenu } from './changelogMenu'

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
            let entryLink: any = find(document.links, { href: `${SPACES}/settings/notification/?` })

            if (entryLink) {
                entryLink = entryLink[0]
                const urlSett = getQuery('sp_plus_settings')
                const urlSettEditor = getQuery('sp_cookie_editor')
                const urlSettChangeLog = getQuery('sp_changelog')
                const urlSettBackup = getQuery('sp_backup')
                const baseLink = ce('a', {
                    href: `${SPACES}/settings/?sp_plus_settings=1`,
                    id: 'SP_PLUS_SETLINK',
                    class: entryLink.className,
                    html: '<span>Настройки Spaces+</span><span class="ico ico_arr ico_m"></span>',
                    onclick: function () {
                        // TODO: interface
                        let prnt: any = qs('#SP_PLUS_SETLINK').parentElement?.parentNode?.parentNode?.parentNode
                        if (prnt.id === 'main') {
                            let hp = qs('#header_path')
                            if (hp) {
                                hp.innerHTML = hp.innerHTML.replace('Настройки', `<a href="${SPACES}/settings/" style="margin-bottom: 1px">Настройки</a><span class="location-bar__sep ico"></span><span id="SP_PLUS_SETHEAD2">Spaces+</span>`)
                            }
                            prnt.innerHTML = `<div class="widgets-group widgets-group_top js-container__block"><div class="b-title cl b-title_center b-title_first oh"><div class="b-title__item" id="SP_PLUS_SETHEAD">Настройки Spaces+</div></div><div class="content"><div class="list f-c_fll"> <div id="SP_PLUS_SETAREA"></div></div></div></div> <div id="SP_PLUS_ABOUT"></div> <a id="SP_PLUS_SETBACK" href="${SPACES}/settings/?" class="link-return full_link"><span class="ico ico_arrow-back" style="margin: 0px 6px -1px 0px"></span><span class="m">Назад</span></a>`
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

                                            console.log(e.target.id + ": " + e.target.checked)

                                            switch (e.target.id) {
                                                case 'comments':
                                                    break
                                                case 'readersd':
                                                    break
                                                case 'favorite':
                                                    break
                                                case 'rotate':
                                                    break
                                                case 'playback':
                                                    break
                                                case 'blocked':
                                                    break
                                                case 'rscroll':
                                                    scrollMove()
                                                    break
                                                case 'hrightbar':
                                                    break
                                                case 'apidebug':
                                                    break
                                                case 'playerdn':
                                                    break
                                                case 'nredirect':
                                                    break
                                                case 'coins':
                                                    break
                                                case 'karma':
                                                    break
                                                case 'online':
                                                    break
                                                case 'ads':
                                                    break
                                                case 'myEvents':
                                                    break
                                                case 'friendsOn':
                                                    /*friendsOnline(e.target.checked)
                                                    if (e.target.checked) {
                                                        settingsFriend(e.target)
                                                    } else {
                                                        let frMaxWrap = qs("#SP_PLUS_MAXFRIENDS")
                                                        if (frMaxWrap) { remove(frMaxWrap) }
                                                    }*/
                                                    break
                                                case 'sticker':
                                                    break
                                                case 'fixes':
                                                    break
                                                case 'bodystyle':
                                                    break
                                                case 'msgAlert':
                                                    break
                                                case 'weatherWidget':
                                                    break
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

                            // footer buttons area start
                            var spacesLabel1 = ce('div', {
                                class: 'sp_plus_line',
                                html: '<span class="sp_plus_text">Встроенные возможности сайта</span>'
                            })

                            var spacesLabel2 = ce('div', {
                                class: 'sp_plus_line',
                                html: '<span class="sp_plus_text">Дополнительные функции</span>'
                            })

                            var spacesLabel3 = ce('div', {
                                class: 'sp_plus_line',
                                html: '<span class="sp_plus_text">Прочее</span>'
                            })

                            setArea.appendChild(spacesLabel1)

                            settingsFeatures(setArea)

                            // TODO: newbequest()
                            setArea.appendChild(spacesLabel2)

                            // cookie editor start
                            const CookieEditor = ce("a", {
                                href: `${SPACES}/settings/?sp_plus_settings=1&sp_cookie_editor=1`,
                                class: "stnd-link stnd-link_arr sp_last_btn",
                                id: "sp_cookie_editor",
                                html: "<span class='b'><span class='sp sp-write-grey'></span> Редактор cookies<span class='ico ico_arr ico_m'></span></span>",
                                onclick: function () {
                                    qs("#SP_PLUS_SETHEAD").innerHTML = 'Редактор cookies';
                                    qs("#SP_PLUS_SETHEAD2").innerHTML = `<a href="${SPACES}/settings/?sp_plus_settings=1" style="margin-bottom: 1px">Spaces+</a><span class="location-bar__sep ico"></span> Редактор cookies`
                                    // TODO: ???
                                    // @ts-ignore
                                    qs("#SP_PLUS_SETBACK").href = `${SPACES}/settings/?sp_plus_settings=1`
                                    if (!/(\&)sp_cookie_editor=1/i.test(HREF)) {
                                        historyPush({
                                            'sp_plus_settings': urlSett,
                                            'sp_cookie_editor': urlSettEditor
                                        }, `${SPACES}/settings/?sp_plus_settings=1&sp_cookie_editor=1`, `Spaces+: Редактор cookies`)
                                    }
                                    //("#SP_PLUS_SETAREA");
                                    return false
                                }
                            })
                            setArea.appendChild(CookieEditor)
                            // cookie editor end

                            setArea.appendChild(spacesLabel3)

                            // spaces+ backup start
                            const SettingsBackup = ce('a', {
                                href: `${SPACES}/settings/?sp_plus_settings=1&sp_backup=1`,
                                class: 'stnd-link stnd-link_arr sp_font_sm',
                                id: 'sp_backup',
                                html: '<span class="b" style="color: #2e7d32"><span class="sp sp-backup-g"></span> Импорт и экспорт параметров<span class="ico ico_arr ico_m"></span></span>',
                                onclick: () => {
                                    qs('#SP_PLUS_SETHEAD').innerHTML = 'Импорт и экспорт параметров'
                                    qs('#SP_PLUS_SETHEAD2').innerHTML = `<a href="${SPACES}/settings/?sp_plus_settings=1" style="margin-bottom: 1px">Spaces+</a><span class="location-bar__sep ico"></span> Импорт и экспорт параметров`
                                    // TODO: ???
                                    // @ts-ignore
                                    qs("#SP_PLUS_SETBACK").href = `${SPACES}/settings/?sp_plus_settings=1`
                                    if (!/(\&)sp_backup=1/i.test(HREF)) {
                                        historyPush({
                                            'sp_plus_settings': urlSett,
                                            'sp_backup': urlSettBackup
                                        }, `${SPACES}/settings/?sp_plus_settings=1&sp_backup=1`, 'Spaces+: Импорт и экспорт параметров')
                                    }
                                    settingsBackupMenu('#SP_PLUS_SETAREA')
                                    return false
                                }
                            })
                            setArea.appendChild(SettingsBackup)
                            // spaces+ backup end

                            // changelog menu start
                            const ChangeLogMenu = ce('a', {
                                href: `${SPACES}/settings/?sp_plus_settings=1&sp_changelog=1`,
                                class: 'stnd-link stnd-link_arr sp_font_sm',
                                id: 'sp_changelog',
                                html: '<span class="b" style="color: #2196f3"><span class="sp sp-restore-blue"></span> История обновлений<span class="ico ico_arr ico_m"></span></span>',
                                onclick: () => {
                                    qs('#SP_PLUS_SETHEAD').innerHTML = 'История обновлений'
                                    qs('#SP_PLUS_SETHEAD2').innerHTML = `<a href="${SPACES}/settings/?sp_plus_settings=1" style="margin-bottom: 1px">Spaces+</a><span class="location-bar__sep ico"></span> История обновлений`
                                    // TODO: ???
                                    // @ts-ignore
                                    qs('#SP_PLUS_SETBACK').href = `${SPACES}/settings/?sp_plus_settings=1`
                                    if (!/(\&)sp_changelog=1/i.test(HREF)) {
                                        historyPush({
                                            'sp_plus_settings': urlSett,
                                            'sp_changelog': urlSettChangeLog
                                        }, `${SPACES}/settings/?sp_plus_settings=1&sp_changelog=1`, 'Spaces+: История обновлений')
                                    }
                                    changelogMenu('#SP_PLUS_SETAREA')
                                    return false
                                }
                            })
                            setArea.appendChild(ChangeLogMenu)
                            // changelog menu end

                            // reset button start
                            const ResetSettings = ce('a', {
                                href: '#',
                                class: 'stnd-link stnd-link_arr sp_font_sm',
                                id: 'sp_plus_reset',
                                html: '<span class="b" style="color: #f86934"><span class="sp sp-alert"></span> Сброс настроек<span class="ico ico_arr ico_m"></span></span>',
                                onclick: () => {
                                    confirmBox('Вы действительно хотите сбросить настройки?', false, () => {
                                        delCookie('SP_PLUS_SET')
                                        delCookie('gp_left_btn')
                                        delCookie('force_ajax_transport')
                                        delCookie('sandbox')
                                        document.location.reload()
                                    })
                                    return false
                                }
                            })
                            setArea.appendChild(ResetSettings)
                            // reset button end

                            // footer start
                            let aboutWidget = ce('div', { class: 'widgets-group widgets-group_top nl wbg' })
                            let ver = ce('div', { style: 'float: right', html: 'v' + VER })
                            let content = ce('div', { class: 'content-item3' })
                            let title = ce('div', {
                                class: 'grey',
                                html: 'Developed by <a href="https://crashmax.ru" target="_blank">crashmax</a> with love ❤️'
                            })

                            aboutWidget.appendChild(content)
                            content.appendChild(title)
                            title.appendChild(ver)
                            qs('#SP_PLUS_ABOUT').appendChild(aboutWidget)
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
                        qs('#sp_cookie_editor').dispatchEvent(clickEvent2)
                    } else if (urlSettChangeLog) {
                        document.title = 'Spaces+: История обновлений'
                        clickEvent2.initEvent('click', true, true)
                        qs('#sp_changelog').dispatchEvent(clickEvent2)
                    } else if (urlSettBackup) {
                        document.title = 'Spaces+: Импорт и экспорт параметров'
                        clickEvent2.initEvent('click', true, true)
                        qs('#sp_backup').dispatchEvent(clickEvent2)
                    }
                }
                // outaded end
            }
        } catch (e) {
            error('Ошибка (SETTINGS): ' + e)
        }
    }
}