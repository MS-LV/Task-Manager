<template>
<div v-if="postList.length > 0" class="posts">
    <h4 class="posts-heading">Список задачей</h4>
    <post-item 
        v-for="post in postList" 
        @remove="removePost"
        :post="post"></post-item>
</div>
<div class="posts-empty" v-else>Список задачей пуст</div>
</template>
<script>
export default {
    name: 'post-list',
    props: {
        postList: {
            type: Array
        }
    },
    data() {
        return {
        }
    },
    methods: {
        removePost(id) {
            this.$emit('remove', id);
        }
    }
}
</script>
<style scoped>
.posts {
    @apply flex flex-col gap-y-3 mt-4
}
.posts-heading {
    @apply text-3xl
}
.posts-empty {
    @apply text-red-500 text-2xl
}
.post-list-item {
    display: inline-block;
    margin-right: 10px;
}

.post-enter-active,
.post-leave-active {
    transition: all 1s ease;
}

.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>