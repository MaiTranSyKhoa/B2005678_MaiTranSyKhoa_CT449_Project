<template>
  <div class="container">
    <h4 class="text-center custom-bg-color py-5">THƯ VIỆN SÁCH</h4>
    <div class="mt-3 w-50 ">
      <InputSearch v-model="searchText" />
    </div>
    
    <ProductList
      v-if="filteredProductsCount > 0"
      :products="filteredProducts"
      v-model:activeIndex="activeIndex"
      @delete:activeIndex="deleteProduct"
    />
    <p v-else>KHÔNG CÓ SÁCH NÀO!</p>
  </div>
</template>

<script>
import unidecode from "unidecode";
import InputSearch from "@/components/InputSearch.vue";
import ProductList from "@/components/ProductList.vue";
import ProductService from "@/services/product.service";

export default {
  components: {
    InputSearch,
    ProductList,
  },
  data() {
    return {
      products: [],
      activeIndex: -1,
      searchText: "",
    };
  },
  watch: {
    // Giám sát các thay đổi của biến searchText.
    // Bỏ chọn phần tử đang được chọn trong danh sách.
    searchText() {
      this.activeIndex = -1;
    },
  },
  computed: {
    // Chuyển các đối tượng product thành chuỗi để tiện cho tìm kiếm.
    productStrings() {
      return this.products.map((product) => {
        const { name, category, author } = product;
        const normalizedString = [name, category, author].join("");
        const withoutDiacritics = unidecode(normalizedString).toLowerCase();
        return withoutDiacritics;
      });
    },

    // Trả về các product có chứa thông tin cần tìm kiếm.
    filteredProducts() {
      if (!this.searchText) return this.products;
      return this.products.filter((_product, index) =>
        this.productStrings[index].includes(this.searchText)
      );
    },
    activeProduct() {
      if (this.activeIndex < 0) return null;
      return this.filteredProducts[this.activeIndex];
    },
    filteredProductsCount() {
      return this.filteredProducts.length;
    },
  },
  methods: {
    async retrieveProducts() {
      try {
        this.products = await ProductService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
    refreshList() {
      this.retrieveProducts();
      this.activeIndex = -1;
    },

    Filter(text) {
      this.searchText= text;
      this.refreshList();

    },

    async deleteProduct(id) {
      if (confirm("Bạn muốn xóa Sách này?")) {
        try {
          await ProductService.delete(id);
          this.refreshList();
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
  mounted() {
    this.refreshList();
  },
};
</script>

<style>
.custom-bg-color {
  background-color: rgb(117, 211, 117);
}
</style>