<script setup>
import {ref} from 'vue';

const links = [
    {text: 'Dashboard', icon: 'mdi mdi-home-outline'},
    {text: 'Wallet', icon: 'mdi mdi-wallet-outline'},
    {text: 'Discounts', icon: 'mdi mdi-file-chart-outline'},
    {text: 'Statistics', icon: 'mdi mdi-chart-outline'},
    {text: 'Settings', icon: 'mdi mdi-cog-outline'},
];


const drawer = ref(null);
// const cards = ['Today', 'Yesterday'];
</script>

<template>
  <v-navigation-drawer
    v-model="drawer"
    color="#425C5A"
    class="rounded-e-xl flex flex-col justify-between"
  >
    <v-sheet
      color="#3d5654"
      class="pa-4 rounded-te-xl text-center"
    >
      <v-progress-circular
        model-value="80"
        color="#b49239"
        :size="100"
        :width="2"
      >
        <v-avatar size="85">
          <v-img src="01.jpg" />
        </v-avatar>
      </v-progress-circular>
      <div class="mt-4">
        Mega Phone Shop
      </div>
      <span class="mb-6 text-caption">shop.megafon@gmail.com</span>
    </v-sheet>
    <v-list>
      <v-list-item
        v-for="item in links" 
        :key="item.text"
        :value="item"
        active-class="border"
        :ripple="false"
      >
        <template #prepend>
          <v-icons
            :icon="item.icon"
            color="#b49239"
          />
        </template>
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
      <h5 class="ml-5 text-yellow-darken-2">
        Active Users
      </h5>
      <v-row
        align="center"
        class="spacer ml-16 mt-4"
      >
        <v-col
          cols="4"
          sm="2"
          md="1"
        >
          <v-avatar size="36px">
            <v-img
              alt="Avatar"
              src="01.jpg"
            />
          </v-avatar>
        </v-col>
        <v-col
          cols="4"
          sm="2"
          md="1"
        >
          <v-avatar size="36px">
            <v-img
              alt="Avatar"
              src="02.jpg"
            />
          </v-avatar>
        </v-col>
        <v-col
          cols="4"
          sm="2"
          md="1"
        >
          <v-avatar size="36px">
            <v-img
              alt="Avatar"
              src="03.jpg"
            />
          </v-avatar>
        </v-col>
        <v-col
          cols="4"
          sm="2"
          md="1"
        >
          <v-avatar size="36px">
            <v-img
              alt="Avatar"
              src="01.jpg"
            />
          </v-avatar>
        </v-col>
      </v-row>
      <div class="relative z-50 mt-2">
        <v-img
          src="world-map.png"
          contain
          max-height="200"
        />
      </div>
    </v-list>
    <div class="flex-1 flex flex-col justify-end">
      <v-btn
        color="primary"
        @click="$router.push('/')"
      >
        Exit
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<style scoped>
    
</style>