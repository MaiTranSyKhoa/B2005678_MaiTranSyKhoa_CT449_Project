<template>
  <div class="container p-5">
    <Form @submit="submitProduct" :validation-schema="productFormSchema">

      <div class="row">
        <div class="col-lg-4">
          <div class="form-group">
            <label for="name">Tên sách</label>
            <Field name="name" type="text" class="form-control" v-model="productLocal.name"/>
            <ErrorMessage name="name" class="error-feedback"/>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <label for="author">Tác Giả</label>
            <Field name="author" type="text" class="form-control" v-model="productLocal.author"/>
            <ErrorMessage name="author" class="error-feedback"/>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <label for="nxb">Nhà Xuất Bản</label>
            <Field name="nxb" type="text" class="form-control" v-model="productLocal.nxb"/>
            <ErrorMessage name="nxb" class="error-feedback"/>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4">
          <div class="form-group">
            <label for="number">Số Lượng:</label>
            <Field name="number" type="number" min="10" class="form-control" v-model="productLocal.number"/>
            <ErrorMessage name="number" class="error-feedback"/>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <label for="price">Đơn Giá</label>
            <Field name="price" type="number" min="1000" class="form-control" v-model="productLocal.price"/>
            <ErrorMessage name="price" class="error-feedback"/>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <label for="pages">Số trang</label>
            <Field name="pages" type="number" min="50" class="form-control" v-model="productLocal.pages"/>
            <ErrorMessage name="pages" class="error-feedback"/>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="form-group">
            <label for="image">Ảnh Bìa</label>
            <Field name="image" type="file" class="form-control" v-model="productLocal.image"/>
            <ErrorMessage name="image" class="error-feedback"/>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="form-group">
            <label for="detail">Mô Tả:</label>
            <Field name="detail">
              <textarea class="form-control" v-model="productLocal.detail" rows="10"></textarea>
            </Field>
            <ErrorMessage name="detail" class="error-feedback"/>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="form-group my-2">
            <button class="btn btn-primary">LƯU SÁCH</button>
          </div>
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: { Form, Field, ErrorMessage },
  emits: ["submit:product"],
  props: { product: { type: Object, required: true } },
  data() {
    const productFormSchema = yup.object().shape({
      name: yup.string().required("Tên phải có giá trị.").min(2, "Tên phải ít nhất 2 ký tự.").max(100, "Tên có nhiều nhất 100 ký tự."),
    });
    return {
      productLocal: this.product,
      productFormSchema,
    };
  },
  methods: {
    submitProduct() {
      this.$emit("submit:product", this.productLocal);
    },
  },
};
</script>
