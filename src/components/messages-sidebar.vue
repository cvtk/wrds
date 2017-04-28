<template>
  <aside class="messages-sidebar">
    <h3 class="recent">Недавние</h3>
    <ul class="sidebar-users">
      <li class="users-item"
        v-for="user in conversations"  
        @click="selectPartner(user['.key'])" 
        :class="{ _active: currentPartner === user['.key']}">
        <div class="item-wrapper">
          <img class="image" src="./assets/svg/userpic.svg" alt="Аватар">
          <div class="item-meta _away">
            <p class="name">{{ user.name }}</p>
            <span class="rating"></span>
            <p class="last">Последнее сообщение</p>
          </div>
          <span class="messages"></span>          
        </div>
      </li>
    </ul>
  </aside>
</template>

<script>
  export default {
    name: 'messages-sidebar',
    props: ['conversations'],
    data() {
      return { currentPartner: '' }
    },
    methods: {
      selectPartner(uid) {
        this.currentPartner = uid;
        this.$emit('selectPartner', uid);
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
  .recent {
    font-size: 17px;
    margin: 10px 15px;
    color: #6c8296;
    font-weight: 300;
  }
  .sidebar-users {
    position: relative;
    margin: 0;
    padding: 0;
  }
  .users-item {
    position: relative;
    padding: 15px;
    border-bottom: 1px solid #273037;
    cursor: pointer;
    transition: background-color .25s ease;
    &:hover, &._active {
      background-color: #273037;
    }
    &._active:after {
      content: '';
      position: absolute;
      top: 30px;
      right: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-right: 10px solid #eef1f5;
    }
  }
  .item-wrapper {
    position: relative;
    width: 100%;
    height: 50px;
    &:after {
      content: '';
      clear: both;
    }
  }
  .item-meta {
    position: relative;
    float: left;
    padding-left: 15px;
    width: 200px;
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
  .name, .last {
    font-size: 17px;
    color: #99a8b5;
    margin: 0;
  }
  .last {
    font-size: 15px;
    line-height: 1;
    padding-top: 10px;
  }
  .image {
    display: block;
    position: relative;
    float: left;
    width: 50px;
    height: 50px;
  }
</style>