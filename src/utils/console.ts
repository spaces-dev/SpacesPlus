import { Debugger } from 'ts-debug'

const logger = new Debugger(console, true, '[S+]: ')

const styles = [
    'background: steelblue',
    'background: green',
    'background: darkorange',
    'background: darkred'
]

export const log = (str: string, obj?: {}) => logger.log('%c' + str, styles[0], obj)
export const info = (str: string, obj?: {}) => logger.info('%c' + str, styles[1], obj)
export const warn = (str: string, obj?: {}) => logger.warn('%c' + str, styles[2], obj)
export const error = (str: string, obj?: {}) => logger.error('%c' + str, styles[3], obj)