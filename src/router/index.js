import { createRouter, createWebHistory } from 'vue-router'
import Services from '@/views/Services.vue'
import KCM from '@/views/KCM.vue'
import NotFound from '@/views/notFound.vue'
import Examples from '@/views/Examples.vue'
import ContactForm from '@/views/ContactForm.vue'
import Gallery from '@/views/Gallery.vue'
import ServicesDetail from '@/views/ServicesDetail.vue'
import Stroitelstvo from '@/views/Stroitelstvo.vue'
import Remont from '@/views/Remont.vue'
import Home from '@/views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'glavnaya',
    component: Home
  },
  {
    path: '/kcm',
    name: 'kcm',
    component: KCM
  },
  {
    path: '/uslugi',
    name: 'uslugi',
    component: Services
  },
  {
    path: '/primery',
    name: 'primery',
    component: Examples
  },
  {
    path:'/kontakty',
    name: 'kontakty',
    component: ContactForm
  },
  {
    path:'/galereya',
    name: 'galereya',
    component: Gallery
  },
  {
    path:'/stroitelstvo-domov-i-kottedzhey',
    name:'stroitelstvo-domov-i-kottedzhey',
    component: Stroitelstvo
  },
  {
    path: '/remont-kvartir-i-komnat',
    name: 'remont-kvartir-i-komnat',
    component: Remont
  },
  {
    path:'/uslugi/:opisanieUslug',
    name:'opisanie-uslug',
    component: ServicesDetail
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
