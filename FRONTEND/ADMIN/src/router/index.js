import { createWebHistory, createRouter } from "vue-router";
import Admin from "@/views/Homepage.vue";

const routes = [
  {
    path: "/",
    name: "adminpage",
    component: Admin,
  },

  {
    path: "/popular",
    name: "popular",
    component: () => import("@/views/BookHot.vue"),
  },


  {
    path: "/product/:id",
    name: "product.edit",
    component: () => import("@/views/BookEdit.vue"),
    props: true, // Truyền các biến trong $route.params vào làm props
  },
  {
    path: "/products/add",
    name: "product.add",
    component: () => import("@/views/BookAdd.vue"),
  },

  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
