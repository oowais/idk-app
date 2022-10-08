<template>
  <router-link to="/" custom v-slot="{ navigate }">
    <span
      class="text-h4 pl-8"
      @click="navigate"
      role="link"
      style="cursor: pointer"
    >
      <div class="glitch-wrapper">
        <div class="glitch" data-glitch="IDK App">IDK App</div>
      </div>
    </span>
  </router-link>
  <v-spacer />
  <v-btn icon="mdi-brightness-4" color="primary" @click="toggleTheme" />
  <br />
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
const theme = useTheme();
const toggleTheme = () =>
  (theme.global.name.value = theme.global.current.value.dark
    ? "light"
    : "dark");
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

<style>
@import "@/assets/glitcheffect.css";
</style>
