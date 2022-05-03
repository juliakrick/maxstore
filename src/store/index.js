import Vue from 'vue'
import Vuex from 'vuex'
import Catalog from '../store/modules/Catalog.js'

Vue.use(Vuex)

export default new Vuex.Store({ 
  modules: {
      Catalog,  
  },
  state: { },
  mutations: { },
  actions: { },
  getters: {  },
})


