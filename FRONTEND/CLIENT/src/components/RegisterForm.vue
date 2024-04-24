<template>
  <Form @submit="submitUser" :validation-schema="userFormSchema">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div
          class="card mt-0 p-1 border-0"
          style="border-radius: 1rem; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2)"
        >
          <div class="card-body">
            <div class="mb-3">
              <label for="name" class="form-label">Họ và Tên</label>
              <Field
                name="name"
                type="text"
                class="form-control"
                v-model="userLocal.name"
              />
              <ErrorMessage name="name" class="error-feedback" />
            </div>

            <div class="mb-3">
              <label for="username" class="form-label">Tên Đăng Nhập</label>
              <Field
                name="username"
                type="text"
                class="form-control"
                v-model="userLocal.username"
              />
              <ErrorMessage name="username" class="error-feedback" />
            </div>

            <div class="mb-3">
              <label for="password" class="form-label">Mật Khẩu</label>
              <Field
                name="password"
                type="password"
                class="form-control"
                v-model="userLocal.password"
              />
              <ErrorMessage name="password" class="error-feedback" />
            </div>

            <div class="mb-3">
              <label for="phone" class="form-label">Điện Thoại</label>
              <Field
                name="phone"
                type="text"
                class="form-control"
                v-model="userLocal.phone"
              />
              <ErrorMessage name="phone" class="error-feedback" />
            </div>

            <div class="mb-3">
              <label for="address" class="form-label">Địa Chỉ</label>
              <Field
                name="address"
                type="text"
                class="form-control"
                v-model="userLocal.address"
              />
              <ErrorMessage name="address" class="error-feedback" />
            </div>

            <div class="mb-3">
              <button type="submit" class="btn btn-primary btn-block">
                ĐĂNG KÝ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Form>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  emits: ["submit:user"],
  props: {
    user: { type: Object, required: true },
  },
  data() {
    const userFormSchema = yup.object().shape({
      name: yup
        .string()
        .required("Tên phải có giá trị.")
        .min(5, "Tên phải ít nhất 5 ký tự.")
        .max(50, "Tên có nhiều nhất 50 ký tự."),

      username: yup
        .string()
        .required("Username phải có giá trị.")
        .min(5, "Username phải ít nhất 5 ký tự.")
        .max(50, "Username có nhiều nhất 50 ký tự."),

      password: yup
        .string()
        .required("Password phải có giá trị.")
        .min(5, "Password phải ít nhất 5 ký tự.")
        .max(20, "Password có nhiều nhất 20 ký tự."),
      address: yup.string().min(10, "Địa chỉ ít nhất 10 ký tự."),
    });
    return {
      // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
      // userLocal để liên kết với các input trên form
      userLocal: this.user,
      userFormSchema,
    };
  },
  methods: {
    submitUser() {
      this.$emit("submit:user", this.userLocal);
    },
    deleteUser() {
      this.$emit("delete:user", this.userLocal.id);
    },
  },
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>
