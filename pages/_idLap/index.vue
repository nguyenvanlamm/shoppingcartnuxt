<template>
  <div class="styleHomeItemLap">
    <div>
      <img class="imageItem" :src=lapTops[$route.params.idLap].thumbnail_url>
    </div>
    <div class="styleDescript">
      <span class="styleTitleItem">{{ lapTops[$route.params.idLap].title }}</span>
      <span class="stylePrice">${{ lapTops[$route.params.idLap].price }}</span>
    </div>
    <div class="styleDes">
      {{ lapTops[$route.params.idLap].description }}
    </div>
    <div class="styleCountItemLap">
      <span>
              {{ lapTops[$route.params.idLap].quantity }} left in stock
      </span>
      <span>
        <button class="buttonAddCartItem">Add To Cart</button>
      </span>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  middleware: 'auth',
  computed: {
    ...mapGetters(['lapTops'])
  }
}
</script>

<style>
.styleHomeItemLap {
  top: 20px;
  left: 100px;
}

.styleDes {
  position: absolute;
  top: 350px;
  left: 400px;
}

.buttonAddCartItem{
  position: absolute;
  left: 480px;
  width: 100px;
  color: white;
  background-color: #28a745;
  border-color: #28a745;
}

.styleCountItemLap {
  color: #D17581;
  position: absolute;
  top: 400px;
  left: 400px;
}

.imageItem {
  left: 500px;
  position: absolute;
  height: 300px;
  width: 300px;
}

.styleTitleItem {
  font-size: 25px;
}

.stylePrice {
  position: absolute;
  font-size: 25px;
  left: 500px;
}

.styleDescript {
  left: 400px;
  top: 300px;
  position: absolute;
}
</style>
