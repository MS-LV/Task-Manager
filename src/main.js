import { createApp } from "vue";
import directives from "@/directives";
import App from "./App.vue";
import "./index.css";
const app = createApp(App);

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});
app.mount("#app");
