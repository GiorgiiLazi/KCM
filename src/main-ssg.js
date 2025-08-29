// src/main-ssg.js
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import './assets/main.css'
import { routes } from './router'

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, isClient }) => {
    if (!isClient) return

    // ---------------------------
    // Google Analytics
    // ---------------------------
    const GA_MEASUREMENT_ID = 'G-V942M0YYLK'

    // Подключаем скрипт GA
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag(){window.dataLayer.push(arguments)}
    gtag('js', new Date())
    gtag('config', GA_MEASUREMENT_ID, { send_page_view: false }) // вручную отправляем события

    // ---------------------------
    // SEO: title, description, keywords
    // ---------------------------
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

    router.afterEach((to) => {
      if (to.meta?.title) document.title = to.meta.title
      setMetaTag('description', to.meta?.description)
      setMetaTag('keywords', to.meta?.keywords)

      // Отправка события page_view в GA
      if (typeof gtag === 'function') {
        gtag('event', 'page_view', {
          page_path: to.fullPath,
          page_title: document.title,
        })
      }
    })
  }
)