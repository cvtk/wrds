<template>
  <div class="content-flow">
    <app-loader v-show="dataLoading"></app-loader>
    <div class="flow-filter"></div>
    <ul class="flow-list">
      <li class="list-item" v-for="item in publications">
        <router-link :to="{name: 'publication', params: { key: item['.key']} }" class="item-link">
          <div class="item-banner" :style="{'background-image': 'url(' + item.image + ')'}">
            <span class="rating">{{ item.rating }}</span>
            <span class="category">Проза</span>
          </div>
            <h2 class="title">{{ item.title }}</h2>
        </router-link>
          <p class="meta">{{ item.author }}, {{ item.date }}</p>
          <p class="teaser">{{ item.teaser }}</p>
          <span class="suspend"></span>
          <span class="views"></span>
      </li>
    </ul>
  </div> 
</template>

<script>
  import AppLoader from './app-loader.vue'
  import firebase from '../db'
  const db = firebase.database()
  export default { 
    name: 'content-flow',
    data () {
      return { 
        dataLoading: true,
      }
    },
    mounted () {
      db.ref('publications').once('value', snapshot => {
        this.dataLoading = false
      })
    },
    firebase () {
      return {
        publications: {
          source: db.ref('publications'),
          cancelCallback: function (error) {
            console.log(error)
          }
        }
      }
    },
    components: { AppLoader }
  }
</script>

<style lang="scss" scoped>
  .content-flow {
  position: relative;
  width: 50%;
  float: left;
  padding: 15px;
}

.content-flow:after {
  content: '';
  display: table;
  clear: both;
}
.flow-list {
  display: block;
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
}

.list-item {
  display: block;
  position: relative;
}

.item-link {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

.item-link:hover > .item-banner:after {
  opacity: 1;
}

.item-link:hover > .item-banner > .category {
  background-color: #ff7f00;
}

.item-link:hover > .title {
  color: #ff7f00;
}

.item-banner {
  position: relative;
  width: 25%;
  height: 150px;
  background-size: cover;
  margin-right: 15px;
  margin-bottom: 15px;
  float: left;
  -webkit-filter: contrast(120%) sepia(20%);
  filter: contrast(120%) sepia(20%);
}

.item-banner:after {
  content: '';
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity .25s ease;
  opacity: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 35%, rgba(255,127,0,1) 100%);
}

.category {
  display: block;
  position: absolute;
  left: 0;
  bottom: -22px;
  width: 100%;
  height: 22px;
  color: #fff;
  padding-left: 20px;
  font-weight: 300;
  font-size: 10px;
  background-color: #333;
  transition: background-color .25s ease;
  line-height: 22px;
  text-transform: uppercase;
  vertical-align: middle;
}

.rating {
  display: block;
  position: relative;
  margin: 0 auto;
  background-color: rgba(0, 0, 0,.75);
  width: 75px;
  height: 75px;
  border-radius: 37.5px;
  line-height: 75px;
  font-size: 27px;
  color: #fff;
  text-align: center;
  margin-top: 37.5px;
  font-weight: 300;
  clip: rect(0px, 100px, 100px, 50px);
  z-index: 1;
}

.rating:after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 71px;
  height: 71px;
  border: 5px solid #ff7f00;
  border-radius: 50px;
  clip: rect(0px, 71px, 71px, 36.5px);
}

.rating:before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 71px;
  height: 71px;
  border: 5px solid #ff7f00;
  border-radius: 50px;
  clip: rect(0px, 71px, 36.5px, 36.5px);
  transform: rotate(180deg);
}

.title {
  transition: color .25s ease;
  margin: 0;
  margin-bottom: 5px;
  font-size: 24px;
  line-height: 1.25;
}

.meta {
  margin: 5px 0;
  font-size: 13px;
  font-weight: 300;
  color: #828282;
}

.teaser {
  margin: 5px 0;
}
</style>