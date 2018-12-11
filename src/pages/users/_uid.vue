<template lang="html">

</template>

<script>
export default {
  validate ({store, params}) {
    console.log('posts:', store.state.users)
    // return store.state.users.some((user) => user.id === params.uid)
    return /^\d+$/.test(params.uid) // if number
  },
}
</script>

<style lang="css">
</style>
