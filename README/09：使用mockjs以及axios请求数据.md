# 安装相关插件

本项目不会详细配置服务端请求这一块内容，实现简单的请求，以及`mockjs`拦截并生成随机数据

具体服务端配置会涉及到`koa`，会在下个项目中进行详细配置

```
npm i mockjs -D
npm i axios -S
```

插件安装完，把之前复制的`src/views/Index` 文件夹下的 `MockDataTest` 文件夹及其内所有内容全部复制进项目

新建 `src/mock` 文件夹，并在该文件夹下新建 `index.js`,`mock.nav.js`

`index.js` 文件内容如下：

```
import Mock from 'mockjs';

import { nav } from './mock.nav.js'

function addToMock(list) {
  list.forEach(n => {
    Mock.mock(n.path, n.data)
  })
}

addToMock(nav)

export default Mock

```

`mock.nav.js` 文件内容如下：

```
export const nav = [
    {
        path: '/MockDataTest/NavDataList',
        data: {
            "array|1-3": [
                {
                    "name|+1": [
                        "hello", "vue", "world"
                    ],
                    'id|+1': 88,
                    "linkURL":"@url"
                }
            ]
        }
    },
]
```

然后在 `src/router/router.js` 中，新增路由

```
const MockDataTest = () => import(/* webpackChunkName: 'MockDataTest' */ '@/views/Index/MockDataTest')
const NavDataList = () => import(/* webpackChunkName: 'MockDataTest' */ '@/views/Index/MockDataTest/NavDataList')


{
    path: '/MockDataTest',
    name: 'MockDataTest',
    component: MockDataTest,
    children: [
        {
        path: '',
        name: 'NavDataList',
        component: NavDataList
        },
        {
        path: 'NavDataList',
        name: 'NavDataList',
        component: NavDataList
        },
    ]
},
```
再在`src/views/Index/index.vue`中增加`MockDataTest`页面的路由

```
<div class="sub-nav-item">
    <router-link to="/MockDataTest">Mock数据测试</router-link>
</div>
```

修改`src/index.js` 文件：

```
import Vue from 'vue'
import Index from 'views/Index'
import router from '@/router/router'

import axios from 'axios'
import '@/mock'

import '@/assets/scss/custom.scss'
import "@/assets/scss/Public.scss";
import '@/assets/scss/ResetBootstrapStyle.scss'
import '@/assets/scss/iconfont.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(Index)
}).$mount('#app');


```

一切结束后，执行命令 `npm start`，通过路由链接，打开相应的页面就可以看到，已经实现了数据的绑定~，具体绑定可以查看`src/views/Index/MockDataTest/NavDataList/index.vue` 页面的代码


这里就使用了子路由，路由嵌套，可以查看`MockDataTest`文件夹下两个页面的关系
