import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@sidebase/nuxt-auth',
    
    async (options, nuxt) => {
        nuxt.hooks.hook('vite:extendConfig', (config) => {
          config?.plugins?.push(vuetify());
      });
    }
  ],
  
  auth: {
    baseURL: process.env.VERCEL_URL,
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
