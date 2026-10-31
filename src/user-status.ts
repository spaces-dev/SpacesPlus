import { el } from '@zero-dependency/dom'
import { isCurrentSite, isLegacySite, sessionCode } from './core/site'

const authMessage = 'Для работы <b>Spaces Plus</b> необходима авторизация!'
const unsupportedMessage = 'Используемая версия сайта не поддерживается для работы <b>Spaces Plus</b>'

export function showUserStatus(code: string | undefined) {
  const unauthorized = code === sessionCode.unauthorized

  if (isLegacySite()) {
    const banner = el('div', {
      className: 'error',
      innerHTML: unsupportedMessage,
    })
    if (unauthorized) banner.prepend(el('div', { innerHTML: authMessage }))
    document.querySelector('.root')?.prepend(banner)
    return false
  }

  if (isCurrentSite() && unauthorized) {
    document.querySelector('#top_info_block')?.prepend(el('div', {
      className: 'js-alert_message nl system-message system-message_alert',
      innerHTML: authMessage,
    }))
    return false
  }

  return true
}
