import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import tailwindcss from '@tailwindcss/vite'

export default {
  root: 'demo',
  plugins: [
    vue(),
    tailwindcss(),
    Icons({
      compiler: 'vue3',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('../', import.meta.url))
    },
  },
}
