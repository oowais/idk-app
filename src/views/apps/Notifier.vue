<template>
  <v-card class="pa-6">
    <v-card-title>Outside notifications</v-card-title>

    <v-card-actions>
      <v-btn variant="tonal" color="warning" rounded="pill" @click="notifier">
        Request permission
      </v-btn>
      <v-btn
        variant="tonal"
        color="success"
        rounded="pill"
        @click="sendNotification"
      >
        Send
      </v-btn>
      <v-btn
        variant="tonal"
        color="accent"
        rounded="pill"
        @click="closeNotification"
      >
        Close
      </v-btn>
    </v-card-actions>
    <v-card-text>
      <span>{{ text }}</span>
    </v-card-text>
  </v-card>

  <v-card class="pa-6 mt-2">
    <v-card-title>Inside (cooler) notifications</v-card-title>
    <v-card-actions>
      <v-btn
        variant="tonal"
        color="success"
        rounded="pill"
        @click="push.success('Something good has been pushed!')"
      >
        Success
      </v-btn>
      <v-btn
        variant="tonal"
        color="error"
        rounded="pill"
        @click="push.error('Something went wrong.')"
      >
        Error
      </v-btn>
      <v-btn
        variant="tonal"
        color="warning"
        rounded="pill"
        @click="push.warning('This is your last warning, or is it?')"
      >
        Warning
      </v-btn>
      <v-btn
        variant="tonal"
        color="info"
        rounded="pill"
        @click="push.info('Informational message')"
      >
        Info
      </v-btn>
    </v-card-actions>
    <br />
    <v-card-actions>
      <v-btn
        variant="tonal"
        color="error"
        rounded="pill"
        @click="push.clearAll()"
      >
        Clear All
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import useNotifier from "@/composables/useNotifier";
import { usePush } from "notivue";
import { ref } from "vue";

const notifier = () => {
  useNotifier().requestPermission();
};
let notification: Notification;
const text = ref<String>("");
const push = usePush();

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
