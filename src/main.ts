import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { clerkPlugin } from '@clerk/vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}
app.use(clerkPlugin, { publishableKey: PUBLISHABLE_KEY })



app.mount('#app')