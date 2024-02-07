<script setup>
import {ref} from 'vue';
import { rootConfigs } from '../configs';
import {authUser} from '../hooks/useAuthorization';
import CustomInput from './UI/CustomInput.vue';

const fields = ref([
    {name: 'Name', type:"text", icon: '/icons/person.svg', value: ''},
    {name: 'Email', type:'email', icon: '/icons/email.svg', value: ''},
    {name: 'Password',type: 'password', icon: '/icons/lock.svg', value: ''},
]);

function submitForm() {
    const formValues = fields.value.map((field => field.value));
    const [name, email, password] = formValues;
    const body = {
        name, email, password
    }
    const url = rootConfigs.signUP;
    const userRegistration = authUser(url, body);
}
</script>
<template>
    <div
        class="h-full w-full flex justify-center items-center">
        <form
            class="bg-white rounded-md px-4 py-3 text-black min-w-80"
            @submit.prevent="submitForm"
        >
        <h1 class="text-purple-700 text-3xl text-center">Create Account</h1>
        <!-- <h3 >Fill the input areas with you personal datas</h3> -->
        <CustomInput v-for="field of fields" :field="field" v-model="field.value"></CustomInput>
        <div
            class="flex justify-between items-center cursor-pointer mt-4">
            <div
                @click="$router.push('/login')" 
                class="text-purple-800 hover:underline">LogIn</div>
            <button
                class="px-3 py-2 bg-purple-800 text-white rounded-md" 
                type="submit">Create Account</button>
        </div>
    </form>
    </div>
</template>
<style></style>