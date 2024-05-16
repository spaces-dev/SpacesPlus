import { defineConfig } from 'vite'
import Userscript from 'vite-userscript-plugin'

import pkg from './package.json'

const DOMAINS = [
  'spaces.ru',
  'spcs.me',
  'spaces.im',
  'gdespaces.com',
  'spac1.com',
  'spac1.net',
  'spaces-blogs.com',
  'world76.spcs.bio'
]

export default defineConfig((config) => {
  const isDev = config.mode === 'development'
  const basePath = isDev ? 'http://localhost:3000' : pkg.homepage

  return {
    plugins: [
      Userscript({
        fileName: pkg.name,
        entry: 'src/index.ts',
        header: {
          name: 'Spaces+',
          version: pkg.version,
          author: `${pkg.author.name} <${pkg.author.email}> ${pkg.author.url}`,
          license: pkg.license,
          homepage: pkg.homepage,
          icon: `${basePath}/icons/logo_96.png`,
          homepageURL: 'https://github.com/spaces-dev/SpacesPlus',
          require: `${basePath}/libs/colorpicker.js`,
          match: DOMAINS.map((domain) => `https://${domain}/*`)
        },
        server: {
          port: 3000
        }
      })

    ]
  }
})
