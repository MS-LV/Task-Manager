<template>
    <div class="posts-item">
    <div class="posts-description">
        <div><span class="font-bold">Задача: </span> {{ post.title }}</div>
        <div><span class="font-bold">Описание: </span>{{ post.body }}</div>
        <div><span class="font-bold">Дата: </span>{{ (new Date(post.date)).toLocaleString() }}</div>
    </div>
    <div class="posts-buttons space-x-2">
        <action-button @click="editPost(post.id)">Редактировать</action-button>
        <action-button @click="removePost(post.id)">Удалить</action-button>
    </div>
    </div>
</template>
<script>
export default {
    name: 'post-item',
    props: {
        post: {
            type: Object
        }
    },
    methods: {
        removePost(id) {
            this.$emit('remove', id);
        },
        editPost(id) {
            this.$emit('edit', id);
        }
    }
}
</script>
<style scoped>
.posts-item {
    @apply flex justify-between items-center gap-x-3 p-3 border-2 border-gray-400
}
.posts-buttons {
    @apply whitespace-nowrap
}
</style>