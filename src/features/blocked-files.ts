import type { Feature } from '../core/feature'
import type { FilesPayload } from '../types/files'
import { el } from '@zero-dependency/dom'
import { http } from '../core/http'
import { log } from '../core/log'
import { pathAt } from '../core/site'

export const blockedFiles: Feature = {
  id: 'blockedfiles',
  title: 'Ссылки на заблокированные файлы',
  description: 'Функция позволяет скачивать файлы, заблокированные антивирусом. Spaces+ не отвечает за скачивание файлов с вирусами.',
  start: ctx => ctx.onDom(() => {
    try {
      const downloadBtn = document.querySelector('a[class*="__adv_download"]')
      const downloadWrap = document.querySelector('div[id^="download_wrap_"]')
      const linkSsl = document.querySelector('#SP_LINK_SSL')
      if (pathAt(1) !== 'files' || pathAt(2) !== 'view' || !downloadWrap || downloadBtn || linkSsl) return

      const createBtn = el('a', {
        href: '#',
        id: 'SP_LINK_SSL',
        className: 'list-link list-link-blue list-link_disabled c-blue',
        innerHTML: '<span class="ico bp ico_spinner"></span><span class="t js-text">Загрузка</span>',
      })
      downloadWrap.children[0]?.append(createBtn)

      http<FilesPayload>(location.href, { proxy: true }).then((response) => {
        const file = response.parsedBody?.info.file_widget
        if (!file) return
        createBtn.classList.remove('list-link_disabled')
        createBtn.href = file.preview.downloadLinkSSL
        createBtn.innerHTML = `<span class="js-ico ico ico_download2_blue"></span><span class="t js-text">Скачать (${file.downloadBox.weight})</span>`
        log.info('Загрузка заблокированного файла', response)
      })
    } catch (error) {
      log.error('blockedfiles', error)
    }
  }),
}
