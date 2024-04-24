<template>
  <div :id="'modal_' + product._id" class="modal fade" tabindex="-1" :aria-labelledby="'modal_' + product._id + 'Label'" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h3>CHI TIẾT SÁCH</h3>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-6">
              <img :src="'http://localhost:3000/' + product.image" class="card-img-top" :alt="product.name" />
            </div>
            <div class="col-6">
              <h5>Tên Sách: <strong>{{ product.name }}</strong></h5>
              <h5>Tác giả: <strong>{{ product.author }}</strong></h5>
              <h5>Nhà xuất bản: <strong>{{ product.nxb }}</strong></h5>
              <h5>Số lượng còn: <strong>{{ product.number }} sách</strong></h5>
              <h5>Đơn Giá: <strong>{{ formatNum(product.price) }} đ</strong></h5>
              <h5>Số trang: <strong>{{ product.pages }}</strong></h5>
              <h5>Mô Tả: <strong>{{ product.detail }}</strong></h5>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <router-link :to="{ name: 'product.edit', params: { id: product._id } }">
            <button class="btn btn-primary"><i class="fa-regular fa-pen-to-square"></i></button>
          </router-link>
          <button @click="deleteProduct(product._id)" class="btn btn-danger"><i class="fa-regular fa-trash-can"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { product: { type: Object, required: true } },
  emits: ["delete:activeIndex"],
  methods: {
    formatNum(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    deleteProduct(id) {
      this.$emit("delete:activeIndex", id);
    },
  },
};
</script>

<style scoped>
</style>
