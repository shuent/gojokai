<template lang="html">
<section>
  <button @click="loginGoogle"> Login with Google </button>
  {{ test }}
</section>
</template>

<script>
import auth from '~/plugins/auth';
import firebase from '~/plugins/firebase'

export default {
  data(){
    return{
      test: 'test'
    }
  },
  methods:{
    loginGoogle (){
      this.$store.dispatch('loginGoogle')
    },

  },
  async mounted(){
    let user = await auth()

    this.$store.dispatch('setUser', user)
    if(user){
      this.$router.push('/post')
    }
  }
}
</script>

<style lang="css">
</style>
