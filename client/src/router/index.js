import { createRouter, createWebHistory } from "vue-router";
import {verifyUser} from '@/hooks/useAuthorization';
import UserHome from "../components/UserHome.vue";

const routes = [
  {
    path: "/home",
    name: 'home',
    component: UserHome,
  },
  {
    path: "/registration",
    name: "registration",
    component: () => import("@/components/UserRegistration.vue"),
  },
  {
    path: "/login",
    name: 'login',
    component: () => import('@/components/UserLogin.vue'),
  },
  {
    path:'/dashboard', 
    name: 'dashboard',
    component: () => import('@/components/UserDashboard.vue')
  }
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach(async (to) => {
  const isAuth = await verifyUser();
  const protectedPages = ['home', 'dashboard'];
  const publicPages = ['login', 'registration'];
  if(protectedPages.includes(to.name) && !isAuth) {
    return {name: 'login'};
  } 
  if (isAuth && publicPages.includes(to.name)) {
    return {name: 'home'};
  }
})

export default router;
