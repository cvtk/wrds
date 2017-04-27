<template>
  <aside class="messages-sidebar">
    <h3 class="recent">Недавние</h3>
    <ul class="sidebar-users">
      <li class="users-item" v-for="user in conversations">
        <img class="image" src="./assets/svg/userpic.svg" alt="Аватар">
        <span class="online"></span>
        <div class="item-meta">
          <span class="name">{{ user.name }}</span>
          <span class="rating"></span>
          <span class="last"></span>
        </div>
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
    padding: 15px;
    border-bottom: 1px solid #273037;
    cursor: pointer;
    transition: background-color .25s ease;
    &:hover {
      background-color: #273037;
    }
  }
  .item-meta {
    display: inline-block;
  }
  .name {
    font-size: 17px;
    color: #99a8b5;
    padding: 0 10px;
  }
  .image {
    width: 50px;
    height: 50px;
  }
</style>