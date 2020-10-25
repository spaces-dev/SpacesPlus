const date = () => `(${new Date().toString().split(' ')[4]}) [S+] `

export const log = (str: any) => console.log(date() + str)
export const info = (str: any) => console.info(date() + str)
export const error = (str: any) => console.error(date() + str)
export const debug = (str: any) => console.debug(date() + str)