import { setCookie } from './setCookie'

/**
 * Удаляем куку
 * @param name Название куки
 */
export const delCookie = (name: string) => setCookie(name, null, { expires: -1 })