import type { Feature } from '../core/feature'

const mark = 'data-sp-old-header'

function headerLinks() {
  return [...document.querySelectorAll<HTMLAnchorElement>('a.horiz-menu__link, #navi > a.header__link')]
    .filter(link => !link.classList.contains('header__link--more'))
}

function labels() {
  document.querySelectorAll('span.horiz-menu__link-text, #navi > a.header__link:not(.header__link--more) .header__label').forEach(node => node.remove())
}

function pair() {
  const links = headerLinks()
  const feed = links.find(link => link.pathname.startsWith('/lenta'))
  const mail = links.find(link => link.pathname.startsWith('/mail'))
  const header = document.querySelector('#header_elements')
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

export const oldHeader: Feature = {
  id: 'oldheader',
  title: 'Старое положение кнопок в шапке',
  description: 'Функция меняет кнопку почты и ленты местами, как было раньше.',
  start: (ctx) => {
    const stop = ctx.onDom(() => {
      labels()
      swap(true)
    })

    return () => {
      stop()
      const header = document.querySelector('#header_elements')
      if (!header?.hasAttribute(mark)) return
      header.removeAttribute(mark)
      swap(false)
    }
  },
}
