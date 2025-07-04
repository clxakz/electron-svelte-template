// electron.vite.config.js
import { defineConfig } from 'electron-vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  main: {
    plugins: [tailwindcss()],
  },
  preload: {
    plugins: [tailwindcss()],
  },
  renderer: {
    plugins: [svelte(), tailwindcss()],
    resolve: {
      alias: {
        $lib: path.resolve("./src/renderer/src/lib"),
      },
    },
  },
});
