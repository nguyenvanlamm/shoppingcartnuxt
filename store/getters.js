export default {
  lapTops(state){
    return state.laptops
  },
  email(state){
    return state.email
  },
  token(state){
    return state.token
  },
  isAuthted(state){
    return state.token !== null
  },
  lappays(state){
    return state.lappays
  }
}
