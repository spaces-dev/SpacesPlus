import { error } from './console'

/**
 * ? Функция необходима для перехода по ссылке в собственно созданные разделы на сайте или в настройках скрипта
 * ! Не работает без getQuery.ts
 * Пример работы:
 * * historyPush({
 * *    'sp_plus_settings': getQuery('sp_plus_settings'),
 * * }, `https://spaces.im/settings/?sp_plus_settings=1`, 'Настройки Spaces+')
 * @param state Объект
 * @param url Путь/ссылка на сайте, которую хотите открыть
 * @param title Заголовок на вкладке в браузере
 */
export const historyPush = (state: object, url: string, title: string) => {
    try {
        document.title = title
        history.pushState(state, title, url)
    } catch (e) {
        error('Ошибка (historyPush.ts): ' + e)
    }
}