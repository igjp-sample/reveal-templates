import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "../dist/public",
  },
  server: {
    open: true,
    proxy: {
      // Reveal 用のリクエストを中継
      "^/(dashboard|DashboardFile)": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
});
