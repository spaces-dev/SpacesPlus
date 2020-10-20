import { setCookie } from './setCookie'

export const delCookie = (name: string) => setCookie(name, null, { expires: -1 })