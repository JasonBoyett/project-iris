import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'

const userSchema = z.object({
  Id: z.string(),
  FirstName: z.string(),
  LastName: z.string(),
  MaxWpm: z.number(),
  CurrentWpm: z.number(),
  CreatedAt: z.date(),
  UpdatedAt: z.date(),
  DarkMode: z.boolean(),
  HighlightColor: z.enum([
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

export const userRouter = createTRPCRouter({
  getUnique: publicProcedure
    .output(userSchema)
    .input(
      z.object({
        id: z.string(),
        firstName: z.string(),
        lastName: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUnique({
        where: {
          Id: input.id,
        },
      })
      if (user === null || user === undefined) {
        const newUser = await ctx.prisma.user.create({
          data: {
            Id: 'test',
            FirstName: 'test',
            LastName: 'User',
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
    .input(
      z.object({
        Id: z.string(),
        FirstName: z.string(),
        LastName: z.string(),
        MaxWpm: z.number(),
        CurrentWpm: z.number(),
        CreatedAt: z.date(),
        UpdatedAt: z.date(),
        DarkMode: z.boolean(),
        HighlightColor: z.enum([
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
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.user.update({
        where: {
          Id: input.Id,
        },
        data: {
          FirstName: input.FirstName,
          LastName: input.LastName,
          MaxWpm: input.MaxWpm,
          CurrentWpm: input.CurrentWpm,
          CreatedAt: input.CreatedAt,
          UpdatedAt: input.UpdatedAt,
          DarkMode: input.DarkMode,
          HighlightColor: input.HighlightColor,
        },
      })
    }),

  getDebug: publicProcedure
    .output(userSchema)
    .query(() => {
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
