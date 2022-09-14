import App from "@/App.vue";
import router from "@/plugins/router";
import vuetify from "@/plugins/vuetify";
import { loadFonts } from "@/plugins/webfontloader";
import { createApp } from "vue";

loadFonts();

createApp(App).use(vuetify).use(router).mount("#app");
