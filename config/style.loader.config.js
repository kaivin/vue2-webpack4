const postcss = require('./postcss.config')()
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * 组装 .css, .scss, .less 相关 loader 配置
 * @param {string} env 环境，可能的值prod|dev
 * @return {object} 配置
 **/
module.exports = function (env) {
  const config = [
      {// 编译css
        test: /\.css$/,
        use: [
            env === 'prod'?MiniCssExtractPlugin.loader:{loader: 'style-loader'},
            {
                loader: 'css-loader'
            },{
                loader: 'postcss-loader',
                options: {
                    sourceMap: true,
                    postcss,
                }
            }
        ]
    },
    {// 编译scss
        test: /\.scss$/,
        use: [
            env === 'prod'?MiniCssExtractPlugin.loader:{loader: 'style-loader', },
            {
                loader: 'css-loader', 
            },
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true,
                    parser: 'postcss-scss',
                    postcss,
                }
            },
            {
                loader: 'sass-loader', 
                options: { sourceMap: true }
            }
        ],
        exclude: /node_modules/
    },
    {// 编译less
        test: /\.less$/,
        use: [
            env === 'prod'?MiniCssExtractPlugin.loader:{loader: 'style-loader', },
            {
                loader: 'css-loader', 
                options: {
                    importLoaders: 1,
                }
            },
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true,
                    parser: 'postcss-less',
                    postcss,
                }
            },
            {
                loader: 'less-loader', 
                options: { 
                    sourceMap: true,
                }
            }
        ]
    },
  ]
  return config
}