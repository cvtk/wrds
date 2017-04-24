import Vue from 'vue'
import firebase from './db'
import router from './router'
import App from './App.vue'

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
    if (!firebase.auth().currentUser) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
});

const unsubscribe = firebase.auth().onAuthStateChanged(() => {

  new Vue({
    el: '#app',
    router: router,
    template: '<router-view></router-view>'
  });

  unsubscribe();
});