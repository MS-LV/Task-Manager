import { createApp } from 'vue';
import components from './components';
import directives from './directives';
import App from './App.vue'
import './index.css'

const app = createApp(App)
components.forEach((component) => {
    app.component(component.name, component);
});
directives.forEach(directive => {
    app.directive(directive.name, directive);
})
app.mount('#app')
