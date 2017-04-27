<template>
  <default-layout v-if="publication['.value'] === null" :data-loading="dataLoading">
    <not-found></not-found>
  </default-layout>
  <default-layout v-else :data-loading="dataLoading">
    {{ publication }}
  </default-layout>
</template>
<script>
  import DefaultLayout from '../layouts/default.vue'
  import NotFound from './NotFound.vue'

  import firebase from '../../db'
  const db = firebase.database()
  export default {
    name: 'publication',
    data () {
      return { 
        dataLoading: true,
      }
    },
    mounted () {
      db.ref('publications').child(this.$route.params.key).once('value', snapshot => {
        this.dataLoading = false
      })
    },
    firebase () {
      return {
        publication: {
          source: db.ref('publications').child(this.$route.params.key),
          asObject: true,
          cancelCallback: function (error) {
            console.log(error)
          }
        }
      }
    },
    components: { DefaultLayout, NotFound }
  }
</script>

<style lang="scss" scoped>


</style>