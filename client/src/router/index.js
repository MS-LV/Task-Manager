import { createRouter, createWebHistory } from "vue-router";
import UserHome from "../components/UserHome.vue";

const routes = [
  {
    path: "/",
    component: UserHome,
  },
  {
    path: "/registration",
    name: "registration",
    component: () => import("@/components/UserRegistration.vue"),
  },
  {
    path: "/login",
    component: () => import('@/components/UserLogin.vue'),
  },
  {
    path:'/dashboard', 
    component: () => import('@/components/UserDashboard.vue')
  }
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
