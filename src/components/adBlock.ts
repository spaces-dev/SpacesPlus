import { ce, qs, qsa, error } from '../utils'

export const adBlock = () => {
    try {

        // Удаляем всплывающую рекламу
        qsa('img[src$="static/i/close3.png"]').forEach(e => e.parentElement?.parentElement?.remove())

        // Удаляем рекламу по атрибуту title
        qsa('a[title="Реклама"').forEach(e => e.parentElement?.remove())

        // Удаляем виджет ВК в правой панели
        qsa('#vk_groups').forEach(e => e.parentElement?.remove())

        // Прототипируем XMLHttpRequest для блокировки рекламы
        if (!qs('#SP_PLUS_ADBLOCK')) {
            let protoAd = ce('script', {
                type: 'text/javascript',
                id: 'SP_PLUS_ADBLOCK',
                html: 'var rawOpen = XMLHttpRequest.prototype.open; XMLHttpRequest.prototype.open = function() { if (!this._hooked) { this._hooked = true; setupHook(this); }; rawOpen.apply(this, arguments); }; function setupHook(xhr) { function getter() { delete xhr.responseText; var ret = xhr.responseText; var json = JSON.parse(ret); json.reklama = ""; json.rightbar_reklama = ""; json.rightbar_app = ""; json.sidebar_reklama = ""; ret = JSON.stringify(json); setup(); return ret; }; function setup() { Object.defineProperty(xhr, "responseText", { get: getter, configurable: true }); } setup(); };'
            })
            document.getElementsByTagName('head')[0].appendChild(protoAd)
        }
    } catch (e) {
        error('Ошибка (adBlock.ts): ' + e)
    }
}