import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
  },
  getters: {
  },
  mutations: {
    setData(state, value) {
      state.products = value;
    },
  },
  actions: {
    fetchData( context) {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
          context.commit('setData', response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    },
  },
  modules: {
  }
})
