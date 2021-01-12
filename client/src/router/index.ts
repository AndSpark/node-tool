import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import ImageProcess from '@/views/image/ImageProcess.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component:Home
  },
  {
    path: '/image',
    component:ImageProcess
  },
]

const router = new VueRouter({
  routes
})

export default router
