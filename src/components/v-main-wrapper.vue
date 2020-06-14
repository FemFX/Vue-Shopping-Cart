<template>
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- <vCatalog />
    <vCart v-if="Cart.length" :cart_data="Cart" />-->
  </div>
</template>
<script>
// import vCatalog from "./v-catalog.vue";
// import vCart from "./v-cart.vue";
import { mapGetters } from "vuex";
export default {
  name: "v-main-wrapper",
  components: {
    // vCatalog,
    // vCart
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["Cart"])
  }
};
</script>
<style scoped>
.v-main-wrapper {
  margin: 0 auto;
}
</style>
