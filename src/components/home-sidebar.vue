<template>
  <aside class="home-sidebar">
    <div class="user-picture">
      <img :src="currentUser.photoURL" alt="Аватар" class="picture">
    </div>
    <div class="user-name">
      <span class="name">{{ currentUser.name }}</span>
      <span class="rating" title="Рейтинг пользователя"
      :class="{ '_negative': currentUser.rating < 0 }">
      {{ currentUser.rating }}</span>
    </div>
    <div class="user-controls">
      <button class="message" type="button" title="Отправить личное сообщение">Сообщение</button>
    </div>
    <ul class="user-menu">
      <li class="menu-item">Общая</li>
      <li class="menu-item">Учетная запись</li>
    </ul>
  </aside>
</template>

<script>
  export default {
    name: 'home-sidebar',
    props: ['currentUser']
  
  }
</script>

<style lang="scss" scoped>
  .home-sidebar {
    position: absolute;
    width: 320px;
    padding: 30px 0;
    background-color: #fff;
    text-align: center;
  }

  .picture {
    display: block;
    margin: 0 auto;
    width: 50%;
    height: 50%;
    border-radius: 50%;
  }
  .user-name {
    margin-top: 10px;
  }
  .name {
    color: #5a7391;
    font-size: 20px;
    font-weight: 600;
  }
  .rating {
    color: #5b9bd1;
    font-size: 13px;
    font-weight: 600;
    padding-left: 5px;
    &._negative {
      color: #e7505a;
    }
  }
  .user-controls {
    margin-top: 10px;
  }
  .message {
    display: inline-block;
    margin-bottom: 0;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    border: 1px solid transparent;
    white-space: nowrap;
    border-radius: 25px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #fff;
    background-color: #e7505a;
    border-color: #e7505a;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 600;
    padding: 6px 15px;
    transition: all .25s ease;
    outline: none;
    &:hover {
      background-color: #e12330;
      border-color: #dc1e2b;
    }
  }
  .user-menu {
    display: block;
    position: relative;
    list-style: none;
    padding: 0;
    margin-top: 30px;
  }
  .menu-item {
    border-bottom: 1px solid #f0f4f7;
    color: #93a3b5;
    font-size: 17px;
    font-weight: 300;
    padding: 10px 15px;
    text-align: left;
    cursor: pointer;
    margin-left: -2px;
    transition: background-color .25s ease;
    &:hover, &._active {
      color: #5b9bd1;
      background-color: #f6f9fb;
      border-left: 2px solid #5b9bd1;
    }
  }
</style>