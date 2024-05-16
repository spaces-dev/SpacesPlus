import { ISettings } from '../interfaces/Settings'
import { _DESCSTRINGS, _SETSTRINGS, _SETTINGS } from '../settings'
import { BASE_URL, DEVICE, PKG_VERSION } from '../strings'
import {
  ce,
  delCookie,
  getPath,
  getQuery,
  historyPush,
  logger,
  modalConfirm,
  modalMessage,
  qs,
  setSettings
} from '../utils'
import {
  freeStickers,
  friendsOnline,
  hiddenRightbar,
  oldHeader,
  scrollMove,
  settingsBackground,
  settingsBackupMenu,
  settingsFeatures,
  settingsFriends,
  //settingsNotify,
  settingsLogMenu,
  settingsWeather,
  stickyHeader
  //settingsRecentSmiles
} from './index'

export const settingsMenu = () => {
  if (getPath() === '/settings/' && !qs('#SP_PLUS_SETLINK')) {
    try {
      // Ищем таргер для инициализации меню настроек
      const targetLink = qs(`a[href^="${BASE_URL}/settings/notification/"`)

      if (targetLink) {
        const urlSett = getQuery('sp_plus_settings')
        const urlSettChangeLog = getQuery('sp_changelog')
        const urlSettBackup = getQuery('sp_backup')
        const baseLink = ce('a', {
          href: `${BASE_URL}/settings/?sp_plus_settings=1`,
          id: 'SP_PLUS_SETLINK',
          className: targetLink.className,
          innerHTML: `
                        <span>Настройки Spaces+</span>
                        <span class="ico ico_arr ico_m"></span>
                    `,
          onclick: () => {
            if (!/(\&)sp_plus_settings=1/i.test(document.location.href)) {
              historyPush(
                {
                  sp_plus_settings: urlSett
                },
                `${BASE_URL}/settings/?sp_plus_settings=1`,
                'Настройки Spaces+'
              )
            }

            let prnt = <HTMLElement>(
              qs('#SP_PLUS_SETLINK').parentElement?.parentNode?.parentNode
                ?.parentNode
            )
            if (prnt.id === 'main') {
              qs('#header_path').innerHTML = qs(
                '#header_path'
              ).innerHTML.replace(
                'Настройки',
                `
                                <a href="${BASE_URL}/settings/">Настройки</a>
                                <span class="location-bar__sep ico"></span>
                                <span id="SP_PLUS_SETHEAD2">Spaces+</span>
                            `
              )

              prnt.innerHTML = `
                                <div class="widgets-group widgets-group_top js-container__block">
                                    <div class="b-title cl b-title_center b-title_first oh">
                                        <div class="b-title__item" id="SP_PLUS_SETHEAD">Настройки Spaces+</div>
                                    </div>
                                    <div class="content">
                                        <div class="list f-c_fll">
                                            <div id="SP_PLUS_SETAREA" class="no-select"></div>
                                        </div>
                                    </div>
                                </div>
                                <div id="SP_PLUS_ABOUT"></div>
                                <a id="SP_PLUS_SETBACK" href="${BASE_URL}/settings/?" class="link-return full_link">
                                    <span class="ico ico_arrow-back"></span>
                                    <span class="m">Назад</span>
                                </a>
                            `
            }

            const setArea = qs('#SP_PLUS_SETAREA')

            if (setArea) {
              for (let i in _SETTINGS) {
                let key = i as Exclude<ISettings, object>

                if (_SETSTRINGS[key] !== undefined) {
                  /**
                   * Проверяем поддерживаемость данных функций (rscroll, hrightbar, weather) на Touch версии сайта
                   * Если функция не поддерживается на текущей версии сайта и она включена, то отключаем её
                   */
                  let unsupported =
                    DEVICE.id === 3 &&
                    (i === 'rscroll' || i === 'hrightbar' || i === 'weather')
                      ? true
                      : false

                  let checkbox = ce('input', {
                    id: i,
                    type: 'checkbox',
                    className: 'sp-checkbox-square',
                    checked: _SETTINGS[key],
                    onclick: (e: Event) => {
                      const checked = (e.target as HTMLInputElement).checked
                      const target = e.target as Element
                      const id = (e.target as Element).id

                      if (
                        target.attributes.getNamedItem('unsupported') &&
                        checked
                      ) {
                        modalMessage(
                          'Внимание!',
                          'Для работы данной функции, необходимо переключиться на компьютерную версию сайта',
                          true,
                          5
                        )
                        return
                      }

                      setSettings(id, checked)

                      switch (id) {
                        case 'rscroll':
                          scrollMove(checked)
                          break
                        case 'hrightbar':
                          hiddenRightbar(checked)
                          break
                        // TODO: На переработку (скорее всего можно будет менять только звук уведомлений)
                        /*case 'notify':
                                                    checked ?
                                                        settingsNotify(target) :
                                                        qs("#SP_PLUS_EVENTS").remove()
                                                    break*/
                        // TODO: Меню настроек на доработку!
                        /*case 'recents':
                                                    checked ?
                                                        settingsRecentSmiles(target) :
                                                        qs("#SP_RECENTS_SETTINGS").remove()
                                                    break*/
                        case 'friendsOn':
                          friendsOnline(checked)
                          checked
                            ? settingsFriends(target)
                            : qs('#SP_PLUS_MAXFRIENDS').remove()
                          break
                        case 'sticker':
                          checked
                            ? freeStickers(checked)
                            : qs('#SP_PLUS_STICKERS').remove()
                          break
                        case 'stickyheader':
                          stickyHeader(checked)
                          break
                        case 'oldheader':
                          oldHeader(checked)
                          break
                        case 'bodystyle':
                          if (checked) {
                            settingsBackground(target)
                          } else {
                            qs('#SP_PLUS_BODYSTYLE').remove()
                            qs('#SP_PLUS_INJSTYLE').remove()
                          }
                          break
                        case 'weather':
                          if (checked) {
                            settingsWeather(target)
                          } else {
                            qs('#SP_WIDGET_WEATHER').remove()
                            qs('#SP_WEATHER_SETTINGS').remove()
                          }
                          break
                      }
                    }
                  })

                  let description = ce('label', {
                    innerHTML: _SETSTRINGS[key],
                    htmlFor: i
                  })

                  let label = ce('label', {
                    className: `list-link ${unsupported ? 'sp_unsupported' : ''}`
                  })

                  // unsupported attribute
                  if (unsupported) {
                    checkbox.setAttribute('unsupported', i)
                  }

                  label.appendChild(checkbox)
                  label.appendChild(description)

                  // кнопка 'описание функции'
                  if (_DESCSTRINGS[key] !== undefined) {
                    let info = ce('a', {
                      href: '#',
                      className: 'sp sp-info sp_info-btn',
                      onclick: () => {
                        modalMessage(_SETSTRINGS[key], _DESCSTRINGS[key], true)
                        return false
                      }
                    })

                    label.appendChild(info)
                  }

                  setArea.appendChild(label)

                  // отключаем неподдерживаемые функции
                  if (unsupported && _SETTINGS[i as keyof ISettings])
                    qs('#' + i).click()
                }
              }

              // Выпадающие доп. меню настроек
              // TODO: Доработать меню настроек
              //if (_SETTINGS.recents) settingsRecentSmiles(qs('#recents'))
              if (_SETTINGS.friendsOn) settingsFriends(qs('#friendsOn'))
              if (_SETTINGS.bodystyle) settingsBackground(qs('#bodystyle'))
              //if (_SETTINGS.notify) settingsNotify(qs('#notify'))
              if (_SETTINGS.weather) settingsWeather(qs('#weather'))

              let spacesLabel1 = ce('div', {
                className: 'sp_plus_line',
                innerHTML:
                  '<span class="sp_plus_text">Встроенные возможности сайта</span>'
              })

              let spacesLabel2 = ce('div', {
                className: 'sp_plus_line',
                innerHTML: '<span class="sp_plus_text">Прочее</span>'
              })

              setArea.appendChild(spacesLabel1)

              // Встроенные возможности сайта
              settingsFeatures(setArea)

              setArea.appendChild(spacesLabel2)

              const SettingsBackup = ce('a', {
                href: `${BASE_URL}/settings/?sp_plus_settings=1&sp_backup=1`,
                className: 'list-link list-link_arr sp_font_sm',
                id: 'sp_backup',
                innerHTML: `
                                    <span class="b" style="color: #2e7d32">
                                        <span class="sp sp-backup-g mr-14"></span>Импорт и экспорт настроек
                                        <span class="ico ico_arr ico_m"></span>
                                    </span>
                                `,
                onclick: () => {
                  qs('#SP_PLUS_SETHEAD').innerHTML = 'Импорт и экспорт настроек'
                  qs('#SP_PLUS_SETHEAD2').innerHTML = `
                                        <a href="${BASE_URL}/settings/?sp_plus_settings=1">Spaces+</a>
                                        <span class="location-bar__sep ico"></span> Импорт и экспорт настроек
                                    `
                  ;(<HTMLLinkElement>qs('#SP_PLUS_SETBACK')).href =
                    `${BASE_URL}/settings/?sp_plus_settings=1`
                  if (!/(\&)sp_backup=1/i.test(document.location.href)) {
                    historyPush(
                      {
                        sp_plus_settings: urlSett,
                        sp_backup: urlSettBackup
                      },
                      `${BASE_URL}/settings/?sp_plus_settings=1&sp_backup=1`,
                      'Spaces+: Импорт и экспорт настроек'
                    )
                  }
                  settingsBackupMenu('#SP_PLUS_SETAREA')
                  return false
                }
              })
              setArea.appendChild(SettingsBackup)

              const ChangeLogMenu = ce('a', {
                href: `${BASE_URL}/settings/?sp_plus_settings=1&sp_changelog=1`,
                className: 'list-link list-link_arr sp_font_sm',
                id: 'sp_changelog',
                innerHTML: `
                                    <span class="b" style="color: #2196f3">
                                        <span class="sp sp-restore-blue mr-14"></span>История обновлений
                                        <span class="ico ico_arr ico_m"></span>
                                    </span>
                                `,
                onclick: () => {
                  qs('#SP_PLUS_SETHEAD').innerHTML = 'История обновлений'
                  qs('#SP_PLUS_SETHEAD2').innerHTML = `
                                        <a href="${BASE_URL}/settings/?sp_plus_settings=1">Spaces+</a>
                                        <span class="location-bar__sep ico"></span> История обновлений
                                    `
                  ;(<HTMLLinkElement>qs('#SP_PLUS_SETBACK')).href =
                    `${BASE_URL}/settings/?sp_plus_settings=1`
                  if (!/(\&)sp_changelog=1/i.test(document.location.href)) {
                    historyPush(
                      {
                        sp_plus_settings: urlSett,
                        sp_changelog: urlSettChangeLog
                      },
                      `${BASE_URL}/settings/?sp_plus_settings=1&sp_changelog=1`,
                      'Spaces+: История обновлений'
                    )
                  }
                  settingsLogMenu('#SP_PLUS_SETAREA')
                  return false
                }
              })
              setArea.appendChild(ChangeLogMenu)

              const ResetSettings = ce('a', {
                href: '#',
                className: 'list-link list-link_arr sp_font_sm',
                id: 'sp_plus_reset',
                innerHTML: `
                                    <span class="b" style="color: #f86934">
                                        <span class="sp sp-alert mr-14"></span>Сброс настроек
                                        <span class="ico ico_arr ico_m"></span>
                                    </span>
                                `,
                onclick: () => {
                  modalConfirm(
                    'Вы действительно хотите полностью сбросить настройки?',
                    true,
                    () => {
                      delCookie('SP_PLUS_SET')
                      delCookie('SP_WEATHER')
                      delCookie('gp_left_btn')
                      delCookie('force_ajax_transport')
                      delCookie('sandbox')
                      document.location.reload()
                    }
                  )
                  return false
                }
              })
              setArea.appendChild(ResetSettings)

              let clicks: number = 0

              let aboutWidget = ce('div', {
                className: 'widgets-group widgets-group_top nl wbg no-select'
              })

              let ver = ce('div', {
                innerHTML: 'v' + PKG_VERSION,
                style: {
                  float: 'right'
                }
              })

              let content = ce('div', {
                className: 'content-item3'
              })

              let heart = ce('div', {
                innerHTML: '❤️',
                className: 'heart',
                onclick: () => {
                  if (++clicks >= 10)
                    document.location.href = 'https://t.me/spaces_dev'
                }
              })

              let title = ce('div', {
                className: 'grey',
                innerHTML:
                  'Developed by <a href="https://crashmax.ru" target="_blank">crashmax</a> with love '
              })

              aboutWidget.appendChild(content)
              title.appendChild(heart)
              content.appendChild(title)
              title.appendChild(ver)
              qs('#SP_PLUS_ABOUT').appendChild(aboutWidget)
            }
            return false
          }
        })

        // Вставляем "Настройки Spaces+" перед "Уведомления"
        targetLink.before(baseLink)

        let clickEvent = document.createEvent('MouseEvent')

        if (urlSett) {
          document.title = 'Настройки Spaces+'
          clickEvent.initEvent('click', true, true)
          baseLink.dispatchEvent(clickEvent)
        }

        if (urlSettBackup) {
          document.title = 'Spaces+: Импорт и экспорт настроек'
          clickEvent.initEvent('click', true, true)
          qs('#sp_backup')?.dispatchEvent(clickEvent)
        }

        if (urlSettChangeLog) {
          document.title = 'Spaces+: История обновлений'
          clickEvent.initEvent('click', true, true)
          qs('#sp_changelog')?.dispatchEvent(clickEvent)
        }
      }
    } catch (e) {
      logger.error('settingsMenu.ts', e)
    }
  }
}
