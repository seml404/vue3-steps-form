import { createRouter, createWebHistory } from 'vue-router'
import FirstStep from '@/views/FirstScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'first-step',
      component: FirstStep
    }
  ]
})

export default router
