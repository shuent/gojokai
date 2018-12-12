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
    const snapShot =  await db.collection('posts').get()
    return snapShot.docs.map(doc => {
      return Object.assign({uid: doc.id}, doc.data())
    })
  },
  getPost: async (uid) => {
    return await db.collection('posts').doc(uid).get().then( q => q.data())
  },
  addPost: async (post) => {
    const ref = await db.collection('posts').add(post);
    return await ref.get()
      .then(q =>{
        return Object.assign({uid: q.id}, q.data())
      })
  }
}
