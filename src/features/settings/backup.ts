import { el } from '@zero-dependency/dom'
import { byId } from '@/core/dom'
import { log } from '@/core/log'
import { briefNotice, closable, modalConfirm, modalMessage, removeAlert } from '@/core/modals'
import { getSettings, replaceSettings, setSetting, settingKey } from '@/core/settings-store'
import { settingsDom } from './ids'

const jsonIndent = 4
const format = (value: unknown) => JSON.stringify(value, null, jsonIndent)
const savedTitle = 'Импорт и экспорт настроек'
const savedText = 'Настройки были успешно сохранены'
const parseErrorTitle = 'Ошибка разбора файла настроек'
const importNoticeId = 'SP_CONFIG_JSON'
const backupFieldId = 'SP_BACKUP_JSON'
const importInputId = 'SP_IMPORT'
const exportPrefix = 'spaces-plus'

function showSaved(fade: boolean) {
  if (fade) removeAlert()
  modalMessage(savedTitle, savedText, briefNotice)
}

function showParseError(error: unknown) {
  modalMessage(parseErrorTitle, String(error), closable)
}

export function renderBackup(target: Element) {
  window.scrollTo(0, 0)
  target.innerHTML = ''

  try {
    if (!getSettings().hideNotify.configImport) {
      const notice = el('div', { id: importNoticeId })
      const hide = el('span', {
        className: 'ico ico_close pointer right notif_close close_h',
        title: 'Понятно, больше не показывать.',
        style: { margin: '10px' },
      })
      hide.onclick = () => {
        setSetting(settingKey.dismissImport, true)
        notice.remove()
      }
      notice.append(hide, el('div', {
        className: 'stnd-block-yellow',
        style: { padding: '16px' },
        innerHTML: '<span class="ico ico_alert_red"></span>Внимание!</br></br><div style="font-size: small">Редактирование только для опытных пользователей. Перед правкой сделайте экспорт: если что-то пойдет не так, настройки можно импортировать обратн или сделать сброс.</div>',
      }))
      target.append(notice)
    }

    const textarea = el('textarea', {
      className: 'text-input',
      id: backupFieldId,
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
        showSaved(true)
      } catch (error) {
        showParseError(error)
      }
    }
    target.append(el('div', {
      className: 'widgets-group user__tools_last',
      style: { margin: 'unset' },
    }, apply))

    const file = el('input', {
      id: importInputId,
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
          const parsed = JSON.parse(String(reader.result))
          replaceSettings(parsed)
          textarea.value = format(parsed)
          showSaved(false)
        } catch (error) {
          showParseError(error)
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
          download: `${exportPrefix}-${Date.now()}.json`,
        })
        link.click()
        link.remove()
      })
    }

    const buttons = el('div', {
      className: 'widgets-group user__tools_last',
      id: settingsDom.backupTools,
    }, [file, restore, save])
    byId(settingsDom.main)?.after(buttons)
  } catch (error) {
    log.error('backup', error)
  }
}
