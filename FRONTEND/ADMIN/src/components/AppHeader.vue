<template>
  <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    <!-- Navbar Brand-->
       <button
      class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
      id="sidebarToggle"
      href="#!"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div
      class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"
    >
      <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-user fa-fw"></i>
            {{ getUsername }}
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
          >            
            <li><a class="dropdown-item" @click="logout">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import AdminService from "../services/admin.service";
export default {
  computed: {
    getUsername() {
      return localStorage.getItem("adname");
    },
    getUserId() {
      return localStorage.getItem("adminId");
    },
  },
  data() {
    return {
      adminId: "",
    };
  },
  methods: {
 async  logout() {
      const log = await AdminService.logout();
      localStorage.removeItem("token");
      localStorage.removeItem("adname");
      localStorage.removeItem("adminId");
      window.location.reload();
    },
  },
  mounted() {
    this.adminId = this.getuserId;
  },
};
</script>

