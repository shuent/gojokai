import firebase from '~/plugins/firebase'
import db from '~/plugins/db'
import auth from '~/plugins/auth'

const googleProvider = new firebase.auth.GoogleAuthProvider()

export const state = () => ({
  users: [],
  posts: [],
  user: null,
  post: null,
  isLoaded: false ,
})

export const mutations = {
  setUser(state, user){
    const providerId = user.providerData['0'].providerId
    const {displayName, email, photoURL, uid} = user
    state.user = {displayName, email, photoURL, uid, providerId}
  },
  setPost(state, post){
    state.post = Object.assign({}, post)
  },
  setPosts(state, posts){
    state.posts = posts
  },
  setLoaded: (state,flg) => state.isLoaded = !!flg,
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
  setLoaded: ({commit},flg)=> commit('setLoaded', flg),

  async nuxtServerInit ({ commit }, { req }) {
    // console.log('req; ', req)
  }
}
export const getters = {
  user: state => state.user,
  post: state => state.post,
  posts: state => state.posts,
  isLoaded: state => state.isLoaded,
}
