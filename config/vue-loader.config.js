const postcss = require('./postcss.config')()
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * 组装vue-loader配置
 * @param {string} env 环境，可能的值prod|dev
 * @return {object} 配置
 **/
module.exports = function (env) {
  const config = {
    loader: 'vue-loader',
    options: {
      // 去除模板中的空格
      preserveWhitespace: false,
      // postcss配置,把vue文件中的样式部分,做后续处理
      postcss:{
        postcss,
        options:{parser: 'postcss-scss'}
      },
    },
  }
  // webpack打包时，提取css
  if (env === 'prod') {
    // 生产环境
    config.options.loaders = {
        css: [MiniCssExtractPlugin.loader,'css-loader'],
        scss: [MiniCssExtractPlugin.loader,'css-loader','scss-loader'],
    }
  } else {
    // 开发环境
    config.options.loaders = {
        css: ['vue-style-loader', 'css-loader'],
        scss: ['vue-style-loader', 'css-loader', 'scss-loader',],
    }
  }
  return config
}