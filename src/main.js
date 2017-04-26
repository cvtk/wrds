import Vue from 'vue'
import firebase from './db'
import router from './router'

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
    if (!firebase.auth().currentUser) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else { next() }
  } else if ( to.name === 'login' && firebase.auth().currentUser ) {
    next({ name: 'profile'})
  } else { next() }
});

const unsubscribe = firebase.auth().onAuthStateChanged(() => {

  new Vue({
    el: '#app',
    router: router,
    template: '<router-view></router-view>'
  });

  unsubscribe();
});