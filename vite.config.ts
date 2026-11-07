import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/modelo-1/",
  },
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "github_pages",
  },
});