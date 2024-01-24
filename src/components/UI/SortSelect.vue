<template>
    <select @change="changeOptions">
        <option disabled value="1">Сортировка по:</option>
        <option 
            v-for="option in options" 
            :key="option.value" 
            :value="option.value">{{ option.name }}</option>
    </select>
</template>
<script>
export default {
    name: 'sort-select',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOptions(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>
<style scoped>
select {
    @apply px-4 py-2 border-2 border-gray-400 text-gray-500 rounded-md
}
</style>