import { qs, http, error, readSettings } from './utils'

import { setStyle } from './components/setStyle'
import { oldHeader } from './components/oldHeader'
import { scrollMove } from './components/scrollMove'
import { userOnline } from './components/userOnline'
import { userStatus } from './components/userStatus'
import { checkUpdates } from './components/checkUpdates'
import { freeStickers } from './components/freeStickers'
import { settingsMenu } from './components/settingsMenu'
import { galleryRotate } from './components/galleryRotate'
import { sidebarButton } from './components/sidebarButton'
import { friendsOnline } from './components/friendsOnline'
import { disableRedirect } from './components/disableRedirect'
import { videoSpeedPlayback } from './components/videoSpeedPlayback'

import { SessionCheck } from './interfaces/SessionCheck'

import { SPACES } from './types/strings'
import { _SETTINGS } from './types/settings'

/**
 * !Для работы Spaces+ необходима авторизация
 * * 00000 - Авторизирован
 * * 01001 - Требуется авторизация
 */
(() => {
    if (qs('#main_wrap')) {
        try {
            http<SessionCheck>('POST', `${SPACES}/api/session/check`, false).then((e) => {
                if (e.status === 200 && userStatus(e.parsedBody?.code)) {
                    init()
                }
            })
        } catch (e) {
            error('Ошибка (index.ts): ' + e)
        }
    }
})()

const init = () => {
    /**
     * !Техничение функции
     * ? Срабатывают один раз после загрузки страницы
     */
    checkUpdates()
    sidebarButton()
    readSettings()
    setStyle()

    /**
     * ? Тут перечислены функции, которые срабатываю
     * ? единоразово, а далее их изменения отслеживаются
     * ? settingsMenu.ts в зависимости от true или false
     */
    oldHeader(_SETTINGS.oldheader)
    freeStickers(_SETTINGS.sticker)
    friendsOnline(_SETTINGS.friendsOn)
    /**
     * ? Тут перечислены функции, которым необходимо постоянно
     * ? отслеживать разные состояние на странице браузера
     * ! Для оптимальной работы выставлен интервал обновления в 200ms
     */
    setInterval(() => {
        if (_SETTINGS.online) userOnline()
        if (_SETTINGS.rscroll) scrollMove()
        if (_SETTINGS.grotate) galleryRotate()
        if (_SETTINGS.dredirect) disableRedirect()
        if (_SETTINGS.playback) videoSpeedPlayback()
        settingsMenu()
    }, 200)
}