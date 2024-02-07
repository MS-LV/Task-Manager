import {ref} from 'vue';
import { defineStore } from "pinia";

export const userStore = defineStore('user', () => {
    const userInfo = ref({
        name: '',
        email: ''
    });

    const likes = ref(1991);

    function setUserInfo(data) {
        userInfo.value = data;
    }

    return {
        userInfo,
        setUserInfo
    }
})