<template>
    <div v-if="show" class="dialog" @click="hideDialog">
        <div @click.stop class="dialog-content">
            <action-button class="dialog-close" @click="hideDialog">X</action-button>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
name: 'post-dialog',
props: {
    show: {
        type: Boolean,
        default: false
    }
},
methods: {
    hideDialog() {
        this.$emit('update:show', false);
    }
}
}
</script>
<style scoped>
.dialog {
    @apply fixed top-0 left-0 flex justify-center items-center w-full h-full bg-slate-800/50;
}
.dialog-content {
    @apply relative p-4 m-auto bg-white rounded-xl min-h-12 min-w-80
}
.dialog-close {
    @apply absolute top-1 right-1
}
</style>