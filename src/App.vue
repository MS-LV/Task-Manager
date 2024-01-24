<template>
<div class="app">
    <h1 class="app-heading">Страныца задачей</h1>
    <action-button class="mt-5" @click="showDialog">Создать задач</action-button>
    <post-dialog v-model:show="dialogVisible">
        <post-form @create="createPost"/>
    </post-dialog>
    <post-list 
        :post-list="postList" @remove="removePost"></post-list>
    </div>
</template>

<script>
export default {
    data() {
        return {
            postList: [
                {id: 1, title: 'JavaScript', body: 'JavaScript was created 1997 by Brandan Eikh', date: 1706125404125},
                {id: 2, title: 'TypeScript', body: 'I need start learning it tomrrow', date: 1706125402125},
                {id: 3, title: 'tailwandcss', body: 'it is css framework', date: 1706125104025}
            ],
            dialogVisible: false
        }
    }, 
    methods: {
        createPost(post) {
            this.postList.unshift(post);
            this.dialogVisible = false;
        },
        removePost(event) {
            console.log('remove', event);
            this.postList = this.postList.filter((post) => post.id !== event)
        },
        showDialog() {
            this.dialogVisible = true;
        }
    }
}
</script>

<style scoped>
.app {
    @apply p-8
}
.app-heading {
    @apply text-3xl
}
</style>
