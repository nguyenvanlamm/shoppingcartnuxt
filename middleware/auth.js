export default function (context){
  if(!context.store.getters.isAuthted) context.redirect('/login')
}
