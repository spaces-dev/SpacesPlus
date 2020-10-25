import { ce, qs } from '../utils'

export const apiDebugger = (b: boolean) => {
    if (b && !qs('#spaces_api_debugger')) {
        let init = ce('script', {
            type: 'text/javascript',
            html: 'var Arr=[\'<div class="widgets-group widgets-group_top js-container__block" id="spaces_api_debugger"><div class="content"><a href="#" class="stnd-link list-link-blue c-blue" id="api_debug-button"><div class="text-gray"><span class="sp"></span><span class="t darkblue c-darkblue b js-text" style="margin-left: 5px">API Debugger</span></div></a><div id="api_debug-place"></div></div></div>\',"append","parent","#location_header","debugger"];$(Arr[3])[Arr[2]]()[Arr[1]](Arr[0]),require(Arr[4]);void(0);'
        })
        document.getElementsByTagName('head')[0].appendChild(init)
    }
}