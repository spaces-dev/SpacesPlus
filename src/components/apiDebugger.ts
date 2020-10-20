import { ce, qs } from '../utils'

export const apiDebugger = () => {
    if (!qs('#spaces_api_debugger')) {
        let init = ce('script', {
            type: 'text/javascript',
            html: 'var Arr=[\'<div class="time-block" style="text-align: left; padding: 4px; background: #cddae7; border-bottom: 1px solid #a7b4c7;" id="spaces_api_debugger"><a href="#" id="api_debug-button" style="color: #0e3c87; margin-left: 5px"><span class="ico_cats" style="background-position: -55px -54px;margin: 0 4px -4px 0;"></span> Debugger</a><a href="https://spaces-dev.github.io/api" style="color: #0e3c87; float: right" target="_blank">API Methods</a><div id="api_debug-place" style="display: none; margin-top: 5px"></div></div>\',"append","parent","#navi","debugger"];$(Arr[3])[Arr[2]]()[Arr[1]](Arr[0]),require(Arr[4]);void(0);'
        })
        document.getElementsByTagName('head')[0].appendChild(init)
    }
}