import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/comics',
    name: 'Comics',
    component: () => import('../views/ComicsPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
