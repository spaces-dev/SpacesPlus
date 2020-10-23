import { qs, http, error, readSettings } from './utils'

import { setStyle } from './components/setStyle'
import { oldHeader } from './components/oldHeader'
import { scrollMove } from './components/scrollMove'
import { userOnline } from './components/userOnline'
import { userStatus } from './components/userStatus'
import { apiDebugger } from './components/apiDebugger'
import { coinsAccept } from './components/coinsAccept'
import { deleteBlogs } from './components/deleteBlogs'
import { karmaAccept } from './components/karmaAccept'
import { checkUpdates } from './components/checkUpdates'
import { freeStickers } from './components/freeStickers'
import { settingsMenu } from './components/settingsMenu'
import { deleteReaders } from './components/deleteReaders'
import { galleryRotate } from './components/galleryRotate'
import { sidebarButton } from './components/sidebarButton'
import { friendsOnline } from './components/friendsOnline'
import { deleteComments } from './components/deleteComments'
import { hiddenRightbar } from './components/hiddenRightbar'
import { playerDownload } from './components/playerDownload'
import { disableRedirect } from './components/disableRedirect'
import { videoSpeedPlayback } from './components/videoSpeedPlayback'

import { SessionCheck } from './interfaces/SessionCheck'

import { SPACES, BASE_URL, DEVICE, OVERRIDE } from './types/strings'
import { _SETTINGS } from './types/settings'

/**
 * ! Для работы Spaces+ необходима авторизация
 * * 00000 - Успешно авторизирован
 * * 01001 - Требуется авторизация
 */
(() => {
    if (qs('#main_wrap')) {
        try {
            http<SessionCheck>('POST', `${SPACES}/api/session/check`, false).then((e) => {
                if (e.status === 200 && e.parsedBody) {
                    if (userStatus(e.parsedBody.code)) {
                        // Сохраняем CK
                        OVERRIDE.CK = e.parsedBody?.attributes.CK

                        // Инициализируем работу
                        init()
                    } else {
                        console.log(e)
                    }
                }
            })
        } catch (e) {
            error('Ошибка (index.ts): ' + e)
        }
    }
})()

const init = () => {
    /**
     * ! Технические функции
     * ? Срабатывают один раз после загрузки страницы
     */
    checkUpdates()
    sidebarButton()
    readSettings()
    setStyle()

    /**
     * ? Тут перечислены функции, которые срабатывают единоразово,
     * ? далее их изменения отслеживаются в settingsMenu.ts
     */
    oldHeader(_SETTINGS.oldheader)
    apiDebugger(_SETTINGS.apidebug)
    freeStickers(_SETTINGS.sticker)
    friendsOnline(_SETTINGS.friendsOn)

    /**
     * ? Единоразовая инициализация
     * ! Только для PC версии сайта
     */
    if (DEVICE.id === 4) {
        scrollMove(_SETTINGS.rscroll)
        hiddenRightbar(_SETTINGS.hrightbar)
    }

    /**
     * ? Тут перечислены функции, которым необходимо постоянно
     * ? отслеживать прочее состояния на странице браузера
     * ! Для оптимальной работы выставлен интервал обновления в 200ms
     */
    setInterval(() => {
        if (_SETTINGS.coins) coinsAccept()
        if (_SETTINGS.karma) karmaAccept()
        if (_SETTINGS.online) userOnline()
        if (_SETTINGS.grotate) galleryRotate()
        if (_SETTINGS.readersd) deleteReaders()
        if (_SETTINGS.comments) deleteComments()
        if (_SETTINGS.playerdn) playerDownload()
        if (_SETTINGS.dredirect) disableRedirect()
        if (_SETTINGS.playback) videoSpeedPlayback()
        if (_SETTINGS.blogsd || BASE_URL === 'spaces-blogs.com') deleteBlogs()
        settingsMenu()
    }, 200)
}