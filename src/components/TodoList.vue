<script setup>

import {ref} from 'vue';
import TodoListItem from './TodoListItem.vue';
import TodoDialog from './TodoDialog.vue';
import TodoForm from './TodoForm.vue';
import { useSortTask } from '../hooks/useSortTask';

const {tasks, sortBy, sortedTasks } = useSortTask();

const isDialogVisible = ref(false);

function createTask(newTask) {
    tasks.value.push(newTask);
    isDialogVisible.value = false;
}

function updateTask(newTask){
    const iUpdateTask = tasks.value.findIndex((task) => task.id === newTask.id);
    const updatedTask = tasks.value.splice(iUpdateTask, 1, newTask);
}

function deleteTask(id) {
    const iDeleteTask = tasks.value.findIndex((task) => task.id === id);
    tasks.value.splice(iDeleteTask, 1);
}
</script>

<template>
    <main class="flex-1 overflow-hidden p-4">
        <div>
            <select v-model="sortBy" class="text-black block ml-auto px-3 py-2">
                <option value="" disabled>Sort by: </option>
                <option value="id">ID</option>
                <option value="body">Text</option>
            </select>
        </div>
        <div 
            class="overflow-y-auto text-black rounded-md mt-3"
            >
            <div class="flex justify-between text-center font-bold px-2 py-4 text-1xl bg-white p-2">
                <div class="w-3/5">Task</div>
                <div class="w-1/5">Edit</div>
                <div class="w-1/5">Remove</div>
            </div>
            <transition-group name="post-list">
            <TodoListItem 
                v-for="task of sortedTasks"
                :key="task.id"
                @updateTask="updateTask"
                @deleteTask="deleteTask"
                :task="task"
            ></TodoListItem>
            </transition-group>
        </div>

    <TodoDialog
        @close="isDialogVisible = $event"
        :is-visible="isDialogVisible"
    >
        <TodoForm @create-task="createTask"></TodoForm>
    </TodoDialog>
    </main>
    <footer 
    class="sticky bottom-0 p-4"
    >
        <button 
        @click="isDialogVisible = true"
        class="mx-auto block rounded-full bg-white shadow-sm shadow-slate-500 p-3">
            <svg class="w-7 h-7 fill-gray-500 stroke-gray-500" data-slot="icon" stroke-width="3" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
            </svg>
        </button>
    </footer>
</template>
<style scoped>
    /* list animation styles */
.post-list-item {
    display: inline-block;
    margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
    transition: all .5s ease;
}

.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.post-list-move {
    transition: transform .8s ease;
}
</style>