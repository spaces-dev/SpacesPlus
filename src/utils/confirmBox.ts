import { ce, qs, remove } from './index'

/**
 * Всплывающее окно с кнопками Да/Отмена
 * @param text Текст
 * @param warn Предупреждение (Это действие нельзя будет отменить.)
 * @param callback return in function
 */
export const confirmBox = (text: string, warn: boolean, callback: Function) => {
    let Alert = qs('#SP_PLUS_ALERT')
    let Confirm = qs('#SP_PLUS_CONFIRM')
    let succesBtn = ce('button', { html: 'Да', href: '#', class: 'btn btn_red btn_input' })
    let cancelBtn = ce('a', { html: 'Отмена', href: '#', class: 'btn btn_white btn_input right sticker-close_btn' })
    let warningText = ce('small', { class: 'pad_t_a grey', html: 'Это действие нельзя будет отменить.' })
    let container = ce('div', { class: 'content-item3 wbg oh', html: text + '<div class="pad_t_a"></div>' })
    let br = ce('div', { class: 'pad_t_a' })

    // Скрываем раннее созданные уводомления
    if (Alert) remove(Alert)
    if (Confirm) remove(Confirm)

    // Подтверждение сообщения
    succesBtn.onclick = () => {
        if (qs('#SP_PLUS_CONFIRM')) {
            callback()
            remove(qs('#SP_PLUS_CONFIRM'))
            return false
        }
        return true
    }

    // Отмена сообщения - закрытие окна
    cancelBtn.onclick = () => {
        if (qs('#SP_PLUS_CONFIRM')) {
            remove(qs('#SP_PLUS_CONFIRM'))
            return false
        }
        return true
    }

    let Main = ce('div', { class: 'sticker sp-sticker-anim', id: 'SP_PLUS_CONFIRM' })

    if (warn) container.appendChild(warningText)

    container.appendChild(br)
    container.appendChild(succesBtn)
    container.appendChild(cancelBtn)

    Main.appendChild(container)
    document.body.appendChild(Main)
}