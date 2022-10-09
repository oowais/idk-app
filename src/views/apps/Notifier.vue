<template>
  <v-card class="pa-6">
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
    <br />
    <br />
    <span>{{ text }}</span>
  </v-card>
</template>

<script setup lang="ts">
import useNotifier from "@/composables/useNotifier";
import { ref } from "vue";

const notifier = () => {
  useNotifier().requestPermission();
};
let notification: Notification;
const text = ref<String>("");

const sendNotification = async () => {
  text.value = "";
  notification = await useNotifier().newNotification("yuhuu", {
    body: "Body",
    icon: "favicon.ico",
    silent: true,
    tag: "yuhuu",
  });
  notification.addEventListener("click", () => {
    text.value = "You clicked on a notification, YATTA";
  });
};

const closeNotification = () => {
  if (notification) {
    text.value = "You closed on a notification, YATTA";
    notification.close();
  }
};
</script>
