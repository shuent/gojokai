import firebase from '~/plugins/firebase'
import db from '~/plugins/db'

const googleProvider = new firebase.auth.GoogleAuthProvider()

export const state = () => ({
  users: [],
  posts: [
    {uid: '1', title: "title", thumb: "thumb_url", content: '## yoyo yo', author: 'set user' }
  ],
  user: null,
  post: null,
})

export const mutations = {
  setUser(state, user){
    console.log(user)
    const providerId = user.providerData['0'].providerId
    const {displayName, email, photoURL, uid} = user
    state.user = {displayName, email, photoURL, uid, providerId}
  },
  setPost(state, post){
    state.post = post
  },
  setPosts(state, posts){
    state.posts = posts
  }
}

export const actions = {
  loginGoogle(){
    firebase.auth().signInWithRedirect(googleProvider)
  },
  setUser({commit}, user){
    commit('setUser', user)
  },
  async addPost({commit}, post){
    return await db.addPost(post)
  },
  async setPost({commit}, uid){
    const post = await db.getPost(uid)
    commit('setPost', post)
  },
  async setPosts({commit}){
    const posts = await db.getPosts()
    commit('setPosts', posts)
  },

}
export const getters = {

}
