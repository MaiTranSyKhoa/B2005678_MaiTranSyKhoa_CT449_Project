<template>
  <div class="container">
    <h4  class="text-center custom-bg-color py-5">THÊM SÁCH MỚI</h4>
    <ProductForm
      :product="product"
      @submit:product="addProduct"
    />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import ProductForm from "@/components/ProductForm.vue";

import ProductService from "@/services/product.service";
export default {
  components: {
    ProductForm,
  },

  data() {
    return {
      product: {},
      message: "",
    };
  },
  methods: {   
    async addProduct(data) {
      try {
        await ProductService.create(data);
        alert("Đã thêm sách thành công.");
      } catch (error) {
        console.log(error);
      }
    },    
  },  
};
</script>
<style>
.custom-bg-color {
  background-color: rgb(117, 211, 117);
}
</style>