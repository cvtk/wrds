import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({ routes: 
    [
      { path: '/', component: { template: 'home'} },
      { path: '/publications', component: ContentFlow },
      { 
        path: '/publications/:publicationKey', 
        name: 'publication', 
        component: { template: 'pub'}
      }
    ]
  });