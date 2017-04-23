import Vue from 'vue'

import AppHeader from './Components/app-header.vue'
import AppNavigation from './Components/app-navigation.vue'
import ContentFlow from './Components/content-flow.vue'
import router from './router'
import App from './App.vue'

new Vue({
  el: 'body',
  router: router,
  components: 'App',
  render: h => h(App)
})
