<template>
<section class="container">
  <p class="description">
    GOJOKAI とは、個人開発者同士のプロダクトフィードバック互助会です。気になったサービスにフィードバックをしてみましょう。きっと感謝されるでしょう。
  </p>
  <h2>新着</h2>
  <div class="articles">
    <li v-for="post in posts">
      <nuxt-link :to=' "posts/"+ post.uid ' > {{post.title}} </nuxt-link>
    </li>
  </div>
</section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed:{
    ...mapGetters(['posts']),
  },
  async created(){
    this.$store.dispatch('setPosts')
    this.$store.dispatch('setLoaded', true)
  }


}
</script>

<style>

.container {
  min-height: 100vh;
  justify-content: center;
}


</style>
