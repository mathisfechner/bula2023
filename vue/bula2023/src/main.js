import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueSocketIO from "vue-socket.io";

let app = createApp(App);
app.use(router);
app.mount("#app");
