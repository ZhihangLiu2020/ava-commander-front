// Imports
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import LoginContainer from '@/layouts/default/LoginContainer'
// import { trailingSlash } from '@/util/helpers'
import {
  layout,
  route,
} from '@/util/routes'
// 导入请求导航栏的函数
import getNav from '../api/nav'
import store from '../store'

Vue.use(Router)
import axios from '../api/axios'
const routes = [
  /* layout('Default', [
    route('Dashboard'),

    // 测试场景管理
    route('ScenceManage', null, 'scencemanage'),

    // 支持协议和流量样本
    route('Support', null, 'support'),

    // 结果管理
    route('ResultManage', null, 'resultmanage'),
  ]), */
  /* layout('Default', 
    route('Login', null, 'login')
  ) */
  { path: '/',
    component: Login,
    /* component: LoginContainer,
    children: [
      {path: '/', component: Login}
    ] */
  },
]

// 根据复用的数据动态生成路由
const router = new Router({
  routes,
});


//路由拦截
router.beforeEach((to,from,next) => {
  let token = localStorage.getItem('token')
  if (to.path!=='/' && token===null) {
    alert("请登陆")
    // vuex 清除 userInfo 和登陆状态
    //store.dispatch('user/SET_USERINFO', {userInfo: {}, status: false})
    // 通过url退向登陆页时，也视为退出
  }else if(to.path==='/'){
    localStorage.removeItem('token')
    next()
  }else{
    
    /* next({
      ...to,
      replace: true
    }) */
    next()
  }
});
// 动态生成路由数据
(function addRoute(){
  // 请求数据
  getNav().then(res=>{
    //console.log("请求导航栏1：",res, JSON.parse(res.data[0].meta))
    // 拼接路由
    let data = routesData(res.data)
    // 缓存到vuex
    store.dispatch('app/SETNAV',res.data)
    // 动态添加
    //router.matcher = new Router.matcher
    router.addRoutes(data)
  })
})()
//拼接路由
function routesData(result){
  result.forEach(item => {
    routes.push(
      layout('Default', [
        route(item.component, null, item.path)
      ])
    )
  })
  return routes
}


export default router
