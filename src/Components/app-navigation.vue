<template>
  <aside>
    <nav>
      <router-link :to="{ name: 'user', params: { userPage: user.page } }"class="_icon _icon-home" title="Главная"></router-link>
      <router-link :to="{ name: 'publications' }" class="_icon _icon-publications" title="Публикации"></router-link>
      <router-link :to="{ name: 'events' }" class="_icon _icon-events" title="События"></router-link>
      <router-link :to="{ name: 'messages' }" class="_icon _icon-messages" title="Сообщения"></router-link>
    </nav>
  </aside>
</template>

<script>
  export default {
    name: 'app-navigation',
    props: ['user']
  }
</script>

<style lang="scss" scoped>
  aside {
    position: fixed;
    width: 75px;
    height: 100%;
    background-color: #364150;
    margin-top: 50px;
    z-index: 2;
    > nav {
      > a {
        display: block;
        position: relative;
        box-sizing: border-box;
        margin: 0 auto;
        padding: 20px;
        width: 100%;
        height: 75px;
        transition: all .25s ease;
        &._active:after {
          content: '';
          position: absolute;
          top: 27.5px;
          right: 0;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-right: 10px solid #eef1f5;
        }
        &:hover, &._active { background-color: #2b3643; }
        &._icon:before {
          content: '';
          display: block;
          text-indent: -9999px;
          max-width: 100%;
          height: 100%;
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
        &._icon-publications:before {
          background: url('./assets/svg/publications.svg');
        }
        &._icon-notifications:before {
          background: url('./assets/svg/notifications.svg');
        }
        &._icon-messages:before {
          background: url('./assets/svg/messages.svg');
        }
        &._icon-home:before {
          background: url('./assets/svg/home.svg');
        }
        &._icon-events:before {
          background: url('./assets/svg/events.svg');
        }
      }
    }
  }
</style>