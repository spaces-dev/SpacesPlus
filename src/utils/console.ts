const date = () => `(${new Date().toString().split(' ')[4]}) [S+] `

export const log = (str: string) => console.log(date() + str)
export const info = (str: string) => console.info(date() + str)
export const error = (str: string) => console.error(date() + str)
export const debug = (str: string) => console.debug(date() + str)