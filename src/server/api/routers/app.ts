import axios from 'axios'
import { Prisma } from '@prisma/client'
import { z } from 'zod'
import type { SpeedQuestion } from '@prisma/client'
import type { Language, User, WordPair } from '~/utils/types'
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'
import {
  schemas,
  inputs,
  wordPairData,
  wordPairProps,
  createAdminInputSchema,
} from '~/utils/validators'
import { getNextExercise, getNextURL } from '~/utils/helpers'
import { clerkClient } from '@clerk/nextjs/server'

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

  createAdmin: publicProcedure
    .input(schemas.createAdminInputSchema)
    .output(schemas.createAdminResultSchema.nullable())
    .mutation(async ({ input, ctx }) => {
      type Variant = z.infer<typeof schemas.createAdminResultSchema>
      if (!input.email) return null
      try {
        const callerId = ctx.auth?.userId
        if (!callerId) return 'unauthorized'
        const caller = await ctx.prisma.user.findUnique({
          where: {
            id: callerId,
          },
        })
        if (caller === null || caller === undefined) return 'unauthorized'
        if (!caller.isAdmin) return 'unauthorized'
        const emailMatches = await clerkClient.users.getUserList({
          emailAddress: [input.email],
        })
        if (emailMatches.length === 0) return 'invalidEmail'

        let result: Variant = 'invalidEmail'
        for (const clerkUser of emailMatches) {
          const irisUser = await ctx.prisma.user.findUnique({
            where: {
              id: clerkUser.id,
            },
          })
          if (!irisUser) continue
          if (irisUser.isAdmin && result !== 'success') {
            result = 'alreadyAdmin'
            continue
          }
          await ctx.prisma.user.update({
            where: {
              id: clerkUser.id,
            },
            data: {
              isAdmin: true,
            },
          })
          result = 'success'
        }
        return result
      } catch (_) {
        return 'error'
      }
    }),
})

async function getRandomWords(size: number, language: Language) {
  if (language === 'english') {
    const response = await axios.get<string[]>(
      `https://random-word-api.herokuapp.com/word?number=${size}`,
    )
    return response.data
  }
  if (language === 'spanish') {
    const response = await axios.get<string[]>(
      `https://random-word-api.herokuapp.com/word?lang=es&number=${size}`,
    )
    return response.data
  }
  if (language === 'italian') {
    const response = await axios.get<string[]>(
      `https://random-word-api.herokuapp.com/word?lang=it&number=${size}`,
    )
    return response.data
  }
  if (language === 'german') {
    const response = await axios.get<string[]>(
      `https://random-word-api.herokuapp.com/word?lang=de&number=${size}`,
    )
    return response.data
  }
}
type GetRandomWordsLimitLength = {
  wordsReturned: number
  wordLength: number
  language: Language
}
async function getRandomWordsLimitLength({
  wordsReturned,
  wordLength,
  language,
}: GetRandomWordsLimitLength) {
  const blockSize = Math.ceil(wordsReturned / 3)
  const words = new Array<string>()
  const block1 = await getWords({
    wordsReturned: blockSize,
    wordLength: wordLength,
    language: language,
  })
  const block2 = await getWords({
    wordsReturned: blockSize,
    wordLength: wordLength - 1,
    language: language,
  })
  const block3 = await getWords({
    wordsReturned: blockSize,
    wordLength: wordLength - 2,
    language: language,
  })
  if (block1 === undefined || block2 === undefined || block3 === undefined) {
    return
  }
  block1.forEach((word) => {
    words.push(word)
  })
  block2.forEach((word) => {
    words.push(word)
  })
  block3.forEach((word) => {
    words.push(word)
  })
  return words
    .slice(0, wordsReturned)
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
}

async function getWords({
  wordsReturned,
  wordLength,
  language,
}: GetRandomWordsLimitLength) {
  if (language === 'english') {
    const response = await axios.get<string[]>(
      `https://random-word-api.herokuapp.com/word?number=${wordsReturned}&length=${wordLength}`,
    )
    console.log(response.data)
    return response.data
  }
  if (language === 'spanish') {
    const response = await axios.get<string[]>(
      `https://random-word-api.herokuapp.com/word?lang=es&number=${wordsReturned}&length=${wordLength}`,
    )
    return response.data
  }
  if (language === 'italian') {
    const response = await axios.get<string[]>(
      `https://random-word-api.herokuapp.com/word?lang=it&number=${wordsReturned}&length=${wordLength}`,
    )
    return response.data
  }
  if (language === 'german') {
    const response = await axios.get<string[]>(
      `https://random-word-api.herokuapp.com/word?lang=de&number=${wordsReturned}&length=${wordLength}`,
    )
    return response.data
  }
}

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
    .output(z.array(schemas.speedTest))
    .input(z.number())
    .query(async ({ input, ctx }) => {
      const result = await ctx.prisma.$queryRaw<Array<SpeedQuestion>>(
        Prisma.sql`SELECT * FROM SpeedQuestion ORDER BY RANDOM() LIMIT ${input}`,
      )
      if (result === null || result === undefined) throw new Error('No result')
      return result
    }),

  getRandomWords: publicProcedure
    .input(inputs.randomWords)
    .output(z.array(z.string()).or(z.undefined()))
    .query<string[] | undefined>(async ({ input }) => {
      if (input.max < 0) {
        return getRandomWords(input.number, input.language)
      } else {
        return getRandomWordsLimitLength({
          wordsReturned: input.number,
          wordLength: input.max,
          language: input.language,
        })
      }
    }),

  getWordPairs: publicProcedure
    .input(wordPairProps)
    .output(z.array(wordPairData))
    .query(async ({ input, ctx }) => {
      const result = await ctx.prisma.$queryRaw<Array<WordPair>>(
        Prisma.sql`SELECT * FROM WordPair ORDER BY RAND() LIMIT ${input.count}`,
      )
      if (result === null || result === undefined) throw new Error('No result')
      return result
    }),
})

export const createSpeedTestRouter = createTRPCRouter({
  createSpeedTest: publicProcedure
    .input(schemas.speedTest)
    .output(schemas.speedTest)
    .mutation(async ({ input, ctx }) => {
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

export const createNextExcerciseRouter = createTRPCRouter({
  get: publicProcedure
    .input(schemas.user)
    .output(z.string())
    .query(({ input }) => {
      const next = getNextExercise(input)
      return getNextURL(next)
    }),
})
