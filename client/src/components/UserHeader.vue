<script setup>
import { ref, onMounted } from "vue";
import { useTheme} from 'vuetify'
import router from "@/router";
import { logoutUser, verifyUser } from "@/hooks/useAuthorization";

const drawer = ref(false);
const theme = useTheme();
const isAuth = ref(false);
const protectedMenuItems = [
{
    id: 0,
    name: "Home",
    url: "/home",
  },
  {
    id: 3,
    name: "Dashboard",
    url: "/dashboard"
  },
];
const publicMenuItems = [
{
    id: 1,
    name: "Registration",
    url: "/registration",
  },
  {
    id: 2,
    name: "LogIn",
    url: "/login",
  },
]
const menu_items = ref([]);
function changeTheme() {
  const isDarkMode = theme.global.name.value == "dark"
  theme.global.name.value = isDarkMode ? "light" : "dark";
}

async function logout() {
  await logoutUser()
  await isVerifyUser();
  router.push("/login");
}
async function isVerifyUser() {
  isAuth.value = await verifyUser();
  if(!isAuth.value) {
    menu_items.value = publicMenuItems;
    return;
  }
  menu_items.value = protectedMenuItems;

}
onMounted(isVerifyUser);
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
        <v-list-item v-if="isAuth">
          <v-list-item-title
            class="hover:cursor-pointer"
            @click="logout"
          >
            Logout
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
        <v-btn @click="logout" v-if="isAuth">
          logout
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
