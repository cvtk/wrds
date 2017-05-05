<template>
  <aside class="messages-sidebar">
    <ul class="sidebar-menu">
      <li :class="{ _active: !isUsersTab }" class="menu-item" @click="isUsersTab = false">Беседы</li>
      <li :class="{ _active: isUsersTab }" class="menu-item" @click="isUsersTab = true ">Люди</li>
    </ul>
    <ul class="sidebar-users" v-if="isUsersTab">
      <router-link tag="li" class="users-item"
        v-bind:to="{ name: 'user', params: { userPage: user.page } }"  
        v-for="user in users" :key="user.uid"
        v-if="user.uid !== auth.uid">

        <div class="item-wrapper">
          <img class="image" :src="user.photoURL" alt="Аватар">
          <div class="item-meta _away">
            <p class="name">{{ user.name }}</p>
            <span class="rating">{{user.rating }}</span>
          </div>  
          <img src="./assets/svg/chatting.svg" alt="Беседа" title="Начать беседу" class="chatting" @click.prevent="initConversation(user)">     
        </div>

      </router-link>
    </ul>
    <ul class="sidebar-conversations" v-else>
      <li class="conversations-item" v-for="conversation in conversations">
        
        <div class="item-wrapper">
          <img class="image" src="" alt="Аватар">
          <div class="item-meta _away">
            <p class="name">{{conversation}}</p>
            <span class="rating"></span>
          </div>  
          <img src="./assets/svg/chatting.svg" alt="Беседа" title="Начать беседу" class="chatting" @click.prevent="initConversation(user)">     
        </div>

      </li>
    </ul>
  </aside>
</template>

<script>
  export default {
    name: 'messages-sidebar',
    props: ['conversations', 'users', 'auth'],
    data() {
      return { 
        isUsersTab: false,
      }
    },
    methods: {
      initConversation(user) {
        this.isUsersTab = false;
        this.$emit('initConversation', user);
      }
    }
  }

</script>

<style lang="scss" scoped>
  .messages-sidebar {
    position: absolute;
    width: 320px;
    height: 100%;
    z-index: 1;
    background-color: #21282e;
    border: 10px solid #eef1f5;
    font-weight: 300;
  }
  .sidebar-menu {
    display: block;
    position: relative;
    list-style: none;
    margin: 0;
    padding: 0;
    &:after {
      content: '';
      display: table;
      clear: both;
    }
  }
  .menu-item {
    display: block;
    float: left;
    width: 50%;
    text-align: center;
    height: auto;
    font-size: 14px;
    padding: 20px 15px 10px;
    text-transform: uppercase;
    color: #90a1af;
    border-bottom: 3px solid rgba(243,86,93,.3);
    transition: color .25s ease, border-color .25s ease;
    cursor: pointer;
    &._active, &:hover {
      border-color: #f3565d;
      color: #fff;
    }
  }
  .sidebar-users {
    position: relative;
    margin: 0;
    padding: 0;
  }
  .users-item {
    display: block;
    position: relative;
    padding: 15px;
    border-bottom: 1px solid #273037;
    cursor: pointer;
    transition: background-color .25s ease;
    &:hover, &._active {
      background-color: #273037;
    }
  }
  .item-wrapper {
    position: relative;
    &:after {
      content: '';
      display: table;
      clear: both;
    }
  }
  .item-meta {
    position: relative;
    float: left;
    padding-left: 15px;
    width: 195px;
    height: 50px;
      &:after {
      content: '';
      display: block;
      position: absolute;
      left: -5px;
      top: 0;
      background-color: #d8dce1;
      width: 8px;
      height: 8px;
      border-radius: 4px;
    }
    &._away:after { background-color: #ffda44 }
    &._online:after { background-color: #36c6d3; }
  }
  .name {
    font-size: 17px;
    color: #99a8b5;
    margin: 0;
  }

  .image {
    display: block;
    float: left;
    width: 50px;
    height: 50px;
  }

  .chatting {
    display: block;
    float: left;
    width: 25px;
    height: 25px;
    filter: grayscale(1);
    transition: filter .25s ease;
    &:hover { filter: grayscale(0) }
  }
</style>