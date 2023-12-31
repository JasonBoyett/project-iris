import { router, protectedProcedure } from "../trpc";
import { User } from "@acme/types";
import { userSchema } from "@acme/validators";

export const userRouter = router({
  get: protectedProcedure
    .output(userSchema)
    .query<User>( async ({ ctx }) => {
      const userId = ctx.auth.userId
      if (userId === null || userId === undefined) throw new Error('No user')
      const user = await ctx.prisma.user.findUnique({
        where: {
          id: userId,
        },
      })
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

  set: protectedProcedure
    .input(userSchema.partial())
    .output(userSchema.partial())
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
          highlightColor: input.highlightColor,
          lastSchulte: input.lastSchulte,
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
          lastLetterMatcher: input.lastLetterMatcher,
          lastWordPairs: input.lastWordPairs, 
          lastGreenDot: input.lastGreenDot,
          numberGuesserFigures: input.numberGuesserFigures,
          schulteLevel: input.schulteLevel,
          schulteAdvanceCount: input.schulteAdvanceCount,
          isAdmin: input.isAdmin,
          isUsingChecklist: input.isUsingChecklist,
          font: input.font,
          language: input.language,
          tested: input.tested,
        },
      })
    }),
    
})
