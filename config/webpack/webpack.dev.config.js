const path = require("path");
const webpack = require("webpack");
const open = require('opn');//打开浏览器
const chalk = require('chalk');// 改变命令行中输出日志颜色插件
const config = require('./webpack.base.config')('dev');
const appConfig = require('./../../app.config');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')


config.plugins = (config.plugins || []).concat([
    // 全局开启代码热替换
    new webpack.HotModuleReplacementPlugin(),
    // 跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误
    new webpack.NoEmitOnErrorsPlugin(),
    // 友好的终端错误显示方式
    new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
            messages: [`You application is running here http://${appConfig.appIp}:${appConfig.appPort}`],
            notes: ['额外注释']
          }
    }),
])

config.optimization = {
    // webpack4.x 新增配置项
  splitChunks: {
      cacheGroups:{
        vendors: { 
          test: /node_modules\//,
          name: 'vendor',
          priority: 10,
          enforce: true,
          chunks: 'initial', // 只对入口文件处理
        },
        commons: {
          minChunks: 2,//最少有两个文件共用的代码
          name: 'commons',
          enforce: true,
          chunks: 'all', // 针对所有文件
        }
      }
  },
  runtimeChunk: {
      name: 'manifest'
  },
}

config.devServer = {
    port: appConfig.appPort,
    contentBase: path.resolve(__dirname, '../../dist'),
    historyApiFallback: true,
    host: appConfig.appIp,
    overlay:true,
    hot:true,
    inline:true,
    after(){
        open(`http://${this.host}:${this.port}`)
        .then(() => {
            console.log(chalk.cyan(`http://${this.host}:${this.port} 已成功打开`));
        })
        .catch(err => {
            console.log(chalk.red(err));
        });
    }
}

module.exports = config
