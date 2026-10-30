import { el } from '@zero-dependency/dom'
import { onSiteChange, siteCheckbox } from '@/core/checkbox'
import { getSettings, setSetting } from '@/core/settings-store'

export function renderFriendsOptions(anchor: HTMLElement) {
  if (document.querySelector('#SP_PLUS_MAXFRIENDS')) return
  const input = el('input', {
    type: 'text',
    className: 'text-input',
    size: 4,
    maxLength: 2,
    value: String(getSettings().friendsSet.max),
  })
  input.oninput = () => {
    const valid = /^(?:[1-9]|1\d|20)$/.test(input.value)
    input.classList.toggle('text-input_error_bg', !valid)
    if (!valid) return
    setSetting('friendsSet.max', Number(input.value))
  }

  const expanded = siteCheckbox('sp_friends_expanded', getSettings().friendsSet.expanded)
  expanded.label.append('Всегда держать список развернутым')
  onSiteChange(expanded.input, (checked) => {
    setSetting('friendsSet.expanded', checked)
  })

  const panel = el('div', { id: 'SP_PLUS_MAXFRIENDS' }, [
    expanded.label,
    el('div', { className: 'sp_settings-wrap' }, [
      el('label', {
        className: 'label',
        innerHTML: 'Выводить друзей:<div class="label__desc">от 1 до 20</div>',
      }),
      input,
    ]),
  ])
  anchor.parentElement?.after(panel)
}
