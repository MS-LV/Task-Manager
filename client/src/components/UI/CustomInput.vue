<script setup>
import {getCurrentInstance, defineProps, defineEmits} from 'vue';


const props = defineProps({
    field: Object,
    modelValue: String
});
// const emits = defineEmits({
// })
const {emit} = getCurrentInstance();

function onChangeInput(event) {
    emit('update:modelValue', event.target.value);
}
</script>

<template>
    <div class="flex gap-x-2 border-slate-400 border-b-2 mt-3 py-2">
        <label :for="props.field?.name">
            <img class="w-5 h-5" :src="props.field?.icon" alt="">
        </label>
        <input :type="props.field?.type"
            :value="props.modelValue"
            class="flex-1 focus:outline-none invalid:text-red-600" 
            @input="onChangeInput"
            :placeholder="props.field?.name" 
            :id="props.field?.name">
    </div>
</template>

<style></style>