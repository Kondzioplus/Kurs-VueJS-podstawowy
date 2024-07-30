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
    },
    items: [
      { name: 'Srebrny miecz', price: 119.99 },
      { name: 'Zniszczony plecak', price: 0.00 },
      { name: 'Kij', price: 0.00 },
      { name: 'Puklerz', price: 189.99 },
      { name: 'Nogawice', price: 109.99 },
    ]
  },
  getters: {
    getValuableItems: state =>  state.items.filter(v => v.price > 0.00)
  },
  mutations: {

  },
  actions: {

  }
})
