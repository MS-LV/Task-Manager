<script setup>
import { ref } from "vue";
import { rootConfigs } from "../configs";
import { authUser } from "../hooks/useAuthorization";
import CustomInput from "./UI/CustomInput.vue";
import UserHeader from "./UserHeader.vue";

const fields = ref([
  { name: "Name", type: "text", icon: "/icons/person.svg", value: "" },
  { name: "Email", type: "email", icon: "/icons/email.svg", value: "" },
  { name: "Password", type: "password", icon: "/icons/lock.svg", value: "" },
]);
const userName = ref('');
const email = ref('');
const password = ref('');

function submitForm() {
  const body = {
    name: userName.value,
    email: email.value,
    password: password.value,
  };
  const url = rootConfigs.signUP;
  authUser(url, body);
}
</script>
<template>
  <UserHeader />
  <v-main>
    <div class="h-full w-full flex justify-center items-center">
      <form
        class="bg-white rounded-md px-4 py-3 text-black min-w-80 shadow-2xl"
        @submit.prevent="submitForm"
      >
        <h1 class="text-purple-700 text-3xl text-center">
          Create Account
        </h1>
        <CustomInput
          v-model="userName"
          :field="fields[0]"
        />
        <CustomInput
          v-model="email"
          :field="fields[1]"
        />
        <CustomInput
          v-model="password"
          :field="fields[2]"
        />
        <div class="flex justify-between items-center cursor-pointer mt-4">
          <div
            class="text-purple-800 hover:underline"
            @click="$router.push('/login')"
          >
            LogIn
          </div>
          <button
            class="px-3 py-2 bg-purple-800 text-white rounded-md"
            type="submit"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  </v-main>
</template>
<style></style>
