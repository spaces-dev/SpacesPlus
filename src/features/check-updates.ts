import type { Feature } from '@/core/feature'
import type { CheckUpdates } from '@/types/check-updates'
import { el } from '@zero-dependency/dom'
import { http } from '@/core/http'
import { log } from '@/core/log'
import { modalMessage } from '@/core/modals'
import { getSettings, setSetting } from '@/core/settings-store'
import { assetOrigin, revision, session } from '@/core/site'

const dotted = (build: number) => String(build).split('').join('.')

export async function loadUpdates() {
  const response = await http<CheckUpdates>(`${assetOrigin}/updater.json?r=${revision}`)
  log.info('Проверка обновлений', response)
  if (response.status !== 200 || !response.parsedBody?.history) return
  return response.parsedBody
}

export const checkUpdates: Feature = {
  id: 'check-updates',
  core: true,
  start: () => {
    loadUpdates().then((json) => {
      const latest = json?.history[0]
      if (!latest) return
      const hidden = getSettings().upVersion || 0
      session.version = Math.max(hidden, session.version)
      if (latest.build <= session.version) return

      modalMessage(
        `Доступна новая версия Spaces Plus ${dotted(latest.build)}`,
        `<div class="pad_t_a"></div>${latest.changes}<div id="SP_UPDATER_BUTTONS" class="pad_t_a"><a class="btn btn_green btn_input" href="${assetOrigin}/spaces-plus.user.js?r=${revision}">Обновить</a></div>`,
        { close: true },
      )

      const buttons = document.querySelector('#SP_UPDATER_BUTTONS')
      if (!buttons) return
      const hide = el('a', {
        href: '#',
        className: 'btn btn_white btn_input right sp-dialog__btn',
        innerHTML: 'Больше не показывать',
      })
      hide.onclick = () => {
        setSetting('upVersion', latest.build)
        document.querySelector('#SP_PLUS_ALERT')?.remove()
        return false
      }
      buttons.append(hide)
    }).catch((error) => {
      log.error('check-updates', error)
    })
  },
}

export async function renderChangelog(target: Element) {
  target.innerHTML = ''
  const pad = el('div', { className: 'pad_t_a' })
  const preloader = el('div', {
    className: 't_center',
    id: 'SP_JSON_PRELOADER',
    innerHTML: `<img src="${location.protocol}//spac.me/i/preloader.gif">`,
  })
  const wrap = el('div', { className: 'wbg error__item_wrapper sp_plus_c_wrap' }, [
    el('div', { className: 'js-input_error_wrap' }, pad),
    preloader,
  ])
  target.append(wrap)

  const json = await loadUpdates()
  if (!json) return
  for (const entry of json.history) {
    pad.append(
      el('label', {
        className: 'label sp_plus_line_c',
        innerHTML: `v${dotted(entry.build)}<div class="label__desc">${entry.date}</div>`,
      }),
      el('div', {
        className: 'grey sp_plus_c_desc',
        innerHTML: entry.changes,
      }),
    )
  }
  preloader.remove()
}
