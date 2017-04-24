import Vue from 'vue'
import VueFire from 'vuefire'
import Firebase from 'firebase'

Vue.use(VueFire)

export default Firebase.initializeApp({
    apiKey: 'AIzaSyBz-rXWMPsvuShKr9_O4uq0mazhrxbrow8',
    authDomain: 'wrds-5bb0a.firebaseapp.com',
    databaseURL: 'https://wrds-5bb0a.firebaseio.com',
    projectId: 'wrds-5bb0a',
    storageBucket: 'wrds-5bb0a.appspot.com',
    messagingSenderId: '310931060091'
  });

 