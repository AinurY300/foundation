import { resolve } from "node:path"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./prisma/db"

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@hebilicious/authjs-nuxt'],
  
  alias: {
    "cookie": resolve(__dirname, "node_modules/cookie"),
    "jose": resolve(__dirname, "node_modules/jose/dist/browser/index.js"),
    "@panva/hkdf": resolve(__dirname, "node_modules/@panva/hkdf/dist/web/index.js")
  },
  
  runtimeConfig: {
    adapter: PrismaAdapter(prisma),
    authJs: {
      secret: process.env.NUXT_NEXTAUTH_SECRET // You can generate one with `openssl rand -base64 32`
    },
    yandex: {
      clientId: 'bb66051bbcda4523ba405d24faab5f04',
      clientSecret: 'e05f2bb90fcd4515957fe6ee12c24c3c'
    },
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
