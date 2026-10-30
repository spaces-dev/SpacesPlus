/// <reference types="vite/client" />
/// <reference types="vite-userscript-plugin/virtual" />
/// <reference types="vite-userscript-plugin/types/tampermonkey" />

declare module 'node:url' {
  export function fileURLToPath(url: string | URL): string
}
