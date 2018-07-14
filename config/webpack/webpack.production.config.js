const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const config = require('./webpack.base.config')('prod');
const appConfig = require('./../../app.config');

config.optimization={
    splitChunks: {
        chunks: 'initial', // 只对入口文件处理
        cacheGroups:{
            vendors: {
                test: /node_modules\//,
                name: 'vendor',
                priority: 10,
                enforce: true,
            },
        }
    },
    runtimeChunk: {
        name: 'manifest'
    },
    minimizer: [ // 用于配置 minimizers 和选项
        new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true // set to true if you want JS source maps
        }),
        new OptimizeCSSAssetsPlugin({})
    ]
}

config.plugins = (config.plugins || []).concat([
    new webpack.HashedModuleIdsPlugin(),// 实现持久化缓存
    new MiniCssExtractPlugin({
        filename: "assets/styles/[name].[hash].css",
        chunkFilename: "assets/styles/[name].[hash].css"
    })
])

module.exports = config