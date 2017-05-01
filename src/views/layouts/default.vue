<template>
  <div class="app-content">
    <app-header :user="user" v-if="!userLoading"></app-header>
    <app-navigation :user="user" v-if="!userLoading"></app-navigation> 
    <main class="app-wrapper">
      <section class="component-content">
        <app-loader v-show="dataLoading"></app-loader>
        <slot></slot>
      </section>
    </main>
  </div>

</template>

<script>
  import AppLoader from '../../components/app-loader.vue';
  import AppHeader from '../../components/app-header.vue';
  import AppNavigation from '../../components/app-navigation.vue';
  import firebase from '../../db.js';

  export default {
    name: 'default-layout',
    props: ['dataLoading', 'auth'],
    components: { AppHeader, AppNavigation, AppLoader },
    data() {
      return {
        userLoading: true
      }
    },
    firebase() {
      if (this.auth) {
        return {
          user: {
            source: firebase.database().ref('users').child(this.auth.uid),
            asObject: true,
            readyCallback() {
              this.userLoading = false;
            }
          }
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

.app-content {
  position: relative;
  margin: 0 auto;
  height: 100%;
  background: #eef1f5;
  font-family: 'Roboto', sans-serif;
  line-height: 1.5;
  color: #333;
}
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-left: 75px;
}
.component-content {
  position: relative;
  height: 100%;
}

</style>