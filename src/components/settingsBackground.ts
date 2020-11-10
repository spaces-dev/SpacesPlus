import {
    ce,
    qs,
    trim,
    http,
    error,
    remove,
    setCookie,
    isValidUrl,
    insertAfter
} from '../utils'

import { setStyles } from './setStyles'

import { IAssets } from '../interfaces/Assets'

import { _SETTINGS } from '../settings'
import { ENV_PATH, REVISION } from '../strings'

export const settingsBackground = (e: any) => {
    try {

        let div = ce('div', { class: 'text-input__wrap' }),
            bgWrap = ce('div', { id: 'SP_PLUS_BODYSTYLE' }),
            label = ce('label', { class: 'stnd-link', style: 'border-bottom: none' }),
            label1 = ce('label', { class: 'stnd-link', style: 'border-bottom: none' }),
            bstlWrap = ce('div', { class: 'bstrwrap', style: 'border-bottom: none; padding: 15px' })

        let descriptionUrl = ce('label', {
            html: 'Ссылка на изображение:<div class="label__desc">.jpg или .png</div>',
            style: 'margin-right: -17px',
            class: 'label'
        })

        let descriptionColor = ce('label', {
            html: 'Цвет фона:<div class="label__desc">#RRGGBB</div>',
            style: 'margin-right: -17px',
            class: 'label'
        })

        let inputImageUrl = ce('input', {
            type: 'text',
            id: 'image-input',
            value: _SETTINGS.bodystyleSet.url,
            style: 'margin-bottom: 7px',
            class: 'text-input'
        })

        inputImageUrl.addEventListener('change', (a: any) => {
            if ((isValidUrl(a.target.value) && /\.(jpg|jpeg|png|gif)$/i.test(a.target.value)) || trim(a.target.value) !== '') {
                _SETTINGS.bodystyleSet.url = trim(a.target.value)
                setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))
                setStyles()
                inputImageUrl.className = 'text-input'
            } else {
                inputImageUrl.className = 'text-input sp-input-error'
            }
        })

        let inputColor = ce('input', {
            type: 'text',
            class: 'text-input',
            id: 'color-input',
            value: _SETTINGS.bodystyleSet.color
        })

        inputColor.addEventListener('input', (e: any) => {
            if (/^\#([A-Za-z0-9]{3,6})$/i.test(e.target.value)) {
                _SETTINGS.bodystyleSet.color = e.target.value
                setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))
                setStyles()
                inputColor.className = 'text-input'
            } else {
                inputColor.className = 'text-input sp-input-error'
            }
        })


        let radioImage: any = ce('input', {
            type: 'radio',
            id: 'sp_set_bodystyle_URL',
            checked: _SETTINGS.bodystyleSet.urlchecked,
            class: 'sp-checkbox-circle',
            onclick: (a: any) => {
                _SETTINGS.bodystyleSet.urlchecked = a.target.checked

                if (a.target.checked && radioColor.checked) {
                    radioColor.checked = false
                    _SETTINGS.bodystyleSet.colorchecked = false
                }

                setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))

                if (_SETTINGS.bodystyleSet.urlchecked) {
                    setStyles()
                    setImage()
                } else {
                    remove(qs('#SP_WRAP_IMAGE'))
                }
            }
        })

        let radioColor: any = ce('input', {
            type: 'radio',
            id: 'sp_set_bodystyle_color',
            checked: _SETTINGS.bodystyleSet.colorchecked,
            class: 'sp-checkbox-circle',
            onclick: (a: any) => {

                _SETTINGS.bodystyleSet.colorchecked = a.target.checked

                if (a.target.checked && radioImage.checked) {
                    radioImage.checked = false
                    _SETTINGS.bodystyleSet.urlchecked = false
                }

                setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))

                if (_SETTINGS.bodystyleSet.colorchecked) {
                    setStyles()
                    setColor()
                } else {
                    remove(qs('#SP_WRAP_COLOR'))
                }
            }
        })

        let lblstylelbl = ce('label', {
            attr: { 'for': 'sp_set_bodystyle_URL' },
            html: 'Выбрать изображение'
        })

        let lblstyleclbl = ce('label', {
            attr: { 'for': 'sp_set_bodystyle_color' },
            html: 'Подобрать цвет'
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
        insertAfter(bgWrap, e.parentNode)

        if (_SETTINGS.bodystyleSet.urlchecked) { setImage() }
        if (_SETTINGS.bodystyleSet.colorchecked) { setColor() }
    } catch (e) {
        error('Ошибка (settingsBackground.ts): ' + e)
    }
}

