import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

// Preload the body font so text does not reflow (and shift the hero figure) when it swaps in.
function preloadBodyFont(): Plugin {
  return {
    name: "preload-body-font",
    apply: "build",
    transformIndexHtml(_html, ctx) {
      const file = Object.keys(ctx.bundle ?? {}).find((f) => /inter-latin-wght-.*\.woff2$/.test(f));
      if (!file) return [];
      return [
        {
          tag: "link",
          attrs: { rel: "preload", href: `/portfolio/${file}`, as: "font", type: "font/woff2", crossorigin: "" },
          injectTo: "head",
        },
      ];
    },
  };
}

// Served from https://unknown-blaze.github.io/portfolio/, so every asset URL needs the repo prefix.
export default defineConfig({
  base: "/portfolio/",
  plugins: [react(), preloadBodyFont()],
  build: { target: "es2020", cssMinify: true },
});
