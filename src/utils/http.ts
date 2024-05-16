import { HttpResponse } from '../interfaces/HttpResponse'
import { logger } from './logger'

/**
 * Основополагающая функция для формирования HTTP запросов
 * Для использования получаемого JSON используйте Generic interface
 * ? Пример использования смотрите в components/checkUpdates.ts
 * @param method GET/POST
 * @param url Ссылка запроса
 * @param proxy Тип запроса
 * @param body Строка запроса
 */
export async function http<T>(
  method: 'GET' | 'POST',
  url: string,
  proxy: boolean,
  body?: FormData | string
): Promise<HttpResponse<T>> {
  const header = new Headers()

  if (proxy) {
    // Получаем JSON сракеса
    header.append('X-Proxy', 'spaces')
  } else {
    // Отправка body
    header.append('Content-Type', 'application/x-www-form-urlencoded')
  }

  // Запрос поддерживает Generic interface
  const response: HttpResponse<T> = await fetch(url, {
    method: method,
    headers: header,
    body: body
  })

  try {
    response.parsedBody = await response.json()
  } catch (e) {
    logger.error('http.ts', e)
  }

  return response
}
