<template>
  <div class="styleHome">
    <label>Home</label>
    <nuxt-link to="/test">AHihi</nuxt-link>
    <div v-for="(item, key) in lapTops" :key=key>
      <div class="styleItem">
        <div>
          <img class="styleImg" :src=lapTops[key].thumbnail_url />
        </div>
        <div class="styleTitle">
          <a class="styleLink" @click="tabItem(key)">
            {{ item.title }}
          </a>
        </div>
        <div class="countLaps">
          {{ item.quantity }} left in stock
        </div>
        <div>
          {{ item.description }}
        </div>
        <div class="eventCart">
          ${{ item.price }}
          <button class="buttonAddCart" @click="addCart(key)">Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  data() {
    return {}
  },

  layout: 'default',
  computed: {
    ...mapGetters(['lapTops']),
  },
  methods: {
    ...mapActions(['nuxtServerInit']),
    tabItem(key) {
      this.$router.push(`/${key}`)
    },
    addCart(key) {
      this.$store.dispatch('addCart', key);
    }
  }
}
</script>

<style>
.styleHome {
  top: 100px;
  position: absolute;
}

.eventCart {
  justify-content: space-around;
}

.styleLink {
  text-decoration: none;
}

.buttonAddCart {
  position: absolute;
  left: 200px;
  color: white;
  background-color: #28a745;
  border-color: #28a745;
}

.countLaps {
  color: #D17581;
}


.styleImg {
  top: 0;
  height: 200px;
  width: 200px;
}

.styleTitle {
  color: #3eaf7c;
}

.styleItem {
  top: 60px;
  height: 300px;
  width: 500px;
}
</style>
