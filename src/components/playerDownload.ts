import { ce, qs, find, remove, insertAfter, info, error } from '../utils'

import { OVERRIDE } from '../types/strings'

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
            let tdIc = find(player.getElementsByTagName('td'), { className: 'ico_td' })

            if (tdIc && !downPlace) {
                OVERRIDE.PLAYER_ID = trId
                let dwnTd = ce('td', {
                    id: 'SP_MUSIC_DOWN',
                    class: 'ico_td',
                    innerHTML: '<span class="ico ico_download2" title="Скачать"></span>',
                    onclick: () => { location.href = trScr }
                })

                insertAfter(dwnTd, tdIc[0])
            } else if (downPlace && OVERRIDE.PLAYER_ID !== trId) {
                OVERRIDE.PLAYER_ID = trId
                info('Обновили ссылку на трек!')
                downPlace.onclick = () => { location.href = trScr }
            }
        }
    } catch (e) {
        if (downPlace) { remove(downPlace) }
        error('Ошибка (playerDownload.ts): ' + e)
    }
}