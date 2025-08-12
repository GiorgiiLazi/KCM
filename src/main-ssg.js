import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import router from './router/index.js'

export const createApp = ViteSSG(App, { routes: router.options.routes })