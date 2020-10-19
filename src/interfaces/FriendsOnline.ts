
export interface Link {
    URL: string
    callstack: string
    text?: any
}

export interface BackLine {
    links: Link[]
    new: string
}

export interface IconSizes {
    LARGE: string
    MEDIUM: string
    SMALL: string
}

export interface Text {
    alt?: any
    arrow_color?: any
    bgcolor?: any
    bold: string
    border_color?: any
    caption?: any
    color?: any
    counter?: any
    has_arrow: string
    header_level: string
    icon: string
    icon_size: string
    icon_sizes: IconSizes
    is_block: string
    is_bordered: string
    is_description: string
    is_header: string
    is_list_item: string
    is_single: string
    new_counter?: any
    online_counter?: any
    right_text?: any
    show_mobile_icon: string
    sprite?: any
    sub_text: string
    text: string
    title?: any
}

export interface Item {
    action?: any
    add_text?: any
    align?: any
    bgcolor?: any
    checkbox_view?: any
    color: string
    data?: any
    dd_menu_id?: any
    deny_preload?: any
    disable_reason?: any
    is_apart: string
    is_button: string
    is_completed: string
    is_disabled: string
    is_dotted: string
    is_final: string
    is_list_item: string
    is_selected: string
    is_single: string
    no_ajax?: any
    no_border: string
    no_follow: string
    only_icon?: any
    replace_widget?: any
    sublink?: any
    target_blank?: any
    text: Text
    url: string
}

export interface BottomLinks {
    empty_list_text: string
    id?: any
    items: Item[]
    lines_limit?: any
    on_page?: any
    separate_items?: any
    split_items?: any
}

export interface HttpEquivTag {
    content: string
    http_equiv: string
}

export interface PropertyTag {
    content: string
    property: string
}

export interface MetaTags {
    canonical_URL: string
    http_equiv_tags: HttpEquivTag[]
    name_tags: any[]
    property_tags: PropertyTag[]
}

export interface RenderModes {
    BUTTON: string
    INPUT: string
}

export interface SearchFW {
    in_search?: any
    main_submit_name: string
    maxlength: string
    name: string
    placeholder: string
    query?: any
    render_mode: string
    render_modes: RenderModes
    search_query_url?: any
    section?: any
}

export interface FieldsWidgets {
    searchFW: SearchFW
}

export interface HiddenField {
    name: string
    value: string
}

export interface LsModes {
    NONE: string
    RESET: string
    USE: string
}

export interface SearchForm {
    action: string
    fields_widgets: FieldsWidgets
    hidden_fields: HiddenField[]
    ls_mode: string
    ls_modes: LsModes
    main_submit_name: string
    method: string
    no_ajax: string
    search_query_url?: any
}

export interface Modes {
    SOLID: string
    SUB_SWITCHER_BLOCK: string
    SUB_SWITCHER_INLINE: string
    SWITCHER: string
    TABS: string
}

export interface Size {
    height: string
    strict: string
    width: string
}

export interface Avatar {
    adult: string
    defer_fetch: string
    dir_id: string
    downloadLinkSSL: string
    extType: string
    external_video: string
    fileext: string
    filename: string
    full_screen?: any
    my: string
    nid: string
    partial: string
    previewURL: string
    preview_alt?: any
    preview_token: string
    ratio: string
    resolution: string
    show_cross_btn?: any
    show_gif: string
    show_name: string
    size: Size
    text_is_meaningful: string
    type: string
}

export interface Genders {
    FEMALE: string
    MALE: string
}

export interface IconSizes2 {
    LARGE: string
    MEDIUM: string
    SMALL: string
}

export interface OnlineLabel {
    alt?: any
    arrow_color?: any
    bgcolor?: any
    bold: string
    border_color?: any
    caption?: any
    color: string
    counter?: any
    has_arrow: string
    header_level: string
    icon?: any
    icon_size?: any
    icon_sizes: IconSizes2
    is_block: string
    is_bordered: string
    is_description: string
    is_header: string
    is_list_item: string
    is_single: string
    new_counter?: any
    online_counter?: any
    right_text?: any
    show_mobile_icon: string
    sprite?: any
    sub_text?: any
    text: string
    title?: any
}

export interface OnlineStatus {
    alt: string
    id: string
    is_online: string
    last_time: string
    no_link: string
    off_img: string
    on_img: string
    system: string
}

