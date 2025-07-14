import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const basePath = 'https://github.com/arutune/energy-mvp'

export default defineConfig({
  plugins: [vue()],
  base: basePath
})