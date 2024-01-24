<template>
    <form @submit.prevent class="form">
        <h4 class="text-3xl">Создание задач</h4>
        <input class="form-field" type="text" placeholder="Названия">
        <input class="form-field" type="text" placeholder="Описания">
        <action-button class="self-end">Создать</action-button>
    </form>
</template>
<script>
export default {
name: 'post-form',
data() {
    return {}
}
}
</script>
<style scoped>
.form {
    @apply flex flex-col gap-4
}

.form-field {
    @apply border-2 border-gray-400 px-4 py-2 focus:outline-none focus:ring-1
}
</style>