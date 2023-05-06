<template>
  <v-app>
    <Notivue
      :use="notifications"
      class="notivueStyling"
      position="top-right"
      pause-on-hover
      :theme="theme.global.name === 'dark' ? dark : pastel"
      :icons="outlineIcons"
    />
    <v-app-bar>
      <app-bar />
    </v-app-bar>
    <v-navigation-drawer permanent expand-on-hover rail>
      <nav-bar />
    </v-navigation-drawer>
    <v-main>
      <div class="ma-6">
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
      </div>
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
import { Notivue, dark, notifications, outlineIcons, pastel } from "notivue";
import { defineComponent } from "vue";
import { useTheme } from "vuetify";

export default defineComponent({
  name: "App",
  components: { AppBar, NavBar, FooterBar, Notivue },
  data: () => {
    return {
      notifications,
      pastel,
      dark,
      theme: useTheme(),
      outlineIcons,
    };
  },
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

<style>
.notivueStyling {
  --nv-z: 9999;
}
</style>
