import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import ImageProcess from '@/views/image/ImageProcess.vue'
import HtmlTranslation from '@/views/translation/HtmlTranslation.vue'
import ProductUpload from '@/views/product/ProductUpload.vue'
import SqliteTranslation from '@/views/translation/SqliteTranslation.vue'
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
  {
    path: '/htmlTranslation',
    component:HtmlTranslation
  },
  {
    path: '/productUpload',
    component:ProductUpload
  },
  {
    path: '/sqliteTranslation',
    component:SqliteTranslation
  },
]

const router = new VueRouter({
  routes
})

export default router
