import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Завантажуємо змінні оточення для поточного середовища
  const env = dotenv.config({
    path: `.env.${mode}`,
  }).parsed;

  // Передаємо змінні оточення в конфігурацію Vite
  return {
    plugins: [
      react(),
      svgr({
        exportAsDefault: true,
      }),
    ],
    base: "./",
    build: {
      minify: true,
      rollupOptions: {
        output: {
          chunkFileNames: "js/[name]-[hash].js",
          entryFileNames: "[name]-[hash].js",
          assetFileNames: ({ name }) => {
            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
              return "images/[name]-[hash][extname]";
            }
            if (/\.css$/.test(name ?? "")) {
              return "[name]-[hash][extname]";
            }
            return "[name]-[hash][extname]";
          },
        },
      },
    },
    define: {
      "process.env": env,
    },
  };
});
