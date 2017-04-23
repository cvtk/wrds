<template>
  <header>
    <span id="user"></span>
  </header>
</template>

<script>
  export default {
    name: 'app-header'
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
</style>