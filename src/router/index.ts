import About from "@/views/apps/About.vue";
import Counter from "@/views/apps/Counter.vue";
import Notifier from "@/views/apps/Notifier.vue";
import Home from "@/views/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    icon: "mdi-home",
  },
  {
    path: "/notifier",
    name: "Notifier",
    component: Notifier,
    icon: "mdi-bell-ring",
  },
  {
    path: "/counter",
    name: "Counter",
    component: Counter,
    icon: "mdi-swap-vertical-circle",
  },
  {
    path: "/about",
    name: "About",
    component: About,
    icon: "mdi-information",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
