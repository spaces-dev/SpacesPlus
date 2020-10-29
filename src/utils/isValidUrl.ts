/**
 * Проверяем валидность ссылок
 * @param url ссылка
 */
export const isValidUrl = (url: string) => {
    let regURL = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/g)
    return regURL !== null
}