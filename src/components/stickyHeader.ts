import { qs, css, error } from '../utils'

export const stickyHeader = (b: boolean) => {
    let wrapAll = qs('#wrap_all')
    let leftNav = qs('#left_nav')
    let header = qs('#header_elements')
    let mainShadow = qs('#main_shadow')
    let infoBlock = qs('#top_info_block')
    let sidebarLogo = qs('div.sidebar-logo')

    try {
        if (b && !header.hasAttribute('sp-sticky-header')) {

            // опускаем основной контейнер
            css(mainShadow, 'padding-top: 45px')

            // фиксированное положение блока (при смене версии сайта)
            css(infoBlock, `
                position: fixed;
                width: ${mainShadow.clientWidth}px;
                z-index: 9999
            `)

            // стили для логотипа
            css(sidebarLogo, `
                position: fixed;
                width: ${leftNav.clientWidth + 1}px;
                left: ${wrapAll.offsetLeft}px;
                top: 0px;
                box-shadow: 0px 2px 2px rgba(93,109,157,0.2);
                z-index: 9999
            `)

            // стили для шапки
            css(header, `
                position: fixed;
                width: ${mainShadow.clientWidth - leftNav.clientWidth + 1}px;
                left: ${wrapAll.offsetLeft + leftNav.clientWidth}px;
                top: 0px;
                box-shadow: 0px 2px 2px rgba(93,109,157,0.2);
                z-index: 9999
            `)

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
        error('Ошибка (stickyHeader.ts): ' + e)
    }
}