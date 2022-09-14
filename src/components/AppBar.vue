<template>
  <router-link to="/" custom v-slot="{ navigate }">
    <span
      class="text-h4 pl-8"
      @click="navigate"
      @keypress.enter="navigate"
      role="link"
    >
      Home | TimeJot Web
    </span>
  </router-link>
  <v-spacer />
  <v-btn icon="mdi-brightness-4" color="primary" @click="toggleTheme" />
</template>

<script lang="ts">
import { useTheme } from "vuetify";

export default {
  setup() {
    const theme = useTheme();
    return {
      theme,
      toggleTheme: () =>
        (theme.global.name.value = theme.global.current.value.dark
          ? "light"
          : "dark"),
    };
  },
};
</script>
