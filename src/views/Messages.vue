<template>
  <default-layout :data-loading="dataLoading" :auth="auth">
    <messages-sidebar :conversations="conversations" :users="users" :auth="auth" @initConversation="initConversation"></messages-sidebar>
    <messages-content></messages-content>
  </default-layout>
</template>
<script>
  import DefaultLayout from './layouts/default.vue';
  import MessagesSidebar from '../components/messages-sidebar.vue';
  import MessagesContent from '../components/messages-content.vue';
  import firebase from '../db';
  const usersRef = firebase.database().ref('users');
  const conversationsRef = firebase.database().ref('conversations');

  export default {
    name: 'messages',
    components: { DefaultLayout, MessagesSidebar, MessagesContent },
    props: ['auth'],
    data() {
      return { 
        dataLoading: true,
      }
    },
    methods: {

      initConversation(user) {
        this.$firebaseRefs.conversations.orderByChild('partner').equalTo(user.uid).once('value').then((data) => {
          if ( data.val() === null ) {
            this.$firebaseRefs.conversations.push({'partner': user.uid});
          } else {
            //nothing yet
          }
        });
      }
    },
    firebase() {
      return {
        users: {
          source: usersRef,
          asObject: true,
          readyCallback() {
            console.log(this.users)
            this.dataLoading = false;
          }
        },
        conversations: {
          source: conversationsRef.child(this.auth.uid),
          asObject: true,
          readyCallback() {
            this.dataLoading = false;
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped></style>