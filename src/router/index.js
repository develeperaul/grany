import { createRouter, createWebHistory } from 'vue-router'
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
      },
      {
        path: ':id',
        name: 'flats.one',
        component: () => import('@/pages/FlatsOne.vue'),
        props: true
      }
    ]
  },

  {
    path: '/facad',
    name: 'facad',
    component: () => import('@/pages/FlatsSelectionFacad.vue'),
  },

  {
    path: '/facad/house',
    name: 'facad.house',
    component: () => import('@/pages/FacadHouse.vue'),
  },

  {
    path: '/storeys/:id',
    component: () => import('@/layouts/PrimaryLayout.vue'),
    children: [
      {
        path: '',
        name: 'storey',
        component: () => import('@/pages/Storey.vue'),
        props: true
      }
    ]
  },

  {
    path: '/purchase',
    component: () => import('@/layouts/PrimaryLayout.vue'),
    children: [
      {
        path: '',
        name: 'purchase',
        component: () => import('@/pages/Purchase.vue'),
      }
    ]
  },

  {
    path: '/about',
    component: () => import('@/layouts/PrimaryLayout.vue'),
    children: [
      {
        path: '',
        name: 'about',
        component: () => import('@/pages/About.vue'),
      }
    ]
  },

  {
    path: '/progress',
    component: () => import('@/layouts/PrimaryLayout.vue'),
    children: [
      {
        path: '',
        name: 'progress',
        component: () => import('@/pages/Progress.vue'),
      }
    ]
  },

  {
    path: '/location',
    component: () => import('@/layouts/PrimaryLayout.vue'),
    children: [
      {
        path: '',
        name: 'location',
        component: () => import('@/pages/Location.vue'),
      }
    ]
  },

  {
    path: '/gallery',
    component: () => import('@/layouts/PrimaryLayout.vue'),
    children: [
      {
        path: '',
        name: 'gallery',
        component: () => import('@/pages/Gallery.vue'),
      }
    ]
  },

  {
    path: '/contacts',
    component: () => import('@/layouts/PrimaryLayout.vue'),
    children: [
      {
        path: '',
        name: 'contacts',
        component: () => import('@/pages/Contacts.vue'),
      }
    ]
  },

  {
    path: '/developer',
    component: () => import('@/layouts/PrimaryLayout.vue'),
    children: [
      {
        path: '',
        name: 'developer',
        component: () => import('@/pages/Developer.vue'),
      }
    ]
  },

  {
    path: '/documents',
    component: () => import('@/layouts/SecondaryLayout.vue'),
    children: [
      {
        path: '',
        name: 'documents',
        component: () => import('@/pages/Documents.vue'),
      }
    ]
  },

  {
    path: '/news',
    component: () => import('@/layouts/PrimaryLayout.vue'),
    children: [
      {
        path: '',
        name: 'news',
        component: () => import('@/pages/News.vue'),
      }
    ]
  },

  {
    path: '/creditcalc',
    component: () => import('@/layouts/PrimaryLayout.vue'),
    children: [
      {
        path: '',
        name: 'credit-calc',
        component: () => import('@/pages/CreditCalc.vue'),
      }
    ]
  },


  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/layouts/SecondaryLayout.vue'),
    children: [
      {
        path: '',
        name: 'fallback',
        component: () => import('@/pages/Fallback404.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
