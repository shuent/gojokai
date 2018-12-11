import firebase from '~/plugins/firebase'

const googleProvider = new firebase.auth.GoogleAuthProvider()

export const state = () => ({
  users: [],
  posts: [
    {uid: '1', title: "title", thumb: "thumb_url", content: '## yoyo yo', author: 'set user' }
  ],
  user: null,
})

export const mutations = {
  setUser(state, user){
    console.log(user)
    // console.log(state, user)
    const {displayName, email, photoURL, uid} = user
    console.log()
    state.user = {displayName, email, photoURL, uid}
  }
}

export const actions = {
  loginGoogle({commit}){
    firebase.auth().signInWithRedirect(googleProvider)
  },
  setUser({commit}, user){
    commit('setUser', user)
  }

}
export const getters = {

}
