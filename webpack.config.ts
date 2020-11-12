import url from 'url'
import path from 'path'
import WebpackUserscript from 'webpack-userscript'
import { UserScriptConfig } from './userscript.config'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const { isDev, isChrome, devPath, devPort, scriptFileName, scriptHeaders } = UserScriptConfig
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const ZipFilesPlugin = require('webpack-zip-files-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: path.join(__dirname, 'src/main.ts'),
    output: {
        path: outputPath,
        filename: `${scriptFileName}.js`
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
        port: devPort,
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
                    from: 'resources/',
                    to: outputPath
                }
            ]
        }),
        new WebpackUserscript({
            headers: scriptHeaders,
            proxyScript: {
                // file:/// using for Google Chrome else https:// for Mozilla Firefox
                baseUrl: isChrome ? `${url.pathToFileURL(outputPath)}` : devPath,
                enable: isDev
            }
        }),
        new ZipFilesPlugin({
            entries: [{ src: outputPath, dist: '/' }],
            output: path.join(outputPath, 'spaces-plus'),
            format: 'zip'
        })
    ]
}