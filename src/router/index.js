import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Advantages from '@/views/Advantages.vue'
import Contacs from '@/views/Contacs.vue'
import References from '@/views/References.vue'
import Services from '@/views/Services.vue'
import Objects from '@/views/Objects.vue'
import Examples from '@/views/Examples.vue'
import About from '@/views/About.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/advantages',
    name: 'advantages',
    component: Advantages
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacs
  },
  {
    path: '/examples',
    name: 'examples',
    component: Examples
  },
  {
    path: '/references',
    name: 'references',
    component: References
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
  {
    path: '/objects',
    name: 'objects',
    component: Objects
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
