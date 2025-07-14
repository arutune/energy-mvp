import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const basePath = '/energy-mvp/'

export default defineConfig({
  plugins: [vue()],
  base: 'https://github.com/arutune/energy-mvp'
})