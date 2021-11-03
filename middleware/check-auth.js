
export default function (context){
  console.log("adas=====", process.client)
  if(process.client) context.store.dispatch('initAuth')
}
