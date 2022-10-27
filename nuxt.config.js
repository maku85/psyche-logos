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

  // router: {
  //   base: '/psyche-logos/',
  // },

  components: true,

  plugins: [],

  modules: ['@nuxtjs/dotenv', '@nuxtjs/recaptcha'],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/style-resources',
    '@nuxtjs/vuetify',
  ],

  css: [],

  styleResources: {
    scss: ['~/assets/variables.scss', '~/assets/scss/main.scss'],
  },

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
        light: {
          primary: {
            base: '#4caf50',
          },
          secondary: {
            base: '#ff8c00',
          },
          accent: {
            base: '#a47355',
          },
        },
        dark: {
          primary: {
            base: '#4caf50',
          },
          secondary: {
            base: '#ff8c00',
          },
          accent: {
            base: '#a47355',
          },
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
