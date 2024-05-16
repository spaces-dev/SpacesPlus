import { _SETTINGS } from '../settings'
import { ce, logger, setSettings } from '../utils'

export const settingsFriends = (e: Element) => {
  try {
    let frMaxWrap = ce('div', {
      id: 'SP_PLUS_MAXFRIENDS'
    })

    let div = ce('div', {
      className: 'sp_settings-wrap'
    })

    let frMax = ce('input', {
      type: 'text',
      className: 'text-input',
      size: 4,
      maxLength: 2,
      value: _SETTINGS.friendsSet.max,
      oninput: (e: Event) => {
        const value = (e.target as HTMLInputElement).value

        if (/^([1-9]|1[0-5])$/i.test(value)) {
          setSettings('friendsSet.max', value)
          frMax.classList.remove('sp-input-error')
        } else {
          frMax.classList.add('sp-input-error')
        }
      }
    })

    let frMaxLbl = ce('label', {
      innerHTML: 'Выводить друзей:<div class="label__desc">от 1 до 15</div>',
      className: 'label'
    })

    div.appendChild(frMaxLbl)
    div.appendChild(frMax)
    frMaxWrap.appendChild(div)
    e.parentElement?.after(frMaxWrap)
  } catch (e) {
    logger.error('settingsFriends.ts', e)
  }
}
