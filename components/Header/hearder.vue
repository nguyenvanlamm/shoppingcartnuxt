<template>
  <div class="header">
    <span class="onlineStore">
      <nuxt-link class="clearLine" to="/">Online Store</nuxt-link>
    </span>
    <span class="inform">
      <span class="infor" v-if="email === ''">
        <nuxt-link class="clearLine" to="/login">Login</nuxt-link>
        <nuxt-link class="clearLine" to="/register">Register</nuxt-link>
      </span>
      <span v-if="email !== ''">
        <a class="infor" @click="handlerLogout">Logout {{ email }}</a>
      </span>
      <span class="StylyeBtnCheckOut">
        <button class="btnCheckOut">Checkout
        <label>Price</label>
        </button>
      </span>
    </span>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(['email'])
  },
  methods: {
    handlerLogout() {
      this.$store.dispatch('setEmail', '')
      this.$store.dispatch('clearToken')
      localStorage.removeItem('token')
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
