import type { Feature, FeatureContext } from './feature'
import { observeElement } from '@zero-dependency/dom'
import { debounce } from '@zero-dependency/utils'
import { coalesce } from './coalesce'
import { unavailableOnTouch } from './feature'
import { log } from './log'
import { settingEnabled, subscribeSettings } from './settings-store'

const listeners = new Set<() => void>()
const domSettleMs = 50

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

const schedule = debounce(flush, domSettleMs)

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
  if (unavailableOnTouch(feature)) return false
  return settingEnabled(feature.id)
}

function contextFor(id: string): FeatureContext {
  return {
    onDom: (apply) => {
      const safe = () => {
        try {
          apply()
        } catch (error) {
          log.error(id, error)
        }
      }
      listeners.add(safe)
      safe()
      return () => {
        listeners.delete(safe)
      }
    },
  }
}

export function startRuntime(features: Feature[]) {
  const active = new Map<string, () => void>()

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
        const dispose = feature.start(contextFor(feature.id)) ?? (() => {})
        active.set(feature.id, dispose)
      } catch (error) {
        log.error(feature.id, error)
      }
    }

    schedule()
  }

  const sync = coalesce(run)

  hookHistory()
  connect()
  subscribeSettings(sync)
  sync()
}
