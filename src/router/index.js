// src/router/index.js
import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import { servicesList } from '../data/servicesList.js'

const isClient = typeof window !== 'undefined' 

import Home from '../views/Home.vue'
import KCM from '../views/KCM.vue'
import Services from '../views/Services.vue'
import ContactForm from '../views/ContactForm.vue'
import Gallery from '../views/Gallery.vue'
import Stroitelstvo from '../views/Stroitelstvo.vue'
import Remont from '../views/Remont.vue'
import ServicesDetail from '../views/ServicesDetail.vue'
import NotFound from '../views/notFound.vue'
import Rekvizity from '@/views/Rekvizity.vue'
import Proekty from '@/views/Proekty.vue'
import ProjectDetails from '@/views/ProjectDetails.vue'

const baseRoutes = [
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
  {
    path: '/rekvizity',
    name: 'rekvizity',
    component: Rekvizity,
    meta: {
      title: 'Реквизиты компании — КСМ, строительная компания в СПб',
      description: 'Полная информация о реквизитах ООО и ИП компании КСМ в Санкт-Петербурге.',
      keywords: 'реквизиты, КСМ, ООО, ИП, строительная компания, СПб'
    }
  },
  {
    path: '/proekty',
    name: 'proekty',
    component: Proekty,
    meta: {
      title: 'Проекты компании — КСМ, строительная компания в СПб',
      description: 'Типовые проекты коттеджей, одноэтажных и двухэтажных домов.',
      keywords: 'типовые проекты, одноэтажные дома, двухэтажные дома, коттеджы, строительная планировка, СПб, КСМ'
    }
  },
 {
    path: '/proekty/:id',
    name: 'project-details',
    component: ProjectDetails,
    meta: {
      title: 'Детали проекта — КСМ, строительная компания в СПб',
      description: 'Подробная информация о выбранном проекте коттеджа или дома.',
      keywords: 'детали проекта, планировка, фото, одноэтажные дома, двухэтажные дома, КСМ, СПб'
    },
     props: true
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: 'Страница не найдена — КСМ',
      description: 'Ошибка 404. Страница не найдена.',
      keywords: '404, страница не найдена, КСМ'
    }
  },
  { 
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

// Динамические роуты servicesList
const dynamicServiceRoutes = servicesList.map(service => ({
  path: `/uslugi/:opisanieUslug`,
  name: `usluga-${service.slug}`,
  component: ServicesDetail,
  props: true, // <-- pass route params as props
  meta: {
    title: `${service.name} — КСМ, строительная компания в СПб`,
    description: `Услуга "${service.name}" от строительной компании КСМ в Санкт-Петербурге.`,
    keywords: `${service.name}, КСМ, строительная компания, СПб`,
    dynamic: true,
    service
  }
}))

const routes = [...baseRoutes, ...dynamicServiceRoutes]

const router = createRouter({
  history: isClient ? createWebHistory() : createMemoryHistory(),
  routes
})

export { routes }
export default router