import { HttpResponse } from '../interfaces/HttpResponse'

export async function http<T>(method: 'GET' | 'POST', url: string, proxy?: boolean, body?: FormData): Promise<HttpResponse<T>> {
    const header: {} = proxy ? { 'X-Proxy': 'spaces' } : { 'Content-Type': 'application/x-www-form-urlencoded' }
    const response: HttpResponse<T> = await fetch(url, {
        method: method,
        headers: header,
        body: body
    })

    try {
        response.parsedBody = await response.json()
    } catch (e) {

    }

    if (!response.ok) {
        throw new Error(response.statusText)
    }

    return response
}