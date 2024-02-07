<script setup>
import UserHeader from './components/UserHeader.vue';
import {verifyUser} from './hooks/useAuthorization';
const firstUpdateUser = verifyUser();
</script>

<template>
  <div class="flex flex-col w-screen min-h-screen h-screen space-y-4 max-w-screen-lg mx-auto text-white">
    <UserHeader></UserHeader>
    <RouterView></RouterView>
  </div>
</template>

<style scope>
  
</style>