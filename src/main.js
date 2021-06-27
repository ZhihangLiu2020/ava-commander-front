import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './plugins'
import store from './store'
import { sync } from 'vuex-router-sync'
//全局注册axios
import http from '@/api/axios.js'
Vue.prototype.$axios = http

Vue.config.productionTip = false

sync(store, router)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')
