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

const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  new Vue({
    el: '#app',
    router: router,
    data() {
      return { user: user}
    },
    template: '<router-view :user="user"></router-view>'
  });

  unsubscribe();
});