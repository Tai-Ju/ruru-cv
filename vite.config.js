import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 根據部署平台設置 base 路徑
  // Vercel: 使用根路徑 '/'
  // GitHub Pages: 使用 '/ruru-cv/'
  base: process.env.VERCEL ? '/' : (process.env.NODE_ENV === 'production' ? '/ruru-cv/' : '/'),
})
