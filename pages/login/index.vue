<template>
  <div class="homeLogin">
    <div>
      <label>Email</label>
      <input v-model="email" type="text">
    </div>

    <div>
      <label>Password</label>
      <input v-model="password" type="password">
    </div>
    <button @click="HandlerLogin">Login</button>
    <nuxt-link to="/register">Register</nuxt-link>
  </div>
</template>

<script>

import cookies from "js-cookie"

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    HandlerLogin() {
      this.$axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbApiKey}`, {
        email: this.email,
        password: this.password,
        returnSecureToken: true
      }).then((data) => {
        localStorage.setItem('token', data.data.idToken);
        localStorage.setItem('email', this.email)
        cookies.set('token', data.data.idToken);
        cookies.set('email', this.email);
        this.$router.push('/');
        this.$store.dispatch('setToken', data.data.idToken);
        this.$store.dispatch('setEmail', this.email);
      }).catch((e) => {
        console.log(e)
      })
    }
  }
}
</script>

<style>
  .homeLogin{
    position: absolute;
    top: 100px;
  }
</style>
