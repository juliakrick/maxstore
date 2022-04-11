import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuetify from 'vuetify/lib'



import ButtonItem from './components/UI/ButtonItem.vue'

Vue.component('button-item', ButtonItem)


Vue.config.productionTip = false

// Vue.use(Vuetify, )
export default new Vuetify({
  icons: {
    iconfont: 'fa4'
  },
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
