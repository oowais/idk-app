<template>
  <v-app>
    <v-app-bar>
      <app-bar />
    </v-app-bar>
    <v-navigation-drawer permanent app> <nav-bar /> </v-navigation-drawer>
    <v-main> <router-view /> </v-main>
    <v-footer class="justify-center pl-0" inset app>
      <footer-bar />
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import AppBar from "@/views/AppBar.vue";
import FooterBar from "@/views/FooterBar.vue";
import NavBar from "@/views/NavBar.vue";
import { defineComponent } from "vue";
import { useTheme } from "vuetify";

export default defineComponent({
  name: "App",
  components: { AppBar, NavBar, FooterBar },
  data() {
    return {};
  },
  methods: {
    toggleTheme() {
      const theme = useTheme();
      console.log(theme);
      theme.global.name.value = theme.global.current.value.dark
        ? "light"
        : "dark";
    },
  },
});
</script>
<!-- Default theme {
  primary: '#1976D2',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107',
} -->
