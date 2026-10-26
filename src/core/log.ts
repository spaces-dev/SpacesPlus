import { Logger } from '@zero-dependency/utils'
import pkg from '../../package.json' with { type: 'json' }

export const log = new Logger(`Spaces+ ${pkg.version}`)
