import type { Feature } from '../core/feature'
import { el } from '@zero-dependency/dom'
import { renderSVG } from 'uqr'
import { log } from '../core/log'
import { modalMessage } from '../core/modals'
import { pathAt, session } from '../core/site'

export const qrCode: Feature = {
  id: 'qr-code',
  core: true,
  start: ctx => ctx.onDom(() => {
    try {
      const moreMenu = document.querySelector('div#more_menu > div > div')
      if (pathAt(1) !== 'mysite' || !moreMenu || document.querySelector('#SP_QR_BUTTON')) return

      const button = el('a', {
        className: 'stnd-link',
        id: 'SP_QR_BUTTON',
        innerHTML: '<span class="sp sp-qrcode"></span><span class="t js-text">Получить QR-код</span>',
      })
      button.onclick = () => {
        modalMessage('Сканируйте QR-код с телефона', '<div id="SP_QR_CODE"></div>', { close: true })
        const target = document.querySelector('#SP_QR_CODE')
        if (!target || !session.sid) return false

        target.innerHTML = renderSVG(session.sid, { pixelSize: 6, border: 2 })
        target.append(el('ol', {
          innerHTML: '<li>Запустите <b>OpenSpaces</b> на телефоне</li><li>На странице авторизации нажмите «<b>Login by QR code</b>»</li><li>Сканируйте этот код для авторизации</li>',
        }))
        return false
      }
      moreMenu.append(button)
    } catch (error) {
      log.error('qr-code', error)
    }
  }),
}
