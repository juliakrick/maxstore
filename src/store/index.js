import Vue from 'vue'
import Vuex from 'vuex'
import Catalog from './modules/Catalog/index.js'

Vue.use(Vuex)

export default new Vuex.Store({ 
  modules: {
      Catalog,  
  },
})


