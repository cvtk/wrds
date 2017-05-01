<template>
  <div class="home-publications">
    <div class="publications-inner">
      <div class="inner-menu">
        <h2 class="title">Мои публикации</h2>
        <div class="menu-actions">
          <button class="filter" type="button">Неделя</button>
          <button class="filter" type="button">Месяц</button>
          <button class="filter" type="button">Все время</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home-publications'
  }
</script>

<style lang="scss" scoped>
  .home-publications {
    position: relative;
    float: left;
    width: 100%;
    padding-left: 320px;
  }
  .publications-inner {
    margin-left: 30px;
    background-color: #fff;
    padding: 15px;
  }
  .inner-menu {
    border-bottom: 1px solid #eee;
    &:after {
      content: '';
      display: table;
      clear: both;
    }
  }
  .title {
    font-weight: 700;
    font-size: 15px;
    color: #578ebe;
    text-transform: uppercase;
    padding: 15px 0;
    margin: 0;
    float: left;
  }

  .menu-actions {
    float: right;
    padding: 15px 0;
  }

  .filter {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    border: 1px solid transparent;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    outline: 0;
    border-radius: 25px;
    overflow: hidden;
    color: #FAFCFB;
    background-color: #ACB5C3;
    border-color: #ACB5C3;
    padding: 4px 10px;
    font-size: 13px;
    line-height: 1.5;
    transition: all .25s ease;
    &:hover, &._active {
      background-color: #8e9bae;
      border-color: #8895a9;
    }
  }
</style>