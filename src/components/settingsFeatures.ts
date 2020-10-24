import {
    ce,
    http,
    delCookie,
    getCookie,
    setCookie,
    confirmBox,
    messageBox
} from '../utils'

import { _SETTINGS } from '../settings'
import { SPACES, OVERRIDE } from '../strings'

export const settingsFeatures = (root: any) => {
    let wrap = ce('div', { id: 'wrap_spaces_option' })
    let apidebug = ce('a', {
        href: '#',
        class: 'stnd-link stnd-link_arr sp_font_sm',
        html: _SETTINGS.apidebug ?
            '<span class="b"><span class="sp sp-remove-grey mr-14"></span>Отключить отладчик<span class="ico ico_arr ico_m"></span></span>' :
            '<span class="b"><span class="ico ico_settings mr-14"></span>Включить отладчик<span class="ico ico_arr ico_m"></span></span>',
        onclick: () => {
            _SETTINGS.apidebug = !_SETTINGS.apidebug ? true : false
            setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))
            document.location.reload()
            return false
        }
    })

    const beta = getCookie('sandbox')
    let sndbeta = ce('a', {
        href: '#',
        class: 'stnd-link stnd-link_arr sp_font_sm',
        id: 'sp_spacesAction_beta',
        html: beta ?
            '<span class="b"><span class="sp sp-exit-grey mr-14"></span>Выйти из песочницы<span class="ico ico_arr ico_m"></span></span>' :
            '<span class="b"><span class="sp sp-enter-grey mr-14"></span>Beta-песочница<span> - открытое тестирование нововведений сайта<span class="ico ico_arr ico_m"></span></span></span>',
        onclick: () => {
            beta ? delCookie('sandbox') : setCookie('sandbox', 'beta')
            document.location.reload()
            return false
        }
    })

    const fat = getCookie('force_ajax_transport')
    let fatWrap = ce('a', {
        href: '#',
        class: 'stnd-link stnd-link_arr sp_font_sm',
        id: 'sp_spacesFAT',
        html: fat ?
            '<span class="b"><span class="sp sp-remove-grey mr-14"></span>Убрать полосу загрузки<span class="ico ico_arr ico_m"></span></span>' :
            '<span class="b"><span class="ico ico_ok_grey mr-14"></span>Добавить полосу загрузки страницы<span class="ico ico_arr ico_m"></span><span>',
        onclick: () => {
            fat ? delCookie('force_ajax_transport') : setCookie('force_ajax_transport', '1')
            document.location.reload()
            return false
        }
    })

    const glb = getCookie('gp_left_btn')
    let glbWrap = ce('a', {
        href: '#',
        class: 'stnd-link stnd-link_arr sp_last_btn',
        id: 'sp_spacesGLB',
        html: glb ?
            '<span class="b"><span class="sp sp-remove-grey mr-14"></span>Убрать плеер из левой панели<span class="ico ico_arr ico_m"></span></span>' :
            '<span class="b"><span class="ico ico_ok_grey mr-14"></span>Закрепить плеер на левой панели<span class="ico ico_arr ico_m"></span></span>',
        onclick: () => {
            glb ? delCookie('gp_left_btn') : setCookie('gp_left_btn', '1')
            document.location.reload()
            return false
        }
    })

    // TODO: Добавить проверку квеста новичка!
    let nbqLink = ce('a', {
        href: '#',
        style: 'display: none',
        id: 'sp_newbequest_togl',
        class: 'stnd-link stnd-link_arr sp_line sp_last_btn sp_newbq_l',
        html: '<span class="b"><span class="sp sp-remove-grey mr-14"></span>Скрыть квест новичка<span class="ico ico_arr ico_m"></span></span>',
        onclick: function () {
            confirmBox('Вы действительно хотите скрыть квест новичка?', false, () => {
                http('GET', `${SPACES}/newbequest/?CK=${OVERRIDE.CK}`, true).then(e => {
                    if (e.status === 200) {
                        messageBox('Поздравляем!', 'Квест новичка успешно был скрыт', true, 3)
                    }
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
}