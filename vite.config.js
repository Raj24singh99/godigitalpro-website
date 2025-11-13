// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// This configuration allows Vite to pick any open port dynamically.
// It also ensures HMR (Hot Module Replacement) works without port conflicts.

export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1", // bind only to loopback to avoid sandbox restrictions
    port: 0,           // ask OS for an available port
    strictPort: false, // let Vite pick a free port automatically
    hmr: {
      // no hardcoded port — Vite auto-detects WebSocket endpoint
      protocol: "ws",
    },
  },
  preview: {
    host: "127.0.0.1",
    port: 5000, // optional fallback for preview builds
  },
});
