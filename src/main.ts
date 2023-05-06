import App from "@/App.vue";
import vuetify from "@/plugins/vuetify";
import { loadFonts } from "@/plugins/webfontloader";
import router from "@/router";
import { notivue } from "notivue";
import "notivue/animations.css";
import "notivue/notifications.css";
import { createPinia } from "pinia";
import { createApp } from "vue";

loadFonts();

createApp(App)
  .use(notivue)
  .use(vuetify)
  .use(router)
  .use(createPinia())
  .mount("#app");
