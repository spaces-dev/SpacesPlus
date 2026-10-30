import type { Feature } from '@/core/feature'
import { ensureStyle, removeStyle } from '@/core/appearance'
import { log } from '@/core/log'
import recentsCss from '@/styles/features/recents.scss?inline'
import {
  dropShiftHold,
  openerSelector,
  refreshMenus,
  releaseShift,
  rememberClick,
  setShiftHold,
  shiftHeld,
  toggleStored,
} from './menu'
import { renderRecentOptions } from './options'
import { compactSmiles } from './storage'

const recentsStyleId = 'SP_STYLE_RECENTS'

export const recentSmiles: Feature = {
  id: 'recents',
  title: 'Ранее использованные смайлики',
  description: 'В меню смайликов добавляется раздел с ранее использованными смайликами. Чтобы смайл туда попал, выберите его из меню или с зажатым Shift нажмите на ячейку: плюс в правом верхнем углу добавляет, крестик убирает.',
  optionsId: 'SP_PLUS_RECENTS',
  renderOptions: renderRecentOptions,
  start: () => {
    ensureStyle(recentsStyleId, recentsCss)
    compactSmiles()

    const onClick = (event: MouseEvent) => {
      const target = event.target
      if (shiftHeld() && target instanceof Element) {
        const choice = target.closest('a.js-smile_menu_select')
        if (choice instanceof HTMLAnchorElement) {
          event.preventDefault()
          event.stopPropagation()
          toggleStored(choice)
          return
        }
      }

      rememberClick(event)
      if (!(target instanceof Element) || !target.closest(openerSelector)) return
      requestAnimationFrame(refreshMenus)
    }

    const onShift = (event: KeyboardEvent) => {
      if (event.key !== 'Shift') return
      setShiftHold(event.type === 'keydown')
    }

    const onBlur = () => {
      releaseShift()
    }

    const observer = new MutationObserver(() => {
      try {
        refreshMenus()
      } catch (error) {
        log.error('recents', error)
      }
    })

    document.addEventListener('click', onClick, true)
    window.addEventListener('keydown', onShift)
    window.addEventListener('keyup', onShift)
    window.addEventListener('blur', onBlur)
    observer.observe(document.documentElement, { childList: true, subtree: true })
    refreshMenus()

    return () => {
      removeStyle(recentsStyleId)
      document.removeEventListener('click', onClick, true)
      window.removeEventListener('keydown', onShift)
      window.removeEventListener('keyup', onShift)
      window.removeEventListener('blur', onBlur)
      observer.disconnect()
      dropShiftHold()
    }
  },
}
