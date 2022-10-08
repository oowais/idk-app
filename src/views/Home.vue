<template>
  <div class="d-flex justify-space-around flex-wrap">
    <template v-for="route in routes">
      <v-card
        v-if="route.name !== 'Home'"
        :prepend-icon="route.icon"
        :title="route.name"
        @click="router.push(route.path)"
        class="ma-4 pa-4"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import router, { routes } from "@/router";
</script>
