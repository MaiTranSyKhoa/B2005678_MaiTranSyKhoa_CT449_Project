<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <div class="container">
      <a href="#">
        <img src="@/assets/img/png-book-logo-4.png" alt="Logo" class="logo" />
      </a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'shop' }" class="nav-link text-white"
              >THƯ VIỆN SÁCH
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'contact' }" class="nav-link text-white"
              >LIÊN HỆ
            </router-link>
          </li>
          <li v-if="!hasToken" class="nav-item">
            <router-link
              :to="{ name: 'user.login' }"
              class="nav-link text-white"
              >ĐĂNG NHẬP
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto mr-5">
          <li>
            <div class="input-group ">
              <input
                v-model="searchText"
                class="form-control mr-1"
                type="text"
                placeholder="Tìm kiếm..."
                aria-label="Tìm kiếm..."
                aria-describedby="btnNavbarSearch"
                @keyup.enter="Search()"
              />            
                <button @click="Search()" class="btn text-white  bg-primary rounded mr-2">
                  <i class="fas fa-search"></i>
                </button>
              </div>
          </li>
          
          <li v-if="hasToken">
            <div class="dropdown">
              <a
                class="btn btn-primary dropdown-toggle user-dropdown"
                type="button"
                id="userDrop"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {{ getUsername }}
              </a>
              <div class="dropdown-menu" aria-labelledby="userDrop">
                <a class="dropdown-item" @click="logout">Đăng xuất</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import UserService from "@/services/user.service";

export default {
  computed: {
    getuserId() {
      return localStorage.getItem("userId");
    },
    hasToken() {
      return localStorage.getItem("token") !== null;
    },
    getUsername() {
      return localStorage.getItem("username");
    },
  },
  data() {
    return {
      isActive: "home",
      cartCount: 0,
      searchText: "",
    };
  },
  methods: {
    Search(){
      this.$router.push({
        name: 'search',
       params:{
        query: this.searchText}
    });
    this.searchText = "";
    },
    setActiveTab(tab) {
      this.isActiveTab = tab;
    },
    async count() {
      if (!localStorage.getItem("userId")) {
        this.cartCount = 0;
      }
      try {
        const response = await CartService.count({
          userId: this.getuserId,
        });
        this.cartCount = response.count;
      } catch (error) {
        console.log(error);
      }
    },
    startCountInterval() {
      setInterval(this.count, 2000);
    },

    async logout() {
      const log = await UserService.logout();
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("username");
      this.$router.push("/"); // Replace with your routing method

      await this.$router.push("/shop");
      window.location.reload(); // Replace with your actual token handling
      // Replace with your routing method
    },
  },

  created() {
    this.count(); // Initial count
    this.startCountInterval(); // Start the interval
  },
};
</script>

<style scoped>
.logo {
  max-width: 100px;
  max-height: 100px;
}

.navbar-toggler-icon {
  color: white;
}

.nav-link {
  color: white;
  font-weight: bold;
}

.nav-link:hover {
  background-color: rgb(149, 224, 142);
  color: white;
  border-radius: 5px;
}

.navbar-toggler {
  border: none;
}

.user-dropdown {
  background-color: transparent;
  border: none;
  color: white;
}

.cart-count {
  font-size: 0.9rem;
  padding: 4px 8px;
  border-radius: 50%;
  font-weight: bold;
}
</style>
