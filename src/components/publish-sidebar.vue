<template>
  <aside class="publish-sidebar">
    <div class="publication-cover">обложка</div>
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
</style>