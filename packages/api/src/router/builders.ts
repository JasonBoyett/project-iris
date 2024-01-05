import { schemas } from '@acme/validators'
import { router, protectedProcedure } from '../trpc'

export const buildSpeedTestRouter = router({
  createSpeedTest: protectedProcedure
    .input(schemas.speedTest)
    .output(schemas.speedTest)
    .mutation(async ({ input, ctx }) => {
      const user = await ctx.prisma.user.findUnique({
        where: {
          id: ctx.auth.userId,
        },
      })
      if (!user || !user.isAdmin) throw new Error('Unauthorized')
      const count = await ctx.prisma.speedQuestion.count()
      return await ctx.prisma.speedQuestion.create({
        data: {
          id: count + 1,
          passage: input.passage,
          question: input.question,
          answerA: input.answerA,
          answerB: input.answerB,
          answerC: input.answerC,
          answerD: input.answerD,
          correctAnswer: input.correctAnswer,
        },
      })
    }),
})
