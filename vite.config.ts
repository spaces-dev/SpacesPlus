import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import userscript from 'vite-userscript-plugin'
import pkg from './package.json' with { type: 'json' }
import { DOMAINS } from './src/landing/content.js'

const devServerPort = 3000
const devServerOrigin = `http://localhost:${devServerPort}/`

export default defineConfig((config) => {
  const isDev = config.mode === 'development'
  const basePath = isDev ? devServerOrigin : pkg.homepage

  return {
    base: './',
    resolve: {
      alias: [
        { find: /^@\//, replacement: `${fileURLToPath(new URL('./src/', import.meta.url))}` },
      ],
    },
    server: {
      port: 3000,
    },
    build: {
      minify: true,
      sourcemap: isDev,
    },
    plugins: [
      userscript({
        fileName: pkg.name,
        entry: 'src/main.ts',
        header: {
          name: 'Spaces Plus',
          version: pkg.version,
          description: pkg.description,
          author: `${pkg.author.name} <${pkg.author.email}> ${pkg.author.url}`,
          license: pkg.license,
          icon: 'icons/logo_96.png',
          homepage: basePath,
          match: DOMAINS.map(domain => `https://${domain}/*`),
        },
        server: {
          file: true,
        },
      }),
    ],
  }
})
