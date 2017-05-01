<template>
  <default-layout :data-loading="dataLoading" :auth="auth">
    <content-flow></content-flow>
  </default-layout>
</template>
<script>
  import DefaultLayout from './layouts/default.vue'
  import ContentFlow from '../components/content-flow.vue'
  export default {
    name: 'publications',
    components: { DefaultLayout, ContentFlow},
    props: ['auth'],
    data() {
      return {
        dataLoading: false
      }
    }
  }
</script>

<style lang="scss" scoped></style>