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
      if (!scroll) return
      scroll.classList.add(moved)
      scroll.style.removeProperty('left')
      scroll.style.removeProperty('right')
      scroll.removeAttribute(moved)
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
      if (!scroll?.classList.contains(moved)) return
      scroll.classList.remove(moved)
      scroll.style.removeProperty('left')
      scroll.style.removeProperty('right')
      scroll.removeAttribute(moved)
    }
  },
}
