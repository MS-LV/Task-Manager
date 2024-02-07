import { createApp } from 'vue';
import directives from './directives';
import App from './App.vue';
import './index.css';
import router from './router/router';
import { createPinia } from 'pinia'
// import store from './store';

const app = createApp(App);
const pinia = createPinia();

directives.forEach(directive => {
    app.directive(directive.name, directive);
})
app
// .use(store)
.use(pinia)
.use(router)
.mount('#app');
