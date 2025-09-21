import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// create a pinia instance
const pinia = createPinia()

// use it **before mounting**
app.use(pinia)
app.use(router)

app.mount('#app')

