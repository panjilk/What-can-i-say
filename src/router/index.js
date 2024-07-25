import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '../views/login.vue'
import booklist from '../views/Userlist.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'book',
      component: booklist
    },
    {
      path: '/fruit',
      name: 'login',
      component: import("../views/HomeView.vue")
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/register',
      name:'register',
      component: () => import('../views/register.vue')
    },
    {
      path: '/pic',
      name: 'pic',
      component: import("../views/picConvert.vue")
    },
  ]
})

export default router
