<template>
  <p>Login {{msg}}</p>
</template>

<script>
  export default {
    needAuth: true,
    name: 'login',
    components: {},
    data: function() {
      msg: this.needAuth
    }
  }
</script>

<style></style>