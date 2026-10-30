import { el } from '@zero-dependency/dom'
import { onSiteChange, siteCheckbox } from '@/core/checkbox'
import { getSettings, setSetting } from '@/core/settings-store'
import { paintRecent } from './menu'
import { trimSmiles } from './storage'

const maxLimit = /^(?:[1-9]\d?|1[01]\d|120)$/

export function renderRecentOptions(anchor: HTMLElement) {
  if (document.querySelector('#SP_PLUS_RECENTS')) return
  const { recentSmiles: options } = getSettings()

  const show = siteCheckbox('SP_RECENTS_SHOW', options.show)
  show.label.append('Открывать недавние по умолчанию')
  onSiteChange(show.input, (checked) => {
    setSetting('recentSmiles.show', checked)
  })

  const max = el('input', {
    type: 'text',
    className: 'text-input',
    size: 4,
    maxLength: 3,
    value: String(options.max),
    style: { marginBottom: '7px' },
  })
  max.oninput = () => {
    const valid = maxLimit.test(max.value)
    max.classList.toggle('text-input_error_bg', !valid)
    if (!valid) return
    const limit = Number(max.value)
    setSetting('recentSmiles.max', limit)
    trimSmiles(limit)
    paintRecent()
  }

  const panel = el('div', { id: 'SP_PLUS_RECENTS' }, [
    show.label,
    el('div', { className: 'sp_settings-wrap' }, [
      el('label', {
        className: 'label',
        innerHTML: 'Хранить смайликов и стикеров:<div class="label__desc">от 1 до 120</div>',
      }),
      max,
      el('div', {
        className: 'label__desc grey',
        textContent: 'С зажатым Shift в правом верхнем углу ячейки появляется плюс или крестик. Плюс добавляет смайл в недавние, крестик убирает. Клик по ячейке не закрывает меню. Без Shift клик вставляет код в поле и запоминает его.',
      }),
    ]),
  ])
  anchor.parentElement?.after(panel)
}
