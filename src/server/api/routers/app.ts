import { Prisma } from '@prisma/client'
import { z as zodValidate } from 'zod'
import type { SpeedQuestion } from '@prisma/client'
import { User } from '@prisma/client'
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'

const userSchema = zodValidate.object({
  Id: zodValidate.string(),
  FirstName: zodValidate.string().optional(),
  LastName: zodValidate.string().optional(),
  MaxWpm: zodValidate.number(),
  CurrentWpm: zodValidate.number(),
  CreatedAt: zodValidate.date(),
  UpdatedAt: zodValidate.date(),
  DarkMode: zodValidate.boolean(),
  HighlightColor: zodValidate.enum([
    'BLUE',
    'BLUE_GREY',
    'GREEN',
    'GREY',
    'ORANGE',
    'PEACH',
    'PURPLE',
    'RED',
    'TURQUOISE',
    'YELLOW',
  ]),
})

const speedTestSchema = zodValidate.object({
  Id: zodValidate.number(),
  question: zodValidate.string(),
  passage: zodValidate.string(),
  answerA: zodValidate.string(),
  answerB: zodValidate.string(),
  answerC: zodValidate.string(),
  answerD: zodValidate.string(),
  correctAnswer: zodValidate.string(),
})

export const userRouter = createTRPCRouter({
  getUnique: publicProcedure
    .output(userSchema)
    .query<User>(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUnique({
        where: {
          Id: ctx.auth.userId?.toString()
        },
      })
      if (ctx.auth.userId === null || ctx.auth.userId === undefined) throw new Error('User not found')
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
    .output(userSchema)
    .input(userSchema)
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
        },
      })
    }),

  getDebug: publicProcedure.output(userSchema).query<User>(() => {
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
  getSingleSpeedTestProps: publicProcedure
    .query(async ({ ctx }) => {
      const numberOfTables = await ctx.prisma.speedQuestion.count()
      const random = Math.floor(Math.random() * numberOfTables)
      const result = await ctx.prisma.speedQuestion.findUnique({
        where: {
          Id: random,
        }
      })
      if (result === null || result === undefined) throw new Error('No result')
      return result
    }),

  getMultipleSpeedTestProps: publicProcedure
    .output(zodValidate.array(speedTestSchema))
    .input(zodValidate.number())
    .query(async ({ input, ctx }) => {
      const result = await ctx.prisma.$queryRaw<Array<SpeedQuestion>>(
        Prisma.sql
          `SELECT * FROM SpeedQuestion ORDER BY RANDOM() LIMIT ${input}`
      )
      if (result === null || result === undefined) throw new Error('No result')
      return result
    }),
})
