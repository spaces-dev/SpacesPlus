import { scripts } from 'virtual:vite-userscript-plugin'

export const pkgScript = scripts[0]!

export const pkgVersion = pkgScript.version
export const pkgBasePath = pkgScript.homepage!
