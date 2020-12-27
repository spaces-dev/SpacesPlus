import {
    ce,
    qs,
    http,
    logger,
    getPath
} from '../utils'

import { IFiles } from '../interfaces/Files'

export const blockedFiles = () => {
    try {

        let downloadBtn = qs('a[class*="__adv_download"'),
            downloadWrap = qs('div[id^="download_wrap_"'),
            linkSSL = qs('#SP_LINK_SSL')

        if (getPath(1) === 'files' &&
            getPath(2) === 'view' &&
            downloadWrap &&
            !downloadBtn &&
            !linkSSL) {

            let createBtn = <HTMLLinkElement>ce('a', {
                href: '#',
                id: 'SP_LINK_SSL',
                className: 'list-link list-link-blue stnd-link_disabled c-blue',
                innerHTML: `
                    <span class="ico bp ico_spinner"></span>
                    <span class="t js-text">Загрузка</span>
                `
            })

            downloadWrap.children[0].appendChild(createBtn)

            http<IFiles>('GET', document.location.href, true).then(e => {

                const response = e.parsedBody?.info.file_widget

                if (response) {
                    createBtn.classList.remove('stnd-link_disabled')
                    createBtn.href = response.preview.downloadLinkSSL
                    createBtn.innerHTML = `
                        <span class="js-ico ico ico_download2_blue"></span>
                        <span class="t js-text">Скачать (${response.downloadBox.weight})</span>
                    `

                    logger.info('Загрузка заблокированного файла', e)
                }
            })
        }
    } catch (e) {
        logger.error('blockedFiles.ts', e)
    }
}