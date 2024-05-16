import {
  adBlock,
  apiDebugger,
  // soundNotify,
  betaFeatures,
  blockedFiles,
  bypassProfile,
  checkUpdates,
  coinsAccept,
  deleteBlogs,
  deleteComments,
  deleteReaders,
  disableRedirect,
  favoriteUser,
  firstLaunch,
  freeStickers,
  friendsOnline,
  galleryRotate,
  hiddenRightbar,
  karmaAccept,
  newYear,
  oldHeader,
  playerDownload,
  qrCode,
  recentSmiles,
  scrollMove,
  setStyles,
  settingsMenu,
  sidebarButton,
  stickyHeader,
  userOnline,
  userStatus,
  videoSpeedPlayback,
  weatherWidget
} from './components'
import { _SETTINGS } from './settings'
import { BASE_URL, DATA, DEVICE, HOST } from './strings'
import { http, logger, qs, readSettings } from './utils'
import type { ISessionCheck } from './interfaces/SessionCheck'

;(() => {
  if (qs('#main_wrap')) {
    try {
      /**
       * ! Для работы Spaces+ необходима авторизация
       * * 00000 - Авторизированы
       * * 01001 - Требуется авторизация
       */
      http<ISessionCheck>('POST', `${BASE_URL}/api/session/check`, false).then(
        (e) => {
          const response = e.parsedBody

          if (response && userStatus(response.code)) {
            // Временно храним ник
            DATA.USERNAME = response.attributes.name

            // Временно храним CK
            DATA.CK = response.attributes.CK

            // Временно храним SID
            DATA.SID = response?.attributes.sid

            // Инициализируем работу
            init()
          }

          logger.info('Проверка сессии', e)
        }
      )
    } catch (e) {
      logger.error('main.ts', e)
    }
  }
})()

const init = () => {
  // Script error.
  window.onerror = () => false

  /**
   * ! Технические функции
   * ? Срабатывают один раз после загрузки страницы
   */
  checkUpdates()
  sidebarButton()
  readSettings()
  setStyles()
  newYear()
  firstLaunch()

  /**
   * ? Тут перечислены функции, которые срабатывают единоразово
   * ? далее их изменения отслеживаются в components/settingsMenu.ts
   */
  oldHeader(_SETTINGS.oldheader)
  apiDebugger(_SETTINGS.apidebug)
  freeStickers(_SETTINGS.sticker)
  friendsOnline(_SETTINGS.friendsOn)
  stickyHeader(_SETTINGS.stickyheader)

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
    if (_SETTINGS.adblock) adBlock()
    if (_SETTINGS.beta) betaFeatures()
    if (_SETTINGS.coins) coinsAccept()
    if (_SETTINGS.karma) karmaAccept()
    if (_SETTINGS.online) userOnline()
    // if (_SETTINGS.notify) soundNotify()
    if (_SETTINGS.recents) recentSmiles()
    if (_SETTINGS.grotate) galleryRotate()
    if (_SETTINGS.favorite) favoriteUser()
    if (_SETTINGS.weather) weatherWidget()
    if (_SETTINGS.readersd) deleteReaders()
    if (_SETTINGS.comments) deleteComments()
    if (_SETTINGS.playerdn) playerDownload()
    if (_SETTINGS.userbypass) bypassProfile()
    if (_SETTINGS.dredirect) disableRedirect()
    if (_SETTINGS.playback) videoSpeedPlayback()
    if (_SETTINGS.blogsd || HOST === 'spaces-blogs.com') deleteBlogs()
    if (_SETTINGS.blockedfiles || HOST === 'spac1.net') blockedFiles()
    settingsMenu()
    qrCode()
  }, 200)
}
