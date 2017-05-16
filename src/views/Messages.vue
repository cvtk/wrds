<template>
  <default-layout :data-loading="dataLoading" :auth="auth">
    <messages-sidebar :auth="auth" @selectUser='selectUser'></messages-sidebar>
    <messages-content :auth="auth" :currentUser="currentUser"></messages-content>
  </default-layout>
</template>
<script>
  import DefaultLayout from './layouts/default.vue';
  import MessagesSidebar from '../components/messages-sidebar.vue';
  import MessagesContent from '../components/messages-content.vue';

  export default {
    name: 'messages',
    components: { DefaultLayout, MessagesSidebar, MessagesContent },
    props: ['auth'],
    data() {
      return { 
        dataLoading: false,
        currentUser: ''
      }
    },
    methods: {
      selectUser(userdata) {
        this.currentUser = userdata.uid;
      }
    }
  }
</script>

<style lang="scss" scoped></style>