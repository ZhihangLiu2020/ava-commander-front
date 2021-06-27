// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
  drawer: null,
  drawerImage: true,
  mini: false,
  items: [
    {
      title: '首页',
      icon: 'mdi-view-dashboard',
      to: '/',
    },
    {
      title: '测试场景管理',
      icon: 'mdi-file-document',
      to: '/scencemanage',
    },
    {
      title: '结果管理',
      icon: 'mdi-database-outline',
      to: '/resultmanage',
    },
    {
      title: '支持协议和流量样本',
      icon: 'mdi-view-list',
      to: '/support',
    },
  ],
}

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
  init: async ({ dispatch }) => {
    //
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
