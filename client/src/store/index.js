import { ref } from "vue";
import { defineStore } from "pinia";

export const userStore = defineStore("user", () => {
  const userInfo = ref({
    name: "",
    email: "",
  });

  function setUserInfo(data) {
    userInfo.value = data;
  }

  return {
    userInfo,
    setUserInfo,
  };
});
