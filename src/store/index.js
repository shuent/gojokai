import firebase from '~/plugins/firebase'
import db from '~/plugins/db'

const googleProvider = new firebase.auth.GoogleAuthProvider()

export const state = () => ({
  users: [],
  posts: [],
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
    state.post = Object.assign({}, post)
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

    const post_ =  await db.addPost(post)
    console.log(await post_)
    commit('setPost', post_)
  },
  async setPost({commit}, uid){
    return await db.getPost(uid)
      .then((post)=>{
        if(post){
          commit('setPost', post);
        }else{
          throw new Error('post not found')
        }
      })
  },
  async setPosts({commit}){
    const posts = await db.getPosts()
    commit('setPosts', posts)
  },

}
export const getters = {
  user: state => state.user,
  post: state => state.post,
  posts: state => state.posts,
}
