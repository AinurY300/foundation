import { prisma } from "../../prisma/db"

export default defineEventHandler(async event => {

  const users = await prisma.user.findMany()

  return {
    users: users
  }
})