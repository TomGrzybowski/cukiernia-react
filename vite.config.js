import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/curkiernia-react/",
  // root: "./src",
  // build: {
  //   rollupOptions: {
  //     input: "./src/main.jsx", // Replace with your desired entry point file
  //   },
  // },
});
