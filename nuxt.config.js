import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },

  app: {
    head: {
      title: 'Rested minds',
      htmlAttrs: { lang: 'it' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'My personal site',
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  // router: {
  //   base: '/psyche-logos/',
  // },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],

  css: ['@mdi/font/css/materialdesignicons.min.css', '~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/variables.scss" as *;',
        },
      },
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
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
  },

  recaptcha: {
    hideBadge: false,
    siteKey: '6Lf1pAAeAAAAAGKi7fABPEt-hG1Nmo_cYtCcy7Mf',
    version: 3,
  },
})
