<template>
  <v-layout>
    <v-app-bar>
      <app-bar />
    </v-app-bar>
    <v-navigation-drawer permanent> Nav </v-navigation-drawer>
    <v-main> <router-view /> </v-main>
  </v-layout>
</template>

<script lang="ts">
import AppBar from "@/components/AppBar.vue";
import { defineComponent } from "vue";
import { useTheme } from "vuetify";

export default defineComponent({
  name: "App",
  components: { AppBar },
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
