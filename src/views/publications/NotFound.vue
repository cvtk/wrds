<template>
  <div class="publication-404">
    <div class="col">
      <img class="image" src="../assets/not-found.png" alt="">
    </div>
    <div class="col">
      <h1 class="title">Публикация не найдена :(</h1>
      <p class="text">Возможно, публикации была удалена автором? Может быть это сделали мы?</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'not-found'
  }
</script>

<style lang="scss" scoped>
  .publication-404 {
    position: relative;
    height: 100%;
    margin: 0 -15px;
    background-color: #fff;
  }
  .col {
    position: relative;
    width: 50%;
    height: 100%;
    padding: 0 30px;
    padding-top: 15%;
    float: left;
  }
  .image {
    display: block;
    margin: 0 auto;
    max-width: 80%;
    margin-top: -15%;
  }
  .title {
    margin: 10px 0;
    font-weight: 300;
    font-size: 60px;
  }
  .text {
    margin: 0;
    font-weight: 300;
    font-size: 30px;
  }
</style>