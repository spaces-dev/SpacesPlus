import { ICheckUpdates } from '../interfaces/CheckUpdates'
import { HTTP } from '../strings'
import { ce, logger, qs, rever } from '../utils'
import { getUpdater } from './checkUpdates'

export const settingsLogMenu = (id: string) => {
  window.scrollTo(0, 0)
  const target = qs(id)

  if (target) {
    try {
      target.innerHTML = ''

      let wrap = ce('div', {
        className: 'wbg error__item_wrapper sp_plus_c_wrap'
      })

      let pad = ce('div', {
        className: 'pad_t_a'
      })

      let container = ce('div', {
        className: 'js-input_error_wrap'
      })

      let preloader = ce('div', {
        className: 't_center',
        id: 'SP_JSON_PRELOADER',
        innerHTML: `<img src="${HTTP}//spac.me/i/preloader.gif">`
      })

      container.appendChild(pad)
      wrap.appendChild(container)
      target.appendChild(wrap)
      wrap.appendChild(preloader)

      getUpdater((json: ICheckUpdates) => {
        for (let history of json.history) {
          let label = ce('label', {
            className: 'label sp_plus_line_c',
            innerHTML: `v${rever(history.build)}<div class="label__desc">${history.date}</div>`
          })

          let changes = ce('div', {
            className: 'grey sp_plus_c_desc',
            innerHTML: history.changes
          })

          pad.appendChild(label)
          pad.appendChild(changes)
        }

        qs('#SP_JSON_PRELOADER').remove()
      })
    } catch (e) {
      logger.error('settingsLogMenu.ts', e)
    }
  }
}
