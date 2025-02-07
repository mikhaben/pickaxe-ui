import { defineConfig } from 'vite'
import libraryConfig from './vite/libraryConfig'
import demoConfig from './vite/demoConfig'

export default defineConfig(({ mode }) => {
  console.log('mode:', mode, process.env.VARIANT)
  return process.env.VARIANT === 'lib' ? libraryConfig : demoConfig;
})
