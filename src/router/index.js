import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '@/views/Services.vue'
import KCM from '@/views/KCM.vue'
import NotFound from '@/views/notFound.vue'
import Examples from '@/views/Examples.vue'
import ContactForm from '@/views/ContactForm.vue'
import Gallery from '@/views/Gallery.vue'
import ServiceDetail from '@/views/ServiceDetail.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/kcm',
    name: 'kcm',
    component: KCM
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
  {
    path: '/examples',
    name: 'examples',
    component: Examples
  },
  {
    path:'/contact',
    name: 'contact',
    component: ContactForm
  },
  {
    path:'/gallery',
    name: 'gallery',
    component: Gallery
  },
  {
    path:'/services/:servicedesc',
    name:'servicedesk',
    component: ServiceDetail
  },
  { path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: NotFound 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
