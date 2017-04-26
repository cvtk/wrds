<template>
    <div class="auth-content">
      <div class="content-presentation">
        <span class="logo">WRDS</span>
      </div>
      <div class="content-login">
        <div class="login-form">
          <h1>Wrds вход</h1>
          <p>Для входа используйте адрес электронной почты и пароль. Если Вы впервые на нашем ресурсе то зарегистрируйтесь.</p>
          <p class="error">{{ error }}</p>
          <form action="" @submit.prevent>
            <div class="row">
              <input v-model="credentials.email" class="email" type="email" placeholder="Эл. почта" name="email" required>
              <input v-model="credentials.password" class="password" type="password" placeholder="Пароль" name="password" required>
            </div>
            <div class="row">
              <button @click="signInProvider('google')">Google</button>
              <button @click="signInProvider('facebook')">Facebook</button>
              <button @click="signInProvider('twitter')">Twitter</button>
              <button @click="signIn()">Войти</button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
import Firebase from 'firebase'
import firebase from '../db'
const usersRef = firebase.database().ref('users')

  export default {
    name: 'login',
    data: function() {
      return {
        error: '',
        credentials: { email: '', password: '' }
       }
    },
    methods: {

      saveNewUser(user) {
        console.log('authData in saveNewUser', user)
        if (user) {
          var authName = user.displayName
          if (authName === null) {
            authName = user.email.replace(/@.*/, '')
          }

          usersRef.child(user.uid).set({
            name: authName,
            email: user.email,
            page: user.uid
          })
        }
      },

      signIn() {
        if ( this.credentials.email && this.credentials.password ) {
          firebase.auth().signInWithEmailAndPassword(this.credentials.email, this.credentials.password)
            .then((user) => {
              usersRef.child(user.uid).once('value', snapshot => {
                this.saveNewUser(user)
              })
              this.$router.push('/');
            }).catch((error) => {
              if (error.code === 'auth/wrong-password') {
                this.error = 'Неверный пароль для ' + this.credentials.email + ' или Ваша учетная запись не имеет пароля (вход через социальные сети)'
              } else if (error.code === 'auth/user-not-found') {
                this.error = 'Учетная запись с таким адресом электронной почты (' + this.credentials.email +') не найдена'
              } else if (error.code === 'auth/invalid-email') {
                this.error = 'Неверный адрес электронной почты: ' + this.credentials.email
              }
            });
          } else {
          this.error = 'Для входа необходимо ввести адрес электронной почты и пароль'
        }
      },

      signInProvider(socialNetwork) {
        var provider;

        switch (socialNetwork) {
          case 'google': provider = new Firebase.auth.GoogleAuthProvider(); break
          case 'facebook': provider = new Firebase.auth.FacebookAuthProvider(); break;
          case 'twitter': provider = new Firebase.auth.TwitterAuthProvider(); break;
        }

        firebase.auth().signInWithPopup(provider).then((result) => {
          usersRef.child(result.user.uid).once('value', snapshot => {
            this.saveNewUser(result.user)
          })
          this.$router.push('/');
        }).catch((error) => {
          console.log(error)
          if (error.code === 'auth/account-exists-with-different-credential') {
            this.error = 'Адрес электронной почты ' + error.email +
          ' уже связан с другой социальной сетью';
          }
        });
      },

      signOut() {
        firebase.auth().signOut();
      }
    }
  }
</script>

<style lang="scss" scoped>
.auth-content {
  height: 100%;
  background-color: #fff;
}
.content-presentation {
  background-image: url('./assets/login-background.jpg');
  background-size: cover;
  width: 50%;
  height: 100%;
  float: left;
}
.content-login {
  width: 50%;
  float: left;
}
.login-form {
  padding: 0 85px;
  margin-top: 35%;
  > h1 {
    margin: 0;
    font-size: 45px;
    font-weight: 300;
  }
  > p {
    color: #8d98a5;
    font-weight: 300;
    font-size: 15px;
    margin: 15px 0;
  }
  > .error {
    color: #ff7f00;
  }
}
form {
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

</style>