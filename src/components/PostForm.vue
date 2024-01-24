<template>
    <form @submit.prevent="formSubmit"  class="form">
        <h4 class="text-3xl">Создание задач</h4>
        <input 
            class="form-field"
            type="text"
            v-model="post.title"
            placeholder="Название">
        <input 
            class="form-field" 
            type="text"
            v-model="post.body"
            placeholder="Описание">
        <action-button type="submit" class="self-end">{{ this.actionName }}</action-button>
    </form>
</template>
<script>
export default {
name: 'post-form',
props: {
    editPost: {
        type: Object
    }
},
data() {
    return {
        post: {
            title: '',
            body: ''
        },
        actionName: this.editPost ? 'Изменить' : 'Создать'
    }
},
methods: {
    formSubmit() {
        if(this.editPost) {
            this.$emit('edited',  this.post);
            this.cleanPostValue();
            return
        }
        const post = this.preparePost(this.post)
        this.$emit('create', post);
        this.cleanPostValue();
        console.log('date:', Date(1706125404125))
    },

    generateID(longest = 10) {
        const symbols = 'abcdefjhijklmnopqrstuvwxyz1234567890';
        return symbols.split('').sort(() => Math.random() - .5).slice(0, longest).join('');
    },

    cleanPostValue() {
        this.post = {
            title: '',
            body: ''
        }
    },
    preparePost(post) {
        post.id = this.generateID();
        post.date = Date.now();
        return post;
    }
},
mounted() {
    if(this.editPost) {
        this.post = this.editPost
    }
}
}
</script>
<style scoped>
.form {
    @apply flex flex-col gap-4
}

.form-field {
    @apply border-2 border-gray-400 px-4 py-2 focus:outline-none focus:ring-1
}
</style>