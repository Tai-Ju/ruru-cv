import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 根據部署平台設置 base 路徑
  // Vercel 會自動注入 VERCEL 環境變數
  // GitHub Pages 需要使用倉庫名稱作為路徑
  const base = process.env.VERCEL
    ? '/'
    : mode === 'production'
      ? '/ruru-cv/'
      : '/'

  return {
    plugins: [vue()],
    base: base,
  }
})
