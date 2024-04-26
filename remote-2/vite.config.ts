import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "remote-2",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./HelloWorld": "./src/components/HelloWorld.vue",
        "./helloWorldWrapper": "./src/components/helloWorldWrapper.ts",
      },
      shared: ["vue"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
