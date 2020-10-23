import { ce } from './ce'
import { qs } from './qs'

/**
 * @param title Заголовок уведомления
 * @param content Текст уведомления
 * @param close Крестик закрытия уведомления
 * @param timer Время до автоматического закрытия уведомления в секундах
 */
export const messageBox = (title: string, content: string, close: boolean, timer?: number) => {
    let Main = qs('#SP_PLUS_ALERT')
    let Container = ce('div', { class: 'sticker w400 sp-sticker-anim' })

    if (!Main) {
        Main = ce('div', {
            class: 'content-item3 wbg oh',
            id: 'SP_PLUS_ALERT',
            html: (close ?
                '<span class="sp sp-remove-grey pointer right notif_close close_h" onclick="document.body.removeChild(this.parentNode.parentNode)" title="Закрыть"></span>' :
                '') + `${title}<div class="pad_t_a"></div><small class="grey">${content}</small>`
        })

        Container.appendChild(Main)
        document.body.appendChild(Container)
    }

    if (timer !== undefined) {
        setTimeout(() => {
            Main.parentNode?.parentNode?.removeChild(Container)
        }, timer * 1000)
    }
}