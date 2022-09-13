import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import vuetify from "vite-plugin-vuetify";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true })],
  server: { port: 8000 },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
