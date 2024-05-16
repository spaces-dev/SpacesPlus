/**
 * Первый символ в строке делаем toUpperCase
 * @param str
 */
export const toUpper = (str: string) => str[0].toUpperCase() + str.substring(1)
