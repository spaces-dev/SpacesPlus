import { scripts } from 'virtual:vite-userscript-plugin'

const pkg = scripts[0]!

export const pkgVersion = pkg.version
export const pkgBasePath = pkg.homepage!
