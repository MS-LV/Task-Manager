<template>
<div class="app">
<post-form @create="createPost"/>
<post-list 
    :post-list="postList" @remove="removePost"></post-list>
</div>
</template>

<script>
export default {
    data() {
        return {
            postList: [
                {id: 1, title: 'JavaScript', body: 'JavaScript was created 1997 by Brandan Eikh'},
                {id: 2, title: 'TypeScript', body: 'I need start learning it tomrrow'},
                {id: 3, title: 'tailwandcss', body: 'it is css framework'}
            ]
        }
    }, 
    methods: {
        createPost(post) {
            this.postList.unshift(post);
        },
        removePost(event) {
            console.log('remove', event);
            this.postList = this.postList.filter((post) => post.id !== event)
        }
    }
}
</script>

<style scoped>
.app {
    @apply p-8
}
</style>
