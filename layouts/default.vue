<template>
  <div class="">
    <Header></Header>
    <nuxt />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~/components/Header/hearder'
import Footer from '~/components/Footer/footer'
export default {
  middleware: 'check-auth',
  components:{
    Header,
    Footer
  }
}
</script>

