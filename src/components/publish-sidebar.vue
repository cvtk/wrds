<template>
  <aside class="publish-sidebar">
    <div class="publication-cover">обложка</div>
    <div class="publication-title">
      <input class="title" type="text" placeholder="Название публикации">
    </div>
    <div class="publication-teaser">
      <textarea class="teaser" placeholder="Краткая аннотация"></textarea>
    </div>
    <div class="publication-event">
      <select class="event">
        <option value="Стандарт">Стандарт</option>
      </select>
    </div>
    <div class="publication-category">
      <select class="category">
        <option value="Проза">Проза</option>
        <option value="Рассказ">Рассказ</option>
        <option value="Поэзия">Поэзия</option>
      </select>
    </div>
  </aside>
</template>

<script>
  export default {
    name: 'publish-sidebar',
    props: ['currentUser']
  }
</script>

<style lang="scss" scoped>
  .publish-sidebar {
    position: absolute;
    width: 320px;
    padding: 30px;
    background-color: #fff;
    text-align: center;
    z-index: 1;
  }
  .publication-cover {
    width: 100%;
    height: 300px;
    padding: 15px;
    border: 2px dashed #ACB5C3;
    font-weight: 300;
    font-style: italic;
    color: #ACB5C3;
    cursor: pointer;
  }
  .publication-title {
    margin-top: 30px;
    > .title {
      font-size: 15px;
      font-style: italic;
      font-weight: 300;
      outline: 0;
      color: #555;
      width: 100%;
      height: 34px;
      padding: 6px 12px;
      background-color: #fff;
      border: 1px solid #c2cad8;
      border-radius: 4px;
      -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
      -webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
      -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    }
  }
  .publication-teaser {
    margin-top: 30px;
    > textarea {
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        font-style: italic;
        font-weight: 300;
        outline: 0;
        color: #555;
        width: 100%;
        height: 68px;
        padding: 6px 12px;
        background-color: #fff;
        border: 1px solid #c2cad8;
        border-radius: 4px;
    }
  }
  .publication-event {
    width: 45%;
    margin-top: 30px;
    float: left;
    > .event {
      outline: 0;
      width: 100%;
      height: 34px;
      padding: 6px 12px;
      margin-right: 15px;
      background-color: #fff;
      border: 1px solid #c2cad8;
      border-radius: 4px;
      -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
      -webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
      -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
      transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    }
  }
  .publication-category {
    width: 45%;
    margin-top: 30px;
    float: right;
    > .category {
      outline: 0;
      width: 100%;
      height: 34px;
      padding: 6px 12px;
      background-color: #fff;
      border: 1px solid #c2cad8;
      border-radius: 4px;
      -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
      -webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
      -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
      transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    }
  }
</style>