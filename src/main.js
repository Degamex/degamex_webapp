import { createApp } from 'vue'
import VueCountdown from '@chenfengyuan/vue-countdown'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.component(VueCountdown.name, VueCountdown)
app.mount('#app')
