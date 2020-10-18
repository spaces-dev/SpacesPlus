const date = new Date()
const prefix = "(" + (date.getHours() < 10 ? '0' : '') + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() + ':' + (date.getSeconds() < 10 ? '0' : '') + date.getSeconds() + ") "

export const log = (str: string) => { console.log(prefix + str) }
export const info = (str: string) => { console.info(prefix + str) }
export const error = (str: string) => { console.error(prefix + str) }
export const debug = (str: string) => { console.debug(prefix + str) }