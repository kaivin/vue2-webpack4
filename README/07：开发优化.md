# friendly-errors-webpack-plugin

能够更好在终端看到webapck运行的警告和错误

```
npm i friendly-errors-webpack-plugin -D
```

修改`webapck.dev.config.js` 文件，添加引用：

```
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
```

然后在`config.plugin`中添加代码

```
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
```

# webpack-bundle-analyzer

可视化视图查看打包后所有组件与组件间的依赖关系，以及打包后各文件的大小

```
npm i webpack-bundle-analyzer -D
```

修改`webpack.base.config.js` 文件,添加引用：

```
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
```
并在 `plugins`中添加如下代码：

```
new BundleAnalyzerPlugin({
  //  是否在默认浏览器中自动打开报告
  openAnalyzer: false,
})
```

配置完成后，执行`npm start` 命令，运行完成后，终端最后会有`Webpack Bundle Analyzer is started at http://127.0.0.1:`这样的一句话，在浏览器打开这个链接，就可以看你的项目的打包情况

打开该文件，会发现，目前打包了4个文件最大的是`app-vendor`,但是这个文件是从何而来呢？其他三个文件，都可以找到来源，`vendor` 以及`app`是设置的入口文件名，`manifest` 则是`webpack4` 配置的拆分代码时的`runtimeChunk`生成的，那么`app-vendor`同样来至于`webpack4`的拆分代码生成的


我们之前的`optimization.splitChunks`是这么写的：

```
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
```

这里我们在`splitChunks`下，除了缓存组`cacheGroups`，还定义了`chunks: 'initial'`,`app-vendor`就来源于它，现在想要一切可控，这里就需要有修改，把这个配置移到缓存组`vendors`内：

```
splitChunks: {
      cacheGroups:{
        vendors: { 
          test: /node_modules\//,
          name: 'vendor',
          priority: 10,
          enforce: true,
          chunks: 'initial', // 只对入口文件处理
        },
      }
  },
```

再次执行命令 `npm start` 打开打包视图链接，再次查看，会发现`app-vendor`文件已经不存在了，但是又出现了新问题，打包出来的`app`以及`vendor`文件中，有大部分是重复的第三方库的代码，这就造成了大量的代码冗余，这里只是单页面应用，还只拆分出了两个`js`文件，如果后期拆分更多文件，那么造成的冗余将会使项目变的非常非常大，所以我们需要配置一个公共的文件，来提取这些所有页面都用得到的部分，就需要一个新的缓存组：

```
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
```

以上是针对`webpack.dev.config.js`以及`webpack.production.config.js` 文件同时修改的

此时再次执行命令 `npm start` 打开打包视图链接，可以发现，所有公用代码都被提取到了`commons`文件内

代码打包这一块算是已经修改完成了，但是还有一个问题，这里我们拆分出了4个`js`文件，需要有个明确的引入的顺序，根据优先级顺序，这4个文件的引入顺序应该是：

`manifest,commons,vendor,app`，但是打开浏览器，查看源代码，会发现，它并不是按照这个顺序去加载，这可能会导致部分代码或功能不能正常显示或操作，修改也简单，修改`app.config.js`文件的`entry`配置，修改下先后顺序即可

```
 entry: {
    vendor: ["vue",'vue-router','jquery','bootstrap/dist/js/bootstrap.bundle.min.js'], // 拆分框架代码
    app: path.resolve(__dirname, 'src/index.js'), // 入口
},
```
先加载的在上面，后加载的在下面，再次执行命令 `npm start`，查看页面源代码，`js`加载顺序一切正常~