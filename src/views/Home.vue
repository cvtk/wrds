<template>
  <default-layout>
    <h1>home</h1>
    <p>{{ user }}</p>
      <router-link :to="{ name: 'new-publication' }">Новая</router-link>
      <router-link :to="{ name: 'login' }">Логин</router-link>
  </default-layout>
</template>
<script>
  import DefaultLayout from './layouts/default.vue'
  import firebase from '../db'
  const usersRef = firebase.database().ref('users')
  export default {
    name: 'user',
    components: { DefaultLayout },
    data() {
      return { 
        user: '', 
        dataLoading: true
      }
    },
    mounted () {
      const userPage = this.$route.params.userPage
      if (userPage) {
        usersRef.orderByChild('page').equalTo(this.$route.params.userPage).once('value', snapshot => {
          this.user = snapshot.val()
          this.dataLoading = false
        })
      }
    },
  }
</script>

<style lang="scss" scoped></style>