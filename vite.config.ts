import { defineConfig } from 'vite'
import libraryConfig from './vite/libraryConfig'
import demoConfig from './vite/demoConfig'

export default defineConfig(() => {
  return process.env.VARIANT === 'lib' ? libraryConfig : demoConfig;
})
