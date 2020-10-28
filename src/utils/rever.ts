/**
 * Сплитит строку и вставляет точки (используется скриптом 1 раз для вывода версии ¯\_(ツ)_/¯)
 * @param s 
 */
export const rever = (s: string | number) => s ? s.toString().split('').join('.') : s