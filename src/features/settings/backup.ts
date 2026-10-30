import { el } from '@zero-dependency/dom'
import { log } from '@/core/log'
import { modalConfirm, modalMessage } from '@/core/modals'
import { getSettings, replaceSettings, setSetting } from '@/core/settings-store'

const format = (value: unknown) => JSON.stringify(value, null, 4)

export function renderBackup(target: Element) {
  window.scrollTo(0, 0)
  target.innerHTML = ''

  try {
    if (!getSettings().hideNotify.configImport) {
      const notice = el('div', { id: 'SP_CONFIG_JSON' })
      const hide = el('span', {
        className: 'ico ico_close pointer right notif_close close_h',
        title: 'Понятно, больше не показывать.',
        style: { margin: '10px' },
      })
      hide.onclick = () => {
        setSetting('hideNotify.configImport', true)
        notice.remove()
      }
      notice.append(hide, el('div', {
        className: 'stnd-block-yellow',
        style: { padding: '16px' },
        innerHTML: '<span class="ico ico_alert_red"></span>Сохраните копию перед правкой</br></br><div style="font-size: small">В поле лежит JSON настроек. «Экспорт» сохраняет файл, «Импорт» возвращает его, если после изменения что-то сломается.</div>',
      }))
      target.append(notice)
    }

    const textarea = el('textarea', {
      className: 'text-input',
      id: 'SP_BACKUP_JSON',
      rows: 20,
      textContent: format(getSettings()),
    })
    target.append(el('div', { style: { padding: '16px 16px 14px 16px' } }, el('div', { className: 'text-input__wrap' }, el('div', { className: 'cl' }, textarea))))

    const apply = el('button', {
      className: 'user__tools-link table__cell sp_btn sp-separator-top',
      style: { borderRight: 'none' },
      innerHTML: '<span class="ico ico_ok_darkblue"></span> Применить изменения',
    })
    apply.onclick = () => {
      try {
        replaceSettings(JSON.parse(textarea.value))
        document.querySelector('#SP_PLUS_ALERT')?.remove()
        modalMessage('Импорт и экспорт настроек', 'Настройки были успешно сохранены', { close: true, timer: 3 })
      } catch (error) {
        modalMessage('Ошибка разбора файла настроек', String(error), { close: true })
      }
    }
    target.append(el('div', {
      className: 'widgets-group user__tools_last',
      style: { margin: 'unset' },
    }, apply))

    const file = el('input', {
      id: 'SP_IMPORT',
      type: 'file',
      accept: 'application/JSON',
      style: { display: 'none' },
    })
    file.onchange = () => {
      const selected = file.files?.[0]
      if (!selected) return
      const reader = new FileReader()
      reader.onload = () => {
        try {
          const json = String(reader.result)
          replaceSettings(JSON.parse(json))
          textarea.value = format(JSON.parse(json))
          modalMessage('Импорт и экспорт настроек', 'Настройки были успешно сохранены', { close: true, timer: 3 })
        } catch (error) {
          modalMessage('Ошибка разбора файла настроек', String(error), { close: true })
        }
      }
      reader.readAsText(selected)
    }

    const restore = el('button', {
      className: 'user__tools-link table__cell sp_btn-list',
      innerHTML: '<span class="ico ico_download2"></span> Импорт',
    })
    restore.onclick = () => {
      file.click()
    }

    const save = el('button', {
      className: 'user__tools-link sp_btn-list',
      innerHTML: '<span class="ico ico_upload"></span> Экспорт',
    })
    save.onclick = () => {
      modalConfirm('Вы уверены, что хотите сохранить файл настроек?', false, () => {
        const blob = new Blob([format(getSettings())], { type: 'text/plain' })
        const link = el('a', {
          href: URL.createObjectURL(blob),
          download: `spaces-plus-${Date.now()}.json`,
        })
        link.click()
        link.remove()
      })
    }

    const buttons = el('div', {
      className: 'widgets-group user__tools_last',
      id: 'SP_PLUS_BOTTOM_DIVB',
    }, [file, restore, save])
    document.querySelector('#SP_PLUS_MAIN')?.after(buttons)
  } catch (error) {
    log.error('backup', error)
  }
}
