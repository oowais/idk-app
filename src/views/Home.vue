<template>
  <v-card class="pa-6">
    <v-card-title> Home Count: {{ state.count }} </v-card-title>
    <v-card-actions>
      <v-btn color="primary" @click="state.count++">incerement</v-btn>
      <v-btn color="warning" @click="state.count = 0">reset</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({ count: 0 });
</script>
