import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { ghPages } from "vite-plugin-gh-pages";
import { VitePWA } from "vite-plugin-pwa";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/magic-ball/",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue(),
    ghPages(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Magic 8 Ball App",
        short_name: "Magic 8 Ball",
        description: "A simple Magic 8 Ball application",
        start_url: "/magic-ball/",
        display: "standalone",
        orientation: "portrait-primary",
        background_color: "#000000",
        theme_color: "#000000",
        icons: [
          {
            src: "/magic-ball/favicon-assets/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/magic-ball/favicon-assets/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/magic-ball/favicon-assets/pwa-maskable-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/magic-ball/favicon-assets/pwa-maskable-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
