import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Cấu hình Vite với hai entry points
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"), // Điểm vào chính cho User
        admin: path.resolve(__dirname, "admin.html"), // Điểm vào cho Admin
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
