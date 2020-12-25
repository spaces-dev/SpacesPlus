import {
    ce,
    qs,
    http,
    logger,
    isValidUrl,
    setSettings
} from '../utils'

import { setStyles } from './setStyles'

import { IAssets } from '../interfaces/Assets'

import { _SETTINGS } from '../settings'
import { ENV_PATH, REVISION } from '../strings'

export const settingsBackground = (e: Element) => {
    try {

        let div = ce('div', {
            className: 'text-input__wrap'
        })

        let bgWrap = ce('div', {
            id: 'SP_PLUS_BODYSTYLE'
        })

        let label = ce('label', {
            className: 'stnd-link',
            style: {
                borderBottom: 'none'
            }
        })

        let label1 = ce('label', {
            className: 'stnd-link',
            style: {
                borderBottom: 'none'
            }
        })

        let bstlWrap = ce('div', {
            className: 'bstrwrap',
            style: {
                borderBottom: 'none',
                padding: '15px'
            }
        })

        let descriptionUrl = ce('label', {
            innerHTML: 'Ссылка на изображение:<div class="label__desc">.jpg или .png</div>',
            className: 'label',
            style: {
                marginRight: '-17px'
            }
        })

        let descriptionColor = ce('label', {
            innerHTML: 'Цвет фона:<div class="label__desc">#RRGGBB</div>',
            className: 'label',
            style: {
                marginRight: '-17px'
            }
        })

        let inputImageUrl = ce('input', {
            type: 'text',
            id: 'image-input',
            className: 'text-input',
            value: _SETTINGS.bodystyleSet.url,
            style: {
                marginBottom: '7px'
            }
        })

        inputImageUrl.addEventListener('change', (e: any) => {
            if (isValidUrl(e.target.value) && /\.(jpg|jpeg|png|gif)$/i.test(e.target.value)) {
                setSettings('bodystyleSet.url', e.target.value)
                setStyles()
                inputImageUrl.classList.remove('sp-input-error')
            } else {
                inputImageUrl.classList.add('sp-input-error')
            }
        })

        let inputColor = ce('input', {
            type: 'text',
            className: 'text-input',
            id: 'color-input',
            value: _SETTINGS.bodystyleSet.color
        })

        inputColor.addEventListener('input', (e: any) => {
            if (/^\#([A-Za-z0-9]{3,6})$/i.test(e.target.value)) {
                setSettings('bodystyleSet.color', e.target.value)
                setStyles()
                inputColor.classList.remove('sp-input-error')
            } else {
                inputColor.classList.add('sp-input-error')
            }
        })


        let radioImage: any = ce('input', {
            type: 'radio',
            id: 'sp_set_bodystyle_URL',
            checked: _SETTINGS.bodystyleSet.urlchecked,
            className: 'sp-checkbox-circle',
            onclick: (e: any) => {
                setSettings('bodystyleSet.urlchecked', e.target.checked)

                if (e.target.checked && radioColor.checked) {
                    radioColor.checked = false
                    setSettings('bodystyleSet.colorchecked', false)
                }

                if (_SETTINGS.bodystyleSet.urlchecked) {
                    setStyles()
                    setImage()
                } else {
                    qs('#SP_WRAP_IMAGE').remove()
                }
            }
        })

        let radioColor: any = ce('input', {
            type: 'radio',
            id: 'sp_set_bodystyle_color',
            checked: _SETTINGS.bodystyleSet.colorchecked,
            className: 'sp-checkbox-circle',
            onclick: (e: any) => {
                setSettings('bodystyleSet.colorchecked', e.target.checked)

                if (e.target.checked && radioImage.checked) {
                    radioImage.checked = false
                    setSettings('bodystyleSet.urlchecked', false)
                }

                if (_SETTINGS.bodystyleSet.colorchecked) {
                    setStyles()
                    setColor()
                } else {
                    qs('#SP_WRAP_COLOR').remove()
                }
            }
        })

        let lblstylelbl = ce('label', {
            htmlFor: 'sp_set_bodystyle_URL',
            innerHTML: 'Выбрать изображение'
        })

        let lblstyleclbl = ce('label', {
            htmlFor: 'sp_set_bodystyle_color',
            innerHTML: 'Подобрать цвет'
        })

        div.appendChild(descriptionUrl)
        div.appendChild(inputImageUrl)
        div.appendChild(descriptionColor)
        div.appendChild(inputColor)
        label.appendChild(radioImage)
        label.appendChild(lblstylelbl)
        label1.appendChild(radioColor)
        label1.appendChild(lblstyleclbl)
        bstlWrap.appendChild(div)
        bgWrap.appendChild(bstlWrap)
        bgWrap.appendChild(label)
        bgWrap.appendChild(label1)
        e.parentElement?.after(bgWrap)

        if (_SETTINGS.bodystyleSet.urlchecked) { setImage() }
        if (_SETTINGS.bodystyleSet.colorchecked) { setColor() }
    } catch (e) {
        logger.error('settingsBackground.ts', e)
    }
}

