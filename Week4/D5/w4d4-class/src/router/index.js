import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/User/',
      name: 'user',
      component: () => import("../views/UserView.vue"),
      children: [
        {
          path: '',
          name: 'default',
          component: () => import("../components/UsersDefault.vue"),
        },
        {
          path: '/User/hijo',
          name: 'children',
          component: () => import("../components/UsersChildren.vue"),
        },
      ]
    },
    {
      //Para pasar un parámetro usamos :
      //Si añadimos ? al final, el parámetro no es obligatorio
      path: '/Blog/:id?',
      name: 'blog',
      component: () => import("../views/BlogView.vue")
    },
    {
      path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import("../views/NotFoundView.vue"),
    }
  ]
})

export default router
