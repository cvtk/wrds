<template>
  <default-layout :data-loading="dataLoading" :auth="auth">
    <div class="content-home" v-if="!dataLoading">
      <div class="home-header">
        <h1 class="title">{{ currentUser[0].name }}</h1>
        <h3 class="info">Личная страница</h3>
      </div>
      <home-sidebar :currentUser="currentUser[0]"></home-sidebar>
      <home-publications :currentPublications="currentPublications"></home-publications>
    </div>
    <p>{{ currentUser }}</p>
      <router-link :to="{ name: 'new-publication' }">Новая</router-link>
      <router-link :to="{ name: 'login' }">Логин</router-link>
  </default-layout>
</template>
<script>
  import DefaultLayout from './layouts/default.vue';
  import HomeSidebar from '../components/home-sidebar.vue';
  import HomePublications from '../components/home-publications.vue';
  import firebase from '../db';
  const usersRef = firebase.database().ref('users');
  const publicationsRef = firebase.database().ref('publications');

  export default {
    name: 'user',
    components: { DefaultLayout, HomeSidebar, HomePublications },
    props: ['auth'],
    data() {
      return { 
        dataLoading: true
      }
    },
    firebase() {
      return {
        currentUser: {
          source: usersRef.orderByChild('page').equalTo(this.$route.params.userPage),
          asObject: false,
          readyCallback() {
            this.dataLoading = false;
          }
        },
        currentPublications: {
          //TODO change auth.uid to currentUser.uid
          source: publicationsRef.orderByChild('author').equalTo(this.auth.uid),
          asObject: false,
          readyCallback() {
            this.dataLoading = false;
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content-home {
    position: relative;
    height: 100%;
    padding: 0 30px;
  }
  .home-header {
    margin: 25px 0;
  }
  .title {
    display: inline-block;
    font-size: 25px;
    color: #666;
    font-weight: 300;
  }
  .info {
    display: inline-block;
    font-size: 15px;
    color: #666;
    font-weight: 300;
    padding: 0 10px;
  }
</style>