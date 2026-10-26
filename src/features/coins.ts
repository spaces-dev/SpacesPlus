import type { Feature } from '../core/feature'
import { log } from '../core/log'
import { baseUrl } from '../core/site'

export const coins: Feature = {
  id: 'coins',
  title: 'Собирать бонусные монеты',
  description: 'Функция в автоматическом режиме ищет и собирает бонусные монеты.',
  start: ctx => ctx.onDom(() => {
    try {
      document.querySelectorAll<HTMLElement>(`a[href^="${baseUrl}/services/gift_get/"]`).forEach((link) => {
        link.click()
        link.parentElement?.remove()
        log.info('Собрали монетку', link)
      })
    } catch (error) {
      log.error('coins', error)
    }
  }),
}
