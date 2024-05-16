/**
 * Воспроизводит аудиофайл
 * @param file Cсылка на аудиофайл
 * @param volume Уровень громкости (1 / 100 = 0.01 - 1%)
 */
export const playSound = (file: string, volume: number) => {
  let audio = new Audio(file)
  audio.volume = volume / 100
  audio.play()
}