const setImage = async () => {
    try {
        if (!qs('#SP_WRAP_IMAGE')) {

            if (qs('#SP_WRAP_COLOR')) {
                qs('#SP_WRAP_COLOR').remove()
                qs('#SP_PLUS_CP_STYLE').remove()
            }

            let style = ce('link', {
                rel: 'stylesheet',
                type: 'text/css',
                id: 'SP_PLUS_IMAGE_STYLE',
                href: `${ENV_PATH}/css/bodystyle.css?r=${REVISION}`
            })

            document.getElementsByTagName('head')[0].appendChild(style)

            let SPB = qs('#SP_PLUS_BODYSTYLE')

            let gd = ce('div', {
                className: 'js-gallery_skip wbg oh tiles_block tiles_wrapper'
            })

            let stdnI = ce('div', {
                id: 'SP_WRAP_IMAGE',
                style: {
                    borderTop: '1px solid #cdd4e1'
                }
            })

            await http<IAssets>('GET', `${ENV_PATH}/data.json?r=${REVISION}`, false).then(e => {

                if (e.status === 200 && e.parsedBody?.backgrounds) {
                    for (let i of e.parsedBody?.backgrounds) {
                        let d1 = ce('div', { className: 'js-file_item tiled_item tiled_item-200' }),
                            d2 = ce('div', { className: 'tiled_inner t_center relative' }),
                            s3 = ce('span', { className: 'relative sp_bg-items' }),
                            ds1 = ce('div', { className: 'tiled-preview border' }),
                            img = ce('img', {
                                className: 'preview s201_200',
                                src: `${ENV_PATH}/backgrounds/${i}`,
                                style: {
                                    cursor: 'pointer'
                                },
                                onclick: (e: any) => {
                                    (<HTMLInputElement>qs('#image-input')).value = e.target.src
                                    setSettings('bodystyleSet.url', e.target.src)
                                    setStyles()
                                }
                            })

                        ds1.appendChild(img)
                        s3.appendChild(ds1)
                        d2.appendChild(s3)
                        d1.appendChild(d2)
                        gd.appendChild(d1)
                    }

                    stdnI.appendChild(gd)
                    SPB.appendChild(stdnI)
                }

                setStyles()
            })
        }
    } catch (e) {
        logger.error('setImage', e)
    }
}

