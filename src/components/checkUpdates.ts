import { ICheckUpdates } from '../interfaces/CheckUpdates'
import { _SETTINGS } from '../settings'
import { DATA, ENV_PATH, REVISION } from '../strings'
import {
  ce,
  http,
  logger,
  modalMessage,
  qs,
  rever,
  setSettings
} from '../utils'

/**
 * Получаем историю обновлений
 * @param callback
 */
export const getUpdater = (callback: Function) => {
  try {
    http<ICheckUpdates>(
      'GET',
      `${ENV_PATH}/updater.json?r=${REVISION}`,
      false
    ).then((e) => {
      const json = e.parsedBody

      logger.info('Проверка обновлений', e)

      if (e.status === 200 && json?.history) {
        return callback(json)
      }
    })
  } catch (e) {
    logger.error('getUpdater', e)
  }
}

export const checkUpdates = () => {
  try {
    getUpdater((json: ICheckUpdates) => {
      let hideVer = 0

      if (_SETTINGS.upVersion) hideVer = _SETTINGS.upVersion
      DATA.VERSION = Math.max(hideVer, DATA.VERSION)

      if (json.history[0].build > DATA.VERSION) {
        modalMessage(
          `Доступна новая версия Spaces+ ${rever(json.history[0].build)}`,
          `<div class="pad_t_a"></div>${json.history[0].changes}<div id="SP_UPDATER_BUTTONS" class="pad_t_a"><a class="btn btn_green btn_input" href="${ENV_PATH}/spaces-plus.user.js?r=${REVISION}" onclick="document.body.removeChild(this.parentNode.parentNode.parentNode.parentNode)">Обновить</a></div>`,
          true
        )

        if (qs('#SP_PLUS_ALERT')) {
          const hide = ce('a', {
            href: '#',
            className: 'btn btn_white btn_input right sticker-close_btn',
            innerHTML: 'Больше не показывать',
            onclick: () => {
              setSettings('upVersion', json.history[0].build)
              qs('#SP_PLUS_ALERT').remove()
              return false
            }
          })

          qs('#SP_UPDATER_BUTTONS').appendChild(hide)
        }
      }
    })
  } catch (e) {
    logger.error('checkUpdates.ts', e)
  }
}
