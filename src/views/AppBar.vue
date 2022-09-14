<template>
  <router-link to="/" custom v-slot="{ navigate }">
    <span
      class="text-h4 pl-8"
      @click="navigate"
      role="link"
      style="cursor: pointer"
    >
      TimeJot Web
    </span>
  </router-link>
  <v-spacer />
  <v-btn icon="mdi-brightness-4" color="primary" @click="toggleTheme" />
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
const theme = useTheme();
const toggleTheme = () =>
  (theme.global.name.value = theme.global.current.value.dark
    ? "light"
    : "dark");
</script>
