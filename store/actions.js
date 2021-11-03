import axios from "axios";

export default {
  nuxtServerInit({commit}) {
    return axios.get('https://shoppingcartnux-default-rtdb.firebaseio.com/laptops.json').then((reponse) => {
      commit('setLaps', reponse.data)
    }).catch((e) => {
      console.log(e)
    })
  },
  setEmail({commit}, email) {
    commit('setEmail', email)
  },
  setToken({commit}, token){
    commit('setToken', token)
  },
  initAuth({commit}){
    const idToken = localStorage.getItem('token');
    console.log("id_token" + idToken)
    if(idToken === null) return false
    commit('setToken', idToken)
  },
  clearToken({commit}){
    commit('clearToken')
  }
}
