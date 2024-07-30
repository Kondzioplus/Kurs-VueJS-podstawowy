import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gameName: 'Gladiator',
    user: {
      name: 'Kondzio',
      strenght: 12,
      speed: 14,
      dextertity: 9,
      resistance: 10
    }
  },
  mutations: {

  },
  actions: {

  }
})
