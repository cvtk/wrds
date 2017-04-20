(function() {
  'use strict';

  var app = {};
  var mvc = {
    Publications: Backbone.Firebase.Collection.extend({
      url: 'https://wrds-5bb0a.firebaseio.com/publications'
    })
  };

  app.publications = new mvc.Publications();
  app.publications.on('sync', function(data) {
    console.log(data);
  });
  
}());