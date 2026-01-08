import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 根據部署平台設置 base 路徑
  // - Vercel: 使用根路徑 '/'
  // - GitHub Pages with custom domain: 使用根路徑 '/'
  // - GitHub Pages without custom domain: 使用 '/ruru-cv/'
  //
  // 由於您有 custom domain，GitHub Pages 也使用根路徑
  const base = '/'

  return {
    plugins: [vue()],
    base: base,
  }
})
