<template>
  <div class="app-loader">
    <img class="spinner" src="./assets/svg/app-loader-spinner_normal.svg">
  </div>
</template>

<script>
  export default {
    props: ['spinnerType'],
    name: 'app-loader',
    data () {
      return { spinnerPath: './assets/svg/app-loader-spinner_normal.svg' }
    },
    created () {
      if ( this.spinnerType === 'cat' ) {
        this.spinnerPath = './assets/img/app-loader-spinner.gif'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .app-loader {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }

  .spinner {
    display: block;
    margin: 0 auto;
    padding-top: 25%;
    width: 5%;
  }
</style>