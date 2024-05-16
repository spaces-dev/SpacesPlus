import { _SETTINGS } from '../settings'
import {
  ce,
  logger,
  modalConfirm,
  modalMessage,
  qs,
  setCookie,
  setSettings
} from '../utils'

/**
 * Меню импорта/экспорта файла настроек
 * @param id #SP_PLUS_SETAREA
 */
export const settingsBackupMenu = async (id: string) => {
  // Прокручиваем страницу вверх
  window.scrollTo(0, 0)
  const target = qs(id)

  // https://www.npmjs.com/package/json-beautify
  const beautify = (await import('json-beautify')).default

  if (target) {
    try {
      // Очищаем #SP_PLUS_SETAREA
      target.innerHTML = ''

      // Предупреждение для ламеров
      if (!_SETTINGS.hideNotify.configImport) {
        let hideNotify = ce('span', {
          className: 'sp sp-remove-grey pointer right notif_close close_h',
          title: 'Понятно, больше не показывать.',
          style: {
            margin: '10px'
          },
          onclick: () => {
            setSettings('hideNotify.configImport', true)
            qs('#SP_CONFIG_JSON').remove()
          }
        })

        let smallInfo = ce('div', {
          className: 'stnd-block-yellow',
          innerHTML:
            '<span class="sp sp-alert"></span>Внимание!</br></br><div style="font-size: small">Редактирование только для опытных пользователей! Перед редактированием файла настроек, следует сделать Экспорт, если что-то пошло не так, следует сделать Импорт настроек.</div>',
          style: {
            padding: '16px'
          }
        })

        let infoDiv = ce('div', {
          id: 'SP_CONFIG_JSON'
        })

        infoDiv.appendChild(hideNotify)
        target.appendChild(infoDiv)
        infoDiv.appendChild(smallInfo)
      }

      let wrap = ce('div', {
        style: {
          padding: '16px 16px 14px 16px'
        }
      })

      let buttonsDiv = ce('div', {
        className: 'widgets-group user__tools_last',
        id: 'SP_PLUS_BOTTOM_DIVB'
      })

      let textareaBtn = ce('div', {
        className: 'widgets-group user__tools_last',
        style: {
          margin: 'unset'
        }
      })

      let tiw = ce('div', {
        className: 'text-input__wrap'
      })

      let cl = ce('div', {
        className: 'cl'
      })

      let updateButton = ce('button', {
        className: 'user__tools-link table__cell sp_btn',
        innerHTML: `
                    <span class="sp sp-ok-darkblue"></span>
                    <span style="color: #0E3C87; padding-left: 10px">Применить изменения</span>
                `,
        style: {
          borderRight: 'none',
          borderTop: '1px solid #cdd4e1'
        },
        onclick: () => {
          try {
            let value = JSON.parse(
              (<HTMLInputElement>qs('#SP_BACKUP_JSON')).value
            )

            // удаляем алерты с ошибками, если они есть
            qs('#SP_PLUS_ALERT')?.remove()

            // сохраняем настройки
            setCookie('SP_PLUS_SET', JSON.stringify(value))

            // сообщение
            modalMessage(
              'Импорт и экспорт настроек',
              'Настройки были успешно сохранены',
              true,
              3
            )
          } catch (e) {
            modalMessage('Ошибка разбора файла настроек', e, true)
          }
        }
      })

      let restoreInput = ce('input', {
        id: 'SP_IMPORT',
        type: 'file',
        accept: 'application/JSON',
        style: {
          display: 'none'
        },
        onchange: () => {
          let json,
            textarea = <HTMLInputElement>qs('#SP_BACKUP_JSON'),
            f = (<HTMLInputElement>qs('#SP_IMPORT')).files![0]

          const reader: FileReader = new FileReader()

          reader.onload = ((_f) => {
            return () => {
              try {
                json = reader.result as string

                // валидация
                JSON.parse(json)

                // сохраняем настройки
                setCookie('SP_PLUS_SET', json)

                // вставляем в textarea
                textarea.value = beautify(JSON.parse(json), null, 4)

                modalMessage(
                  'Импорт и экспорт настроек',
                  'Настройки были успешно сохранены',
                  true,
                  3
                )
              } catch (e) {
                modalMessage('Ошибка разбора файла настроек', e, true)
              }
            }
          })(f)

          reader.readAsText(f)
        }
      })

      let restoreButton = ce('button', {
        className: 'user__tools-link table__cell sp_btn_line sp_btn-list',
        innerHTML: `
                    <span class="sp sp-restore-g"></span>
                    <span style="color: #3CA93C; padding-left: 10px">Импорт</span>
                `,
        onclick: () => qs('#SP_IMPORT').click()
      })

      let saveButton = ce('button', {
        className: 'user__tools-link sp_btn-list',
        innerHTML: `
                    <span class="sp sp-download-blue"></span>
                    <span style="color: #57A3EA; padding-left: 10px">Экспорт</span>
                `,
        onclick: () => {
          modalConfirm(
            'Вы уверены, что хотите сохранить файл настроек?',
            false,
            () => {
              let settings = new Blob([beautify(_SETTINGS, null, 4)], {
                type: 'text/plain'
              })

              let blob = ce('a', {
                href: URL.createObjectURL(settings),
                download: `spaces-plus-${+new Date()}.json`
              })

              blob.click()
              blob.remove()
            }
          )
        }
      })

      let textarea = ce('textarea', {
        className: 'text-input',
        id: 'SP_BACKUP_JSON',
        rows: 20,
        innerHTML: beautify(_SETTINGS, null, 4)
      })

      target.appendChild(wrap)
      wrap.appendChild(tiw)
      tiw.appendChild(cl)
      cl.appendChild(textarea)
      textareaBtn.appendChild(updateButton)
      target.appendChild(textareaBtn)

      // группа кнопок
      buttonsDiv.appendChild(restoreInput)
      buttonsDiv.appendChild(restoreButton)
      buttonsDiv.appendChild(saveButton)
      qs('#SP_PLUS_ABOUT').previousElementSibling?.after(buttonsDiv)
    } catch (e) {
      logger.error('settingsBackupMenu.ts', e)
    }
  }
}
