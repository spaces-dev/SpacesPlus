/**
 * * Используется для получения pathname
 * @param number
 */
export const getPath = (index?: number) => {
  let path = document.location.pathname
  let str = path.replace(/\/\s*$/, '').split('/')

  return index ? str[index] : path
}
