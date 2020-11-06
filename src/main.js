import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import firebase from './firebase'
import vuetify from './plugins/vuetify'
import VAnimateCss from 'animate.css'

Vue.use(VAnimateCss)

firebase.init()

require('@/assets/sass/main.scss')

Vue.config.productionTip = false


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

