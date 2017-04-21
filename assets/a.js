(function() {
  'use strict';

  var firebaseApp = firebase.initializeApp({
      apiKey: 'AIzaSyBz-rXWMPsvuShKr9_O4uq0mazhrxbrow8',
      authDomain: 'wrds-5bb0a.firebaseapp.com',
      databaseURL: 'https://wrds-5bb0a.firebaseio.com',
      projectId: 'wrds-5bb0a',
      storageBucket: 'wrds-5bb0a.appspot.com',
      messagingSenderId: '310931060091'
    });

  var db = firebaseApp.database();

  const Profile = { template: '#profile' };
  const Home = { template: '#home' };
  const Publications = { template: '#publications',
    firebase: {
      anArray: db.ref('publications'),
      anObject: {
        source: db.ref('publications'),
        asObject: true,
        cancelCallback: function(error) {
          console.log(error);
        }
      }
    },
    methods: {
      reduceRating: function(key) {
        this.$firebaseRefs.anArray.child(key).child('rating').set('34');
      },
      increaseRating: function(key) {
        this.$firebaseRefs.anArray.child(key).child('rating').set('22');
      },
    }
  };

  var router = new VueRouter({ routes: 
    [
      { path: '/', component: Home },
      { path: '/profile', component: Profile },
      { path: '/publications', component: Publications }
    ]
  });

  var app = new Vue({ 
    router: router,
    data: { user: {} },
    beforeCreate: function() {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          this.user = user; 
        }
        else {
          console.log(this.user);
          firebase.auth().signInAnonymously().catch(console.error);
        }
      }.bind(this));
    }    

  }).$mount('#app');

}());