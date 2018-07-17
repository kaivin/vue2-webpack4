# 配置 vue-router

新建 `src/router/router.js` 文件， 添加如下的代码：

```
import Vue from 'vue'
import VueRouter from 'vue-router'
const ProgressBar = require('progressbar.js')

import BaseSettings from '@/views/Index/BaseSettings'
import GoodsGroupManagement from '@/views/Index/BaseSettings/GoodsGroupManagement'
import FlaseSaleSettings from '@/views/Index/BaseSettings/FlaseSaleSettings'
import FilterPriceRangeSettings from '@/views/Index/BaseSettings/FilterPriceRangeSettings'

import PageManagement from '@/views/Index/PageManagement'
import TemplateCenter from '@/views/Index/TemplateCenter'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes:[
    {
        path: '/',
        name: 'BaseSettings',
        component: BaseSettings
    },
    {
        path: '/BaseSettings',
        name: 'BaseSettings',
        component: BaseSettings,
        children: [
        ]
    },
    {
        path: '/PageManagement',
        name: 'PageManagement',
        component: PageManagement
    },
    {
        path: '/TemplateCenter',
        name: 'TemplateCenter',
        component: TemplateCenter
    },
    {
        path: '/BaseSettings/GoodsGroupManagement',
        name: 'GoodsGroupManagement',
        component: GoodsGroupManagement
    },
    {
        path: '/BaseSettings/FlaseSaleSettings',
        name: 'FlaseSaleSettings',
        component: FlaseSaleSettings
    },
    {
        path: '/BaseSettings/FilterPriceRangeSettings',
        name: 'FilterPriceRangeSettings',
        component: FilterPriceRangeSettings
    },
  ]
})


// 响应式 SVG 进度条
let line = null

router.beforeEach((to, from, next) => {
  // 进度条开始
  if (line) line.destroy()
  line = new ProgressBar.Line('body', {
    color: '#007bff',
    strokeWidth: 0.2,
    svgStyle: {
      position: 'fixed',
      zIndex: '10001',
      top: 0,
      left: 0,
      right: 0,
      maxHeight: '2px'
    }
  })
  line.animate(0.8, {
    duration: 500
  })
  next()
})

router.afterEach((route) => {
  // 进度条结束
  if (line) {
    line.animate(1, {
      duration: 1000
    }, () => {
      line.destroy()
      line = null
    })
  }
})

export default router
```

这里路由相关页面，在第三章时让复制一份，此时可以把那些文件拷贝进来，主要包括`components`文件夹下`windows`所包含所有文件，`views/Index`下其他所有文件夹及其内容均可以拷贝过来, `(MockDataTest)` 除外

在这里有三个文件`GoodsGroupManagement,FlaseSaleSettings,FilterPriceRangeSettings`是属于`BaseSettings`的下级页面，但在这里我并没有使用子路由嵌套的写法，而是写成了兄弟路由，这是因为 **嵌套的子路由要想被渲染，其父页面必须有`<router-view/>`，而这里的子页面是覆盖整个`BaseSettings`页面，如果在此页面加上`<router-view/>`，要隐藏此页面其他内容也是相当麻烦**  所以这里我将他们写成兄弟路由，链接上看来还是父子关系~

此处路由文件，用到了一个插件 `progressbar.js`


```
npm install progressbar.js -S
```

此插件主要作为页面加载时页面顶部会有一个加载进度条

在使用 `vue-router`时，我这里使用了 `mode:'history'`

这里主要是去掉路由层级中的`/#/`这一层，不使用这一属性时，`vue`页面路由中都会有`/#/`这一层

路由写好，路由相关文件都拷贝进来后，需要修改入口文件`src/index.js`，增加路由引用：

```
import Vue from 'vue'
import Index from 'views/Index'
import router from '@/router/router'

import '@/assets/scss/custom.scss'
import "@/assets/scss/Public.scss";
import '@/assets/scss/ResetBootstrapStyle.scss'
import '@/assets/scss/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Index)
}).$mount('#app');


```

ok 执行命令 `npm start` 查看页面，点击路由相关链接，所有页面都可以正常显示~，到此，一个`vue`单页面应用算是初步完成了，后续会进行细节上的优化，以及与服务端接口对接等操作