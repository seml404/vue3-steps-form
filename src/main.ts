import './assets/scss/main.scss'
import '@mdi/font/css/materialdesignicons.css'
export default createVuetify({})
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { vMaska } from 'maska'
import { btn_main } from './components/UI'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Translations provided by Vuetify
import { ru } from 'vuetify/locale'
const vuetify = createVuetify({
  components,
  directives,
  locale: {
    locale: 'ru',
    messages: { ru }
  },
  icons: {
    defaultSet: 'mdi'
  }
})

const app = createApp(App)

app
  .component('BtnMain', btn_main)
  .directive('maska', vMaska)
  .use(createPinia())
  .use(router)
  .use(vuetify)
  .mount('#app')
