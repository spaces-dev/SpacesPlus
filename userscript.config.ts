import WebpackUserscript from 'webpack-userscript'
import pkg from './package.json'

const isDev = process.env.NODE_ENV === 'development' ? 'https://localhost:8080' : pkg.homepage

interface IUserscriptConfig {
    /** script file name, without file extension*/
    scriptFileName: string
    /** 
     * user script headers
     *  including script name, description, match url, grants and so on
     *  see https://www.tampermonkey.net/documentation.php for details
     **/
    scriptHeaders: WebpackUserscript.WPUSOptions['headers']
}

const config: IUserscriptConfig = {
    scriptFileName: pkg.name,
    scriptHeaders: {
        name: 'Spaces+',
        description: pkg.description,
        version: pkg.version,
        author: pkg.author.name,
        namespace: pkg.homepage,
        icon: `${isDev}/icons/logo_96.png`,
        include: '/^(http|https):\/\/(spaces\.ru|spac\.me|spcs\.me|spaces\.im|gdespaces\.com|spac1\.com|spac1\.net|spaces-blogs\.com).*$/',
        match: '*://(spaces.ru|spac.me|spcs.me|spaces.im|gdespaces.com|spac1.com|spac1.net|spaces-blogs.com)/*',
        homepageURL: 'https://github.com/spaces-dev/SpacesPlus',
        // https://spac.me/js/colorpicker.js
        require: `${isDev}/libs/colorpicker.js`,
        grant: 'none'
    }
}

export default config