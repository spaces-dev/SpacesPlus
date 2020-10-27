import { error } from './console'
import { HttpResponse } from '../interfaces/HttpResponse'

export async function http<T>(method: 'GET' | 'POST', url: string, proxy: boolean, body?: FormData | string): Promise<HttpResponse<T>> {
    const header: {} = proxy ? { 'X-Proxy': 'spaces' } : { 'Content-Type': 'application/x-www-form-urlencoded' }
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