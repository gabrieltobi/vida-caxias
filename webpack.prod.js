const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

module.exports = merge(common, {
    output: {
        ...common.output,
        libraryTarget: 'umd'
    },
    plugins: [
        ...common.plugins,
        new StaticSiteGeneratorPlugin({
            crawl: true
        })
    ]
})