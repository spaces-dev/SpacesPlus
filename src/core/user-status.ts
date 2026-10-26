import { el } from '@zero-dependency/dom'
import { device } from './site'

export function showUserStatus(code: string | undefined) {
  const warning = el('div', {
    innerHTML: 'Для работы <b>Spaces+</b> необходима авторизация!',
  })

  if (device.id === 1 || device.id === 2) {
    const banner = el('div', {
      className: 'oh busi',
      innerHTML: 'Используемая версия сайта не поддерживается для работы <b>Spaces+</b>',
      style: {
        border: '1px solid #ff9a95',
        background: '#fdf3ef',
      },
    })
    if (code === '01001') banner.prepend(warning)
    document.querySelector('.root')?.prepend(banner)
    return false
  }

  if ((device.id === 3 || device.id === 4) && code === '01001') {
    const box = el('div', {
      className: 'oh nl system-message',
      style: {
        border: '1px solid #ff9a95',
        background: '#fdf3ef',
      },
    })
    box.prepend(warning)
    document.querySelector('#top_info_block')?.prepend(box)
    return false
  }

  return true
}
