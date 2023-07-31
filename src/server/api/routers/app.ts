import axios from 'axios'
import { Prisma } from '@prisma/client'
import type { Overlay } from '@prisma/client'
import { z as zodValidate } from 'zod'
import type { SpeedQuestion } from '@prisma/client'
import { User } from '~/utils/types'
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'
import { schemas, inputs } from '~/utils/validators'

export const userRouter = createTRPCRouter({
  getUnique: publicProcedure
    .output(schemas.user)
    .query<User>(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUnique({
        where: {
          Id: ctx.auth.userId?.toString(),
        },
      })
      if (ctx.auth.userId === null || ctx.auth.userId === undefined)
        throw new Error('User not found')
      if (user === null || user === undefined) {
        const newUser = await ctx.prisma.user.create({
          data: {
            Id: ctx.auth.userId?.toString(),
            FirstName: ctx.auth.user?.firstName ?? 'Unnamed',
            LastName: ctx.auth.user?.lastName ?? 'User',
            MaxWpm: 250,
            CurrentWpm: 100,
            CreatedAt: new Date(),
            UpdatedAt: new Date(),
            DarkMode: false,
            HighlightColor: 'GREY',
          },
        })
        return newUser
      }
      return user
    }),

  setUser: publicProcedure
    .output(schemas.user)
    .input(schemas.user.partial())
    .mutation<User>(({ ctx, input }) => {
      return ctx.prisma.user.update({
        where: {
          Id: ctx.auth.userId ?? input.Id,
        },
        data: {
          FirstName: input.FirstName ?? 'Unnamed',
          LastName: input.LastName ?? 'User',
          MaxWpm: input.MaxWpm,
          CurrentWpm: input.CurrentWpm,
          CreatedAt: input.CreatedAt,
          UpdatedAt: input.UpdatedAt,
          DarkMode: input.DarkMode,
          HighlightColor: input.HighlightColor,
          LastSchulteSession: input.LastSchulteSession,
          LastSpeedTest: input.LastSpeedTest,
          LastFourByOne: input.LastFourByOne,
          LastOneByTwo: input.LastOneByTwo,
          LastTwoByTwo: input.LastTwoByTwo,
          LastOneByOne: input.LastOneByOne,
        },
      })
    }),

  setUserFirstName: publicProcedure
    .output(schemas.user)
    .input(
      zodValidate.object({
        name: zodValidate.string(),
        Id: zodValidate.string(),
      }),
    )
    .mutation<User>(({ ctx, input }) => {
      return ctx.prisma.user.update({
        where: {
          Id: ctx.auth.userId ?? input.Id,
        },
        data: {
          FirstName: input.name,
        },
      })
    }),

  // setUserLastName: publicProcedure

  getDebug: publicProcedure
    .output(schemas.user)
    .query<User>(() => {
      return {
        Id: 'test',
        FirstName: 'test',
        LastName: 'User',
        MaxWpm: 250,
        CurrentWpm: 100,
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
        DarkMode: false,
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
    .output(
      zodValidate.array(zodValidate.string())
      .or(zodValidate.undefined())
    )
    .query<string[] | undefined>(async ({ input }) => {
      if(input.language === 'SPANISH'){
        const response = await axios.get<string[]>(
          `https://random-word-api.herokuapp.com/word?lang=es&number=${input.number}`
        )
        return response.data
      }
      if(input.language === 'ENGLISH'){
        const response = await axios.get<string[]>(
          `https://random-word-api.herokuapp.com/word?number=${input.number}`
        )
        return response.data
      }
    }),
})
