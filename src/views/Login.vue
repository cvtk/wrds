<template>
  <div class="auth-content">
    <div class="content-presentation">
      <span class="logo">WRDS</span>
    </div>
    <div class="content-login">
      <div class="login-form">
        <h1>Wrds вход</h1>
        <p>Для входа используйте адрес электронной почты и пароль. Если Вы впервые на нашем ресурсе то зарегистрируйтесь.</p>
        <form action="">
          <div class="row">
            <input class="username" type="text" placeholder="Эл. почта" name="username" required>
            <input class="password" type="password" placeholder="Пароль" name="password" required>
          </div>
          <div class="row">
            <button v-on:click="signIn()">Войти</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '../db'
  export default {
    name: 'login',
    data: function() {
      return { user: firebase.auth().currentUser }
    },
    methods: {
      signIn: function() {
        firebase.auth().signInWithEmailAndPassword('ovc@digit-it.ru', 'tqrh16')
          .then(function (user) {
            
          }).catch(function(error) {
            
          });
      },
      signOut: function() {
        firebase.auth().signOut();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .auth-content {
    height: 100%;
    background-color: #fff;
    > .content-presentation {
      background-image: url('./assets/login-background.jpg');
      background-size: cover;
      width: 50%;
      height: 100%;
      float: left;
    }
    > .content-login {
      width: 50%;
      float: left;
    }
    .login-form {
      padding: 0 85px;
      margin-top: 35%;
      > h1 {
        margin: 0;
        font-size: 30px;
        font-weight: 300;
      }
      > p {
        color: #8d98a5;
        font-weight: 300;
        font-size: 15px;
        margin: 15px 0;
      }
      > form {
        margin-top: 80px;
        > .row {
          position: relative;
          width: 100%;
          &:after {
            content: '';
            clear: both;
          }
          > button {
            color: #fff;
            background-color: #32c5d2;
            border-color: #32c5d2;
            outline: none;
            float: right;
            display: inline-block;
            margin-bottom: 0;
            font-weight: 400;
            text-align: center;
            vertical-align: middle;
            touch-action: manipulation;
            cursor: pointer;
            border: 1px solid transparent;
            white-space: nowrap;
            padding: 10px 15px;
            font-size: 15px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            transition: all .25s ease;
            &:hover {
              background-color: #26a1ab;
              border-color: #2499a3;
            }
          }
          > input {
            width: 45%;
            padding: 10px 0;
            border: #a0a9b4;
            border-bottom: 1px solid;
            color: #868e97;
            font-size: 15px;
            font-weight: 300;
            margin-bottom: 30px;
            border-radius: 0!important;
            outline: none;
          }
          > .password {
            float: right;
          }
        }
      }
      
    }
  }
</style>