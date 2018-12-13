<template lang="html">
<section>
  <button @click="loginGoogle" v-if="!isAuth"> Login with Google </button>
</section>
</template>

<script>
import auth from '~/plugins/auth';
import firebase from '~/plugins/firebase'
import { mapGetters } from 'vuex'

export default {
  data(){
    return{
      isAuth: false,
    }
  },
  computed:{
    ...mapGetters(['isLoaded']),

  },
  methods:{
    loginGoogle (){
      firebase.auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result)=>{
        this.$store.dispatch('setUser', result.user)
        this.$router.push('/post')

      })
    },
  },
  async created(){
    this.$store.dispatch('setLoaded', false)
    let user = await auth()
    if(user){
      this.$store.dispatch('setUser', user)
      this.isAuth = true;
      this.$router.push('/post')
    }

    this.$store.dispatch('setLoaded', true)
  },
}
</script>

<style lang="css">
</style>
