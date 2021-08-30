import { createApp, nextTick } from 'vue'
import App from './App.vue'
import router from './router'

router.afterEach((to) => {
  nextTick(() => {
    document.title = to.meta.title
  })
})

createApp(App).use(router).mount('#app')
