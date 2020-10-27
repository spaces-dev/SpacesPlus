export const playSound = (file: string, volume: number) => {
    let audio = new Audio(file)
    audio.volume = volume / 100
    audio.play()
}