<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">

          <router-link :to="{ name: 'adminpage' }" class="nav-link ">
            TRANG CHỦ
          </router-link>

          <a class="nav-link collapsed" href="##" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth"
            aria-expanded="false" aria-controls="pagesCollapseAuth">
            QUẢN LÝ SẢN PHẨM
            <div class="sb-sidenav-collapse-arrow">
              <i class="fas fa-angle-down"></i>
            </div>
          </a>
          <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne"
            data-bs-parent="#sidenavAccordionPages">
            <nav class="sb-sidenav-menu-nested nav">
              <router-link :to="{ name: 'popular' }" class="nav-link">
                QUẢN LÝ CÁC SÁCH TRÊN THƯ VIỆN
              </router-link>

              <router-link :to="{ name: 'product.add' }" class="nav-link">
                THÊM SÁCH MỚI VÀO THƯ VIỆN
              </router-link>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
