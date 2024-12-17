import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '../views/LogIn.vue'
import HomePage from '../views/HomePage.vue'
import BreakDown from '../views/BreakDown.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn,
    },
    {
      path: '/breakdown',
      name: 'breakdown',
      component: BreakDown,
    }
  ],
})

export default router
