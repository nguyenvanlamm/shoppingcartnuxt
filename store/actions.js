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
  setToken({commit}, token) {
    commit('setToken', token)
  },
  initAuth({commit}, req) {
    let idToken;
    let email;
    if (req) {
      // handler
      if(!req.headers.cookie) return false
      const tokenKey = req.headers.cookie.split(';').find(c => c.trim().startsWith('token='))
      const emailData = req.headers.cookie.split(';').find(c => c.trim().startsWith('email='))
      if(!tokenKey || !emailData) return false
      idToken = tokenKey.split('=')[1]
      email = emailData.split('=')[1]
    } else {
      idToken = localStorage.getItem('token');
      email = localStorage.getItem('email');
      if (idToken === '' || email === '') return false
    }
    commit('setToken', idToken)
    commit('setEmail', email)
  },
  addCart({commit}, key){
    commit('addCart', key)
  },

  clearToken({commit}) {
    commit('clearToken')
  },

  UpdateCount({commit}, oldCount){
    commit('UpdateCount', oldCount)
  }
}
