import axios from 'axios'
import { Prisma } from '@prisma/client'
import { z } from 'zod'
import type { SpeedQuestion } from '@prisma/client'
import type { Language, User } from '~/utils/types'
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'
import { schemas, inputs } from '~/utils/validators'
import { getNextExercise, getNextURL } from '~/utils/helpers'
import type { EmailAddress } from '@clerk/nextjs/dist/types/server'

function verifyStudySubject(emailAddresses: EmailAddress[]) {
  emailAddresses.forEach((email) => {
    if (email.emailAddress.endsWith('.edu')){
      return true
    }
  })
  return false
}

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
            isStudySubject: verifyStudySubject(ctx.auth.user?.emailAddresses ?? []),
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
          lastLetterMatcher: input.lastLetterMatcher,
          numberGuesserFigures: input.numberGuesserFigures,
          isAdmin: input.isAdmin,
          isUsingChecklist: input.isUsingChecklist,
          isStudySubject: verifyStudySubject(ctx.auth.user?.emailAddresses ?? []),
          font: input.font,
          language: input.language,
          tested: input.tested,
        },
      })
    }),
})

async function getRandomWords(size: number, language: Language) {
  if (language === 'spanish') {
    const response = await axios.get<string[]>(
      `https://random-word-api.herokuapp.com/word?lang=es&number=${size}`
    )
    return response.data
  }
  if (language === 'english') {
    const response = await axios.get<string[]>(
      `https://random-word-api.herokuapp.com/word?number=${size}`,
    )
    return response.data
  }

}
type GetRandomWordsLimitLength = {
  wordsReturned: number,
  wordLength: number,
  language: Language
}
async function getRandomWordsLimitLength({ wordsReturned, wordLength, language }: GetRandomWordsLimitLength) {
  console.log('test2')
  if (language === 'spanish') {
    const response = await axios.get<string[]>(
      `https://random-word-api.herokuapp.com/word?lang=es&number=${wordsReturned}&length=${wordLength}`
    )
    return response.data
  }
  if (language === 'english') {
    const response = await axios.get<string[]>(
      `https://random-word-api.herokuapp.com/word?number=${wordsReturned}&length=${wordLength}`
    )
    console.log(response.data)
    return response.data
  }
}

function getCappedRandomWords({ wordsReturned, wordLength, language }: GetRandomWordsLimitLength) {

  const MIN_WORD_LENGTH = 3
  const words = new Array<string>()
  let number = Math.random() * wordsReturned
  let length = wordLength

  while (words.length < wordsReturned) {
    if (length <= MIN_WORD_LENGTH) {
      number = wordsReturned - words.length
      length = MIN_WORD_LENGTH
    }
    getRandomWordsLimitLength({
      wordsReturned: number,
      wordLength: length,
      language: language
    }).then((result) => {
      console.log(result)
      result?.forEach((word) => {
        words.push(word)
      })
    }).catch((err) => console.log(err))
    length = length - 1

    console.log(words.length)
  }
  return words
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
      if (!input.max) {
        return getRandomWords(input.number, input.language)
      }
      else {
        return getRandomWordsLimitLength({
          wordsReturned: input.number,
          wordLength: input.max,
          language: input.language,
        })
      }
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
    })
})

export const createNextExcerciseRouter = createTRPCRouter({
  get: publicProcedure
    .input(schemas.user)
    .output(z.string())
    .query(({ input }) => {
      const next = getNextExercise(input)
      return getNextURL(next)
    })
})
