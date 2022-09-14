<template>
  <v-card flat tile>
    <v-card-text class="py-2 white--text text-center">
      Made with Vue v{{ vueVersion }} • Pinia v{{ piniaVersion }} • Vuetify v{{
        vuetifyVersion
      }}
      <br />
      {{ new Date().getFullYear() }}
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { version as piniaVersion } from "pinia/package.json";
import { version as vueVersion } from "vue/package.json";
import { version as vuetifyVersion } from "vuetify/package.json";
</script>
