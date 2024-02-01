import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const defaultTheme = {
  dark: false,
  colors: {
    primary: '#151110',
    secondary: '#a47355',
    accent: '#a47355',
    error: '#000000',
    info: '#000000',
    success: '#000000',
    warning: '#000000',
  },
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'defaultTheme',
      themes: { defaultTheme },
    },
  })
  app.vueApp.use(vuetify)
})
