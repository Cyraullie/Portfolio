import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Relative asset paths work both on username.github.io and project Pages URLs.
  base: "/Portfolio/",
  plugins: [react()],
});
