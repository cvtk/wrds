<template>
  <default-layout>
    <messages-sidebar :conversations="conversations"></messages-sidebar>
    <messages-content></messages-content>
  </default-layout>
</template>
<script>
  import DefaultLayout from './layouts/default.vue';
  import MessagesSidebar from '../components/messages-sidebar.vue';
  import MessagesContent from '../components/messages-content.vue';
  import firebase from '../db';
  const messagesRef = firebase.database().ref('messages');

  export default {
    name: 'messages',
    components: { DefaultLayout, MessagesSidebar, MessagesContent },
    props: ['user'],
    data() {
      return { dataLoading: true }
    },
    firebase() {
      return {
        conversations: {
          source: messagesRef.child(this.user.uid),
          asObject: true,
          readyCallback() {
            this.dataLoading = true;
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped></style>