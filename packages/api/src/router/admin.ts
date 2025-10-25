import { schemas } from '@acme/validators'
import { z } from 'zod'
import { protectedProcedure, router } from '../trpc'
import { clerkClient } from '@clerk/nextjs/server'

export const adminRouter = router({
  createAdmin: protectedProcedure
    .input(schemas.createAdminInputSchema)
    .output(schemas.createAdminResultSchema.nullable())
    .mutation(async ({ input, ctx }) => {
      type Variant = z.infer<typeof schemas.createAdminResultSchema>
      if (!input.email) return null
      try {
        const callerId = ctx.auth?.userId
        if (!callerId) return 'unauthorized'
        const caller = await ctx.prisma.user.findUnique({
          where: {
            id: callerId,
          },
        })
        if (caller === null || caller === undefined) return 'unauthorized'
        if (!caller.isAdmin) return 'unauthorized'
        const emailMatches = await clerkClient.users.getUserList({
          emailAddress: [input.email],
        })
        if (emailMatches.length === 0) return 'invalidEmail'

        let result: Variant = 'invalidEmail'
        for (const clerkUser of emailMatches) {
          const irisUser = await ctx.prisma.user.findUnique({
            where: {
              id: clerkUser.id,
            },
          })
          if (!irisUser) continue
          if (irisUser.isAdmin && result !== 'success') {
            result = 'alreadyAdmin'
            continue
          }
          await ctx.prisma.user.update({
            where: {
              id: clerkUser.id,
            },
            data: {
              isAdmin: true,
            },
          })
          result = 'success'
        }
        return result
      } catch (_) {
        return 'error'
      }
    }),
})
