import firebase from '~/plugins/firebase'
import 'firebase/firestore'

const db = firebase.firestore()

export default {
  getUsers: async () => {
    return await db.collection('users').get().docs.map(doc => {
      return Object.assign({uid: doc.id}, doc.data())
    })
  },
  getUser: async (uid) => {
    return await db.collection('users').doc(uid).get()
  },
  // addUser: in functions on user created.
  getPosts: async () => {
    return await db.collection('posts').get().docs.map(doc => {
      return Object.assign({uid: doc.id}, doc.data())
    })
  },
  getPost: async (uid) => {
    return await db.collection('posts').doc(uid).get()
  },
  addPost: async (post) => {
    return await db.collection('posts').add(post);
  }
}
