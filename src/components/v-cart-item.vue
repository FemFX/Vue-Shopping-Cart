<template>
  <div class="v-cart-item">
    <img class="v-cart-item__image" :src="require('../assets/images/' + cart_item_data.image)" />
    <div class="v-cart-item__info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price}}</p>
      <p>{{cart_item_data.article}}</p>
    </div>
    <div class="v-cart-item__quantity">
      <span>
        <span class="btn quantity__btn" @click="increment">+</span>
        {{cart_item_data.quantity}}
        <span class="btn quantity__btn" @click="decrement">-</span>
      </span>
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>
<script>
export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  mounted() {
    this.$set(this.cart_item_data, "quantity", 1);
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    increment() {
      this.$emit("increment");
    },
    decrement() {
      this.$emit("decrement");
    }
  }
};
</script>
<style lang="scss">
.v-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;
  &__image {
    max-width: 50px;
  }
  .quantity__btn {
    cursor: pointer;
  }
  .quantity__tools {
    user-select: none;
  }
}
</style>