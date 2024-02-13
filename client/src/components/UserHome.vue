<script setup>
import { userStore } from "../store";
import UserHeader from "./UserHeader.vue";

const store = userStore();
</script>

<template>
  <UserHeader />
  <v-main>
    <div class="w-full h-full flex justify-center items-center">
      <h1 class="text-3xl">
        Welcome {{ store.userInfo.name }}
      </h1>

      <div class="absolute bottom-3 right-3 text-2xl">
        {{ store.userInfo.email }}
      </div>
    </div>
  </v-main>
</template>

<style></style>
