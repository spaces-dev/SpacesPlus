import type { Feature } from '../core/feature'

const mark = 'sp-sticky-header'

function paint() {
  const wrapAll = document.querySelector<HTMLElement>('#wrap_all')
  const leftNav = document.querySelector<HTMLElement>('#rightbar')
  const header = document.querySelector<HTMLElement>('#header_elements')
  const mainShadow = document.querySelector<HTMLElement>('#main_shadow')
  const infoBlock = document.querySelector<HTMLElement>('#top_info_block')
  const sidebarLogo = document.querySelector<HTMLElement>('div.sidebar-logo')
  if (!wrapAll || !leftNav || !header || !mainShadow || !infoBlock || !sidebarLogo) return

  mainShadow.style.paddingTop = '45px'
  infoBlock.style.position = 'fixed'
  infoBlock.style.width = `${mainShadow.clientWidth}px`
  infoBlock.style.zIndex = '9999'
  sidebarLogo.style.position = 'fixed'
  sidebarLogo.style.width = `${leftNav.clientWidth + 1}px`
  sidebarLogo.style.left = `${wrapAll.offsetLeft}px`
  sidebarLogo.style.top = '0px'
  sidebarLogo.style.boxShadow = '0px 2px 2px rgba(93,109,157,0.2)'
  sidebarLogo.style.zIndex = '9999'
  header.style.position = 'fixed'
  header.style.width = `${mainShadow.clientWidth - leftNav.clientWidth + 1}px`
  header.style.left = `${wrapAll.offsetLeft + leftNav.clientWidth}px`
  header.style.top = '0px'
  header.style.boxShadow = '0px 2px 2px rgba(93,109,157,0.2)'
  header.style.zIndex = '9999'
}

export const stickyHeader: Feature = {
  id: 'stickyheader',
  title: 'Закрепить шапку',
  description: 'Функция закрепляет шапку сайта.',
  start: (ctx) => {
    let observer: ResizeObserver | undefined

    const stop = ctx.onDom(() => {
      if (observer) return
      const header = document.querySelector('#header_elements')
      if (!header || !document.querySelector('#wrap_all') || !document.querySelector('#main_shadow') || !document.querySelector('div.sidebar-logo')) return

      observer = new ResizeObserver(() => {
        window.requestAnimationFrame(() => {
          paint()
        })
      })
      observer.observe(document.body)
      header.setAttribute(mark, '1')
      paint()
    })

    return () => {
      stop()
      observer?.disconnect()
      for (const selector of ['#header_elements', '#top_info_block', '#main_shadow', 'div.sidebar-logo']) {
        document.querySelector<HTMLElement>(selector)?.removeAttribute('style')
      }
      document.querySelector('#header_elements')?.removeAttribute(mark)
    }
  },
}
