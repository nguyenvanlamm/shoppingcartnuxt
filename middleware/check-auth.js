
export default function (context){
  console.log("asdsdkg=========")
  context.store.dispatch('initAuth', context.req)
}
