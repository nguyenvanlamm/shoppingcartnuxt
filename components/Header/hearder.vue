<template>
  <div class="header">
    <span class="onlineStore">
      <nuxt-link class="clearLine" to="/">Online Store</nuxt-link>
    </span>
    <span class="inform">
      <span class="infor" v-if="token === null">
        <nuxt-link class="clearLine" to="/login">Login</nuxt-link>
        <nuxt-link class="clearLine" to="/register">Register</nuxt-link>
      </span>
      <span v-if="token !== null">
        <a class="infor" @click="handlerLogout">Logout {{ email }}</a>
      </span>
      <span class="StylyeBtnCheckOut">
        <button class="btnCheckOut" @click="checkOutPrice" >Checkout
        <label>{{1}} (${{100}})</label>
        </button>
      </span>
    </span>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import cookies from "js-cookie";

export default {
  computed: {
    ...mapGetters(['email', 'token'])
  },
  methods: {
    handlerLogout() {
      this.$store.dispatch('setEmail', null)
      this.$store.dispatch('clearToken')
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      cookies.set('token', '')
      cookies.set('email', '')
    },
    checkOutPrice(){
      this.$router.push('/paysLaptop')
    }
  }
}
</script>

<style>
.header {
  z-index: 10;
  flex: 1;
  top: 0;
  left: 0;
  right: 0;
  flex-direction: row;
  background-color: #343a40;
  padding: 10px;
  position: fixed;
}

.StylyeBtnCheckOut {
  padding: 5px 5px 5px 5px;
  width: 200px;
}

.infor {
  padding: 0 0;
  background-color: #343a40;
  border-color: #343a40;
  color: white;
}

.onlineStore {
  position: relative;
}

.inform {
  margin-left: 1000px;
  flex-direction: row;
  position: relative;
  align-content: space-around;
}

.clearLine {
  color: white;
  text-decoration: none;
}
</style>
