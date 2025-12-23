import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Ensure JSX in .js files is transformed
      include: [/\.jsx?$/, /\.tsx?$/],
    }),
  ],
  base: "/portfolio/",
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 4173,
  },
});
