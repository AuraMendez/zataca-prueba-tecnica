<template>
  <div id="app">
    <div class="search-bar">
      
      <select name="searchType" id="search-type" v-model="searchType">
        <option value="">Search by</option>
        <option value="title">Title</option>
        <option value="body">Body</option>
        <option value="user">User</option>
      </select>
      <input type="text" id="searchText" v-model="searchText">
    </div>
    <section class="cards-container">
      <product-card v-for="product in productsbySearch" :key="product.id" v-bind="product"></product-card>
    </section>
  </div>
</template>

<script>
import productCard from './components/ProductCard.vue'

export default {
  data() {
    return {
      searchText: '',
      searchType: '',
    }
  },
  components: {
    'product-card': productCard,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    productsbySearch() {
      if (this.searchText && this.searchType) {
        if (this.searchType === 'title' || this.searchType === 'body') {
          const re = new RegExp(`${this.searchText}`);
          return this.$store.state.products.filter((product) => re.test(product[this.searchType]))
        }
        if (this.searchType === 'user') {
          return this.$store.state.products.filter((product) => product.userId === parseInt(this.searchText));
        }
      }
      return this.$store.state.products;
    }
  },
  created() {
    this.$store.dispatch('fetchData');
  },
}
</script>

<style lang="scss">
body {
  font-family: Arial, Helvetica, sans-serif;
}

.search-bar {
  padding: 1rem;

  input {
    margin-left: 1rem;
  }
}

.cards-container {
  display: flex;
  flex-wrap: wrap;

  .product-card {
    border: solid 1px black;
    border-radius: 1rem;
    max-width: 300px;
    padding: 2rem;
    margin: 1rem;
  }
}
</style>