export interface PreviewSizes {
    ACTIVE_ATTACH: string
    ALW_128_SQ: string
    AVATAR_SQ: string
    CATALOG_ITEM: string
    COMM_LOGO_SQ: string
    LARGE: string
    LARGE_MONO_W: string
    MEDIUM: string
    MEDIUM_MONO_W: string
    MEDIUM_RS: string
    MEDIUM_SQ: string
    MICRO: string
    MILLI: string
    NANO_SQ: string
    SMALL: string
    SMALL_MONO_W: string
    SMALL_SQ: string
    TILE: string
    XLARGE: string
    XLARGE_SQ: string
    XMEDIUM: string
}

export interface WidgetsModes {
    ALONG: string
    APART: string
    BORDERED: string
    LIST_ITEM: string
    MINIMIZED: string
    SINGLE: string
    SUBLINK: string
    TILED: string
}

export interface List {
    arrow: string
    avatar: Avatar
    blocked: string
    can_delete?: any
    chat?: any
    chatState?: any
    disabled: string
    error?: any
    frozen: string
    gender: string
    genders: Genders
    grant: string
    id: string
    is_online: string
    lastVisit: string
    last_time: string
    mail_invite_info?: any
    mail_talk_creator?: any
    mail_talk_inactive?: any
    moder_info?: any
    mysiteURL: string
    name: string
    online_label: OnlineLabel
    online_status: OnlineStatus
    preview_size: string
    preview_sizes: PreviewSizes
    real_name: string
    showViewer?: any
    sort_value?: any
    status?: any
    widgets_mode: string
    widgets_modes: WidgetsModes
}

export interface IconSizes3 {
    LARGE: string
    MEDIUM: string
    SMALL: string
}

export interface Text2 {
    alt?: any
    arrow_color?: any
    bgcolor?: any
    bold: string
    border_color?: any
    caption?: any
    color?: any
    counter?: any
    has_arrow: string
    header_level: string
    icon: string
    icon_size: string
    icon_sizes: IconSizes3
    is_block: string
    is_bordered: string
    is_description: string
    is_header: string
    is_list_item: string
    is_single: string
    new_counter?: any
    online_counter?: any
    right_text?: any
    show_mobile_icon: string
    sprite?: any
    sub_text?: any
    text: string
    title?: any
}

export interface WhoSeeLink {
    action?: any
    add_text?: any
    align?: any
    bgcolor?: any
    checkbox_view?: any
    color?: any
    data?: any
    dd_menu_id?: any
    deny_preload?: any
    disable_reason?: any
    is_apart: string
    is_button: string
    is_completed: string
    is_disabled: string
    is_dotted: string
    is_final: string
    is_list_item: string
    is_selected: string
    is_single: string
    no_ajax?: any
    no_border: string
    no_follow: string
    only_icon?: any
    replace_widget?: any
    sublink?: any
    target_blank?: any
    text: Text2
    url: string
}

export interface IconSizes4 {
    LARGE: string
    MEDIUM: string
    SMALL: string
}

export interface Text3 {
    alt?: any
    arrow_color?: any
    bgcolor?: any
    bold: string
    border_color?: any
    caption?: any
    color?: any
    counter?: any
    has_arrow: string
    header_level: string
    icon: string
    icon_size?: any
    icon_sizes: IconSizes4
    is_block: string
    is_bordered: string
    is_description: string
    is_header: string
    is_list_item: string
    is_single: string
    new_counter?: any
    online_counter?: any
    right_text?: any
    show_mobile_icon: string
    sprite?: any
    sub_text?: any
    text: string
    title?: any
}

export interface Item2 {
    action?: any
    add_text?: any
    align?: any
    bgcolor?: any
    checkbox_view?: any
    color: string
    data?: any
    dd_menu_id?: any
    deny_preload?: any
    disable_reason?: any
    is_apart: string
    is_button: string
    is_completed: string
    is_disabled: string
    is_dotted: string
    is_final: string
    is_list_item: string
    is_selected: string
    is_single: string
    no_ajax?: any
    no_border: string
    no_follow: string
    only_icon?: any
    replace_widget?: any
    sublink?: any
    target_blank?: any
    text: Text3
    url: string
}

export interface Content {
    borned_cnt: string
    is_owner: string
    list: List[]
    mode: string
    online: string
    pagination: string
    who_see_link: WhoSeeLink
    empty_list_text: string
    id?: any
    items: Item2[]
    lines_limit?: any
    on_page?: any
    separate_items?: any
    split_items?: any
}

export interface Tab {
    content: Content
    count: string
    selected: string
    title: string
    url: string
}

export interface TabbedPanel {
    mode: string
    modes: Modes
    tabs: Tab[]
    title?: any
}

export interface FriendsOnline {
    back_line: BackLine
    bottom_links: BottomLinks
    code: string
    device_type: number
    hits: number
    is_owner: string
    meta_tags: MetaTags
    revision: string[]
    search_form: SearchForm
    tabbed_panel: TabbedPanel
}