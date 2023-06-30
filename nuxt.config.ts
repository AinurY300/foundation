export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@sidebase/nuxt-auth'],
  
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
