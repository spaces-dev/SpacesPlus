/**
 * querySelector _/ ( •_•) /
 * @param e
 */
export const qs = (e: string) => (<HTMLElement>document.querySelector(e))

/**
 * querySelectorAll ᕦ(ツ)ᕤ
 * @param e
 */
export const qsa = (e: string) => (<NodeListOf<HTMLElement>>document.querySelectorAll(e))