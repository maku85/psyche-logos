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

  router: {
    base: '/psyche-logos/',
  },

  components: true,

  plugins: [],

  modules: ['@nuxtjs/dotenv', '@nuxtjs/recaptcha'],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/vuetify',
  ],

  css: [],

  googleFonts: {
    families: {
      Mulish: true,
    },
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Mulish',
      },
    },
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

  recaptcha: {
    hideBadge: false,
    siteKey: '6Lf1pAAeAAAAAGKi7fABPEt-hG1Nmo_cYtCcy7Mf',
    version: 3,
  },
}
