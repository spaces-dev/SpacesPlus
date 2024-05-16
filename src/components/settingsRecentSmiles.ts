import { _SETTINGS } from '../settings'
import { ce, setSettings } from '../utils'

export const settingsRecentSmiles = (e: Element) => {
  let masWarp = ce('div', {
    id: 'SP_RECENTS_SETTINGS',
    className: 'sp_settings-wrap'
  })

  let maxSabeLbl = ce('label', {
    innerHTML: 'Сохранять смайликов:<div class="label__desc">от 10 до 60</div>',
    className: 'label'
  })

  let maxSave = ce('input', {
    type: 'text',
    className: 'text-input',
    size: 4,
    maxLength: 2,
    value: _SETTINGS.recentSmiles.max,
    oninput: (e: Event) => {
      const value = (e.target as HTMLInputElement).value

      if (/^([1-5][0-9]|60)$/i.test(value)) {
        setSettings('recentSmiles.max', value)
        maxSave.classList.remove('sp-input-error')
      } else {
        maxSave.classList.add('sp-input-error')
      }
    }
  })

  masWarp.appendChild(maxSabeLbl)
  masWarp.appendChild(maxSave)
  e.parentElement?.after(masWarp)
}
