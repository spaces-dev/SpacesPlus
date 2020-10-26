import {
    ce,
    qs,
    trim,
    http,
    remove,
    error,
    setCookie,
    isValidUrl,
    insertAfter,
} from '../utils'

import { setStyles } from './setStyles'

import { IAssets } from '../interfaces/Assets'

import { _SETTINGS } from '../settings'
import { ENV, GITHUB, REVISION } from '../strings'

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
            value: _SETTINGS.bodystyleSetting.url,
            style: 'margin-bottom: 7px',
            class: 'text-input'
        })

        inputImageUrl.addEventListener('change', (a: any) => {
            if ((isValidUrl(a.target.value) && /\.(jpg|jpeg|png|gif)$/i.test(a.target.value)) || trim(a.target.value) === '') {
                _SETTINGS.bodystyleSetting.url = trim(a.target.value)
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
            value: _SETTINGS.bodystyleSetting.color
        })

        inputColor.addEventListener('change', (a: any) => {
            if (/^\#([A-Za-z0-9]{3}|[A-Za-z0-9]{6})$/i.test(a.target.value) || a.target.value === '') {
                _SETTINGS.bodystyleSetting.color = trim(a.target.value)
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
            checked: _SETTINGS.bodystyleSetting.urlchecked,
            class: 'sp-checkbox-circle',
            onclick: (a: any) => {
                _SETTINGS.bodystyleSetting.urlchecked = a.target.checked

                if (a.target.checked && radioColor.checked) {
                    radioColor.checked = false
                    _SETTINGS.bodystyleSetting.colorchecked = false
                }

                setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))

                if (_SETTINGS.bodystyleSetting.urlchecked) {
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
            checked: _SETTINGS.bodystyleSetting.colorchecked,
            class: 'sp-checkbox-circle',
            onclick: (a: any) => {

                _SETTINGS.bodystyleSetting.colorchecked = a.target.checked

                if (a.target.checked && radioImage.checked) {
                    radioImage.checked = false
                    _SETTINGS.bodystyleSetting.urlchecked = false
                }

                setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))

                if (_SETTINGS.bodystyleSetting.colorchecked) {
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

        if (_SETTINGS.bodystyleSetting.urlchecked) { setImage() }
        if (_SETTINGS.bodystyleSetting.colorchecked) { setColor() }
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
                href: `https://${ENV ?? GITHUB}/src/css/bodystyle.css?r=${REVISION}`
            })

            document.getElementsByTagName('head')[0].appendChild(style)

            let SPB = qs('#SP_PLUS_BODYSTYLE'),
                gd = ce('div', { class: 'js-gallery_skip wbg oh tiles_block tiles_wrapper' }),
                stdnI = ce('div', { id: 'SP_WRAP_IMAGE', style: 'border-top: 1px solid #cdd4e1' })

            await http<IAssets>('GET', `https://${ENV ?? GITHUB}/src/data.json?r=${REVISION}`, false).then(e => {

                if (e.status === 200 && e.parsedBody?.backgrounds) {
                    for (let i of e.parsedBody?.backgrounds) {
                        let d1 = ce('div', { class: 'js-file_item tiled_item tiled_item-200' }),
                            d2 = ce('div', { class: 'tiled_inner t_center relative' }),
                            s3 = ce('span', { class: 'relative', style: 'display: inline-block;max-width: 100%; width: 100%' }),
                            ds1 = ce('div', { class: 'tiled-preview border' }),
                            img = ce('img', {
                                class: 'preview s201_200',
                                style: 'cursor: pointer',
                                src: `https://${ENV ?? GITHUB}/src/backgrounds/${i}`,
                                onclick: (e: any) => {
                                    // @ts-ignore
                                    qs('#image-input').value = e.target.src
                                    _SETTINGS.bodystyleSetting.url = e.target.src
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
        console.error('Ошибка (setImage): ' + e)
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
                href: `https://${ENV ?? GITHUB}/src/css/toolbar.css?r=${REVISION}`
            })

            let style2 = ce('link', {
                rel: 'stylesheet',
                type: 'text/css',
                id: 'SP_PLUS_CP_STYLE_2',
                href: `https://${ENV ?? GITHUB}/src/css/user-content.css?r=${REVISION}`
            })

            document.getElementsByTagName('head')[0].appendChild(style)
            document.getElementsByTagName('head')[0].appendChild(style2)

            let bodyStyle = qs('#SP_PLUS_BODYSTYLE'),
                stdnC = ce('div', { id: 'SP_WRAP_COLOR', style: 'border-top: 1px solid #cdd4e1' }),
                table = ce('table', { class: 'table__wrap bb-colorpicker' }),
                tbody = ce('tbody'),
                tr = ce('tr'),
                td1 = ce('td', { class: 'table__cell' }),
                td1div = ce('div', {
                    class: 'stnd-block',
                    html: '<div><div style="background-color:#90CAF9" data-tag="fon" data-val="#90CAF9" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#80DEEA" data-tag="fon" data-val="#80DEEA" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#A5D6A7" data-tag="fon" data-val="#A5D6A7" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#FFF59D" data-tag="fon" data-val="#FFF59D" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#FFCC80" data-tag="fon" data-val="#FFCC80" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#FFAB91" data-tag="fon" data-val="#FFAB91" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#CE93D8" data-tag="fon" data-val="#CE93D8" class="js-bb_color toolbar-color pointer"></div> </div> <div> <div style="background-color:#2196F3" data-tag="fon" data-val="#2196F3" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#00BCD4" data-tag="fon" data-val="#00BCD4" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#4CAF50" data-tag="fon" data-val="#4CAF50" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#FFEB3B" data-tag="fon" data-val="#FFEB3B" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#FF9800" data-tag="fon" data-val="#FF9800" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#F44336" data-tag="fon" data-val="#F44336" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#9C27B0" data-tag="fon" data-val="#9C27B0" class="js-bb_color toolbar-color pointer"></div> </div> <div> <div style="background-color:#1565C0" data-tag="fon" data-val="#1565C0" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#00838F" data-tag="fon" data-val="#00838F" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#2E7D32" data-tag="fon" data-val="#2E7D32" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#F9A825" data-tag="fon" data-val="#F9A825" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#EF6C00" data-tag="fon" data-val="#EF6C00" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#C62828" data-tag="fon" data-val="#C62828" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#6A1B9A" data-tag="fon" data-val="#6A1B9A" class="js-bb_color toolbar-color pointer"></div> </div> <div> <div style="background-color:#ECF0F1" data-tag="fon" data-val="#ECF0F1" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#CFD8DC" data-tag="fon" data-val="#CFD8DC" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#B0BEC5" data-tag="fon" data-val="#B0BEC5" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#97A6B0" data-tag="fon" data-val="#97A6B0" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#546E7A" data-tag="fon" data-val="#546E7A" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#44565E" data-tag="fon" data-val="#44565E" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#3A474C" data-tag="fon" data-val="#3A474C" class="js-bb_color toolbar-color pointer"></div></div>'
                })

            td1.appendChild(td1div)
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
                // @ts-ignore

                qs('#color-input').addEventListener('change', (a: any) => {
                    if (/^\#([A-Za-z0-9]{3}|[A-Za-z0-9]{6})$/i.test(a.target.value) || a.target.value === '') {
                        a.target.className = 'text-input'
                        _SETTINGS.bodystyleSetting.color = trim(a.target.value)
                        setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))
                        setStyles()
                        picker.set(_SETTINGS.bodystyleSetting.color)
                    } else {
                        a.target.className = 'text-input sp-input-error'
                    }
                })

                picker.enter()
                picker.set(_SETTINGS.bodystyleSetting.color)
                picker.on('change', (e: string) => {
                    const color = e.toUpperCase()
                    // @ts-ignore
                    qs('#color-input').value = '#' + color
                    // @ts-ignore
                    qs('input[name=color]').value = '#' + color
                    qs('.colorpicker-color').style.backgroundColor = '#' + color
                    _SETTINGS.bodystyleSetting.color = '#' + color
                    setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))
                    setStyles()
                })

                const colors: any = document.querySelectorAll('.js-bb_color')

                for (let color of colors) {
                    color.onclick = (e: any) => {
                        let value = e.target.getAttribute('data-val')
                        // @ts-ignore
                        qs('#color-input').value = value
                        // @ts-ignore
                        qs('input[name=color]').value = value
                        qs('.colorpicker-color').style.backgroundColor = value
                        _SETTINGS.bodystyleSetting.color = value
                        setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))
                        setStyles()
                        picker.set(value)
                    }
                }
            }, 100)
        }
    } catch (e) {
        error('Ошибка (setColor): ' + e)
    }
}