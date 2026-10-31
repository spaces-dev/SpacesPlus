import type { Feature } from '@/core/feature'
import { byId } from '@/core/dom'
import { defineToggle } from '@/core/feature'
import { withStyle } from '@/core/with-style'
import scrollCss from '@/styles/features/scroll.scss?inline'
import { toggleId } from '@/types/toggles'

const scrollStyleId = 'SP_STYLE_SCROLL'
const scrollId = 'scroll_page'
const moved = 'sp-replace'

const scrollBar = () => byId(scrollId)

function clearOffset(scroll: HTMLElement) {
  scroll.style.removeProperty('left')
  scroll.style.removeProperty('right')
  scroll.removeAttribute(moved)
}

function placeRight() {
  const scroll = scrollBar()
  if (!scroll) return
  scroll.classList.add(moved)
  clearOffset(scroll)
}

export const scrollMove: Feature = defineToggle({
  id: toggleId.scroll,
  title: 'Прокрутка страницы справа',
  description: 'Перемещает полосу автоскролла на правую сторону.',
  desktopOnly: true,
  start: withStyle(scrollStyleId, scrollCss, (ctx) => {
    const stop = ctx.onDom(placeRight)
    return () => {
      stop()
      const scroll = scrollBar()
      if (!scroll?.classList.contains(moved)) return
      scroll.classList.remove(moved)
      clearOffset(scroll)
    }
  }),
})
