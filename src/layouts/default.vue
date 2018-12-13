<template>
  <div>
    <navbar />
    <div class="wrapper" v-if="!isLoaded">loading...</div>
    <div class="wrapper" v-show="isLoaded">
      <nuxt/>
    </div>
  </div>
</template>
<script>
import Navbar from '~/components/Navbar.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Navbar
  },
  computed:{
    ...mapGetters(['isLoaded'])
  }
}
</script>



<style>
html {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
