import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  actions: {
    Get_Products_From_API({ commit }) {
      return axios('http://localhost:3000/products', {
        method: 'GET',
      })
        .then((products) => {
          commit('Set_Products_To_State', products.data);
          return products;
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
    },
    Add_To_Cart({ commit }, product) {
      commit('Set_Cart', product);
    },
    Delete_From_Cart({ commit }, index) {
      commit('Remove_From_Cart', index);
    },
    Increment({ commit }, index) {
      commit('Increment', index);
    },
    Decrement({ commit }, index) {
      commit('Decrement', index);
    },
  },
  getters: {
    Products(state) {
      return state.products;
    },
    Cart(state) {
      return state.cart;
    },
  },
  mutations: {
    Set_Products_To_State: (state, products) => {
      state.products = products;
    },
    Set_Cart: (state, product) => {
      if (state.cart.length) {
        let isProductExists = false;
        state.cart.map((item) => {
          if (item.article === product.article) {
            isProductExists = true;
            item.quantity++;
          }
        });
        if (!isProductExists) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    Remove_From_Cart: (state, index) => {
      state.cart.splice(index, 1);
    },
    Increment: (state, index) => {
      state.cart[index].quantity++;
    },
    Decrement: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    },
  },
});

export default store;
