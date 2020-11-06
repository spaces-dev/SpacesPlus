import { ce, qs, remove } from './index'

/**
 * @param title Заголовок уведомления
 * @param content Текст уведомления
 * @param close Крестик закрытия уведомления
 * @param timer Время до автоматического закрытия уведомления в секундах
 */
export const messageBox = (title: string, content: string, close: boolean, timer?: number) => {
    let Alert = qs('#SP_PLUS_ALERT')
    let Confirm = qs('#SP_PLUS_CONFIRM')
    let Container = ce('div', {
        class: 'sticker w400 sp-sticker-anim',
        id: 'SP_PLUS_ALERT',
    })

    // Скрываем раннее созданные уводомления
    if (Alert) remove(Alert)
    if (Confirm) remove(Confirm)

    let Main = ce('div', {
        class: 'content-item3 wbg oh',
        html: (close ?
            '<span class="sp sp-remove-grey pointer right notif_close close_h" onclick="document.body.removeChild(this.parentNode.parentNode)" title="Закрыть"></span>' :
            '') + `${title}<div class="pad_t_a"></div><span style="font-size: 13px" class="grey">${content}</span>`
    })

    Container.appendChild(Main)
    document.body.appendChild(Container)

    // Автоматическое закрытие уведомления
    if (timer !== undefined) {
        setTimeout(() => {
            Main.parentNode?.parentNode?.removeChild(Container)
        }, timer * 1000)
    }
}