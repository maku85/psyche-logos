import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,
  target: 'static',

  head: {
    title: 'Rested minds',
    htmlAttrs: { lang: 'it' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My personal site' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  components: true,

  plugins: [],

  build: {
    publicPath: '/psyche-logos/',
  },

  modules: [],

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],

  css: [],

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
}
