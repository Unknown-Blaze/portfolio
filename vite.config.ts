import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from https://unknown-blaze.github.io/portfolio/, so every asset URL needs the repo prefix.
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  build: { target: "es2020", cssMinify: true },
});
