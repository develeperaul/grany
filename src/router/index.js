import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../pages/Main.vue'

const routes = [
  {
    path: '',
    name: 'main',
    component: Main
  },

  {
    path: '',
    component: () => import('@/layouts/PrimaryLayout.vue'),
    children: [
      {
        path: '/gallery',
        name: 'gallery',
        component: () => import('@/pages/Gallery.vue')
      },
      {
        path: '/terms',
        name: 'terms',
        component: () => import('@/pages/Terms.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
