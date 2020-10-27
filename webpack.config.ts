import url from 'url'
import path from 'path'
import webpack from 'webpack'
import WebpackUserscript from 'webpack-userscript'
import userscriptConfig from './userscript.config'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const outputPath = path.resolve(__dirname, 'dist')
const fileName = userscriptConfig.scriptFileName
const isDev = process.env.NODE_ENV === 'development'
const isChrome = false
const PORT = 8080

const config: webpack.Configuration = {
    mode: isDev ? 'development' : 'production',
    entry: path.join(__dirname, 'src/main.ts'),
    output: {
        path: outputPath,
        filename: `${fileName}.js`
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.(ts|js)$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    optimization: {
        minimize: !isDev,
        minimizer: [
            new OptimizeCSSAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano')
            })
        ]
    },
    devServer: {
        https: true,
        port: PORT,
        headers: { 'Access-Control-Allow-Origin': '*' },
        writeToDisk: true,
        contentBase: outputPath,
        hot: false,
        inline: false,
        liveReload: false
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'resources/'
                }
            ]
        }),
        new WebpackUserscript({
            headers: userscriptConfig.scriptHeaders,
            proxyScript: {
                // file:/// using for Google Chrome else https:// for Mozilla Firefox
                baseUrl: isChrome ?
                    `${url.pathToFileURL(outputPath)}` :
                    `https://localhost:${PORT}`,
                enable: isDev
            }
        })
    ]
}

export default config