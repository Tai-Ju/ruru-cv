import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // GitHub Pages 部署時需要設置 base 路徑
  // 如果是部署到 https://username.github.io/repo-name/，則設置為 '/repo-name/'
  // 如果是部署到自定義域名或 https://username.github.io/，則設置為 '/'
  base: process.env.NODE_ENV === 'production' ? '/ruru-cv/' : '/',
})
