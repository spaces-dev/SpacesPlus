import type { NewbeeQuest } from '@/types/newbee-quest'
import { el } from '@zero-dependency/dom'
import { http } from '@/core/http'
import { log } from '@/core/log'
import { modalConfirm, modalMessage } from '@/core/modals'
import { cookies } from '@/core/settings-store'
import { baseUrl, session } from '@/core/site'

function button(html: string) {
  return `<span class="b">${html}</span>`
}

export function renderBuiltins(root: Element) {
  const debugOn = cookies.get('spaces_js_console')
  const sandbox = cookies.get('sandbox')
  const transport = cookies.get('force_ajax_transport')
  const player = cookies.get('gp_left_btn')

  const wrap = el('div', { id: 'wrap_spaces_option' })
  const api = el('a', {
    href: '#',
    className: 'list-link list-link_arr sp_font_sm',
    innerHTML: button(debugOn
      ? '<span class="sp sp-remove-grey mr-14"></span>Отключить отладчик'
      : '<span class="sp sp-settings mr-14"></span>Включить отладчик'),
  })
  api.onclick = () => {
    if (debugOn) cookies.remove('spaces_js_console')
    else cookies.set('spaces_js_console', '1')
    location.reload()
    return false
  }

  const beta = el('a', {
    href: '#',
    className: 'list-link list-link_arr sp_font_sm',
    innerHTML: button(sandbox
      ? '<span class="sp sp-exit-grey mr-14"></span>Выйти из песочницы'
      : '<span class="sp sp-enter-grey mr-14"></span>Войти в песочницу'),
  })
  beta.onclick = () => {
    if (sandbox) cookies.remove('sandbox')
    else cookies.set('sandbox', 'beta')
    location.reload()
    return false
  }

  const bar = el('a', {
    href: '#',
    className: 'list-link list-link_arr sp_font_sm',
    innerHTML: button(transport
      ? '<span class="sp sp-remove-grey mr-14"></span>Убрать полосу загрузки'
      : '<span class="sp sp-ok-grey mr-14"></span>Добавить полосу загрузки страницы'),
  })
  bar.onclick = () => {
    if (transport) cookies.remove('force_ajax_transport')
    else cookies.set('force_ajax_transport', '1')
    location.reload()
    return false
  }

  const pin = el('a', {
    href: '#',
    className: 'list-link list-link_arr sp_last_btn',
    innerHTML: button(player
      ? '<span class="sp sp-remove-grey mr-14"></span>Убрать плеер из левой панели'
      : '<span class="sp sp-ok-grey mr-14"></span>Закрепить плеер на левой панели'),
  })
  pin.onclick = () => {
    if (player) cookies.remove('gp_left_btn')
    else cookies.set('gp_left_btn', '1')
    location.reload()
    return false
  }

  const quest = el('a', {
    href: '#',
    className: 'list-link list-link_arr sp_line sp_last_btn',
    innerHTML: button('<span class="sp sp-remove-grey mr-14"></span>Скрыть квест новичка'),
  })
  quest.onclick = () => {
    modalConfirm('Вы действительно хотите скрыть квест новичка?', true, () => {
      http(`${baseUrl}/newbequest/?CK=${session.ck}`, { proxy: true }).then((response) => {
        if (response.status === 200) {
          modalMessage('Поздравляем!', 'Квест новичка был успешно скрыт', { close: true, timer: 5 })
        }
      })
    })
    return false
  }

  wrap.append(api, beta, bar, pin)
  root.append(wrap)

  http<NewbeeQuest>(`${baseUrl}/mysite/`, { proxy: true }).then((response) => {
    if (response.parsedBody?.owner_widget.newbee_quest_widget) {
      pin.classList.remove('sp_last_btn')
      wrap.append(quest)
    }
    log.info('Квест новичка', response)
  }).catch((error) => {
    log.error('newbee-quest', error)
  })
}
