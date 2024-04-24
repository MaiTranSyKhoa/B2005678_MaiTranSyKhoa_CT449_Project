<template>
  <div class="row px-5">
    <div class="col-md-4 mb-4" v-for="product in products" :key="product._id">
      <div class="d-flex h-100">
        <div class="card">
          <img
            :src="'http://localhost:3000/' + product.image"
            class="card-img-top"
            :alt="product.name"
          />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <h5 class="card-subtitle mb-2 text-danger h5">{{ formatNum(product.price) }}đ</h5>
            <p class="card-text">
              <strong>Số lượng:</strong> {{ LimitLenght(product.number, 100) }}
            </p>
          </div>

         
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    products: { type: Array, default: [] },
  },
  methods: {
    formatNum(number) {
      number = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return number;
    },
    LimitLenght(description, maxLength) {
      if (description.length > maxLength) {
        const lastSpaceIndex = description.lastIndexOf(" ", maxLength);

        const truncatedText =
          lastSpaceIndex !== -1
            ? description.substring(0, lastSpaceIndex)
            : description.substring(0, maxLength);

        return truncatedText + "...";
      } else {
        return description;
      }
    },
    updateActiveIndex(index) {
      this.$emit("update:activeIndex", index);
    },
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #dee2e6;
  border-radius: 6px;
  margin-top: 50px;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 500;
}

.card-subtitle {
  font-size: 1rem;
}

.card-text {
  font-size: 0.9rem;
}
</style>
