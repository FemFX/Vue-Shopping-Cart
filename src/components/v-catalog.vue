<template>
  <div class="v-catalog">
    <router-link :to="{name : 'cart', params : {cart_data : Cart}}">
      <div class="v-catalog__link_to_cart">Cart : {{ Cart.length }}</div>
    </router-link>

    <h1>Catalog</h1>
    <div class="v-catalog__list">
      <vCatalogItem
        v-for="product in Products"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>
<script>
import vCatalogItem from "./v-catalog-item";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "v-catalog",
  components: {
    vCatalogItem
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["Products", "Cart"])
  },
  methods: {
    ...mapActions(["Get_Products_From_API", "Add_To_Cart"]),
    addToCart(data) {
      this.Add_To_Cart(data);
    }
  },
  mounted() {
    this.Get_Products_From_API().then(res => {
      if (res.data) {
        console.log("Data arrived");
      }
    });
  }
};
</script>
<style lang="scss">
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  &__link_to_cart {
    position: fixed;
    top: 80px;
    right: 10px;
    padding: 16;
    border: solid 1px #aeaeae;
    background: #ffffff;
  }
}
.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.range-slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}
.range-slider svg,
.range-slider input[type="range"] {
  position: absolute;
  left: 0;
  bottom: 0;
}
input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}
</style>
