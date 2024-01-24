<template>
<div v-if="postList.length > 0" class="posts">
    <h4 class="posts-heading">Список задачей</h4>
    <transition-group name="post-list">
        <post-item 
            v-for="post in postList"
            :key="post.id"
            @remove="$emit('remove', $event)"
            @edit="editPost"
            :post="post"></post-item>
    </transition-group>
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
       editPost(event) {
        this.$emit('edit', event)
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

/* list animation styles */
.post-list-item {
    display: inline-block;
    margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
    transition: all 1s ease;
}

.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.post-list-move {
    transition: transform .8s ease;
}
</style>