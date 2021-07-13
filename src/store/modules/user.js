// Utilities
import { make } from 'vuex-pathify'

const state = {
  dark: false,
  drawer: {
    image: 0,
    gradient: 0,
    mini: false,
  },
  gradients: [
    'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
    'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)',
    'rgba(244, 67, 54, .8), rgba(244, 67, 54, .8)',
  ],
  userStatus: {},
  // Aside导航栏背景图片
  images: [],
  notifications: [],
  rtl: false,
}

const mutations = {
  ...make.mutations(state),
  SET_USERINFO(state, data){
    state.userStatus = data
  },
}

const actions = {
  SET_USERINFO({commit}, data){
    commit('SET_USERINFO',data)
  },
}

const getters = {
  dark: (state, getters) => {
    return (
      state.dark ||
      getters.gradient.indexOf('255, 255, 255') === -1
    )
  },
  gradient: state => {
    return state.gradients[state.drawer.gradient]
  },
  image: state => {
    return state.drawer.image === '' ? state.drawer.image : state.images[state.drawer.image]
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
