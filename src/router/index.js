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
      path:'/login',
      name:'login',
      component:()=>import('../views/LogIn.vue')
    },
    {
      path:'/clothes',
      name:'clothes',
      component:()=>import('../views/Clothes.vue'),
      /*children:[
        {
          path:'dress',
          component:()=>import('../views/clothes/Dress.vue')
        },
        {
          path:'pants',
          component:()=>import('../views/clothes/Pants.vue')
        }
      ]*/
    },
    {
      path:'/clothes/dress',
      component:()=>import('../views/clothes/Dress.vue')
    },
    {
      path:'/clothes/pants',
      component:()=>import('../views/clothes/Pants.vue')
    },
    {
      path:'/:pathMatch(.*)*',
      name:'notfound',
      component:()=>import('../views/404.vue')
    }
  ]
});

export default router
