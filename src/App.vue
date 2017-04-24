<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data () {
    return {
      msg: ''
    }
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
