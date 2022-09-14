<template>Global Count: {{ store.count }}</template>

<script lang="ts">
import { useGlobalStore } from "@/store/global";

export default {
  setup() {
    const store = useGlobalStore();

    return {
      store,
    };
  },
};
</script>
