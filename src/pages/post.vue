<template lang="html">
  <div class="">
    <div class="editor">
      <form @submit.prevent.once="doPost">
        <input type="text" placeholder="title" v-model="title">
        <label for="img_upload">
          [Image upload]
          <input id="img_upload" type="file" accept="image/*" name="thumb" style="display:none">
        </label>
        <textarea :value="content" @input="update"></textarea>
        <div v-html="compiledMarkdown"></div>
        <input type="submit">
      </form>
    </div>
  </div>

</template>

<script>
const marked = require('marked');
import _ from "lodash";
import { mapGetters } from 'vuex'

export default {
  data(){
    return {
      content: '# hello',
      title: '',
    }
  },
  computed: {
    ...mapGetters(['user', 'post']),
    compiledMarkdown: function () {
      // console.log(marked)
      return marked(this.content, { sanitize: true })
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.content = e.target.value
    }, 300),
    async doPost(){
      await this.$store.dispatch('addPost',{
        title: this.title,
        content: this.content,
        user_id: this.user.uid
      })

      console.log(this.post)
      this.$router.push('/posts/' + this.post.uid)
    }
  }
}
</script>

<style lang="css">
</style>
