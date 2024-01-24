<template>
<div class="app">
<PostForm></PostForm>
</div>
</template>

<script>
import PostForm from './components/PostForm.vue';
export default {
    data() {
        return {
            
        }
    }, 
    methods: {

    },
    components: {
    PostForm
    }
}
</script>

<style scoped>
.app {
    @apply p-8
}
</style>
