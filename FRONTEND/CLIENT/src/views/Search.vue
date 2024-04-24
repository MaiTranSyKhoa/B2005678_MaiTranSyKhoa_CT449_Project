<template>
  <div class="container">
    <div class="row">
      <div
        class="col border border-white rounded bg-white my-3 pt-3 pb-0 justify-content-between"
      >
        <h4>NHỮNG SÁCH PHÙ HỢP VỚI TỪ KHÓA '{{ searchText }}'</h4>
      </div>
    </div>

    <div
      v-if="hasFilteredProducts"
      class="row border border-white rounded bg-white px-3 pt-3"
    >
      <ProductList :products="filteredProducts" />
    </div>
    <div
      v-else
      class="row border border-white rounded bg-white px-5 py-5 text-center"
    >
      KHÔNG CÓ SÁCH NÀO PHÙ HỢP!
    </div>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";
import ProductService from "@/services/product.service";

export default {
  components: {
    ProductList,
  },
  data() {
    return {
      searchText: "",
      products: [],
      selectedCategory: null,
    };
  }, 
  computed: {
    hasToken() {
      return localStorage.getItem("token") !== null;
    },
    getuserId() {
      return localStorage.getItem("userId");
    },
    filteredProducts() {
      return this.products;
    },
    hasFilteredProducts() {
      return this.filteredProducts.length > 0;
    },
  },
  methods: {
  
    async getProducts() {
      try {
        this.searchText = this.$route.params.query;
        this.products = await ProductService.search(this.searchText);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
