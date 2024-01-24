<template>
    <form @submit.prevent class="form">
        <h4 class="text-3xl">Создание задач</h4>
        <input class="form-field" type="text" placeholder="Названия">
        <input class="form-field" type="text" placeholder="Описания">
        <ActionButton class="self-end">Создать</ActionButton>
    </form>
</template>
<script>
import ActionButton from '../UI/ActionButton.vue'
export default {
name: 'post-form',
data() {
    return {}
},
components: {
    ActionButton
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