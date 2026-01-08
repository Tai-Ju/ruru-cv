import { createApp } from 'vue'
import './styles/global.css'
import App from './App.vue'
import { trackPageView } from './utils/analytics'

const app = createApp(App)
app.mount('#app')

// 追踪初始页面浏览
trackPageView(window.location.pathname, document.title)