const setImage = async () => {
    try {
        if (!qs('#SP_WRAP_IMAGE')) {

            if (qs('#SP_WRAP_COLOR')) {
                remove(qs('#SP_WRAP_COLOR'))
                remove(qs('#SP_PLUS_CP_STYLE'))
            }

            let style = ce('link', {
                rel: 'stylesheet',
                type: 'text/css',
                id: 'SP_PLUS_IMAGE_STYLE',
                href: `${ENV_PATH}/css/bodystyle.css?r=${REVISION}`
            })

            document.getElementsByTagName('head')[0].appendChild(style)

            let SPB = qs('#SP_PLUS_BODYSTYLE'),
                gd = ce('div', { class: 'js-gallery_skip wbg oh tiles_block tiles_wrapper' }),
                stdnI = ce('div', { id: 'SP_WRAP_IMAGE', style: 'border-top: 1px solid #cdd4e1' })

            await http<IAssets>('GET', `${ENV_PATH}/data.json?r=${REVISION}`, false).then(e => {

                if (e.status === 200 && e.parsedBody?.backgrounds) {
                    for (let i of e.parsedBody?.backgrounds) {
                        let d1 = ce('div', { class: 'js-file_item tiled_item tiled_item-200' }),
                            d2 = ce('div', { class: 'tiled_inner t_center relative' }),
                            s3 = ce('span', { class: 'relative sp_bg-items' }),
                            ds1 = ce('div', { class: 'tiled-preview border' }),
                            img = ce('img', {
                                class: 'preview s201_200',
                                style: 'cursor: pointer',
                                src: `${ENV_PATH}/backgrounds/${i}`,
                                onclick: (e: any) => {
                                    // @ts-ignore
                                    qs('#image-input').value = e.target.src
                                    _SETTINGS.bodystyleSet.url = e.target.src
                                    setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))
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
        error('Ошибка (setImage): ' + e)
    }
}

const setColor = () => {
    try {
        if (!qs('#SP_WRAP_COLOR')) {

            if (qs('#SP_WRAP_IMAGE')) {
                remove(qs('#SP_WRAP_IMAGE'))
                remove(qs('#SP_PLUS_IMAGE_STYLE'))
            }

            let style = ce('link', {
                rel: 'stylesheet',
                type: 'text/css',
                id: 'SP_PLUS_CP_STYLE',
                href: `${ENV_PATH}/css/user-content.css?r=${REVISION}`
            })

            document.getElementsByTagName('head')[0].appendChild(style)

            let colorsTd = ce('div', {
                class: 'stnd-block'
            })

            let bodyStyle = qs('#SP_PLUS_BODYSTYLE'),
                stdnC = ce('div', { id: 'SP_WRAP_COLOR', style: 'border-top: 1px solid #cdd4e1' }),
                table = ce('table', { class: 'table__wrap bb-colorpicker' }),
                tbody = ce('tbody'),
                tr = ce('tr'),
                td1 = ce('td', { class: 'table__cell' })

            // цвета для быстрого выбора
            const colors = [
                [
                    "#90CAF9",
                    "#80DEEA",
                    "#A5D6A7",
                    "#FFF59D",
                    "#FFCC80",
                    "#FFAB91",
                    "#CE93D8"
                ],
                [
                    "#2196F3",
                    "#00BCD4",
                    "#4CAF50",
                    "#FFEB3B",
                    "#FF9800",
                    "#F44336",
                    "#9C27B0",
                ],
                [
                    "#1565C0",
                    "#00838F",
                    "#2E7D32",
                    "#F9A825",
                    "#EF6C00",
                    "#C62828",
                    "#6A1B9A"
                ],
                [
                    "#ECF0F1",
                    "#CFD8DC",
                    "#B0BEC5",
                    "#97A6B0",
                    "#546E7A",
                    "#44565E",
                    "#3A474C"
                ]
            ]

            for (let color of colors) {

                for (let i in color) {
                    let dd = ce('div', {
                        style: `background-color: ${color[i]}`,
                        class: 'js-bb_color toolbar-color pointer',
                        attr: {
                            'data-val': color[i],
                            'data-tag': 'fon'
                        }
                    })

                    colorsTd.appendChild(dd)
                }

                colorsTd.appendChild(ce('br'))
            }

            td1.appendChild(colorsTd)
            tr.appendChild(td1)

            let td2 = ce('td', { class: 'table__cell table__cell_last' }),
                stnd = ce('div', { class: 'stnd-block' }),
                container = ce('div', { class: 'js-bb_colorpicker' })

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

                qs('#color-input').addEventListener('change', (a: any) => {
                    if (/^\#([A-Za-z0-9]{3}|[A-Za-z0-9]{6})$/i.test(a.target.value) || a.target.value === '') {
                        a.target.className = 'text-input'
                        _SETTINGS.bodystyleSet.color = trim(a.target.value)
                        setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))
                        setStyles()
                        picker.set(_SETTINGS.bodystyleSet.color)
                    } else {
                        a.target.className = 'text-input sp-input-error'
                    }
                })

                picker.enter()
                picker.set(_SETTINGS.bodystyleSet.color)
                picker.on('change', (e: string) => {
                    const color = e.toUpperCase()
                    // @ts-ignore
                    qs('#color-input').value = '#' + color
                    // @ts-ignore
                    qs('input[name=color]').value = '#' + color
                    qs('.colorpicker-color').style.backgroundColor = '#' + color
                    _SETTINGS.bodystyleSet.color = '#' + color
                    setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))
                    setStyles()
                })

                const colorsBtn = document.querySelectorAll('.js-bb_color')

                for (let color of colorsBtn) {
                    color.addEventListener('click', (e: any) => {
                        let value = e.target.getAttribute('data-val')
                        // @ts-ignore
                        qs('#color-input').value = value
                        // @ts-ignore
                        qs('input[name=color]').value = value
                        qs('.colorpicker-color').style.backgroundColor = value
                        _SETTINGS.bodystyleSet.color = value
                        setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))
                        setStyles()
                        picker.set(value)
                    })
                }
            }, 100)
        }
    } catch (e) {
        error('Ошибка (setColor): ' + e)
    }
}