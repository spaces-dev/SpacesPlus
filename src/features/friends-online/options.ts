import { el } from '@zero-dependency/dom'
import { onSiteChange, siteCheckbox } from '@/core/checkbox'
import { mountPanel, numberField } from '@/core/fields'
import { getSettings, setSetting, settingKey } from '@/core/settings-store'

export const friendsOptionsId = 'SP_PLUS_MAXFRIENDS'
export const friendsPanelId = 'SP_PLUS_FRIENDS_B'
export const friendsRange = { min: 1, max: 20 }

export function renderFriendsOptions(anchor: HTMLElement) {
  mountPanel(friendsOptionsId, anchor, () => {
    const input = numberField({
      value: getSettings().friendsSet.max,
      min: friendsRange.min,
      max: friendsRange.max,
      maxLength: 2,
      onValid: (next) => {
        setSetting(settingKey.friendsLimit, next)
      },
    })

    const expanded = siteCheckbox('sp_friends_expanded', getSettings().friendsSet.expanded)
    expanded.label.append('Всегда держать список развернутым')
    onSiteChange(expanded.input, (checked) => {
      setSetting(settingKey.friendsExpanded, checked)
    })

    return el('div', { id: friendsOptionsId }, [
      expanded.label,
      el('div', { className: 'sp_settings-wrap' }, [
        el('label', {
          className: 'label',
          innerHTML: `Выводить друзей:<div class="label__desc">от ${friendsRange.min} до ${friendsRange.max}</div>`,
        }),
        input,
      ]),
    ])
  })
}
