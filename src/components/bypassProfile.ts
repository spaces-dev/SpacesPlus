import {
    ce,
    qs,
    qsa,
    http,
    error,
    getPath,
    inBefore,
    messageBox
} from '../utils'

import { IProxy } from '../interfaces/Proxy'
import { IUserProfile } from '../interfaces/Mysite'

import { SPACES, BASE_URL, OVERRIDE } from '../strings'

export const bypassProfile = () => {
    try {

        let tdBlock = qsa('td.table__cell_last'),
            blLink = qs(`a[href^="${SPACES}/blacklist/"`),
            inBL = qs('#SP_PLUS_INBL')

        if (getPath(1) === 'mysite' && blLink && tdBlock && !inBL) {

            let nickname = getPath(3)

            let bypassBL = ce('td', {
                class: 'table__cell',
                id: 'SP_PLUS_INBL',
                html: `<a href="#" class="stnd-link" title="Показать профиль"><span class="sp sp-eye-grey"></span> Показать</a>`,
                onclick: () => {
                    // Меняем кнопку на время загрузки
                    let bl = qs('#SP_PLUS_INBL')

                    bl.after(ce('td', {
                        class: 'table__cell',
                        id: 'SP_PLUS_INBL',
                        html: `<a href="#" class="stnd-link stnd-link_disabled" title="Загрузка"><span class="ico bp ico_spinner"></span> Загрузка</a>`,
                        onclick: () => false
                    }))

                    bl.remove()

                    getProfile(nickname)

                    return false
                }
            })

            inBefore(bypassBL, tdBlock[1])

            let clds = (tdBlock[1]?.parentElement?.childNodes as NodeList)
            for (let x in clds) { if (clds[x].nodeName === 'TD') (clds[x] as HTMLTableCellElement).width = '25%' }

            if (OVERRIDE.NICKNAME === nickname) qs('#SP_PLUS_INBL').click()
        }

    } catch (e) {
        error('Ошибка (bypassProfile.ts): ' + e)
    }
}


// выполняем CORS запрос и получаем HTML профиля
// https://gist.github.com/crashmax-off/5cf3ce71d784924c8c9c6843bf5ff7df
const getProfile = async (nickname: string) => {

    if (OVERRIDE.NICKNAME !== nickname || OVERRIDE.CONTENT === undefined) {

        // запоминает ник
        OVERRIDE.NICKNAME = nickname

        await http<IProxy<IUserProfile>>('GET', `https://crashmax.ru/api/proxy?url=${SPACES}/ajax/mysite/index/${nickname}/`, false).then(e => {
            let status = e.parsedBody?.status.http_code

            if (status === 200) {
                // Заменяем уебанские домены на пользовательский
                OVERRIDE.CONTENT = e.parsedBody!.contents.content.replace(/spac1\.net|spaces-blogs\.com/gi, str => str = BASE_URL)
            } else {
                messageBox('Просмотр профилей', 'Ошибка загрузки профиля! Обратитесь к разработчику', true)
            }
        })
    }

    setContent(OVERRIDE.CONTENT)
}

const setContent = (str: string) => {

    // Вставляем "новый" профиль
    qs('#main_content').innerHTML = str

    // Костыль по восстановлению аватарки
    let avatar = qs('img[data-s*="101.100.0"')
    // @ts-ignore
    avatar.src = avatar.dataset.s

    // Удаляем ненужную панель c кнопками
    qs('.user__tools').remove()

    // Удаляем кнопку "Сделать подарок"
    qs('span[class$="ico_gifts"').parentElement?.parentElement?.remove()

    // Удаляем вкладку "Активности"
    qs(`a[href^="${SPACES}/activity"`).parentElement?.remove()

    // Удаляем кнопку "Написать"
    qs('.btn-single__wrap').remove()
}
