<template>
  <div id="app">
    <app-header></app-header>
    <app-navigation></app-navigation> 
    <main>
      <div>Events</div>
    </main>
  </div>

</template>

<script>
  import AppHeader from '../components/app-header.vue'
  import AppNavigation from '../components/app-navigation.vue'

  export default {
    name: 'events',
    components: {
      'app-header': AppHeader,
      'app-navigation': AppNavigation
    },
  }
</script>

<style lang="scss" scoped>
  #app {
    margin: 0 auto;
    height: 100%;
    background: #eef1f5;
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
    color: #333;
  }
  main {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 50px;
    padding-left: 75px;
    > div {
      position: relative;
      margin: 0 15px;
    }
  }

</style>