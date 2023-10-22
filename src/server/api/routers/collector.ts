import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'
import { uuid } from 'uuidv4'
import { 
    boxFlasherData,
    evenNumbersData,
  highlightData,
  numberGuesserData,
  schulteData,
  letterMatcherData,
} from '~/utils/validators'

export const highlightSessionRouter = createTRPCRouter({
  setUnique: publicProcedure
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
})

export const schulteSessionRouter = createTRPCRouter({
    setUnique: publicProcedure
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
})

export const numberGuesserRouter = createTRPCRouter({
  setUnique: publicProcedure
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
})

export const letterMatcherRouter = createTRPCRouter({
  setUnique: publicProcedure
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
})

export const evenNumbersRouter = createTRPCRouter({
  setUnique: publicProcedure
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
  })
})

export const boxFlasherRouter = createTRPCRouter({
  setUnique: publicProcedure
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
  })
})
