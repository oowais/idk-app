<template>
  <v-app>
    <v-app-bar>
      <app-bar />
    </v-app-bar>
    <v-navigation-drawer permanent expand-on-hover rail>
      <nav-bar />
    </v-navigation-drawer>
    <v-main>
      <br />
      <v-btn
        class="ml-4 mb-4"
        icon
        @click="back"
        :disabled="currentRoutePath === '/'"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <br />
      <router-view />
    </v-main>
    <v-footer class="justify-center pl-0" inset app>
      <footer-bar />
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import router from "@/router";
import AppBar from "@/views/AppBar.vue";
import FooterBar from "@/views/FooterBar.vue";
import NavBar from "@/views/NavBar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: { AppBar, NavBar, FooterBar },
  computed: {
    currentRoutePath(): string {
      return router.currentRoute.value.path;
    },
  },
  methods: {
    back() {
      router.back();
    },
  },
});
</script>
