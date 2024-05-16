import { entries } from 'zero-dependency'

import { PKG_VERSION } from '../strings'

type LogType = 'info' | 'debug' | 'warn' | 'error'

const colors: Record<LogType, string> = {
  info: `#2ecc71`,
  debug: `#7f8c8d`,
  warn: `#f39c12`,
  error: `#c0392b`
}

function styles(method: LogType) {
  return [
    `background: ${colors[method]}`,
    `border-radius: 0.5em`,
    `color: white`,
    `font-weight: bold`,
    `padding: 2px 0.5em`,
    'font-family: cursive'
  ].join(';')
}

function createLogger(prefix: string) {
  return entries(colors).reduce(
    (acc, [method]) => {
      acc[method] = (...args) => {
        console[method](`%c${prefix}`, styles(method), ...args)
      }

      return acc
    },
    {} as Record<LogType, (...args: any[]) => void>
  )
}

export const logger = createLogger(`Spaces+ ${PKG_VERSION}`)
