<template>
  <div class="messages-content">
    <div class="content-wrapper">
      <div class="wrapper-text">
        <ul class="text-list" v-for="message in messages">
          <li class="item">
            {{ message.text }}
          </li>
        </ul>
      </div>
      <div class="wrapper-input">
        <input class="input" type="text" placeholder="Напишите сообщение..." 
        v-model="message">
        <input type="submit" class="button" @click.prevent="sendMessage()">
      </div>
    </div>
  </div>
</template>

<script>
  import Firebase from 'firebase'
  import firebase from '../db';

  const db = firebase.database();

  export default {
    name: 'messages-content',
    props: ['auth','currentUser'],
    data() {
      return { message: '' }
    },
    firebase() {
      return {
        messages: db.ref('messages').child(this.auth.uid)
      }
    },
    watch: {
      currentUser(newUser) {
        this.$firebaseRefs.messages.orderByChild('partner').equalTo(newUser);
        console.log(this.messages)
      }
    },
    methods: {
      sendMessage() {
        console.log(this.messages);
        console.log(this.currentUser);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .messages-content {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 10px;
    padding-left: 320px;
  }
  .content-wrapper {
    position: relative;
    height: 100%;
  }
  .wrapper-text {
    height: 90%;
    background-color: #eef1f5;
    outline: 1px solid #c6cfda;
    padding-bottom: 10px;
    text-align: right;
  }
  .wrapper-input {
    position: relative;
    height: 10%;
    padding: 10px 0;
  }
  .input {
    outline: none;
    border: 0;
    font-size: 17px;
    padding: 10px;
    color: #364150;
    float: left;
    width: 90%;
    font-weight: 300;
  }
  .button {
    width: 10%;
    cursor: pointer;
    font-size: 17px;
    padding: 10px;
    border: 1px solid #c6cfda;
    outline: 0;
    background-color: #eef1f5;
  }
</style>