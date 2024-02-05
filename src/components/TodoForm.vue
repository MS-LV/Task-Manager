<script setup>
import { onMounted, getCurrentInstance } from 'vue';
import { useCreateTask } from '../hooks/useCreateTask'

// input & output
const props = defineProps({
    editTask: {type: Object}
});
const emits = defineEmits({createTask: Object});
const {emit} = getCurrentInstance();


const {post} = useCreateTask();

const headerTitle = props?.editTask  ? 'Update Task': 'Create New Task';
const submitTitle = props?.editTask ? 'Update' : 'Create';

function submitForm() {
    emit('createTask', post.value);
}

onMounted(() => {
    if (props.editTask) {
        post.value = Object.assign({}, props.editTask);
    }
});

</script>

<template>
    <form 
    class="flex flex-col"
    @submit.prevent="submitForm">
        <h1 class="text-3xl">{{ headerTitle }}</h1>
        <input
        v-focus
        v-model="post.body"
        type="text"
        class="px-3 py-2 border border-slate-500 mt-4"
        placeholder="task description...">
        <button
        class="self-end mt-4 bg-slate-600 text-white px-4 py-2 rounded-md"
        type="submit">{{ submitTitle }}</button>
    </form>        
</template>

<style>
    
</style>