// src/main-ssg.js
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, isClient }) => {
    if (!isClient) return

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
  }
)