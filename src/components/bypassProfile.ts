import {
    ce,
    qs,
    qsa,
    http,
    trim,
    logger,
    getPath,
    modalMessage
} from '../utils'

import { IProxy } from '../interfaces/Proxy'
import { IUserProfile } from '../interfaces/Mysite'

import { SPACES, BASE_URL, DATA } from '../strings'

export const bypassProfile = () => {
    try {

        let tdBlock = qsa('td.table__cell_last'),
            blackListLink = qs(`a[href^="${SPACES}/blacklist/"`),
            rulesLink = qs(`a[href^="${SPACES}/info/rules/"`),
            noAccessIco = qs('div.ico_noaccess_xlarge'),
            inButton = qs('#SP_PLUS_INBL')

        if (getPath(1) === 'mysite' && tdBlock) {
            let nickname = getPath(3)

            // Показать профиль, если он недоступен по причине пидорас (в чёрном списке)
            if (blackListLink && !inButton) {

                let button = ce('td', {
                    class: 'table__cell',
                    id: 'SP_PLUS_INBL',
                    html: `
                        <a href="#" class="stnd-link" title="Показать профиль">
                        <span class="sp sp-eye-grey"></span> Показать</a>
                    `,
                    onclick: () => {

                        button.after(ce('td', {
                            class: 'table__cell',
                            id: 'SP_PLUS_INBL',
                            attr: { width: '25%' },
                            html: `
                                <a href="#" class="stnd-link stnd-link_disabled" title="Загрузка">
                                <span class="ico bp ico_spinner"></span> Загрузка</a>
                            `,
                            onclick: () => false
                        }))

                        button.remove()

                        // получаем данные профиля через прокси запрос
                        getProfile(nickname)
                        return false
                    }
                })

                tdBlock[1].parentElement?.insertBefore(button, tdBlock[1])

                let clds = (<NodeList>tdBlock[1]?.parentElement?.childNodes)
                // 'width' is deprecated ???
                for (let x in clds) { if (clds[x].nodeName === 'TD') (<HTMLTableCellElement>clds[x]).width = '25%' }

                if (DATA.NICKNAME === nickname) qs('#SP_PLUS_INBL').click()
            }

            // Показать доступные ссылки в профиле, если он в бане
            if ((rulesLink || noAccessIco) && !blackListLink && !qs('#SP_LIST_LINK')) {

                // фикс двойного бордера
                qs('div.user__tools').style.borderTop = 'none'

                setUrls(
                    // костыль для получения ника пользователя
                    // иногда в ссылке бывает не ник, а его id
                    trim(qs('#location_bar_1_0').textContent),
                    blackListLink,
                    rulesLink
                )
            }
        } else {
            // удаляем список ссылок
            qs('#SP_LIST_LINK')?.remove()
        }

    } catch (e) {
        logger.error('bypassProfile.ts', e)
    }
}

// выполняем CORS запрос и получаем HTML профиля
// https://gist.github.com/crashmax-off/5cf3ce71d784924c8c9c6843bf5ff7df
const getProfile = async (nickname: string) => {

    if (DATA.NICKNAME !== nickname || DATA.CONTENT === undefined) {

        // запоминает ник
        DATA.NICKNAME = nickname

        await http<IProxy<IUserProfile>>('GET', `https://crashmax.ru/api/proxy?url=${SPACES}/ajax/mysite/index/${nickname}/`, false).then(e => {
            let status = e.parsedBody?.status.http_code

            if (status === 200) {
                // Заменяем уебанские домены на пользовательский
                DATA.CONTENT = e.parsedBody!.contents.content.replace(/spac1\.net|spaces-blogs\.com/gi, str => str = BASE_URL)
            } else {
                modalMessage('Просмотр профилей', 'Ошибка загрузки профиля! Обратитесь к разработчику', true)
            }

            logger.info('Просмотр профилей', e)
        })
    }

    if (DATA.CONTENT !== null) {
        // Вставляем "новый" профиль
        qs('#main_content').innerHTML = DATA.CONTENT

        // Костыль по восстановлению аватарки
        let avatar = (<HTMLImageElement>qs('img[data-s*="101.100.0"'))
        avatar.src = (avatar.dataset.s as string)

        // Удаляем ненужную панель c кнопками
        qs('div.user__tools').remove()

        // Удаляем кнопку "Сделать подарок"
        qs('span[class$="ico_gifts"').parentElement?.parentElement?.remove()

        // Удаляем вкладку "Активности"
        qs(`a[href^="${SPACES}/activity"`).parentElement?.remove()

        // Удаляем кнопку "Написать"
        qs('div.btn-single__wrap').remove()
    }
}

// Ссылки у заблокированного профиля
const setUrls = (e: string, lnk1: HTMLElement, lnk2: HTMLElement) => {

    let urls = [
        {
            'ico': 'forum',
            'text': 'Темы и комментарии',
            'path': `/forums/search_user/?query=${e}`
        },
        {
            'ico': 'comm',
            'text': 'Сообщества',
            'path': `/comm/list/user/${e}`
        },
        {
            'ico': 'friends',
            'text': 'Друзья',
            'path': `/friends/?name=${e}`
        },
        {
            'ico': 'readers',
            'text': 'Читатели',
            'path': `/lenta/readers/?user=${e}`
        },
        {
            'ico': 'gifts',
            'text': 'Подарки',
            'path': `/gifts/user_list/${e}`
        }
    ]

    let urls2 = [
        {
            'ico': 'blog',
            'text': 'Личный блог',
            'path': `/diary/view/user/${e}/list/-/`
        },
        {
            'ico': 'photo',
            'text': 'Фотографии',
            'path': `/pictures/user/${e}/list/-/`
        },
        {
            'ico': 'music',
            'text': 'Музыка',
            'path': `/music/user/${e}/list/-/`
        },
        {
            'ico': 'video',
            'text': 'Видео',
            'path': `/video/user/${e}/list/-/`
        },
        {
            'ico': 'file',
            'text': 'Файлы',
            'path': `/files/user/${e}/list/-/`
        }
    ]

    // конкатим второй массив, если аккаунт покинут
    if (lnk1 === null && lnk2 === null)
        urls = urls2.concat(urls)

    let widget = ce('div', {
        id: 'SP_LIST_LINK',
        class: 'widgets-group links-group'
    })

    qs('div.js-pending-item').append(widget)

    // создаем ссылки
    for (let url of urls) {

        const { ico, text, path } = url

        let link = ce('a', {
            href: SPACES + path,
            class: 'list-link stnd-link_arr list-link-darkblue c-darkblue',
            html: `
                <span class="js-ico ico ico_${ico}"></span>
                <span class="t js-text">${text}</span>
                <span class="ico ico_arr"></span>
            `
        })

        widget.append(link)
    }
}