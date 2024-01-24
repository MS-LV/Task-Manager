<template>
<div class="posts">
    <div class="posts-item" v-for="post in postList" :key="post.id">
    <div class="posts-description">
        <div><span class="font-bold">Название: </span> {{ post.title }}</div>
        <div><span class="font-bold">Описание: </span>{{ post.body }}</div>
    </div>
    <div class="posts-buttons">
        <action-button @click="removePost(post.id)">Удалить</action-button>
    </div>
    </div>
</div>
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
.posts-item {
    @apply flex justify-between items-center p-3 border-2 border-gray-400
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