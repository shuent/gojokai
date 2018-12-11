<template lang="html">
  <div class="">
    <div class="editor">
      <input type="text" placeholder="title">
      <label for="img_upload">
        [Image upload]
        <input id="img_upload" type="file" accept="image/*" name="thumb" style="display:none">
      </label>
      <textarea :value="input" @input="update"></textarea>
      <div v-html="compiledMarkdown"></div>
      <input type="submit">
    </div>
  </div>

</template>

<script>
const marked = require('marked');
import _ from "lodash";

export default {
  data(){
    return {
      input: '# hello',
    }
  },
  computed: {
    compiledMarkdown: function () {
      // console.log(marked)
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300)
  }
}
</script>

<style lang="css">
</style>
