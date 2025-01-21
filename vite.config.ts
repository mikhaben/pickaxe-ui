import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  root: 'demo',
  plugins: [
    Icons({
      compiler: 'vue3',
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url))
    },
  },
})
