/**
 * Получаем строку данных из куки
 * @param name Название куки
 */
export const getCookie = (name: string): string | undefined => {
    let matches = document.cookie.match(
        new RegExp(`(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`)
    )

    return matches ? decodeURIComponent(matches[1]) : undefined
}