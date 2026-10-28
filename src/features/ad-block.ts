import type { Feature } from '@/core/feature'
import { log } from '@/core/log'

const patch = `
var rawOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function() {
  if (!this._hooked) { this._hooked = true; setupHook(this); }
  rawOpen.apply(this, arguments);
};
function setupHook(xhr) {
  function getter() {
    delete xhr.responseText;
    var ret = xhr.responseText;
    try {
      var json = JSON.parse(ret);
      json.reklama = "";
      json.rightbar_reklama = "";
      json.rightbar_app = "";
      json.sidebar_reklama = "";
      ret = JSON.stringify(json);
    } catch (e) {}
    setup();
    return ret;
  }
  function setup() {
    Object.defineProperty(xhr, "responseText", { get: getter, configurable: true });
  }
  setup();
};
`

function cleanAds() {
  document.querySelectorAll('img[src$="static/i/close3.png"]').forEach((node) => {
    node.parentElement?.parentElement?.remove()
  })
  document.querySelectorAll('a[title="Реклама"]').forEach((node) => {
    node.parentElement?.remove()
  })
  document.querySelectorAll('#vk_groups, .rightbar__reklama, .rightbar__apps').forEach((node) => {
    node.remove()
  })
}

export const adBlock: Feature = {
  id: 'adblock',
  title: 'Скрывать рекламу',
  description: 'Функция полностью скрывает назойливую рекламу и не только.',
  start: (ctx) => {
    if (!document.getElementById('SP_PLUS_ADBLOCK')) {
      const script = document.createElement('script')
      script.id = 'SP_PLUS_ADBLOCK'
      script.textContent = patch
      document.head.append(script)
    }

    return ctx.onDom(() => {
      try {
        cleanAds()
      } catch (error) {
        log.error('adblock', error)
      }
    })
  },
}
