import type { Feature } from '@/core/feature'
import { log } from '@/core/log'

const moved = 'sp-replace'

export const scrollMove: Feature = {
  id: 'rscroll',
  title: 'Прокрутка страницы справа',
  description: 'Перемещает полосу автоскролла на правую сторону.',
  desktopOnly: true,
  start: (ctx) => {
    const apply = () => {
      const scroll = document.querySelector<HTMLElement>('#scroll_page')
      if (!scroll || scroll.hasAttribute(moved)) return
      scroll.style.left = 'auto'
      scroll.style.right = '0'
      scroll.setAttribute(moved, '1')
    }

    const stop = ctx.onDom(() => {
      try {
        apply()
      } catch (error) {
        log.error('rscroll', error)
      }
    })

    return () => {
      stop()
      const scroll = document.querySelector<HTMLElement>('#scroll_page')
      if (!scroll?.hasAttribute(moved)) return
      scroll.style.left = '0'
      scroll.style.right = 'auto'
      scroll.removeAttribute(moved)
    }
  },
}
