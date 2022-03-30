export default function({ store, app, redirect }) {
  if(!store.getters['user/auth']) {
    redirect('/')
  }
}


  


  