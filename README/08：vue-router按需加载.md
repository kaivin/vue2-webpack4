# vue-router 按需加载（懒加载）

上一章已经将压缩打包的文件进行了一次优化，但是还是存在一个问题，由于是单页面应用，只有一个入口文件，当页面很多的时候，所有页面的代码全部都被打包到了这一个入口文件内，会导致这个文件变得非常大，影响加载速度

所以需要再次分包，所需要达到的目的是：跳转哪个页面加载哪个页面相关的代码，而要达到这个目的，需要修改路由文件`src/router/router.js`,需要把页面的引用方式修改一下：

```
const GoodsGroupManagement = () => import(/* webpackChunkName: 'GoodsGroupManagement' */ '@/views/Index/BaseSettings/GoodsGroupManagement')
const FlaseSaleSettings = () => import(/* webpackChunkName: 'FlaseSaleSettings' */ '@/views/Index/BaseSettings/FlaseSaleSettings')
const FilterPriceRangeSettings = () => import(/* webpackChunkName: 'FilterPriceRangeSettings' */ '@/views/Index/BaseSettings/FilterPriceRangeSettings')
const PageManagement = () => import(/* webpackChunkName: 'PageManagement' */ '@/views/Index/PageManagement')
const TemplateCenter = () => import(/* webpackChunkName: 'TemplateCenter' */ '@/views/Index/TemplateCenter')
```

这里的 `/* webpackChunkName: 'name' */` 代表这个页面所引用的 `js/css` 名字，如果多个引用这里使用同一个名字，那么这些页面的代码会被打包到一起

执行命令 `npm start`，会发现报错了，终端会显示出刚修改的这段代码有错误`Syntax Error` 语法错误，在这里的`import`语法是需要借助`babel`来转化的，所以需要安装一个插件：

```
npm i babel-plugin-syntax-dynamic-import -D
```

然后修改`.babelrc` 文件，将该插件配置到`plugins`中：

```
"plugins": [
        "transform-decorators-legacy",
        "syntax-dynamic-import",
        ["transform-runtime", {
            "helpers": false, 
            "polyfill": false, 
            "regenerator": true
        }]
    ]
```

再次执行命令 `npm start` 一切就都显示正常了~

但是这里我遇到了一个问题，通过`webpack`的`splitchucks`分包的`js` 文件是被引用到了页面的底部，而懒加载所拆分出来的`js`文件被引用到`head`里，虽然我的页面暂时没有报错，但感觉这始终是个问题，暂时未找到解决办法