import { el } from '@zero-dependency/dom'
import { device } from './core/site'

const authMessage = 'Для работы <b>Spaces Plus</b> необходима авторизация!'

export function showUserStatus(code: string | undefined) {
  if (device.id === 1 || device.id === 2) {
    const banner = el('div', {
      className: 'error',
      innerHTML: 'Используемая версия сайта не поддерживается для работы <b>Spaces Plus</b>',
    })
    if (code === '01001') banner.prepend(el('div', { innerHTML: authMessage }))
    document.querySelector('.root')?.prepend(banner)
    return false
  }

  if ((device.id === 3 || device.id === 4) && code === '01001') {
    document.querySelector('#top_info_block')?.prepend(el('div', {
      className: 'js-alert_message nl system-message system-message_alert',
      innerHTML: authMessage,
    }))
    return false
  }

  return true
}
