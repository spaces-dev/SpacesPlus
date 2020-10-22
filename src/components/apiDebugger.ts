import { ce, qs } from '../utils'

export const apiDebugger = (b: boolean) => {
    if (b && !qs('#spaces_api_debugger')) {
        let init = ce('script', {
            type: 'text/javascript',
            html: 'var Arr=[\'<div style="margin: 10px; text-align: left; padding: 10px; background: #fff; box-shadow: 0px 3px 3px rgba(93,109,157,0.3)" id="spaces_api_debugger"><a href="#" id="api_debug-button" class="b">Debugger</a><a href="https://spaces-dev.github.io/api" class="b" style="float: right" target="_blank">API Methods</a><div id="api_debug-place" style="display: none"></div></div>\',"append","parent","#location_header","debugger"];$(Arr[3])[Arr[2]]()[Arr[1]](Arr[0]),require(Arr[4]);void(0);'
        })
        document.getElementsByTagName('head')[0].appendChild(init)
    }
}