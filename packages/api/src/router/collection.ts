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
} from '@acme/validators'

export const collectionRouter = router({
  highlightSession: protectedProcedure
    .input(highlightData)
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.highlightSession.create({
        data: {
          id: uuid(),
          userId: input.userId,
          type: input.type,
          speed: input.speed,
          date: new Date(),
        }
      })
    }),

  schulteSession: protectedProcedure
    .input(schulteData)
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.schulteSession.create({
        data: {
          id: uuid(),
          userId: input.userId,
          type: input.type,
          time: input.time,
          errorCount: input.errorCount,
        }
      })
    }),

  numberGuesserSession: protectedProcedure
    .input(numberGuesserData)
    .mutation(async ({ input, ctx }) => {
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
        }
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
        }
      })
    }),

  evenNumberSession: protectedProcedure
    .input(evenNumbersData)
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.evenNumberSession.create({
        data: {
          id: uuid(),
          userId: input.userId,
          time: input.time,
          errorCount: input.errorCount,
          date: new Date(),
        }
      })
    }),

  boxFlasherSession: protectedProcedure
    .input(boxFlasherData)
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.boxFlasherSession.create({
        data: {
          id: uuid(),
          userId: input.userId,
          speed: input.speed,
          date: new Date(),
          type: input.type,
        }
      })
    }),

  greenDotSession: protectedProcedure
    .mutation(async ({ ctx }) => {
      await ctx.prisma.greenDotSession.create({
        data: {
          id: uuid(),
          userId: ctx.auth.userId as string, 
          date: new Date(),
        }
      })
    }),

  wordPairSession: protectedProcedure
    .input(wordPairSessionData)
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.pairsSession.create({
        data: {
          id: uuid(),
          userId: ctx.auth.userId as string,
          time: input.time,
          errorCount: input.errorCount,
          date: new Date(),
        }
      })
    }),
})
