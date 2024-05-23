
import ReserveHall from '@/views/Halls/pages/ReserveHall.vue'
import ReservedHallTable from '@/views/Halls/pages/ReservedHallTable.vue'
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
          path: '/hall-list',
          name: 'hall-list',
          component: ReservedHallTable
        },
        {
          path: '/hall-reserve',
          name: 'hall-reserve',
          component: ReserveHall
        }
      ]
    }
  ]
})

export default router
