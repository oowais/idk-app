<template>
  <v-card class="pa-6">
    <v-card-title> Home Count: {{ counter.value }} </v-card-title>
    <v-card-actions>
      <v-btn icon="mdi-plus" color="primary" @click="counter.value++" />
      <v-btn icon="mdi-minus" color="primary" @click="counter.value--" />
      <v-btn color="warning" @click="counter.value = 0">reset</v-btn>
    </v-card-actions>
    <br />
    <v-btn variant="outlined" color="warning" rounded="pill" @click="notifier">
      Request permission
    </v-btn>
    <br />
    <br />
    <v-btn
      variant="outlined"
      color="success"
      rounded="pill"
      @click="sendNotification"
    >
      Send Notification
    </v-btn>
    <v-btn
      variant="outlined"
      color="accent"
      rounded="pill"
      @click="closeNotification"
    >
      Close Notification
    </v-btn>
  </v-card>
</template>

<script setup lang="ts">
import useNotifier from "@/composables/useNotifier";
import { reactive } from "vue";

const counter = reactive({ value: 0 });
const notifier = () => {
  useNotifier().requestPermission();
};
let notification: Notification;

const sendNotification = async () => {
  notification = await useNotifier().newNotification("yuhuu", {
    body: "Body",
    icon: "favicon.ico",
    silent: true,
    tag: "yuhuu",
  });
  notification.addEventListener("click", () => {
    console.log("clicked");
  });
};

const closeNotification = () => {
  if (notification) notification.close();
};
</script>
