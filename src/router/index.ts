import About from "@/views/apps/About.vue";
import Counter from "@/views/apps/Counter.vue";
import CssPlayground from "@/views/apps/CssPlayground.vue";
import Notifier from "@/views/apps/Notifier.vue";
import RandomKitty from "@/views/apps/RandomKitty.vue";
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
    path: "/randomkitty",
    name: "Random Kitty",
    component: RandomKitty,
    icon: "mdi-cat",
  },
  {
    path: "/cssplayground",
    name: "CSS Playground",
    component: CssPlayground,
    icon: "mdi-language-css3",
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
