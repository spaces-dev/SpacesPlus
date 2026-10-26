import type { Feature } from '../core/feature'
import { el } from '@zero-dependency/dom'
import { LocalStorage } from '@zero-dependency/storage'
import { log } from '../core/log'
import { modalConfirm } from '../core/modals'
import { getSettings } from '../core/settings-store'

type SmileMap = Record<string, string>

const smiles = new LocalStorage<SmileMap>('sp_recent_smiles', {})
const bound = new WeakSet<Element>()

function remember(image: HTMLImageElement) {
  if (bound.has(image)) return
  bound.add(image)
  image.addEventListener('click', () => {
    const smile = image.getAttribute('smile')
    if (!smile) return
    const max = getSettings().recentSmiles.max || 60
    const next: SmileMap = { [image.src]: smile }
    for (const [src, value] of Object.entries(smiles.value)) {
      if (src === image.src) continue
      next[src] = value
      if (Object.keys(next).length >= max) break
    }
    smiles.write(next)
  })
}

function watchSmiles() {
  document.querySelectorAll<HTMLImageElement>('img[smile^=":"]').forEach(remember)
}

export const recentSmiles: Feature = {
  id: 'recents',
  title: 'Ранее использованные смайлики',
  description: 'В меню смайликов добавляется раздел с ранее использованными смайликами. Чтобы смайл туда попал, выберите его из меню.',
  start: ctx => ctx.onDom(() => {
    try {
      const menu = document.querySelector('.smiles_menu-header')
      if (!menu) return
      watchSmiles()
      if (document.querySelector('#SP_RECENT_SMILES')) return

      document.querySelectorAll('a[href^="#sm-tab="]').forEach((tab) => {
        tab.addEventListener('click', () => {
          if (getSettings().sticker) {
            document.querySelectorAll('.stickers_list>div').forEach(node => node.remove())
          }
          watchSmiles()
          document.querySelectorAll('a[href^="#sm-cat="]').forEach((category) => {
            category.addEventListener('click', () => {
              watchSmiles()
            })
          })
        })
      })

      const body = document.querySelector('.smiles_menu-body')
      if (!body) return

      const clear = el('span', { className: 'sp sp-grey-del trash-btn' })
      clear.onclick = () => {
        modalConfirm('Вы действительно хотите очистить ранее использованные смайлики?', true, () => {
          smiles.reset()
          location.reload()
        })
      }

      const tab = el('img', {
        id: 'SP_RECENT_SMILES',
        className: 'sp_recent-smile-btn',
        src: `${location.protocol}//spac.me/i/mail/restore_grey.png`,
        title: 'Ранее использованные',
      })
      tab.onclick = () => {
        body.innerHTML = ''
        const stored = smiles.value
        const entries = Object.entries(stored)
        if (!entries.length) {
          body.append(el('div', {
            innerHTML: `<img src="${location.protocol}//spac.me/i/st/compdude11.gif"></br></br>Список ранее использованных смайликов пуст</br>Используйте смайлики из меню смайликов, чтобы добавить их сюда</br></br>`,
            style: { color: '#a4b7c4', textAlign: 'center' },
          }))
          return
        }

        for (const [src, smile] of entries) {
          const image = el('img', {
            className: 'sp_recent-smile',
            src,
          })
          image.setAttribute('smile', smile)
          image.onclick = () => {
            const input = document.querySelector<HTMLTextAreaElement>('textarea[tabindex="1"], textarea[name="msg"]')
            if (input) input.value += `${smile} `
          }
          body.append(image)
        }
      }

      menu.prepend(tab, clear)
      if (getSettings().recentSmiles.show && Object.keys(smiles.value).length) tab.click()
    } catch (error) {
      log.error('recents', error)
    }
  }),
}
