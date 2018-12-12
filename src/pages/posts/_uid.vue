<template lang="html">
<div>
  <div class="article">
    {{post.title}}
    {{post.author}}
    {{post.thumb}}
    {{post.content}}
  </div>
  <div class="comments">
    <disqus :pageIdentifier="post.uid" pageUrl="http://localhost:3000/${post.uid}" />
  </div>
</div>
</template>

<script>
import Disqus from '~/components/Disqus.vue'

export default {
  components: {
    Disqus
  },
  validate ({store, params}) {
    return store.state.posts.some((post) => post.uid === params.uid)
  },
  computed: {
    post(){
      return this.$store.state.post
    },

  },
  created(){
    this.$store.dispatch('setPost', this.$route.params.uid)
  }
}
</script>

<style lang="css">
</style>
