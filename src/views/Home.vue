<template>
  <v-card class="pa-6">
    <v-card-title> Home Count: {{ state.count }} </v-card-title>
    <v-card-actions>
      <v-btn color="primary" @click="state.count++">incerement</v-btn>
      <v-btn color="warning" @click="state.count = 0">reset</v-btn>
    </v-card-actions>
    <br />
    <v-btn variant="outlined" color="warning" rounded="pill" @click="notifier">
      Request permission
    </v-btn>
    <br />
    <br />
    <v-btn
      variant="outlined"
      color="warning"
      rounded="pill"
      @click="sendNotification"
    >
      Send Notification
    </v-btn>
  </v-card>
</template>

<script setup lang="ts">
import useNotifier from "@/composables/useNotifier";
import { reactive } from "vue";

const state = reactive({ count: 0 });
const notifier = () => {
  useNotifier().requestPermission();
};

const sendNotification = () => {
  useNotifier().newNotification("yuhuu");
};
</script>
