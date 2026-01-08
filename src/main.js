import { createApp } from 'vue'
import './styles/global.css'
import App from './App.vue'
import { trackPageView, initGA } from './utils/analytics'

const app = createApp(App)
app.mount('#app')

// 初始化並檢查 GA
console.log('[GA] Initializing Google Analytics...')
initGA()

// 等待 DOM 和 GA 加載完成後再追蹤頁面瀏覽
setTimeout(() => {
  trackPageView(window.location.pathname, document.title)
}, 500)
