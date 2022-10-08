<template>
  <v-card class="pa-6">
    <v-card-actions>
      <v-btn icon="mdi-cat" @click="getKitty" :disabled="loading"></v-btn>
    </v-card-actions>
    <img :src="url" />
  </v-card>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";

onMounted(() => {
  getKitty();
});

const url = ref<string>("");
let loading = ref<boolean>(false);
const getKitty = async () => {
  loading.value = true;
  const res = await axios.get(
    "https://api.thecatapi.com/v1/images/search?limit=1"
  );
  url.value = res.data[0].url;
  loading.value = false;
};
</script>
