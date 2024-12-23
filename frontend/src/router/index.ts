import MainVue from '@/modulos/pruebas/mainVue.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/bievenida',
      name: 'main',
      component: MainVue,
    },
  ],
})

export default router
