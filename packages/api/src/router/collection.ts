import { router, protectedProcedure } from '../trpc'
import { uuid } from 'uuidv4'
import {
  boxFlasherData,
  evenNumbersData,
  highlightData,
  numberGuesserData,
  schulteData,
  letterMatcherData,
  wordPairSessionData,
  speedTestData,
} from '@acme/validators'
import { z } from 'zod'

export const collectionRouter = router({
  highlightSession: protectedProcedure
    .input(highlightData)
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.auth.userId
      const user = await ctx.prisma.user.findUnique({
        where: {
          id: userId,
        },
      })
      if (!user?.isStudySubject) return
      await ctx.prisma.highlightSession.create({
        data: {
          id: uuid(),
          userId: input.userId,
          type: input.type,
          speed: input.speed,
          date: new Date(),
        },
      })
    }),

  schulteSession: protectedProcedure
    .input(schulteData)
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.auth.userId
      const user = await ctx.prisma.user.findUnique({
        where: {
          id: userId,
        },
      })
      if (!user?.isStudySubject) return
      await ctx.prisma.schulteSession.create({
        data: {
          id: uuid(),
          date: new Date(),
          userId: input.userId,
          type: input.type,
          time: input.time,
          errorCount: input.errorCount,
          platform: input.platform ?? 'web',
        },
      })
    }),

  numberGuesserSession: protectedProcedure
    .input(numberGuesserData)
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.auth.userId
      const user = await ctx.prisma.user.findUnique({
        where: {
          id: userId,
        },
      })
      if (!user?.isStudySubject) return
      await ctx.prisma.numberGuesserSession.create({
        data: {
          id: uuid(),
          userId: input.userId,
          numberCorrect: input.numberCorrect,
          numberWrong: input.numberWrong,
          longestStreak: input.longestStreak,
          figuresAtStart: input.figuresAtStart,
          figuresAtEnd: input.figuresAtEnd,
          date: new Date(),
          platform: input.platform ?? 'web',
        },
      })
    }),

  letterMatcherSession: protectedProcedure
    .input(letterMatcherData)
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.letterMatcherSession.create({
        data: {
          id: uuid(),
          userId: input.userId,
          numberCorrect: input.numberCorrect,
          numberWrong: input.numberWrong,
          date: new Date(),
          platform: input.platform ?? 'web',
        },
      })
    }),

  evenNumberSession: protectedProcedure
    .input(evenNumbersData)
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.auth.userId
      const user = await ctx.prisma.user.findUnique({
        where: {
          id: userId,
        },
      })
      if (!user?.isStudySubject) return
      await ctx.prisma.evenNumberSession.create({
        data: {
          id: uuid(),
          userId: input.userId,
          time: input.time,
          errorCount: input.errorCount,
          date: new Date(),
          platform: input.platform ?? 'web',
        },
      })
    }),

  boxFlasherSession: protectedProcedure
    .input(boxFlasherData)
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.auth.userId
      const user = await ctx.prisma.user.findUnique({
        where: {
          id: userId,
        },
      })
      if (!user?.isStudySubject) return
      await ctx.prisma.boxFlasherSession.create({
        data: {
          id: uuid(),
          userId: input.userId,
          speed: input.speed,
          date: new Date(),
          type: input.type,
          platform: input.platform ?? 'web',
        },
      })
    }),

  greenDotSession: protectedProcedure
    .input(
      z.object({
        platform: z.union([z.literal('web'), z.literal('mobile')])
          .optional()
      }).optional()
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.auth.userId
      const user = await ctx.prisma.user.findUnique({
        where: {
          id: userId,
        },
      })
      if (!user?.isStudySubject) return
      await ctx.prisma.greenDotSession.create({
        data: {
          id: uuid(),
          userId: ctx.auth.userId as string,
          date: new Date(),
          platform: input?.platform ?? 'web',
        },
      })
    }),

  wordPairSession: protectedProcedure
    .input(wordPairSessionData)
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.auth.userId
      const user = await ctx.prisma.user.findUnique({
        where: {
          id: userId,
        },
      })
      if (!user?.isStudySubject) return
      await ctx.prisma.pairsSession.create({
        data: {
          id: uuid(),
          userId: ctx.auth.userId,
          time: input.time,
          errorCount: input.errorCount,
          date: new Date(),
          platform: input.platform ?? 'web',
        },
      })
    }),

  SpeedTestSession: protectedProcedure
    .input(speedTestData)
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.auth.userId
      const user = await ctx.prisma.user.findUnique({
        where: {
          id: userId,
        },
      })
      if (!user?.isStudySubject) return
      await ctx.prisma.speedTestSession.create({
        data: {
          id: uuid(),
          userId: ctx.auth.userId,
          startSpeed: input.startSpeed,
          endSpeed: input.endSpeed,
          errorCount: input.numberWrong,
          date: new Date(),
          platform: input.platform ?? 'web',
        },
      })
    }),
})
