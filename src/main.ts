import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'
import { preloadCriticalResources, setupLazyLoading, measureWebVitals } from './utils/performance'

// ===== CSS IMPORTS =====
import './assets/styles/base/variables.css'
import './assets/styles/base/global.css'
import './assets/styles/components/scroll-animations.css'
import './assets/main.css'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)

// Inicializar optimizaciones de rendimiento
preloadCriticalResources()
setupLazyLoading()

// Medir Web Vitals en desarrollo
if (import.meta.env.DEV) {
  measureWebVitals()
}

app.mount('#app')
