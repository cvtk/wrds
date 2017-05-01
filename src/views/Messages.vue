<template>
  <default-layout :data-loading="dataLoading" :auth="auth">
    <messages-sidebar 
    :conversations="conversations" 
    @selectPartner="setCurrentPartner">
    </messages-sidebar>
    <messages-content 
    :partner="currentPartner"
    @sendMessage="saveNewMessage">
    </messages-content>
  </default-layout>
</template>
<script>
  import DefaultLayout from './layouts/default.vue';
  import MessagesSidebar from '../components/messages-sidebar.vue';
  import MessagesContent from '../components/messages-content.vue';
  import Firebase from 'firebase'
  import firebase from '../db';
  // TODO сменить на firebase.database().ref('messages');
  const usersRef = firebase.database().ref('users');
  const messagesRef = firebase.database().ref('messages');

  export default {
    name: 'messages',
    components: { DefaultLayout, MessagesSidebar, MessagesContent },
    props: ['auth'],
    data() {
      return { 
        dataLoading: true,
        currentPartner: ''
      }
    },
    firebase() {
      return {
        conversations: {
          source: usersRef,
          asObject: false,
          readyCallback() {
            this.dataLoading = true;
          }
        },
        messages: {
          source: messagesRef,
          asObject: false
        }
      }
    },
    methods: {

      setCurrentPartner(uid) {
        this.currentPartner = uid;
      },

      saveNewMessage(text) {
        if (text && this.auth && this.currentPartner) {
          this.$firebaseRefs.messages.push({
            text: text,
            sender: this.auth.uid,
            receiver: this.currentPartner,
            timestamp: Firebase.database.ServerValue.TIMESTAMP
          });
        }
      }
    }
  }
</script>

<style lang="scss" scoped></style>