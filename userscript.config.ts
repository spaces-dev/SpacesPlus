import WebpackUserscript from 'webpack-userscript'
import pkg from './package.json'

const dev = process.env.NODE_ENV === 'development'
const path = dev ? 'https://localhost:8080' : pkg.homepage

interface IWebpackUserScript {
    /* development mode */
    isDev: boolean

    /* current development browser */
    isChrome: boolean

    /* development homepage path */
    devPath: string

    /* http port */
    devPort: number

    /** script file name, without file extension */
    scriptFileName: string

    /** 
     * userscript headers
     * including script name, description, match url, grants and so on
     * see https://www.tampermonkey.net/documentation.php for details
     **/
    scriptHeaders: WebpackUserscript.WPUSOptions['headers']
}

export const UserScriptConfig: IWebpackUserScript = {
    isDev: dev,
    isChrome: true,
    devPath: path,
    devPort: 8080,
    scriptFileName: pkg.name,
    scriptHeaders: {
        name: 'Spaces+',
        description: pkg.description,
        version: pkg.version,
        author: pkg.author.name,
        namespace: pkg.homepage,
        icon: `${path}/icons/logo_96.png`,
        include: '/^(http|https):\/\/(spaces\.ru|spac\.me|spcs\.me|spaces\.im|gdespaces\.com|spac1\.com|spac1\.net|spaces-blogs\.com).*$/',
        match: '*://(spaces.ru|spac.me|spcs.me|spaces.im|gdespaces.com|spac1.com|spac1.net|spaces-blogs.com)/*',
        homepageURL: 'https://github.com/spaces-dev/SpacesPlus',
        // https://spac.me/js/colorpicker.js
        require: `${path}/libs/colorpicker.js`,
        grant: 'none'
    }
}