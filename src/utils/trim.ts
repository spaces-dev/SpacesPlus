/**
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
 * @param str
 */
export const trim = (str: string) => str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')