const setColor = () => {
    try {
        if (!qs('#SP_WRAP_COLOR')) {

            if (qs('#SP_WRAP_IMAGE')) {
                qs('#SP_WRAP_IMAGE').remove()
                qs('#SP_PLUS_IMAGE_STYLE').remove()
            }

            let style = ce('link', {
                rel: 'stylesheet',
                type: 'text/css',
                id: 'SP_PLUS_CP_STYLE',
                href: `${ENV_PATH}/css/user-content.css?r=${REVISION}`
            })

            document.getElementsByTagName('head')[0].appendChild(style)

            let colorsTd = ce('div', {
                className: 'stnd-block'
            })

            let bodyStyle = qs('#SP_PLUS_BODYSTYLE')
            let stdnC = ce('div', {
                id: 'SP_WRAP_COLOR',
                style: {
                    borderTop: '1px solid #cdd4e1'
                }
            })

            let table = ce('table', {
                className: 'table__wrap bb-colorpicker'
            })

            let tbody = ce('tbody')
            let tr = ce('tr')
            let td1 = ce('td', {
                className: 'table__cell'
            })

            // цвета для быстрого выбора
            const colors = [
                [
                    '#90CAF9',
                    '#80DEEA',
                    '#A5D6A7',
                    '#FFF59D',
                    '#FFCC80',
                    '#FFAB91',
                    '#CE93D8'
                ],
                [
                    '#2196F3',
                    '#00BCD4',
                    '#4CAF50',
                    '#FFEB3B',
                    '#FF9800',
                    '#F44336',
                    '#9C27B0',
                ],
                [
                    '#1565C0',
                    '#00838F',
                    '#2E7D32',
                    '#F9A825',
                    '#EF6C00',
                    '#C62828',
                    '#6A1B9A'
                ],
                [
                    '#ECF0F1',
                    '#CFD8DC',
                    '#B0BEC5',
                    '#97A6B0',
                    '#546E7A',
                    '#44565E',
                    '#3A474C'
                ]
            ]

            for (let color of colors) {

                for (let i in color) {
                    let dd = ce('div', {
                        className: 'js-bb_color toolbar-color pointer',
                        style: {
                            backgroundColor: color[i]
                        }
                    })

                    dd.setAttribute('data-tag', 'fon')
                    dd.setAttribute('data-val', color[i])

                    colorsTd.appendChild(dd)
                }

                colorsTd.appendChild(ce('br'))
            }

            td1.appendChild(colorsTd)
            tr.appendChild(td1)

            let td2 = ce('td', { className: 'table__cell table__cell_last' }),
                stnd = ce('div', { className: 'stnd-block' }),
                container = ce('div', { className: 'js-bb_colorpicker' })

            stnd.appendChild(container)
            td2.appendChild(stnd)
            tr.appendChild(td2)
            tbody.appendChild(tr)
            table.appendChild(tbody)
            stdnC.appendChild(table)
            bodyStyle.appendChild(stdnC)

            setTimeout(() => {
                // @ts-ignore
                let picker = new CP(container, false, container)

                qs('#color-input').addEventListener('change', (e: any) => {
                    if (/^\#([A-Za-z0-9]{3}|[A-Za-z0-9]{6})$/i.test(e.target.value)) {
                        setSettings('bodystyleSet.color', e.target.value)
                        setStyles()
                        picker.set(_SETTINGS.bodystyleSet.color)
                        e.target.classList.remove('sp-input-error')
                    } else {
                        e.target.classList.add('sp-input-error')
                    }
                })

                picker.enter()
                picker.set(_SETTINGS.bodystyleSet.color)
                picker.on('change', (e: string) => {
                    const value = `#${e.toUpperCase()}`
                    setValues(value)
                    setSettings('bodystyleSet.color', value)
                    setStyles()
                })

                const colorsBtn = document.querySelectorAll('.js-bb_color')

                for (let color of colorsBtn) {
                    color.addEventListener('click', (e: any) => {
                        let value = e.target.getAttribute('data-val')
                        setValues(value)
                        setSettings('bodystyleSet.color', value)
                        setStyles()
                        picker.set(value)
                    })
                }
            }, 100)
        }
    } catch (e) {
        logger.error('setColor', e)
    }
}

const setValues = (color: string) => {
    (<HTMLInputElement>qs('input[name=color]')).value = color;
    (<HTMLInputElement>qs('#color-input')).value = color
    qs('.colorpicker-color').style.backgroundColor = color
}