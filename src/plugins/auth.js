import firebase from '~/plugins/firebase'

function auth () {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      resolve(user || false)
      // store.dispatch('setUser', user)
    })
  })
}
export default auth
