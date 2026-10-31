import { el } from '@zero-dependency/dom'
import { onSiteChange, siteCheckbox } from '@/core/checkbox'
import { fieldGap, mountPanel, numberField } from '@/core/fields'
import { getSettings, setSetting, settingKey } from '@/core/settings-store'
import { paintRecent } from './menu'
import { trimSmiles } from './storage'

export const recentsOptionsId = 'SP_PLUS_RECENTS'
const recentRange = { min: 1, max: 120 }

export function renderRecentOptions(anchor: HTMLElement) {
  mountPanel(recentsOptionsId, anchor, () => {
    const { recentSmiles: options } = getSettings()

    const show = siteCheckbox('SP_RECENTS_SHOW', options.show)
    show.label.append('Открывать недавние по умолчанию')
    onSiteChange(show.input, (checked) => {
      setSetting(settingKey.recentOpen, checked)
    })

    const max = numberField({
      value: options.max,
      min: recentRange.min,
      max: recentRange.max,
      maxLength: 3,
      style: { marginBottom: fieldGap },
      onValid: (limit) => {
        setSetting(settingKey.recentLimit, limit)
        trimSmiles(limit)
        paintRecent()
      },
    })

    return el('div', { id: recentsOptionsId }, [
      show.label,
      el('div', { className: 'sp_settings-wrap' }, [
        el('label', {
          className: 'label',
          innerHTML: `Хранить смайликов и стикеров:<div class="label__desc">от ${recentRange.min} до ${recentRange.max}</div>`,
        }),
        max,
        el('div', {
          className: 'label__desc grey',
          textContent: 'С зажатым Shift в правом верхнем углу ячейки появляется плюс или крестик. Плюс добавляет смайл в недавние, крестик убирает. Клик по ячейке не закрывает меню. Без Shift клик вставляет код в поле и запоминает его.',
        }),
      ]),
    ])
  })
}
