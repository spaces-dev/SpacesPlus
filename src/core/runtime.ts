import type { Feature, FeatureContext } from './feature'
import { observeElement } from '@zero-dependency/dom'
import { debounce } from '@zero-dependency/utils'
import { log } from './log'
import { getSettings, subscribeSettings } from './settings-store'
import { isTouch } from './site'

const listeners = new Set<() => void>()

let disconnect = () => {}
let applying = false

function flush() {
  applying = true
  disconnect()
  try {
    for (const listener of [...listeners]) {
      try {
        listener()
      } catch (error) {
        log.error('feature', error)
      }
    }
  } finally {
    applying = false
    connect()
  }
}

const schedule = debounce(flush, 50)

function connect() {
  if (!document.body) return
  disconnect = observeElement(document.body, () => {
    if (applying) return
    schedule()
  })
}

function hookHistory() {
  const wrap = (original: typeof history.pushState) => function (this: History, ...args: Parameters<typeof history.pushState>) {
    const result = original.apply(this, args)
    schedule()
    return result
  }

  history.pushState = wrap(history.pushState)
  history.replaceState = wrap(history.replaceState)
  window.addEventListener('popstate', () => {
    schedule()
  })
}

function isEnabled(feature: Feature) {
  if (feature.core || feature.listed === false) return true
  if (feature.desktopOnly && isTouch()) return false
  const value = getSettings()[feature.id as keyof ReturnType<typeof getSettings>]
  return value === true
}

export function startRuntime(features: Feature[]) {
  const active = new Map<string, () => void>()
  let syncing = false
  let pending = false

  const context: FeatureContext = {
    onDom: (apply) => {
      const safe = () => {
        try {
          apply()
        } catch (error) {
          log.error('feature', error)
        }
      }
      listeners.add(safe)
      safe()
      return () => {
        listeners.delete(safe)
      }
    },
  }

  const run = () => {
    for (const feature of features) {
      const enabled = isEnabled(feature)
      const stop = active.get(feature.id)

      if (enabled && stop) continue

      if (!enabled && stop) {
        stop()
        active.delete(feature.id)
        continue
      }

      if (!enabled) continue

      try {
        const dispose = feature.start(context) ?? (() => {})
        active.set(feature.id, dispose)
      } catch (error) {
        log.error(feature.id, error)
      }
    }

    schedule()
  }

  const sync = () => {
    if (syncing) {
      pending = true
      return
    }

    syncing = true
    try {
      do {
        pending = false
        run()
      } while (pending)
    } finally {
      syncing = false
    }
  }

  hookHistory()
  connect()
  subscribeSettings(sync)
  sync()
}
