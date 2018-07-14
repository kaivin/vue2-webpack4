# 配置 vue

在 `webpack4.x` 中我们已经安装了 `vue` 以及 `vue-router` 插件，此次又是基于 `webpack4.x` 做进一步配置，所以不再重复安装，只是配置 `vue`，还需要其他的一些基础插件。

首先安装相关插件
```
npm install vue-loader vue-style-loader vue-template-compiler -D
```

插件安装完成后，首先需要做的是配置 `vue-loader`， `webpack4.x`对于 `vue-loader` 有特殊配置，在 `webpack.base.config.js`中添加如下代码：

```
const { VueLoaderPlugin } = require('vue-loader');
// 插件配置项
    plugins: [
        new VueLoaderPlugin(),
    ]
```

## 配置 `vue-loader`

`vue-loader` 主要针对 `.vue` 后缀的文件， `.vue` 后缀文件的模板内容如下：

```
<template>

</template>

<script>

</script>

<style lang="scss">

</style>
```

* `template` 标签内主要是写 `html` 代码的部分，需要注意的是，只允许有一个顶级父标签，也就是`template`只允许有一个子级
* `script` 没什么好说的，`vue` 的 `js` 代码都在这里
* `style` 这个就是样式的部分，需要注意的是，`lang` 代表所使用的处理器 可以是 `css` `scss` `less` `postcss` 等，还有一个值得一说的是，`scoped` 表明 `style` 里的`css` 样式只适用于当前组件元素 

示例：

```
<template>
  <div class="example">hi</div>
</template>

<style scoped>
.example {
  color: red;
}
</style>
```

渲染结果：

```

<template>
  <div class="example" data-v-f3f3eg9>hi</div>
</template>

<style>
.example[data-v-f3f3eg9] {
  color: red;
}
</style>
```

### 关于子组件的根元素

使用了`scoped`属性之后，父组件的`style`样式将不会渗透到子组件中，然而子组件的根节点元素会同时被设置了`scoped`的父`css`样式和设置了`scoped`的子`css`样式影响，这么设计的目的是父组件可以对子组件根元素进行布局。 

`.vue`模板中的样式是根据需要按需加载，访问一个页面该组件中的样式就会追加到`head`标签中，如果父子组件中都对某个子组件根节点元素进行了控制，则父组件里的样式会被后来的覆盖。

### 深选择器

如果想对设置了`scoped`的子组件里的元素进行控制可以使用`>>>`或者`deep`

```
<template>
  <div id="app">
    <gHeader></gHeader>
  </div>
</template>

<style lang="css" scoped>
  .gHeader /deep/ .name{ //第一种写法
    color:red;
  }
  .gHeader >>> .name{   //二种写法
    color:red;
  }
</style>
```

```
// 子组件
<div class="gHeader">
  <div class="name"></div>
</div>
```

一些预处理程序例如`sass`不能解析`>>>`属性，这种情况下可以用`deep`，它是`>>>`的别名，工作原理相同。

当然一个 `.vue` 文件，可以有多个 `style` 可以分别设置不同的预处理，不同的使用范围

### 动态生成的内容

使用`v-html`动态创建的`DOM`内容，不受设置`scoped`的样式影响，但你依然可以使用深选择器进行控制

**个人不建议使用scoped，甚至不建议使用页面内的 style，完全可以通过在script中引用外部样式文件**

虽然不建议使用，但是配置里还是要做相关配置来处理这些样式的

新建 `config/vue-loader.config.js` 文件，添加如下代码：

```
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
```

上面的代码如果细心，会发现在引用了`postcss.config.js` 后，设置了这样的一段代码：

```
options:{parser: 'postcss-scss'}
```

这在我们之前的`postcss.config.js`是已经存在的

这里需要说明，之前的配置是错误的，`parser` 这一项是指以什么类型的语言作为解析器，之前我们把这一项配置在`postcss.config.js` 中，却在针对`.css`,`.scss`,`.less`的`loader`中都引用了这个文件，这本身就是错误的，这里需要分别设置，而`.vue`中，本项目会统一使用 `scss`样式，所以这里设置成 `postcss-scss`，至于具体有哪些解析语言，可以看[这里][1]

那么在修改之前配置的`postcss-loader`前，可以先看一下该`loader`的`options` 可以看[这里][2]

我们之前用的是 `config.path`，那么这里我们首先要修改`postcss.config.js` 文件，代码如下：

```
module.exports = function (){
  const posts={
    plugins: [
      require('precss'),
      require('autoprefixer')({ 
        browsers: ['> 0.1%','last 7 iOS versions', 'last 5 versions',] 
      })
    ]
  }
  return posts
}
```

这样该文件就只是针对`postcss`所使用的插件，可以做到共用

我们把样式相关的`loader`提取出来，单独写一个文件`config/style.loader.config.js`，代码如下：

```
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
```

再删除`webpack.dev.config.js`以及`webpack.production.config.js` 中关于样式`loader`的配置

然后修改`webpack.base.config.js` 文件，并在`resolve.extensions`中配置`.vue`后缀可省略，代码如下：

