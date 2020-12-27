/**
 * Получение куки
 * @param name
 */
function getCookie(name: string): string | undefined {
    const cookieName = name + '='
    const cookieArr = document.cookie.split(';')

    for (let i = 0, j = cookieArr.length; i < j; i++) {
        const ex = cookieArr[i].trimLeft()

        if (ex.indexOf(cookieName) == 0) {
            return ex.substring(cookieName.length, ex.length)
        }
    }

    return undefined
}

/**
 * Создание куки
 * @param name
 * @param value
 */
function setCookie(name: string, value: string): void {
    const d = new Date()
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000))

    document.cookie = `${name}=${value}; expires=${d.toUTCString()}`
}

/**
 * Удаляем куку
 * @param name
 */
function delCookie(name: string): void {
    document.cookie = name + '=; Max-Age=-99999999;'
}

export {
    getCookie,
    setCookie,
    delCookie
}