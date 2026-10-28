import type { Feature } from '@/core/feature'
import { baseUrl, searchParam } from '@/core/site'

export const disableRedirect: Feature = {
  id: 'dredirect',
  title: 'Внешние ссылки без редиректа',
  description: 'Функция избавляет от предупреждения при переходе по внешней ссылке.',
  start: ctx => ctx.onDom(() => {
    document.querySelectorAll<HTMLAnchorElement>(`a[href^="${baseUrl}/redirect/"]`).forEach((link) => {
      const target = searchParam(link.href, 'redirect')
      if (target) link.href = target
    })
  }),
}
