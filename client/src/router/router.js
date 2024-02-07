import {createRouter, createWebHistory} from 'vue-router';
import UserHome from '../components/UserHome.vue';
import UserRegistration from '../components/UserRegistration.vue';
import UserLogin from '../components/UserLogin.vue';

const routes = [
    {
        path: '/',
        component: UserHome
    },
    {
        path: '/registration',
        component: UserRegistration
    },
    {
        path: '/login',
        component: UserLogin
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;