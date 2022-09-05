import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../pages/Main.vue'

const routes = [
  {
    path: '',
    name: 'main',
    component: Main
  },

  {
    path: '/flats',
    component: () => import('@/layouts/PrimaryLayout.vue'),
    children: [
      {
        path: '',
        name: 'flats.params',
        component: () => import('@/pages/FlatsSelectionParams.vue'),
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
