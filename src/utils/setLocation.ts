import { ce, qs } from '../utils'

export const setLocation = (url: string) => {
    let setLink = qs('#SP_PLUS_SETLOCATIONLINK')
    let clickEvent = document.createEvent('MouseEvent')
    clickEvent.initEvent('click', true, true)

    if (setLink) {
        setLink.href = url
        setLink.dispatchEvent(clickEvent)
    } else {
        setLink = ce('a', { href: url, style: 'display: none', id: 'SP_PLUS_SETLOCATIONLINK' })
        document.body.appendChild(setLink)
        setLink.dispatchEvent(clickEvent)
    }
}