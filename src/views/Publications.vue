<template>
  <default-layout>
    <content-flow></content-flow>
  </default-layout>
</template>
<script>
  import DefaultLayout from './layouts/default.vue'
  import ContentFlow from '../components/content-flow.vue'
  export default {
    name: 'publications',
    components: { DefaultLayout, ContentFlow}
  }
</script>

<style lang="scss" scoped></style>