import ReserveHall from '@/Halls/pages/ReserveHall.vue'
import MainLayout from '@/views/MainLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component: MainLayout,
      children: [
        {
          path: '/ReserveHall',
          name: 'Reserve-Hall',
          component: ReserveHall
        }
      ]
    }
  ]
})

export default router
