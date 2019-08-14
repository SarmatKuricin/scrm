import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {layout: 'main'},
      component: () => import('./views/Home.vue')
    },
    {
      path: '/stock',
      name: 'home',
      meta: {layout: 'main'},
      component: () => import('./views/Stock.vue')
    },
    {
      path: '/message',
      name: 'home',
      meta: {layout: 'main'},
      component: () => import('./views/Home.vue')
    },
    {
      path: '/store',
      name: 'home',
      meta: {layout: 'main'},
      component: () => import('./views/Home.vue')
    },
    {
      path: '/cash',
      name: 'home',
      meta: {layout: 'main'},
      component: () => import('./views/Home.vue')
    },
    {
      path: '/job',
      name: 'home',
      meta: {layout: 'main'},
      component: () => import('./views/Jobs.vue')
    },
    {
      path: '/dashboard',
      name: 'home',
      meta: {layout: 'main'},
      component: () => import('./views/Home.vue')
    }
  ]
})
