import type { HttpResponse } from '../types/http-response'
import { log } from './log'

interface HttpInit {
  method?: 'GET' | 'POST'
  proxy?: boolean
  body?: FormData | string
}

export async function http<T>(url: string, init: HttpInit = {}): Promise<HttpResponse<T>> {
  const headers = new Headers()
  const method = init.method ?? 'GET'

  if (init.proxy) headers.append('X-Proxy', 'spaces')
  if (!init.proxy) headers.append('Content-Type', 'application/x-www-form-urlencoded')

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
