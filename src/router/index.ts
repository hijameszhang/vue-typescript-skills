import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "hello" */ '../views/Hello.vue')
  },
  {
    path: '/hello',
    name: 'hello',
    // route level code-splitting
    // this generates a separate chunk (hello.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "hello" */ '../views/Hello.vue')
  },
  {
    path: '/model',
    name: 'model',
    component: () => import(/* webpackChunkName: "model" */ '../views/model/Parent.vue')
  },
  {
    path: '/provide',
    name: 'provide',
    component: () => import(/* webpackChunkName: "model" */ '../views/provideInject/Parent.vue')
  },
  {
    path: '/useVuex',
    name: 'useVuex',
    component: () => import(/* webpackChunkName: "model" */ '../views/UseVuex.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
