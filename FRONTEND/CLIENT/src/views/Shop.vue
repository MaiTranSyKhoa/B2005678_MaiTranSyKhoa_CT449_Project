<template>
  <div class="container">
    <div class="row">
     
    </div>

    <div
      v-if="length(filteredProducts)"
      class="row border border-white rounded bg-white px-3 pt-3"
    >
      <h3 class="text-center" v-if="categoryName">Sách {{ categoryName }}</h3>
      <ProductList :products="filteredProducts" />
   
    </div>
    <div
      v-else
      class="row border border-white rounded bg-white px-5 py-5 text-center"
    >
      KHÔNG CÓ SÁCH NÀO!
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
   
      products: [],
      
    };
  },
  created() {
    this.getProducts();
  },
  computed: {
    filteredProducts() {
      if (this.selectedCategory === null) {
        return this.products;
      } else {
        return this.products.filter(
          (product) => product.category === this.selectedCategory
        );
      }
    },
  },
  methods: {  
    length(list) {
      return list.length > 0;
    },
    async getProducts() {
      try {
        this.products = await ProductService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
    filterProducts(category) {
      this.selectedCategory = category.code;
      this.categoryName = category.name;
      this.isActiveTab = category;
    },
    resetFilter() {
      this.selectedCategory = null;
      this.categoryName = null;
      this.isActiveTab = 'tab1';
    },
  },  
};
</script>
