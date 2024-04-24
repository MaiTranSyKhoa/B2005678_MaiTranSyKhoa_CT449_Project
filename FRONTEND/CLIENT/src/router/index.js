import { createWebHistory, createRouter } from "vue-router";
import User from "@/views/Homepage.vue";

const routes = [

  {
    path: "/",
    name: "homebook",
    component: User,    
  },

  {
    path: '/search/:query',
    name: "search",
    component: () => import("@/views/Search.vue"),
 
  },

  {
    path: "/shop",
    name: "shop",
    component: () => import("@/views/Shop.vue"),    
  },

  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/Contact.vue"),    
  },
  
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue"),    
  },

  {
    path: "/register",
    name: "user.add",
    component: () => import("@/views/UserAdd.vue"),
  },

  {
    path: "/login",
    name: "user.login",
    component: () => import("@/views/UserLogin.vue"),
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
