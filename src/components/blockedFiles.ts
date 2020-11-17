import {
    ce,
    qs,
    http,
    error,
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
            !downloadBtn &&
            !linkSSL) {

            let createBtn = ce('a', {
                href: '#',
                class: 'list-link list-link-blue stnd-link_disabled c-blue',
                id: 'SP_LINK_SSL',
                html: `
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
                }
            })
        }
    } catch (e) {
        error('Ошибка (blockedFiles.ts): ' + e)
    }
}