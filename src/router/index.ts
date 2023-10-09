import { createRouter, createWebHistory } from 'vue-router'
import { steps_routes } from './steps'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...steps_routes]
})

export default router
