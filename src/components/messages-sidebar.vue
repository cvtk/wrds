<template>
  <aside class="messages-sidebar">
    <ul class="sidebar-users">
      <li class="user" v-for="item in conversations">
        <img class="image" src="" alt="Аватар">
        <span class="online">{{item}}</span>
        <span class="name"></span>
        <span class="rating"></span>
        <span class="last"></span>
        <span class="messages"></span>
      </li>
    </ul>
  </aside>
</template>

<script>
  export default {
    name: 'messages-sidebar',
    props: ['conversations']
  }
</script>

<style lang="scss" scoped>
  .messages-sidebar {
    position: absolute;
    width: 320px;
    height: 100%;
    background-color: #2b3643;
    border: 10px solid #eef1f5;
  }
  .sidebar-users {
    margin: 0;
    padding: 0;
  }
</style>