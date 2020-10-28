import { error } from './console'
import { HttpResponse } from '../interfaces/HttpResponse'

/**
 * Основополагающая функция для формирования HTTP запросов
 * Для использования получаемого JSON используйте Generic interface
 * ? Пример использования смотрите в components/checkUpdates.ts
 * @param method GET/POST
 * @param url Ссылка запроса
 * @param proxy Тип запроса: True - получаем JSON со Spaces, False - отправляем body
 * @param body Строка запроса
 */
export async function http<T>(method: 'GET' | 'POST', url: string, proxy: boolean, body?: FormData | string): Promise<HttpResponse<T>> {
    // X-Proxy используется на Spaces.ru для получения JSON страницы, а x-www-form-urlencoded для отправки body
    const header: {} = proxy ? { 'X-Proxy': 'spaces' } : { 'Content-Type': 'application/x-www-form-urlencoded' }
    // Запрос поддерживает Generic interface
    const response: HttpResponse<T> = await fetch(url, {
        method: method,
        headers: header,
        body: body
    })

    try {
        response.parsedBody = await response.json()
    } catch (e) {
        error('Ошибка http.ts: ' + e)
    }

    return response
}