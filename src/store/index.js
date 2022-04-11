import Vue from 'vue'
import Vuex from 'vuex'
import Catalog from './modules/Catalog/store'


Vue.use(Vuex)

export default new Vuex.Store({
  
  modules: {
    modules: {
      Catalog,
      }
  }
})
