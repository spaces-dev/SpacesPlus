import type { Feature } from '@/core/feature'
import { log } from '@/core/log'
import { baseUrl } from '@/core/site'

export const karma: Feature = {
  id: 'karma',
  title: 'Собирать карму',
  description: 'Функция в автоматическом режиме подтверждает назойливую карму.',
  start: ctx => ctx.onDom(() => {
    try {
      document.querySelectorAll<HTMLElement>(`a[href^="${baseUrl}/mysite/rate_n_karma/karma/?Accept="]`).forEach((link) => {
        link.click()
        link.parentElement?.remove()
        log.info('Собрали карму', link)
      })
    } catch (error) {
      log.error('karma', error)
    }
  }),
}
