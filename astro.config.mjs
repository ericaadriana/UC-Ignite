import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://uc-ignite2026.vercel.app",
  vite: {
    plugins: [tailwindcss()],
  },
});
