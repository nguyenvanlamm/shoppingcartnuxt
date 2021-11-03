<template>
  <div>
    <div class="email">
      <label>Email</label>
      <input v-model="email" type="text">
    </div>

    <div>
      <label>Password</label>
      <input v-model="password" type="password">
    </div>
    <div>
      <label>registrationPassword</label>
      <input v-model="registrationPassword" type="password">
    </div>
    <button @click="HandlerRegister">Register</button>
    <nuxt-link to="/login">Login</nuxt-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      registrationPassword: ''
    }
  },
  methods: {
    HandlerRegister() {
      if (this.password === this.registrationPassword) {
        this.$axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`, {
          email: this.email,
          password: this.password,
          returnSecureToken: true
        }).then((data) => {
          console.log(data)
        }).catch((e) => {
          console.log(e)
        })
      }
    }
  }
}
</script>

<style scoped>
.email {
  flex: 1;
  flex-direction: row;
  align-items: center;
}
</style>
