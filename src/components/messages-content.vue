<template>
  <div class="messages-content">
    <div class="content-wrapper">
      <div class="wrapper-text"></div>
      <div class="wrapper-input">
        <input class="input" type="text" placeholder="Напишите сообщение...">
        <input type="submit" class="button">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'messages-content'
  }
</script>

<style lang="scss" scoped>
  .messages-content {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 10px;
    padding-left: 320px;
  }
  .content-wrapper {
    position: relative;
    height: 100%;
  }
  .wrapper-text {
    height: 90%;
    background-color: #eef1f5;
    outline: 1px solid #c6cfda;
    padding-bottom: 10px;
  }
  .wrapper-input {
    position: relative;
    height: 10%;
  }
  .input {
    outline: none;
    border: 0;
    font-size: 17px;
    padding: 10px;
    color: #364150;
    margin: 25px 0;
    float: left;
    width: 90%;
    font-weight: 300;
  }
  .button {
    width: 10%;
    font-size: 17px;
    padding: 10px;
    outline: 1px solid #c6cfda;
    margin: 25px 0;
    border: 0;
    outline: none;
    background-color: #eef1f5;
  }
</style>