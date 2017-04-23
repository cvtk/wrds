<template>
  <div class="content-flow">
    <div class="flow-filter"></div>
    <ul class="flow-list">
      <li class="list-item" v-for="item in anArray">
        <router-link to="/" class="item-link">
          <div class="item-banner" :style="{'background-image': 'url(' + item.image + ')'}">
            <span class="rating">{{ item.rating }}</span>
            <span class="category">Проза</span>
          </div>
          <h2 class="title">{{ item.title }}</h2>
          <p class="meta">{{ item.author }}, {{ item.date }}</p>
          <p class="teaser">{{ item.teaser }}</p>
          <span class="suspend"></span>
          <span class="views"></span>
        </router-link>
      </li>
    </ul>
  </div> 
</template>

<script>
  import db from '../db'
  export default { 
    name: 'content-flow',
    firebase: { anArray: db.ref('publications') } 
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
.content-flow > .flow-list {
  display: block;
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
}

.content-flow > .flow-list > .list-item {
  display: block;
  position: relative;
  cursor: pointer;
}

.content-flow > .flow-list > .list-item >.item-link {
  text-decoration: none;
  color: inherit;
}

.content-flow > .flow-list > .list-item:hover > .item-link > .item-banner:after {
  opacity: 1;
}

.content-flow > .flow-list > .list-item:hover > .item-link > .item-banner > .category {
  background-color: #ff7f00;
}

.content-flow > .flow-list > .list-item:hover > .item-link > .title {
  color: #ff7f00;
}

.content-flow > .flow-list > .list-item > .item-link > .item-banner {
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

.content-flow > .flow-list > .list-item > .item-link > .item-banner:after {
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

.content-flow > .flow-list > .list-item > .item-link > .item-banner > .category {
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

.content-flow > .flow-list > .list-item > .item-link > .item-banner > .rating {
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

.content-flow > .flow-list > .list-item > .item-link > .item-banner > .rating:after {
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

.content-flow > .flow-list > .list-item > .item-link > .item-banner > .rating:before {
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

.content-flow > .flow-list > .list-item > .item-link > .title {
  transition: color .25s ease;
  margin: 0;
  margin-bottom: 5px;
  font-size: 24px;
  line-height: 1.25;
}

.content-flow > .flow-list > .list-item > .item-link > .meta {
  margin: 5px 0;
  font-size: 13px;
  font-weight: 300;
  color: #828282;
}

.content-flow > .flow-list > .list-item > .item-link > .teaser {
  margin: 5px 0;
}
</style>