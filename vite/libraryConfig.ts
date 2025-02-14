import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import tailwindcss from "@tailwindcss/vite";

export default {
  plugins: [
    vue(),
    tailwindcss(),
    Icons({ compiler: 'vue3' }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('../', import.meta.url))
    },
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: fileURLToPath(new URL('../src/main.ts', import.meta.url)),
      name: 'index',
    },
    rollupOptions: {
      external: [ 'vue' ],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
}
