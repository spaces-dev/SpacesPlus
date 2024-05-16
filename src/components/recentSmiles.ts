import { _SETTINGS } from '../settings'
import { HTTP } from '../strings'
import { ce, logger, modalConfirm, modifyObject, qs } from '../utils'

export const recentSmiles = () => {
  let recentTab = qs('#SP_RECENT_SMILES')
  let smilesMenu = qs('.smiles_menu-header')
  let smilesStorage = JSON.parse(
    localStorage.getItem('sp_recent_smiles') || '{}'
  )

  try {
    // TODO: Исправить поиск смайликов в разделах
    /* ВРЕМЕННОЕ РЕШЕНИЕ */
    if (smilesMenu) {
      let smiles = document.querySelectorAll('img[smile^=":"]')

      if (smiles) eventSmiles(smiles, smilesStorage)
    }
    /* ВРЕМЕННОЕ РЕШЕНИЕ */

    if (smilesMenu && !recentTab) {
      let smileTabs = document.querySelectorAll('a[href^="#sm-tab="]')

      for (let tab of smileTabs) {
        tab.addEventListener('click', () => {
          // Удаляем предупреждение о покупке стикеров, если включена функция "Бесплатные стикеры"
          if (_SETTINGS.sticker)
            document
              .querySelectorAll('.stickers_list>div')
              .forEach((e) => e.remove())

          // Ищем все смайлики в списке смайлов
          let smiles = document.querySelectorAll('img[smile^=":"]')
          if (smiles) eventSmiles(smiles, smilesStorage)

          // Ищем каталоги смайлов
          let cats = document.querySelectorAll('a[href^="#sm-cat="]')
          for (let cat of cats) {
            cat.addEventListener('click', () => {
              eventSmiles(smiles, smilesStorage)
            })
          }
        })
      }

      let smilesBody = qs('.smiles_menu-body')

      let recentDelete = ce('span', {
        className: 'sp sp-grey-del trash-btn',
        onclick: () => {
          modalConfirm(
            'Вы действительно хотите очистить ранее использованные смайлики?',
            true,
            () => {
              localStorage.removeItem('sp_recent_smiles')
              // костыль
              document.location.reload()
            }
          )
        }
      })

      let recentTab = ce('img', {
        id: 'SP_RECENT_SMILES',
        className: 'sp_recent-smile-btn',
        src: `${HTTP}//spac.me/i/mail/restore_grey.png`,
        title: 'Ранее использованные',
        onclick: () => {
          // Очищаем список смайлов
          smilesBody.innerHTML = ''

          if (Object.keys(smilesStorage).length > 0) {
            // Выводим все смайлы из LS
            for (let [src, smile] of Object.entries(smilesStorage)) {
              let smileElem = ce('img', {
                className: 'sp_recent-smile',
                src: src,
                onclick: () => {
                  // Добавляем смайлик в поле ввода
                  let input =
                    qs('textarea[tabindex="1"]') ?? qs('textarea[name="msg"]')
                  ;(<HTMLInputElement>input).value += smile + ' '
                }
              })

              smileElem.setAttribute('smile', smile as string)

              smilesBody.append(smileElem)
            }
          } else {
            let smilesNotFound = ce('div', {
              innerHTML: `<img src="${HTTP}//spac.me/i/st/compdude11.gif"></br></br>Список ранее использованных смайликов пуст</br>Используйте смайлики из меню смайликов, чтобы добавить их сюда</br></br>`,
              style: {
                color: '#a4b7c4',
                textAlign: 'center'
              }
            })

            smilesBody.append(smilesNotFound)
          }
        }
      })

      // Кнопка открытия
      smilesMenu.prepend(recentTab)

      // Кнопка очистки
      smilesMenu.prepend(recentDelete)

      // Принудительно показываем ранее использованные смайлы, если доп. настройка включена и они у нас имеются
      if (_SETTINGS.recentSmiles.show && Object.keys(smilesStorage).length > 0)
        qs('#SP_RECENT_SMILES').click()
    }
  } catch (e) {
    logger.error('recentSmiles.ts', e)
  }
}

const eventSmiles = (smiles: any, storage: object[]) => {
  for (let smile of smiles) {
    smile.addEventListener('click', () => {
      let modified = modifyObject(
        storage,
        smile.src,
        smile.attributes.smile.value,
        0
      )
      localStorage.setItem('sp_recent_smiles', JSON.stringify(modified))
    })
  }
}
