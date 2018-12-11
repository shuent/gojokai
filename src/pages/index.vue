<template>
<section class="container">
  <p class="description">
    GOJOKAI とは、個人開発者同士のプロダクトフィードバック互助会です。気になったサービスにフィードバックをしてみましょう。きっと感謝されるでしょう。
  </p>
  <h2>新着</h2>
  <div class="articles">

    <li v-for="post of posts">
      <nuxt-link :to=' "posts/"+ post.uid ' > {{post.title}} </nuxt-link>
    </li>
  </div>
</section>
</template>

<script>

export default {
  computed:{
    posts(){
      return this.$store.state.posts
    }
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  justify-content: center;
}


</style>
