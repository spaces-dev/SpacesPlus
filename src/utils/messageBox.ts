import { ce } from './ce'
import { qs } from './qs'

export const messageBox = (html: any, close: boolean, timer: boolean) => {
    let Main = qs('#SP_PLUS_ALERT')
    let Container = ce('div', {
        class: 'sticker w400',
        // TODO: width: 20rem
        style: '-webkit-animation: create 0.3s; animation: create 0.3s'
    })

    if (!Main) {
        Main = ce('div', {
            class: 'content-item3 wbg oh',
            id: 'SP_PLUS_ALERT',
            html: (close ? '<span class="sp sp-remove-grey pointer right notif_close close_h" onclick="document.body.removeChild(this.parentNode.parentNode)" title="Закрыть"></span>' : '') + html
        })

        Container.appendChild(Main)
        document.body.appendChild(Container)
    }
    if (!timer) {
        setTimeout(() => {
            Main.parentNode?.parentNode?.removeChild(Container)
        }, 4000)
    }
}