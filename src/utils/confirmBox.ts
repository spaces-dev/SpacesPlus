import { ce, qs, remove } from './index'

export const confirmBox = (text: string, warn: boolean, callback: Function) => {
    let succesBtn = ce('button', { html: 'Да', href: '#', class: 'btn btn_red btn_input' })
    let cancelBtn = ce('a', { html: 'Отмена', href: '#', class: 'btn btn_white btn_input right sticker-close_btn' })
    let warningText = ce('small', { class: 'pad_t_a grey', html: 'Это действие нельзя будет отменить.' })
    let container = ce('div', { class: 'content-item3 wbg oh', html: text + '<div class="pad_t_a"></div>' })
    let br = ce('div', { class: 'pad_t_a' })

    succesBtn.onclick = () => {
        let check = qs('#SP_PLUS_CONFIRM')

        if (check) {
            callback()
            remove(check)
            return false
        }
        return true
    }

    cancelBtn.onclick = () => {
        let check = qs('#SP_PLUS_CONFIRM')

        if (check) {
            remove(check)
            return false
        }
        return true
    }

    let Main = qs('#SP_PLUS_CONFIRM')
    if (!Main) {
        Main = ce('div', {
            class: 'sticker',
            style: '-webkit-animation: create 0.3s; animation: create 0.3s',
            id: 'SP_PLUS_CONFIRM'
        })

        if (!warn) {
            container.appendChild(warningText)
        }

        container.appendChild(br)
        container.appendChild(succesBtn)
        container.appendChild(cancelBtn)

        Main.appendChild(container)
        document.body.appendChild(Main)
    }
}