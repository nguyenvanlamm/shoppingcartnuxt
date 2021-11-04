export default {
  setLaps(state, laps) {
    state.laptops = laps
  },
  setEmail(state, email) {
    state.email = email
  },
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  },
  addCart(state, key) {
    console.log(state.laptops[key].countPays, "count")
    console.log(typeof state.laptops[key].countPays)
    state.laptops[key].countPays += 1;
  },

  UpdateCount(state, oldCount){
    // state.laptops
  }

}
