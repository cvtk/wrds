<template>
  <default-layout>
    <messages-sidebar 
    :conversations="conversations" 
    @selectPartner="setCurrentPartner">
    </messages-sidebar>
    <messages-content 
    :partner="currentPartner"
    :messages="currentMessages"
    @sendMessage="saveNewMessage">
    </messages-content>
  </default-layout>
</template>
<script>
  import DefaultLayout from './layouts/default.vue';
  import MessagesSidebar from '../components/messages-sidebar.vue';
  import MessagesContent from '../components/messages-content.vue';
  import firebase from '../db';
  // TODO сменить на firebase.database().ref('messages');
  const usersRef = firebase.database().ref('users');
  const messagesRef = firebase.database().ref('messages');

  export default {
    name: 'messages',
    components: { DefaultLayout, MessagesSidebar, MessagesContent },
    props: ['user'],
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
        currentMessages: {
          source: messagesRef.child(this.user.uid).on('child_added', this.newMessage),
          asObject: false
        }
      }
    },
    methods: {
      newMessage(data) {
        console.log(data);
      },

      setCurrentPartner(uid) {
        this.currentPartner = uid;
      },

      saveNewMessage(text) {
        if (text && this.user && this.currentPartner) {
          messagesRef.child(this.user.uid).push({
            text: text,
            user: this.currentPartner,
            inbound: false
          });
          messagesRef.child(this.currentPartner).push({
            text: text,
            user: this.user.uid,
            inbound: true
          });
        }
      }
    }
  }
</script>

<style lang="scss" scoped></style>