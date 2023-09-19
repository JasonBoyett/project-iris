import axios from 'axios'
import { Prisma } from '@prisma/client'
import { z as zodValidate } from 'zod'
import type { SpeedQuestion } from '@prisma/client'
import type { User } from '~/utils/types'
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'
import { schemas, inputs } from '~/utils/validators'

export const userRouter = createTRPCRouter({
  getUnique: publicProcedure
  .output(schemas.user)
  .query<User>(async ({ ctx }) => {
    const userId = ctx.auth.userId
    if (userId === null || userId === undefined) throw new Error('No user')
    const user = await ctx.prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
    if (ctx.auth.userId === null || ctx.auth.userId === undefined)
    throw new Error('User not found')
    if (user === null || user === undefined) {
      const newUser = await ctx.prisma.user.create({
        data: {
          id: ctx.auth.userId?.toString(),
          firstName: ctx.auth.user?.firstName ?? '',
          lastName: ctx.auth.user?.lastName ?? '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      })
      return newUser
    }
    return user
  }),

  setUser: publicProcedure
  .output(schemas.user.partial())
  .input(schemas.user.partial())
  .mutation<User>(({ ctx, input }) => {
    return ctx.prisma.user.update({
      where: {
        id: ctx.auth.userId ?? input.id,
      },
      data: {
        firstName: input.firstName,
        lastName: input.lastName,
        maxWpm: input.maxWpm,
        currentWpm: input.currentWpm,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        lastSchulteByThree: input.lastSchulteByThree,
        highlightColor: input.highlightColor,
        lastSchulteByFive: input.lastSchulteByFive,
        lastSchulteBySeven: input.lastSchulteBySeven,
        lastSpeedTest: input.lastSpeedTest,
        lastFourByOne: input.lastFourByOne,
        lastOneByTwo: input.lastOneByTwo,
        lastTwoByTwo: input.lastTwoByTwo,
        lastOneByOne: input.lastOneByOne,
        lastTwoByOne: input.lastTwoByOne,
        lastEvenNumbers: input.lastEvenNumbers,
        lastCubeByThree: input.lastCubeByThree,
        lastCubeByTwo: input.lastCubeByTwo,
        lastNumberGuesser: input.lastNumberGuesser,
        numberGuesserFigures: input.numberGuesserFigures,
        font: input.font,
        language: input.language,
        tested: input.tested,
      },
    })
  }),
})

export const excercisesPropsRouter = createTRPCRouter({
  getSingleSpeedTestProps: publicProcedure
  .output(schemas.speedTest)
  .query(async ({ ctx }) => {
    const numberOfTables = await ctx.prisma.speedQuestion.count()
    const random = Math.floor(Math.random() * numberOfTables)
    const result = await ctx.prisma.speedQuestion.findUnique({
      where: {
        id: random,
      },
    })
    if (result === null || result === undefined) throw new Error('No result')
    return result
  }),

  getMultipleSpeedTestProps: publicProcedure
  .output(zodValidate.array(schemas.speedTest))
  .input(zodValidate.number())
  .query(async ({ input, ctx }) => {
    const result = await ctx.prisma.$queryRaw<Array<SpeedQuestion>>(
      Prisma.sql`SELECT * FROM SpeedQuestion ORDER BY RANDOM() LIMIT ${input}`,
    )
    if (result === null || result === undefined) throw new Error('No result')
    return result
  }),

  getRandomWords: publicProcedure
  .input(inputs.randomWords)
  .output(zodValidate.array(zodValidate.string()).or(zodValidate.undefined()))
  .query<string[] | undefined>(async ({ input }) => {
    if (input.language === 'spanish') {
      const response = await axios.get<string[]>(
        `https://random-word-api.herokuapp.com/word?lang=es&number=${input.number}`,
      )
      return response.data
    }
    if (input.language === 'english') {
      const response = await axios.get<string[]>(
        `https://random-word-api.herokuapp.com/word?number=${input.number}`,
      )
      return response.data
    }
  }),
})

export const createSpeedTestRouter = createTRPCRouter({
  createSpeedTest: publicProcedure
  .input(schemas.speedTest)
  .output(schemas.speedTest)
  .mutation( async ({ input, ctx }) => {
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
  })
})
