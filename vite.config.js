import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copy } from "vite-plugin-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [{ src: "src/assets", dest: "dist/assets" }],
    }),
  ],
  base: "/cukiernia-react",
  // root: "./src",
  // build: {
  //   rollupOptions: {
  //     input: "./src/main.jsx", // Replace with your desired entry point file
  //   },
  // },
});
