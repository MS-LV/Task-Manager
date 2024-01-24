<template>
<div class="app">
    <h1 class="app-heading">Страныца задачей</h1>
    <div class="app-buttons">
        <action-button class="mt-5" @click="showDialog">Создать задач</action-button>
        <sort-select v-model="selectedSort" :options="options"></sort-select>
    </div>
    <post-dialog v-model:show="dialogVisible">
        <post-form :editPost="editPostData" @create="createPost" @edited="editedPostData"/>
    </post-dialog>
    <post-list 
        :post-list="sortedPosts" 
        @edit="editPost"
        @remove="removePost"></post-list>
    </div>
</template>

<script>
export default {
    data() {
        return {
            postList: [
                {id: 'w01sdadsa2', title: 'JavaScript', body: 'JavaScript was created 1997 by Brandan Eikh', date: 1706125404125},
                {id: 'b20sasdf2l', title: 'TypeScript', body: 'I need start learning it tomrrow', date: 1706125402125},
                {id: 'neloaw19r8', title: 'tailwandcss', body: 'it is css framework', date: 1706125104025},
                {id: '1azmlco9e4', title: 'Webpack', body: ' Blanditiis voluptatem quisquam ducimus atque quam, odio perferendis praesentium doloribus.', date: 1706125404125},
                {id: 'vnxmaiw921', title: 'Vite', body: 'possimus ullam impedit quo doloribus obcaecati', date: 1706125302125},
                {id: 'qazm90ssdm', title: 'Angular', body: 'sit amet consectetur adipisicing elit. Quos', date: 1706125111025},
                {id: '10aplsjfnv', title: 'Svelte', body: 'Lorem ipsum dolor sit', date: 1706123404125},
                {id: 'thfjdei489', title: 'Megafon', body: 'obcaecati ad fugiat sunt error.', date: 1706125442125},
                {id: 'a8s9wkd32s', title: 'Babilion', body: 'adipisicing elit. Quos non possimus ullam impedit quo doloribus', date: 1706125109525},
                {id: 'amcl390akf', title: 'zet-mobile', body: 'Omnis, hic! Aut, corporis aspernatur', date: 1706125404125},
                {id: 'salqpwoe1f', title: 'tcell', body: 'Dolore commodi veniam velit! Omnis, hic! Aut,', date: 1706121402125},
                {id: '34fkmcna0l', title: 'o-mobile', body: 'aspernatur sapiente dolor quae aliquid id', date: 1706125120025},
                {id: 'cnmalofdsw', title: 'indigo', body: 'iure suscipit incidunt odit', date: 1706125404125},
                {id: 'saowldmf93', title: 'git', body: 'sit amet consectetur adipisicing elit.', date: 1706125400808},
                {id: '10pamdnfgk', title: 'scss', body: 'dolor quae aliquid id tenetur', date: 1706125100000},
            ],


            dialogVisible: false,
            selectedSort: 'title',
            options: [
                {value: 'title', name: 'По имя задач'},
                {value: 'body', name: 'По описанию'},
                {value: 'date', name: 'По дата'},
                {value: 'id', name: 'По идентификатор'}
            ],
            editPostData: null,
        }
    }, 
    methods: {
        createPost(post) {
            this.postList.unshift(post);
            this.dialogVisible = false;
        },
        removePost(id) {
            this.postList = this.postList.filter((post) => post.id !== id)
        },
        editPost(id) {
            const post = this.postList.find(post => post.id === id);
            this.editPostData = post;
            this.dialogVisible = true;
        },
        editedPostData() {
            this.dialogVisible = false;
        },
        showDialog() {
            this.dialogVisible = true;
        }
    },
    computed: {
        sortedPosts() {
            if(isNaN(this.postList[0][this.selectedSort])) {
                return [...this.postList].sort((postA, postB) => {
                    return postA[this.selectedSort].localeCompare(postB[this.selectedSort]);
                })
            }

            return [...this.postList].sort((postA, postB) => {
                return postA[this.selectedSort] >= postB[this.selectedSort] ? 1 : -1;
            })
        }
    },
    watch: {
        dialogVisible(isVisible) {
            if(!isVisible) {
                this.editPostData = null;
            }
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
.app-buttons {
    @apply flex justify-between items-center
}
</style>
