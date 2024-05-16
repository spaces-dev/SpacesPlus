//@ts-nocheck

import { _SETTINGS } from '../settings'
import { BASE_URL } from '../strings'
import {
  ce,
  isValidUrl,
  logger,
  modalMessage,
  playSound,
  setSettings
} from '../utils'

export const settingsNotify = (e: Element) => {
  try {
    if (!('Notification' in window)) {
      modalMessage(
        'Внимание!',
        'Ваш браузер не поддерживает уведомления',
        true,
        5
      )
    } else if (Notification.permission.toLowerCase() !== 'denied') {
      Notification.requestPermission((permission) => {
        if (permission.toLowerCase() !== 'granted') {
          modalMessage(
            'Внимание!',
            `Разрешите браузеру показывать уведомления с сайта ${BASE_URL}, чтобы пользоваться функцией`,
            true,
            5
          )
        }
      })
    } else {
      modalMessage(
        'Внимание!',
        `Вы запретили показывать уведомления для сайта ${BASE_URL}`,
        true,
        5
      )
    }

    let eventsWrap = ce('div', {
      id: 'SP_PLUS_EVENTS'
    })

    let descInp = ce('label', {
      innerHTML:
        'Ссылка на аудиофайл:<div class="label__desc">.ogg или .wav</div>',
      className: 'label',
      style: {
        marginRight: '-17px'
      }
    })

    let descRange = ce('label', {
      innerHTML: 'Громкость:',
      className: 'label'
    })

    let divInp = ce('div', {
      className: 'text-input__wrap',
      style: {
        margin: '15px'
      }
    })

    let div = ce('div', {
      style: {
        margin: '15px'
      }
    })

    let label1 = ce('label', {
      className: 'list-link sp_noborder'
    })

    let label2 = ce('label', {
      className: 'list-link sp_noborder'
    })

    let label3 = ce('label', {
      className: 'list-link sp_noborder'
    })

    let eventsUrl = ce('input', {
      type: 'text',
      value: _SETTINGS.notifySet.url,
      className: 'text-input',
      oninput: (e: Event) => {
        const value = (e.target as HTMLInputElement).value

        if (isValidUrl(value) && /\.(ogg|mp3|wav)$/i.test(value)) {
          setSettings('notifySet.url', value)
          eventsUrl.classList.remove('sp-input-error')
        } else {
          eventsUrl.classList.add('sp-input-error')
        }
      }
    })

    let testPlay = ce('span', {
      className: 'text-input__btn',
      innerHTML: '<span class="sp sp-play-green"></span>',
      title: 'Прослушать',
      style: {
        top: '23px'
      },
      onclick: () =>
        playSound(_SETTINGS.notifySet.url, _SETTINGS.notifySet.volume)
    })

    let volume = ce('div', {
      className: 'label__desc',
      innerHTML: `${_SETTINGS.notifySet.volume}%`
    })

    let volRange = ce('input', {
      type: 'range',
      min: 0,
      max: 100,
      step: 1,
      value: _SETTINGS.notifySet.volume,
      oninput: (e: Event) => {
        const value = (e.target as HTMLInputElement).value

        volume.innerHTML = value + '%'
        setSettings('notifySet.volume', value)
      }
    })

    let mailEvent = ce('input', {
      type: 'checkbox',
      id: 'sp_event_mail',
      className: 'sp-checkbox-square',
      checked: _SETTINGS.notifySet.mail,
      onclick: (e: Event) =>
        setSettings('notifySet.mail', (e.target as HTMLInputElement).checked)
    })

    let mailEventLbl = ce('label', {
      htmlFor: 'sp_event_mail',
      innerHTML: 'Уведомлять о почте'
    })

    let jourEvent = ce('input', {
      type: 'checkbox',
      id: 'sp_event_journal',
      className: 'sp-checkbox-square',
      checked: _SETTINGS.notifySet.journal,
      onclick: (e: Event) =>
        setSettings('notifySet.journal', (e.target as HTMLInputElement).checked)
    })

    let jourEventLbl = ce('label', {
      htmlFor: 'sp_event_journal',
      innerHTML: 'Уведомлять о журнале'
    })

    let feedEvent = ce('input', {
      type: 'checkbox',
      id: 'sp_event_feed',
      className: 'sp-checkbox-square',
      checked: _SETTINGS.notifySet.feed,
      onclick: (e: Event) =>
        setSettings('notifySet.feed', (e.target as HTMLInputElement).checked)
    })

    let feedEventLbl = ce('label', {
      htmlFor: 'sp_event_feed',
      innerHTML: 'Уведомлять о ленте'
    })

    divInp.appendChild(descInp)
    divInp.appendChild(eventsUrl)
    divInp.appendChild(testPlay)
    descRange.appendChild(volume)
    div.appendChild(descRange)
    div.appendChild(volRange)
    eventsWrap.appendChild(divInp)
    eventsWrap.appendChild(div)
    label1.appendChild(mailEvent)
    label1.appendChild(mailEventLbl)
    label2.appendChild(jourEvent)
    label2.appendChild(jourEventLbl)
    label3.appendChild(feedEvent)
    label3.appendChild(feedEventLbl)
    eventsWrap.appendChild(label1)
    eventsWrap.appendChild(label2)
    eventsWrap.appendChild(label3)
    e.parentElement?.after(eventsWrap)
  } catch (e) {
    logger.error('settingsNotify.ts', e)
  }
}
