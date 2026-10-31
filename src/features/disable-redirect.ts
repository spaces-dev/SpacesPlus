import type { Feature } from '@/core/feature'
import { defineToggle } from '@/core/feature'
import { anchoredHref, searchParam } from '@/core/site'
import { toggleId } from '@/types/toggles'

const redirectPath = '/redirect/'
const redirectParam = 'redirect'

export const disableRedirect: Feature = defineToggle({
  id: toggleId.redirect,
  title: 'Внешние ссылки без редиректа',
  description: 'Функция избавляет от предупреждения при переходе по внешней ссылке.',
  start: ctx => ctx.onDom(() => {
    document.querySelectorAll<HTMLAnchorElement>(anchoredHref(redirectPath)).forEach((link) => {
      const target = searchParam(link.href, redirectParam)
      if (target) link.href = target
    })
  }),
})
