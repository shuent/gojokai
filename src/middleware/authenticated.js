import auth from '~/plugins/auth';

export default async function({store, route, redirect}){

  // if(route.name == 'post'){
  //   let user = await auth()
  //
  //   console.log(user)
  // }
  // const res = await auth({store})
  // console.log(store.state)
  if (route.name == 'post' && !store.getters.user){
    // console.log(store.getters.user)
    redirect('/login')
  }
}
