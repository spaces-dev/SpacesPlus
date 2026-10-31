import type { FriendListItem, FriendsOnline } from './types'
import type { Feature } from '@/core/feature'
import { el } from '@zero-dependency/dom'
import { defineToggle } from '@/core/feature'
import { http } from '@/core/http'
import { log } from '@/core/log'
import { defaultSettings, getSettings } from '@/core/settings-store'
import { baseUrl } from '@/core/site'
import { withStyle } from '@/core/with-style'
import friendsCss from '@/styles/features/friends.scss?inline'
import { toggleId } from '@/types/toggles'
import { friendsOptionsId, friendsPanelId, friendsRange, renderFriendsOptions } from './options'

const friendsStyleId = 'SP_STYLE_FRIENDS'
const collapsedClass = 'sp-friends-collapsed'
const friendsOnlinePath = '/friends/?S=3&json=1'
const friendsSidebarPath = '/sidebar/links/?T=4'
const legacyCountSelector = '#friends_cnt'
const modernCountSelector = '.sidebar-item__counter.sidebar-item__counter--online.js-cnt'

function friendsCounter() {
  return document.querySelector<HTMLElement>(legacyCountSelector)
    ?? document.querySelector<HTMLElement>(modernCountSelector)
}

const friendsPanel = () => document.getElementById(friendsPanelId)

function listHint(collapsed: boolean) {
  return collapsed ? 'Показать список' : 'Скрыть список'
}

function friendItem(friend: FriendListItem, modern: boolean) {
  const href = `${baseUrl}/mysite/index/${friend.name}`
  const preview = friend.avatar?.previewURL
  const status = friend.online_status?.on_src
  const statusIcon = status
    ? `<img class="online-status" src="${status}" alt="">`
    : ''
  const avatar = preview
    ? `<img class="sp-friend-ava" src="${preview}" alt="">`
    : ''

  if (modern) {
    return el('div', {
      className: 'sidebar-item',
      innerHTML: `<a href="${href}" class="sidebar-item__link"><span class="sp-friend-icons">${avatar}${statusIcon}</span><span class="sidebar-item__label">${friend.name}</span></a>`,
    })
  }

  const legacyAvatar = preview
    ? `<span class="comm_ava m for_avatar"><img src="${preview}" class="preview s21_20"></span>`
    : ''
  const legacyStatus = status
    ? `<span class="online-status m"><img class="p14 online_status_ico" src="${status}" alt="(ON)"></span>`
    : ''
  return el('a', {
    href,
    className: 'li',
    innerHTML: `${legacyAvatar}${legacyStatus}<span class="block-item__title m break-word">${friend.name}</span>`,
  })
}

export const friendsOnline: Feature = defineToggle({
  id: toggleId.friends,
  title: 'Панель друзей онлайн',
  description: `Функция добавляет в левое меню панель с друзьями онлайн. Для работы необходимо включить раздел <a href="${baseUrl}${friendsSidebarPath}">Друзья</a>, если он выключен.</br></br>Панель ограничена от ${friendsRange.min} до ${friendsRange.max} друзей онлайн.`,
  optionsId: friendsOptionsId,
  renderOptions: renderFriendsOptions,
  start: withStyle(friendsStyleId, friendsCss, (ctx) => {
    let boundNode: HTMLElement | null = null
    let toggleAbort: AbortController | null = null
    let savedExpanded = getSettings().friendsSet.expanded
    let collapsed = !savedExpanded

    const applyCollapsed = (panel: HTMLElement) => {
      const saved = getSettings().friendsSet.expanded
      if (saved !== savedExpanded) {
        savedExpanded = saved
        collapsed = !saved
      }
      panel.classList.toggle(collapsedClass, collapsed)
    }

    const bindToggle = (countNode: HTMLElement) => {
      countNode.title = listHint(collapsed)
      countNode.classList.add('pointer')
      if (boundNode === countNode) return

      toggleAbort?.abort()
      toggleAbort = new AbortController()
      boundNode = countNode
      countNode.addEventListener('click', (event) => {
        const panel = friendsPanel()
        if (!panel) return
        event.preventDefault()
        event.stopPropagation()
        collapsed = !collapsed
        applyCollapsed(panel)
        countNode.title = listHint(collapsed)
      }, { signal: toggleAbort.signal })
    }

    const loadFriends = (panel: HTMLElement, modern: boolean) => {
      http<FriendsOnline>(`${baseUrl}${friendsOnlinePath}`, { proxy: true }).then((response) => {
        if (!panel.isConnected) return
        const raw = response.parsedBody?.tabbed_panel?.links?.[1]?.content?.list ?? []
        const list = Object.values(raw).filter((friend): friend is FriendListItem => Boolean(friend?.name))
        if (!list.length) return
        const max = Number(getSettings().friendsSet.max) || defaultSettings.friendsSet.max
        panel.replaceChildren()
        for (const friend of list.slice(0, max)) {
          panel.append(friendItem(friend, modern))
        }
        log.info('Панель друзей онлайн', response)
      }).catch((error) => {
        log.error('friendsOn', error)
      })
    }

    const stop = ctx.onDom(() => {
      const countNode = friendsCounter()
      if (!countNode) return

      const count = Number(countNode.textContent?.trim() ?? 0)
      const panel = friendsPanel()
      if (count <= 0) {
        panel?.remove()
        countNode.title = ''
        return
      }

      const item = countNode.closest('.sidebar-item')
      const section = countNode.closest('.sidebar__section') ?? countNode.parentElement?.parentElement?.parentElement
      if (!item && !section) return

      const place = (node: HTMLElement) => {
        if (item) {
          if (item.nextElementSibling !== node) item.after(node)
          return
        }
        if (section && node.parentElement !== section) section.append(node)
      }

      if (panel) {
        place(panel)
        applyCollapsed(panel)
        bindToggle(countNode)
        return
      }

      const modern = Boolean(item)
      const next = el('div', {
        id: friendsPanelId,
        className: modern ? 'sidebar__section' : 'list-link__wrap',
      })
      applyCollapsed(next)
      place(next)
      bindToggle(countNode)
      loadFriends(next, modern)
    })

    return () => {
      stop()
      toggleAbort?.abort()
      boundNode = null
      friendsPanel()?.remove()
      const countNode = friendsCounter()
      if (!countNode) return
      countNode.title = ''
      countNode.classList.remove('pointer')
    }
  }),
})
