import { scripts } from 'virtual:vite-userscript-plugin'

import './index.scss'

const [script] = scripts
const install = document.querySelector<HTMLButtonElement>('[data-install]')
const installProxy = document.querySelector<HTMLButtonElement>('[data-install-proxy]')

function openScript(file: string) {
  window.open(`./${file}`, '_blank')
}

if (install && script) {
  install.addEventListener('click', (event) => {
    event.preventDefault()
    openScript(script.file)
  })
}

if (import.meta.env.DEV && installProxy && script) {
  const proxyFile = script.file.replace(/\.user\.js$/, '.proxy.user.js')
  installProxy.hidden = false
  installProxy.addEventListener('click', (event) => {
    event.preventDefault()
    openScript(proxyFile)
  })
}
