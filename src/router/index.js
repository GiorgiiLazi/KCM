import { createRouter, createWebHistory } from 'vue-router'
import { servicesList } from '../routes/servicesList.js'

import Home from '../views/Home.vue'
import KCM from '../views/KCM.vue'
import Services from '../views/Services.vue'
import Examples from '../views/Examples.vue'
import ContactForm from '../views/ContactForm.vue'
import Gallery from '../views/Gallery.vue'
import Stroitelstvo from '../views/Stroitelstvo.vue'
import Remont from '../views/Remont.vue'
import ServicesDetail from '../views/ServicesDetail.vue'
import NotFound from '../views/notFound.vue'

const routes = [
  {
    path: '/',
    name: 'glavnaya',
    component: Home,
    meta: {
      title: 'КСМ — строительная компания в СПб',
      description: 'Строительная компания КСМ — строительство коттеджей, ремонт, отделка и благоустройство в Санкт-Петербурге.',
      keywords: 'КСМ, строительная компания, строительство домов, ремонт, СПб'
    }
  },
  {
    path: '/kcm',
    name: 'kcm',
    component: KCM,
    meta: {
      title: 'О компании КСМ — строительство коттеджей и ремонт в СПб и Лен. Области',
      description: 'О компании КСМ: опыт, проекты и преимущества строительной компании в Санкт-Петербурге.',
      keywords: 'КСМ, строительная компания, о компании, проекты, СПб'
    }
  },
  {
    path: '/uslugi',
    name: 'uslugi',
    component: Services,
    meta: {
      title: 'Услуги строительной компании КСМ — СПб',
      description: 'Полный спектр строительных и ремонтных услуг от КСМ в Санкт-Петербурге.',
      keywords: 'услуги, строительство, ремонт, КСМ, СПб'
    }
  },
  {
    path: '/primery',
    name: 'primery',
    component: Examples,
    meta: {
      title: 'Примеры работ КСМ — строительство и ремонт',
      description: 'Галерея и примеры выполненных проектов строительной компании КСМ.',
      keywords: 'примеры работ, галерея, КСМ, СПб'
    }
  },
  {
    path: '/kontakty',
    name: 'kontakty',
    component: ContactForm,
    meta: {
      title: 'Контакты строительной компании КСМ',
      description: 'Свяжитесь с нами для консультации и расчёта стоимости работ.',
      keywords: 'контакты, КСМ, телефон, СПб'
    }
  },
  {
    path: '/galereya',
    name: 'galereya',
    component: Gallery,
    meta: {
      title: 'Галерея строительной компании КСМ',
      description: 'Фото готовых объектов, построенных компанией КСМ в СПб.',
      keywords: 'галерея, строительство, КСМ, СПб'
    }
  },
  {
    path: '/stroitelstvo-domov-i-kottedzhey',
    name: 'stroitelstvo-domov-i-kottedzhey',
    component: Stroitelstvo,
    meta: {
      title: 'Строительство домов и коттеджей в СПб — КСМ',
      description: 'Проектирование и строительство домов и коттеджей в Санкт-Петербурге.',
      keywords: 'строительство домов, коттеджи, КСМ, СПб'
    }
  },
  {
    path: '/remont-kvartir-i-komnat',
    name: 'remont-kvartir-i-komnat',
    component: Remont,
    meta: {
      title: 'Ремонт квартир и комнат в СПб — КСМ',
      description: 'Качественный ремонт квартир и комнат под ключ в Санкт-Петербурге.',
      keywords: 'ремонт квартир, ремонт комнат, КСМ, СПб'
    }
  },
  // Динамические роуты из servicesList
...servicesList.map(service => ({
    path: `/uslugi/:opisanieUslug`,
    name: `usluga-${service.slug}`,
    component: ServicesDetail,
    meta: {
      title: `${service.name} — КСМ, строительная компания в СПб`,
      description: `Услуга "${service.name}" от строительной компании КСМ в Санкт-Петербурге.`,
      keywords: `${service.name}, КСМ, строительная компания, СПб`
    }
  })),
  { 
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: 'Страница не найдена — КСМ',
      description: 'Ошибка 404. Страница не найдена.',
      keywords: '404, страница не найдена, КСМ'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Установка метатегов при смене роута
router.afterEach((to) => {
  if (to.meta?.title) document.title = to.meta.title

  const setMetaTag = (name, content) => {
    if (!content) return
    let tag = document.querySelector(`meta[name="${name}"]`)
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', name)
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', content)
  }

  setMetaTag('description', to.meta?.description)
  setMetaTag('keywords', to.meta?.keywords)
})

export default router