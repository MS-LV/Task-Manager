<template>
    <button class="button">
        <slot></slot>
    </button>
</template>
<script></script>
<style scoped>
.button {
    @apply px-4 py-2 border-2 border-gray-400 text-gray-500 rounded-md
}
</style>