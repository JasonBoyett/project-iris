import { router, protectedProcedure } from '../trpc'
import { z } from 'zod'
import type { Language } from '@acme/types'
import axios from 'axios'
import {
  exercise,
  inputs,
  schemas,
  speedTestSchema,
  userSchema,
  wordPairData,
  wordPairProps,
} from '@acme/validators'
import { Prisma, type WordPair } from '@acme/db'
import { SpeedTest } from '@acme/types'
import { getNextExercise, getNextURL } from '@acme/helpers'

const multiTest = speedTestSchema.array()

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
  block1.forEach(word => {
    words.push(word)
  })
  block2.forEach(word => {
    words.push(word)
  })
  block3.forEach(word => {
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

export const excercisePropsRouter = router({
  getSingleSpeedTestProps: protectedProcedure
    .output(speedTestSchema)
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

  getMultipleSpeedTestProps: protectedProcedure
    .output(multiTest)
    .input(z.number())
    .query(async ({ input, ctx }) => {
      const numberOfTables = await ctx.prisma.speedQuestion.count()
      const numbers = new Array<number>()
      for (let i = 1; i <= numberOfTables; i++) {
        numbers.push(i)
      }
      const randomNumbers = numbers
        .sort(() => Math.random() - Math.random())
        .slice(0, input)
      const result = Array<SpeedTest>()
      for (let i = 0; i < input; i++) {
        const question = await ctx.prisma.speedQuestion.findUnique({
          where: {
            id: randomNumbers[i],
          },
        })
        if (question === null || question === undefined)
          throw new Error('No result')
        result.push(question)
      }
      if (result === null || result === undefined) throw new Error('No result')
      return result
    }),

  getRandomWords: protectedProcedure
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

  getWordPairs: protectedProcedure
    .input(wordPairProps)
    .output(wordPairData.array())
    .query(async ({ input, ctx }) => {
      const result = await ctx.prisma.$queryRaw<Array<WordPair>>(
        Prisma.sql`SELECT * FROM WordPair WHERE LENGTH(primaryWord) <= 7 AND LENGTH(secondaryWord) <= 7 ORDER BY RAND() LIMIT ${input.count}`,
      )
      if (result === null || result === undefined) throw new Error('No result')
      return result
    }),

  getNextUrl: protectedProcedure
    .input(userSchema)
    .output(z.string())
    .query(({ input }) => {
      const next = getNextExercise(input)
      return getNextURL(next)
    }),

  getNext: protectedProcedure
    .output(exercise.or(z.undefined()))
    .query(async ({ ctx }) => {
      const id = ctx.auth.userId
      const user = await ctx.prisma.user.findUnique({
        where: {
          id: id,
        },
      })
      const next = getNextExercise(user)
      const result = exercise.safeParse(next)
      if (!result.success) {
        return undefined
      }
      return result.data
    }),
})
