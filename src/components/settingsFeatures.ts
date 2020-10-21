import { ce, qs, remove, http, getCK, setCookie, getCookie, delCookie, setLocation, confirmBox, messageBox } from '../utils'

import { apiDebugger } from './apiDebugger'

import { _SETTINGS } from '../types/settings'
import { HREF, SPACES } from '../types/strings'

export const settingsFeatures = (root: any) => {
    let wrap = ce('div', { id: 'wrap_spaces_option' })
    let apidebug = ce('a', {
        href: '#',
        class: 'stnd-link stnd-link_arr sp_font_sm',
        html: _SETTINGS.apidebug ?
            '<span class="b"><span class="sp sp-remove-grey"></span> Отключить отладчик<span class="ico ico_arr ico_m"></span></span>' :
            '<span class="b"><span class="ico ico_settings"></span> Включить отладчик<span class="ico ico_arr ico_m"></span></span>',
        onclick: () => {
            if (!_SETTINGS.apidebug) {
                _SETTINGS.apidebug = true
                setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))
                apiDebugger()
                setLocation(HREF)
            } else {
                _SETTINGS.apidebug = false
                setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))
                remove(qs('#spaces_api_debugger'))
                setLocation(document.location.href)
            }
            return false
        }
    })

    const beta = getCookie('sandbox')
    let sndbeta = ce('a', {
        href: '#',
        class: 'stnd-link stnd-link_arr sp_font_sm',
        id: 'sp_spacesAction_beta',
        html: beta ?
            '<span class="b"><span class="sp sp-exit-grey"></span> Выйти из песочницы<span class="ico ico_arr ico_m"></span></span>' :
            '<span class="b"><span class="sp sp-enter-grey"></span> Beta-песочница<span> - открытое тестирование нововведений сайта<span class="ico ico_arr ico_m"></span></span></span>',
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
            '<span class="b"><span class="sp sp-remove-grey"></span> Убрать полосу загрузки<span class="ico ico_arr ico_m"></span></span>' :
            '<span class="b"><span class="ico ico_ok_grey"></span> Добавить полосу загрузки страницы<span class="ico ico_arr ico_m"></span><span>',
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
            '<span class="b"><span class="sp sp-remove-grey"></span> Убрать плеер из левой панели<span class="ico ico_arr ico_m"></span></span>' :
            '<span class="b"><span class="ico ico_ok_grey"></span> Переместить кнопку открытия плеера в левую панель<span class="ico ico_arr ico_m"></span></span>',
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
        html: '<span class="b"><span class="sp sp-remove-grey"></span> Скрыть квест новичка<span class="ico ico_arr ico_m"></span></span>',
        onclick: function () {
            confirmBox('Вы действительно хотите скрыть квест новичка?', false, () => {
                http('GET', `${SPACES}/newbequest/?CK=${getCK()}`).then(e => {
                    if (e.ok) {
                        messageBox('Успех!<div class="pad_t_a"></div><small>Квест новичка скрыт</small>', true, true)
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