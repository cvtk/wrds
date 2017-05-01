<template>
  <default-layout :data-loading="dataLoading" :auth="auth">
    <div class="content-publish">
      <div class="publish-header">
        <h1 class="title">Создать</h1>
        <h3 class="info">Подготовка публикации</h3>
      </div>
      <publish-sidebar></publish-sidebar>
      <div class="publish-text">
        <div class="text-inner">
          <div class="inner-menu">
            <h2 class="title">Текст</h2>
            <div class="menu-actions">
              <button class="new" type="button">Опубликовать</button>
              <button class="new" type="button">В черновики</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </default-layout>
</template>
<script>
  import DefaultLayout from '../layouts/default.vue';
  import PublishSidebar from '../../components/publish-sidebar.vue';
  import firebase from '../../db';
  const usersRef = firebase.database().ref('users');
  const publicationsRef = firebase.database().ref('publications');

  export default {
    name: 'new-publication',
    components: { DefaultLayout, PublishSidebar },
    props: ['auth'],
    data() {
      return { 
        dataLoading: false
      }
    },
  }
</script>

<style lang="scss" scoped>
  .content-publish {
    position: relative;
    height: 100%;
    padding: 30px;
  }
  .publish-header {
    margin-bottom: 25px;
    > .title {
      display: inline-block;
      font-size: 25px;
      color: #666;
      font-weight: 300;
      margin: 0;
    }
    > .info {
    display: inline-block;
    font-size: 15px;
    color: #666;
    font-weight: 300;
    padding: 0 10px;
    margin: 0;
    }
  }
  .publish-text {
    position: relative;
    width: 100%;
    height: 100%;
    padding-left: 320px;
  }
  .text-inner {
    height: 100%;
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
    > .title {
      font-weight: 700;
      font-size: 15px;
      color: #578ebe;
      text-transform: uppercase;
      padding: 15px 0;
      margin: 0;
      float: left;
    }
  }
  .menu-actions {
    float: right;
    padding: 15px 0;
  }

  .new {
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