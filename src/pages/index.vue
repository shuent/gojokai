<template>
<section class="container">
  <p class="description">
    GOJOKAI とは、個人開発者同士のプロダクトフィードバック互助会です。気になったサービスにフィードバックをしてみましょう。きっと感謝されるでしょう。
  </p>
  <h2>新着</h2>
  <div class="articles">
    {{posts}}
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
  created(){
    this.$store.dispatch('setPosts')
  }

}
</script>

<style>

.container {
  min-height: 100vh;
  justify-content: center;
}


</style>
