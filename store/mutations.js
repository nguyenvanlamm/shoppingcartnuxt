export default {
  setLaps(state, laps){
    state.laptops = laps
  },
  setEmail(state, email){
    state.email = email
  },
  setToken(state, token){
    state.token = token
  },
  clearToken(state){
    state.token = null
  }
}
