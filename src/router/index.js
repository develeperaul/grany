import { createRouter, createWebHistory } from "vue-router";


const routes = [
  
  {
    path: "/",
    component: () => import("@/layouts/AccentLayout.vue"),
    children: [
      {
        path: "",
        name: "parking",
        component: () => import("@/pages/Parking.vue"),
      },
    ],
  },

  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
