import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const yes = true;
const routes = [
  {
    path: '/',
    component: require('./views/Home.vue'),
    name: 'home'
  },
  {
    path: '/login',
    component: require('./views/Login.vue'),
    name: 'login'
  },
  {
    path: '/publications',
    component: require('./views/Publication.vue'),
    name: 'publications'
  },
  {
    path: '/profile',
    component: require('./views/Profile.vue'),
    name: 'profile'
  }
]

const router = new Router({ routes: routes});

router.beforeEach((to, from) => {
  console.log(to, from, true);
})



export default router;