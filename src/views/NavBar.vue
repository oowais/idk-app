<template>
  <v-list>
    <v-list-item
      v-for="route in routes"
      :prepend-icon="route.icon"
      :title="route.name"
      @click="router.push(route.path)"
    />
  </v-list>
</template>

<script setup lang="ts">
import router, { routes } from "@/router";
</script>
