import type { Feature } from '../core/feature'

const script = 'var open=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(e,o,t){var n=open.apply(this,arguments);return-1==o.indexOf("mail/sendMessage")&&-1==o.indexOf("diary/new")&&-1==o.indexOf("comments/add")||this.setRequestHeader("X-Proxy","spaces"),n};'

export const freeStickers: Feature = {
  id: 'sticker',
  title: 'Бесплатные стикеры',
  description: 'Функция позволяет бесплатно использовать стикеры. Работает в почте, в комментариях, при создании блогов или тем на форуме. При отправке из «Новое сообщение» не срабатывает.',
  start: () => {
    if (document.getElementById('SP_PLUS_STICKERS')) return
    const node = document.createElement('script')
    node.id = 'SP_PLUS_STICKERS'
    node.textContent = script
    document.head.append(node)
    return () => {
      node.remove()
    }
  },
}
