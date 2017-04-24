import Vue from 'vue'
import firebase from './db'
import router from './router'
import App from './App.vue'

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
  computed: {
    isAuth: function() {
      firebase.auth().onAuthStateChanged(function(user) {
        this.user = ( user ? user: null );
      }.bind(this));
    }
  },
  data: { user: {} }
});