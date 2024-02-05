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
<script>
import {useCreateTask} from '../hooks/useCreateTask';

export default {
    data() {
        return {
            headerTitle: this.editTask  ? 'Update Task': 'Create New Task',
            submitTitle: this.editTask ? 'Update' : 'Create'
        }
    },
    emits: {
        createTask: {type: Object},
    },
    props: {
        editTask: {
            type: Object
        }
    },
    methods: {
        submitForm() {
            this.$emit('createTask', this.post);
        }
    },
    setup(props, ctx) {
        const {post} = useCreateTask();
        return {
            post
        }
    },
    mounted() {
        if(this.editTask) {
            this.post = Object.assign({}, this.editTask);
        }
    },
    name: 'todo-form'
}
</script>
<style>
    
</style>