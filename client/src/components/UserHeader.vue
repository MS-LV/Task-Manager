<script setup>
import { ref } from "vue";
import { useTheme} from 'vuetify'
// import router from "@/router";
// import { logoutUser } from "../hooks/useAuthorization";

// function logout() {
//   logoutUser();
//   router.push("/");
// }
const drawer = ref(false);
const theme = useTheme()
const menu_items = [
  {
    id: 0,
    name: "Home",
    url: "/",
  },
  {
    id: 3,
    name: "Dashboard",
    url: "/dashboard"
  },
  {
    id: 1,
    name: "Registration",
    url: "/registration",
  },
  {
    id: 2,
    name: "LogIn",
    url: "login",
  },
];
function changeTheme() {
  const isDarkMode = theme.global.name.value == "dark"
  theme.global.name.value = isDarkMode ? "light" : "dark";
}
</script>

<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      left
      absolute
      temporary
      theme="dark"
      image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
    >
      <v-list>
        <v-list-item
          v-for="item in menu_items"
          :key="item.id"
        >
          <v-list-item-title
            class="hover:cursor-pointer"
            @click="$router.push(item.url)"
          >
            {{ item.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="blue"
    >
      <v-app-bar-nav-icon
        class="block md:hidden"
        @click="drawer = !drawer"
      />
      <v-app-bar-title>
        <h3 class="text-h4 white--text">
          iUser
        </h3>
      </v-app-bar-title>
      <div class="hidden md:block">
        <v-btn
          v-for="menu in menu_items"
          :key="menu.id"
          @click="$router.push(menu.url)"
        >
          {{ menu.name }}
        </v-btn>
        <v-btn @click="changeTheme">
          <v-icon
            end
            icon="mdi-theme-light-dark"
          />
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<style></style>
