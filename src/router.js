import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes = [
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
    path: '/publications/:key',
    component: require('./views/publications/Publication.vue'),
    name: 'publication',
    meta: { authOnly: true }
  },
  {
    path: '/events',
    component: require('./views/Events.vue'),
    name: 'events',
    meta: { authOnly: true }
  },
  {
    path: '/messages',
    component: require('./views/Messages.vue'),
    name: 'messages',
    meta: { authOnly: true }
  },
  {
    path: '/profile',
    component: require('./views/Profile.vue'),
    name: 'profile',
    meta: { authOnly: true }
  },
  {
    path: '/',
    component: require('./views/Home.vue'),
    name: 'home',
    meta: { authOnly: true }
  },
  {
    path: '/:userPage',
    component: require('./views/Home.vue'),
    name: 'user',
    meta: { authOnly: true }
  },
]

export default new Router({ 
    routes: routes, 
    linkActiveClass: '_active',
  });