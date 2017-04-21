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

  var app = {};
  app.db = firebaseApp.database();
  app.publications = new Vue({
    el: '#publications',
    firebase: {
      anArray: app.db.ref('publications'),
      anObject: {
        source: app.db.ref('publications'),
        asObject: true,
        cancelCallback: function(error) {
          console.log(error);
        }
      }
    },
    methods: {
      reduceRating: function(key) {
        app.publications.$firebaseRefs.anArray.child(key).child('rating').set('34');
      },
      increaseRating: function(key) {
        app.publications.$firebaseRefs.anArray.child(key).child('rating').set('22');
      },
    }
  });

}());