import axios from 'axios'
import { Prisma } from '@prisma/client'
import type { Overlay } from '@prisma/client'
import { z as zodValidate } from 'zod'
import type { SpeedQuestion } from '@prisma/client'
//import { User } from '~/utils/types'
import { User } from '~/utils/types'
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'
import { schemas, inputs } from '~/utils/validators'

export const userRouter = createTRPCRouter({
  getUnique: publicProcedure
    //.output(schemas.user.partial())
    .query<User>(async ({ ctx }) => {
      const userId = ctx.auth.userId
      if (userId === null || userId === undefined) throw new Error('No user')
      const user = await ctx.prisma.user.findUnique({
        where: {
          Id: userId,
        },
      })
      if (ctx.auth.userId === null || ctx.auth.userId === undefined)
        throw new Error('User not found')
      if (user === null || user === undefined) {
        const newUser = await ctx.prisma.user.create({
          data: {
            Id: ctx.auth.userId?.toString(),
            FirstName: ctx.auth.user?.firstName ?? '',
            LastName: ctx.auth.user?.lastName ?? '',
            MaxWpm: 250,
            CurrentWpm: 100,
            CreatedAt: new Date(),
            UpdatedAt: new Date(),
            HighlightColor: 'GREY',
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
          Id: ctx.auth.userId ?? input.Id,
        },
        data: {
          FirstName: input.FirstName,
          LastName: input.LastName,
          MaxWpm: input.MaxWpm,
          CurrentWpm: input.CurrentWpm,
          CreatedAt: input.CreatedAt,
          UpdatedAt: input.UpdatedAt,
          LastSchulteByThree: input.LastSchulteByThree,
          HighlightColor: input.HighlightColor,
          LastSchulteByFive: input.LastSchulteByFive,
          LastSchulteBySeven: input.LastSchulteBySeven,
          LastSpeedTest: input.LastSpeedTest,
          LastFourByOne: input.LastFourByOne,
          LastOneByTwo: input.LastOneByTwo,
          LastTwoByTwo: input.LastTwoByTwo,
          LastOneByOne: input.LastOneByOne,
          LastTwoByOne: input.LastTwoByOne,
          LastEvenNumbers: input.LastEvenNumbers,
          LastCubeByTwo: input.LastCubeByTwo,
          LastCubeByThree: input.LastCubeByThree,
        },
      })
    }),

  getDebug: publicProcedure.output(schemas.user.partial()).query<User>(() => {
    return {
      Id: 'test',
      FirstName: 'test',
      LastName: 'User',
      MaxWpm: 250,
      CurrentWpm: 100,
      CreatedAt: new Date(),
      UpdatedAt: new Date(),
      HighlightColor: 'GREY',
    }
  }),
})

export const excercisesPropsRouter = createTRPCRouter({
  getSingleSpeedTestProps: publicProcedure.query(async ({ ctx }) => {
    const numberOfTables = await ctx.prisma.speedQuestion.count()
    const random = Math.floor(Math.random() * numberOfTables)
    const result = await ctx.prisma.speedQuestion.findUnique({
      where: {
        Id: random,
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
      if (input.language === 'SPANISH') {
        const response = await axios.get<string[]>(
          `https://random-word-api.herokuapp.com/word?lang=es&number=${input.number}`,
        )
        return response.data
      }
      if (input.language === 'ENGLISH') {
        const response = await axios.get<string[]>(
          `https://random-word-api.herokuapp.com/word?number=${input.number}`,
        )
        return response.data
      }
    }),
})
