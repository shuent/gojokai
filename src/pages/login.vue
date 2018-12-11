<template lang="html">
<section>
  <button @click="loginGoogle"> Login with Google </button>
  {{ sth }}
</section>
</template>

<script>
import auth from '~/plugins/auth';

export default {
  data(){
    return{
      sth: 'usus'
    }
  },
  methods:{
    loginGoogle (){
      this.$store.dispatch('loginGoogle')
    }
  },
  async created(){
    let user = await auth()
    // console.log(this.$store.)
    this.$store.dispatch('setUser', user)
    if(user){
      this.$router.push('/post')
    }
  }
}
</script>

<style lang="css">
</style>
