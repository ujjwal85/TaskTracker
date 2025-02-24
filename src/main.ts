import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'

const vuetify = createVuetify({
    components,
    directives,
})

import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')