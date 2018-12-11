
export default function({store, route, redirect}){

  if (route.name == 'post' && !store.state.user){
    redirect('/login')
  }
}
