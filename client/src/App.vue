<script setup>
// import UserHeader from "@/components/UserHeader.vue";
// import { ref } from "vue";
// import { useTheme} from 'vuetify'
import { verifyUser } from "@/hooks/useAuthorization";
verifyUser();



</script>

<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<style scope></style>
