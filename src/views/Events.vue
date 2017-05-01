<template>
  <default-layout :data-loading="dataLoading" :auth="auth">
    Events
  </default-layout>
</template>
<script>
  import DefaultLayout from './layouts/default.vue'
  import firebase from '../db'
  const usersRef = firebase.database().ref('users');

  export default {
    name: 'user',
    components: { DefaultLayout },
    props: ['auth'],
    data() {
      return { 
        dataLoading: true
      }
    },
  }
</script>

<style lang="scss" scoped>
 
</style>