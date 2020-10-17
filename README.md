Configure you browser: Chrome
-----------------------------

1. enable insecure localhost: navigate to `chrome://flags/#allow-insecure-localhost`, enable insecure localhost
2. enable file url access of extensions: navigate to `chrome://extensions/?id=dhdgffkkebhmkfjojejmpbldmpobfkfo`(Chrome manage extensions page of `Tampermonkey`) and enable `Allow access to file URLs` (you need to manual reload page when dev userscript, see [#475](https://github.com/Tampermonkey/tampermonkey/issues/475#issuecomment-348594785) for more detail)

Development
-----------

1. install dependencies by run `npm i`
2. open dev server by run `npm run dev`
3. open `https://127.0.0.1/[userscript-name].proxy.user.js` in browser(click  `Advanced` -> `proceed` if it shows a security warning ) to install the proxy script. by setting `openScriptInstallPage` to true in `userscript.config.ts` it will open that page automatically for you.
4. open your target webpage to see the effect. by setting `openTargetPage` to as your target url in `userscript.config.ts` it will open that page automatically for you.
5. config userscript by modifying `userscript.config.ts`, you need to rerun `npm run dev` to make it take effect
6. config webpack by modifying `webpack.config.ts`, you need to rerun `npm run dev` to make it take effect
7. dev code in `src` folder, reload your target webpage after userscript changed

Build
-----

run cmd `npm run build`, your userscript should be in `dist` folder with extension `.user.js`