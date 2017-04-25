<template>
  <header>
    <div class="dropdown-user" @click="signOut()">
      <img class="userpic" src="./assets/svg/userpic.svg" alt="Аватар">
      <span class="username">{{ user.displayName || user.email }}</span>
    </div>
  </header>
</template>

<script>
  import firebase from '../db';
  export default {
    name: 'app-header',
    methods: {
      signOut: function() {
        firebase.auth().signOut().then(() => {
          this.$router.push('/login');
          }, function(error) {
          //h_error
          }
        )}
    },
    data: function() {
      return { user: firebase.auth().currentUser }
    }
  }
</script>

<style lang="scss" scoped>
  header {
    position: fixed;
    width: 100%;
    height: 50px;
    background-color: #2b3643;
    z-index: 1;
  }
  .dropdown-user {
    float: right;
    margin-right: 15px;
    cursor: pointer;
    transition: background-color .25s ease;
    padding: 0 15px;
    &:hover {
      background-color: #364150;
    }
  }
  .userpic {
    width: 30px;
    vertical-align: middle;
  }
  .username {
    color: #c6cfda;
    font-weight: 300;
    font-size: 15px;
    line-height: 50px;
    padding: 16px 6px;
    &:after {
      content: '';
      display: inline-block;
      margin-left: 5px;
      width: 10px;
      height: 10px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-image: url('./assets/svg/down-arrow.svg');
    }
  }
</style>