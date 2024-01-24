<template>
    <div class="posts-item">
    <div class="posts-description">
        <div><span class="font-bold">Задача: </span> {{ post.title }}</div>
        <div><span class="font-bold">Описание: </span>{{ post.body }}</div>
        <div><span class="font-bold">Дата: </span>{{ (new Date(post.date)).toLocaleString() }}</div>
    </div>
    <div class="posts-buttons">
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

    }
}
</script>
<style scoped>
.posts-item {
    @apply flex justify-between items-center p-3 border-2 border-gray-400
}
</style>