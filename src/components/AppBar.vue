<template>
  <p class="text-h4 pl-8">Home | TimeJot Web</p>
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
