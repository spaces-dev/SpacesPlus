/**
 * ? Определеят склонение для слов в зависимости от входящего числа
 * Пример использование:
 * * const count = 30
 * * const con = declOfNum(count, ['я', 'я', 'ей'])
 * * console.log(`${count} читател${con}?`)
 * * Output: 30 читателей
 * @param number Число
 * @param titles Объект строк
 */
export const declOfNum = (number: number, titles: string[]) => {
  let cases = [
    2,
    0,
    1,
    1,
    1,
    2
  ]
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]!
  ]
}
