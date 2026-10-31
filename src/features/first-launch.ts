import type { Feature } from '@/core/feature'
import { el } from '@zero-dependency/dom'
import { log } from '@/core/log'
import { modalMessage } from '@/core/modals'
import { cookies } from '@/core/settings-store'
import { baseUrl, host } from '@/core/site'

const skippedHosts = new Set(['spaces-blogs.com', 'spac1.net'])

export const firstLaunch: Feature = {
  id: 'first-launch',
  core: true,
  start: () => {
    try {
      if (cookies.get('SP_LAUNCH') !== null || skippedHosts.has(host)) return

      modalMessage(
        'Спасибо за установку Spaces Plus',
        `<b style="color: #f86934">ВНИМАНИЕ!</b></br></br>Во избежание подделок, которые могут воровать пароли пользователей, скрипт скачивать только с официального <a href="https://spaces-dev.github.io" target="_blank">сайта</a></br></br>С вопросами по использованию скрипта пишите в сообщество <a href="${baseUrl}/soo/extension/" target="_blank">Spaces Plus</a></br></br>`,
        { close: true },
      )

      const href = `${baseUrl}/settings/?sp_plus_settings=1`
      const pad = el('div', { className: 'pad_t_a' })
      const button = el('a', {
        href,
        className: 'btn btn_white btn_input right sp-dialog__btn',
        innerHTML: 'Перейти к настройкам',
      })
      button.addEventListener('click', (event) => {
        event.preventDefault()
        location.assign(href)
      })
      pad.append(button)
      document.querySelector('#SP_PLUS_ALERT > .content-item3')?.append(pad)
      cookies.set('SP_LAUNCH', '1')
    } catch (error) {
      log.error('first-launch', error)
    }
  },
}
