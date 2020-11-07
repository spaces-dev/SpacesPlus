import {
    ce,
    http,
    delCookie,
    getCookie,
    setCookie,
    confirmBox,
    messageBox
} from '../utils'

import { newbeeQuest } from './newbeeQuest'

import { _SETTINGS } from '../settings'
import { SPACES, OVERRIDE } from '../strings'

// Встроенные возможности сайта
export const settingsFeatures = (root: any) => {
    let wrap = ce('div', { id: 'wrap_spaces_option' })

    // API Отладчик
    let apidebug = ce('a', {
        href: '#',
        class: 'stnd-link stnd-link_arr sp_font_sm',
        html: btnWrap(_SETTINGS.apidebug ?
            '<span class="sp sp-remove-grey mr-14"></span>Отключить отладчик' :
            '<span class="ico ico_settings mr-14"></span>Включить отладчик'),
        onclick: () => {
            _SETTINGS.apidebug = _SETTINGS.apidebug ? false : true
            setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))
            document.location.reload()
            return false
        }
    })

    const beta = getCookie('sandbox')

    // Вход в бета песочницу
    let sndbeta = ce('a', {
        href: '#',
        class: 'stnd-link stnd-link_arr sp_font_sm',
        id: 'sp_spacesAction_beta',
        html: btnWrap(beta ?
            '<span class="sp sp-exit-grey mr-14"></span>Выйти из песочницы' :
            '<span class="sp sp-enter-grey mr-14"></span>Beta-песочница<span> - открытое тестирование нововведений сайта'),
        onclick: () => {
            beta ? delCookie('sandbox') : setCookie('sandbox', 'beta')
            document.location.reload()
            return false
        }
    })

    const fat = getCookie('force_ajax_transport')

    // вкл/выкл полосы загрузки
    let fatWrap = ce('a', {
        href: '#',
        class: 'stnd-link stnd-link_arr sp_font_sm',
        id: 'sp_spacesFAT',
        html: btnWrap(fat ?
            '<span class="sp sp-remove-grey mr-14"></span>Убрать полосу загрузки' :
            '<span class="sp sp-ok-grey mr-14"></span>Добавить полосу загрузки страницы'),
        onclick: () => {
            fat ? delCookie('force_ajax_transport') : setCookie('force_ajax_transport', '1')
            document.location.reload()
            return false
        }
    })

    const glb = getCookie('gp_left_btn')

    // закреп/откреп плеера из левой панели
    let glbWrap = ce('a', {
        href: '#',
        class: 'stnd-link stnd-link_arr sp_last_btn',
        id: 'sp_spacesGLB',
        html: btnWrap(glb ?
            '<span class="sp sp-remove-grey mr-14"></span>Убрать плеер из левой панели' :
            '<span class="sp sp-ok-grey mr-14"></span>Закрепить плеер на левой панели'),
        onclick: () => {
            glb ? delCookie('gp_left_btn') : setCookie('gp_left_btn', '1')
            document.location.reload()
            return false
        }
    })

    // кнопка скрытия квеста новичка
    let nbqLink = ce('a', {
        href: '#',
        style: 'display: none',
        id: 'sp_newbequest_togl',
        class: 'stnd-link stnd-link_arr sp_line sp_last_btn sp_newbq_l',
        html: btnWrap('<span class="sp sp-remove-grey mr-14"></span>Скрыть квест новичка'),
        onclick: () => {
            confirmBox('Вы действительно хотите скрыть квест новичка?', true, () => {
                http('GET', `${SPACES}/newbequest/?CK=${OVERRIDE.CK}`, true).then(e => {
                    if (e.status === 200) messageBox('Поздравляем!', 'Квест новичка был успешно скрыт', true, 5)
                })
            })
            return false
        }
    })

    wrap.appendChild(apidebug)
    wrap.appendChild(sndbeta)
    wrap.appendChild(fatWrap)
    wrap.appendChild(glbWrap)
    wrap.appendChild(nbqLink)
    root.appendChild(wrap)

    // Проверяем скрыт ли квест новичка
    newbeeQuest()
}

/**
 * Обертка кнопок
 * @param str 
 */
const btnWrap = (str: string) => `<span class="b">${str}<span class="ico ico_arr ico_m"></span></span>`