// Pathify
import { make } from 'vuex-pathify'

const state = {
  username: '123',
}

const mutations = make.mutations(state)

const getters = {}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}