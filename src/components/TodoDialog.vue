<template>
    <div v-if="isVisible"
    @click="$emit('close', false)"
    class="flex justify-center items-center absolute top-0 left-0 w-screen h-screen z-10 m-0 bg-black/50">
        <div
        @click.stop
        class="bg-white w-80 min-h-40 py-2 px-3 text-black rounded-md">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props: {
        isVisible: {
            type: Boolean,
            default: false
        },
    },
    emits: {
        close: {type: Boolean}
    },
    name: 'todo-dialog'
}
</script>
<style>
</style>