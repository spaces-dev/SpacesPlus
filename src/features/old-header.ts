import type { Feature } from '@/core/feature'
import { defineToggle } from '@/core/feature'
import { toggleId } from '@/types/toggles'

const mark = 'data-sp-old-header'
const headerId = 'header_elements'
const linkSelector = 'a.horiz-menu__link, #navi > a.header__link'
const labelSelector = 'span.horiz-menu__link-text, #navi > a.header__link:not(.header__link--more) .header__label'
const moreClass = 'header__link--more'
const feedPath = '/lenta'
const mailPath = '/mail'

function headerLinks() {
  return [...document.querySelectorAll<HTMLAnchorElement>(linkSelector)]
    .filter(link => !link.classList.contains(moreClass))
}

function labels() {
  document.querySelectorAll(labelSelector).forEach(node => node.remove())
}

function pair() {
  const links = headerLinks()
  const feed = links.find(link => link.pathname.startsWith(feedPath))
  const mail = links.find(link => link.pathname.startsWith(mailPath))
  const header = document.getElementById(headerId)
  return { feed, mail, header }
}

function swap(remember: boolean) {
  const { feed, mail, header } = pair()
  if (!feed || !mail || !header) return
  if (remember && header.hasAttribute(mark)) return

  const feedClone = feed.cloneNode(true)
  const mailClone = mail.cloneNode(true)
  mail.replaceWith(feedClone)
  feed.replaceWith(mailClone)
  if (remember) header.setAttribute(mark, '1')
}

export const oldHeader: Feature = defineToggle({
  id: toggleId.oldHeader,
  title: 'Старое положение кнопок в шапке',
  description: 'Функция меняет кнопку почты и ленты местами, как было раньше.',
  start: (ctx) => {
    const stop = ctx.onDom(() => {
      labels()
      swap(true)
    })

    return () => {
      stop()
      const header = document.getElementById(headerId)
      if (!header?.hasAttribute(mark)) return
      header.removeAttribute(mark)
      swap(false)
    }
  },
})
