import type { Feature } from '@/core/feature'
import type { FriendsOnline } from '@/types/friends-online'
import { el } from '@zero-dependency/dom'
import { http } from '@/core/http'
import { log } from '@/core/log'
import { getSettings, setSetting } from '@/core/settings-store'
import { assetOrigin, baseUrl } from '@/core/site'

export function renderFriendsOptions(anchor: HTMLElement) {
  if (document.querySelector('#SP_PLUS_MAXFRIENDS')) return
  const input = el('input', {
    type: 'text',
    className: 'text-input',
    size: 4,
    maxLength: 2,
    value: String(getSettings().friendsSet.max),
  })
  input.oninput = () => {
    const valid = /^(?:[1-9]|1[0-5])$/.test(input.value)
    input.classList.toggle('text-input_error_bg', !valid)
    if (!valid) return
    setSetting('friendsSet.max', Number(input.value))
  }

  const panel = el('div', { id: 'SP_PLUS_MAXFRIENDS' }, el('div', { className: 'sp_settings-wrap' }, [
    el('label', {
      className: 'label',
      innerHTML: 'Выводить друзей:<div class="label__desc">от 1 до 15</div>',
    }),
    input,
  ]))
  anchor.parentElement?.after(panel)
}

export const friendsOnline: Feature = {
  id: 'friendsOn',
  title: 'Панель друзей онлайн',
  description: `<img src="${assetOrigin}/screens/friends-online.png"></br>Функция добавляет в левое меню панель с друзьями онлайн. Для работы необходимо включить раздел <a href="${baseUrl}/sidebar/links/?T=4">Друзья</a>, если он выключен.</br></br>Панель ограничена от 1 до 15 друзей онлайн.`,
  optionsId: 'SP_PLUS_MAXFRIENDS',
  renderOptions: renderFriendsOptions,
  start: (ctx) => {
    let started = false

    const stop = ctx.onDom(() => {
      const countNode = document.querySelector('#friends_cnt')
      const count = Number(countNode?.textContent?.trim() ?? 0)
      if (!countNode || count <= 0 || started || document.querySelector('#SP_PLUS_FRIENDS_B')) return

      const item = countNode.closest('.sidebar-item')
      const section = countNode.closest('.sidebar__section') ?? countNode.parentElement?.parentElement?.parentElement
      if (!section) return

      started = true
      const modern = Boolean(item)
      const panel = el('div', {
        id: 'SP_PLUS_FRIENDS_B',
        className: modern ? 'sidebar__section' : 'list-link__wrap',
      })
      section.append(panel)

      http<FriendsOnline>(`${baseUrl}/friends/?S=3`, { proxy: true }).then((response) => {
        const list = response.parsedBody?.tabbed_panel.tabs[1]?.content.list
        if (!list) return
        const max = Number(getSettings().friendsSet.max) || 10
        const icons = Boolean(document.querySelector('span.s_i_exit'))
        panel.replaceChildren()
        for (const friend of list.slice(0, max)) {
          if (modern) {
            panel.append(el('div', {
              className: 'sidebar-item',
              innerHTML: `<a href="${baseUrl}/mysite/index/${friend.name}" class="sidebar-item__link"><span class="sidebar-item__label">${friend.name}</span></a>`,
            }))
            continue
          }

          const avatar = icons
            ? `<span class="comm_ava m for_avatar"><img src="${friend.avatar.previewURL}" class="preview s21_20"></span>`
            : ''
          panel.append(el('a', {
            href: `${baseUrl}/mysite/index/${friend.name}`,
            className: 'li',
            innerHTML: `${avatar}<span class="online-status m"><img class="p14 online_status_ico" src="${location.protocol}//spac.me/i/${friend.online_status.on_img}" alt="(ON)"></span><span class="block-item__title m break-word">${friend.name}</span>`,
          }))
        }
        log.info('Панель друзей онлайн', response)
      }).catch((error) => {
        log.error('friendsOn', error)
      })
    })

    return () => {
      stop()
      document.querySelector('#SP_PLUS_FRIENDS_B')?.remove()
    }
  },
}
