import {
    ce,
    qs,
    qsa,
    info,
    error,
    insertAfter
} from '../utils'

import { OVERRIDE } from '../strings'

export const playerDownload = () => {
    let downPlace = qs('#SP_MUSIC_DOWN')

    try {
        let trId: number = 0,
            track = sessionStorage.getItem('music:track'),
            data = sessionStorage.getItem('music:playlist'),
            player = qs('#gp_main_player')

        if (player && track && data) {
            let jstr = JSON.parse(track)
            let jspl = JSON.parse(data)

            trId = parseInt(jstr.id, 10)
            let trScr = jspl.playlist.playlist[trId].src
            let tdIc = qsa('td.ico_td')

            if (tdIc && !downPlace) {
                OVERRIDE.PLAYER = trId
                let dwnTd = ce('td', {
                    id: 'SP_MUSIC_DOWN',
                    class: 'ico_td',
                    innerHTML: '<span style="margin: 0px 6px 0px 0px !important" class="sp sp-download-darkblue" title="Скачать"></span>',
                    onclick: () => { location.href = trScr }
                })

                insertAfter(dwnTd, tdIc[0])
            } else if (downPlace && OVERRIDE.PLAYER !== trId) {
                OVERRIDE.PLAYER = trId
                info('Обновили ссылку на трек!')
                downPlace.onclick = () => { location.href = trScr }
            }
        }
    } catch (e) {
        downPlace?.remove()
        error('Ошибка (playerDownload.ts): ' + e)
    }
}