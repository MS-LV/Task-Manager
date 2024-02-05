<script setup>
import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';
</script>

<template>
  <div class="flex flex-col w-screen min-h-screen space-y-4 max-w-screen-lg mx-auto text-white">
    <TodoHeader></TodoHeader>
    <TodoList></TodoList>
  </div>
</template>

<style scope>
  
</style>