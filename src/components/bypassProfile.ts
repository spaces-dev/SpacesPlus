import {
    ce,
    qs,
    cors,
    error,
    remove,
    getPath,
    inBefore,
    getClassName
} from '../utils'

import { IUserProfile } from '../interfaces/Mysite'

import { SPACES, BASE_URL, OVERRIDE } from '../strings'

export const bypassProfile = () => {
    try {

        let tbBlock: any = getClassName('td.table__cell table__cell_last', true),
            blLink = qs(`a[href^="${SPACES}/blacklist/"`),
            inBL = qs('#SP_PLUS_INBL')

        if (getPath(1) === 'mysite' && blLink && tbBlock && !inBL) {

            let nickname = getPath(3)

            let bypassBL = ce('td', {
                class: 'table__cell',
                id: 'SP_PLUS_INBL',
                html: `<a href="#" class="stnd-link" title="Показать профиль"><span class="sp sp-eye-grey"></span> Показать</a>`,
                onclick: () => {

                    // запоминает ник
                    OVERRIDE.PROFILE = nickname

                    // Меняем кнопку на время загрузки
                    let bl = qs('#SP_PLUS_INBL')

                    bl.after(ce('td', {
                        class: 'table__cell',
                        id: 'SP_PLUS_INBL',
                        html: `<a href="#" class="stnd-link stnd-link_disabled" title="Загрузка"><span style="padding-right: 10px" class="ico ico_spinner"></span> Загрузка</a>`,
                        onclick: () => false
                    }))

                    remove(bl)

                    // выполняем CORS запрос и получаем HTML профиля
                    cors({
                        method: 'GET',
                        url: `https://cors-anywhere.herokuapp.com/${SPACES}/ajax/mysite/index/${nickname}/`
                    }, (e: IUserProfile) => {

                        // Перед вставкой заменяем уебанские домены на пользовательский
                        let response = e.content.replace(/spac1\.net|spaces-blogs\.com/gi, str => str = BASE_URL)

                        // Вставляем "новый" контент профиля
                        qs('#main_content').innerHTML = response

                        // Удаляем вкладку "Активности"
                        qs(`a[href^="${SPACES}/activity"`).parentElement?.remove()

                        // Удаляем кнопку "Написать"
                        qs(`a[href^="${SPACES}/mail/new_message/"`).remove()
                    })

                    return false
                }
            })

            inBefore(bypassBL, tbBlock[0])

            let clds = tbBlock[0].parentNode.childNodes
            for (let x in clds) { if (clds[x].nodeName === 'TD') clds[x].width = '25%' }

            if (OVERRIDE.PROFILE === nickname) qs('#SP_PLUS_INBL').click()
        }

    } catch (e) {
        error('Ошибка (bypassProfile.ts): ' + e)
    }
}