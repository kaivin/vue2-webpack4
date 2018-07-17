import Vue from 'vue'
import VueRouter from 'vue-router'
const ProgressBar = require('progressbar.js')

import BaseSettings from '@/views/Index/BaseSettings'

const GoodsGroupManagement = () => import(/* webpackChunkName: 'GoodsGroupManagement' */ '@/views/Index/BaseSettings/GoodsGroupManagement')
const FlaseSaleSettings = () => import(/* webpackChunkName: 'FlaseSaleSettings' */ '@/views/Index/BaseSettings/FlaseSaleSettings')
const FilterPriceRangeSettings = () => import(/* webpackChunkName: 'FilterPriceRangeSettings' */ '@/views/Index/BaseSettings/FilterPriceRangeSettings')
const PageManagement = () => import(/* webpackChunkName: 'PageManagement' */ '@/views/Index/PageManagement')
const TemplateCenter = () => import(/* webpackChunkName: 'TemplateCenter' */ '@/views/Index/TemplateCenter')
const MockDataTest = () => import(/* webpackChunkName: 'MockDataTest' */ '@/views/Index/MockDataTest')
const NavDataList = () => import(/* webpackChunkName: 'MockDataTest' */ '@/views/Index/MockDataTest/NavDataList')


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