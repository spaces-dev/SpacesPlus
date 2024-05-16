import { ce, qs } from '../utils'

export const freeStickers = (b: boolean) => {
  if (b && !qs('#SP_PLUS_STICKERS')) {
    let s = ce('script', {
      type: 'text/javascript',
      id: 'SP_PLUS_STICKERS',
      innerHTML:
        'var open=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(e,o,t){var n=open.apply(this,arguments);return-1==o.indexOf("mail/sendMessage")&&-1==o.indexOf("diary/new")&&-1==o.indexOf("comments/add")||this.setRequestHeader("X-Proxy","spaces"),n};'
    })

    document.getElementsByTagName('head')[0].appendChild(s)
  }
}
