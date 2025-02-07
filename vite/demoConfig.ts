import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'

export default {
  root: 'demo',
  plugins: [
    Icons({
      compiler: 'vue3',
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('../', import.meta.url))
    },
  },
}
