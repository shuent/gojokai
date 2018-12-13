<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        GOJOKAI
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/about">
          About
        </a>
      </div>
      <div class="navbar-end">
        <a class="navbar-item" href="/post">
          投稿する
        </a>
        <div class="navbar-item">
          <button @click="logout" v-if="this.$store.state.user"> logout </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  methods:{
    logout(){
      firebase.auth().signOut()
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css">
</style>
