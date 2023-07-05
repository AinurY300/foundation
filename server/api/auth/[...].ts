import { NuxtAuthHandler } from '#auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/prisma/db'
// 
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import YandexProvider from 'next-auth/providers/yandex'
import VkProvider from 'next-auth/providers/vk'

export default NuxtAuthHandler({
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: '7bf262712b53a1f5f690',
      clientSecret: 'f424d139e16c262a1f0cf9f946f4c815ce43ded0'
    }),
    // @ts-expect-error
    GoogleProvider.default({
      clientId: '285263959368-dape2b5lvdqb71ss1pc79fhdfk4s82vj.apps.googleusercontent.com',
      clientSecret: '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'
    }),
    // @ts-expect-error
    YandexProvider.default({
      clientId: 'bb66051bbcda4523ba405d24faab5f04',
      clientSecret: 'e05f2bb90fcd4515957fe6ee12c24c3c'
    }),
    // @ts-expect-error
    VkProvider.default({
      clientId: '51696246',
      clientSecret: 'sSwwvWRXMgqYy6fPHm6o'
    })
  ]
})