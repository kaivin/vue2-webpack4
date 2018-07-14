import Vue from 'vue'
import VueRouter from 'vue-router'
const ProgressBar = require('progressbar.js')

import Index from '@/views/Index/app'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',//省略路径中的 # 路径
  // base: '/book',
  routes:[
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/Index',
        name: 'Index',
        component: Index,
        children: [

        ]
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