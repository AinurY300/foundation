import { resolve } from "node:path"

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@hebilicious/authjs-nuxt'],
  
  alias: {
    "cookie": resolve(__dirname, "node_modules/cookie"),
    "jose": resolve(__dirname, "node_modules/jose/dist/browser/index.js"),
    "@panva/hkdf": resolve(__dirname, "node_modules/@panva/hkdf/dist/web/index.js")
  },
  
  runtimeConfig: {
    authJs: {
      secret: process.env.NUXT_NEXTAUTH_SECRET // You can generate one with `openssl rand -base64 32`
    },
    // github: {
    //   clientId: process.env.NUXT_GITHUB_CLIENT_ID,
    //   clientSecret: process.env.NUXT_GITHUB_CLIENT_SECRET
    // },
    public: {
      authJs: {
        baseUrl: process.env.NUXT_NEXTAUTH_URL, // The base URL is used for the Origin Check in prod only
        verifyClientOnEveryRequest: true // whether to hit the /auth/session endpoint on every client request
      }
    }
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
