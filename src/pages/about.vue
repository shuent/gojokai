<template lang="html">
<div class="container">
  <div>
    <h1>
      GOJOKAI とは
    </h1>
    <p>
      個人開発者による個人開発者のための相互プロダクトフィードバックサービスです。プロダクトを開発,運用していて大変なことや困っていることを投稿、SNSに共有してみてください。きっと優しい先輩が助けてくれるでしょう。開発者にとって反応、感想、意見は何よりも嬉しいものです。フィードバックをするととても喜ばれるでしょう。そんな良い循環の中から、個人開発者が安心して開発できる環境が生まれて、より多く、より良いサービスが増えていくと信じています。
    </p>
  </div>
  <div class="comments">
    <disqus pageIdentifier="yoo" pageUrl="http://localhost:3000/yoo" />
  </div>

</div>
</template>

<script>
import Disqus from '~/components/Disqus.vue'

export default {
  components: {
    Disqus
  },
  data(){
    return {
      about: 'about'
    }
  },
  created(){
    this.$store.dispatch('setLoaded', true)
    
  }
}
</script>

<style lang="css">
.container {
  text-align: center;
}
</style>
