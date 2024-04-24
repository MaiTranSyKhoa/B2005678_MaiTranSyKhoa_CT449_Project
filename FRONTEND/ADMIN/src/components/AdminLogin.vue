<template >
  <div>
    <div class="container my-5 py-3">
      <section class="text-center text-lg-start">
        <h2 class="mb-4 text-uppercase text-primary text-center">ĐĂNG NHẬP TÀI KHOẢN NHÂN VIÊN</h2>
        <div class="card bg-light" style="max-width: 400px; margin: auto;">
          <div class="row g-0 d-flex align-items-center">
            <div class="col-lg-12">
              <div class="card-body py-4 px-md-4">
                <p class="text-danger">{{ message }}</p>

                <form @submit.prevent="login">
                  <div class="form-floating mb-3">
                    <input
                      placeholder="Username"
                      type="text"
                      id="username"
                      v-model="username"
                      class="form-control "
                    />
                    <label for="username">Username</label>
                  </div>

                  <!-- Password input -->
                  <div class="form-floating mb-3">
                    <input
                      placeholder="Password"
                      type="password"
                      id="password"
                      v-model="password"
                      class="form-control"
                    />
                    <label for="password">Password</label>
                  </div>

                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="form2Example31"
                      checked
                    />
                    <label class="form-check-label" for="form2Example31">
                      Remember me
                    </label>
                  </div>

                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <a href="#!" class="text-primary">Forgot password?</a>
                  </div>

                  <!-- Submit button -->
                  <button type="submit" class="btn btn-primary btn-block mb-3">
                    Đăng nhập
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style>


.rounded-t-5 {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

@media (min-width: 992px) {
  .rounded-tr-lg-0 {
    border-top-right-radius: 0;
  }

  .rounded-bl-lg-5 {
    border-bottom-left-radius: 0.5rem;
  }
}

/* Custom styles for login form */
.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-body {
  border-radius: 0.5rem;
}

.form-control {
  border-radius: 0.5rem;
}

.btn-primary {
  border-radius: 0.5rem;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}

.text-primary {
  color: #007bff;
}

.text-primary:hover {
  color: #0056b3;
}
</style>

<script>
import AdminService from "@/services/admin.service";

export default {
  data() {
    return {
      username: "",
      password: "",
      message: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await AdminService.login({
          username: this.username,
          password: this.password,
        });

        // Assuming your API returns a token upon successful login
        const token = response.token;
        const adname = response.admin.name;
        const adminId = response.admin._id;

        // Store the token in local storage or Vuex for later use
        localStorage.setItem("token", token);
        localStorage.setItem("adminId", adminId);
        localStorage.setItem("adname", adname);

        // this.$router.push("/");
        alert("Welcom " + adname);
        window.location.reload();
      } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("adname");
        localStorage.removeItem("adminId");

        console.error("Login failed:", error);
        this.message = "Login failed. Please check your credentials.";
      }
    },
  },
};
</script>
