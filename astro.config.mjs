import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://ucignite2026.vercel.app",
  vite: {
    plugins: [tailwindcss()],
  },
});
