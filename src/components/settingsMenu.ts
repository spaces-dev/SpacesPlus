import {
    ce,
    qs,
    find,
    error,
    remove,
    getPath,
    getHref,
    inBefore,
    getQuery,
    setCookie,
    delCookie,
    confirmBox,
    messageBox,
    historyPush,
    insertAfter
} from '../utils'

import {
    oldHeader,
    setStyles,
    scrollMove,
    freeStickers,
    friendsOnline,
    hiddenRightbar,
    settingsFriends,
    settingsFeatures,
    settingsBackground,
    settingsBackupMenu,
    settingsChangelogMenu
} from './index'

import { DEVICE, SPACES, PKG_VERSION } from '../strings'
import { _SETSTRINGS, _SETTINGS } from '../settings'

export const settingsMenu = () => {
    if (getPath() === '/settings/' && !qs('#SP_PLUS_SETLINK')) {
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
                    onclick: () => {
                        if (!/(\&)sp_plus_settings=1/i.test(getHref())) {
                            historyPush({
                                'sp_plus_settings': urlSett,
                            }, `${SPACES}/settings/?sp_plus_settings=1`, 'Настройки Spaces+')
                        }

                        let prnt = (qs('#SP_PLUS_SETLINK').parentElement?.parentNode?.parentNode?.parentNode as HTMLElement)
                        if (prnt.id === 'main') {
                            qs('#header_path').innerHTML = qs('#header_path').innerHTML.replace('Настройки', `<a href="${SPACES}/settings/" style="margin-bottom: 1px">Настройки</a><span class="location-bar__sep ico"></span><span id="SP_PLUS_SETHEAD2">Spaces+</span>`)
                            prnt.innerHTML = `<div class="widgets-group widgets-group_top js-container__block"><div class="b-title cl b-title_center b-title_first oh"><div class="b-title__item" id="SP_PLUS_SETHEAD">Настройки Spaces+</div></div><div class="content"><div class="list f-c_fll"> <div id="SP_PLUS_SETAREA" class="no-select"></div></div></div></div> <div id="SP_PLUS_ABOUT"></div> <a id="SP_PLUS_SETBACK" href="${SPACES}/settings/?" class="link-return full_link"><span class="ico ico_arrow-back" style="margin: 0px 6px -1px 0px"></span><span class="m">Назад</span></a>`
                        }

                        const setArea = qs('#SP_PLUS_SETAREA')
                        ////const eventAlert = qs('#SP_PLUS_ALERT')
                        if (setArea) {
                            for (let i in _SETTINGS) {
                                if (typeof _SETSTRINGS[i] !== 'undefined') {

                                    /**
                                    * Проверяем поддерживаемость данных функций на Touch версии сайта
                                    */
                                    let unsupported = (DEVICE.id === 3 && (i === 'rscroll' || i === 'hrightbar')) ? true : false
                                    let checkbox = ce('input', {
                                        id: i,
                                        type: 'checkbox',
                                        class: 'sp-checkbox-square',
                                        attr: { unsupported: unsupported },
                                        checked: _SETTINGS[i],
                                        onclick: (e: any) => {
                                            const { id, checked } = e.target

                                            if (e.target.attributes.unsupported.value === 'true') {
                                                messageBox('Внимание!', 'Для работы данной функции, необходимо переключиться на компьютерную версию сайта', true, 5)
                                                return false
                                            }

                                            _SETTINGS[id] = checked
                                            setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))

                                            console.log(id + ": " + checked)

                                            switch (id) {
                                                case 'rscroll':
                                                    scrollMove(checked)
                                                    break
                                                case 'hrightbar':
                                                    hiddenRightbar(checked)
                                                    break
                                                case 'myEvents':
                                                    break
                                                case 'friendsOn':
                                                    friendsOnline(checked)
                                                    checked ?
                                                        settingsFriends(e.target) :
                                                        remove(qs('#SP_PLUS_MAXFRIENDS'))
                                                    break
                                                case 'sticker':
                                                    checked ?
                                                        freeStickers(checked) :
                                                        remove(qs('#SP_PLUS_STICKERS'))
                                                    break
                                                case 'oldheader':
                                                    oldHeader(checked)
                                                    break
                                                case 'bodystyle':
                                                    if (checked) {
                                                        settingsBackground(e.target)
                                                    } else {
                                                        remove(qs('#SP_PLUS_BODYSTYLE'))
                                                        remove(qs('#SP_PLUS_INJSTYLE'))
                                                    }
                                                    break
                                                case 'msgAlert':
                                                    break
                                                case 'weatherWidget':
                                                    break
                                            }
                                        }
                                    })

                                    let description = ce('label', { html: _SETSTRINGS[i], attr: { 'for': i } })
                                    let label = ce('label', { class: `stnd-link bstrwrap${unsupported ? ' sp_unsupported' : ''}` })

                                    label.appendChild(checkbox)
                                    label.appendChild(description)
                                    setArea.appendChild(label)
                                    setArea.appendChild(label)
                                }
                            }

                            // Дополнительное меню настроек
                            if (_SETTINGS.friendsOn) { settingsFriends(qs('#friendsOn')) }
                            if (_SETTINGS.bodystyle) { settingsBackground(qs('#bodystyle')) }
                            /*if (_SETTINGS.myEvents) {
                                evenstSupport(qs('#sp_set_myEvents'))
                            }
                            if (_SETTINGS.msgAlert) {
                                msgAlertSettings(qs('#sp_set_msgAlert'))
                            }
                            if (_SETTINGS.weatherWidget) {
                                weatherSettings(qs('#sp_set_weatherWidget'))
                            }*/

                            // footer buttons area start
                            let spacesLabel1 = ce('div', {
                                class: 'sp_plus_line',
                                html: '<span class="sp_plus_text">Встроенные возможности сайта</span>'
                            })

                            /*let spacesLabel2 = ce('div', {
                                class: 'sp_plus_line',
                                html: '<span class="sp_plus_text">Дополнительные функции</span>'
                            })*/

                            let spacesLabel3 = ce('div', {
                                class: 'sp_plus_line',
                                html: '<span class="sp_plus_text">Прочее</span>'
                            })

                            setArea.appendChild(spacesLabel1)

                            settingsFeatures(setArea)

                            // TODO: Сюда нужна проверка квеста новичка
                            // setArea.appendChild(spacesLabel2)

                            /**
                             * TODO: Обновить дизайн
                            const CookieEditor = ce('a', {
                                href: `${SPACES}/settings/?sp_plus_settings=1&sp_cookie_editor=1`,
                                class: 'stnd-link stnd-link_arr sp_last_btn',
                                id: 'sp_cookie_editor',
                                html: '<span class="b"><span class="sp sp-write-grey mr-14"></span>Редактор cookies<span class="ico ico_arr ico_m"></span></span>',
                                onclick: () => {
                                    qs('#SP_PLUS_SETHEAD').innerHTML = 'Редактор cookies';
                                    qs('#SP_PLUS_SETHEAD2').innerHTML = `<a href="${SPACES}/settings/?sp_plus_settings=1" style="margin-bottom: 1px">Spaces+</a><span class="location-bar__sep ico"></span> Редактор cookies`
                                    qs('#SP_PLUS_SETBACK').href = `${SPACES}/settings/?sp_plus_settings=1`
                                    if (!/(\&)sp_cookie_editor=1/i.test(getHref())) {
                                        historyPush({
                                            'sp_plus_settings': urlSett,
                                            'sp_cookie_editor': urlSettEditor
                                        }, `${SPACES}/settings/?sp_plus_settings=1&sp_cookie_editor=1`, 'Spaces+: Редактор cookies')
                                    }
                                    //("#SP_PLUS_SETAREA");
                                    return false
                                }
                            })
                            setArea.appendChild(CookieEditor)
                            */

                            setArea.appendChild(spacesLabel3)

                            // spaces+ backup start
                            const SettingsBackup = ce('a', {
                                href: `${SPACES}/settings/?sp_plus_settings=1&sp_backup=1`,
                                class: 'stnd-link stnd-link_arr sp_font_sm',
                                id: 'sp_backup',
                                html: '<span class="b" style="color: #2e7d32"><span class="sp sp-backup-g mr-14"></span>Импорт и экспорт настроек<span class="ico ico_arr ico_m"></span></span>',
                                onclick: () => {
                                    qs('#SP_PLUS_SETHEAD').innerHTML = 'Импорт и экспорт настроек'
                                    qs('#SP_PLUS_SETHEAD2').innerHTML = `<a href="${SPACES}/settings/?sp_plus_settings=1" style="margin-bottom: 1px">Spaces+</a><span class="location-bar__sep ico"></span> Импорт и экспорт настроек`
                                    qs('#SP_PLUS_SETBACK').href = `${SPACES}/settings/?sp_plus_settings=1`
                                    if (!/(\&)sp_backup=1/i.test(getHref())) {
                                        historyPush({
                                            'sp_plus_settings': urlSett,
                                            'sp_backup': urlSettBackup
                                        }, `${SPACES}/settings/?sp_plus_settings=1&sp_backup=1`, 'Spaces+: Импорт и экспорт настроек')
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
                                html: '<span class="b" style="color: #2196f3"><span class="sp sp-restore-blue mr-14"></span>История обновлений<span class="ico ico_arr ico_m"></span></span>',
                                onclick: () => {
                                    qs('#SP_PLUS_SETHEAD').innerHTML = 'История обновлений'
                                    qs('#SP_PLUS_SETHEAD2').innerHTML = `<a href="${SPACES}/settings/?sp_plus_settings=1" style="margin-bottom: 1px">Spaces+</a><span class="location-bar__sep ico"></span> История обновлений`
                                    qs('#SP_PLUS_SETBACK').href = `${SPACES}/settings/?sp_plus_settings=1`
                                    if (!/(\&)sp_changelog=1/i.test(getHref())) {
                                        historyPush({
                                            'sp_plus_settings': urlSett,
                                            'sp_changelog': urlSettChangeLog
                                        }, `${SPACES}/settings/?sp_plus_settings=1&sp_changelog=1`, 'Spaces+: История обновлений')
                                    }
                                    settingsChangelogMenu('#SP_PLUS_SETAREA')
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
                                html: '<span class="b" style="color: #f86934"><span class="sp sp-alert mr-14"></span>Сброс настроек<span class="ico ico_arr ico_m"></span></span>',
                                onclick: () => {
                                    confirmBox('Вы действительно хотите полностью сбросить настройки?', true, () => {
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
                            let clicks: number = 0,
                                aboutWidget = ce('div', { class: 'widgets-group widgets-group_top nl wbg no-select' }),
                                ver = ce('div', { style: 'float: right', html: 'v' + PKG_VERSION }),
                                content = ce('div', { class: 'content-item3' }),
                                heart = ce('div', {
                                    html: '❤️',
                                    class: 'heart',
                                    onclick: () => {
                                        clicks++
                                        if (clicks >= 10) {
                                            // TODO: Пасхалка
                                        }
                                    }
                                }),
                                title = ce('div', {
                                    class: 'grey',
                                    html: 'Developed by <a href="https://crashmax.ru" target="_blank">crashmax</a> with love '
                                })

                            aboutWidget.appendChild(content)
                            title.appendChild(heart)
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
                let clickEvent = document.createEvent('MouseEvent')

                if (urlSett) {
                    document.title = 'Настройки Spaces+'
                    clickEvent.initEvent('click', true, true)
                    baseLink.dispatchEvent(clickEvent)
                }

                if (urlSettEditor) {
                    document.title = 'Spaces+: Редактор cookies'
                    clickEvent.initEvent('click', true, true)
                    qs('#sp_cookie_editor')?.dispatchEvent(clickEvent)
                }

                if (urlSettChangeLog) {
                    document.title = 'Spaces+: История обновлений'
                    clickEvent.initEvent('click', true, true)
                    qs('#sp_changelog')?.dispatchEvent(clickEvent)
                }

                if (urlSettBackup) {
                    document.title = 'Spaces+: Импорт и экспорт настроек'
                    clickEvent.initEvent('click', true, true)
                    qs('#sp_backup')?.dispatchEvent(clickEvent)
                }
                // outaded end
            }
        } catch (e) {
            error('Ошибка (SETTINGS): ' + e)
        }
    }
}