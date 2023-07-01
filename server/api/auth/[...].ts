import { NuxtAuthHandler } from '#auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/prisma/db'
// 
import YandexProvider from 'next-auth/providers/yandex'

export default NuxtAuthHandler({
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    YandexProvider.default({
      clientId: 'bb66051bbcda4523ba405d24faab5f04',
      clientSecret: 'e05f2bb90fcd4515957fe6ee12c24c3c'
    }),
  ]
})