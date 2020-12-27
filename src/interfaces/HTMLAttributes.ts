interface HTMLAttributes extends EventHandlersType {
    alt?: string
    async?: boolean
    accept?: string
    autoComplete?: 'on' | 'off'
    autoFocus?: boolean
    autoPlay?: boolean
    capture?: boolean | string
    cellPadding?: number | string
    cellSpacing?: number | string
    className?: string
    checked?: boolean
    cols?: number
    colSpan?: number
    controls?: boolean
    coords?: string
    defer?: boolean
    disabled?: string | boolean
    download?: string
    encType?: string
    form?: string
    formAction?: string
    formEncType?: string
    formMethod?: string
    formNoValidate?: boolean
    formTarget?: string
    height?: number | string
    htmlFor?: string
    href?: string
    id?: string
    innerHTML?: string
    label?: string
    loop?: boolean
    max?: number | string
    maxLength?: number
    media?: string
    mediaGroup?: string
    method?: string
    min?: number | string
    minLength?: number
    multiple?: boolean
    muted?: boolean
    name?: string
    pattern?: string
    placeholder?: string
    readOnly?: boolean
    rel?: string
    required?: boolean
    reversed?: boolean
    rows?: number
    rowSpan?: number
    sandbox?: string
    scope?: string
    scoped?: boolean
    selected?: boolean
    shape?: string
    size?: number
    sizes?: string
    span?: number
    src?: string
    start?: number
    step?: number | string
    summary?: string

    // recentSmiles.ts
    smile?: any

    target?: string
    title?: string
    type?: inputType
    value?: string | string[] | number
    width?: number | string
}

type inputType =
    'button' | 'checkbox' | 'color' | 'date' | 'datetime' | 'email' | 'file' |
    'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' |
    'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' |
    'text/javascript' | 'text/css'

type CSSStyle = {
    [key in keyof CSSStyleDeclaration]?: string | number
}

type EventHandlersType = {
    [key in keyof GlobalEventHandlers]?: Function
}

interface IAttributes extends HTMLAttributes {
    style?: CSSStyle
}

type createElementType = (
    tag: keyof HTMLElementTagNameMap,
    attributes?: IAttributes
) => HTMLElementTagNameMap[typeof tag]

export {
    CSSStyle,
    createElementType
}