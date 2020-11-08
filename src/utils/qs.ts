/**
 * querySelector _/ ( •_•) /
 * @param e
 */
export const qs = (e: string) => (document.querySelector(e) as HTMLElement)

/**
 * querySelectorAll ᕦ(ツ)ᕤ
 * @param e
 */
export const qsa = (e: string) => (document.querySelectorAll(e) as NodeListOf<HTMLElement>)