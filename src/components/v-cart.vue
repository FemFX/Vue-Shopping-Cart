<template>
  <div class="v-cart">
    <router-link :to="{name : 'catalog'}">
      <div class="v-catalog__link_to_cart">Back to Catalog</div>
    </router-link>
    <h1>Cart</h1>
    <vCartItem
      v-for="(item,index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <div class="v-cart__total">
      <p class="total__name">Total :</p>
      <p>{{cartTotalCost}}</p>
    </div>
  </div>
</template>
<script>
import vCartItem from "./v-cart-item";
import { mapActions } from "vuex";
export default {
  name: "v-cart",
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    vCartItem
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["Delete_From_Cart", "Increment", "Decrement"]),
    deleteFromCart(index) {
      this.Delete_From_Cart(index);
    },
    increment(index) {
      this.Increment(index);
    },
    decrement(index) {
      this.Decrement(index);
    }
  },
  computed: {
    cartTotalCost() {
      return this.cart_data.reduce(
        (res, item) => res + item.price * item.quantity,
        0
      );
    }
  }
};
</script>
<style lang="scss">
.v-cart {
  margin-bottom: 100px;
  &__total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 16px 24px;
    display: flex;
    justify-content: center;
    background: #26ae68;
    color: #ffffff;
    font-size: 20px;
  }
  .total__name {
    margin-right: 16px;
  }
}
</style>
