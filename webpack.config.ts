import path from 'path'
import webpack from 'webpack'
import WebpackUserscript from 'webpack-userscript'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import userscriptConfig from './userscript.config'

const outputPath = path.resolve(__dirname, 'dist')
const fileName = userscriptConfig.scriptFileName
const isDev = process.env.NODE_ENV === 'development'
const PORT = 8080
const HTTPS = false

const devServerOpenPage: string[] = (() => {
    const pages: string[] = []
    if (userscriptConfig.openScriptInstallPage) {
        pages.push(`${HTTPS ? 'https' : 'http'}://localhost:${PORT}/${fileName}.proxy.user.js`)
    }
    if (userscriptConfig.openTargetPage) {
        pages.push(userscriptConfig.openTargetPage)
    }
    return pages
})()

const config: webpack.Configuration = {
    mode: 'production',
    entry: path.join(__dirname, 'src/index.ts'),
    output: {
        path: outputPath,
        filename: `${fileName}.js`
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env']
                        ]
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    optimization: {
        minimize: !isDev
    },
    devServer: {
        https: HTTPS,
        port: PORT,
        writeToDisk: true,
        contentBase: outputPath,
        open: !!(userscriptConfig.openTargetPage && userscriptConfig.openScriptInstallPage),
        openPage: devServerOpenPage,
        hot: false,
        inline: false,
        liveReload: false
    },
    plugins: [
        new CleanWebpackPlugin(),
        new WebpackUserscript({
            headers: userscriptConfig.scriptHeaders,
            pretty: isDev
        })
    ]
}

export default config