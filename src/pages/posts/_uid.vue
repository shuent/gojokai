<template lang="html">
<div>
  <!-- {{ post }} -->
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
import { mapGetters } from 'vuex'

export default {
  components: {
    Disqus
  },
  validate ({store, params}) {
    return 1
    // store.dispatch('setPost')
    // return store.state.posts.some((post) => post.uid === params.uid)
  },
  computed: {
    ...mapGetters(['post']),

  },
  async fetch({store, params, error}){
    if(store.getters.post) return;
    return await store.dispatch('setPost', params.uid)
      .catch(()=>{
        error({statusCode:403, message:'not found'})
      })
  }
}
</script>

<style lang="css">
</style>
