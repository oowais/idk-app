<template>
  <v-card class="pa-6">
    <v-card-title> Home Count: {{ counter.value }} </v-card-title>
    <v-card-actions>
      <v-btn icon="mdi-plus" color="primary" @click="counter.value++" />
      <v-btn icon="mdi-minus" color="primary" @click="counter.value--" />
      <v-btn color="warning" @click="counter.value = 0">reset</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const counter = reactive({ value: 0 });
</script>
