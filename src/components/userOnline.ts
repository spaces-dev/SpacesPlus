import { find, http, getPath, info, error } from '../utils'

import { IUserOnline } from '../interfaces/UserOnline'

import { SPACES, OVERRIDE } from '../strings'

export const userOnline = () => {
    let path = getPath()
    let nick = getPath(3)
    let target = `/anketa/index/${nick}/`

    if (path !== target) {
        OVERRIDE.ONLINE = null
    }

    if (path === target) {
        try {
            let onBlock = find(document.getElementsByClassName('info-item__title'), { innerHTML: 'Время онлайн:' })
            if (nick && onBlock && OVERRIDE.ONLINE !== nick) {
                OVERRIDE.ONLINE = nick

                http<IUserOnline>('GET', `${SPACES}/anketa/index/${nick}/`, true).then(e => {
                    const response = e.parsedBody?.user_widget?.online_time

                    if (response) {
                        // @ts-ignore
                        let str = parseFloat(response / 3600).toFixed(2).split('.')
                        // @ts-ignore
                        let online = str[0] > 0 ? `${str[0]} ч, ${parseInt(str[1] / (100 / 60), 10)} мин` : `${parseInt(str[1] / (100 / 60), 10)} мин`
                        // @ts-ignore
                        onBlock[0].nextElementSibling.innerHTML = online
                        info('Время онлайн: ' + online)
                    }
                })
            }
        } catch (e) {
            error('Ошибка (userOnline.ts): ' + e)
        }
    }
}