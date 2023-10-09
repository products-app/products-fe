import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const __dirname = path.resolve();

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/root": path.join(__dirname, "."),
      "@": path.join(__dirname, "src/"),
    },
  },
});
