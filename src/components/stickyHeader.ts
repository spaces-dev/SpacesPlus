import { qs, css, logger } from '../utils'

export const stickyHeader = (b: boolean) => {
    try {

        let wrapAll = qs('#wrap_all'),
            leftNav = qs('#left_nav'),
            header = qs('#header_elements'),
            mainShadow = qs('#main_shadow'),
            infoBlock = qs('#top_info_block'),
            sidebarLogo = qs('div.sidebar-logo')

        if (b && !header.hasAttribute('sp-sticky-header')) {

            // отслеживаем изменения размеров страницы
            const resizeBody = new ResizeObserver(e => {

                window.requestAnimationFrame(() => {
                    if (!Array.isArray(e) || !e.length) {
                        return
                    }

                    // опускаем основной контейнер
                    css(mainShadow, {
                        paddingTop: '45px'
                    })

                    // фиксированное положение блока (при смене версии сайта)
                    css(infoBlock, {
                        position: 'fixed',
                        width: `${mainShadow.clientWidth}px`,
                        zIndex: 9999
                    })

                    // стили для логотипа
                    css(sidebarLogo, {
                        position: 'fixed',
                        width: `${leftNav.clientWidth + 1}px`,
                        left: `${wrapAll.offsetLeft}px`,
                        top: '0px',
                        boxShadow: '0px 2px 2px rgba(93,109,157,0.2)',
                        zIndex: 9999
                    })

                    // стили для шапки
                    css(header, {
                        position: 'fixed',
                        width: `${mainShadow.clientWidth - leftNav.clientWidth + 1}px`,
                        left: `${wrapAll.offsetLeft + leftNav.clientWidth}px`,
                        top: '0px',
                        boxShadow: '0px 2px 2px rgba(93,109,157,0.2)',
                        zIndex: 9999
                    })
                })
            })

            resizeBody.observe(document.body)
            header.setAttribute('sp-sticky-header', '1')
        } else if (header.hasAttribute('sp-sticky-header')) {

            // удаление применных стилей
            header.removeAttribute('style')
            infoBlock.removeAttribute('style')
            mainShadow.removeAttribute('style')
            sidebarLogo.removeAttribute('style')
            header.removeAttribute('sp-sticky-header')
        }
    } catch (e) {
        logger.error('stickyHeader.ts', e)
    }
}