import {
    ce,
    qs,
    qsa,
    info,
    error,
    insertAfter
} from '../utils'

import { DATA } from '../strings'

export const playerDownload = () => {

    try {
        let trId: number = 0,
            track = sessionStorage.getItem('music:track'),
            data = sessionStorage.getItem('music:playlist'),
            downPlace = qs('#SP_MUSIC_DOWN'),
            player = qs('#gp_main_player')

        if (player && track && data) {
            let jstr = JSON.parse(track)
            let jspl = JSON.parse(data)

            trId = parseInt(jstr.id, 10)
            let trScr = jspl.playlist.playlist[trId].src
            let tdIc = qs('a.js-music_repeat')

            if (tdIc && !downPlace) {
                DATA.PLAYER = trId
                let dwnTd = ce('td', {
                    id: 'SP_MUSIC_DOWN',
                    class: 'ico_td',
                    innerHTML: '<span style="margin: 0px 6px 0px 0px !important" class="sp sp-download-darkblue" title="Скачать"></span>',
                    onclick: () => location.href = trScr
                })

                insertAfter(dwnTd, tdIc.parentElement)
            } else if (downPlace && DATA.PLAYER !== trId) {
                DATA.PLAYER = trId
                downPlace.onclick = () => location.href = trScr

                info('Обновили ссылку на трек', jstr)
            }
        }
    } catch (e) {
        error('playerDownload.ts', e)
    }
}