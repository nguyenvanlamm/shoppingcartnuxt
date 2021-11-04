<template>
  <div class="homePay">
    <tr class="styleRow">
      <td class="styleColum1">Product</td>
      <td class="styleColum2">Price</td>
      <td class="styleColum3">Quantity</td>
      <td class="styleColum4">Subtotal</td>
    </tr>
    <div class="styleList" v-for="(item, key) in lappays" :key="key">
      <div class="description">
        {{ item.description }}
      </div>
      <div class="stylePricePay">
        ${{ item.price }}
      </div>
      <input type="number" onchange="UpdateCount(key)" v-model=item.quantity class="styleQuantity">
      <div class="styleSubtotal">
        {{item.price * item.quantity}}
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data(){
    return {

    }
  },

  computed: {
    ...mapGetters(['lappays']),
  },

  methods:{
    UpdateCount(oldCount){
      this.$store.dispatch('UpdateCount', oldCount)
    }
  }

}
</script>

<style>

.styleQuantity {
  width: 80px;
  left: 500px;
}

.styleSubtotal{
  /* position: absolute; */
  left: 600px;
}

.homePay {
  top: 100px;
  position: absolute;
}

.styleList {
  /* position: absolute; */
  top: 100px;
}

.stylePricePay {
  /* position: absolute; */
  left: 400px;
}

.description {
  /* position: absolute; */
  left: 10px;
  width: 380px;
}

.styleColum1 {
  left: 10px;
  position: absolute;
}

.styleColum2 {
  left: 400px;
  position: absolute;
}

.styleColum3 {
  left: 500px;
  position: absolute;
}

.styleColum4 {
  left: 600px;
  position: absolute;
}

.styleRow {
  flex: 1;
  top: -50px;
  position: absolute;
  justify-content: space-around;
}
</style>