```
/**
 * webpack基础配置
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const appConfig = require('./../../app.config');
const { VueLoaderPlugin } = require('vue-loader');
const getStyleLoaderConfig = require('./../style.loader.config');
const getVueLoaderConfig = require('./../vue-loader.config')


// 加载应用工程的webpack配置,例如entry等
const webpackAppConfig = appConfig.webpack

// 版本号
const appVersion = new Date().getTime()

// 获取当前目录的绝对路经 process.cwd() node.js的方法，相当于__dirname
function resolve(dir) {
  return path.resolve(process.cwd(), dir)
}

// 网站图标
const favicon = path.resolve(process.cwd(), 'favicon.ico')

module.exports = function (env) {
  const styleLoaderConfig = getStyleLoaderConfig(env)
  const vueLoaderConfig = getVueLoaderConfig(env) 
  const config = {
    // 入口模块配置
    entry: appConfig.webpack.entry,
    // 输出模块配置
    output: {
      // 输出到这个目录下
      path: env === "prod" ? path.resolve(__dirname,"../../bin") : path.resolve(__dirname,"../../dist"),
      // 生成的文件名, [name] 即为entry配置中的key
      filename: env === "prod" ? 'js/[name].[chunkhash].js' : 'js/[name].[hash].js',
      // 异步模块文件名
      chunkFilename: 'js/[name].[chunkhash].js',
      // 全局公共路径
      publicPath: '/'
    },
    // 开发工具
    devtool: env === "prod" ? false : 'cheap-module-source-map',
    // webpack4.x 环境配置项
    mode: env === "prod" ? "production" : "development",
    // 加载器 loader 配置项
    module:{
        rules:[
            {
                test: /\.vue$/,
                include: [resolve('src')],
                use: [vueLoaderConfig],
            },
            {// babel配置
                test: /\.(js|jsx)$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.resolve(__dirname, '../../src')
            },
            {// 图片依赖配置
              test: /\.(png|jp?g|gif|svg)$/,
              use: [
                  {
                      loader: 'url-loader',
                      options: {
                          limit: 8192,        // 小于8192字节的图片打包成base 64图片
                          name:'assets/images/[name].[hash:8].[ext]',
                          publicPath:''
                      }
                  }
              ]
            },{// 文件依赖配置项——字体图标
                test: /\.(woff|woff2|svg|eot|ttf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 8192, 
                        name: 'assets/fonts/[name].[ext]?[hash:8]',
                        publicPath:''
                    },
                }],
            }, {// 文件依赖配置项——音频
                test: /\.(wav|mp3|ogg)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 8192, 
                        name: 'assets/audios/[name].[ext]?[hash:8]',
                        publicPath:''
                    },
                }],
            }, {// 文件依赖配置项——视频
                test: /\.(ogg|mpeg4|webm)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 8192, 
                        name: 'assets/videos/[name].[ext]?[hash:8]',
                        publicPath:''
                    },
                }],
            }, 
        ].concat(styleLoaderConfig).concat(webpackAppConfig.rules || []),
    },
    // 插件配置项
    plugins: [
      new CleanWebpackPlugin(
        env === "prod" ? ['bin'] : ['dist'],
        {
            root: path.resolve(__dirname, '../../'),  // 根目录
            verbose: true,        　　　　　　　　　　 // 开启在控制台输出信息
            dry: false        　　　　　　　　　　     // 启用删除文件
        }
      ),// 删除 dist/bin 文件夹
      new HtmlWebpackPlugin({
          filename: 'index.html',// 输出文件的名称
          template: appConfig.htmlTemplate,// 模板文件的路径
          title: appConfig.htmlTitle,// 配置生成页面的标题
          minify:{
              removeRedundantAttributes:true, // 删除多余的属性
              collapseWhitespace:true, // 折叠空白区域
              removeAttributeQuotes: true, // 移除属性的引号
              removeComments: true, // 移除注释
              collapseBooleanAttributes: true // 省略只有 boolean 值的属性值 例如：readonly checked
          },
          favicon,
          appVersion
      }),
      new VueLoaderPlugin(),
    ],
    // 寻找模块时的一些缺省设置
    resolve: {
        // 设置可省略文件后缀名
        extensions: [' ','.js','.json','.jsx','.vue'],
        // 查找 module 的话从这里开始查找;
        modules: [path.resolve(__dirname, "../../src"), path.resolve(__dirname, "../../node_modules")], // 绝对路径;
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            '@config': resolve('../config'),
            'views': path.resolve(__dirname, '../../src/views'),
            'components': path.resolve(__dirname, '../../src/components')
        }
    },
  }
  return config
}
```

这样的配置就是正确的了，针对`.less` 使用 `postcss-less` 作为解析器，当然这里之前没有下载这个插件，所以还需要下载这个插件才行

```
npm install postcss-less -D
```

`vue` 相关的`webpack`配置算是完成，下一章将做一个简单的测试


[1]:https://github.com/postcss/postcss/blob/HEAD/README-cn.md  "postcss配置语法"
[2]:https://github.com/postcss/postcss-loader  "post-loader配置"