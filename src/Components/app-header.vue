<template>
  <header>
    <div class="dropdown-user">
      <image class="userpic"></image>
      <router-link to="/profile" class="username" tag="span">{{ user.email }}</router-link>
    </div>
  </header>
</template>

<script>
  import firebase from '../db';
  export default {
    name: 'app-header',
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
    > .dropdown-user {
      float: right;
      margin-right: 15px;
      > .username {
        color: #c6cfda;
        font-weight: 300;
        font-size: 15px;
        cursor: pointer;
        line-height: 50px;
        padding: 16px;
        transition: background-color .25s ease;
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
        &:hover {
          background-color: #364150;
        }
      }
    }
  }
</style>