<template>
  <aside class="messages-sidebar">
    <ul class="sidebar-menu">
      <li :class="{ _active: !isUsersTab }" class="menu-item" @click="isUsersTab = false">Беседы</li>
      <li :class="{ _active: isUsersTab }" class="menu-item" @click="isUsersTab = true ">Люди</li>
    </ul>
    <ul class="sidebar-users" v-if="isUsersTab">
      <li class="users-item" @click.prevent="selectUser(user.uid)"
        v-for="user in users" :key="user.uid"
        v-if="user.uid !== auth.uid">

        <div class="item-wrapper">
          <router-link tag="img" class="image" 
            :to="{ name: 'user', params: { userPage: user.page } }" 
            :src="user.photoURL" alt="Аватар" title="Страница пользователя">    
          </router-link>
          <div class="item-meta _away">
            <p class="name">{{ user.name }}</p>
            <span class="rating">{{user.rating }}</span>
          </div>     
        </div>
      </li>
    </ul>
    <ul class="sidebar-rooms" v-else>
      <li class="rooms-item" @click.prevent="selectRoom(user.uid)" v-for="room in rooms" :class="{_active: currentRoom === room.key}">
        <div class="item-wrapper" v-for="user in room.users">
          <img class="image" :src="user.photoURL" alt="Аватар">    
          <div class="item-meta _away">
            <p class="name">{{ user.name }}</p>
          </div>     
        </div>
      </li>      
    </ul>
  </aside>
</template>
<script src="./assets/js/tinyscrollbar.min.js"></script>
<script>
  import Vue from 'vue'
  import Firebase from 'firebase'
  import firebase from '../db';

  const db = firebase.database();

  export default {
    name: 'messages-sidebar',
    props: ['auth'],

    data() {
      return { 
        rooms: [],
        currentRoom: '',
        isUsersTab: false
      }
    },

    firebase() {
      return {
        userRooms: db.ref('users').child(this.auth.uid).child('rooms'),
        users: db.ref('users')
      }
    },

    methods: {
      selectUser(uid) {
        // const userRoomsRef = db.ref('users').child(this.auth.uid).child('rooms');
        // let roomExists = false;

        // userRoomsRef.once('value', rooms => {
        //   Promise.all(rooms.toJSON().map(room => {
        //     this.getRoomUsers(room.key).then(users => {
        //       for (var user in users) {
        //         if (users.hasOwnProperty(user) && user === uid) {
        //           this.currentRoom = room.key;
        //           roomExists = true;
        //           return true;
        //         }
        //       }
        //     })
        //   })).then(() => { if ( !roomExists ) { this.createRoom(uid) } })
          
        //   this.isUsersTab = false;
        // });
      },

      createRoom(uid) {
        let newRoom = db.ref('rooms').push();
        newRoom.child('users').update({[uid]: true, [this.auth.uid]: true});
        db.ref('users').child(uid).child('rooms').child(newRoom.key).update({'active': true});
        db.ref('users').child(this.auth.uid).child('rooms').child(newRoom.key).update({'active': true});
        this.currentRoom = newRoom.key;
        return newRoom.key;
      },

      getRoomUsers(room) {
        let rid = room.key,
            roomUsers = {},
        result = new Promise((resolve, reject) => {
          db.ref('rooms').child(rid).once('value').then(meta => {
            meta.child('users').forEach(user => {
              if ( user.exists() && user.key !== this.auth.uid ) {
                db.ref('users').child(user.key).once('value', profile => roomUsers[profile.key] = profile.val())
              }
            })
            resolve(roomUsers)
          }).catch(error=>reject(error))
        })
        return result;
      }
    },
    mounted() {

      this.$firebaseRefs.userRooms.on('child_added', room => this.getRoomUsers(room)
        .then(users => {
          this.userRooms.filter((room) => this.userRooms['.key'] === room.key)
            .push({'users': users});
        })
      );
      console.log(this.userRooms)
    }
  }

</script>

<style lang="scss" scoped>
  .messages-sidebar {
    position: absolute;
    width: 320px;
    height: 100%;
    z-index: 1;
    background-color: #21282e;
    border: 10px solid #eef1f5;
    font-weight: 300;
  }
  .sidebar-menu {
    display: block;
    position: relative;
    list-style: none;
    margin: 0;
    padding: 0;
    &:after {
      content: '';
      display: table;
      clear: both;
    }
  }
  .menu-item {
    display: block;
    float: left;
    width: 50%;
    text-align: center;
    height: auto;
    font-size: 14px;
    padding: 20px 15px 10px;
    text-transform: uppercase;
    color: #90a1af;
    border-bottom: 3px solid rgba(243,86,93,.3);
    transition: color .25s ease, border-color .25s ease;
    cursor: pointer;
    &._active, &:hover {
      border-color: #f3565d;
      color: #fff;
    }
  }
  .sidebar-users {
    position: relative;
    margin: 0;
    padding: 0;
  }
  .sidebar-rooms {
    position: relative;
    margin: 0;
    padding: 0;
    height: 90%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .rooms-item {
    display: block;
    position: relative;
    padding: 15px;
    border-bottom: 1px solid #273037;
    cursor: pointer;
    transition: background-color .25s ease;
    &:hover, &._active {
      background-color: #273037;
    }
  }
  .users-item {
    display: block;
    position: relative;
    padding: 15px;
    border-bottom: 1px solid #273037;
    cursor: pointer;
    transition: background-color .25s ease;
    &:hover, &._active {
      background-color: #273037;
    }
  }
  .item-wrapper {
    position: relative;
    &:after {
      content: '';
      display: table;
      clear: both;
    }
  }
  .item-meta {
    position: relative;
    float: left;
    padding-left: 15px;
    width: 195px;
    height: 50px;
      &:after {
      content: '';
      display: block;
      position: absolute;
      left: -5px;
      top: 0;
      background-color: #d8dce1;
      width: 8px;
      height: 8px;
      border-radius: 4px;
    }
    &._away:after { background-color: #ffda44 }
    &._online:after { background-color: #36c6d3; }
  }
  .name {
    font-size: 17px;
    color: #99a8b5;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .image {
    display: block;
    float: left;
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }

  .chatting {
    display: block;
    float: left;
    width: 25px;
    height: 25px;
    filter: grayscale(1);
    transition: filter .25s ease;
    &:hover { filter: grayscale(0) }
  }

  .count {
    display: block;
    float: left;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    color: #fff;
    background-color: #36c6d3;
    font-size: 12px;
    line-height: 20px;
    margin: 15px 0;
    text-align: center;
  }

  .remove {
    color: #fff;
  }
</style>