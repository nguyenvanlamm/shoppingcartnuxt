export default {
  lapTops(state){
    return state.laptops
  },
  email(state){
    return state.email
  },
  isAuthted(state){
    return state.token != null
  }
}
