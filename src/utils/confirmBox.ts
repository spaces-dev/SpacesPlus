import { ce, qs } from './index'

/**
 * Всплывающее окно с кнопками Да/Отмена
 * @param text Текст
 * @param warn Предупреждение (Это действие нельзя будет отменить.)
 * @param callback return in function
 */
export const confirmBox = (text: string, warn: boolean, callback: Function) => {
    let Alert = qs('#SP_PLUS_ALERT')
    let Confirm = qs('#SP_PLUS_CONFIRM')
    let successBtn = ce('button', { html: 'Да', href: '#', class: 'btn btn_red btn_input' })
    let cancelBtn = ce('a', { html: 'Отмена', href: '#', class: 'btn btn_white btn_input right sticker-close_btn' })
    let warningText = ce('small', { class: 'pad_t_a grey', html: 'Это действие нельзя будет отменить.' })
    let container = ce('div', { class: 'content-item3 wbg oh', html: text + '<div class="pad_t_a"></div>' })
    let br = ce('div', { class: 'pad_t_a' })

    // Скрываем раннее созданные уводомления
    Alert?.remove()
    Confirm?.remove()

    // Подтверждение сообщения
    successBtn.onclick = () => {
        rm()
        callback()
        return false
    }

    // Отмена сообщения - закрытие окна
    cancelBtn.onclick = () => {
        rm()
        return false
    }

    let Main = ce('div', { class: 'sticker sp-sticker-anim', id: 'SP_PLUS_CONFIRM' })

    if (warn) container.appendChild(warningText)

    container.appendChild(br)
    container.appendChild(successBtn)
    container.appendChild(cancelBtn)

    Main.appendChild(container)
    document.body.appendChild(Main)
}

const rm = () => qs('#SP_PLUS_CONFIRM').remove()