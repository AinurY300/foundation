import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    'nuxt-purgecss',
    '@sidebase/nuxt-auth',
    
    async (options, nuxt) => {
        nuxt.hooks.hook('vite:extendConfig', (config) => {
          config?.plugins?.push(vuetify());
      });
    }
  ],

  purgecss: {
    content: ['modules/purgecss/static-generated-html/**/*.html'],
  },
  
  auth: {
    baseURL: process.env.NEXTAUTH_URL,
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
