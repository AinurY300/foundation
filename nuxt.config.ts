import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/i18n',
    '@sidebase/nuxt-auth',
    
    async (options, nuxt) => {
        nuxt.hooks.hook('vite:extendConfig', (config) => {
          config?.plugins?.push(vuetify());
      });
    }
  ],

  i18n: {
    baseUrl: process.env.BASE_URL,
    locales: [
      { code: 'ru', iso: 'ru-RU', file: 'ru-RU.ts' },
      { code: 'en', iso: 'en-US', file: 'en-US.ts' },
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'ru',
    strategy: 'prefix_except_default',
    experimental: {
      jsTsFormatResource: true
    },
    vueI18n: './i18n.config.ts',
  },
  
  auth: {
    baseURL: process.env.BASE_URL,
  },
  
  build: {
    transpile: ['vuetify'],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },

  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
})

