import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuetify from 'vuetify/lib'



import ButtonItem from './components/UI/ButtonItem.vue'
import ModalWindow from './components/UI/ModalWindow.vue'

Vue.component('button-item', ButtonItem),
Vue.component('modal-window-item', ModalWindow)


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
