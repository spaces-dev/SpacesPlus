import type { Feature } from '../core/feature'

const script = 'var Arr=[\'<div class="widgets-group widgets-group_top js-container__block" id="spaces_api_debugger"><div class="content"><a href="#" class="list-link list-link-blue c-blue" id="api_debug-button"><div class="text-gray"><span class="sp"></span><span class="t darkblue c-darkblue b js-text" style="margin-left: 5px">API Debugger</span></div></a><div id="api_debug-place"></div></div></div>\',"append","parent","#location_header","debugger"];$(Arr[3])[Arr[2]]()[Arr[1]](Arr[0]),require(Arr[4]);void(0);'

export const apiDebugger: Feature = {
  id: 'apidebug',
  start: () => {
    if (document.getElementById('spaces_api_debugger')) return
    const node = document.createElement('script')
    node.id = 'SP_PLUS_API_DEBUG'
    node.textContent = script
    document.head.append(node)
  },
}
