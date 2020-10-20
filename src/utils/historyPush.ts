import { error } from './console'

export const historyPush = (state: object, url: string, title: string) => {
    try {
        document.title = title
        history.pushState(state, title, url)
    } catch (e) {
        error('Ошибка (historyPush.ts): ' + e)
    }
}