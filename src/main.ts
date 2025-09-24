import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

// ===== CSS IMPORTS =====
import './assets/styles/base/variables.css'
import './assets/styles/base/global.css'

const app = createApp(App)

// Crear router básico
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: App }
  ]
})

app.use(router)
app.mount('#app')
