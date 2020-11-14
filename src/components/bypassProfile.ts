import {
    ce,
    qs,
    qsa,
    http,
    trim,
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
            rsLink = qs(`a[href^="${SPACES}/info/rules/"`),
            inBL = qs('#SP_PLUS_INBL'),
            inBL2 = qs('#SP_PLUS_INBL2')

        if (getPath(1) === 'mysite' && tdBlock) {
            let nickname = getPath(3)

            // Показать профиль, если он недоступен по причине пидорас (в чёрном списке)
            if (blLink && !inBL) {

                let button = ce('td', {
                    class: 'table__cell',
                    id: 'SP_PLUS_INBL',
                    html: `<a href="#" class="stnd-link" title="Показать профиль"><span class="sp sp-eye-grey"></span> Показать</a>`,
                    onclick: () => {

                        button.after(ce('td', {
                            class: 'table__cell',
                            id: 'SP_PLUS_INBL',
                            html: `<a href="#" class="stnd-link stnd-link_disabled" title="Загрузка"><span class="ico bp ico_spinner"></span> Загрузка</a>`,
                            onclick: () => false
                        }))

                        button.remove()

                        // получаем данные профиля через прокси запрос
                        getProfile(nickname)
                        return false
                    }
                })

                inBefore(button, tdBlock[1])

                let clds = (tdBlock[1]?.parentElement?.childNodes as NodeList)
                // 'width' is deprecated ???
                for (let x in clds) { if (clds[x].nodeName === 'TD') (clds[x] as HTMLTableCellElement).width = '25%' }

                if (OVERRIDE.NICKNAME === nickname) qs('#SP_PLUS_INBL').click()
            }

            // Показать доступные ссылки в профиле, если он в бане
            if (rsLink && !inBL2 && !qs('#SP_LIST_LINK')) {

                // костыль для получения ника пользователя
                // иногда в ссылке бывает не ник, а его id
                let nickname = qs('#location_bar_1_0')

                if (nickname.textContent !== null) {
                    setUrls(trim(nickname.textContent))
                }
            }
        } else {
            // удаляем список ссылок
            qs('#SP_LIST_LINK')?.remove()
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

const setContent = (content: string) => {

    // Вставляем "новый" профиль
    qs('#main_content').innerHTML = content

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

// Ссылки у заблокированного профиля
const setUrls = (nickname: string) => {

    const urls = [
        {
            'ico': 'forum',
            'text': 'Темы и комментарии',
            'path': '/forums/search_user/?query='
        },
        {
            'ico': 'comm',
            'text': 'Сообщества',
            'path': '/comm/list/user/'
        },
        {
            'ico': 'friends',
            'text': 'Друзья',
            'path': '/friends/?name='
        },
        {
            'ico': 'readers',
            'text': 'Читатели',
            'path': '/lenta/readers/?user='
        },
        {
            'ico': 'gifts',
            'text': 'Подарки',
            'path': '/gifts/user_list/'
        }
    ]

    qs('div.js-pending-item').append(ce('div', {
        id: 'SP_LIST_LINK',
        class: 'widgets-group links-group'
    }))

    for (let url of urls) {

        let link = ce('a', {
            href: SPACES + url.path + nickname,
            class: 'list-link stnd-link_arr list-link-darkblue c-darkblue',
            html: `
                <span class="js-ico  ico ico_${url.ico}"></span>
                <span class="t js-text">${url.text}</span>
                <span class="ico ico_arr"></span>
            `
        })

        qs('#SP_LIST_LINK').append(link)
    }
}