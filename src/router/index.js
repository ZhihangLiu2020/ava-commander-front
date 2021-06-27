// Imports
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
// import { trailingSlash } from '@/util/helpers'
import {
  layout,
  route,
} from '@/util/routes'

Vue.use(Router)

const router = new Router({
  routes: [
    layout('Default', [
      route('Dashboard'),

      // 测试场景管理
      route('ScenceManage', null, 'scencemanage'),

      // 支持协议和流量样本
      route('Support', null, 'support'),

      // 结果管理
      route('ResultManage', null, 'resultmanage'),
    ]),
    { path: '/login', component: Login },
  ],
})

export default router
