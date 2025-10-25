import { PrismaClient } from '@prisma/client'
export default async function resetTested() {
  const prisma = new PrismaClient()
  await prisma.user.updateMany({
    data: {
      tested: false,
    },
  })
}
