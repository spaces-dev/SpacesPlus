import { log } from './log'

export interface HttpResponse<T> extends Response {
  parsedBody?: T
}

interface HttpInit {
  method?: 'GET' | 'POST'
  proxy?: boolean
  body?: FormData | string
}

const formContentType = 'application/x-www-form-urlencoded'
const proxyHeader = 'X-Proxy'
const proxyValue = 'spaces'

export const httpStatus = {
  ok: 200,
  notFound: 404,
} as const

export async function http<T>(url: string, init: HttpInit = {}): Promise<HttpResponse<T>> {
  const headers = new Headers()
  const method = init.method ?? 'GET'

  if (init.proxy) headers.append(proxyHeader, proxyValue)
  if (!init.proxy) headers.append('Content-Type', formContentType)

  const response = await fetch(url, {
    method,
    headers,
    body: init.body,
  }) as HttpResponse<T>

  try {
    response.parsedBody = await response.json()
  } catch (error) {
    log.error('http', error)
  }

  return response
}
