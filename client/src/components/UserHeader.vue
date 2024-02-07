<script setup>
import router from '../router/router';
import { logoutUser } from '../hooks/useAuthorization';

function logout() {
    logoutUser();
    router.push('/');
}
</script>

<template>
    <header class="fixed top-0 left-0 w-full h-16 flex items-center justify-between bg-purple-700 px-5">
        <nav class="flex gap-x-3">
            <div @click="$router.push('/')" class="cursor-pointer hover:underline underline-offset-2">Home</div>
            <div @click="$router.push('/login')" class="cursor-pointer hover:underline underline-offset-2">LogIn</div>
            <div @click="$router.push('/registration')" class="cursor-pointer hover:underline underline-offset-2">Registration</div>
        </nav>

        <div 
            @click="logout"
            class="cursor-pointer">Logout</div>

    </header>
</template>

<style></style>