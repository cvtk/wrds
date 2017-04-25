import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes = [
  {
    path: '/',
    component: require('./views/Home.vue'),
    name: 'root',
    meta: { authOnly: true }
  },
  {
    path: '/login',
    component: require('./views/Login.vue'),
    name: 'login',
    meta: { authOnly: false }
  },
  {
    path: '/publications',
    component: require('./views/Publications.vue'),
    name: 'publications',
    meta: { authOnly: true }
  },
  {
    path: '/publications/new',
    component: require('./views/publications/New.vue'),
    name: 'new-publication',
    meta: { authOnly: true }
  },
  {
    path: '/events',
    component: require('./views/Events.vue'),
    name: 'events',
    meta: { authOnly: true }
  },
  {
    path: '/profile',
    component: require('./views/Profile.vue'),
    name: 'profile',
    meta: { authOnly: false }
  }
]

export default new Router({ 
    routes: routes, 
    linkActiveClass: '_active',
  });